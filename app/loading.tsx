"use client"

import { motion } from "framer-motion"
import { RefreshCw } from "lucide-react"

export default function Loading() {
    return (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-background">
            <div className="flex flex-col items-center gap-6">
                <div className="relative">
                    {/* Spinning Icon */}
                    <motion.div
                        animate={{
                            rotate: 360,
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        className="relative z-10"
                    >
                        <RefreshCw size={48} className="text-primary" />
                    </motion.div>
                    
                    {/* Pulsing Glow */}
                    <motion.div
                        animate={{
                            scale: [1, 1.4, 1],
                            opacity: [0.1, 0.3, 0.1],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="absolute inset-0 bg-primary rounded-full blur-2xl"
                    />
                </div>
                
                {/* Branded Text */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col items-center gap-1"
                >
                    <span className="text-xl font-bold font-space tracking-[0.2em] uppercase">
                        ClipBoardX
                    </span>
                    <div className="w-12 h-0.5 bg-primary/20 rounded-full overflow-hidden">
                        <motion.div 
                            animate={{
                                x: [-48, 48]
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="w-full h-full bg-primary"
                        />
                    </div>
                </motion.div>
            </div>

            {/* Subtle background texture or glow can be added here if needed */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        </div>
    )
}
