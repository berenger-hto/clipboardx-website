"use client";

import { CircleAlertIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardPanel,
    CardTitle,
} from "@/components/ui/card";
import { Field, FieldLabel } from "@/components/ui/field";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectItem,
    SelectPopup,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { FormEvent, useState, useRef } from "react";
import { toastManager } from "../ui/toast";
import { APIResponse } from "@/types/types";
import { Spinner } from "../ui/spinner";

const feedbackOptions = [
    { label: "Bug", value: "bug" },
    { label: "Suggestion", value: "suggestion" },
    { label: "Question", value: "question" },
    { label: "Autre", value: "other" },
];

export function FeedbackForm() {
    const [isLoading, setIsLoading] = useState(false)
    const formRef = useRef<HTMLFormElement>(null)

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const data = Object.fromEntries(formData) as Object

        if ((Object.values(data) as string[]).some(value => value.length === 0)) {
            toastManager.add({
                title: "Oops !",
                description: "Veuillez remplir tous les champs",
                type: "warning"
            })
            return
        }

        setIsLoading(true)

        try {
            const response = await fetch("api/feedback", {
                headers: {
                    "Accept": "application/json"
                },
                method: "POST",
                body: JSON.stringify(data)
            })

            const res = await response.json() as APIResponse

            if (res.status !== 200) {
                toastManager.add({
                    title: "Oops !",
                    description: res.message,
                    type: "error"
                })
                return
            }

            toastManager.add({
                title: "Nous vous remercions !",
                description: res.message,
                type: "success"
            })

           formRef.current?.reset()
        } catch (e) {
            toastManager.add({
                title: "Oops !",
                description: "Une erreur est survenue",
                type: "error"
            })
            return
        } finally {
            setIsLoading(false)
        }

    };

    return (
        <Card className="w-full max-w-md relative z-10 backdrop-blur-sm bg-card/80">
            <CardHeader>
                <CardTitle>Donner un feedback</CardTitle>
                <CardDescription>
                    Ton avis nous aide à améliorer ClipboardX.
                </CardDescription>
            </CardHeader>
            <CardPanel>
                <Form onSubmit={handleSubmit} ref={formRef}>
                    <Field>
                        <FieldLabel>Nom</FieldLabel>
                        <Input placeholder="Ton nom" type="text" name="name" />
                    </Field>
                    <Field>
                        <FieldLabel>Email</FieldLabel>
                        <Input placeholder="Ton email" type="email" name="email" />
                    </Field>
                    <Field>
                        <FieldLabel>Type de feedback</FieldLabel>
                        <Select
                            defaultValue="suggestion"
                            items={feedbackOptions}
                            name="feedbackType"
                        >
                            <SelectTrigger>
                                <SelectValue />
                            </SelectTrigger>
                            <SelectPopup>
                                {feedbackOptions.map(({ label, value }) => (
                                    <SelectItem key={value} value={value}>
                                        {label}
                                    </SelectItem>
                                ))}
                            </SelectPopup>
                        </Select>
                    </Field>
                    <Field>
                        <FieldLabel>Message</FieldLabel>
                        <Textarea placeholder="Ton message..." rows={4} name="message" />
                    </Field>
                    <Button className="w-full" type="submit" disabled={isLoading}>
                        {isLoading ? 
                            <>
                                <Spinner /> En cours 
                            </> : 
                            "Envoyer le feedback"
                        }
                    </Button>
                </Form>
            </CardPanel>
            <CardFooter>
                <div className="flex gap-1 text-muted-foreground text-xs">
                    <CircleAlertIcon className="size-3 h-lh shrink-0" />
                    <p>Ce formulaire nous aide beaucoup, merci !</p>
                </div>
            </CardFooter>
        </Card>
    );
}
