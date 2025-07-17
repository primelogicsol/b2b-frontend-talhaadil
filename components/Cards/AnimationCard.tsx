"use client"

import { Snowflake, ShieldCheck, Sun, Cloud, Wind, Droplets, ThermometerSun, Sparkles, ArrowRight } from "lucide-react"
import type React from "react"

interface AnimationCardProps {
  title?: string
  description?: string
  icon?: React.ReactNode
  buttonText?: string
  onReadMore?: () => void
}

function AnimationCard({
  title = "Cool Wave System",
  description = "Upgrade to the latest energy and efficient air conditioning Frost technology with Eco Cool",
  icon = <Snowflake className="w-8 h-8" />,
  buttonText = "READ MORE",
  onReadMore,
}: AnimationCardProps) {
  return (
    <div className="group relative w-full max-w-xs sm:max-w-sm h-96  rounded-3xl shadow-lg overflow-hidden cursor-pointer transition-all duration-700 hover:shadow-2xl mx-auto bg-white">
      <div className="absolute top-0 left-0 w-16 h-32 bg-[var(--primary-color)] opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out transform -translate-x-full -translate-y-8 group-hover:translate-x-0 group-hover:translate-y-0 rounded-br-3xl"></div>
      <div className="absolute bottom-0 right-0 w-16 h-32 bg-[var(--primary-color)] opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out transform translate-x-full translate-y-8 group-hover:translate-x-0 group-hover:translate-y-0 rounded-tl-3xl"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full p-8 text-center">
        <div className="relative mb-8">
          <div className="w-20 h-20 rounded-full bg-white border-4 border-[var(--primary-color)] flex items-center justify-center text-[var(--primary-color)] transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 group-hover:border-[var(--primary-hover-color)]">
            {icon}
          </div>
          <div className="absolute inset-0 w-20 h-20 rounded-full border-2 border-[var(--primary-light-text-color)] opacity-0 group-hover:opacity-100 scale-150 group-hover:scale-125 transition-all duration-700 ease-out"></div>
        </div>

        <h3 className="text-2xl font-bold text-slate-800 mb-4 transition-all duration-500 group-hover:text-slate-900 group-hover:-translate-y-1">
          {title}
        </h3>

        <p className="text-gray-600 text-sm leading-relaxed mb-8 transition-all duration-500 group-hover:text-gray-700 group-hover:-translate-y-1">
          {description}
        </p>

        <button
          onClick={onReadMore}
          className="group/btn flex items-center space-x-2 text-slate-800 font-semibold text-sm transition-all duration-300 hover:text-[var(--primary-color)]"
        >
          <span className="transition-all duration-300 group-hover:translate-x-1">{buttonText}</span>
          <ArrowRight className="w-4 h-4 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[var(--primary-color)]" />
        </button>
      </div>

      <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-700">
        <div className="absolute top-4 right-4 w-32 h-32 rounded-full border border-orange-200"></div>
        <div className="absolute bottom-4 left-4 w-24 h-24 rounded-full border border-orange-200"></div>
      </div>
    </div>
  )
}

const cardsData = [
  {
    icon: <Snowflake className="w-8 h-8" />, 
    title: "Cool Wave System",
    description: "Upgrade to efficient air conditioning with FrostTech.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "SafeAir Guarantee",
    description: "Breathe pure, allergen-free air every day.",
  },
  {
    icon: <Sun className="w-8 h-8" />,
    title: "Solar Optimized",
    description: "Runs on sustainable solar energy during peak hours.",
  },
  {
    icon: <Cloud className="w-8 h-8" />,
    title: "Humidity Balance",
    description: "Balances moisture for total comfort.",
  },
  {
    icon: <Wind className="w-8 h-8" />,
    title: "JetFlow Mode",
    description: "Rapid cooling in large open spaces with JetFlow.",
  },
  {
    icon: <Droplets className="w-8 h-8" />,
    title: "Dry Mode Tech",
    description: "Eliminates excess humidity with smart sensors.",
  },
  {
    icon: <ThermometerSun className="w-8 h-8" />,
    title: "Auto Climate",
    description: "AI adjusts the temperature based on time and usage.",
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "WhisperClean System",
    description: "Quiet and clean air technology for restful sleep.",
  },
]

export default function AnimationCardGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4 py-12">
      {cardsData.map((card, index) => (
        <AnimationCard
          key={index}
          icon={card.icon}
          title={card.title}
          description={card.description}
          buttonText="READ MORE"
          onReadMore={() => alert(`Read more about: ${card.title}`)}
        />
      ))}
    </div>
  )
}