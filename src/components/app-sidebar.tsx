"use client"

import Link from "next/link"
import { LogOut, RefreshCw } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { signOut } from "next-auth/react"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarRail,
} from "@/components/ui/sidebar"
import { usePathname } from "next/navigation"
import { sidebarItems } from "@/constants/sidebar"

type Props = React.ComponentProps<typeof Sidebar> & {
    username: string
    userImage?: string | null
}

export function AppSidebar({ username, userImage, ...props }: Props) {
    const pathname = usePathname()
    
    return (
        <Sidebar {...props}>
            <SidebarHeader className="p-5">
                <Link href="/admin" className="flex items-start gap-2 cursor-pointer">
                    <RefreshCw size={20} className="text-black dark:text-white mt-1" />
                    <div className="flex flex-col items-start gap-1">
                        <span className="text-xl font-bold font-space tracking-tight">ClipboardX</span>
                    </div>
                </Link>
            </SidebarHeader>
            <SidebarContent>
                {sidebarItems.map((item, index) => (
                    <SidebarMenu key={index}>
                        <SidebarMenuItem key={item.title} className="mx-2">
                            <SidebarMenuButton 
                                isActive={pathname === `/admin/${item.url}`}
                                className="py-3" 
                                asChild 
                            >
                                <Link href={`/admin/${item.url}`}>{item.title}</Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                ))}
            </SidebarContent>
            <SidebarFooter className="p-4">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton 
                            className="w-full flex items-center justify-between h-auto py-2 cursor-pointer"
                            onClick={() => signOut({ redirectTo: "/admin/login" })}
                        >
                            <div className="flex items-center gap-3">
                                <Avatar className="h-8 w-8 relative">
                                    <AvatarImage src={userImage || ""} />
                                    <AvatarFallback>{username?.charAt(0)?.toUpperCase() || "U"}</AvatarFallback>
                                </Avatar>
                                <div className="flex flex-col items-start text-sm">
                                    <span className="font-medium line-clamp-1">{username}</span>
                                    <span className="text-xs text-muted-foreground hover:text-red-500 transition-colors">Se déconnecter</span>
                                </div>
                            </div>
                            <LogOut className="h-4 w-4 text-muted-foreground ml-auto" />
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    )
}
