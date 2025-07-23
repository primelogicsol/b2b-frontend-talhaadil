"use client"

import { useState, useEffect } from "react"
import { mockUsers, type User } from "@/lib/data"
import StatCard from "@/components/Cards/StatCard"
import { Users, TrendingUp, Trophy, Target, UserCheck, UserX, Clock, DollarSign } from "lucide-react"

export default function AdminDashboard() {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    setUsers(mockUsers)
  }, [])

  const totalUsers = users.length
  const activeUsers = users.filter((u) => u.status === "active").length
  const pendingUsers = users.filter((u) => u.status === "pending").length
  const averageKPI =
    users.length > 0 ? Math.round(users.reduce((sum, user) => sum + user.kpiScore, 0) / users.length) : 0
  const highestKPI = users.length > 0 ? Math.max(...users.map((user) => user.kpiScore)) : 0
  const lowestKPI = users.length > 0 ? Math.min(...users.map((user) => user.kpiScore)) : 0
  const totalDocuments = users.reduce((sum, user) => sum + user.documents.length, 0)

  return (
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              Dashboard Overview
            </h1>
            <p className="text-slate-600 mt-2 text-lg">
              Welcome back! Here's what's happening with your business today.
            </p>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl px-4 py-2 border border-slate-200">
              <span className="text-sm text-slate-500">Last updated:</span>
              <span className="text-sm font-medium text-slate-900 ml-1">{new Date().toLocaleDateString()}</span>
            </div>
          </div>
        </div>

        {/* Primary Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Total Users"
            value={totalUsers}
            icon={Users}
            description="Registered users"
            trend={{ value: 12, isPositive: true }}
            gradient="from-blue-500 to-blue-600"
          />
          <StatCard
            title="Average KPI"
            value={averageKPI}
            icon={TrendingUp}
            description="Overall performance"
            trend={{ value: 8, isPositive: true }}
            gradient="from-green-500 to-emerald-600"
          />
          <StatCard
            title="Highest KPI"
            value={highestKPI}
            icon={Trophy}
            description="Top performer"
            gradient="from-yellow-500 to-orange-600"
          />
          <StatCard
            title="Active Users"
            value={activeUsers}
            icon={UserCheck}
            description="Currently active"
            trend={{ value: 5, isPositive: true }}
            gradient="from-purple-500 to-purple-600"
          />
        </div>

        {/* Secondary Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Pending Users"
            value={pendingUsers}
            icon={Clock}
            description="Awaiting approval"
            gradient="from-amber-500 to-yellow-600"
          />
          <StatCard
            title="Total Documents"
            value={totalDocuments}
            icon={Target}
            description="Uploaded files"
            trend={{ value: 15, isPositive: true }}
            gradient="from-indigo-500 to-purple-600"
          />
          <StatCard
            title="Lowest KPI"
            value={lowestKPI}
            icon={UserX}
            description="Needs improvement"
            gradient="from-red-500 to-pink-600"
          />
          <StatCard
            title="Revenue"
            value="$21.3K"
            icon={DollarSign}
            description="This month"
            trend={{ value: 23, isPositive: true }}
            gradient="from-emerald-500 to-teal-600"
          />
        </div>

   
       

        {/* Department Breakdown */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-slate-200/50 p-6">
          <h3 className="text-xl font-bold text-slate-900 mb-6">Department Breakdown</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {["Engineering", "Marketing", "Sales", "Design"].map((dept, index) => {
              const deptUsers = users.filter((u) => u.department === dept)
              const avgKPI =
                deptUsers.length > 0
                  ? Math.round(deptUsers.reduce((sum, u) => sum + u.kpiScore, 0) / deptUsers.length)
                  : 0
              const gradients = [
                "from-blue-500 to-cyan-500",
                "from-green-500 to-teal-500",
                "from-purple-500 to-pink-500",
                "from-orange-500 to-red-500",
              ]

              return (
                <div
                  key={dept}
                  className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-4 border border-slate-200"
                >
                  <div
                    className={`w-10 h-10 bg-gradient-to-r ${gradients[index]} rounded-lg flex items-center justify-center mb-3`}
                  >
                    <span className="text-white font-bold text-sm">{dept[0]}</span>
                  </div>
                  <h4 className="font-semibold text-slate-900">{dept}</h4>
                  <p className="text-2xl font-bold text-slate-900 mt-1">{deptUsers.length}</p>
                  <p className="text-sm text-slate-500">Avg KPI: {avgKPI}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
  )
}
