"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { createClient } from "@supabase/supabase-js"

interface FeatureCardProps {
    title: string
    description: string
    imageSrc: string
    reverse?: boolean
    className?: string
}

export function FeatureCard({
    title,
    description,
    imageSrc,
    reverse = false,
    className
}: FeatureCardProps) {
    const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!)
    const { data } = supabase.storage.from('features').getPublicUrl('original-e6754e319cde71d1495dde8e4f1a7555-1776371717874.png')

    console.log(data)
    return <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{
            duration: 0.8,
            ease: [0.21, 0.47, 0.32, 0.98]
        }}
        className={cn(
            "group relative grid grid-cols-1 md:grid-cols-2 gap-12 items-center p-4 md:p-8 rounded-[48px] duration-500 overflow-hidden",
            className
        )}
    >
        {/* Background Glow */}
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/10 rounded-full blur-[80px] transition-opacity duration-700 pointer-events-none" />

        <div className={cn(
            "relative aspect-square md:aspect-video rounded-[32px] overflow-hidden",
            reverse ? "md:order-last" : ""
        )}>
            <div className="absolute inset-0 bg-linear-to-br from-primary/20 via-transparent to-transparent z-10 opacity-50" />
            <Image
                src={data.publicUrl}
                alt={title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
            />
        </div>

        <div className="flex flex-col gap-6 relative z-20">
            <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold font-space leading-tight tracking-tight">
                    {title}
                </h3>
                <p className="text-lg md:text-xl text-primary/60 leading-relaxed font-light">
                    {description}
                </p>
            </div>

        </div>
    </motion.div>
}