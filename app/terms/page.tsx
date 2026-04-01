import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/sections/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "ClipboardX - Conditions d'utilisation",
};

export default function Terms() {
    return (
        <main className="flex flex-col w-full min-h-screen">
            <Navbar />
            <div className="flex-1 max-w-3xl mx-auto py-32 px-6 relative w-full">
                <h1 className="text-4xl md:text-5xl font-bold font-space mb-8 bg-linear-to-b from-foreground to-foreground/70 bg-clip-text text-transparent">
                    Conditions d'utilisation
                </h1>
                
                <section className="space-y-6 text-primary/80">
                    <p>
                        ClipboardX est une application conçue pour sauvegarder, organiser et synchroniser tout ce que tu copies, simplement et efficacement.
                    </p>

                    <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Fonctionnement</h2>
                    <p>
                        ClipboardX enregistre automatiquement les éléments que tu copies afin de te permettre de les retrouver facilement plus tard. Selon les fonctionnalités activées, certaines données peuvent être synchronisées entre tes appareils.
                    </p>

                    <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Données et confidentialité</h2>
                    <p>
                        Les données copiées peuvent inclure du texte ou d'autres informations sensibles. ClipboardX s'efforce de protéger ces données, mais il est recommandé de ne pas copier d'informations confidentielles si tu ne souhaites pas qu'elles soient sauvegardées.
                    </p>
                    <p>
                        En utilisant l'application, tu acceptes que certaines données soient stockées localement et, si activé, synchronisées via des services sécurisés.
                    </p>

                    <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Responsabilité</h2>
                    <p>
                        ClipboardX est fourni tel quel. L'utilisation de l'application se fait sous ta responsabilité. L'équipe ne peut être tenue responsable de toute perte de données ou utilisation non prévue.
                    </p>

                    <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Conditions générales</h2>
                    <p>
                        En utilisant ClipboardX, tu acceptes les présentes conditions. Celles-ci peuvent être mises à jour à tout moment afin d'améliorer le service.
                    </p>
                    <p className="mt-8 border-t border-primary/10 pt-8">
                        Pour toute question ou suggestion, n'hésite pas à nous contacter à <a href="mailto:llsberenger@gmail.com" className="text-foreground hover:underline">llsberenger@gmail.com</a>.
                    </p>
                </section>
            </div>
            <Footer />
        </main>
    );
}
