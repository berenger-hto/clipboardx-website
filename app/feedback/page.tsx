import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/sections/Footer";
import { Metadata } from "next";
import { FeedbackForm } from "@/components/feedback/FeedbackForm";

export const metadata: Metadata = {
  title: "ClipboardX - Feedback",
  description: "Donne ton avis pour améliorer ClipboardX",
};

export default function FeedbackPage() {
  return (
    <main className="flex flex-col w-full min-h-screen mt-20">
      <Navbar />
      <div className="flex-1 flex items-center justify-center p-6 bg-background/50 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
        <FeedbackForm />
      </div>
      <Footer />
    </main>
  );
}
