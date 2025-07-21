"use client"

import { useState, useEffect } from "react"
import TeamCard from "../Cards/TeamCard"

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        const width = window.innerWidth
        let maxSlides = 0
        if (width < 440) {
          maxSlides = team.length
        } else if (width < 1024) {
          maxSlides = Math.ceil(team.length / 2)
        } else {
          maxSlides = 1 // grid view doesn’t slide
        }
        return maxSlides > 0 ? (prev + 1) % maxSlides : 0
      })
    }, 3000)
    return () => clearInterval(interval)
  }, [team])

  return (
    <div className="py-16 px-4">
      <div className="max-w-6xl mx-auto">

        {/* <440px: single card centered */}
        <div className="block sm:hidden">
          <div className="relative overflow-hidden rounded-xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {team.map((member, i) => (
                <div
                  key={i}
                  className="w-full flex-shrink-0 flex justify-center"
                >
                  <div className="max-w-xs w-full ml-[17%]">
                    <TeamCard {...member} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center mt-6 space-x-2">
            {team.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  currentSlide === i ? "bg-[var(--secondary-color)]" : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* >=440px and <1024px: two cards centered */}
        <div className="hidden sm:block lg:hidden">
          <div className="relative overflow-hidden rounded-xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: Math.ceil(team.length / 2) }, (_, slideIndex) => (
                <div
                  key={slideIndex}
                  className="w-full flex-shrink-0 flex justify-center gap-6 px-2"
                >
                  {team.slice(slideIndex * 2, slideIndex * 2 + 2).map((member, i) => (
                    <div key={i} className="max-w-xs w-full ml-[9%]">
                      <TeamCard {...member} />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: Math.ceil(team.length / 2) }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  currentSlide === i ? "bg-purple-600" : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* ≥1024px: grid */}
        <div className="hidden lg:grid gap-8 grid-cols-4 mx-auto max-w-5xl justify-items-center">
          {team.map((member, i) => (
            <TeamCard key={i} {...member} />
          ))}
        </div>
      </div>
    </div>
  )
}
