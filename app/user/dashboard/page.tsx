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
  { name: "Active", value: 6, color: "var(--primary-color)" },
  { name: "In Progress", value: 2, color: "var(--secondary-color)" },
  { name: "Pending", value: 8, color: "var(--secondary-light-color)" },
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

        const updatedData = {
          ...response.data,
          partnership_level: response.data.partnership_level === "Drop Shipping Vendor"
            ? "drop_shipping"
            : response.data.partnership_level
        }

        setUserProfile(updatedData)
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
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[var(--primary-color)]"></div>
      </div>
    )
  }

  if (error || !userProfile) {
    return (
      <div className="space-y-8">
        <div className="bg-[var(--secondary-light-color)] border border-[var(--secondary-color)] rounded-lg p-4">
          <h3 className="text-[var(--primary-color)] font-medium">Error loading dashboard</h3>
          <p className="text-[var(--secondary-color)] text-sm mt-1">{error || "No user profile data available"}</p>
        </div>
      </div>
    )
  }

  const currentKPI = userProfile.kpi_score
  const currentPartnership = 9
  const nextMilestone = partnerships[currentPartnership+1]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-[var(--primary-color)]">Dashboard Overview</h1>
        <p className="text-[var(--primary-hover-color)] mt-2">
          Welcome back, {userProfile.username}! Here's your business performance summary.
        </p>
        {userProfile.is_registered === "PENDING" && (
          <div className="mt-2 px-3 py-1 bg-[var(--secondary-light-color)] text-[var(--secondary-color)] text-sm rounded-full inline-block">
            Registration Status: {userProfile.is_registered}
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg border border-[var(--primary-hover-color)] shadow-sm">
          <div className="flex flex-row items-center justify-between space-y-0 pb-2 p-6">
            <h3 className="text-sm font-medium text-[var(--primary-hover-color)]">Current KPI Score</h3>
            <BarChart3 className="h-4 w-4 text-[var(--primary-color)]" />
          </div>
          <div className="px-6 pb-6">
            <div className="text-2xl font-bold text-[var(--primary-color)]">{currentKPI}%</div>
            <div className="flex items-center text-xs mt-1">
              <ArrowUpRight className="h-3 w-3 text-[var(--secondary-color)] mr-1" />
              <span className="text-[var(--secondary-color)]">Current score from API</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-[var(--primary-hover-color)] shadow-sm">
          <div className="flex flex-row items-center justify-between space-y-0 pb-2 p-6">
            <h3 className="text-sm font-medium text-[var(--primary-hover-color)]">Retention Period</h3>
            <TrendingUp className="h-4 w-4 text-[var(--primary-color)]" />
          </div>
          <div className="px-6 pb-6">
            <div className="text-2xl font-bold text-[var(--primary-color)]">{userProfile.retention_period}</div>
            <p className="text-xs text-[var(--primary-hover-color)] mt-1">Current retention period</p>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-[var(--primary-hover-color)] shadow-sm">
          <div className="flex flex-row items-center justify-between space-y-0 pb-2 p-6">
            <h3 className="text-sm font-medium text-[var(--primary-hover-color)]">Partnership Progress</h3>
            <Users className="h-4 w-4 text-[var(--primary-color)]" />
          </div>
          <div className="px-6 pb-6">
            <div className="text-2xl font-bold text-[var(--primary-color)]">{currentPartnership+1}</div>
            <p className="text-xs text-[var(--primary-hover-color)] mt-1">of 16 total partnerships</p>
           
          </div>
        </div>

        <div className="bg-white rounded-lg border border-[var(--primary-hover-color)] shadow-sm">
          <div className="flex flex-row items-center justify-between space-y-0 pb-2 p-6">
            <h3 className="text-sm font-medium text-[var(--primary-hover-color)]">Next Milestone</h3>
            <Target className="h-4 w-4 text-[var(--primary-color)]" />
          </div>
          <div className="px-6 pb-6">
            <div className="text-lg font-bold text-[var(--primary-color)] capitalize">
              {nextMilestone?.replace(/_/g, " ") || "All Complete"}
            </div>
            <p className="text-xs text-[var(--primary-color)] mt-1">Partnership #{currentPartnership + 1}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg border border-[var(--primary-hover-color)] shadow-sm">
          <div className="p-6 pb-2">
            <h3 className="text-lg font-semibold text-[var(--primary-color)]">Performance Trends</h3>
            <p className="text-sm text-[var(--primary-hover-color)]">6-month KPI and retention analysis</p>
          </div>
          <div className="p-6 pt-0">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={monthlyKPIData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--secondary-light-color)" />
                  <XAxis dataKey="month" stroke="var(--primary-hover-color)" fontSize={12} />
                  <YAxis stroke="var(--primary-hover-color)" fontSize={12} />
                  <Area type="monotone" dataKey="kpi" stackId="1" stroke="var(--primary-color)" fill="var(--primary-color)" fillOpacity={0.6} />
                  <Area
                    type="monotone"
                    dataKey="retention"
                    stackId="2"
                    stroke="var(--secondary-color)"
                    fill="var(--secondary-color)"
                    fillOpacity={0.6}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-[var(--primary-hover-color)] shadow-sm">
          <div className="p-6 pb-2">
            <h3 className="text-lg font-semibold text-[var(--primary-color)]">Partnership Distribution</h3>
            <p className="text-sm text-[var(--primary-hover-color)]">Current status breakdown</p>
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
                  <span className="text-sm text-[var(--primary-hover-color)]">
                    {item.name}: {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-[var(--primary-hover-color)] shadow-sm">
        <div className="p-6 pb-2">
          <h3 className="text-xl font-semibold text-[var(--primary-color)]">Partnership Progress</h3>
          <p className="text-[var(--primary-hover-color)]">Track your journey through all 16 partnership levels</p>
        </div>
        <div className="p-6 pt-0 space-y-6">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-[var(--primary-hover-color)]">Overall Progress</span>
            <span className="text-sm text-[var(--primary-hover-color)]">{currentPartnership+1}/16 partnerships</span>
          </div>
          <div className="w-full bg-[var(--secondary-light-color)] rounded-full h-3">
            <div
              className="bg-[var(--primary-color)] h-3 rounded-full transition-all duration-300"
              style={{ width: `${(currentPartnership / 16) * 100}%` }}
            ></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            {partnerships.map((partnership, index) => (
              <div
                key={partnership}
                className={`p-4 rounded-lg border-2 transition-all ${index < currentPartnership
                  ? "border-[var(--primary-hover-color)] bg-[var(--primary-hover-color)]/10"
                  : index === currentPartnership
                    ? "border-[var(--primary-hover-color)] bg-[var(--primary-hover-color)]/10"
                    : "border-[var(--secondary-light-color)] bg-[var(--secondary-light-color)]/50"
                  }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-[var(--primary-hover-color)]">#{index + 1}</span>
                  <div
                    className={`w-3 h-3 rounded-full ${index < currentPartnership
                      ? "bg-green-500"
                      : index === currentPartnership
                        ? "bg-green-500"
                        : "bg-red-500"
                      }`}
                  />
                </div>
                <h4 className="text-sm font-medium text-[var(--primary-color)] capitalize">{partnership.replace(/_/g, " ")}</h4>
                <p className="text-xs text-[var(--primary-hover-color)] mt-1">
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