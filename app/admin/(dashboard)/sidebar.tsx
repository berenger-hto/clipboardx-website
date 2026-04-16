"use client"

import { AppSidebar } from "@/components/app-sidebar"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
    BreadcrumbPage,
} from "@/components/ui/breadcrumb"
import {
    SidebarInset,
    SidebarTrigger,
} from "@/components/ui/sidebar"
import { useSession } from "next-auth/react"
import { usePathname } from "next/navigation"

export default function Sidebar({ children }: { children?: React.ReactNode }) {
    const session = useSession()
    const pathname = usePathname()
    let title = pathname.split("/").at(-1) ?? "Admin"
    title = title[0].toUpperCase() + title.slice(1)

    return <>
        <AppSidebar
            username={session.data?.user?.name || ""}
            userImage={session.data?.user?.image}
        />

        <SidebarInset>
            <header className="flex h-16 shrink-0 items-center justify-between border-b px-4">
                <div className="flex items-center gap-2">
                    <SidebarTrigger className="-ml-1" />
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbPage>{title}</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </header>
            <div className="flex flex-1 flex-col gap-4 p-4">
                {children}
            </div>
        </SidebarInset>
    </>
}
