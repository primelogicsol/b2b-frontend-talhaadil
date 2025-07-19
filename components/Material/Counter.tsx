"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { motion, useMotionValue, animate, useTransform, useInView } from "framer-motion"

interface SlideItem {
  id: number
  title: string
  description: string
  number: number
}

interface SliderCardProps {
  title: string
  description: string
  targetNumber: number
  index: number
  currentIndex: number
  cardsPerPage: number
}

interface SliderComponentProps {
  data?: SlideItem[]
}

export default function Counter({ data }: SliderComponentProps) {
  const slides: SlideItem[] =
    data && data.length > 0
      ? data
      : [
          {
            id: 1,
            title: "Global Reach",
            description: "Expand your audience across continents with our robust infrastructure.",
            number: 12000,
          },
          {
            id: 2,
            title: "User Engage",
            description: "Boost interaction and retention with personalized experiences.",
            number: 95,
          },
          {
            id: 3,
            title: "Data Security",
            description: "Protect your valuable information with industry-leading encryption.",
            number: 100,
          },
          {
            id: 4,
            title: "Perform Metrics",
            description: "Track key indicators and optimize for peak efficiency.",
            number: 250,
          },
          {
            id: 5,
            title: "Scalable Solutions",
            description: "Grow your platform effortlessly with our flexible architecture.",
            number: 5000,
          },
          {
            id: 6,
            title: "Scalable Solutions",
            description: "Grow your platform effortlessly with our flexible architecture.",
            number: 5000,
          },
          {
            id: 7,
            title: "Scalable Solutions",
            description: "Grow your platform effortlessly with our flexible architecture.",
            number: 5000,
          },
          {
            id: 8,
            title: "Scalable Solutions",
            description: "Grow your platform effortlessly with our flexible architecture.",
            number: 5000,
          },
        ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [cardsPerPage, setCardsPerPage] = useState(1)
  const sliderTrackRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)

  const calculateCardsPerPage = useCallback(() => {
    if (typeof window === "undefined") return 1
    if (window.innerWidth >= 1536) return 6
    if (window.innerWidth >= 1280) return 5
    if (window.innerWidth >= 1024) return 4
    if (window.innerWidth >= 768) return 3
    if (window.innerWidth >= 640) return 2
    return 1
  }, [])

  useEffect(() => {
    const updateDimensions = () => {
      const newCardsPerPage = calculateCardsPerPage()
      setCardsPerPage(newCardsPerPage)
      setCurrentIndex((prev) => Math.min(prev, Math.max(0, slides.length - newCardsPerPage)))
    }

    updateDimensions()
    window.addEventListener("resize", updateDimensions)
    return () => {
      window.removeEventListener("resize", updateDimensions)
    }
  }, [calculateCardsPerPage, slides.length])

  useEffect(() => {
    const containerWidth = sliderTrackRef.current?.offsetWidth || 0
    const offset = -((currentIndex * containerWidth) / cardsPerPage)
    animate(x, offset, { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] })
  }, [currentIndex, cardsPerPage, x])

  // Auto-slide functionality - moves one card at a time
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        // Calculate the maximum index we can slide to
        const maxIndex = Math.max(0, slides.length - cardsPerPage)

        // If we're at or past the maximum, go back to start
        if (prevIndex >= maxIndex) {
          return 0
        }

        // Otherwise, move one card forward
        return prevIndex + 1
      })
    }, 3000) // Auto slide every 3 seconds

    return () => clearInterval(interval)
  }, [slides.length, cardsPerPage])

  const handleDotClick = (pageIndex: number) => {
    setCurrentIndex(pageIndex * cardsPerPage)
  }

  const totalPages = Math.ceil(slides.length / cardsPerPage)

  return (
    <div className="relative w-full max-w-6xl mx-auto py-8 px-4">
      <div className="relative overflow-hidden">
        <motion.div ref={sliderTrackRef} className="flex" style={{ x }}>
          {slides.map((slide, index) => (
            <div key={slide.id} className="flex-shrink-0 p-4" style={{ width: `${100 / cardsPerPage}%` }}>
              <SliderCard
                title={slide.title}
                description={slide.description}
                targetNumber={slide.number}
                index={index}
                currentIndex={currentIndex}
                cardsPerPage={cardsPerPage}
              />
            </div>
          ))}
        </motion.div>
      </div>
      <div className="flex justify-center mt-8 space-x-2">
        {Array.from({ length: totalPages }).map((_, pageIndex) => {
          const isActive = Math.floor(currentIndex / cardsPerPage) === pageIndex
          return (
            <button
              key={pageIndex}
              onClick={() => handleDotClick(pageIndex)}
              aria-label={`Go to slide page ${pageIndex + 1}`}
              className="h-3 rounded-full transition-all duration-300"
              style={{
                width: isActive ? "2rem" : "0.75rem",
                backgroundColor: isActive ? "var(--secondary-color)" : "gray",
              }}
            />
          )
        })}
      </div>
    </div>
  )
}

function SliderCard({ title, description, targetNumber, index, currentIndex, cardsPerPage }: SliderCardProps) {
  const ref = useRef(null)
  const count = useMotionValue(0)
  const rounded = useTransform(count, Math.round)
  const isInView = useInView(ref, { amount: 0.5 })

  useEffect(() => {
    const isActivePageCard = index >= currentIndex && index < currentIndex + cardsPerPage
    if (isInView && isActivePageCard) {
      animate(count, targetNumber, { duration: 1.5, ease: "easeOut" })
    } else {
      count.set(0)
    }
  }, [isInView, targetNumber, count, index, currentIndex, cardsPerPage])

  return (
    <motion.div
      ref={ref}
      className="relative flex-shrink-0 w-full h-full p-6 text-white rounded-lg shadow-xl overflow-hidden before:absolute before:inset-0 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100"
      style={{
        background: "linear-gradient(to bottom right, var(--primary-color), var(--primary-hover-color))",
        clipPath: "polygon(0 0, 100% 0, 100% 90%, 0% 100%)",
      }}
    >
      <div className="relative z-10 flex flex-col h-full justify-between">
        <div>
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <p className="text-sm opacity-80">{description}</p>
        </div>
        <div className="mt-auto text-right">
          <motion.span className="text-4xl font-extrabold block text-[var(--secondary-hover-color)]">
            {rounded}
          </motion.span>
        </div>
      </div>
      <div className="absolute inset-0 opacity-10 text-white">
        <svg className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <pattern id="pattern-circles" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="1" fill="currentColor" />
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)" />
        </svg>
      </div>
    </motion.div>
  )
}
