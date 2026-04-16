import { prisma } from "@/lib/prisma"
import { ZodError } from "zod"
import { waitlistUserSchema } from "../validators/waitlist"
import { error } from "../utils/error"

export class Waitlist {
    static async add(email: string) {
        try {
            const data = waitlistUserSchema.parse({ email })
            const insert = await prisma.waitlistUser.create({
                data
            })
            return { message: insert ? "Success" : "Error", status: insert ? 201 : 500 }
        } catch (e) {
            const err = error(e as Error | ZodError, "Vous êtes déjà inscrit")
            console.error(err)
            return err
        }
    }

    static async getAll() {
        try {
            const users = await prisma.waitlistUser.findMany()
            return { data: users, status: 200 }
        } catch (e) {
            const err = error(e as Error | ZodError, "Vous êtes déjà inscrit")
            console.error(err)
            return err
        }
    }
}