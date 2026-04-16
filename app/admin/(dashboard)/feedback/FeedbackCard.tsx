"use client"

import { FeedbackData } from "@/types/types"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

type Props = {
    data: FeedbackData
}

export function FeedbackCard({ data }: Props) {
    const typeLabel = {
        suggestion: "Suggestion",
        bug: "Bug",
        question: "Question",
        other: "Autre"
    }

    const typeVariant = {
        suggestion: "default",
        bug: "destructive",
        question: "secondary",
        other: "outline"
    } as const

    const getInitials = (name: string) => {
        return name.split(" ").map(n => n[0]).join("").toUpperCase().substring(0, 2)
    }

    return <Card className="group relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-primary/10 bg-linear-to-b from-card to-card/50">
        <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        <CardHeader className="relative pb-2">
            <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                    <Avatar size="lg" className="border-2 border-primary/10">
                        <AvatarFallback className="bg-primary/5 text-primary font-bold">
                            {getInitials(data.name)}
                        </AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                        <CardTitle className="text-lg font-bold tracking-tight">
                            {data.name}
                        </CardTitle>
                        <CardDescription className="text-xs font-mono opacity-70">
                            {data.email}
                        </CardDescription>
                    </div>
                </div>
                <Badge
                    variant={typeVariant[data.feedbackType]}
                    className="font-bold tracking-wider uppercase text-[10px] px-2"
                >
                    {typeLabel[data.feedbackType]}
                </Badge>
            </div>
        </CardHeader>

        <CardContent className="relative pt-4">
            <div className="relative">
                <span className="absolute -top-4 -left-2 text-4xl text-primary/10 font-serif pointer-events-none">"</span>
                <p className="text-secondary-foreground/90 leading-relaxed font-medium pl-2 italic">
                    {data.message}
                </p>
            </div>
        </CardContent>

        <div className={`absolute bottom-0 left-0 h-1 w-full transition-all duration-500 opacity-30 group-hover:opacity-100 ${data.feedbackType === 'bug' ? 'bg-destructive' :
                data.feedbackType === 'suggestion' ? 'bg-primary' :
                    'bg-secondary'
            }`} />
    </Card>
}