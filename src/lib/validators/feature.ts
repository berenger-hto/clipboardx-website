import z from "zod"

export const featureSchema = z.object({
    title: z.string("Le titre est requis").min(1, "Le titre est requis"),
    description: z.string("La description est requise").min(1, "La description est requise"),
    imageSrc: z.string("L'image est requise").min(1, "L'image est requise"),
    type: z.enum(["mobile", "desktop"], { error: "Le type est requis" })
})