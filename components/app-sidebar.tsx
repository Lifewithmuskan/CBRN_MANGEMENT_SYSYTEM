"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Sidebar, SidebarContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar"
import { Home, Mail, AlertTriangle } from "lucide-react"

export function AppSidebar() {
  const pathname = usePathname()
  const [showAgents, setShowAgents] = useState(false)

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={pathname === "/"}>
              <Link href="/">
                <Home className="h-5 w-5" />
                <span>Home</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={pathname === "/messages"}>
              <Link href="/messages">
                <Mail className="h-5 w-5" />
                <span>Messages</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          {/* Agents Dropdown */}
          <div className="relative">
            <SidebarMenuItem>
              <SidebarMenuButton
                onClick={() => setShowAgents(!showAgents)}
                isActive={["/chemical", "/biological", "/radiological", "/nuclear"].includes(pathname)}
              >
                <AlertTriangle className="h-5 w-5" />
                <span>CBRN Agents</span>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <AnimatePresence>
              {showAgents && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="ml-8 mt-2 flex flex-col gap-1"
                >
                  <DropdownItem href="/chemical" label="Chemical" isActive={pathname === "/chemical"} />
                  <DropdownItem href="/biological" label="Biological" isActive={pathname === "/biological"} />
                  <DropdownItem href="/radiological" label="Radiological" isActive={pathname === "/radiological"} />
                  <DropdownItem href="/nuclear" label="Nuclear" isActive={pathname === "/nuclear"} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  )
}

const DropdownItem = ({ href, label, isActive }) => (
  <Link
    href={href}
    className={`flex items-center gap-2 px-3 py-2 hover:bg-slate-700 text-sm rounded-md transition-colors ${
      isActive ? "bg-slate-700" : ""
    }`}
  >
    <span>{label}</span>
  </Link>
)
