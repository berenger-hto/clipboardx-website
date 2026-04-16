"use client"

import { RefreshCw, Moon, Sun, Menu } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { AnimatedBackground } from "@/components/motion-primitives/animated-background";
import { motion } from "framer-motion";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
    Drawer,
    DrawerTrigger,
    DrawerPopup,
} from "@/components/ui/drawer";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ThemeSwitcher } from "./theme-switcher";

const TABS = [
    { label: "Accueil", href: "/#home" },
    { label: "Pourquoi", href: "/#why" },
    { label: "Fonctionnalités", href: "/#features" },
    // { label: "Comment ça marche", href: "/#how-it-works" },
    { label: "Télécharger", href: "/#download" }
]

type Props = {
    showTabs?: boolean
}

export function Navbar({ showTabs = false }: Props) {
    const { theme, setTheme } = useTheme()
    const [open, setOpen] = useState(false)
    const pathname = usePathname();
    const router = useRouter();

    const scrollToSection = (e: React.MouseEvent, href: string) => {
        e.preventDefault()
        if (pathname === '/') {
            const id = href.replace('/#', '')
            const element = document.getElementById(id)
            if (element) {
                element.scrollIntoView({ behavior: 'instant' })
            }
        } else {
            router.push(href)
        }
    }

    return (
        <>
            <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="flex items-center justify-between h-20 px-4 md:px-20 backdrop-blur-xl fixed w-full top-0 left-0 z-100 border-b border-primary/5"
            >
                <Link href="/" className="flex items-center gap-2 cursor-pointer">
                    <RefreshCw size={20} className="text-black dark:text-white" />
                    <span className="text-xl font-bold font-space tracking-tight">ClipboardX</span>
                </Link>

                {/* Desktop Navigation */}
                {showTabs && <ul className="hidden md:flex gap-2 items-center justify-center bg-card/50 backdrop-blur-sm rounded-4xl px-4 py-2 border border-primary/10">
                    <AnimatedBackground
                        defaultValue={TABS[0].label}
                        className='rounded-full bg-zinc-100 dark:bg-zinc-800'
                        transition={{
                            type: 'spring',
                            bounce: 0.3,
                            duration: 0.3,
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
                </ul>}
                <div className="flex items-center gap-2">
                    <Button size="icon-lg" variant="ghost" className="hidden md:flex" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                        <Moon className="hidden dark:block" />
                        <Sun className="block dark:hidden" />
                    </Button>

                    {/* Mobile Menu with Drawer */}
                    <Drawer open={open} onOpenChange={setOpen}>
                        <DrawerTrigger render={<Button size="icon" variant="ghost" className={cn("md:hidden transition-opacity duration-300", open ? "opacity-0 pointer-events-none" : "opacity-100")} />}>
                            <Menu size={24} />
                        </DrawerTrigger>
                        <DrawerPopup position="bottom" variant="inset" showBar className="bg-card/80 backdrop-blur-xl border-t border-primary/10">
                            <div className="flex flex-col items-center justify-center min-h-[45vh] gap-8 p-10 relative">
                                <nav className="flex flex-col items-center gap-6 mt-4">
                                    {TABS.map((tab, i) => (
                                        <button
                                            key={tab.label}
                                            onClick={(e) => {
                                                scrollToSection(e, tab.href)
                                                setOpen(false)
                                            }}
                                            className="text-3xl font-bold font-space tracking-tight hover:text-primary transition-colors active:scale-95 duration-200 cursor-pointer"
                                        >
                                            {tab.label}
                                        </button>
                                    ))}
                                </nav>

                                <div className="mt-4">
                                    <ThemeSwitcher />
                                </div>
                            </div>
                        </DrawerPopup>
                    </Drawer>
                </div>
            </motion.div>
        </>
    );
}