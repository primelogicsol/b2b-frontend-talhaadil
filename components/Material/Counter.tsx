"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Slide {
  id: number
  title: string
  number: number
}

interface CounterProps {
  slides: Slide[]
}

interface CircularProgressProps {
  number: number
  maxNumber: number
  title: string
  isInView: boolean
}

function CircularProgress({ number, maxNumber, title, isInView }: CircularProgressProps) {
  const [displayNumber, setDisplayNumber] = useState(0)
  const [progress, setProgress] = useState(0)
  const percentage = (number / maxNumber) * 100
  const circumference = 2 * Math.PI * 45
  const strokeDasharray = circumference
  const strokeDashoffset = circumference - (progress / 100) * circumference

  useEffect(() => {
    if (isInView) {
      const duration = 2000
      const steps = 60
      const increment = number / steps
      const stepDuration = duration / steps

      let currentStep = 0
      const timer = setInterval(() => {
        currentStep++
        const currentValue = Math.min(Math.floor(increment * currentStep), number)
        setDisplayNumber(currentValue)
        if (currentStep >= steps) {
          setDisplayNumber(number)
          clearInterval(timer)
        }
      }, stepDuration)

      const progressTimer = setTimeout(() => {
        setProgress(percentage)
      }, 300)

      return () => {
        clearInterval(timer)
        clearTimeout(progressTimer)
      }
    } else {
      setDisplayNumber(0)
      setProgress(0)
    }
  }, [isInView, number, percentage])

  return (
    <div className="flex flex-col items-center justify-center p-6">
      <div className="relative w-32 h-32 mb-4">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" stroke="#f9c6b2" strokeWidth="4" fill="none" className="opacity-30" />
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            stroke="#d85834"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={strokeDasharray}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.span
            className="text-2xl font-bold text-[#1b4f68]"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {displayNumber}
          </motion.span>
        </div>
      </div>
      <h3 className="text-center text-sm font-semibold text-[#1b4f68] max-w-32">{title}</h3>
    </div>
  )
}

interface SlideCardProps {
  slide: Slide
  maxNumber: number
}

function SlideCard({ slide, maxNumber }: SlideCardProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 0.3, margin: "-50px" })

  return (
    <div ref={ref} className="px-2">
      <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
        <CircularProgress number={slide.number} maxNumber={maxNumber} title={slide.title} isInView={isInView} />
      </motion.div>
    </div>
  )
}

export default function Counter({ slides }: CounterProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [slidesToShow, setSlidesToShow] = useState(1)
  const [isHovered, setIsHovered] = useState(false)
  const maxNumber = Math.max(...slides.map((s) => s.number))

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) setSlidesToShow(6)
      else if (window.innerWidth >= 1024) setSlidesToShow(5)
      else if (window.innerWidth >= 768) setSlidesToShow(4)
      else if (window.innerWidth >= 640) setSlidesToShow(3)
      else if (window.innerWidth >= 410) setSlidesToShow(2)
      else setSlidesToShow(1)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const nextSlide = () => setCurrentIndex((p) => (p + slidesToShow >= slides.length ? 0 : p + 1))
  const prevSlide = () => setCurrentIndex((p) => (p === 0 ? Math.max(0, slides.length - slidesToShow) : p - 1))

  const canGoNext = currentIndex + slidesToShow < slides.length
  const canGoPrev = currentIndex > 0

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        if (canGoNext) nextSlide()
        else setCurrentIndex(0)
      }, 4000)
      return () => clearInterval(interval)
    }
  }, [currentIndex, canGoNext, isHovered])

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      <div className="relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <button
          onClick={prevSlide}
          disabled={!canGoPrev}
          className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full transition-all duration-200 ${
            canGoPrev
              ? "bg-[#1b4f68] hover:bg-[#2a5f7a] text-white shadow-lg"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={nextSlide}
          disabled={!canGoNext}
          className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full transition-all duration-200 ${
            canGoNext
              ? "bg-[#1b4f68] hover:bg-[#2a5f7a] text-white shadow-lg"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <div className="overflow-hidden mx-12">
          <motion.div
            className="flex"
            animate={{ x: `${-currentIndex * (100 / slidesToShow)}%` }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {slides.map((slide) => (
              <div key={slide.id} className="flex-shrink-0" style={{ width: `${100 / slidesToShow}%` }}>
                <SlideCard slide={slide} maxNumber={maxNumber} />
              </div>
            ))}
          </motion.div>
        </div>

        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: Math.ceil(slides.length / slidesToShow) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * slidesToShow)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                Math.floor(currentIndex / slidesToShow) === index
                  ? "bg-[#d85834] scale-110"
                  : "bg-[#f9c6b2] hover:bg-[#d85834]"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
