import { auth } from "@/auth"
import { redirect } from "next/navigation"
import { Dashboard } from "./dashboard"
import { SessionProvider } from "next-auth/react"

export default async function Administrator() {
  const session = await auth()

  if (!session || session.user?.email !== process.env.AUTHORIZE_MAIL) {
    redirect("/admin/login")
  }

  return (
    <SessionProvider session={session}>
      <Dashboard />
    </SessionProvider>
  )
}