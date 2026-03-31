import { ZodError } from "zod";
import { Prisma } from "@/generated/client";

export function error(e: Error | ZodError | Prisma.PrismaClientKnownRequestError, prismaErrorMessage?: string) {
    return {
        message: e instanceof ZodError ? e.issues[0].message : e instanceof Prisma.PrismaClientKnownRequestError ? prismaErrorMessage ?? "Une erreur s'est produite" : e.message,
        status: e instanceof ZodError ? 400 : e instanceof Prisma.PrismaClientKnownRequestError ? 409 : 500
    }
}