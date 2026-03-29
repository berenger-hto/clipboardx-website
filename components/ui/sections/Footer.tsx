"use client"

import { RefreshCw } from "lucide-react";

export function Footer() {
    return (
        <footer className="py-20 px-6 border-t border-primary/10 bg-background">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                {/* Column 1: Logo & Copyright */}
                <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-2">
                        <RefreshCw size={24} className="text-primary" />
                        <span className="text-2xl font-bold font-poppins">ClipBoardX</span>
                    </div>
                    <p className="text-primary/40 text-sm">
                        &copy; Copyright {new Date().getFullYear()} ClipBoardX
                    </p>
                </div>

                {/* Column 2: Solutions */}
                <div className="flex flex-col gap-6">
                    <h4 className="font-bold text-sm uppercase tracking-wider text-primary/60">Solutions</h4>
                    <ul className="flex flex-col gap-4 text-primary/40 text-sm font-medium">
                        <li><a href="#" className="hover:text-primary transition-colors">Pour Développeurs</a></li>
                        <li><a href="#" className="hover:text-primary transition-colors">Pour Étudiants</a></li>
                        <li><a href="#" className="hover:text-primary transition-colors">Pour Professionnels</a></li>
                    </ul>
                </div>

                {/* Column 3: ClipboardX */}
                <div className="flex flex-col gap-6">
                    <h4 className="font-bold text-sm uppercase tracking-wider text-primary/60">ClipBoardX</h4>
                    <ul className="flex flex-col gap-4 text-primary/40 text-sm font-medium">
                        <li><a href="#" className="hover:text-primary transition-colors">Conditions</a></li>
                        <li><a href="#" className="hover:text-primary transition-colors">Confidentialité</a></li>
                        <li><a href="#" className="hover:text-primary transition-colors">Légal</a></li>
                        <li><a href="#" className="hover:text-primary transition-colors">Nouveautés</a></li>
                        <li><a href="#" className="hover:text-primary transition-colors">Cookie policy</a></li>
                    </ul>
                </div>

                {/* Column 4: Useful Links & Language */}
                <div className="flex flex-col gap-6">
                    <h4 className="font-bold text-sm uppercase tracking-wider text-primary/60">Useful Links</h4>
                    <ul className="flex flex-col gap-4 text-primary/40 text-sm font-medium">
                        <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
                        <li><a href="#" className="hover:text-primary transition-colors">X/Twitter</a></li>
                        <li><a href="#" className="hover:text-primary transition-colors">LinkedIn</a></li>
                    </ul>
                    <div className="flex gap-4 mt-2 text-primary/40 text-xs font-bold uppercase tracking-widest">
                        <button className="hover:text-primary transition-colors cursor-pointer">en</button>
                        <button className="text-primary cursor-default">fr</button>
                    </div>
                </div>
            </div>
        </footer>
    );
}
