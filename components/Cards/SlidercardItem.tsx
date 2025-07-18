"use client"

import { motion } from "framer-motion"

interface CardItemProps {
  heading: string
  description: string
  className?: string
}

export function SlidercardItem({ heading, description, className }: CardItemProps) {
  return (
    <motion.div
      className={`flex-shrink-0 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.333rem)] p-8 bg-gradient-to-br bg-[var(--primary-color)] text-white shadow-2xl border border-[var(--secondary-color)] cursor-pointer transform transition-all duration-300 ease-in-out
        rounded-tl-3xl rounded-br-3xl rounded-tr-xl rounded-bl-xl
        hover:scale-[1.03] hover:shadow-3xl hover:bg-[var(--primary-hover-color)] hover:rotate-1
        ${className}`}
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 10 }}
    >
      <h3 className="text-2xl font-bold mb-2 text-gray-200">{heading}</h3>
      <p className="text-gray-200 text-base">{description}</p>
    </motion.div>
  )
}
