"use client"

import { motion } from "framer-motion";
import { Monitor, Smartphone, Terminal, CheckCircle2, Download, Apple } from "lucide-react";

export function InstallationGuide() {
    return (
        <section className="py-24 px-6 relative overflow-hidden bg-background" id="installation-guide">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
                    >
                        <Download className="w-4 h-4" />
                        Guide d'installation
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.08 }}
                        className="text-4xl md:text-5xl font-bold font-space mb-6 bg-linear-to-b from-foreground to-foreground/70 bg-clip-text text-transparent"
                    >
                        Comment ça marche ?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.15 }}
                        className="text-lg text-primary/60 max-w-2xl mx-auto"
                    >
                        ClipboardX est un service local de synchronisation. 
                        <strong className="text-foreground"> Il nécessite 2 applications </strong> pour fonctionner : l'application de bureau et l'application mobile. Sans l'une, l'autre ne sert à rien.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                        className="relative p-8 rounded-3xl border border-primary/10 bg-card/30 backdrop-blur-xl group overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
                            <Monitor className="w-32 h-32" />
                        </div>
                        <h3 className="text-2xl font-bold font-poppins mb-2">Combo Windows</h3>
                        <p className="text-primary/40 mb-8">Synchronisation fluide entre votre PC Windows et votre smartphone.</p>
                        
                        <ul className="space-y-6 relative z-10">
                            <li className="flex gap-4">
                                <div className="mt-1 shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <span className="font-bold text-sm">1</span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-foreground flex items-center gap-2">
                                        <Monitor className="w-4 h-4 text-primary" /> Application Windows
                                    </h4>
                                    <p className="text-sm text-primary/60 mt-1">Téléchargez et installez l'exécutable (.exe). Lancez ClipboardX.</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <div className="mt-1 shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <span className="font-bold text-sm">2</span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-foreground flex items-center gap-2">
                                        <Smartphone className="w-4 h-4 text-primary" /> Application Mobile
                                    </h4>
                                    <p className="text-sm text-primary/60 mt-1">Téléchargez l'application (iOS/Android) et scannez le QR code affiché sur l'application de bureau pour vous connecter.</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <div className="mt-1 shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <CheckCircle2 className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-foreground">Synchronisation active</h4>
                                    <p className="text-sm text-primary/60 mt-1">La connexion est sécurisée via votre réseau local. Vous pouvez maintenant copier/coller instantanément.</p>
                                </div>
                            </li>
                        </ul>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.3 }}
                        className="relative p-8 rounded-3xl border border-primary/10 bg-card/30 backdrop-blur-xl group overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
                            <Terminal className="w-32 h-32" />
                        </div>
                        <h3 className="text-2xl font-bold font-poppins mb-2">Combo Linux</h3>
                        <p className="text-primary/40 mb-8">Idéal pour les développeurs. Connexion locale sécurisée entre Linux et votre smartphone.</p>
                        
                        <ul className="space-y-6 relative z-10">
                            <li className="flex gap-4">
                                <div className="mt-1 shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <span className="font-bold text-sm">1</span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-foreground flex items-center gap-2">
                                        <Terminal className="w-4 h-4 text-primary" /> Application Linux
                                    </h4>
                                    <p className="text-sm text-primary/60 mt-1">Utilisez l'AppImage ou le paquet .deb. Exécutez ClipboardX pour démarrer le service local.</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <div className="mt-1 shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <span className="font-bold text-sm">2</span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-foreground flex items-center gap-2">
                                        <Smartphone className="w-4 h-4 text-primary" /> Application Mobile
                                    </h4>
                                    <p className="text-sm text-primary/60 mt-1">Téléchargez l'application (iOS/Android) et scannez le QR code affiché sur l'application de bureau pour vous connecter.</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <div className="mt-1 shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <CheckCircle2 className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-foreground">Synchronisation active</h4>
                                    <p className="text-sm text-primary/60 mt-1">La connexion est sécurisée via votre réseau local. Vous pouvez maintenant copier/coller instantanément.</p>
                                </div>
                            </li>
                        </ul>
                    </motion.div>
                    {/**
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.4 }}
                        className="relative p-8 rounded-3xl border border-primary/10 bg-card/30 backdrop-blur-xl group overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
                            <Apple className="w-32 h-32" />
                        </div>
                        <h3 className="text-2xl font-bold font-poppins mb-2">Combo MacOS</h3>
                        <p className="text-primary/40 mb-8">Synchronisation parfaite entre votre Mac et votre smartphone.</p>
                        
                        <ul className="space-y-6 relative z-10">
                            <li className="flex gap-4">
                                <div className="mt-1 shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <span className="font-bold text-sm">1</span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-foreground flex items-center gap-2">
                                        <Apple className="w-4 h-4 text-primary" /> Application MacOS
                                    </h4>
                                    <p className="text-sm text-primary/60 mt-1">Téléchargez et installez l'image (.dmg). Lancez ClipboardX.</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <div className="mt-1 shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <span className="font-bold text-sm">2</span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-foreground flex items-center gap-2">
                                        <Smartphone className="w-4 h-4 text-primary" /> Application Mobile
                                    </h4>
                                    <p className="text-sm text-primary/60 mt-1">Téléchargez l'application (iOS/Android) et scannez le QR code affiché sur l'application de bureau pour vous connecter.</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <div className="mt-1 shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <CheckCircle2 className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-foreground">Synchronisation active</h4>
                                    <p className="text-sm text-primary/60 mt-1">La connexion est sécurisée via votre réseau local. Vous pouvez maintenant copier/coller instantanément.</p>
                                </div>
                            </li>
                        </ul>
                    </motion.div>
                     */}
                </div>
            </div>

            {/* Decorative background elements */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-primary/10 rounded-full blur-[60px] pointer-events-none" />
        </section>
    );
}
