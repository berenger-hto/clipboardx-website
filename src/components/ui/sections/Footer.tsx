"use client"

import { RefreshCw } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

export function Footer() {
    const pathname = usePathname();
    const router = useRouter();

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        if (pathname === '/') {
            const id = href.replace('/#', '');
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'instant' });
            }
        } else {
            router.push(href);
        }
    };

    return (
        <footer className="py-20 px-6 border-t border-primary/10 bg-background">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
                
                <div className="flex flex-col gap-6 lg:col-span-1">
                    <div className="flex items-center gap-2">
                        <RefreshCw size={24} className="text-primary" />
                        <span className="text-2xl font-bold font-space">ClipboardX</span>
                    </div>
                    <p className="text-primary/40 text-sm">
                        &copy; Copyright {new Date().getFullYear()} ClipboardX
                    </p>
                </div>

                <div className="flex flex-col gap-6">
                    <h4 className="font-bold text-sm uppercase tracking-wider text-primary/60">Produit</h4>
                    <ul className="flex flex-col gap-4 text-primary/40 text-sm font-medium">
                        <li><a href="/#features" onClick={(e) => handleScroll(e, '/#features')} className="hover:text-primary transition-colors">Fonctionnalités</a></li>
                        <li><a href="/#how-it-works" onClick={(e) => handleScroll(e, '/#how-it-works')} className="hover:text-primary transition-colors">Comment ça marche</a></li>
                        <li><a href="/#download" onClick={(e) => handleScroll(e, '/#download')} className="hover:text-primary transition-colors">Télécharger</a></li>
                        <li><span className="text-primary/40 cursor-not-allowed">Nouveautés (Bientôt)</span></li>
                    </ul>
                </div>

                <div className="flex flex-col gap-6">
                    <h4 className="font-bold text-sm uppercase tracking-wider text-primary/60">Ressources</h4>
                    <ul className="flex flex-col gap-4 text-primary/40 text-sm font-medium">
                        <li><a href="/#faq" onClick={(e) => handleScroll(e, '/#faq')} className="hover:text-primary transition-colors">FAQ</a></li>
                        <li><a href="/#installation-guide" onClick={(e) => handleScroll(e, '/#installation-guide')} className="hover:text-primary transition-colors">Guide d'installation</a></li>
                    </ul>
                </div>

                <div className="flex flex-col gap-6">
                    <h4 className="font-bold text-sm uppercase tracking-wider text-primary/60">Légal</h4>
                    <ul className="flex flex-col gap-4 text-primary/40 text-sm font-medium">
                        <li><Link href="/about" className="hover:text-primary transition-colors">À propos</Link></li>
                        <li><Link href="/terms" className="hover:text-primary transition-colors">Conditions d'utilisation</Link></li>
                        <li><Link href="/privacy" className="hover:text-primary transition-colors">Confidentialité</Link></li>
                    </ul>
                </div>

                <div className="flex flex-col gap-6">
                    <h4 className="font-bold text-sm uppercase tracking-wider text-primary/60">Contact</h4>
                    <ul className="flex flex-col gap-4 text-primary/40 text-sm font-medium">
                        <li><a href="https://github.com/berenger-hto" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">GitHub</a></li>
                        <li><a href="mailto:llsberenger@gmail.com" className="hover:text-primary transition-colors">Email</a></li>
                        <li><a href="/feedback" className="hover:text-primary transition-colors">Donner un avis</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
