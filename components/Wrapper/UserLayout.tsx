"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart3, FileText, User, Menu, X, Settings, LogOut, Bell, HelpCircle , User2 } from "lucide-react"
import { getUserProfile } from "@/services/admin"
const navigation = [
  { name: "Dashboard", href: "/user/dashboard", icon: BarChart3 },
  // { name: "Docs & Agreements", href: "/user/docs", icon: FileText },
  { name: "Profile", href: "/user/profile", icon: User },
]

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [name,setName] = useState("User")
  const pathname = usePathname()
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await getUserProfile()
        console.log(response.data)
        setName(response.data.username)
        if (response.status < 200 || response.status >= 300) {
          throw new Error("Failed to fetch user profile")
        }
      } catch (err:any) {
        console.log(err.response)
      } 
    }

    fetchUserProfile()
  }, [])

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024)
      if (window.innerWidth >= 1024) {
        setSidebarOpen(false)
      }
    }

    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)
    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])

  useEffect(() => {
    if (isMobile) {
      setSidebarOpen(false)
    }
  }, [pathname, isMobile])

  return (
    <div className="min-h-screen">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-[var(--primary-color)] bg-opacity-75 transition-opacity duration-300 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Mobile sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col bg-white shadow-xl transition-transform duration-300 ease-in-out lg:hidden ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-16 items-center justify-between px-6 border-b border-[var(--secondary-light-color)]">
          <h1 className="text-xl font-bold text-[var(--primary-color)]">BusinessHub</h1>
          <button onClick={() => setSidebarOpen(false)} className="rounded-md p-2 hover:bg-[var(--secondary-light-color)] transition-colors">
            <X className="h-5 w-5 text-[var(--primary-hover-color)]" />
          </button>
        </div>
        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-[var(--secondary-light-color)] text-[var(--primary-color)] border border-[var(--primary-hover-color)] shadow-sm"
                    : "text-[var(--primary-hover-color)] hover:bg-[var(--secondary-light-color)] hover:text-[var(--primary-color)]"
                }`}
                onClick={() => setSidebarOpen(false)}
              >
                <item.icon className="h-5 w-5 flex-shrink-0" />
                <span className="truncate">{item.name}</span>
              </Link>
            )
          })}
        </nav>
        <div className="border-t border-[var(--secondary-light-color)] p-4 space-y-2">
          <button className="flex items-center gap-3 w-full px-3 py-2 text-sm text-[var(--primary-hover-color)] hover:bg-[var(--secondary-light-color)] rounded-lg transition-colors">
            <LogOut className="h-5 w-5 flex-shrink-0" />
            <span>Sign Out</span>
          </button>
        </div>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col bg-white border-r border-[var(--secondary-light-color)] shadow-sm">
        <div className="flex h-16 items-center px-6 border-b border-[var(--secondary-light-color)]">
          <h1 className="text-xl font-bold text-[var(--primary-color)]">BusinessHub</h1>
        </div>
        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-[var(--secondary-light-color)] text-[var(--primary-color)] border border-[var(--primary-hover-color)] shadow-sm"
                    : "text-[var(--primary-hover-color)] hover:bg-[var(--secondary-light-color)] hover:text-[var(--primary-color)]"
                }`}
              >
                <item.icon className="h-5 w-5 flex-shrink-0" />
                <span className="truncate">{item.name}</span>
              </Link>
            )
          })}
        </nav>
        <div className="border-t border-[var(--secondary-light-color)] p-4 space-y-2">
          <button className="flex items-center gap-3 w-full px-3 py-2 text-sm text-[var(--primary-hover-color)] hover:bg-[var(--secondary-light-color)] rounded-lg transition-colors">
            <LogOut className="h-5 w-5 flex-shrink-0" />
            <span>Sign Out</span>
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-64">
        {/* Enhanced top bar */}
        <div className="sticky top-0 z-30 flex h-16 items-center gap-x-4 border-b border-[var(--secondary-light-color)] bg-white/95 backdrop-blur-sm px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
          <button
            type="button"
            className="lg:hidden -m-2.5 p-2.5 text-[var(--primary-hover-color)] hover:bg-[var(--secondary-light-color)] rounded-md transition-colors"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>

          <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
            <div className="flex items-center gap-x-4 lg:gap-x-6">
              <div className="hidden lg:block lg:h-6 lg:w-px lg:bg-[var(--secondary-light-color)]" />
            </div>
            <div className="flex flex-1 justify-end items-center gap-x-4 lg:gap-x-6">
              <button className="p-2 text-[var(--primary-hover-color)] hover:text-[var(--primary-color)] hover:bg-[var(--secondary-light-color)] rounded-md transition-colors">
                <Bell className="h-5 w-5" />
              </button>
              <div className="hidden sm:flex sm:items-center sm:gap-x-4">
                <div className="text-sm text-[var(--primary-hover-color)]">
                  Welcome back, <span className="font-medium">{name}</span>
                </div>
                <div className="h-8 w-8 rounded-full bg-[var(--primary-color)] flex items-center justify-center shadow-sm">
                 <User2 className="text-white text-sm"></User2>
                </div>
              </div>
              <div className="sm:hidden">
                <div className="h-8 w-8 rounded-full bg-[var(--primary-color)] flex items-center justify-center shadow-sm">
                  <span className="text-sm font-medium text-white">JD</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Page content with improved responsive padding */}
        <main className="py-6 px-4 sm:py-8 sm:px-6 lg:px-8 max-w-7xl mx-auto">{children}</main>
      </div>
    </div>
  )
}