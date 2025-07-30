"use client"

import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Users, HeartHandshake, GraduationCap, Stethoscope, Building2, Leaf, Factory, Globe2 } from "lucide-react"
import { useGlobalContext } from "../../context/ScreenProvider"

interface AccordionItem {
  id: string
  title: string
  content: string
  image?: string
  icon: string // now string
}

interface ResponsiveAccordionProps {
  data?: AccordionItem[]
}

const iconMap: Record<string, React.ElementType> = {
  users: Users,
  heartHandshake: HeartHandshake,
  graduationCap: GraduationCap,
  stethoscope: Stethoscope,
  building2: Building2,
  leaf: Leaf,
  factory: Factory,
  globe2: Globe2,
}

export default function Accordion({ data }: ResponsiveAccordionProps) {
  const { is4K } = useGlobalContext()
  const accordionData: AccordionItem[] = data || []
  const [activeItem, setActiveItem] = useState<string>(
    accordionData[2]?.id || "", // safe fallback
  )

  return (
    <div className={`w-full ${is4K ? " md:px-24" : "px-2 md:px-8"} flex items-center justify-center`}>
      <div className="w-full">
        {/* Desktop Horizontal Accordion */}
        <div className={`hidden lg:flex gap-4 ${is4K ? "h-[500px]" : "h-96"} w-full`}>
          {accordionData.map((item) => {
            const isActive = activeItem === item.id
            const Icon = iconMap[item.icon] // get the actual component

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
                <div className={`relative h-full w-full ${is4K ? "p-10" : "p-6"} flex flex-col justify-center`}>
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
                        <div className={`flex items-center gap-4 ${is4K ? "mb-8" : "mb-6"}`}>
                          {Icon && (
                            <Icon
                              className={`${is4K ? "w-16 h-16" : "w-12 h-12"} text-[var(--secondary-hover-color)]`}
                            />
                          )}
                          <h2 className={`${is4K ? "text-5xl" : "text-4xl"} font-bold`}>{item.title}</h2>
                        </div>
                        <p className={`${is4K ? "text-xl" : "text-lg"} leading-relaxed opacity-90`}>{item.content}</p>
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
                        {Icon && (
                          <Icon className={`${is4K ? "w-12 h-12" : "w-8 h-8"} text-[var(--secondary-hover-color)]`} />
                        )}
                        <h3 className={`${is4K ? "text-2xl" : "text-xl"} text-white font-semibold whitespace-nowrap`}>
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
        <div className="lg:hidden space-y-6">
          {accordionData.map((item, index) => {
            const Icon = iconMap[item.icon]
            return (
              <motion.div
                key={item.id}
                className={`rounded-3xl border-2 border-[var(--secondary-hover-color)] bg-[var(--primary-color)] backdrop-blur-sm ${is4K ? "p-10" : "p-6"}`}
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
                  <div className={`flex items-center gap-4 ${is4K ? "mb-6" : "mb-4"}`}>
                    {Icon && (
                      <Icon className={`${is4K ? "w-12 h-12" : "w-8 h-8"} text-[var(--secondary-hover-color)]`} />
                    )}
                    <h2 className={`${is4K ? "text-3xl" : "text-2xl"} font-bold`}>{item.title}</h2>
                  </div>
                  <p className={`${is4K ? "text-lg" : "text-base"} leading-relaxed opacity-90`}>{item.content}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
