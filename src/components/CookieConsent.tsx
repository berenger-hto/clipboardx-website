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
          className="fixed bottom-20 left-1/2 -translate-x-1/2 translate-y-1/2 z-50 max-w-[600px]"
        >
          <div className="bg-card/80 backdrop-blur-xl border border-card/20 shadow-[0_8px_32px_rgba(0,0,0,0.12)] rounded-[40px] p-2 pl-8 flex items-center gap-4">
            <p className="text-[13px] text-foreground leading-relaxed py-4">
              Nous utilisons des cookies pour améliorer votre expérience et analyser le trafic du site.{" "}
              <Link
                href="/privacy"
                className="text-blue-500 hover:underline font-medium"
              >
                En savoir plus
              </Link>
            </p>
            <div className="flex items-center gap-2 pr-2">
              <Button
                onClick={handleDecline}
              >
                Refuser
              </Button>
              <Button
                variant="secondary"
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
