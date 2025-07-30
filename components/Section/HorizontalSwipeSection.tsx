"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { RiShakeHandsLine } from "react-icons/ri"
import { useGlobalContext } from "@/context/ScreenProvider" // Import useGlobalContext

interface Testimonial {
  id: number
  rating: number
  quote: string
  name: string
  title: string
  avatar: string
}

interface TestimonialsSliderProps {
  testimonials?: Testimonial[]
  sideImage?: string
}

const defaultTestimonials: Testimonial[] = [
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

export default function HorizontalSwipeSection({
  testimonials = defaultTestimonials,
  sideImage = "/images/pic1.webp?height=742&width=540",
}: TestimonialsSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { is4K } = useGlobalContext() // Use the hook here

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section
      className={
        is4K
          ? "w-full flex items-center justify-center py-10 md:py-16 lg:py-20"
          : "w-full flex items-center justify-center py-6 md:py-12 lg:py-16"
      }
    >
      {" "}
      {/* Increased padding */}
      <div
        className={
          is4K
            ? "container grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0 max-w-[1800px] mx-auto rounded-lg overflow-hidden"
            : "container grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 max-w-7xl mx-auto rounded-lg overflow-hidden"
        }
      >
        {" "}
        {/* Increased gap and max-width */}
        <div
          className={
            is4K
              ? "relative p-12 md:p-16 lg:p-20 flex flex-col justify-between text-white bg-[var(--primary-color)]"
              : "relative p-8 md:p-12 lg:p-16 flex flex-col justify-between text-white bg-[var(--primary-color)]"
          } // Increased padding
        >
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-[var(--secondary-color)]">
              <RiShakeHandsLine className={is4K ? "w-6 h-6 rotate-180" : "w-5 h-5 rotate-180"} />{" "}
              {/* Increased icon size */}
              <span
                className={
                  is4K ? "font-semibold uppercase tracking-wider text-lg" : "font-semibold uppercase tracking-wider"
                }
              >
                Connections
              </span>{" "}
              {/* Increased font size */}
            </div>
            <h2
              className={
                is4K
                  ? "text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                  : "text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
              }
            >
              Common Connection
            </h2>{" "}
            {/* Increased font size */}
            <AnimatePresence mode="wait">
              <motion.p
                key={currentTestimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className={
                  is4K ? "text-xl md:text-2xl leading-relaxed italic" : "text-lg md:text-xl leading-relaxed italic"
                } // Increased font size
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
                width={is4K ? 120 : 98} // Increased image size
                height={is4K ? 120 : 98} // Increased image size
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
                    className={
                      is4K
                        ? "text-2xl font-semibold text-[var(--secondary-color)]"
                        : "text-xl font-semibold text-[var(--secondary-color)]"
                    } // Increased font size
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
                    className={is4K ? "text-lg text-gray-300" : "text-gray-300"} // Increased font size
                  >
                    {currentTestimonial.title}
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>
            <div className="flex gap-4">
              <motion.button
                onClick={handlePrev}
                className={
                  is4K
                    ? "w-14 h-14 rounded-full bg-[var(--secondary-color)] text-white flex items-center justify-center shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:bg-opacity-90"
                    : "w-12 h-12 rounded-full bg-[var(--secondary-color)] text-white flex items-center justify-center shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:bg-opacity-90"
                } // Increased size
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ArrowLeft className={is4K ? "w-7 h-7" : "w-6 h-6"} /> {/* Increased icon size */}
              </motion.button>
              <motion.button
                onClick={handleNext}
                className={
                  is4K
                    ? "w-14 h-14 rounded-full bg-[var(--secondary-color)] text-white flex items-center justify-center shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:bg-opacity-90"
                    : "w-12 h-12 rounded-full bg-[var(--secondary-color)] text-white flex items-center justify-center shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:bg-opacity-90"
                } // Increased size
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ArrowRight className={is4K ? "w-7 h-7" : "w-6 h-6"} /> {/* Increased icon size */}
              </motion.button>
            </div>
          </div>
        </div>
        <div
          className={
            is4K
              ? "relative hidden lg:flex items-center justify-center bg-gray-300 p-10"
              : "relative hidden lg:flex items-center justify-center bg-gray-300 p-8"
          }
        >
          {" "}
          {/* Increased padding */}
          <Image
            src={sideImage || "/placeholder.svg"}
            alt="Placeholder Image"
            width={is4K ? 900 : 742} // Increased image width
            height={is4K ? 650 : 540} // Increased image height
            className={
              is4K
                ? "object-cover w-full h-full max-h-[650px] rounded-lg"
                : "object-cover w-full h-full max-h-[540px] rounded-lg"
            } // Increased max-height
          />
          <div
            className={
              is4K
                ? "absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-[var(--secondary-color)] flex items-center justify-center shadow-xl"
                : "absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-[var(--secondary-color)] flex items-center justify-center shadow-xl"
            }
          >
            {" "}
            {/* Increased size */}
            <RiShakeHandsLine className={is4K ? "w-20 h-20 text-white" : "w-16 h-16 text-white"} />{" "}
            {/* Increased icon size */}
          </div>
        </div>
      </div>
    </section>
  )
}
