import { Navbar } from "@/components/ui/Navbar";
import { Hero } from "@/components/ui/sections/Hero";
import { WhyClipboardX } from "@/components/ui/sections/WhyClipboardX";
import { Features } from "@/components/ui/sections/Features";
import { HowItWorks } from "@/components/ui/sections/HowItWorks";
import { UseCases } from "@/components/ui/sections/UseCases";
import { Download } from "@/components/ui/sections/Download";
import { Footer } from "@/components/ui/sections/Footer";

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <Navbar />
      <Hero />
      <WhyClipboardX />
      <Features />
      <HowItWorks />
      <UseCases />
      <Download />
      <Footer />
    </main>
  );
}