import { FeedbackCard } from "./FeedbackCard"
import type { APIResponse, FeedbackData } from "@/types/types"

export default async function AdminFeedbackPage() {
    const data = await fetch(`${process.env.HOSTNAME}/api/feedback`)
    const res = await data.json() as APIResponse & { data: FeedbackData[] }

    return <div className="p-6 space-y-8 max-w-7xl mx-auto">
        <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-black tracking-tight font-space italic uppercase">
                Feedback
            </h1>
            <p className="text-muted-foreground">
                Retrouvez ici tous les retours envoyés par les utilisateurs de ClipboardX.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {res.data.length > 0 ? res.data.map((feedback, index) => (
                <FeedbackCard key={index} data={feedback} />
            )) : (
                <div className="flex flex-col items-center justify-center py-20 text-center space-y-4">
                    <p className="text-xl font-medium text-muted-foreground">Aucun feedback reçu pour le moment.</p>
                </div>
            )}
        </div>
    </div>
}