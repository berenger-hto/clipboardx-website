"use client"

import { useSession, signOut } from "next-auth/react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/ui/Navbar"
import { Footer } from "@/components/ui/sections/Footer"
import { IconLogout, IconUser } from "@tabler/icons-react"

export function Dashboard() {
    const { data: session } = useSession()

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Navbar />
            
            <main className="flex-1 p-8 mt-24">
                <div className="max-w-4xl mx-auto space-y-8">
                    <div className="flex justify-between items-center">
                        <h1 className="text-3xl font-bold font-space">Tableau de bord Admin</h1>
                        <Button 
                            variant="secondary" 
                            onClick={() => signOut({ callbackUrl: "/admin/login" })}
                            className="flex gap-2 items-center"
                        >
                            <IconLogout className="w-4 h-4" />
                            Déconnexion
                        </Button>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <Card className="md:col-span-1">
                            <CardHeader className="flex flex-row items-center gap-4">
                                <div className="p-2 bg-primary/10 rounded-full">
                                    <IconUser className="w-8 h-8 text-primary" />
                                </div>
                                <div>
                                    <CardTitle className="text-lg">Profil</CardTitle>
                                    <CardDescription>Connecté en tant que</CardDescription>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="font-medium text-sm truncate">{session?.user?.email}</p>
                                <p className="text-muted-foreground text-xs mt-1 lowercase italic">{session?.user?.name}</p>
                            </CardContent>
                        </Card>

                        <Card className="md:col-span-2">
                            <CardHeader>
                                <CardTitle>Statistiques</CardTitle>
                                <CardDescription>Aperçu rapide de l'activité.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="h-32 flex items-center justify-center border-2 border-dashed border-primary/10 rounded-xl">
                                    <p className="text-muted-foreground text-sm">Les statistiques seront bientôt disponibles.</p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}