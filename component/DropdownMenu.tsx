"use client"

import { useState } from "react"
import Link from "next/link"

interface DropdownItem {
  label: string
  href: string
}

interface DropdownProps {
  title: string
  items: DropdownItem[]
  isActive?: boolean
}

export function DropdownMenu({ title, items, isActive }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative group" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <button
        className={`
          px-4 py-2 text-white text-lg font-medium relative
          transition-colors duration-300 ease-in-out
          ${isActive ? "bg-[var(--softtec-light-blue)]" : "hover:text-softtec-yellow"}
        `}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {title}
        {isActive && (
          <span className="absolute bottom-0 left-0 w-full h-1 bg-[var(--softtec-yellow)] transition-all duration-300 ease-in-out origin-left scale-x-100"></span>
        )}
        {!isActive && (
          <span className="absolute bottom-0 left-0 w-full h-1 bg-[var(--softtec-yellow)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"></span>
        )}
      </button>
      {isOpen && (
        <div
          className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-10
                     opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0
                     transition-all duration-300 ease-out"
        >
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors duration-200 ease-in-out"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
