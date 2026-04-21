import { FeatureData } from "@/types/types"
import { featureSchema } from "../validators/feature"
import { error } from "../utils/error"
import { ZodError } from "zod"
import { prisma } from "../prisma"
import { authorize } from "../utils/authorize"

export class Feature {
    static async add(featureData: FeatureData) {
        try {
            const { isAuthorized } = await authorize()
            if (!isAuthorized) {
                return { status: 401, message: "Unauthorized" }
            }
            const data = featureSchema.parse(featureData)
            const save = await prisma.feature.create({ data })
            return { message: save ? "Success" : "Error", status: save ? 201 : 500 }
        } catch (e) {
            const err = error(e as Error | ZodError, "Erreur lors de l'ajout de la fonctionnalité")
            return err
        }
    }

    static async getAll() {
        try {
            const features = await prisma.feature.findMany({ 
                orderBy: { 
                    createdAt: "desc" 
                } 
            })
            return { status: 200, data: features }
        } catch (e) {
            const err = error(e as Error)
            return err
        }
    }
}