"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import { AlertCircle, RefreshCcw, Home } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-6 bg-background text-foreground overflow-hidden relative">
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 flex flex-col items-center text-center max-w-lg"
      >
        <div className="mb-8 p-4 rounded-3xl bg-red-500/10 border border-red-500/20">
          <AlertCircle size={64} className="text-red-500" />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold font-space mb-6 leading-tight">
          Oups ! Quelque chose <br /> s'est mal passé.
        </h1>

        <p className="text-primary/60 text-lg mb-10 leading-relaxed px-4">
          Une erreur inattendue s'est produite. Ne vous inquiétez pas, vos données locales sont en sécurité.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-6 sm:px-0">
          <Button
            size="xl"
            onClick={() => reset()}
            className="flex items-center gap-2 px-8 rounded-full shadow-lg shadow-primary/20"
          >
            <RefreshCcw size={20} />
            Réessayer
          </Button>
          
          <Button
            variant="outline"
            size="xl"
            onClick={() => window.location.href = '/'}
            className="flex items-center gap-2 px-8 rounded-full"
          >
            <Home size={20} />
            Retour à l'accueil
          </Button>
        </div>

        <p className="mt-12 text-xs text-primary/30 font-mono">
          Code erreur : {error.digest || "UNKNOWN_ERROR"}
        </p>
      </motion.div>
    </div>
  )
}
