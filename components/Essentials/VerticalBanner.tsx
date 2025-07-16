"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const slides = [
  {
    id: 1,
    image: "/images/hero1.jpg",
    title: "Discover Amazing Experiences",
    subtitle: "Unleash your potential with our innovative solutions",
    buttonText: "Get Started",
    buttonLink: "#",
  },
  {
    id: 2,
    image: "/images/hero2.jpg",
    title: "Transform Your Business",
    subtitle: "Take your company to the next level with cutting-edge technology",
    buttonText: "Learn More",
    buttonLink: "#",
  },
  {
    id: 3,
    image: "/images/hero3.jpg",
    title: "Innovation Meets Excellence",
    subtitle: "Join thousands of satisfied customers worldwide",
    buttonText: "Join Now",
    buttonLink: "#",
  },
  {
    id: 4,
    image: "/images/hero4.jpg",
    title: "Your Success Story Starts Here",
    subtitle: "Professional solutions tailored to your unique needs",
    buttonText: "Contact Us",
    buttonLink: "#",
  },
]

export default function VerticalHeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 4000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Ultra Smooth Sliding Container */}
      <motion.div
        className="flex flex-col w-full"
        animate={{
          y: `-${currentSlide * 100}vh`,
        }}
        transition={{
          duration: 2,
          ease: [0.25, 0.1, 0.25, 1],
          type: "tween",
        }}
      >
        {slides.map((slide, index) => (
          <div key={slide.id} className="relative w-full h-screen flex-shrink-0 flex items-center justify-center">
            {/* Background Image */}
            <div
              className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight"
                initial={{ opacity: 0, y: 50 }}
                animate={{
                  opacity: currentSlide === index ? 1 : 0,
                  y: currentSlide === index ? 0 : 50,
                }}
                transition={{
                  duration: 1.5,
                  delay: 0.2,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
              >
                {slide.title}
              </motion.h1>

              <motion.p
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-8 sm:mb-10 font-light opacity-90 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{
                  opacity: currentSlide === index ? 0.9 : 0,
                  y: currentSlide === index ? 0 : 30,
                }}
                transition={{
                  duration: 1.5,
                  delay: 0.4,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
              >
                {slide.subtitle}
              </motion.p>

              <motion.a
                href={slide.buttonLink}
                className="inline-block bg-white text-gray-900 font-semibold px-8 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg hover:bg-gray-100 hover:shadow-lg cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: currentSlide === index ? 1 : 0,
                  y: currentSlide === index ? 0 : 20,
                }}
                transition={{
                  duration: 1.5,
                  delay: 0.6,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {slide.buttonText}
              </motion.a>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Slide Indicators */}
      <div className="absolute right-4 sm:right-8 top-1/2 transform -translate-y-1/2 z-20">
        <div className="flex flex-col space-y-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      

      {/* Navigation Arrows */}
      <button
        onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
        className="absolute left-4 sm:left-8 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-2 sm:p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </button>

      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        className="absolute left-4 sm:left-8 top-1/2 transform translate-y-8 z-20 bg-white/20 hover:bg-white/30 text-white p-2 sm:p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
        aria-label="Next slide"
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </div>
  )
}
