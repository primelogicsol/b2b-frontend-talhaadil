"use client"

import type { LucideIcon } from "lucide-react"

interface FlipCardProps {
  title: string
  description: string
  detailedDescription: string
  icon: LucideIcon
}

export function FlipCard({ title, description, detailedDescription, icon: Icon }: FlipCardProps) {
  return (
    <div className="group w-full h-90 [perspective:1000px]">
      <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front Side */}
        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] bg-[var(--primary-color)] text-white rounded-lg shadow-lg flex flex-col items-center justify-center text-center p-6">
          <div className="mb-4 text-[var(--secondary-color)]">
            <Icon size={48} />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
          <p className="text-sm text-gray-200">{description}</p>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-[var(--primary-color)] text-white rounded-lg shadow-lg flex flex-col items-center justify-center text-center p-6">
          <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
          <p className="text-sm text-gray-200 leading-relaxed">{detailedDescription}</p>
        </div>
      </div>
    </div>
  )
}
