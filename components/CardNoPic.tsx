import { CheckCircle2 } from "lucide-react"

interface Point {
  id: string
  title: string
  description: string
}

interface DynamicCardProps {
  title: string
  description: string
  points: Point[]
}

export default function DynamicCard({ title, description, points }: DynamicCardProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8 flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
        {/* Header */}
        <div className="p-8 pb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">{title}</h2>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed mb-6">{description}</p>

          {/* Point-by-point Data */}
          <ul className="space-y-3">
            {points.map((point) => (
              <li key={point.id} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">
                  <span className="font-semibold">{point.title}:</span> {point.description}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom accent */}
        <div className="h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
      </div>
    </div>
  )
}
