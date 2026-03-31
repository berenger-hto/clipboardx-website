import { z } from "zod"

export const waitlistUserSchema = z.object({
    email: z.email("Adresse mail invalide")
})