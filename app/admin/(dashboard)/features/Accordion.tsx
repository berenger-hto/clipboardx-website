"use client"

import { motion, AnimatePresence } from "motion/react"
import { Plus } from "lucide-react"
import type { FeatureData } from "@/types/types"
import { Dispatch, SetStateAction } from "react"
import { Skeleton } from "@/components/ui/skeleton"

type Props = {
    index: number
    openIndex: number | null
    setOpenIndex: Dispatch<SetStateAction<number | null>>
    item: Pick<FeatureData, "title" | "description" | "type">
}

export function Accordion({ item, index, openIndex, setOpenIndex }: Props) {
    const isOpen = openIndex === index

    return <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.05 }}
        className="overflow-hidden"
    >
        <button
            onClick={() => setOpenIndex(isOpen ? null : index)}
            className={`w-full p-6 text-left flex items-start gap-4 rounded-2xl transition-all duration-300 ${isOpen
                ? "bg-card border border-primary/20 shadow-2xl shadow-primary/5"
                : "bg-card/40 border border-primary/5 hover:border-primary/10 hover:bg-card/60"
                }`}
        >
            <div className={`mt-1 p-1 rounded-full border transition-all duration-300 ${isOpen ? "bg-primary/10 border-primary/20" : "bg-primary/5 border-primary/10"}`}>
                <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                    <Plus size={14} className={isOpen ? "text-primary" : "text-primary/60"} />
                </motion.div>
            </div>
            <div className="flex-1">
                <h3 className={`text-lg font-bold transition-colors duration-300 ${isOpen ? "text-primary" : "text-primary/80"}`}>
                    {item.title} {" "} <span className="text-foreground/60">({item.type[0].toUpperCase() + item.type.slice(1)})</span>
                </h3>

                <AnimatePresence initial={false}>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                        >
                            <p className="text-primary/60 mt-4 leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </button>
    </motion.div>
}

export function AccordionLoader() {
    return <Skeleton className="w-full h-20 rounded-2xl opacity-50" /> 
}