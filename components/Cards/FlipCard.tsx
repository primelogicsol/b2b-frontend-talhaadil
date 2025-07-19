"use client"

import { useState } from "react"
import { type LucideIcon, Star } from "lucide-react"

interface FlipCardProps {
  title?: string
  description?: string
  detailedDescription?: string
  icon?: LucideIcon
  isVertical?: boolean
  className?: string
}

export const FlipCard = ({
  title = "Awesome Feature",
  description = "Quick overview of this feature goes here.",
  detailedDescription = "Here you can see a more detailed explanation of the feature. It provides in-depth information, use‑cases, and why it stands out.",
  icon: Icon = Star,
  isVertical = false,
  className = "",
}: FlipCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div
      className={`group relative w-full perspective-1000 ${className}`}
      style={{ height: "clamp(280px, 25vw, 360px)" }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onTouchStart={() => setIsFlipped(!isFlipped)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 ease-out transform-style-preserve-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* FRONT */}
        <div className="absolute inset-0 w-full h-full backface-hidden">
          <div
            className="h-full rounded-xl sm:rounded-2xl p-4 sm:p-6 flex items-center justify-center
            bg-[var(--primary-color)]
            border-white/20 border-2
            backdrop-blur-xl transition-all duration-500
            hover:shadow-2xl hover:scale-[1.02]"
          >
            {isVertical ? (
              <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4">
                <div
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center
                  bg-white/20 backdrop-blur-sm
                  shadow-[0_0_20px_var(--secondary-color)]
                  group-hover:scale-110 transition-transform duration-300"
                >
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.6)] leading-tight">
                    {title}
                  </h3>
                  <p className="text-white/80 text-xs sm:text-sm leading-relaxed px-2">{description}</p>
                </div>
              </div>
            ) : (
              <div className="flex flex-col sm:flex-row items-center justify-between w-full space-y-3 sm:space-y-0 sm:space-x-4">
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.6)] mb-2 leading-tight">
                    {title}
                  </h3>
                  <p className="text-white/80 text-xs sm:text-sm leading-relaxed">{description}</p>
                </div>
                <div
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center
                  bg-white/20 backdrop-blur-sm
                  shadow-[0_0_20px_rgba(255,215,0,0.7)]
                  group-hover:scale-110 transition-transform duration-300 flex-shrink-0"
                >
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[var(--softtec-yellow)]" />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* BACK */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
          <div
            className="h-full rounded-xl sm:rounded-2xl p-4 sm:p-6 flex items-center justify-center
            bg-gray-200
            border border-white/30
            shadow-[0_0_20px_var(--secondary-color)]
            backdrop-blur-xl transition-all duration-500"
          >
            <div className="text-center animate-fade-in max-w-full">
              <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold text-[var(--secondary-color)] mb-3 sm:mb-4 leading-tight">
                {title}
              </h3>
              <p className="text-black/90 text-xs sm:text-sm leading-relaxed px-2">{detailedDescription}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
