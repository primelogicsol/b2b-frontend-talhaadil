import type { LucideIcon } from "lucide-react"

interface MetricCardProps {
  icon: LucideIcon
  title: string
  value: string
}

export default function MetricCard({ icon: Icon, title, value }: MetricCardProps) {
  return (
    <div className="flex items-center gap-4 p-4 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
      <div className="flex-shrink-0 p-3 rounded-full bg-accent-orange text-white">
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-light-text">{title}</h3>
        <p className="text-2xl font-bold text-light-text">{value}</p>
      </div>
    </div>
  )
}
