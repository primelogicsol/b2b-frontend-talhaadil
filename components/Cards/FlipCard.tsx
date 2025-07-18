'use client'
import { useState } from 'react'
import { LucideIcon, Star } from 'lucide-react' // Star icon used as fallback

interface FlipCardProps {
  title?: string
  description?: string
  detailedDescription?: string
  icon?: LucideIcon
  isVertical?: boolean
  className?: string
}

export const FlipCard = ({
  title = 'Awesome Feature',
  description = 'Quick overview of this feature goes here.',
  detailedDescription = 'Here you can see a more detailed explanation of the feature. It provides in-depth information, use‑cases, and why it stands out.',
  icon: Icon = Star,
  isVertical = false,
  className = ''
}: FlipCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div
      className={`group relative w-full max-w-sm h-56 perspective-1000 ${className}`}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 ease-out transform-style-preserve-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front Face */}
        <div className="absolute inset-0 w-full h-full backface-hidden">
          <div
            className="h-full rounded-2xl p-6 flex items-center justify-center
            bg-[var(--primary-color)]
            border-white/20
            border-2
            backdrop-blur-xl transition-all duration-500"
          >
            {isVertical ? (
              <div className="flex flex-col items-center text-center space-y-4">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center
                  bg-white/20 backdrop-blur-sm
                 shadow-[0_0_20px_var(--secondary-color)]
                  group-hover:scale-110 transition-transform duration-300"
                >
                  <Icon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.6)] mb-2">
                    {title}
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed">{description}</p>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-between w-full space-x-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-extrabold text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.6)] mb-2">
                    {title}
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed">{description}</p>
                </div>
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center
                  bg-white/20 backdrop-blur-sm
                  shadow-[0_0_20px_rgba(255,215,0,0.7)]
                  group-hover:scale-110 transition-transform duration-300"
                >
                  <Icon className="w-8 h-8 text-[var(--softtec-yellow)]" />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Back Face */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
          <div
            className="h-full rounded-2xl p-6 flex items-center justify-center
            bg-gray-200
           
            border border-white/30
          
            shadow-[0_0_20px_var(--secondary-color)]
            backdrop-blur-xl transition-all duration-500"
          >
            <div className="text-center animate-fade-in">
              <h3 className="text-2xl font-extrabold text-[var(--secondary-color)] mb-4">
                {title}
              </h3>
              <p className="text-black/90 text-sm leading-relaxed">{detailedDescription}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
