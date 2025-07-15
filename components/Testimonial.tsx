"use client"

import { useState } from "react"
import Image from "next/image"
import { Star, ArrowLeft, ArrowRight, Quote } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

// Define the type for a testimonial
interface Testimonial {
  id: number
  rating: number
  quote: string
  name: string
  title: string
  avatar: string
}

// Sample dynamic data for testimonials
const testimonialsData: Testimonial[] = [
  {
    id: 1,
    rating: 5,
    quote:
      "Air conditioning services encompass a range of maintenance, repair, installation, and consultation activities designed to ensure the efficient operation and longevity of air conditioning systems.",
    name: "Brooklyn Simmons",
    title: "Sales Manager",
    avatar: "/images/new-pic4.webp?height=98&width=98",
  },
  {
    id: 2,
    rating: 4,
    quote:
      "The team provided excellent service, quickly diagnosing and fixing our AC unit. Highly recommend their professional and efficient approach!",
    name: "John Doe",
    title: "CEO, Tech Solutions",
    avatar: "/images/new-pic2.webp?height=98&width=98",
  },
  {
    id: 3,
    rating: 5,
    quote:
      "Outstanding customer support and top-notch installation. Our new system works perfectly, and the air quality has significantly improved.",
    name: "Jane Smith",
    title: "Marketing Director",
    avatar: "/images/new-pic3.webp?height=98&width=98",
  },
]

export default function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1))
  }

  const currentTestimonial = testimonialsData[currentIndex]

  return (
    <section className="w-full min-h-screen flex items-center justify-center py-12 md:py-24 lg:py-32 bg-white">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 max-w-7xl mx-auto rounded-lg overflow-hidden shadow-xl">
        {/* Left Section: Testimonial Content */}
        <div
          className="relative p-8 md:p-12 lg:p-16 flex flex-col justify-between text-white"
          style={{
            backgroundColor: "#1A2B47", // Dark blue from image
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
            backgroundSize: `15px 15px`,
          }}
        >
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-[#FF7A00]">
              <Quote className="w-5 h-5 rotate-180" />
              <span className="font-semibold uppercase tracking-wider">Testimonials</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">Our Clients Feedback</h2>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-6 h-6 ${
                    i < currentTestimonial.rating ? "fill-[#FF7A00] text-[#FF7A00]" : "fill-gray-500 text-gray-500"
                  }`}
                />
              ))}
            </div>
            <AnimatePresence mode="wait">
              <motion.p
                key={currentTestimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-lg md:text-xl leading-relaxed italic"
              >
                {currentTestimonial.quote}
              </motion.p>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex items-center gap-4">
              <Image
                src={currentTestimonial.avatar || "/placeholder.svg"}
                alt={currentTestimonial.name}
                width={98}
                height={98}
                className="rounded-full object-cover border-2 border-white"
              />
              <div>
                <AnimatePresence mode="wait">
                  <motion.h3
                    key={`${currentTestimonial.id}-name`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="text-xl font-semibold text-[#FF7A00]"
                  >
                    {currentTestimonial.name}
                  </motion.h3>
                </AnimatePresence>
                <AnimatePresence mode="wait">
                  <motion.p
                    key={`${currentTestimonial.id}-title`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="text-gray-300"
                  >
                    {currentTestimonial.title}
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>
            <div className="flex gap-4">
              <motion.button
                onClick={handlePrev}
                className="w-12 h-12 rounded-full bg-[#FF7A00] text-white flex items-center justify-center shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:bg-opacity-90"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ArrowLeft className="w-6 h-6" />
              </motion.button>
              <motion.button
                onClick={handleNext}
                className="w-12 h-12 rounded-full bg-[#FF7A00] text-white flex items-center justify-center shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:bg-opacity-90"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ArrowRight className="w-6 h-6" />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Right Section: Image and Quote Icon */}
        <div className="relative hidden lg:flex items-center justify-center bg-gray-300 p-8">
          <Image
            src="/images/pic1.webp?height=742&width=540"
            alt="Placeholder Image"
            width={742}
            height={540}
            className="object-cover w-full h-full max-h-[540px] rounded-lg"
          />
          <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-[#FF7A00] flex items-center justify-center shadow-xl">
            <Quote className="w-16 h-16 text-white" />
          </div>
        </div>
      </div>
    </section>
  )
}
