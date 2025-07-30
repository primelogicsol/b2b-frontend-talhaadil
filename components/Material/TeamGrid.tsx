"use client"

import { useState, useEffect } from "react"
import TeamCard from "../Cards/TeamCard"
import { useGlobalContext } from "../Context/GlobalProvider"
export interface TeamMember {
  isImportant?: boolean
  isCeo?: boolean
  name: string
  title: string
  email: string
  imageUrl?: string
  description?: string
  quote?: string
}

interface TeamGridProps {
  team: TeamMember[]
}

export default function TeamGrid({ team }: TeamGridProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const { is4K } = useGlobalContext()

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        const width = window.innerWidth
        let maxSlides = 0
        
        if (width < 768) {
          // Mobile: single card
          maxSlides = team.length
        } else if (width < 1024) {
          // Tablet: two cards
          maxSlides = Math.ceil(team.length / 2)
        } else {
          // Desktop: no sliding, show grid
          return 0
        }
        
        return maxSlides > 0 ? (prev + 1) % maxSlides : 0
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [team])

  const getVisibleMembers = () => {
    const width = typeof window !== 'undefined' ? window.innerWidth : 1024
    
    if (width < 768) {
      // Mobile: show one card
      return [team[currentSlide]]
    } else if (width < 1024) {
      // Tablet: show two cards
      const startIndex = currentSlide * 2
      return team.slice(startIndex, startIndex + 2)
    } else {
      // Desktop: show all cards in grid
      return team
    }
  }

  return (
    <div className="py-6 px-4">
      <style jsx>{`
        :root {
          --primary-color: #1b4f68;
          --secondary-color: #d85834;
          --secondary-light-color: #f9c6b2;
        }
      `}</style>
      
      <div className="mx-auto">
        {/* Mobile: Single card slider */}
        <div className="flex flex-col items-center md:hidden">
          <div className="flex justify-center">
            <div className="w-full max-w-sm">
              {getVisibleMembers().map((member, i) => (
                <TeamCard key={`mobile-${currentSlide}-${i}`} {...member} />
              ))}
            </div>
          </div>
          
          {/* Mobile dots indicator */}
          <div className="flex justify-center mt-4 space-x-2">
            {team.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentSlide 
                    ? 'bg-[var(--primary-color)]' 
                    : 'bg-[var(--secondary-light-color)]'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Tablet: Two cards slider */}
        <div className="hidden md:block lg:hidden">
          <div className="flex justify-center">
            <div className="grid grid-cols-2 gap-4 max-w-2xl">
              {getVisibleMembers().map((member, i) => (
                <TeamCard key={`tablet-${currentSlide}-${i}`} {...member} />
              ))}
            </div>
          </div>
          
          {/* Tablet dots indicator */}
          <div className="flex justify-center mt-4 space-x-2">
            {Array.from({ length: Math.ceil(team.length / 2) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentSlide 
                    ? 'bg-[var(--primary-color)]' 
                    : 'bg-[var(--secondary-light-color)]'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop: Grid layout */}
        <div className={`hidden lg:grid grid-cols-4 mx-auto justify-items-center ${is4K ? "max-w-[2000px] gap-16" : "max-w-5xl gap-8"}`}>
          {team.map((member, i) => (
            <TeamCard key={i} {...member} />
          ))}
        </div>
      </div>
    </div>
  )
}
