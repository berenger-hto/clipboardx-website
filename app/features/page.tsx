import { Navbar } from "@/components/ui/Navbar";
import { Metadata } from "next";
import { Footer } from "@/components/ui/sections/Footer";
import { FeaturesComp } from "@/components/features/FeaturesComp";

export const metadata: Metadata = {
    title: "ClipboardX - Nouveautés"
};

const FEATURES_DATA = [
    {
        title: "Synchronisation Locale Ultra-Rapide",
        description: "Transférez vos éléments copiés entre vos appareils instantanément via votre réseau Wi-Fi local. Pas de serveurs tiers, pas de ralentissements, juste une fluidité absolue.",
        imageSrc: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2000&auto=format&fit=crop",
        filter: "mobile"
    },
    {
        title: "Confidentialité par Défaut",
        description: "Vos données vous appartiennent. ClipboardX chiffre tout localement et ne transmet jamais rien sur Internet. Vos mots de passe et informations sensibles restent là où ils doivent être : chez vous.",
        imageSrc: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2000&auto=format&fit=crop",
        filter: "mobile"
    },
    {
        title: "Historique Intelligent",
        description: "Recherchez et retrouvez n'importe quel élément copié en un clin d'œil. Filtrez par type de contenu (texte, liens, images) et organisez votre flux de travail comme jamais auparavant.",
        imageSrc: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000&auto=format&fit=crop",
        filter: "desktop"
    }
]

export default function Page() {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Navbar />
            <FeaturesComp data={FEATURES_DATA} />
            <Footer />
        </div>
    )
}