import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { AnchoredToastProvider, ToastProvider } from "@/components/ui/toast"
import { CookieConsent } from "@/components/CookieConsent";
import { SidebarProvider } from "@/components/ui/sidebar";
import { QueryProvider } from "@/components/query-provider";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ClipboardX",
  description: "A ClipboardX website",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={cn("h-full", "antialiased", spaceGrotesk.variable)}
      suppressHydrationWarning
    >
      <body className={cn("min-h-full flex flex-col", spaceGrotesk.className)}>
        <QueryProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <SidebarProvider>
              <ToastProvider position="bottom-right">
                <AnchoredToastProvider>
                  {children}
                  <CookieConsent />
                </AnchoredToastProvider>
              </ToastProvider>
            </SidebarProvider>
          </ThemeProvider>

        </QueryProvider>
      </body>
    </html>
  );
}
