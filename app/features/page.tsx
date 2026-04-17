import { Navbar } from "@/components/ui/Navbar";
import { Metadata } from "next";
import { Footer } from "@/components/ui/sections/Footer";
import { FeaturesComp } from "@/components/features/FeaturesComp";
import type { APIResponse, FeatureData } from "@/types/types";
import { Feature } from "@/lib/services/feature"

export const metadata: Metadata = {
    title: "ClipboardX - Nouveautés"
}

export default async function Page() {
    const res = await Feature.getAll() as APIResponse & { data: FeatureData[] }
   
   return <div className="min-h-screen w-full bg-background flex flex-col">
        <Navbar />
        <FeaturesComp data={res.data} />
        <Footer />
    </div>

}