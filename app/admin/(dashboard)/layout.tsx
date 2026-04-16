import Sidebar from "./sidebar";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import type { Metadata } from "next"

export const metdata: Metadata = {
    title: "ClipboardX - Admin Dashboard"
}

export default async function AdminLayout({ children }: { children: React.ReactNode }) {

    const session = await auth()

    const isAuthorized = session?.user?.email?.toLowerCase().trim() === process.env.AUTHORIZE_MAIL?.toLowerCase().trim()
    
    if (!session || !isAuthorized) {
        redirect("/admin/login")
    }
    
    return <>
        <Sidebar>
            {children}
        </Sidebar>
    </>
}