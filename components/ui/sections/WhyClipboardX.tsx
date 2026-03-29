"use client"

import { motion } from "framer-motion";
import { XCircle, CheckCircle2, RefreshCw } from "lucide-react";

const PAIN_POINTS = [
    "Perte définitive de données importantes lors du redémarrage",
    "Stress constant de ne pas avoir sauvegardé un lien copié",
    "Aller-retours incessants entre vos différentes fenêtres",
    "Impossible de retrouver un texte copié il y a 2 heures",
    "Historique limité à un seul élément par défaut",
    "Perte de temps en recherches manuelles infructueuses"
];

const BENEFITS = [
    {
        title: "Historique Illimité",
        text: "Ne perdez plus rien, tout est sauvegardé en local.",
        position: "top-0 left-0",
        rotation: -2
    },
    {
        title: "Recherche Instantanée",
        text: "Retrouvez n'importe quel texte en une fraction de seconde.",
        position: "top-20 right-0",
        rotation: 1
    },
    {
        title: "Sérénité Totale",
        text: "Copiez l'esprit tranquille, ClipboardX veille au grain.",
        position: "bottom-32 left-10",
        rotation: 3
    },
    {
        title: "Confidentialité",
        text: "Vos données ne quittent jamais votre appareil.",
        position: "bottom-0 right-10",
        rotation: -1
    }
];

export function WhyClipboardX() {
    return (
        <section className="py-24 px-6 relative bg-background overflow-hidden" id="why">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-primary font-bold tracking-widest text-sm mb-4 uppercase"
                    >
                        LE CONSTAT
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-5xl font-bold font-poppins mb-6 max-w-4xl mx-auto leading-tight"
                    >
                        Plus qu'un simple copier-coller
                    </motion.h2>
                </div>

                <div className="relative p-6 md:p-12 rounded-[3rem] bg-card/10 border border-primary/5 backdrop-blur-sm overflow-hidden">
                    <div className="relative z-10">
                        {/* Headers Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
                            <div className="flex flex-col items-center justify-center gap-3">
                                <span className="text-xl md:text-2xl font-bold opacity-40">Sans</span>
                                <div className="flex items-center gap-2">
                                    <RefreshCw size={24} className="opacity-20" />
                                    <span className="text-xl md:text-2xl font-bold font-poppins opacity-20">ClipboardX</span>
                                </div>
                            </div>
                            
                            <div className="flex flex-col items-center justify-center gap-3">
                                <span className="text-xl md:text-2xl font-bold">Avec</span>
                                <div className="flex items-center gap-2">
                                    <RefreshCw size={24} className="text-primary" />
                                    <span className="text-xl md:text-2xl font-bold font-poppins">ClipboardX</span>
                                </div>
                            </div>
                        </div>

                        {/* Content Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                            {/* Left Side: SANS CONTENT */}
                            <div className="flex justify-center">
                                <div className="space-y-6 w-full max-w-md">
                                    {PAIN_POINTS.map((point, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.1 }}
                                            className="flex items-center gap-4"
                                        >
                                            <XCircle className="w-6 h-6 text-red-500/50 shrink-0" />
                                            <p className="text-primary/40 text-lg leading-snug">{point}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Right Side: AVEC CONTENT */}
                            <div className="relative min-h-[500px] flex items-center justify-center">
                                {/* Decorative glow */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
                                
                                <div className="relative w-full h-full lg:max-w-md">
                                    {/* Floating Cards */}
                                    <div className="relative h-full space-y-4 lg:space-y-0">
                                        {BENEFITS.map((benefit, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ 
                                                    type: "spring",
                                                    duration: 0.8,
                                                    delay: i * 0.15 
                                                }}
                                                className={`
                                                    lg:absolute ${benefit.position} 
                                                    p-6 rounded-2xl bg-card/60 border border-primary/20 backdrop-blur-xl shadow-2xl
                                                    w-full lg:w-[280px] z-20 transition-all duration-300
                                                `}
                                                style={{ rotate: `${benefit.rotation}deg` }}
                                            >
                                                <div className="flex items-start gap-4">
                                                    <div className="p-2 rounded-lg bg-primary/10">
                                                        <CheckCircle2 className="w-5 h-5 text-primary" />
                                                    </div>
                                                    <div>
                                                        <h4 className="font-bold mb-1">{benefit.title}</h4>
                                                        <p className="text-xs text-primary/60 leading-relaxed">{benefit.text}</p>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Background patterns */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(var(--primary-rgb),0.1),transparent_50%)] pointer-events-none" />
                </div>
            </div>
        </section>
    );
}
