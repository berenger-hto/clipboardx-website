"use client"

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const FAQ_ITEMS = [
    {
        question: "Qu’est-ce que ClipboardX ?",
        answer: "ClipboardX est une application qui enregistre automatiquement ce que tu copies pour te permettre de le retrouver facilement plus tard."
    },
    {
        question: "Comment fonctionne ClipboardX ?",
        answer: "Dès que tu copies un élément, il est sauvegardé dans ton historique. Tu peux ensuite le consulter, le rechercher et le réutiliser à tout moment."
    },
    {
        question: "Est-ce que mes données sont synchronisées ?",
        answer: "Oui, si la synchronisation est activée, tes données sont accessibles sur tous tes appareils connectés."
    },
    {
        question: "Est-ce que ClipboardX fonctionne hors ligne ?",
        answer: "Oui, les données sont d’abord stockées localement sur ton appareil. La synchronisation se fait uniquement lorsque tu es connecté."
    },
    {
        question: "Mes données sont-elles sécurisées ?",
        answer: "ClipboardX met en place des mesures pour protéger tes données. Toutefois, il est recommandé d’éviter de copier des informations sensibles."
    },
    {
        question: "Puis-je supprimer mon historique ?",
        answer: "Oui, tu peux supprimer des éléments individuellement ou vider entièrement ton historique à tout moment."
    },
    {
        question: "Quels types de données sont enregistrés ?",
        answer: "Principalement du texte, comme des liens, des notes ou des extraits de code."
    },
    {
        question: "L’application est-elle gratuite ?",
        answer: "Oui, ClipboardX est disponible gratuitement avec ses fonctionnalités principales."
    },
    {
        question: "Dois-je créer un compte ?",
        answer: "No, l’application peut être utilisée sans compte. Certaines fonctionnalités comme la synchronisation peuvent nécessiter une connexion."
    },
    {
        question: "Sur quels appareils puis-je utiliser ClipboardX ?",
        answer: "ClipboardX est disponible sur mobile, et les données peuvent être synchronisées entre plusieurs appareils."
    }
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-24 px-6 relative bg-background overflow-hidden" id="faq">
            <div className="max-w-3xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold font-space mb-4"
                    >
                        FAQ
                    </motion.h2>
                    <p className="text-primary/40 text-lg">Autres questions?</p>
                </div>

                <div className="space-y-4">
                    {FAQ_ITEMS.map((item, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <motion.div 
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="overflow-hidden"
                            >
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                    className={`w-full p-6 text-left flex items-start gap-4 rounded-2xl transition-all duration-300 ${
                                        isOpen 
                                        ? "bg-card border border-primary/20 shadow-2xl shadow-primary/5" 
                                        : "bg-card/40 border border-primary/5 hover:border-primary/10 hover:bg-card/60"
                                    }`}
                                >
                                    <div className={`mt-1 p-1 rounded-full border transition-all duration-300 ${isOpen ? "bg-primary/10 border-primary/20" : "bg-primary/5 border-primary/10"}`}>
                                        <motion.div
                                            animate={{ rotate: isOpen ? 45 : 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                        >
                                            <Plus size={14} className={isOpen ? "text-primary" : "text-primary/60"} />
                                        </motion.div>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className={`text-lg font-bold transition-colors duration-300 ${isOpen ? "text-primary" : "text-primary/80"}`}>
                                            {item.question}
                                        </h3>
                                        
                                        <AnimatePresence initial={false}>
                                            {isOpen && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.25, ease: "easeInOut" }}
                                                >
                                                    <p className="text-primary/60 mt-4 leading-relaxed">
                                                        {item.answer}
                                                    </p>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </button>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
        </section>
    );
}
