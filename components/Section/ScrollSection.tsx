"use client"

import Image from "next/image"
import { ChevronUp, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react"
import { useRef, useState, useEffect, useCallback } from "react"

interface Feature {
  title: string
  description: string
}

interface KashmiriArtisansSectionProps {
  mainTitle?: string
  mainDescription?: string
  imageSrc?: string
  imageAlt?: string
  imageLabel?: string
  features?: Feature[]
  autoslideInterval?: number
}

const defaultFeatures: Feature[] = [
  {
    title: "Flexibility & Zero Upfront Investment",
    description:
      "Our platform offers unparalleled flexibility to showcase your crafts in the market without upfront investment.",
  },
  {
    title: "Professional Branding & Marketing",
    description:
      "Boost visibility through professional marketing tools, exhibitions, and promotions. Our platform helps you connect with global buyers, showcasing your crafts and increasing demand with effective branding and marketing strategies.",
  },
  {
    title: "Global Market Access",
    description:
      "Expand your reach beyond local markets. Our platform connects you with a global network of buyers, opening new opportunities for your unique products.",
  },
  {
    title: "Community & Support",
    description:
      "Join a vibrant community of artisans. Access resources, workshops, and peer support to enhance your skills and grow your business.",
  },
  {
    title: "Sustainable Practices",
    description:
      "We promote and support sustainable and ethical practices in handicraft production, ensuring fair trade and environmental responsibility.",
  },
  {
    title: "Cultural Preservation",
    description:
      "Our mission includes preserving and promoting the rich cultural heritage of Kashmiri craftsmanship for future generations.",
  },
]

export default function ScrollSection({
  mainTitle = "Supporting Kashmiri Artisans & Crafts.",
  mainDescription = "Elevating Kashmiri craftsmanship through American business processes, consumer tastes, and technology innovation. We connect you at no cost with North America, representing 80% of the global handicraft market.",
  imageSrc = "/images/kashmiri-artisans.png",
  imageAlt = "Group of people sitting in a modern office setting",
  imageLabel = "PLATFORM UNIQUENESS",
  features = defaultFeatures,
  autoslideInterval = 5000,
}: KashmiriArtisansSectionProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [thumbSize, setThumbSize] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const handleScroll = useCallback(() => {
    if (scrollContainerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = scrollContainerRef.current
      const scrollableHeight = scrollHeight - clientHeight
      if (scrollableHeight > 0) {
        setScrollProgress(scrollTop / scrollableHeight)
        const newThumbSize = (clientHeight / scrollHeight) * 100
        setThumbSize(Math.max(10, newThumbSize))
      } else {
        setScrollProgress(0)
        setThumbSize(100)
      }
    }
  }, [])

  const scrollTo = useCallback((direction: "up" | "down") => {
    if (scrollContainerRef.current) {
      const currentScrollTop = scrollContainerRef.current.scrollTop
      const firstFeatureCard = scrollContainerRef.current.children[0] as HTMLElement
      const scrollAmount = firstFeatureCard ? firstFeatureCard.offsetHeight + 32 : 0

      scrollContainerRef.current.scrollTo({
        top: direction === "down" ? currentScrollTop + scrollAmount : currentScrollTop - scrollAmount,
        behavior: "smooth",
      })
    }
  }, [])

  useEffect(() => {
    const startAutoslide = () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
      intervalRef.current = setInterval(() => {
        if (scrollContainerRef.current && !isHovering) {
          const { scrollTop, scrollHeight, clientHeight } = scrollContainerRef.current
          const scrollableHeight = scrollHeight - clientHeight
          const firstFeatureCard = scrollContainerRef.current.children[0] as HTMLElement
          const scrollStep = firstFeatureCard ? firstFeatureCard.offsetHeight + 32 : 0

          if (scrollableHeight <= 0) return
          if (scrollTop + clientHeight >= scrollHeight - 1) {
            scrollContainerRef.current.scrollTo({ top: 0, behavior: "smooth" })
          } else {
            scrollContainerRef.current.scrollBy({ top: scrollStep, behavior: "smooth" })
          }
        }
      }, autoslideInterval)
    }

    if (!isHovering) startAutoslide()
    else if (intervalRef.current) clearInterval(intervalRef.current)

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [autoslideInterval, isHovering])

  useEffect(() => {
    handleScroll()
    const container = scrollContainerRef.current
    if (container) container.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleScroll)
    return () => {
      if (container) container.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleScroll)
    }
  }, [handleScroll])

  const thumbPosition = scrollProgress * (100 - thumbSize)

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{ backgroundImage: `radial-gradient(circle, #d1d5db 1px, transparent 1px)`, backgroundSize: "10px 10px" }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
        {/* Left */}
        <div className="flex flex-col">
          <div className="flex items-center gap-2 text-[var(--primary-color)] text-sm font-semibold uppercase tracking-wider">
            <span className="w-8 h-0.5 bg-[var(--primary-color)]"></span>
            <span>UNIQUE AMERICAN BUSINESS GIFT</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mt-4">
            {mainTitle.split("&")[0]}
            {mainTitle.includes("&") && <span className="text-[var(--primary-color)]">& {mainTitle.split("&")[1]}</span>}
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-md">{mainDescription}</p>

          <div className="mt-8 relative group overflow-hidden rounded-lg shadow-lg">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={600}
              height={400}
              className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
              priority
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white text-sm font-semibold uppercase tracking-wider p-4">
              {imageLabel}
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="relative flex flex-col">
          <div
            ref={scrollContainerRef}
            className="flex flex-col gap-8 max-h-[400px] sm:max-h-[500px] lg:max-h-[600px] overflow-y-auto no-scrollbar"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {features.map((feature, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md">
                <div className="w-12 h-0.5 bg-[var(--primary-color)] mb-2"></div>
                <h2 className="text-xl font-bold text-gray-900">{feature.title}</h2>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Scrollbar controls */}
          <div
            className="mt-8 flex flex-row items-center justify-between w-full max-w-xs mx-auto h-10 bg-gray-200 rounded-full px-2
                       lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 lg:w-10 lg:h-full lg:max-h-[300px] lg:mt-0 lg:flex-col lg:py-2"
          >
            <button
              onClick={() => scrollTo("up")}
              className="w-8 h-8 rounded-full bg-[var(--primary-color)] text-white flex items-center justify-center hover:bg-[var(--primary-hover-color)] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:ring-offset-2"
            >
              <ChevronLeft className="w-5 h-5 lg:hidden" />
              <ChevronUp className="w-5 h-5 hidden lg:block" />
            </button>

            <div className="relative flex-1 h-2 bg-gray-300 rounded-full mx-2 lg:w-2 lg:h-full lg:my-2 lg:mx-0">
              <div
                className="absolute bg-[var(--primary-color)] rounded-full transition-all duration-100 ease-out h-full"
                style={{ width: `${thumbSize}%`, left: `${thumbPosition}%` }}
              ></div>
              <div
                className="absolute bg-[var(--primary-color)] rounded-full transition-all duration-100 ease-out hidden lg:block w-full"
                style={{ height: `${thumbSize}%`, top: `${thumbPosition}%` }}
              ></div>
            </div>

            <button
              onClick={() => scrollTo("down")}
              className="w-8 h-8 rounded-full bg-[var(--primary-color)] text-white flex items-center justify-center hover:bg-[var(--primary-hover-color)] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:ring-offset-2"
            >
              <ChevronRight className="w-5 h-5 lg:hidden" />
              <ChevronDown className="w-5 h-5 hidden lg:block" />
            </button>
          </div>

          <div className="mt-8 self-center w-4 h-4 rounded-full border-2 border-red-500 bg-[var(--primary-color)] animate-pulse
                          lg:absolute lg:bottom-4 lg:left-1/2 lg:-translate-x-1/2 lg:mt-0"
          ></div>
        </div>
      </div>
    </div>
  )
}
