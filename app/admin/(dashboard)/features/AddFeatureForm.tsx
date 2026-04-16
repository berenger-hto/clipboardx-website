"use client"

import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import {
    Dialog,
    DialogClose,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogPanel,
    DialogPopup,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { AlertCircleIcon, ImageIcon, UploadIcon, XIcon } from "lucide-react";
import { Field, FieldLabel, FieldDescription } from "@/components/ui/field";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FormEvent, useState } from "react";
import { Select, SelectItem, SelectPopup, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useFileUpload } from "@/hooks/use-file-upload";
import { useRouter } from "next/navigation";
import { toastManager } from "@/components/ui/toast";
import type { APIResponse } from "@/types/types";
import { useQueryClient } from "@tanstack/react-query";
import { createClient } from '@supabase/supabase-js'

export function AddFeatureForm() {
    const router = useRouter()
    const [isOpen, setIsOpen] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const maxLength = 200
    const [description, setDescription] = useState("")
    const items = [
        { label: "Application mobile", value: "mobile" },
        { label: "Application desktop", value: "desktop" },
    ]

    const maxSizeMB = 2
    const maxSize = maxSizeMB * 1024 * 1024

    const [
        { files, isDragging, errors },
        {
            handleDragEnter,
            handleDragLeave,
            handleDragOver,
            handleDrop,
            openFileDialog,
            removeFile,
            getInputProps,
        },
    ] = useFileUpload({
        accept: "image/svg+xml,image/png,image/jpeg,image/jpg,image/gif",
        maxSize,
    })
    const previewUrl = files[0]?.preview || null;

    const queryClient = useQueryClient()

    const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!)
    const uploadFile = async (filename: string, file: File) => {
        return await supabase.storage.from('features').upload(filename, file)
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (isSubmitting) return

        const formData = new FormData(e.currentTarget)
        const entries = Object.fromEntries(formData) as Object

        if (Object.values(entries as string[] | File[]).some(data => typeof data === "string" && data.trim().length === 0)) {
            toastManager.add({
                title: "Oops !",
                description: "Renseignez tous les champs",
                type: "warning"
            })

            return
        }

        if (!files[0]) {
            toastManager.add({
                title: "Oops !",
                description: "Veuillez sélectionner une image",
                type: "warning"
            })
            return
        }

        try {
            setIsSubmitting(true)
            const [imageName, extension] = files[0].file.name.split(".")

            const imageSrc = imageName + "-" + Date.now() + "." + extension
            const payload = {
                ...entries,
                imageSrc,
            }

            const { error, data } = await uploadFile(imageSrc, files[0].file as File)
            
            if (error) {
                console.error(error)
                console.log(data)
                toastManager.add({
                    title: "Oops !",
                    description: "L'image n'a pas pu être uploadée",
                    type: "error"
                })
                return
            }

            const response = await fetch("/api/features", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            })

            const res = await response.json() as APIResponse

            if (res.status !== 201) {
                toastManager.add({
                    title: "Oops !",
                    description: res.message,
                    type: "error"
                })
                return
            }

            toastManager.add({
                title: "Succès !",
                description: "Fonctionnalité ajoutée avec succès",
                type: "success"
            })

            setIsOpen(false)
            setDescription("")
            removeFile(files[0].id)
            router.refresh()
            queryClient.invalidateQueries({ queryKey: ["features"] })
        } catch (error) {
            console.error("Submission error:", error)
            toastManager.add({
                title: "Oops !",
                description: "Une erreur est survenue",
                type: "error"
            })
        } finally {
            setIsSubmitting(false)
        }
    }

    return <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger className="w-26 fixed bottom-4 right-4" render={<Button className="flex items-center" />}>
            <Plus size={18} />
            Ajouter
        </DialogTrigger>
        <DialogPopup className="@container/dialog">
            <Form className="contents" onSubmit={handleSubmit}>
                <DialogHeader>
                    <DialogTitle>Ajouter une feature</DialogTitle>
                    <DialogDescription>
                        Ajouter une nouvelle fonctionnalité à l&apos;application.
                    </DialogDescription>
                </DialogHeader>
                <DialogPanel className="grid gap-4">
                    <Field>
                        <FieldLabel>Titre</FieldLabel>
                        <Input size="lg" type="text" name="title" placeholder="Titre de la feature" />
                    </Field>
                    <Field>
                        <FieldLabel>Type</FieldLabel>
                        <Select aria-label="Select framework" items={items} name="type">
                            <SelectTrigger size="lg">
                                <SelectValue placeholder="Sélectionner le type" />
                            </SelectTrigger>
                            <SelectPopup>
                                {items.map(({ label, value }) => (
                                    <SelectItem key={value} value={value}>
                                        {label}
                                    </SelectItem>
                                ))}
                            </SelectPopup>
                        </Select>
                    </Field>
                    <Field>
                        <FieldLabel>Image</FieldLabel>
                        <div className="flex flex-col gap-2 w-full">
                            <div className="relative">
                                <div
                                    className="relative flex min-h-52 flex-col items-center justify-center overflow-hidden rounded-xl border border-input border-dashed p-4 transition-colors has-[input:focus]:border-ring has-[input:focus]:ring-[3px] has-[input:focus]:ring-ring/50 data-[dragging=true]:bg-accent/50"
                                    data-dragging={isDragging || undefined}
                                    onDragEnter={handleDragEnter}
                                    onDragLeave={handleDragLeave}
                                    onDragOver={handleDragOver}
                                    onDrop={handleDrop}
                                >
                                    <input
                                        {...getInputProps()}
                                        aria-label="Upload image file"
                                        className="sr-only"
                                        name="imageSrc"
                                    />
                                    {previewUrl ? (
                                        <div className="absolute inset-0 flex items-center justify-center p-4">
                                            <img
                                                alt={files[0]?.file?.name || "Uploaded image"}
                                                className="mx-auto max-h-full rounded object-contain"
                                                src={previewUrl}
                                            />
                                        </div>
                                    ) : (
                                        <div className="flex flex-col items-center justify-center px-4 py-3 text-center">
                                            <div
                                                aria-hidden="true"
                                                className="mb-2 flex size-11 shrink-0 items-center justify-center rounded-full border bg-background"
                                            >
                                                <ImageIcon className="size-4 opacity-60" />
                                            </div>
                                            <p className="mb-1.5 font-medium text-sm">Déposez l'image ici</p>
                                            <p className="text-muted-foreground text-xs">
                                                SVG, PNG, JPG ou GIF (max. {maxSizeMB}MB)
                                            </p>
                                            <Button
                                                className="mt-4"
                                                onClick={openFileDialog}
                                                variant="outline"
                                            >
                                                <UploadIcon
                                                    aria-hidden="true"
                                                    className="-ms-1 size-4 opacity-60"
                                                />
                                                Sélectionnez une image
                                            </Button>
                                        </div>
                                    )}
                                </div>

                                {previewUrl && (
                                    <div className="absolute top-4 right-4">
                                        <button
                                            aria-label="Remove image"
                                            className="z-50 flex size-8 cursor-pointer items-center justify-center rounded-full bg-black/60 text-white outline-none transition-[color,box-shadow] hover:bg-black/80 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
                                            onClick={() => removeFile(files[0]?.id)}
                                            type="button"
                                        >
                                            <XIcon aria-hidden="true" className="size-4" />
                                        </button>
                                    </div>
                                )}
                            </div>

                            {errors.length > 0 && (
                                <div
                                    className="flex items-center gap-1 text-destructive text-xs"
                                    role="alert"
                                >
                                    <AlertCircleIcon className="size-3 shrink-0" />
                                    <span>{errors[0]}</span>
                                </div>
                            )}
                        </div>
                    </Field>
                    <Field>
                        <FieldLabel>Description</FieldLabel>
                        <Textarea
                            aria-label="Message"
                            maxLength={maxLength}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Description de la feature"
                            value={description}
                            name="description"
                        />
                        <FieldDescription>
                            <span className="tabular-nums">{maxLength - description.length}</span>{" "}
                            caractères restants
                        </FieldDescription>
                    </Field>
                </DialogPanel>
                <DialogFooter>
                    <DialogClose render={<Button variant="ghost" />} onClick={() => setDescription("")}>
                        Annuler
                    </DialogClose>
                    <Button type="submit" loading={isSubmitting}>Ajouter</Button>
                </DialogFooter>
            </Form>
        </DialogPopup>
    </Dialog>
}