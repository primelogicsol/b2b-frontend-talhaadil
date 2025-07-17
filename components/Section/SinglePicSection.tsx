"use client"

import { useState } from "react"
import Image from "next/image"

interface HeroData {
  welcomeText: string
  title: string
  highlightWord: string
  description: string
  steps: Array<{
    title: string
    description: string
  }>
  footerTitle: string
  footerSubtitle: string
  imageUrl: string
  imageAlt: string
}

const defaultData: HeroData = {
  welcomeText: "WELCOME TO B2B CONNECT - USA",
  title: "Empowering Kashmiri Artisans, Startups in Accessing American",
  highlightWord: "Markets",
  description:
    "A transformative and progressive platform with an investment of $3.7 million, connecting Kashmir's artisans, startups, and businesses to global markets, fostering fair trade, preserving heritage, and unlocking boundless opportunities for sustainable growth.",
  steps: [
    {
      title: "Dream It:",
      description: "Envision your goals. We'll provide the roadmap",
    },
    {
      title: "Define It:",
      description: "Select the partnership model tailored to your ambitions.",
    },
    {
      title: "Deliver It:",
      description: "Upload your credentials, verify your status, and join a league of visionary partners.",
    },
    {
      title: "Dominate It:",
      description: "Access our resources and watch your business flourish on the global stage.",
    },
  ],
  footerTitle: "Handicraft Progressive Business Model for Every Vision",
  footerSubtitle:
    "Crafting Kashmir's Next Generations Future Together | Amir-e-Kabir's Legacy, Reimagined for Today's World",
  imageUrl: "/placeholder.svg?height=600&width=500",
  imageAlt: "Business professionals collaborating",
}

interface B2BConnectHeroProps {
  data?: HeroData
}

export default function SinglePicSection({ data = defaultData }: B2BConnectHeroProps) {
  const [isImageHovered, setIsImageHovered] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Image */}
          <div className="relative flex justify-center lg:justify-start">
            <div
              className="relative group cursor-pointer"
              onMouseEnter={() => setIsImageHovered(true)}
              onMouseLeave={() => setIsImageHovered(false)}
            >
              {/* Enhanced decorative elements */}
              <div className="absolute -top-12 -left-12 w-32 h-32 pointer-events-none">
                <div
                  className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-orange-400 to-red-400 transform origin-left transition-all duration-700 ${
                    isImageHovered ? "scale-x-150 shadow-lg" : "scale-x-100"
                  }`}
                  style={{ filter: "drop-shadow(0 0 8px rgba(249, 115, 22, 0.4))" }}
                />
                <div
                  className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-orange-500 via-orange-400 to-red-400 transform origin-top transition-all duration-700 ${
                    isImageHovered ? "scale-y-150 shadow-lg" : "scale-y-100"
                  }`}
                  style={{ filter: "drop-shadow(0 0 8px rgba(249, 115, 22, 0.4))" }}
                />
              </div>

              <div className="absolute -bottom-12 -right-12 w-32 h-32 pointer-events-none">
                <div
                  className={`absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-orange-500 via-orange-400 to-red-400 transform origin-right transition-all duration-700 ${
                    isImageHovered ? "scale-x-150 shadow-lg" : "scale-x-100"
                  }`}
                  style={{ filter: "drop-shadow(0 0 8px rgba(249, 115, 22, 0.4))" }}
                />
                <div
                  className={`absolute bottom-0 right-0 w-1 h-full bg-gradient-to-t from-orange-500 via-orange-400 to-red-400 transform origin-bottom transition-all duration-700 ${
                    isImageHovered ? "scale-y-150 shadow-lg" : "scale-y-100"
                  }`}
                  style={{ filter: "drop-shadow(0 0 8px rgba(249, 115, 22, 0.4))" }}
                />
              </div>

              {/* Additional floating accent elements */}
              <div className="absolute -top-6 -right-6 w-4 h-4 bg-orange-400 rounded-full opacity-60 animate-pulse"></div>
              <div
                className="absolute -bottom-4 -left-4 w-3 h-3 bg-red-400 rounded-full opacity-40 animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>

              {/* Enhanced stylish organic-geometric image container */}
              <div
                className={`relative w-96 h-96 sm:w-[28rem] sm:h-[28rem] lg:w-[32rem] lg:h-[32rem] overflow-hidden transition-all duration-700 ${
                  isImageHovered ? "scale-110" : "scale-100"
                }`}
              >
                {/* Main organic shape container */}
                <div
                  className={`relative w-full h-full transition-all duration-700 ${
                    isImageHovered ? "shadow-2xl" : "shadow-xl"
                  }`}
                  style={{
                    clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
                    background: "linear-gradient(135deg, #1f2937 0%, #374151 50%, #4b5563 100%)",
                    filter: isImageHovered
                      ? "drop-shadow(0 25px 50px rgba(0, 0, 0, 0.25))"
                      : "drop-shadow(0 15px 35px rgba(0, 0, 0, 0.15))",
                  }}
                >
                  {/* Inner glow effect */}
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      background: "radial-gradient(circle at center, rgba(249, 115, 22, 0.3) 0%, transparent 70%)",
                    }}
                  />

                  <div
                    className="absolute inset-3 overflow-hidden"
                    style={{
                      clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
                    }}
                  >
                    <Image
                      src={data.imageUrl || "/placeholder.svg"}
                      alt={data.imageAlt}
                      fill
                      className={`object-cover transition-all duration-700 ${
                        isImageHovered ? "scale-110 brightness-110 contrast-105" : "scale-105"
                      }`}
                    />

                    {/* Overlay gradient for better visual appeal */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br from-orange-400/10 via-transparent to-purple-600/10 transition-opacity duration-700 ${
                        isImageHovered ? "opacity-30" : "opacity-0"
                      }`}
                    />
                  </div>

                  {/* Animated border effect */}
                  <div
                    className={`absolute inset-0 border-2 border-orange-400/30 transition-all duration-700 ${
                      isImageHovered ? "border-orange-400/60 animate-pulse" : ""
                    }`}
                    style={{
                      clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
                    }}
                  />
                </div>

                {/* Secondary floating shape */}
                <div
                  className={`absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-orange-400/20 to-red-400/20 transition-all duration-1000 ${
                    isImageHovered ? "scale-125 rotate-12" : "scale-100 rotate-0"
                  }`}
                  style={{
                    clipPath:
                      "polygon(50% 0%, 80% 10%, 100% 35%, 100% 70%, 80% 90%, 50% 100%, 20% 90%, 0% 70%, 0% 35%, 20% 10%)",
                    filter: "blur(1px)",
                  }}
                />

                {/* Third accent shape */}
                <div
                  className={`absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-tr from-purple-400/15 to-orange-300/15 transition-all duration-1200 ${
                    isImageHovered ? "scale-110 -rotate-6" : "scale-100 rotate-0"
                  }`}
                  style={{
                    clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                    filter: "blur(0.5px)",
                  }}
                />

                {/* Morphing background accent */}
                <div
                  className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-5 transition-all duration-2000 ${
                    isImageHovered ? "scale-125 rotate-3" : "scale-100 rotate-0"
                  }`}
                  style={{
                    background: "conic-gradient(from 0deg, #f97316, #ef4444, #8b5cf6, #06b6d4, #f97316)",
                    clipPath: "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)",
                    filter: "blur(2px)",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            {/* Welcome text */}
            <div className="flex items-center space-x-4">
              <div className="w-12 h-0.5 bg-orange-500"></div>
              <span className="text-sm font-semibold text-gray-600 tracking-wider uppercase">{data.welcomeText}</span>
            </div>

            {/* Main heading */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                {data.title}{" "}
                <span className="text-orange-500 relative">
                  {data.highlightWord}
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-orange-500 opacity-30 rounded-full"></div>
                </span>
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed italic max-w-2xl">{data.description}</p>
            </div>

            {/* Steps */}
            <div className="space-y-6">
              {data.steps.map((step, index) => (
                <div key={index} className="flex items-start space-x-4 group cursor-pointer">
                  <div className="w-8 h-0.5 bg-orange-500 mt-3 transition-all duration-300 group-hover:w-12"></div>
                  <div className="flex-1">
                    <span className="font-semibold text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
                      {step.title}
                    </span>
                    <span className="text-gray-700 ml-2">{step.description}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="pt-8 border-t border-gray-200">
              <h3 className="text-xl font-bold text-orange-500 mb-2">{data.footerTitle}</h3>
              <p className="text-sm text-gray-600">{data.footerSubtitle}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}