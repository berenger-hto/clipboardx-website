"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Mail, Copy, Check } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { toastManager } from "@/components/ui/toast"
import type { WaitlistData } from "@/types/types"

type Props = {
    data: WaitlistData
}

export function WaitlistCard({ data }: Props) {
    const [copied, setCopied] = useState(false)
    
    const formattedDate = new Intl.DateTimeFormat('fr-FR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    }).format(new Date(data.createdAt))

    const copyToClipboard = () => {
        navigator.clipboard.writeText(data.email)
        setCopied(true)
        toastManager.add({
            title: "Copié !",
            description: "L'adresse email a été copiée dans le presse-papier.",
            type: "success"
        })
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <Card className="group relative overflow-hidden transition-all duration-300 hover:shadow-lg border-primary/10 bg-linear-to-b from-card to-card/50">
            <CardContent className="p-4">
                <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4 min-w-0">
                        <div className="flex-shrink-0 size-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                            <Mail size={20} />
                        </div>
                        <div className="flex flex-col min-w-0">
                            <h3 className="text-sm font-bold truncate group-hover:text-primary transition-colors">
                                {data.email}
                            </h3>
                            <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground font-mono">
                                <Calendar size={10} />
                                <span>{formattedDate}</span>
                            </div>
                        </div>
                    </div>
                    
                    <Button 
                        variant="ghost" 
                        size="icon" 
                        onClick={copyToClipboard}
                        className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary/10 hover:text-primary"
                    >
                        {copied ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
                    </Button>
                </div>
            </CardContent>
            
            {/* Subtile background decoration */}
            <div className="absolute -bottom-6 -right-6 size-24 bg-primary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
        </Card>
    )
}