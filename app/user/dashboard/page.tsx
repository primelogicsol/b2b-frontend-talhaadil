"use client"

import { BarChart3, TrendingUp, Users, Target, ArrowUpRight } from "lucide-react"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell } from "recharts"
import { useState, useEffect } from "react"
import { getUserProfile } from "@/services/admin"

const partnerships = [
  "drop_shipping",
  "consignment",
  "import_export",
  "wholesale",
  "exhibition",
  "auction",
  "white_label",
  "brick_mortar",
  "design_collaboration",
  "storytelling",
  "warehouse",
  "packaging",
  "logistics",
  "museum_institutional",
  "ngo_government",
  "technology_partnership",
]

const monthlyKPIData = [
  { month: "Jan", kpi: 72, retention: 88, partnerships: 3 },
  { month: "Feb", kpi: 75, retention: 89, partnerships: 4 },
  { month: "Mar", kpi: 78, retention: 90, partnerships: 4 },
  { month: "Apr", kpi: 82, retention: 91, partnerships: 5 },
  { month: "May", kpi: 85, retention: 92, partnerships: 6 },
  { month: "Jun", kpi: 85, retention: 92, partnerships: 6 },
]

const partnershipDistribution = [
  { name: "Active", value: 6, color: "#3b82f6" },
  { name: "In Progress", value: 2, color: "#06b6d4" },
  { name: "Pending", value: 8, color: "#e5e7eb" },
]


interface UserProfile {
  id: number
  username: string
  email: string
  role: string
  is_active: boolean
  visibility_level: number
  ownership: {
    [key: string]: string[]
  }
  kpi_score: number
  partnership_level: string
  retention_period: string
  is_registered: string
  registration_step: number
}

export default function DashboardPage() {
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await getUserProfile()
        console.log(response.data)
        if (response.status < 200 || response.status >= 300) {
          throw new Error("Failed to fetch user profile")
        }
        setUserProfile(response.data)
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred")
      } finally {
        setLoading(false)
      }
    }

    fetchUserProfile()
  }, [])

  if (loading) {
    return (
      <div className="space-y-8">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/3 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="bg-white rounded-lg border border-blue-200 shadow-sm p-6">
              <div className="animate-pulse">
                <div className="h-4 bg-gray-200 rounded w-2/3 mb-4"></div>
                <div className="h-8 bg-gray-200 rounded w-1/2"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (error || !userProfile) {
    return (
      <div className="space-y-8">
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <h3 className="text-red-800 font-medium">Error loading dashboard</h3>
          <p className="text-red-600 text-sm mt-1">{error || "No user profile data available"}</p>
        </div>
      </div>
    )
  }

  const currentKPI = userProfile.kpi_score
  const currentPartnership = userProfile.registration_step
  const nextMilestone = partnerships[currentPartnership]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard Overview</h1>
        <p className="text-gray-600 mt-2">
          Welcome back, {userProfile.username}! Here's your business performance summary.
        </p>
        {userProfile.is_registered === "PENDING" && (
          <div className="mt-2 px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full inline-block">
            Registration Status: {userProfile.is_registered}
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg border border-blue-200 shadow-sm">
          <div className="flex flex-row items-center justify-between space-y-0 pb-2 p-6">
            <h3 className="text-sm font-medium text-gray-600">Current KPI Score</h3>
            <BarChart3 className="h-4 w-4 text-blue-600" />
          </div>
          <div className="px-6 pb-6">
            <div className="text-2xl font-bold text-gray-900">{currentKPI}%</div>
            <div className="flex items-center text-xs mt-1">
              <ArrowUpRight className="h-3 w-3 text-green-600 mr-1" />
              <span className="text-green-600">Current score from API</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-blue-200 shadow-sm">
          <div className="flex flex-row items-center justify-between space-y-0 pb-2 p-6">
            <h3 className="text-sm font-medium text-gray-600">Retention Period</h3>
            <TrendingUp className="h-4 w-4 text-blue-600" />
          </div>
          <div className="px-6 pb-6">
            <div className="text-2xl font-bold text-gray-900">{userProfile.retention_period}</div>
            <p className="text-xs text-gray-600 mt-1">Current retention period</p>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-blue-200 shadow-sm">
          <div className="flex flex-row items-center justify-between space-y-0 pb-2 p-6">
            <h3 className="text-sm font-medium text-gray-600">Partnership Progress</h3>
            <Users className="h-4 w-4 text-blue-600" />
          </div>
          <div className="px-6 pb-6">
            <div className="text-2xl font-bold text-gray-900">{currentPartnership}</div>
            <p className="text-xs text-gray-600 mt-1">of 16 total partnerships</p>
            <p className="text-xs text-blue-600 mt-1">Level: {userProfile.partnership_level}</p>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-blue-200 shadow-sm">
          <div className="flex flex-row items-center justify-between space-y-0 pb-2 p-6">
            <h3 className="text-sm font-medium text-gray-600">Next Milestone</h3>
            <Target className="h-4 w-4 text-blue-600" />
          </div>
          <div className="px-6 pb-6">
            <div className="text-lg font-bold text-gray-900 capitalize">
              {nextMilestone?.replace(/_/g, " ") || "All Complete"}
            </div>
            <p className="text-xs text-blue-600 mt-1">Partnership #{currentPartnership + 1}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg border border-blue-200 shadow-sm">
          <div className="p-6 pb-2">
            <h3 className="text-lg font-semibold text-gray-900">Performance Trends</h3>
            <p className="text-sm text-gray-600">6-month KPI and retention analysis</p>
          </div>
          <div className="p-6 pt-0">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={monthlyKPIData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                  <XAxis dataKey="month" stroke="#64748b" fontSize={12} />
                  <YAxis stroke="#64748b" fontSize={12} />
                  <Area type="monotone" dataKey="kpi" stackId="1" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} />
                  <Area
                    type="monotone"
                    dataKey="retention"
                    stackId="2"
                    stroke="#06b6d4"
                    fill="#06b6d4"
                    fillOpacity={0.6}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-blue-200 shadow-sm">
          <div className="p-6 pb-2">
            <h3 className="text-lg font-semibold text-gray-900">Partnership Distribution</h3>
            <p className="text-sm text-gray-600">Current status breakdown</p>
          </div>
          <div className="p-6 pt-0">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={partnershipDistribution}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {partnershipDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-center gap-6 mt-4">
              {partnershipDistribution.map((item) => (
                <div key={item.name} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-sm text-gray-600">
                    {item.name}: {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-blue-200 shadow-sm">
        <div className="p-6 pb-2">
          <h3 className="text-xl font-semibold text-gray-900">Partnership Progress</h3>
          <p className="text-gray-600">Track your journey through all 16 partnership levels</p>
        </div>
        <div className="p-6 pt-0 space-y-6">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700">Overall Progress</span>
            <span className="text-sm text-gray-600">{currentPartnership}/16 partnerships</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-blue-600 h-3 rounded-full transition-all duration-300"
              style={{ width: `${(currentPartnership / 16) * 100}%` }}
            ></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            {partnerships.map((partnership, index) => (
              <div
                key={partnership}
                className={`p-4 rounded-lg border-2 transition-all ${
                  index < currentPartnership
                    ? "border-green-200 bg-green-50"
                    : index === currentPartnership
                      ? "border-blue-200 bg-blue-50"
                      : "border-gray-200 bg-gray-50"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-gray-500">#{index + 1}</span>
                  <div
                    className={`w-3 h-3 rounded-full ${
                      index < currentPartnership
                        ? "bg-green-500"
                        : index === currentPartnership
                          ? "bg-blue-500"
                          : "bg-gray-300"
                    }`}
                  />
                </div>
                <h4 className="text-sm font-medium text-gray-900 capitalize">{partnership.replace(/_/g, " ")}</h4>
                <p className="text-xs text-gray-600 mt-1">
                  {index < currentPartnership ? "Completed" : index === currentPartnership ? "In Progress" : "Upcoming"}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
