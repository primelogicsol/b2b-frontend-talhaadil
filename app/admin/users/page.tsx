"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Search, Filter, Eye, Mail, ShoppingCart, Store } from "lucide-react"
import { getAllUsers } from "@/services/admin"

interface ApiUser {
  id: number
  username: string
  email: string
  role: string
  is_active: boolean
  visibility_level: number
  ownership: Record<string, string[]>
  kpi_score: number
  partnership_level: string
  retention_period: string
  is_registered:string
}

interface User {
  id: number
  name: string
  email: string
  role: string
  type: "buyer" | "vendor"
  status: "active" | "inactive"
  kpiScore: number
  partnershipLevel: string
  retentionPeriod: string
  isRegistered:string

}

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [activeTab, setActiveTab] = useState<"all" | "buyers" | "vendors">("all")

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true)
        const response = await getAllUsers()
        if (response.status < 200 || response.status >= 300) {
          throw new Error("Failed to fetch users")
        }
        const apiUsers: ApiUser[] = response.data;

        const transformedUsers: User[] = apiUsers
          .filter(user => user.role === "vendor" || user.role === "buyer")
          .map(user => ({
            id: user.id,
            name: user.username,
            email: user.email,
            role: user.role,
            type: user.role === "vendor" ? "vendor" : "buyer",
            status: user.is_active ? "active" : "inactive",
            kpiScore: user.kpi_score,
            partnershipLevel: user.partnership_level,
            retentionPeriod: user.retention_period,
            isRegistered:user.is_registered,
          }));

        setUsers(transformedUsers)
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred")
      } finally {
        setLoading(false)
      }
    }

    fetchUsers()
  }, [])

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || user.status === statusFilter
    const matchesTab = activeTab === "all" || user.type === activeTab.slice(0, -1)
    return matchesSearch && matchesStatus && matchesTab
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-700 border-green-200"
      case "inactive":
        return "bg-red-100 text-red-700 border-red-200"
      default:
        return "bg-gray-100 text-gray-700 border-gray-200"
    }
  }

  const getKPIColor = (score: number) => {
    if (score >= 90) return "bg-green-100 text-green-700 border-green-200"
    if (score >= 80) return "bg-yellow-100 text-yellow-700 border-yellow-200"
    return "bg-red-100 text-red-700 border-red-200"
  }

  const getTypeIcon = (type: string) => {
    return type === "buyer" ? ShoppingCart : Store
  }

  const getTypeColor = (type: string) => {
    return type === "buyer"
      ? "bg-blue-100 text-blue-700 border-blue-200"
      : "bg-purple-100 text-purple-700 border-purple-200"
  }

  const buyersCount = users.filter((u) => u.type === "buyer").length
  const vendorsCount = users.filter((u) => u.type === "vendor").length

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-center h-64">
          <div className="text-lg text-red-600">Error: {error}</div>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold text-slate-900">Users Management</h1>
          <p className="text-slate-600 mt-2 text-lg">Manage buyers and vendors with their detailed information</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search users..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-2 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200">
        <div className="border-b border-slate-200">
          <nav className="flex space-x-8 px-6">
            <button
              onClick={() => setActiveTab("all")}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${activeTab === "all"
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300"
                }`}
            >
              All Users ({users.length})
            </button>
            <button
              onClick={() => setActiveTab("buyers")}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors flex items-center space-x-2 ${activeTab === "buyers"
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300"
                }`}
            >
              <ShoppingCart className="w-4 h-4" />
              <span>Buyers ({buyersCount})</span>
            </button>
            <button
              onClick={() => setActiveTab("vendors")}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors flex items-center space-x-2 ${activeTab === "vendors"
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300"
                }`}
            >
              <Store className="w-4 h-4" />
              <span>Vendors ({vendorsCount})</span>
            </button>
          </nav>
        </div>

        <div className="px-6 py-4 bg-slate-50">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-900">
              {activeTab === "all" ? "All Users" : activeTab === "buyers" ? "Buyers" : "Vendors"} (
              {filteredUsers.length})
            </h2>
            <div className="flex items-center space-x-2 text-sm text-slate-500">
              <Filter className="w-4 h-4" />
              <span>Filtered Results</span>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                  User Details
                </th>

                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                  Role
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                  KPI Score
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                  Register
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {filteredUsers.map((user) => {
                const TypeIcon = getTypeIcon(user.type)
                return (
                  <tr key={user.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                          <span className="text-white font-semibold text-sm">
                            {user.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </span>
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-slate-900">{user.name}</div>
                          <div className="flex items-center text-sm text-slate-500 mt-1">
                            <Mail className="w-3 h-3 mr-1" />
                            {user.email}
                          </div>
                          <div className="text-xs text-slate-400 mt-1">ID: {user.id}</div>
                        </div>
                      </div>
                    </td>

                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full border ${getTypeColor(user.type)}`}
                      >
                        <TypeIcon className="w-3 h-3 mr-1" />
                        {user.role}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full border ${getKPIColor(user.kpiScore)}`}
                      >
                        {user.kpiScore}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full border `}
                      >
                        {user.isRegistered}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full border ${getStatusColor(user.status)}`}
                      >
                        {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <Link
                        href={`/admin/users/${user.id}-${user.isRegistered}`}
                        className="inline-flex items-center px-3 py-1 text-sm font-medium text-blue-600 hover:text-blue-800 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
                      >
                        <Eye className="w-4 h-4 mr-1" />
                        View Details
                      </Link>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
