import { z } from "zod";

export const feedbackValidator = z.object({
    name: z.string("Le nom est requis").min(1, "Le nom est requis"),
    email: z.email("L'email est requis"),
    feedbackType: z.enum(["suggestion", "bug", "question", "other"], { error: "Le type est requis" }),
    message: z.string("Le message est requis").min(1, "Le message est requis")
})