"use client"

import { BarChart3, TrendingUp, Users, Target, Calendar, ArrowUpRight } from "lucide-react"
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"

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

const weeklyActivity = [
  { day: "Mon", documents: 12, agreements: 2, updates: 5 },
  { day: "Tue", documents: 8, agreements: 1, updates: 3 },
  { day: "Wed", documents: 15, agreements: 3, updates: 7 },
  { day: "Thu", documents: 10, agreements: 1, updates: 4 },
  { day: "Fri", documents: 18, agreements: 4, updates: 9 },
  { day: "Sat", documents: 6, agreements: 0, updates: 2 },
  { day: "Sun", documents: 4, agreements: 0, updates: 1 },
]

export default function DashboardPage() {
  // Mock data - replace with real data
  const currentKPI = 85
  const retention = 92
  const currentPartnership = 6 // User has reached 6 partnerships
  const nextMilestone = partnerships[currentPartnership]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard Overview</h1>
        <p className="text-gray-600 mt-2">Welcome back! Here's your business performance summary.</p>
      </div>

      {/* Enhanced KPI Cards */}
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
              <span className="text-green-600">+2.5% from last month</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-blue-200 shadow-sm">
          <div className="flex flex-row items-center justify-between space-y-0 pb-2 p-6">
            <h3 className="text-sm font-medium text-gray-600">Retention Rate</h3>
            <TrendingUp className="h-4 w-4 text-blue-600" />
          </div>
          <div className="px-6 pb-6">
            <div className="text-2xl font-bold text-gray-900">{retention}%</div>
            <div className="flex items-center text-xs mt-1">
              <ArrowUpRight className="h-3 w-3 text-green-600 mr-1" />
              <span className="text-green-600">+1.2% from last month</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-blue-200 shadow-sm">
          <div className="flex flex-row items-center justify-between space-y-0 pb-2 p-6">
            <h3 className="text-sm font-medium text-gray-600">Active Partnerships</h3>
            <Users className="h-4 w-4 text-blue-600" />
          </div>
          <div className="px-6 pb-6">
            <div className="text-2xl font-bold text-gray-900">{currentPartnership}</div>
            <p className="text-xs text-gray-600 mt-1">of 16 total partnerships</p>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-blue-200 shadow-sm">
          <div className="flex flex-row items-center justify-between space-y-0 pb-2 p-6">
            <h3 className="text-sm font-medium text-gray-600">Next Milestone</h3>
            <Target className="h-4 w-4 text-blue-600" />
          </div>
          <div className="px-6 pb-6">
            <div className="text-lg font-bold text-gray-900 capitalize">{nextMilestone?.replace(/_/g, " ")}</div>
            <p className="text-xs text-blue-600 mt-1">Partnership #{currentPartnership + 1}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* KPI Trend Chart */}
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

        {/* Partnership Distribution */}
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

    
      {/* Partnership Progress Tracker */}
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
