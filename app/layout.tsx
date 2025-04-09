import type React from "react"
import { SidebarProvider } from "@/components/ui/sidebar"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"
import { AppSidebar } from "@/components/app-sidebar"

export const metadata = {
  title: "CBRN Management System",
  description: "Chemical, Biological, Radiological, Nuclear Management System",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <SidebarProvider>
            <div className="flex h-screen bg-slate-900 text-white">
              <AppSidebar />
              <div className="flex flex-col w-full">
                <TopBar />
                <main className="flex-1 overflow-auto">{children}</main>
              </div>
            </div>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

const TopBar = () => {
  return (
    <div className="flex justify-between items-center px-6 py-4 bg-slate-950 shadow-md w-full">
      {/* Left side: Title and Subtitle */}
      <div className="flex flex-col">
        <h2 className="text-xl font-semibold">CBRN Management System</h2>
        <p className="text-slate-400 text-sm">Select a section from the sidebar</p>
      </div>

      {/* Right side: Buttons */}
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-md transition">
          <span className="sr-only">Sign In</span>
          <span>Sign In</span>
        </button>
        <button className="flex items-center gap-2 bg-red-600 hover:bg-red-500 px-4 py-2 rounded-md transition">
          <span className="sr-only">Sign Out</span>
          <span>Sign Out</span>
        </button>
      </div>
    </div>
  )
}


import './globals.css'