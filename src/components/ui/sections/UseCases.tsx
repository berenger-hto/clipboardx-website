"use client"

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const PERSONAS = [
    {
        title: "Pour les développeurs",
        description: "Garde un accès rapide à tes extraits de code, commandes terminal et liens utiles. Plus besoin de chercher dans tes anciens projets ou de recopier plusieurs fois les mêmes éléments.",
        examples: [
            "Snippets de code réutilisables",
            "Commandes Git ou CLI",
            "URLs de documentation",
            "Configurations fréquemment utilisées"
        ]
    },
    {
        title: "Pour les étudiants",
        description: "Centralise toutes les informations que tu copies pendant tes recherches. Retrouve facilement tes notes, extraits de cours et ressources importantes.",
        examples: [
            "Définitions et résumés",
            "Extraits de cours",
            "Liens vers des articles ou vidéos",
            "Réponses trouvées en ligne"
        ]
    },
    {
        title: "Pour le travail",
        description: "Gagne du temps en gardant sous la main les informations que tu utilises régulièrement. ClipboardX te permet de rester organisé sans effort.",
        examples: [
            "Liens importants",
            "Messages ou réponses fréquentes",
            "Informations clients",
            "Données copiées dans tes outils de travail"
        ]
    }
];

export function UseCases() {
    return (
        <section className="py-24 px-6 relative bg-background overflow-hidden" id="use-cases">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-24">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold font-space px-4"
                    >
                        Très sous-estimé, mais puissant :
                    </motion.h2>
                </div>

                <div className="space-y-0">
                    {PERSONAS.map((persona, index) => (
                        <motion.div 
                            key={persona.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.08 }}
                            className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-8 lg:gap-24 py-12 md:py-16 border-b border-primary/5 last:border-0 group"
                        >
                            {/* Left Column: Title */}
                            <div className="flex flex-col justify-start">
                                <h3 className="text-2xl md:text-4xl font-bold font-space group-hover:text-primary transition-colors duration-300 leading-tight">
                                    {persona.title}
                                </h3>
                            </div>

                            {/* Right Column: Description + List */}
                            <div className="space-y-10">
                                <p className="text-primary/60 text-lg md:text-xl leading-relaxed max-w-2xl">
                                    {persona.description}
                                </p>
                                
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                                    {persona.examples.map((example) => (
                                        <div key={example} className="flex items-center gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0 opacity-40" />
                                            <span className="text-primary/80 font-medium">{example}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Subtle background glow */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 blur-[80px] rounded-full pointer-events-none" />
        </section>
    );
}
