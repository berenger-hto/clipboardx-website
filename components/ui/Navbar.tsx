"use client"

import { RefreshCw, Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { AnimatedBackground } from "@/components/motion-primitives/animated-background";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const TABS = [
    { label: "Accueil", href: "#home" },
    { label: "Pourquoi", href: "#why" },
    { label: "Fonctionnalités", href: "#features" },
    // { label: "Comment ça marche", href: "#how-it-works" },
    { label: "Télécharger", href: "#download" }
]

export function Navbar() {
    const { theme, setTheme } = useTheme()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isMenuOpen])

    const scrollToSection = (e: React.MouseEvent, id: string) => {
        e.preventDefault()
        const element = document.getElementById(id.replace('#', ''))
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <>
            <motion.div 
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex items-center justify-between h-20 px-6 md:px-20 backdrop-blur-sm fixed w-full top-0 left-0 z-100"
            >
                <div className="flex items-center gap-2 cursor-pointer" onClick={(e) => scrollToSection(e, 'home')}>
                    <RefreshCw size={20} className="text-black dark:text-white" />
                    <span className="text-xl font-bold">ClipBoardX</span>
                </div>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex gap-2 items-center justify-center bg-card/50 backdrop-blur-sm rounded-4xl px-4 py-2 border border-primary/10">
                    <AnimatedBackground
                        defaultValue={TABS[0].label}
                        className='rounded-full bg-zinc-100 dark:bg-zinc-800'
                        transition={{
                            type: 'spring',
                            bounce: 0.3,
                            duration: 0.5,
                        }}
                    >
                        {TABS.map((tab) => (
                            <button
                                key={tab.label}
                                data-id={tab.label}
                                onClick={(e) => scrollToSection(e, tab.href)}
                                className="px-3 py-1 text-zinc-600 transition-colors duration-300 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50 cursor-pointer"
                            >
                                {tab.label}
                            </button>
                        ))}
                    </AnimatedBackground>
                </ul>

                <div className="flex items-center gap-2">
                    <Button size="icon-lg" variant="ghost" className="hidden md:flex" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                        <Moon className="hidden dark:block" />
                        <Sun className="block dark:hidden" />
                    </Button>
                    
                    {/* Mobile Menu Toggle */}
                    {!isMenuOpen && (
                        <Button size="icon" variant="ghost" className="md:hidden" onClick={() => setIsMenuOpen(true)}>
                            <Menu size={24} />
                        </Button>
                    )}
                </div>
            </motion.div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        {/* Backdrop overlay for the top portion */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMenuOpen(false)}
                            className="fixed inset-0 z-90 bg-black/20 backdrop-blur-[2px] md:hidden"
                        />
                        
                        {/* Bottom Sheet Menu */}
                        <motion.div
                            initial={{ y: "100%" }}
                            animate={{ y: "0%" }}
                            exit={{ y: "100%" }}
                            transition={{ 
                                type: "spring", 
                                damping: 25, 
                                stiffness: 200 
                            }}
                            className="fixed bottom-0 left-0 right-0 h-[50vh] z-100 bg-card/80 backdrop-blur-xl border-t border-primary/10 rounded-t-[40px] md:hidden flex flex-col items-center justify-center shadow-[0_-20px_50px_-12px_rgba(0,0,0,0.3)]"
                        >
                            {/* Decorative Handle */}
                            <div className="absolute top-4 w-12 h-1.5 bg-primary/10 rounded-full" />

                            <nav className="flex flex-col items-center gap-8">
                                {TABS.map((tab, i) => (
                                    <motion.div
                                        key={tab.label}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        transition={{ 
                                            delay: i * 0.05,
                                            duration: 0.3
                                        }}
                                    >
                                        <button 
                                            onClick={(e) => {
                                                scrollToSection(e, tab.href)
                                                setIsMenuOpen(false)
                                            }}
                                            className="text-4xl font-semibold tracking-tight hover:text-primary transition-colors active:scale-95 duration-200 cursor-pointer"
                                        >
                                            {tab.label}
                                        </button>
                                    </motion.div>
                                ))}
                            </nav>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2 }}
                                className="absolute bottom-10"
                            >
                                <Button 
                                    variant="ghost" 
                                    size="lg"
                                    className="rounded-full px-8 text-lg font-medium"
                                    onClick={() => {
                                        setTheme(theme === "dark" ? "light" : "dark")
                                    }}
                                >
                                    {theme === "dark" ? <Sun className="mr-3" size={24} /> : <Moon className="mr-3" size={24} />}
                                    {theme === "dark" ? "Light" : "Dark"}
                                </Button>
                            </motion.div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}