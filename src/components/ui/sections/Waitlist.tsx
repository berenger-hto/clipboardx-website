"use client"

import { FormEvent, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";
import { toastManager } from "../toast";
import { Spinner } from "../spinner";
import { APIResponse } from "@/types/types";

export function Waitlist() {
    const [status, setStatus] = useState<"idle" | "success" | "loading">("idle");
    const [email, setEmail] = useState("");

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!email) {
            toastManager.add({
                title: "Oops !",
                description: "Renseignez votre adresse mail",
                type: "warning"
            })
            return
        }

        setStatus("loading");
        const res = await fetch("/api/waitlist", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email }),
        });
        const data = await res.json() as APIResponse;

        if (data.status !== 200) {
            toastManager.add({
                title: "Oops !",
                description: data.message,
                type: "error"
            })
            setStatus("idle")
            return
        }
        
        setStatus("success");
        setEmail("");
    }

    return (
        <section className="py-24 px-6 relative bg-background/50 overflow-hidden" id="waitlist">
            <div className="max-w-4xl mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="p-8 md:p-12 rounded-[2.5rem] bg-card/40 border border-primary/5 backdrop-blur-sm"
                >
                    <AnimatePresence mode="wait">
                        {status !== "success" ? (
                            <motion.div
                                key="form"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                className="space-y-8"
                            >
                                <div>
                                    <h2 className="text-3xl md:text-4xl font-bold font-space mb-4">
                                        Reçois les prochaines nouveautés
                                    </h2>
                                    <p className="text-primary/60 text-lg">
                                        Sois informé des nouvelles fonctionnalités, améliorations et mises à jour.
                                    </p>
                                </div>

                                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                                    <input
                                        type="email"
                                        placeholder="Ton email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="flex-1 px-6 py-4 rounded-full bg-card/80 border border-primary/10 focus:border-primary/30 outline-hidden transition-all text-sm"
                                        required
                                    />
                                    <button
                                        type="submit"
                                        className="px-8 py-4 rounded-full bg-primary text-background font-bold hover:scale-105 active:scale-95 transition-all text-sm flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-primary/20"
                                        disabled={status === "loading"}
                                    >
                                        {status === "loading" ? (
                                            <Spinner />
                                        ) : (
                                            <Send size={16} />
                                        )}
                                        S’inscrire
                                    </button>
                                </form>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="py-8 flex flex-col items-center gap-4"
                            >
                                <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-2">
                                    <CheckCircle2 size={32} className="text-green-500" />
                                </div>
                                <h3 className="text-2xl font-bold font-poppins">Tu es inscrit !</h3>
                                <p className="text-primary/60 text-lg">
                                    Tu seras informé des prochaines nouveautés de ClipboardX.
                                </p>
                                <button
                                    onClick={() => setStatus("idle")}
                                    className="mt-4 text-primary text-sm font-medium hover:underline cursor-pointer"
                                >
                                    S'inscrire avec un autre email
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>

            {/* Subtle background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
        </section>
    );
}
