"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import type { Easing } from "framer-motion"

interface DropdownItem {
  label: string
  href: string
}

interface DropdownProps {
  title: string
  items: DropdownItem[]
  isActive?: boolean
}

const containerVariants = {
  hidden: { opacity: 0, y: -10, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: [0.42, 0, 0.58, 1] as Easing,
      when: "beforeChildren",
      staggerChildren: 0.08,
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    scale: 0.95,
    transition: { duration: 0.2, ease: [0.42, 0, 1, 1] as Easing },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.2 } },
}

export default function DropdownMenu({ title, items, isActive }: DropdownProps) {
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [isDesktopOpen, setIsDesktopOpen] = useState(false)

  const renderDropdown = (isOpen: boolean) => (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="absolute left-0 mt-2 w-48 bg-white shadow-xl rounded-md py-2 z-10"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={containerVariants}
        >
          {items.map((item, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Link
                href={item.href}
                className="block px-4 py-2 text-gray-800 hover:bg-pink-300 transition-colors duration-200 ease-in-out"
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  )

  return (
    <div className="relative">
      {/* Desktop: hover-triggered dropdown */}
      <div
        className="hidden md:block group"
        onMouseEnter={() => setIsDesktopOpen(true)}
        onMouseLeave={() => setIsDesktopOpen(false)}
      >
        <button
          className={`py-2 cursor-pointer text-white text-lg font-medium relative transition-colors duration-300 ease-in-out
            ${isActive ? "bg-[var(--softtec-light-blue)]" : "hover:text-softtec-yellow"}
          `}
        >
          {title}
          <span
            className={`absolute bottom-0 left-0 w-full h-1 bg-[var(--softtec-yellow)] transition-all duration-300 ease-in-out origin-left ${
              isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
            }`}
          ></span>
        </button>
        {renderDropdown(isDesktopOpen)}
      </div>

      {/* Mobile: click-triggered dropdown */}
      <div className="block md:hidden">
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className={`flex items-center gap-1 text-white text-lg font-medium transition-colors duration-300 ease-in-out w-full`}
        >
          {title}
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-300 ${
              isMobileOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </button>
        {renderDropdown(isMobileOpen)}
      </div>
    </div>
  )
}