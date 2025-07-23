import type { LucideIcon } from "lucide-react"

interface StatCardProps {
  title: string
  value: string | number
  icon: LucideIcon
  description?: string,
  gradient?: string,
  trend?: {
    value: number
    isPositive: boolean
  }
}

export default function StatCard({ title, value, icon: Icon, description, trend }: StatCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 hover:shadow-xl transition-all duration-300 group">
      <div className="flex items-center justify-between mb-4">
        <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-6 h-6 text-white" />
        </div>
        {trend && (
          <div
            className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${
              trend.isPositive ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
            }`}
          >
            <span>{trend.isPositive ? "↗" : "↘"}</span>
            <span>{Math.abs(trend.value)}%</span>
          </div>
        )}
      </div>
      <div>
        <p className="text-sm font-medium text-slate-600 mb-1">{title}</p>
        <p className="text-3xl font-bold text-slate-900 mb-1">{value}</p>
        {description && <p className="text-sm text-slate-500">{description}</p>}
      </div>
    </div>
  )
}
