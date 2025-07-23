"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { BarChart3, Users, Briefcase, Building2, Calendar, Menu, X, ChevronRight } from "lucide-react"

const navigation = [
  { name: "Dashboard", href: "/admin", icon: BarChart3 },
  { name: "Users", href: "/admin/users", icon: Users },
  { name: "Jobs", href: "/admin/jobs", icon: Briefcase },
  { name: "Team", href: "/admin/team", icon: Building2 },
  { name: "Appointments", href: "/admin/appointments", icon: Calendar },
]

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Mobile menu button */}
      <div className="lg:hidden">
        <div className="flex items-center justify-between bg-white px-4 py-3 shadow-sm border-b border-slate-200">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-xl font-bold text-slate-900">Admin Panel</h1>
          </div>
          <button
            type="button"
            className="p-2 rounded-lg text-slate-500 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div
          className={`${sidebarOpen ? "block" : "hidden"} lg:block lg:w-72 bg-white shadow-xl border-r border-slate-200 min-h-screen`}
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center h-20 px-6 border-b border-slate-200">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-slate-900">Admin Panel</h1>
                  <p className="text-xs text-slate-500">Management Dashboard</p>
                </div>
              </div>
            </div>
            <nav className="flex-1 px-4 py-8 space-y-2">
              {navigation.map((item) => {
                const isActive = pathname === item.href || (item.href !== "/admin" && pathname.startsWith(item.href))
                const Icon = item.icon
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`group flex items-center justify-between px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 ${
                      isActive
                        ? "bg-blue-600 text-white shadow-lg"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                    }`}
                    onClick={() => setSidebarOpen(false)}
                  >
                    <div className="flex items-center">
                      <Icon
                        className={`mr-3 h-5 w-5 ${isActive ? "text-white" : "text-slate-400 group-hover:text-slate-600"}`}
                      />
                      {item.name}
                    </div>
                    <ChevronRight
                      className={`h-4 w-4 transition-transform ${isActive ? "text-white/70" : "text-slate-300 group-hover:text-slate-500"} ${isActive ? "rotate-90" : ""}`}
                    />
                  </Link>
                )
              })}
            </nav>
            <div className="p-4 border-t border-slate-200">
              <div className="bg-slate-50 rounded-xl p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">AD</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900">Admin User</p>
                    <p className="text-xs text-slate-500">admin@company.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 lg:ml-0">
          <main className="p-6 lg:p-8">{children}</main>
        </div>
      </div>
    </div>
  )
}
