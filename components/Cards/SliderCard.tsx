"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { SlidercardItem } from "./SlidercardItem"

interface CardData {
  id: string
  heading: string
  description: string
}

interface CardSliderProps {
  cards?: CardData[] // Make cards prop optional
}

// Default card data
const defaultCards: CardData[] = [
  {
    id: "1",
    heading: "Innovative Solutions",
    description: "We provide cutting-edge solutions tailored to your business needs, ensuring growth and efficiency.",
  },
  {
    id: "2",
    heading: "Expert Team",
    description: "Our team comprises industry veterans and creative minds dedicated to delivering excellence.",
  },
  {
    id: "3",
    heading: "Customer Satisfaction",
    description: "Your success is our priority. We are committed to providing unparalleled support and service.",
  },
  {
    id: "4",
    heading: "Global Reach",
    description: "Expand your horizons with our services available worldwide, connecting you to new opportunities.",
  },
  {
    id: "5",
    heading: "Sustainable Practices",
    description: "Committed to a greener future, we integrate eco-friendly practices in all our operations.",
  },
  {
    id: "6",
    heading: "Advanced Technology",
    description: "Leveraging the latest technological advancements to keep you ahead of the curve.",
  },
]

export function SliderCard({ cards = defaultCards }: CardSliderProps) {
  // Use defaultCards if cards prop is not provided
  const [currentIndex, setCurrentIndex] = useState(0)
  const [cardsPerPage, setCardsPerPage] = useState(1)

  useEffect(() => {
    const handleResize = () => {
      // Always show 3 cards, regardless of screen size
      setCardsPerPage(3)
    }

    window.addEventListener("resize", handleResize)
    handleResize() // Set initial value
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const totalPages = Math.ceil(cards.length / cardsPerPage)

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages)
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalPages) % totalPages)
  }

  const startIndex = currentIndex * cardsPerPage
  const visibleCards = cards.slice(startIndex, startIndex + cardsPerPage)

  // Calculate the transform value based on the current index and cards per page
  // This ensures the correct set of cards is visible
  const getTranslateX = () => {
    if (cardsPerPage === 1) return -currentIndex * 100
    if (cardsPerPage === 2) return -currentIndex * 100
    if (cardsPerPage === 3) return -currentIndex * 100
    return 0
  }

  return (
    <div className="relative w-full max-w-6xl mx-auto py-10 px-6 not-even:rounded-xl shadow-lg overflow-hidden bg-[var(--primary-color)] rounded-2xl">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-4xl font-bold text-[var(--secondary-color)]">Our Features</h2>
        <div className="flex space-x-2">
          <button
            onClick={handlePrev}
            className="cursor-pointer p-3 rounded-full bg-[var(--secondary-color)] text-white hover:bg-[var(--secondary-hover-color)] transition-colors duration-200 shadow-md"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={handleNext}
            className="p-3 rounded-full bg-[var(--secondary-color)] text-white hover:bg-[var(--secondary-hover-color)] transition-colors duration-200 shadow-md"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <motion.div
          className="flex gap-4"
          animate={{ x: `${getTranslateX()}%` }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {cards.map((card, index) => (
            <SlidercardItem
              key={card.id}
              heading={card.heading}
              description={card.description}
              // Adjust width based on cardsPerPage for proper layout
              className={
                cardsPerPage === 1
                  ? "w-full"
                  : cardsPerPage === 2
                    ? "w-[calc(50%-0.5rem)]" // 2 cards, 1 gap
                    : "w-[calc(33.333%-0.666rem)]" // 3 cards, 2 gaps
              }
            />
          ))}
        </motion.div>
      </div>
    </div>
  )
}
