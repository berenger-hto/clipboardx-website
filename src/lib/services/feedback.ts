import { FeedbackData } from "@/types/types";
import { feedbackValidator } from "../validators/feedback";
import { error } from "../utils/error";
import { ZodError } from "zod";
import { prisma } from "../prisma";

export class Feedback {
    static async add(data: FeedbackData) {
        try {
            const validateData = feedbackValidator.parse(data)
            const insert = await prisma.feedback.create({
                data: validateData
            })
            return { message: insert ? "Success" : "Error", status: insert ? 201 : 500 }
        } catch (e) {
            const err = error(e as Error | ZodError)
            console.error(err)
            return err
        }
    }

    static async getAll() {
        try {
            const feedbacks = await prisma.feedback.findMany({
                orderBy: {
                    createdAt: "desc"
                }
            })
            return { data: feedbacks, status: 200 }
        } catch (e) {
            const err = error(e as Error | ZodError)
            console.error(err)
            return err
        }
    }
}