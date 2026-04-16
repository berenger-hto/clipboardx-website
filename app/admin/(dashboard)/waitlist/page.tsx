import { WaitlistCard } from "./WaitlistCard"
import type { APIResponse, WaitlistData } from "@/types/types"

export default async function AdminWaitlistPage() {
    const data = await fetch(`${process.env.HOSTNAME}/api/waitlist`)
    const res = await data.json() as APIResponse & { data: WaitlistData[] }

    console.log(res)

    return (
        <div className="p-6 space-y-8 max-w-7xl mx-auto">
            <div className="flex flex-col gap-2">
                <h1 className="text-4xl font-black tracking-tight font-space italic uppercase">
                    Waitlist
                </h1>
                <p className="text-muted-foreground">
                    Liste des utilisateurs inscrits pour l'accès anticipé à ClipboardX.
                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {res.data.length > 0 ? res.data.map((entry, index) => (
                    <WaitlistCard key={index} data={entry} />
                )) : (
                    <div className="flex flex-col items-center justify-center py-20 text-center space-y-4">
                        <p className="text-xl font-medium text-muted-foreground">La liste d'attente est vide.</p>
                    </div>
                )}
            </div>
        </div>
    )
}