"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import Link from "next/link"
import { Button } from "./ui/button"

export const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const consent = localStorage.getItem("cookie-consent")
        if (consent) return
        const timeOut = setTimeout(() => {
            setIsVisible(true)
        }, 2500)

        return () => clearTimeout(timeOut)
    }, [])

    const handleAccept = () => {
        localStorage.setItem("cookie-consent", "accepted")
        setIsVisible(false)
    }

    const handleDecline = () => {
        localStorage.setItem("cookie-consent", "declined")
        setIsVisible(false)
    }

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.95 }}
                    className="fixed left-1/2 -translate-x-1/2 bottom-4 md:bottom-8 z-50 w-[calc(100%-2rem)] md:w-max max-w-2xl rounded-3xl border bg-background px-4 py-3 shadow-lg"
                >
                    <div className="flex flex-col justify-between gap-3 md:flex-row md:items-center">
                        <p className="text-[13px] text-foreground leading-relaxed py-4">
                            Nous utilisons des cookies pour améliorer votre expérience et analyser le trafic du site.{" "}
                            <Link
                                href="/privacy"
                                className="text-blue-500 hover:underline font-medium"
                            >
                                En savoir plus
                            </Link>
                        </p>
                        <div className="flex gap-2 max-md:flex-wrap">
                            <Button
                                variant="secondary"
                                onClick={handleDecline}
                            >
                                Refuser
                            </Button>
                            <Button
                                onClick={handleAccept}
                            >
                                Accepter
                            </Button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
