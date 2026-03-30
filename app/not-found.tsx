"use client"

import { SearchX, Home, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-6 bg-background text-foreground overflow-hidden relative">
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center max-w-lg">
        <div className="mb-8 p-4 rounded-3xl bg-zinc-500/10 border border-zinc-500/20">
          <SearchX size={64} className="text-zinc-500" />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold font-space mb-6 leading-tight">
          Page Introuvable <br /> (404)
        </h1>

        <p className="text-primary/60 text-lg mb-10 leading-relaxed px-4">
          La page que vous recherchez n'existe pas ou a été déplacée. 
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-6 sm:px-0">
          <Button
            size="xl"
            onClick={() => window.location.href = '/'}
            className="flex items-center gap-2 px-8 rounded-full shadow-lg shadow-primary/20"
          >
            <Home size={20} />
            Retour à l'accueil
          </Button>
          
          <Button
            variant="outline"
            size="xl"
            onClick={() => window.history.back()}
            className="flex items-center gap-2 px-8 rounded-full"
          >
            <ArrowLeft size={20} />
            Page précédente
          </Button>
        </div>
      </div>
    </div>
  )
}
