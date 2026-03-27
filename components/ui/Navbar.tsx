"use client"

import { RefreshCw, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AnimatedBackground } from "@/components/motion-primitives/animated-background";

const TABS = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Download", href: "/download" },
    { label: "Pricing", href: "/pricing" }
]

export function Navbar() {
    const { theme, setTheme } = useTheme()
    return <>
        <div className="flex items-center justify-between h-20 px-20 backdrop-blur-sm fixed w-full top-0 left-0 z-100 border-b border-card">
            <div className="flex items-center gap-2">
                <RefreshCw size={20} color={theme === "dark" ? "white" : "black"} />
                <span className="text-xl font-bold">ClipBoardX</span>
            </div>
            <ul className="flex gap-2 items-center justify-center bg-card/50 backdrop-blur-sm rounded-3xl px-4 py-2">
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
                        <Link key={tab.label} data-id={tab.label} href={tab.href} className="px-3 py-1 text-zinc-600 transition-colors duration-300 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50">{tab.label}</Link>
                    ))}
                </AnimatedBackground>
            </ul>
            <Button size="icon-lg" variant="secondary" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                <Moon className="hidden dark:block" />
                <Sun className="block dark:hidden" />
            </Button>
        </div>
    </>
}