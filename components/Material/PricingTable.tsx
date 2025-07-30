"use client"

import { useState } from "react"
import { Info } from "lucide-react"
import { useGlobalContext } from "../Context/GlobalProvider"

interface PricingPlan {
  name: string
  price: number
  period: string
  description: string
  features: {
    directAccess: string
    compulsory: string
    kpiScore: string
  }
  isPopular?: boolean
  buttonText: string
}

const plans: PricingPlan[] = [
  {
    name: "Starter Package",
    price: 1250,
    period: "one-time",
    description: "Designed for small vendors establishing presence in the ecosystem.",
    features: {
      directAccess: "Mid-tier partnerships (Consignment & Exhibition)",
      compulsory: "E-Commerce Partnership Registration & Approval",
      kpiScore: "Minimum 7 across performance metrics",
    },
    buttonText: "Get Started",
  },
  {
    name: "Growth Package",
    price: 2500,
    period: "one-time",
    description: "For scaling vendors transitioning to growth strategies.",
    features: {
      directAccess: "Mid-tier partnership - Import Export",
      compulsory: "E-Commerce Partnership Registration & Approval",
      kpiScore: "Minimum 7 across performance metrics",
    },
    isPopular: true,
    buttonText: "Get Started",
  },
  {
    name: "Premium Package",
    price: 5000,
    period: "one-time",
    description: "For established vendors aiming for global expansion.",
    features: {
      directAccess: "Full-spectrum partnership of Subsidiary",
      compulsory: "E-Commerce Partnership Registration & Approval",
      kpiScore: "Minimum 7 across performance metrics",
    },
    buttonText: "Get Started",
  },
]

export default function PricingTable() {
  const [selectedPlan, setSelectedPlan] = useState(1)
  const { is4K } = useGlobalContext()

  return (
    <div className="bg-[var(--primary-hover-color)] py-10 px-4 sm:px-6 rounded-b-xl">
      <div className={is4K ? "max-w-[2000px] mx-auto" : "max-w-7xl mx-auto"}>
        {/* Header */}
        <div className="text-center mb-10">
          <h1
            className={
              is4K
                ? "text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-[var(--primary-header-color)] mb-6"
                : "text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-[var(--primary-header-color)] mb-4"
            }
          >
            Confidence in Your Security
          </h1>
        </div>

        {/* Desktop View */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={
                is4K
                  ? "relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 transition-all duration-300 hover:bg-white/15 hover:scale-105"
                  : "relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 transition-all duration-300 hover:bg-white/15 hover:scale-105"
              }
            >
              {plan.isPopular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-[var(--secondary-hover-color)] text-black px-4 py-1 rounded-full text-xs font-semibold">
                    MOST POPULAR
                  </div>
                </div>
              )}

              <div className="text-center mb-5">
                <h3
                  className={is4K ? "text-white font-semibold text-lg mb-2" : "text-white font-semibold text-base mb-1"}
                >
                  {plan.name}
                </h3>
                <p
                  className={
                    is4K ? "text-white/70 text-sm mb-4 leading-relaxed" : "text-white/70 text-xs mb-3 leading-relaxed"
                  }
                >
                  {plan.description}
                </p>

                <div className="mb-3">
                  <span className={is4K ? "text-white text-5xl font-bold" : "text-white text-4xl font-bold"}>
                    ${plan.price}
                  </span>
                </div>

                <div className={is4K ? "text-white text-base mb-6 capitalize" : "text-white text-sm mb-5 capitalize"}>
                  {plan.period.replace("-", " ")}
                </div>

                <button
                  className={
                    is4K
                      ? `w-full py-3 rounded text-base font-medium ${
                          plan.isPopular
                            ? "bg-[var(--secondary-hover-color)] hover:bg-[var(--secondary-color)] text-black"
                            : "bg-white/20 hover:bg-white/30 text-white border border-white/30"
                        } transition-all duration-300`
                      : `w-full py-2 rounded text-sm font-medium ${
                          plan.isPopular
                            ? "bg-[var(--secondary-hover-color)] hover:bg-[var(--secondary-color)] text-black"
                            : "bg-white/20 hover:bg-white/30 text-white border border-white/30"
                        } transition-all duration-300`
                  }
                >
                  {plan.buttonText}
                </button>
              </div>

              <div className={is4K ? "space-y-4 text-base" : "space-y-3 text-sm"}>
                {Object.entries(plan.features).map(([label, value]) => (
                  <div key={label} className="grid grid-cols-[110px_1fr] items-center py-2 border-b border-white/10">
                    <div className="flex items-center gap-1 truncate text-white/80 capitalize">
                      {label.replace(/([A-Z])/g, " $1")}
                      <Info className="w-3 h-3 text-white/50" />
                    </div>
                    <div
                      className={
                        is4K
                          ? "text-white font-medium text-sm sm:text-base"
                          : "text-white font-medium text-xs sm:text-sm"
                      }
                    >
                      {value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View */}
        <div className="lg:hidden">
          <div className="flex flex-wrap justify-center gap-2 mb-9">
            {plans.map((plan, index) => (
              <button
                key={plan.name}
                onClick={() => setSelectedPlan(index)}
                className={`px-3 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                  selectedPlan === index
                    ? "bg-[var(--secondary-hover-color)] text-black shadow-lg"
                    : "bg-white/20 text-white hover:bg-white/30"
                }`}
              >
                {plan.name}
              </button>
            ))}
          </div>

          <div className={is4K ? "max-w-md mx-auto w-full" : "max-w-sm mx-auto w-full"}>
            <div
              className={
                is4K
                  ? "relative bg-white/10 backdrop-blur-lg rounded-2xl p-7 border border-white/20"
                  : "relative bg-white/10 backdrop-blur-lg rounded-2xl p-5 border border-white/20"
              }
            >
              {plans[selectedPlan].isPopular && (
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                  <div className="bg-[var(--secondary-hover-color)] text-black px-3 py-1 text-center rounded-full text-xs font-semibold">
                    MOST POPULAR
                  </div>
                </div>
              )}

              <div className="text-center mb-5">
                <h3
                  className={is4K ? "text-white font-semibold text-lg mb-3" : "text-white font-semibold text-base mb-2"}
                >
                  {plans[selectedPlan].name}
                </h3>
                <p
                  className={
                    is4K ? "text-white/70 text-base mb-4 leading-snug" : "text-white/70 text-sm mb-3 leading-snug"
                  }
                >
                  {plans[selectedPlan].description}
                </p>

                <div className="mb-3">
                  <span className={is4K ? "text-white text-5xl font-bold" : "text-white text-4xl font-bold"}>
                    ${plans[selectedPlan].price}
                  </span>
                  <span className={is4K ? "text-white/60 text-base ml-1" : "text-white/60 text-sm ml-1"}>
                    {plans[selectedPlan].period}
                  </span>
                </div>

                <button
                  className={
                    is4K
                      ? `w-full py-3 rounded text-base ${
                          plans[selectedPlan].isPopular
                            ? "bg-[var(--secondary-hover-color)] hover:bg-[var(--secondary-color)] text-black"
                            : "bg-white/20 hover:bg-white/30 text-white border border-white/30"
                        } transition-all duration-300`
                      : `w-full py-2 rounded text-sm ${
                          plans[selectedPlan].isPopular
                            ? "bg-[var(--secondary-hover-color)] hover:bg-[var(--secondary-color)] text-black"
                            : "bg-white/20 hover:bg-white/30 text-white border border-white/30"
                        } transition-all duration-300`
                  }
                >
                  {plans[selectedPlan].buttonText}
                </button>
              </div>

              <div className={is4K ? "space-y-4 text-base" : "space-y-3 text-sm"}>
                {Object.entries(plans[selectedPlan].features).map(([label, value]) => (
                  <div
                    key={label}
                    className={
                      is4K
                        ? "flex justify-between items-start py-3 border-b border-white/10 text-sm sm:text-base"
                        : "flex justify-between items-start py-2 border-b border-white/10 text-xs sm:text-sm"
                    }
                  >
                    <div className="flex items-center gap-1 text-white/80 capitalize">
                      {label.replace(/([A-Z])/g, " $1")}
                      <Info className={is4K ? "w-5 h-5 text-white/50" : "w-4 h-4 text-white/50"} />
                    </div>
                    <span className="text-white font-medium text-right">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
