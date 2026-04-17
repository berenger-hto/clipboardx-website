import { signIn } from "@/auth"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { IconBrandGithub } from "@tabler/icons-react"
import { auth } from "@/auth"
import { redirect } from "next/navigation"

export default async function AdminLoginPage() {
    const session = await auth()

    if (session?.user?.email && process.env.AUTHORIZE_MAIL) {
        const isAuthorized = session.user.email.toLowerCase().trim() === process.env.AUTHORIZE_MAIL.toLowerCase().trim()
        if (isAuthorized) {
            redirect("/admin")
        }
    }

    return (
        <div className="min-h-screen w-full bg-background flex flex-col">            
            <main className="flex-1 flex items-center justify-center p-6 bg-linear-to-b from-background to-primary/5">
                <Card className="w-full max-w-md shadow-2xl border-primary/10">
                    <CardHeader className="text-center">
                        <CardTitle className="text-2xl font-bold font-space">Administration</CardTitle>
                        <CardDescription>
                            Accédez au tableau de bord ClipboardX.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="bg-primary/5 border border-primary/10 rounded-xl p-4 text-sm text-primary/60 text-center mb-6">
                            L'accès est actuellement réservé aux administrateurs via GitHub.
                        </div>

                        <form
                            action={async () => {
                                "use server"
                                await signIn("github", { redirectTo: "/admin" })
                            }}
                        >
                            <Button 
                                type="submit" 
                                variant="default" 
                                className="w-full py-6 text-lg font-semibold flex gap-3 items-center"
                            >
                                <IconBrandGithub className="w-6 h-6" />
                                Se connecter avec GitHub
                            </Button>
                        </form>

                        <div className="relative py-4">
                            <div className="absolute inset-0 flex items-center">
                                <span className="w-full border-t border-primary/10" />
                            </div>
                            <div className="relative flex justify-center text-xs uppercase">
                                <span className="bg-card px-2 text-muted-foreground">Sécurité confirmée</span>
                            </div>
                        </div>

                        <p className="text-xs text-center text-muted-foreground px-8">
                            En vous connectant, vous acceptez les conditions d'utilisation de la console d'administration.
                        </p>
                    </CardContent>
                </Card>
            </main>
        </div>
    )
}