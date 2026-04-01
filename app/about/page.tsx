import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/sections/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "ClipboardX - À propos",
};

export default function About() {
    return (
        <main className="flex flex-col w-full min-h-screen">
            <Navbar />
            <div className="flex-1 max-w-3xl mx-auto py-32 px-6 relative w-full">
                <h1 className="text-4xl md:text-5xl font-bold font-space mb-8 bg-linear-to-b from-foreground to-foreground/70 bg-clip-text text-transparent">
                    À propos de ClipboardX
                </h1>
                
                <section className="space-y-6 text-primary/80">
                    <p>
                        ClipboardX est une application conçue pour améliorer la façon dont tu gères ton presse-papier au quotidien.
                    </p>
                    <p>
                        L’idée est simple : tout ce que tu copies est automatiquement sauvegardé pour que tu puisses le retrouver facilement, au moment où tu en as besoin.
                    </p>
                    <p>
                        Que tu sois développeur, étudiant ou professionnel, ClipboardX t’aide à rester organisé et à gagner du temps en évitant de perdre des informations importantes.
                    </p>
                    <p>
                        L’application a été pensée avec une approche minimaliste : rapide, simple et efficace. L’objectif n’est pas d’ajouter des fonctionnalités inutiles, mais de résoudre un problème concret avec une expérience fluide.
                    </p>
                    <p>
                        ClipboardX évolue en continu grâce aux retours des utilisateurs, avec pour ambition de devenir un outil essentiel dans ton quotidien numérique.
                    </p>
                </section>
            </div>
            <Footer />
        </main>
    );
}
