"use client"

import { useState } from "react";
import { AddFeatureForm } from "./AddFeatureForm";
import { useQuery } from "@tanstack/react-query";
import { Accordion, AccordionLoader } from "./Accordion";
import { APIResponse, FeatureData } from "@/types/types";

export default function AdminFeature() {

    const { data, isLoading, error, isRefetching } = useQuery({
        queryKey: ["features"],
        queryFn: async () => {
            const response = await fetch("/api/features")
            const data = await response.json() as APIResponse & {data: FeatureData[]}
            return data
        }
    })

    const [openIndex, setOpenIndex] = useState<number | null>(null)
    
    return <>
        <AddFeatureForm />
        <div>
            <h1 className="text-4xl font-black tracking-tight font-space italic uppercase mb-10 mt-2">
                FEATURES
            </h1>
            <div className="flex flex-col gap-4">
                {isLoading && <>
                    {Array.from({ length: 7 }).map((_, i) => (
                        <AccordionLoader key={i} />
                    ))}
                </>}
                {isRefetching && <AccordionLoader />}
                {error && <p className="text-center font-bold font-mono text-xl text-red-400">Une erreur s'est produite !</p>}
                {data && !data.data.length && !isLoading && !isRefetching && <p className="text-center font-bold font-mono text-xl">Aucune feature</p>}
                {data?.data.map((item, index) => (
                    <Accordion 
                        key={index} 
                        index={index} 
                        item={item} 
                        openIndex={openIndex} 
                        setOpenIndex={setOpenIndex} 
                    />
                ))}
            </div>
        </div>
    </>
}