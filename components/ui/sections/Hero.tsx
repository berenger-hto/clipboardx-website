"use client"

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BorderTrail } from '@/components/motion-primitives/border-trail';
import MagicRings from "@/components/MagicRings";

export function Hero() {
    return <>
        <section className="relative flex flex-col items-center justify-center min-h-screen w-full overflow-hidden" id="home">
            <MagicRings
                color="#fff"
                colorTwo="#000"
                ringCount={6}
                speed={1}
                attenuation={10}
                lineThickness={2}
                baseRadius={0.35}
                radiusStep={0.1}
                scaleRate={0.1}
                opacity={1}
                blur={0}
                noiseAmount={0.1}
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
            <div className="relative z-10 flex flex-col items-center justify-center gap-6 pt-20">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="relative px-4 py-2 rounded-full backdrop-blur-lg"
                >
                    <BorderTrail size={30} />
                    <p className="text-sm font-semibold">Sérénité, Productivité & Liberté</p>
                </motion.div>
                
                <div className="flex flex-col items-center justify-center gap-4">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-7xl font-bold text-center font-poppins"
                    >
                        Votre presse papier local <br /> en un seul endroit
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-xl text-center text-primary/75"
                    >
                        Gérez convenablement votre presse papier en local <br /> sans internet et en toute sécurité.
                    </motion.p>
                </div>
                
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex items-center justify-center gap-2"
                >
                    <Button 
                        size="xl" 
                        onClick={() => document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        Télécharger l'app
                    </Button>
                    <Button 
                        variant="outline" 
                        size="xl"
                        onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        Voir les fonctionnalités
                    </Button>
                </motion.div>
            </div>
        </section>
    </>
}