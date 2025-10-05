

"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const defaultSlides = [
   {
    id: 0,
    image: "/placeholder.svg?height=800&width=1200",
    title: "Craft Design Collaboration",
    subtitle: "Built With Artisans",
    primaryButton: {
      text: "Start Collaboration",
      link: "#start",
    },
    secondaryButton: {
      text: "Join As Buyer",
      link: "#join",
    },
  },
  {
    id: 1,
    image: "/placeholder.svg?height=800&width=1200",
    title: "Discover Amazing Experiences",
    subtitle: "Unleash your potential with our innovative solutions",
    primaryButton: {
      text: "Get Started",
      link: "#",
    },
    secondaryButton: {
      text: "Watch Demo",
      link: "#demo",
    },
  },
  {
    id: 2,
    image: "/placeholder.svg?height=800&width=1200",
    title: "Transform Your Business",
    subtitle: "Built With Artisans",
    primaryButton: {
      text: "Learn More",
      link: "#learn",
    },
    secondaryButton: {
      text: "View Case Studies",
      link: "#cases",
    },
  },
  
 
]

export default function VerticalHeroSlider({ slides = defaultSlides,isBanner = false }) {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 4000000)
    return () => clearInterval(timer)
  }, [slides.length])

  const getSlideOffset = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 640) return currentSlide * 60
      if (window.innerWidth < 1024) return currentSlide * 75
      return currentSlide * 100
    }
    return currentSlide * 100
  }

  return (
    <div className="relative w-full h-[60vh] sm:h-[75vh] lg:h-[80vh] overflow-hidden mt-20 bg-[var(--primary-color)]">
      <motion.div
        className="flex flex-col w-full"
        animate={{ y: `-${getSlideOffset()}vh` }}
        transition={{
          duration: 2,
          ease: [0.25, 0.1, 0.25, 1],
          type: "tween",
        }}
      >
        {slides.map((slide, index) => (
          <div key={slide.id} className="relative w-full h-[60vh] sm:h-[75vh] lg:h-screen flex-shrink-0">
            <div
              className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black/40" />
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center text-center text-white h-full px-4 sm:px-6 lg:px-8 max-3xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-[1800px] mx-auto">
              <motion.h1
                className="text-xl md:text-3xl lg:text-4xl xl:text-6xl 2xl:text-8xl font-bold leading-tight"
                initial={{ opacity: 0, y: 50 }}
                animate={{
                  opacity: currentSlide === index ? 1 : 0,
                  y: currentSlide === index ? 0 : 50,
                }}
                transition={{ duration: 1.5, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              >
                {slide.title}
              </motion.h1>
              <motion.h1
                className="hidden lg:flex text-xl md:text-3xl lg:text-4xl xl:text-6xl 2xl:text-8xl font-bold leading-tight text-[var(--secondary-color)]"
                initial={{ opacity: 0, y: 50 }}
                animate={{
                  opacity: currentSlide === index ? 1 : 0,
                  y: currentSlide === index ? 0 : 50,
                }}
                transition={{ duration: 1.5, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              >
                {slide.subtitle}
              </motion.h1>

              
              <motion.p
                className="text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-2xl lg:font-bold opacity-90 max-w-4xl leading-relaxed mb-6 lg:mb-8 mt-2"
                initial={{ opacity: 0, y: 30 }}
                animate={{
                  opacity: currentSlide === index ? 0.9 : 0,
                  y: currentSlide === index ? 0 : 30,
                }}
                transition={{ duration: 1.5, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              >
               Vendors and buyers co-create heritage-inspired modern designs.

              </motion.p>

              <motion.div
                className={`flex flex-col sm:flex-row gap-4 mt-6 ${isBanner ? "lg:mb-65" : "mb-4"}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{
                  opacity: currentSlide === index ? 1 : 0,
                  y: currentSlide === index ? 0 : 30,
                }}
                transition={{ duration: 1.5, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <a
                  href={slide.primaryButton.link}
                  className="bg-white text-black px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold text-sm sm:text-base hover:bg-gray-100 transition-colors duration-300"
                >
                  {slide.primaryButton.text}
                </a>
                <a
                  href={slide.secondaryButton.link}
                  className="border-2 border-white text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold text-sm sm:text-base hover:bg-white hover:text-black transition-colors duration-300"
                >
                  {slide.secondaryButton.text}
                </a>
              </motion.div>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Indicators */}
       <div className="absolute right-3 sm:right-4 lg:right-8 top-1/2 transform -translate-y-1/2 z-20">
        <div className="flex flex-col space-y-2 sm:space-y-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
        className="absolute left-3 sm:left-4 lg:left-8 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-1.5 sm:p-2 lg:p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </button>

      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        className="absolute left-3 sm:left-4 lg:left-8 top-1/2 transform translate-y-6 sm:translate-y-8 z-20 bg-white/20 hover:bg-white/30 text-white p-1.5 sm:p-2 lg:p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
        aria-label="Next slide"
      >
        <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </div>
  )
}
