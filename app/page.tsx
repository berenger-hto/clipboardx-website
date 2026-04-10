import { Navbar } from "@/components/ui/Navbar";
import { Hero } from "@/components/ui/sections/Hero";
import { WhyClipboardX } from "@/components/ui/sections/WhyClipboardX";
import { Features } from "@/components/ui/sections/Features";
import { HowItWorks } from "@/components/ui/sections/HowItWorks";
import { UseCases } from "@/components/ui/sections/UseCases";
import { FAQ } from "@/components/ui/sections/FAQ";
import { Download } from "@/components/ui/sections/Download";
import { InstallationGuide } from "@/components/ui/sections/InstallationGuide";
import { Waitlist } from "@/components/ui/sections/Waitlist";
import { Feedback } from "@/components/ui/sections/Feedback";
import { Footer } from "@/components/ui/sections/Footer";

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <Navbar showTabs={true} />
      <Hero />
      <WhyClipboardX />
      <Features />
      <HowItWorks />
      <UseCases />
      <FAQ />
      <Download />
      <InstallationGuide />
      <Waitlist />
      <Feedback />
      <Footer />
    </main>
  );
}