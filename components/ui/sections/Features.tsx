"use client"

import { motion } from "framer-motion";
import { Shield, Zap, Lock, Globe, HardDrive, Smartphone } from "lucide-react";
import { Magnetic } from "@/components/motion-primitives/magnetic";

const FEATURES = [
    {
        title: "Confidentialité Totale",
        description: "Vos données ne quittent jamais votre appareil. Pas de cloud, juste vous.",
        icon: <Shield className="w-8 h-8 text-primary" />,
    },
    {
        title: "Vitesse Instantanée",
        description: "Accédez à votre historique de presse-papier instantanément avec une recherche ultra-rapide.",
        icon: <Zap className="w-8 h-8 text-primary" />,
    },
    {
        title: "Sécurité Locale",
        description: "Chiffrement local de vos données pour une tranquillité d'esprit absolue.",
        icon: <Lock className="w-8 h-8 text-primary" />,
    },
    {
        title: "Zéro Internet",
        description: "Fonctionne parfaitement sans connexion internet. Protégez votre vie privée.",
        icon: <Globe className="w-8 h-8 text-primary" />,
    },
    {
        title: "Stockage Local",
        description: "Gardez l'historique de vos données que vous le souhaitez.",
        icon: <HardDrive className="w-8 h-8 text-primary" />,
    },
    {
        title: "Multi-Plateforme",
        description: "Disponible sur Desktop et Mobile pour une synchronisation locale simplifiée.",
        icon: <Smartphone className="w-8 h-8 text-primary" />,
    }
];

export function Features() {
    return (
        <section className="py-24 px-6 relative bg-background overflow-hidden" id="features">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl sm:text-4xl md:text-5xl font-bold font-space mb-4 bg-linear-to-b from-foreground to-foreground/70 bg-clip-text text-transparent px-4"
                    >
                        Tout ce dont vous avez besoin
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-lg text-primary/60 max-w-2xl mx-auto"
                    >
                        ClipboardX se concentre sur l'essentiel : la sécurité et la simplicité de votre presse-papier.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {FEATURES.map((feature, index) => (
                        <Magnetic 
                            key={feature.title}
                            actionArea='self'
                            range={200}
                            intensity={0.3}
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group p-8 rounded-3xl border border-primary/10 bg-card/30 backdrop-blur-xl hover:border-primary/20 transition-all duration-300 flex flex-col items-start gap-4"
                            >
                                <div className="p-3 rounded-2xl bg-primary/5 group-hover:bg-primary/10 transition-colors duration-300">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold font-poppins">{feature.title}</h3>
                                <p className="text-primary/60 leading-relaxed text-sm">
                                    {feature.description}
                                </p>
                            </motion.div>
                        </Magnetic>
                    ))}
                </div>
            </div>

            {/* Subtle decorative background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        </section>
    );
}
