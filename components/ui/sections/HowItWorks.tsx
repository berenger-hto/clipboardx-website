"use client"

import { motion } from "framer-motion";
import { Copy, Search, LayoutList, Smartphone, Laptop, MessageSquare, Check, RefreshCw } from "lucide-react";

const STEPS = [
    {
        number: 1,
        title: "Copie un texte",
        description: "Utilisez votre raccourci Cmd/Ctrl+C habituel pour copier n'importe quel contenu.",
        illustration: (
            <div className="relative w-full h-full flex items-center justify-center">
                <div className="relative w-32 h-32 rounded-full bg-primary/20 flex items-center justify-center overflow-hidden">
                    <div className="grid grid-cols-2 gap-2 opacity-40">
                        <Copy size={20} />
                        <MessageSquare size={20} />
                        <LayoutList size={20} />
                        <RefreshCw size={20} />
                    </div>
                    {/* Magnifying glass metaphor */}
                    <motion.div 
                        animate={{ 
                            x: [0, 10, 0, -10, 0],
                            y: [-10, 0, 10, 0, -10]
                        }}
                        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 flex items-center justify-center"
                    >
                        <div className="w-16 h-16 rounded-full border-4 border-zinc-400 bg-zinc-800/80 backdrop-blur-sm flex items-center justify-center relative translate-x-2 translate-y-2">
                            <Search className="text-white" size={24} />
                        </div>
                    </motion.div>
                </div>
            </div>
        )
    },
    {
        number: 2,
        title: "ClipboardX le sauvegarde",
        description: "Votre historique est instantanément enregistré localement sur votre ordinateur.",
        illustration: (
            <div className="relative w-full h-full flex flex-col items-center justify-center gap-3 p-4">
                {[1, 2, 3].map((i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1 - (i * 0.2), x: 0 }}
                        transition={{ delay: i * 0.2 }}
                        className="w-full h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center gap-3 px-3"
                    >
                        <div className="w-5 h-5 rounded bg-primary/20" />
                        <div className="flex-1 space-y-1">
                            <div className="w-full h-1 bg-primary/20 rounded" />
                            <div className="w-2/3 h-1 bg-primary/10 rounded" />
                        </div>
                    </motion.div>
                ))}
            </div>
        )
    },
    {
        number: 3,
        title: "Retrouve-le partout",
        description: "Accédez à vos données sur tous vos appareils via votre réseau local.",
        illustration: (
            <div className="relative w-full h-full flex items-center justify-center">
                <div className="relative w-full max-w-[200px] aspect-square flex flex-col gap-3">
                    <div className="self-end flex items-center gap-2 px-3 py-2 rounded-2xl rounded-tr-none bg-primary/20 border border-primary/30">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <div className="w-12 h-1 bg-primary/40 rounded" />
                    </div>
                    <div className="self-start flex items-center gap-2 px-3 py-2 rounded-2xl rounded-tl-none bg-zinc-800 border border-zinc-700">
                        <Smartphone size={12} className="text-zinc-400" />
                        <div className="w-16 h-1 bg-zinc-600 rounded" />
                    </div>
                    <div className="self-end flex items-center gap-2 px-3 py-2 rounded-2xl rounded-tr-none bg-primary/30 border border-primary/40">
                        <div className="w-10 h-1 bg-primary/50 rounded" />
                        <Check size={12} className="text-primary" />
                    </div>
                </div>
            </div>
        )
    }
];

export function HowItWorks() {
    return (
        <section className="py-24 px-6 relative bg-background" id="how-it-works">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl md:text-5xl font-bold font-poppins mb-4"
                    >
                        Comment ça marche ?
                    </motion.h2>
                    <p className="text-primary/60 text-lg">Trois étapes simples pour reprendre le contrôle de vos données.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {STEPS.map((step, index) => (
                        <motion.div
                            key={step.number}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className="flex flex-col rounded-[2.5rem] bg-card/40 border border-primary/5 backdrop-blur-sm overflow-hidden p-8 md:p-10 group hover:border-primary/20 transition-all duration-500"
                        >
                            {/* Illustration area */}
                            <div className="h-64 mb-10 overflow-hidden rounded-3xl bg-linear-to-b from-primary/5 to-transparent relative">
                                {step.illustration}
                            </div>

                            {/* Number circle */}
                            <div className="flex justify-center mb-6">
                                <div className="w-10 h-10 rounded-full bg-primary text-background font-bold flex items-center justify-center text-lg">
                                    {step.number.toString().padStart(2, '0')}
                                </div>
                            </div>

                            <div className="text-center">
                                <h3 className="text-2xl font-bold font-poppins mb-4 group-hover:text-primary transition-colors duration-300">
                                    {step.title}
                                </h3>
                                <p className="text-primary/60 leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
