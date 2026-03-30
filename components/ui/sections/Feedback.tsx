"use client"

import { motion } from "framer-motion";
import { MessageSquareText } from "lucide-react";
import { Send } from "lucide-react";
import { Button } from "../button";

export function Feedback() {
    return (
        <section className="py-24 px-6 relative bg-background overflow-hidden" id="feedback">
            <div className="max-w-4xl mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    <div className="flex justify-center mb-6">
                        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center rotate-3 group-hover:rotate-0 transition-transform duration-500">
                            <MessageSquareText size={32} className="text-primary" />
                        </div>
                    </div>

                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold font-space mb-4">
                            Donne ton avis
                        </h2>
                        <p className="text-primary/60 text-lg max-w-md mx-auto">
                            Ton retour nous aide à améliorer ClipboardX. Dis-nous ce que tu aimes et ce qu'on peut faire de mieux.
                        </p>
                    </div>

                    <Button size="xl" variant="outline">Donne ton avis</Button>
                </motion.div>
            </div>

            {/* Minimalist background element */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[2px] bg-linear-to-r from-transparent via-primary/5 to-transparent" />
        </section>
    );
}
