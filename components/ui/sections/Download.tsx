"use client"

import { motion } from "framer-motion";
import { Monitor, Apple, Terminal, Download as DownloadIcon } from "lucide-react";
import { Magnetic } from "@/components/motion-primitives/magnetic";

const DOWNLOADS = [
    {
        name: "Android",
        icon: <svg role="img" height="24" width="24" fill="#3DDC84" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Android</title><path d="M18.4395 5.5586c-.675 1.1664-1.352 2.3318-2.0274 3.498-.0366-.0155-.0742-.0286-.1113-.043-1.8249-.6957-3.484-.8-4.42-.787-1.8551.0185-3.3544.4643-4.2597.8203-.084-.1494-1.7526-3.021-2.0215-3.4864a1.1451 1.1451 0 0 0-.1406-.1914c-.3312-.364-.9054-.4859-1.379-.203-.475.282-.7136.9361-.3886 1.5019 1.9466 3.3696-.0966-.2158 1.9473 3.3593.0172.031-.4946.2642-1.3926 1.0177C2.8987 12.176.452 14.772 0 18.9902h24c-.119-1.1108-.3686-2.099-.7461-3.0683-.7438-1.9118-1.8435-3.2928-2.7402-4.1836a12.1048 12.1048 0 0 0-2.1309-1.6875c.6594-1.122 1.312-2.2559 1.9649-3.3848.2077-.3615.1886-.7956-.0079-1.1191a1.1001 1.1001 0 0 0-.8515-.5332c-.5225-.0536-.9392.3128-1.0488.5449zm-.0391 8.461c.3944.5926.324 1.3306-.1563 1.6503-.4799.3197-1.188.0985-1.582-.4941-.3944-.5927-.324-1.3307.1563-1.6504.4727-.315 1.1812-.1086 1.582.4941zM7.207 13.5273c.4803.3197.5506 1.0577.1563 1.6504-.394.5926-1.1038.8138-1.584.4941-.48-.3197-.5503-1.0577-.1563-1.6504.4008-.6021 1.1087-.8106 1.584-.4941z"/></svg>,
        status: "available",
        href: "#",
        description: "Application Mobile"
    },
    {
        name: "Windows",
        icon: <Monitor className="w-6 h-6" />,
        status: "available",
        href: "#",
        description: ".exe installer"
    },
    {
        name: "Linux",
        icon: <Terminal className="w-6 h-6" />,
        status: "available",
        href: "#",
        description: "AppImage / deb"
    },
    {
        name: "iOS",
        icon: <Apple className="w-6 h-6" />,
        status: "soon",
        href: "#",
        description: "Prochainement"
    },
    {
        name: "MacOS",
        icon: <Apple className="w-6 h-6" />,
        status: "soon",
        href: "#",
        description: "Prochainement"
    }
];

export function Download() {
    return (
        <section className="py-24 px-6 relative overflow-hidden bg-background" id="download">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
                    >
                        <DownloadIcon className="w-4 h-4" />
                        Prêt à commencer ?
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.08 }}
                        className="text-4xl md:text-5xl font-bold font-space mb-6 bg-linear-to-b from-foreground to-foreground/70 bg-clip-text text-transparent"
                    >
                        Télécharge ClipboardX
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.15 }}
                        className="text-lg text-primary/60 max-w-2xl mx-auto"
                    >
                        Choisissez vos plateformes et commencez à synchroniser vos données en local dès maintenant.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6 max-w-7xl mx-auto">
                    {DOWNLOADS.map((platform, index) => (
                        <motion.div
                            key={platform.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.08 }}
                            className="w-full"
                        >
                            <Magnetic intensity={0.2} range={100} actionArea="self">
                                <a
                                    href={platform.href}
                                    className={`group relative flex flex-col items-center gap-4 p-8 rounded-3xl border transition-all duration-300 ${
                                        platform.status === 'available'
                                            ? "bg-card/30 border-primary/10 hover:border-primary/30 backdrop-blur-xl"
                                            : "bg-primary/5 border-transparent opacity-60 cursor-not-allowed"
                                    }`}
                                >
                                    <div className={`p-4 rounded-2xl transition-colors duration-300 ${
                                        platform.status === 'available'
                                            ? "bg-primary/5 group-hover:bg-primary/10"
                                            : "bg-primary/5"
                                    }`}>
                                        {platform.icon}
                                    </div>
                                    <div className="text-center">
                                        <h3 className="text-xl font-bold font-poppins">{platform.name}</h3>
                                        <p className="text-sm text-primary/40">{platform.description}</p>
                                    </div>
                                    
                                    {platform.status === 'soon' && (
                                        <div className="absolute top-4 right-4 px-2 py-0.5 rounded-full bg-primary/10 border border-primary/20">
                                            <p className="text-[10px] font-bold uppercase tracking-wider text-primary/60">Bientôt</p>
                                        </div>
                                    )}

                                    <div className="absolute inset-0 rounded-3xl bg-linear-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                                </a>
                            </Magnetic>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Decorative background elements */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-primary/10 rounded-full blur-[60px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[80px] pointer-events-none" />
        </section>
    );
}
