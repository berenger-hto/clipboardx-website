import { Navbar } from "@/components/ui/Navbar";
import { Metadata } from "next";
import { Footer } from "@/components/ui/sections/Footer";
import { FeaturesComp } from "@/components/features/FeaturesComp";
import type { APIResponse, FeatureData } from "@/types/types";

export const metadata: Metadata = {
    title: "ClipboardX - Nouveautés"
}

export default async function Page() {
    const data = await fetch(`${process.env.HOSTNAME}/api/features`)
    const res = await data.json() as APIResponse & { data: FeatureData[] }
   
   return <div className="min-h-screen w-full bg-background flex flex-col">
        <Navbar />
        <FeaturesComp data={res.data} />
        <Footer />
    </div>

}