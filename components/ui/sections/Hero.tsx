"use client"

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import MagicRings from "@/components/MagicRings";
import { useMediaQuery } from "@/hooks/use-media-query";

export function Hero() {
    const isDesktop = useMediaQuery("md");

    return <>
        <section className="relative flex flex-col items-center justify-center min-h-screen w-full overflow-hidden" id="home">
            {isDesktop ? (
                <MagicRings
                    color="#fff"
                    colorTwo="#000"
                    ringCount={3}
                    speed={1}
                    attenuation={10}
                    lineThickness={2}
                    baseRadius={0.35}
                    radiusStep={0.1}
                    scaleRate={0.1}
                    opacity={1}
                    blur={0}
                    noiseAmount={0}
                    rotation={0}
                    ringGap={1.5}
                    fadeIn={0.7}
                    fadeOut={0.5}
                    followMouse={false}
                    mouseInfluence={0.2}
                    hoverScale={1.2}
                    parallax={0.05}
                    clickBurst={false}
                />
            ) : (
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <motion.div
                        animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.15, 0.3, 0.15],
                            x: [-20, 20, -20],
                            y: [-20, 20, -20],
                        }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-20 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[30px] transform-gpu"
                    />
                    <motion.div
                        animate={{
                            scale: [1.3, 1, 1.3],
                            opacity: [0.1, 0.2, 0.1],
                            x: [20, -20, 20],
                            y: [20, -20, 20],
                        }}
                        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                        className="absolute top-1/2 -right-20 w-[500px] h-[500px] bg-primary/15 rounded-full blur-2xl transform-gpu"
                    />
                    <motion.div
                        animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.05, 0.15, 0.05],
                        }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                        className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-full h-96 bg-primary/10 rounded-full blur-[30px] transform-gpu"
                    />
                </div>
            )}
            <div className="relative z-10 flex flex-col items-center justify-center gap-6 pt-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="relative px-4 py-2 rounded-full backdrop-blur-lg border border-primary/10 bg-linear-to-br from-primary/10 via-transparent to-primary/5 shadow-sm shadow-primary/5"
                >
                    <p className="text-sm font-semibold bg-linear-to-r from-primary to-primary/50 bg-clip-text text-transparent">
                        Sérénité, Productivité & Liberté
                    </p>
                </motion.div>

                <div className="flex flex-col items-center justify-center gap-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.15 }}
                        className="text-4xl sm:text-6xl md:text-7xl font-bold text-center font-space leading-tight px-4"
                    >
                        Votre presse papier local <br className="hidden sm:block" /> en un seul endroit
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.3 }}
                        className="text-lg md:text-xl text-center text-primary/75 px-6 max-w-2xl"
                    >
                        Gérez convenablement votre presse papier en local <br className="hidden sm:block" /> sans internet et en toute sécurité.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.45 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full px-6 sm:px-0"
                >
                    <Button
                        size="xl"
                        className="w-full sm:w-auto"
                        onClick={() => document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        Télécharger l'app
                    </Button>
                    <Button
                        variant="outline"
                        size="xl"
                        className="w-full sm:w-auto"
                        onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        Voir les fonctionnalités
                    </Button>
                </motion.div>
            </div>
        </section>
    </>
}