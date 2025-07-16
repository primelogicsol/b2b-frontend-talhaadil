"use client"

import { useState } from "react"

interface CardProps {
  backgroundImage: string
  name: string
  description: string
}

export default function ShineCard({ backgroundImage, name, description }: CardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="relative w-80 h-96 rounded-xl overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-all duration-300 group-hover:from-black/90 group-hover:via-black/40" />

      {/* Content Container */}
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        {/* Card Name - Always Visible */}
        <h3 className="text-2xl font-bold text-white mb-2 transform transition-all duration-300 group-hover:translate-y-[-8px]">
          {name}
        </h3>

        {/* Description - Shows on Hover */}
        <div
          className={`transform transition-all duration-300 ease-in-out ${
            isHovered ? "opacity-100 translate-y-0 max-h-32" : "opacity-0 translate-y-4 max-h-0"
          }`}
        >
          <p className="text-gray-200 text-sm leading-relaxed">{description}</p>
        </div>

        {/* Decorative Element */}
        <div
          className={`w-12 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full mt-3 transform transition-all duration-300 ${
            isHovered ? "w-20 opacity-100" : "opacity-70"
          }`}
        />
      </div>

      {/* Shine Effect on Hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
      </div>
    </div>
  )
}
