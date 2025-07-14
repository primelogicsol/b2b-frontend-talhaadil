'use client'
import { useState } from 'react'
import { LucideIcon } from 'lucide-react'

interface FlipCardProps {
  title: string
  description: string
  detailedDescription: string
  icon: LucideIcon
  isVertical?: boolean
  className?: string
}

export const FlipCard = ({
  title,
  description,
  detailedDescription,
  icon: Icon,
  isVertical = false,
  className = ''
}: FlipCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div
      className={`group relative w-full max-w-sm h-48 perspective-1000 ${className}`}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 ease-in-out transform-style-preserve-3d cursor-pointer ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front Face */}
        <div className="absolute inset-0 w-full h-full backface-hidden">
          <div className="h-full bg-gradient-card border border-border rounded-lg p-6 shadow-card hover:shadow-card-hover transition-all duration-300 group-hover:shadow-glow flex items-center justify-center">
            {isVertical ? (
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center group-hover:animate-float shadow-glow">
                  <Icon className="w-8 h-8 text-primary-foreground group-hover:animate-glow-pulse" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary-glow transition-colors duration-300">
                    {title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-between w-full">
                <div className="flex-1 pr-4">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary-glow transition-colors duration-300">
                    {title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center group-hover:animate-float shadow-glow">
                    <Icon className="w-8 h-8 text-primary-foreground group-hover:animate-glow-pulse" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Back Face */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
          <div className="h-full bg-gradient-hover border border-primary/20 rounded-lg p-6 shadow-card-hover flex items-center justify-center">
            <div className="text-center animate-scale-in">
              <h3 className="text-xl font-bold text-primary-glow mb-4">{title}</h3>
              <p className="text-foreground text-sm leading-relaxed">{detailedDescription}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
