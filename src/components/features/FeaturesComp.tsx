"use client"

import { Button } from "../ui/button";
import { FeatureCard } from "./FeatureCard"
import { useState } from "react";

type Props = {
    data: {
        title: string;
        description: string;
        imageSrc: string;
        type: string;
    }[]
}

const FILTER_BUTTONS = [
    {
        label: "Tout",
        value: "all"
    },
    {
        label: "Mobile",
        value: "mobile"
    },
    {
        label: "Desktop",
        value: "desktop"
    }
] as const

export function FeaturesComp({ data }: Props) {
    const [activeFilter, setActiveFilter] = useState<(typeof FILTER_BUTTONS)[number]["value"]>("all")

    const filteredData = activeFilter === "all"
        ? data
        : data.filter(item => item.type === activeFilter)

    return (
        <main className="flex-1 py-32 px-6 mt-14">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-24">
                    <h1 className="text-5xl md:text-7xl font-bold font-space mb-6 bg-linear-to-b from-foreground to-foreground/70 bg-clip-text text-transparent">
                        Quoi de neuf ?
                    </h1>
                    <p className="text-xl text-primary/60 max-w-2xl mx-auto font-light leading-relaxed">
                        Découvrez les dernières fonctionnalités conçues pour transformer votre productivité tout en respectant votre vie privée.
                    </p>
                    <div className="mt-5 flex gap-2 items-center justify-center">
                        {FILTER_BUTTONS.map((btn, index) => (
                            <Button
                                key={index}
                                variant={activeFilter === btn.value ? "default" : "secondary"}
                                onClick={() => setActiveFilter(btn.value)}
                            >
                                {btn.label}
                            </Button>
                        ))}
                    </div>
                </div>

                <div className="space-y-12 md:space-y-24">
                    {!filteredData.length && <p className="text-center font-bold font-mono text-xl">Aucune feature pour {FILTER_BUTTONS.find(btn => btn.value === activeFilter)?.label}</p>}
                    {filteredData.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            reverse={index % 2 === 1}
                            {...feature}
                        />
                    ))}
                </div>

                <section className="mt-32 p-12 rounded-[48px] bg-primary/5 border border-primary/10 text-center">
                    <h2 className="text-3xl font-bold font-space mb-4">Prêt à essayer ?</h2>
                    <p className="text-primary/60 mb-8 max-w-xl mx-auto">Rejoignez des milliers d'utilisateurs qui ont déjà fait le choix d'un presse-papier plus sûr et plus rapide.</p>
                    <a
                        href="/#download"
                        className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    >
                        Télécharger ClipboardX
                    </a>
                </section>
            </div>
        </main>
    )
}