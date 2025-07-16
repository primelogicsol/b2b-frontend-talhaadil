"use client"

import type React from "react"
import { ArrowRight, Snowflake } from "lucide-react"

interface AnimationCardProps {
  title?: string
  description?: string
  icon?: React.ReactNode
  buttonText?: string
  onReadMore?: () => void
}

export default function AnimationCard({
  title = "Cool Wave System",
  description = "Upgrade to the latest energy and efficient air conditioning Frost technology with Eco Cool",
  icon = <Snowflake className="w-8 h-8" />,
  buttonText = "READ MORE",
  onReadMore,
}: AnimationCardProps) {
  return (
    <div className="group relative w-80 h-96 bg-white rounded-3xl shadow-lg overflow-hidden cursor-pointer transition-all duration-700 hover:shadow-2xl">
      <div className="absolute top-0 left-0 w-16 h-32 bg-orange-500 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out transform -translate-x-full -translate-y-8 group-hover:translate-x-0 group-hover:translate-y-0 rounded-br-3xl"></div>
      <div className="absolute bottom-0 right-0 w-16 h-32 bg-orange-500 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out transform translate-x-full translate-y-8 group-hover:translate-x-0 group-hover:translate-y-0 rounded-tl-3xl"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full p-8 text-center">
        <div className="relative mb-8">
          <div className="w-20 h-20 rounded-full bg-white border-4 border-orange-500 flex items-center justify-center text-orange-500 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 group-hover:border-orange-600">
            {icon}
          </div>
          <div className="absolute inset-0 w-20 h-20 rounded-full border-2 border-orange-300 opacity-0 group-hover:opacity-100 scale-150 group-hover:scale-125 transition-all duration-700 ease-out"></div>
        </div>

        <h3 className="text-2xl font-bold text-slate-800 mb-4 transition-all duration-500 group-hover:text-slate-900 group-hover:-translate-y-1">
          {title}
        </h3>

        <p className="text-gray-600 text-sm leading-relaxed mb-8 transition-all duration-500 group-hover:text-gray-700 group-hover:-translate-y-1">
          {description}
        </p>

        <button
          onClick={onReadMore}
          className="group/btn flex items-center space-x-2 text-slate-800 font-semibold text-sm transition-all duration-300 hover:text-orange-500"
        >
          <span className="transition-all duration-300 group-hover:translate-x-1">{buttonText}</span>
          <ArrowRight className="w-4 h-4 transition-all duration-300 group-hover:translate-x-1 group-hover:text-orange-500" />
        </button>
      </div>

      <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-700">
        <div className="absolute top-4 right-4 w-32 h-32 rounded-full border border-orange-200"></div>
        <div className="absolute bottom-4 left-4 w-24 h-24 rounded-full border border-orange-200"></div>
      </div>
    </div>
  )
}
