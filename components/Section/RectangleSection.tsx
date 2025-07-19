"use client"

import Image from "next/image"
import { CloudCog } from "lucide-react"

interface HeroSectionProps {
  leftImage?: string
  rightImage?: string
  tagline?: string
  title?: string
  highlightedWords?: { one: string; two: string }
  description?: string
  subTitle?: string
  subDescription?: string
  buttonText?: string
}

export default function RectangleSection({
  leftImage = "/placeholder.svg?height=600&width=400",
  rightImage = "/placeholder.svg?height=600&width=400",
  tagline = "DKC CONSIGNMENT PARTNERSHIP INITIATIVE",
  title = "Redefining Retail Opportunities for Kashmiri",
  highlightedWords = { one: "Artisans", two: "Businesses" },
  description = `Transform your business with De Koshur Crafts' Consignment Partnership program, designed to integrate Kashmiri artisans and businesses into a powerful digital ecosystem.`,
  subTitle = "Smart Retail Solutions for Small Craft Excellence",
  subDescription = `Leverage cutting-edge tools that optimize inventory management, authenticate products with GI certification, and enhance customer engagement through powerful cultural narratives. This system simplifies retail operations, supports transparent sales tracking, and provides actionable insights for business growth.`,
  buttonText = "WORLD'S FIRST CONSIGNMENT PLATFORM FOR KASHMIR CRAFTS",
}: HeroSectionProps) {
  return (
    <section className="relative py-12 md:py-24 lg:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Section */}
        <div className="relative flex flex-col items-center justify-center min-h-[500px] lg:min-h-[600px] xl:min-h-[700px] w-full">
          {/* First image with secondary background */}
          <div className="relative w-full max-w-sm h-[400px] md:h-[500px] lg:h-[600px] mb-8 lg:mb-0
                          lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-[70%] lg:-translate-y-[40%] lg:w-[45%] lg:h-[70%]">
            <div className="absolute inset-0 bg-[var(--secondary-color)] rounded-[30px] transform translate-x-4 translate-y-8 z-0 shadow-lg
                            before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(#fff_1px,transparent_1px)] before:[background-size:10px_10px] before:opacity-20" />
            <div className="relative z-10 w-full h-full rounded-[30px] overflow-hidden shadow-xl
                            transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
              <Image
                src={leftImage}
                alt="Main left image"
                layout="fill"
                objectFit="cover"
                className="rounded-[30px]"
              />
            </div>
          </div>

          {/* Second image with dark slate background */}
          <div className="relative w-full max-w-sm h-[400px] md:h-[500px] lg:h-[600px]
                          lg:absolute lg:top-1/2 lg:left-1/2 lg:translate-x-[20%] lg:-translate-y-[60%] lg:w-[45%] lg:h-[70%]">
            <div className="absolute inset-0 bg-[var(--primary-color)] rounded-[30px] transform -translate-x-4 -translate-y-8 z-0 shadow-lg
                            before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(#fff_1px,transparent_1px)] before:[background-size:10px_10px] before:opacity-20" />
            <div className="relative z-10 w-full h-full rounded-[30px] overflow-hidden shadow-xl
                            transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
              <Image
                src={rightImage}
                alt="Main right image"
                layout="fill"
                objectFit="cover"
                className="rounded-[30px]"
              />
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col justify-center text-center lg:text-left mt-12 lg:mt-0">
          <div className="flex items-center justify-center lg:justify-start mb-4">
            <div className="w-8 h-1 bg-[var(--secondary-color)] rounded-full mr-3"></div>
            <p className="text-sm font-semibold text-gray-600 uppercase tracking-wider">{tagline}</p>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-[var(--primary-dark-slate)]">
            {title} <span className="text-[var(--secondary-color)]">{highlightedWords.one}</span> and{" "}
            <span className="text-[var(--secondary-color)]">{highlightedWords.two}</span>
          </h1>
          <p className="text-lg text-[var(--primary-light-text-color)] mb-8 max-w-2xl mx-auto lg:mx-0">
            {description}
          </p>

          <div className="flex items-start justify-center lg:justify-start gap-4 mb-8">
            <div className="flex-shrink-0 p-3 rounded-full bg-[var(--secondary-light-color)] text-[var(--secondary-color)]
                            transition-transform duration-300 ease-in-out hover:scale-110">
              <CloudCog className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[var(--primary-dark-slate)] mb-2">{subTitle}</h3>
              <p className="text-[var(--primary-light-text-color)] max-w-2xl mx-auto lg:mx-0">{subDescription}</p>
            </div>
          </div>

          <button
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-full shadow-lg
                             bg-[var(--secondary-color)] text-white hover:bg-[var(--secondary-hover-color)] transition-all duration-300 ease-in-out
                             focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--secondary-color)]
                             max-w-xs mx-auto lg:mx-0 transform hover:-translate-y-1"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </section>
  )
}