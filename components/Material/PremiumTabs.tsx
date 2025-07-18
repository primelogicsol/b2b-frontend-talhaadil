"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  BarChart3,
  Star,
  Diamond,
  Shield,
  Rocket,
  Globe,
  Crown,
  Sparkles,
  TrendingUp,
  Smartphone,
} from "lucide-react"

const iconMap: Record<string, any> = {
  BarChart3,
  Star,
  Diamond,
  Shield,
  Rocket,
  Globe,
  Crown,
  Sparkles,
  TrendingUp,
  Smartphone,
}

const tabData = {
  overview: {
    title: "Overview",
    icon: "BarChart3",
    cards: [
      {
        title: "Analytics & Insights",
        icon: "TrendingUp",
        points: [
          "Real-time dashboard with live metrics",
          "AI-powered predictive analytics",
          "Custom report builder with 50+ templates",
          "Advanced data visualization tools",
          "Automated insights and recommendations",
        ],
      },
      {
        title: "Performance & Speed",
        icon: "Rocket",
        points: [
          "Sub-100ms response times globally",
          "99.99% uptime guarantee",
          "Auto-scaling infrastructure",
          "Global CDN with 200+ locations",
          "Optimized for mobile and desktop",
        ],
      },
      {
        title: "Security & Compliance",
        icon: "Shield",
        points: [
          "End-to-end AES-256 encryption",
          "SOC 2 Type II certified",
          "GDPR and HIPAA compliant",
          "24/7 security monitoring",
          "Multi-factor authentication",
        ],
      },
    ],
  },
  features: {
    title: "Features",
    icon: "Star",
    cards: [
      {
        title: "Core Platform",
        icon: "Sparkles",
        points: [
          "Intuitive drag-and-drop interface",
          "Smart automation workflows",
          "Real-time collaboration tools",
          "Advanced search and filtering",
          "Customizable dashboards",
        ],
      },
      {
        title: "Integrations",
        icon: "Globe",
        points: [
          "500+ pre-built integrations",
          "REST and GraphQL APIs",
          "Custom webhook support",
          "Zapier and IFTTT compatibility",
          "Single sign-on (SSO) support",
        ],
      },
      {
        title: "Mobile & Apps",
        icon: "Smartphone",
        points: [
          "Native iOS and Android apps",
          "Progressive web app (PWA)",
          "Offline sync capabilities",
          "Push notifications",
          "Cross-device synchronization",
        ],
      },
    ],
  },
  pricing: {
    title: "Pricing",
    icon: "Diamond",
    cards: [
      {
        title: "Starter Plan",
        icon: "Rocket",
        points: [
          "Free forever for small teams",
          "Up to 5 projects included",
          "Basic analytics and reporting",
          "Community support access",
          "Standard integrations",
        ],
      },
      {
        title: "Professional Plan",
        icon: "Star",
        points: [
          "Everything in Starter plan",
          "Unlimited projects and users",
          "Advanced analytics suite",
          "Priority 24/7 support",
          "Premium integrations included",
        ],
      },
      {
        title: "Enterprise Plan",
        icon: "Crown",
        points: [
          "Everything in Professional plan",
          "Custom integrations and workflows",
          "Dedicated success manager",
          "Advanced security features",
          "On-premise deployment options",
        ],
      },
    ],
  },
}

export default function PremiumTabs() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div
      className="min-h-screen p-4 md:p-8"
      style={{
        background: "linear-gradient(to bottom right,var(--primary-color),var(--primary-hover-color),var(--primary-light-text-color)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1
            className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[var(--secondary-color)] to-[var(--secondary-hover-color)]"
          
          >
            Premium Platform
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Experience the next generation of productivity tools designed for modern teams
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div
            className="flex gap-2 p-2 rounded-full shadow-lg border overflow-x-auto"
            style={{
              backgroundColor: "white",
              borderColor: "var(--primary-light-text-color)",
            }}
          >
            {Object.entries(tabData).map(([key, data]) => {
              const IconComponent = iconMap[data.icon]
              return (
                <motion.button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`relative px-6 py-3 rounded-full font-semibold transition-all duration-300 whitespace-nowrap flex items-center gap-2 text-sm ${
                    activeTab === key
                      ? "text-white shadow-lg"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    background:
                      activeTab === key
                        ? "linear-gradient(to right, var(--secondary-color), var(--secondary-hover-color))"
                        : "transparent",
                  }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <IconComponent className="w-4 h-4" />
                    {data.title}
                  </span>
                </motion.button>
              )
            })}
          </div>
        </motion.div>

        {/* Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {tabData[activeTab as keyof typeof tabData].cards.map((card, index) => {
              const IconComponent = iconMap[card.icon]
              return (
                <motion.div
                  key={`${card.title}-${index}`}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.5,
                    type: "spring",
                    bounce: 0.3,
                  }}
                  whileHover={{
                    scale: 1.03,
                    y: -8,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                  }}
                  className="rounded-2xl shadow-xl p-8 border transition-all duration-300 group cursor-pointer relative overflow-hidden"
                  style={{
                    backgroundColor: "white",
                    borderColor: "var(--primary-light-text-color)",
                  }}
                >
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: "",
                    }}
                    initial={false}
                  />
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <motion.div
                        className="w-14 h-14 rounded-xl flex items-center justify-center shadow-lg"
                        style={{
                          background: "linear-gradient(to bottom right, var(--secondary-color), var(--secondary-hover-color))",
                        }}
                        whileHover={{ rotate: 5, scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <IconComponent className="w-7 h-7 text-white" />
                      </motion.div>
                      <h3 className="text-xl font-bold text-gray-500 group-hover:text-[var(--primary-color)] transition-colors duration-300">
                        {card.title}
                      </h3>
                    </div>
                    <ul className="space-y-3">
                      {card.points.map((point, pointIndex) => (
                        <motion.li
                          key={pointIndex}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 + pointIndex * 0.05 }}
                          className="flex items-start gap-3 text-gray-600"
                        >
                          <motion.div
                            className="w-2 h-2 rounded-full mt-2"
                            style={{
                              background: "linear-gradient(to right, var(--primary-color), var(--secondary-hover-color))",
                            }}
                          />
                          <span className="text-sm leading-relaxed">{point}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </AnimatePresence>

        <motion.div
          className="text-center mt-16 text-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <p className="text-sm">
            Built with Next.js, React, TypeScript, Tailwind CSS, and Framer Motion
          </p>
        </motion.div>
      </div>
    </div>
  )
}