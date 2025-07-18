"use client"

import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Shield, Lock, Eye, Headphones, Wifi, Server } from "lucide-react"

interface AccordionItem {
  id: string
  title: string
  content: string
  image?: string
  icon: React.ComponentType<{ className?: string }>
}

interface ResponsiveAccordionProps {
  data?: AccordionItem[]
}

// fallback dummy data if none is passed
const fallbackData: AccordionItem[] = [
  {
    id: "firewall-vpn",
    title: "Firewall & VPN",
    content:
      "Advanced firewall protection with integrated VPN capabilities to secure your network traffic and prevent unauthorized access.",
    icon: Wifi,
  },
  {
    id: "hack-protection",
    title: "Hack Protection",
    content:
      "Real-time monitoring and protection against cyber attacks, malware, and suspicious activities on your system.",
    icon: Shield,
  },
  {
    id: "live-security",
    title: "Live Security",
    content:
      "Blocks infected website tracking programs and annoying pop-ups while providing continuous security monitoring.",
    icon: Eye,
  },
  {
    id: "online-support",
    title: "Online Support",
    content:
      "24/7 technical support and assistance from our security experts to help you maintain optimal protection.",
    icon: Headphones,
  },
  {
    id: "data-encryption",
    title: "Data Encryption",
    content:
      "Military-grade encryption for all your sensitive data, ensuring complete privacy and protection from data breaches.",
    icon: Lock,
  },
  {
    id: "server-monitoring",
    title: "Server Monitoring",
    content:
      "Continuous server health monitoring with instant alerts and automated responses to maintain optimal performance.",
    icon: Server,
  },
]

export default function Accordion({ data }: ResponsiveAccordionProps) {
  const accordionData = data && data.length > 0 ? data : fallbackData
  const [activeItem, setActiveItem] = useState<string>(accordionData[2].id) // defaults to third

  return (
    <div className="w-full px-2 md:px-8 flex items-center justify-center">
      <div className="w-full">
        {/* Desktop Horizontal Accordion */}
        <div className="hidden md:flex gap-4 h-96 w-full">
          {accordionData.map((item) => {
            const isActive = activeItem === item.id

            return (
              <motion.div
                key={item.id}
                className={`relative cursor-pointer rounded-3xl border-2 border-[var(--secondary-hover-color)] bg-[var(--primary-color)] backdrop-blur-sm overflow-hidden ${
                  isActive ? "flex-[4]" : "flex-1"
                }`}
                onClick={() => setActiveItem(item.id)}
                layout
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 40,
                  mass: 0.8,
                }}
                whileHover={{
                  scale: isActive ? 1 : 1.03,
                  transition: { duration: 0.2, ease: "easeOut" },
                }}
                whileTap={{
                  scale: 0.97,
                  transition: { duration: 0.1 },
                }}
              >
                <div className="relative h-full w-full p-6 flex flex-col justify-center">
                  <AnimatePresence mode="wait">
                    {isActive ? (
                      <motion.div
                        key="expanded"
                        initial={{ opacity: 0, y: 30, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -30, scale: 0.9 }}
                        transition={{
                          duration: 0.4,
                          ease: [0.25, 0.46, 0.45, 0.94],
                        }}
                        className="text-white"
                      >
                        <div className="flex items-center gap-4 mb-6">
                          <item.icon className="w-12 h-12 text-[var(--secondary-hover-color)]" />
                          <h2 className="text-4xl font-bold">{item.title}</h2>
                        </div>
                        <p className="text-lg leading-relaxed opacity-90">
                          {item.content}
                        </p>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="collapsed"
                        initial={{ opacity: 0, rotate: -90 }}
                        animate={{ opacity: 1, rotate: -90 }}
                        exit={{ opacity: 0, rotate: -90 }}
                        transition={{
                          duration: 0.3,
                          ease: "easeInOut",
                        }}
                        className="h-full flex flex-col items-center justify-center gap-4"
                      >
                        <item.icon className="w-8 h-8 text-[var(--secondary-hover-color)]" />
                        <h3 className="text-white text-xl font-semibold whitespace-nowrap">
                          {item.title}
                        </h3>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Hover overlay */}
                <motion.div
                  className="absolute inset-0 bg-white/5 opacity-0"
                  whileHover={{ opacity: isActive ? 0 : 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>
            )
          })}
        </div>

        {/* Mobile Vertical Stack */}
        <div className="md:hidden space-y-6">
          {accordionData.map((item, index) => (
            <motion.div
              key={item.id}
              className="rounded-3xl border-2 border-[var(--secondary-hover-color)] bg-[var(--primary-color)] backdrop-blur-sm p-6"
              initial={{ opacity: 0, y: 60, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                type: "spring",
                stiffness: 120,
                damping: 20,
              }}
              whileHover={{
                scale: 1.03,
                transition: { duration: 0.2, ease: "easeOut" },
              }}
              whileTap={{
                scale: 0.97,
                transition: { duration: 0.1 },
              }}
            >
              <div className="text-white">
                <div className="flex items-center gap-4 mb-4">
                  <item.icon className="w-8 h-8 text-[var(--secondary-hover-color)]" />
                  <h2 className="text-2xl font-bold">{item.title}</h2>
                </div>
                <p className="text-base leading-relaxed opacity-90">
                  {item.content}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}