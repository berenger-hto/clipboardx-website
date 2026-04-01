import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/sections/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "ClipboardX - Confidentialité",
};

export default function Privacy() {
    return (
        <main className="flex flex-col w-full min-h-screen">
            <Navbar />
            <div className="flex-1 max-w-3xl mx-auto py-32 px-6 relative w-full">
                <h1 className="text-4xl md:text-5xl font-bold font-space mb-8 bg-linear-to-b from-foreground to-foreground/70 bg-clip-text text-transparent">
                    Politique de confidentialité
                </h1>
                
                <section className="space-y-6 text-primary/80">
                    <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Collecte des données</h2>
                    <p>
                        ClipboardX peut enregistrer les éléments que tu copies, comme du texte ou des liens, afin de te permettre de les retrouver plus tard.
                    </p>
                    <p>
                        Ces données sont principalement stockées localement sur ton appareil.
                    </p>

                    <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Synchronisation</h2>
                    <p>
                        Si la synchronisation est activée, certaines données peuvent être transmises de manière sécurisée afin d’être accessibles sur tes autres appareils.
                    </p>

                    <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Utilisation des données</h2>
                    <p>
                        Les données collectées sont uniquement utilisées pour assurer le bon fonctionnement de l’application, notamment :
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>sauvegarde de ton historique</li>
                        <li>synchronisation entre appareils</li>
                        <li>amélioration de l’expérience utilisateur</li>
                    </ul>
                    <p className="mt-4 font-medium text-foreground">
                        ClipboardX ne revend pas tes données à des tiers.
                    </p>

                    <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Sécurité</h2>
                    <p>
                        Des mesures sont mises en place pour protéger tes données. Cependant, il est recommandé d’éviter de copier des informations sensibles si tu ne souhaites pas qu’elles soient enregistrées.
                    </p>

                    <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Contrôle des données</h2>
                    <p>Tu peux à tout moment :</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>supprimer ton historique</li>
                        <li>désactiver la synchronisation</li>
                        <li>arrêter l’utilisation de l’application</li>
                    </ul>

                    <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Évolution de la politique</h2>
                    <p>
                        Cette politique de confidentialité peut être mise à jour afin de refléter les évolutions de l’application.
                    </p>
                </section>
            </div>
            <Footer />
        </main>
    );
}
