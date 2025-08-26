"use client"

import type React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import {
  BarChart3,
  Users,
  Briefcase,
  Building2,
  Calendar,
  Menu,
  X,
  ChevronRight,
  LogOut,
  ChevronsLeft,
  ChevronsRight,
  UserCog,
} from "lucide-react"

const navigation = [
  // { name: "Dashboard", href: "/admin", icon: BarChart3 },
  { name: "Users", href: "/admin/users", icon: Users },
  { name: "Jobs", href: "/admin/jobs", icon: Briefcase },
  { name: "Team", href: "/admin/team", icon: Building2 },
  { name: "Appointments", href: "/admin/appointments", icon: Calendar },
  { name: "Other Admins", href: "/admin/other-admins", icon: UserCog },
]

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen bg-white shadow-xl border-r border-slate-200 flex flex-col z-40 transition-all duration-300 justify-between
        ${collapsed ? "w-21" : "w-72"}
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0`}
      >
        <div className="flex items-center justify-between h-20 px-4 border-b border-slate-200">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            {!collapsed && (
              <div>
                <Link href='/admin' >
                <h1 className="text-xl font-bold text-slate-900">Admin Panel</h1>
                <p className="text-xs text-slate-500">Management Dashboard</p></Link>
                
              </div>
            )}
          </div>
          <button
            type="button"
            onClick={() => setCollapsed(!collapsed)}
            className="hidden lg:flex p-2 rounded-lg text-slate-500 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          >
            {collapsed ? <ChevronsRight className="w-5 h-5" /> : <ChevronsLeft className="w-5 h-5" />}
          </button>
        </div>

        <nav className="flex-1 px-2 py-6 space-y-2 overflow-y-auto">
          {navigation.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/admin" && pathname.startsWith(item.href))
            const Icon = item.icon
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`group flex items-center justify-between rounded-xl transition-all duration-200 ${
                  isActive
                    ? "bg-blue-600 text-white shadow-lg"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                } ${collapsed ? "px-3 py-3" : "px-4 py-3"}`}
                onClick={() => setSidebarOpen(false)}
              >
                <div className="flex items-center">
                  <Icon
                    className={`h-5 w-5 ${isActive ? "text-white" : "text-slate-400 group-hover:text-slate-600"}`}
                  />
                  {!collapsed && <span className="ml-3">{item.name}</span>}
                </div>
                {!collapsed && (
                  <ChevronRight
                    className={`h-4 w-4 transition-transform ${
                      isActive ? "text-white/70 rotate-90" : "text-slate-300 group-hover:text-slate-500"
                    }`}
                  />
                )}
              </Link>
            )
          })}
        </nav>

        <div className="p-4 border-t border-slate-200">
          <button
            className={`w-full flex items-center justify-center space-x-2 px-4 py-3 bg-blue-600 text-white text-sm font-semibold rounded-xl shadow-md hover:bg-blue-700 active:bg-blue-800 transition-colors duration-200 ${
              collapsed ? "justify-center px-0" : ""
            }`}
            onClick={() => console.log("Logging out...")}
          >
            <LogOut className="w-4 h-4" />
            {!collapsed && <span>Logout</span>}
          </button>
        </div>
      </div>

      {/* Mobile topbar */}
      <div className="lg:hidden fixed top-0 left-0 w-full h-14 bg-white flex items-center justify-between px-4 shadow-sm border-b border-slate-200 z-50">
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

      {/* Main content */}
      <div className={`flex-1 ${collapsed ? "lg:ml-20" : "lg:ml-72"} w-full`}>
        <main className="p-6 lg:p-8 mt-14 lg:mt-0">{children}</main>
      </div>
    </div>
  )
}
