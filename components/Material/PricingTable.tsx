"use client"

import { useState } from "react"
import { Info } from "lucide-react"

interface PricingPlan {
  name: string
  price: number
  period: string
  description: string
  features: {
    team: string
    installedAgent: string
    realTimeFeedback: string
    addingTimeManually1: string
    addingTimeManually2: string
  }
  isPopular?: boolean
  buttonText: string
}

const plans: PricingPlan[] = [
  {
    name: "STARTER",
    price: 18,
    period: "/mo",
    description: "Collect more submissions, access most of the features",
    features: {
      team: "02",
      installedAgent: "12",
      realTimeFeedback: "Limited",
      addingTimeManually1: "100",
      addingTimeManually2: "Limited",
    },
    buttonText: "Get Started",
  },
  {
    name: "ADVANCE",
    price: 19,
    period: "/mo",
    description: "Collect more submissions, access most of the features",
    features: {
      team: "02",
      installedAgent: "12",
      realTimeFeedback: "Limited",
      addingTimeManually1: "100",
      addingTimeManually2: "Limited",
    },
    isPopular: true,
    buttonText: "Get Started",
  },
  {
    name: "TEAM PLAN",
    price: 14,
    period: "/mo",
    description: "Collect more submissions, access most of the features",
    features: {
      team: "02",
      installedAgent: "12",
      realTimeFeedback: "Limited",
      addingTimeManually1: "100",
      addingTimeManually2: "Limited",
    },
    buttonText: "Get Started",
  },
  {
    name: "ENTERPRISE",
    price: 29,
    period: "/mo",
    description: "Full access to all features with priority support",
    features: {
      team: "Unlimited",
      installedAgent: "Unlimited",
      realTimeFeedback: "Unlimited",
      addingTimeManually1: "Unlimited",
      addingTimeManually2: "Unlimited",
    },
    buttonText: "Contact Sales",
  },
]

export default function PricingTable() {
  const [selectedPlan, setSelectedPlan] = useState(1) // Default to ADVANCE (index 1)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-6">Confidence in Your Security</h1>

          {/* 3D Icon */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl transform rotate-12 shadow-2xl">
                <div className="absolute inset-3 md:inset-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl transform -rotate-6"></div>
                <div className="absolute inset-4 md:inset-6 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg transform rotate-3"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 md:w-8 md:h-8 bg-yellow-400 rounded-full shadow-lg"></div>
              </div>
            </div>
          </div>

          <div className="text-white/80 text-sm mb-2">
            You pay <span className="text-yellow-400 font-semibold">$59.00</span>/mo today Renews
          </div>
          <div className="text-white/80 text-sm">
            April 2024 For <span className="text-yellow-400 font-semibold">$59.00</span>/mo
          </div>
        </div>

        {/* Desktop View - Grid */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 transition-all duration-300 hover:bg-white/15 hover:scale-105 ${
                plan.isPopular ? "ring-2 ring-yellow-400 shadow-2xl" : ""
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-yellow-400 text-black px-4 py-1 rounded-full text-xs font-semibold">
                    MOST POPULAR
                  </div>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-white font-semibold text-sm mb-2">{plan.name}</h3>
                <p className="text-white/70 text-xs mb-4 leading-relaxed">{plan.description}</p>

                <div className="mb-4">
                  <span className="text-white text-4xl font-bold">${plan.price}</span>
                  <span className="text-white/70 text-sm">{plan.period}</span>
                </div>

                <div className="text-white/60 text-xs mb-6">Billed monthly</div>

                <button
                  className={`w-full ${
                    plan.isPopular
                      ? "bg-yellow-400 hover:bg-yellow-500 text-black"
                      : "bg-white/20 hover:bg-white/30 text-white border border-white/30"
                  } transition-all duration-300`}
                >
                  {plan.buttonText}
                </button>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <div className="flex items-center space-x-2">
                    <span className="text-white/80 text-sm">Team</span>
                    <Info className="w-3 h-3 text-white/50" />
                  </div>
                  <span className="text-white text-sm font-medium">{plan.features.team}</span>
                </div>

                <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <div className="flex items-center space-x-2">
                    <span className="text-white/80 text-sm">Installed Agent</span>
                    <Info className="w-3 h-3 text-white/50" />
                  </div>
                  <span className="text-white text-sm font-medium">{plan.features.installedAgent}</span>
                </div>

                <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <div className="flex items-center space-x-2">
                    <span className="text-white/80 text-sm">Real-Time Feedback</span>
                    <Info className="w-3 h-3 text-white/50" />
                  </div>
                  <span className="text-white text-sm font-medium">{plan.features.realTimeFeedback}</span>
                </div>

                <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <div className="flex items-center space-x-2">
                    <span className="text-white/80 text-sm">Adding Time Manually</span>
                    <Info className="w-3 h-3 text-white/50" />
                  </div>
                  <span className="text-white text-sm font-medium">{plan.features.addingTimeManually1}</span>
                </div>

                <div className="flex justify-between items-center py-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-white/80 text-sm">Adding Time Manually</span>
                    <Info className="w-3 h-3 text-white/50" />
                  </div>
                  <span className="text-white text-sm font-medium">{plan.features.addingTimeManually2}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile/Tablet View - Tabs */}
        <div className="lg:hidden">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {plans.map((plan, index) => (
              <button
                key={plan.name}
                onClick={() => setSelectedPlan(index)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedPlan === index
                    ? "bg-yellow-400 text-black shadow-lg"
                    : "bg-white/20 text-white hover:bg-white/30"
                }`}
              >
                {plan.name}
              </button>
            ))}
          </div>

          {/* Selected Plan Card */}
          <div className="max-w-md mx-auto">
            <div
              className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 ${
                plans[selectedPlan].isPopular ? "ring-2 ring-yellow-400 shadow-2xl" : ""
              }`}
            >
              {plans[selectedPlan].isPopular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-yellow-400 text-black px-4 py-1 rounded-full text-xs font-semibold">
                    MOST POPULAR
                  </div>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-white font-semibold text-lg mb-2">{plans[selectedPlan].name}</h3>
                <p className="text-white/70 text-sm mb-4 leading-relaxed">{plans[selectedPlan].description}</p>

                <div className="mb-4">
                  <span className="text-white text-5xl font-bold">${plans[selectedPlan].price}</span>
                  <span className="text-white/70 text-lg">{plans[selectedPlan].period}</span>
                </div>

                <div className="text-white/60 text-sm mb-6">Billed monthly</div>

                <button
                  className={`w-full py-3 text-lg ${
                    plans[selectedPlan].isPopular
                      ? "bg-yellow-400 hover:bg-yellow-500 text-black"
                      : "bg-white/20 hover:bg-white/30 text-white border border-white/30"
                  } transition-all duration-300`}
                >
                  {plans[selectedPlan].buttonText}
                </button>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <div className="flex items-center space-x-2">
                    <span className="text-white/80 text-sm">Team</span>
                    <Info className="w-4 h-4 text-white/50" />
                  </div>
                  <span className="text-white text-sm font-medium">{plans[selectedPlan].features.team}</span>
                </div>

                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <div className="flex items-center space-x-2">
                    <span className="text-white/80 text-sm">Installed Agent</span>
                    <Info className="w-4 h-4 text-white/50" />
                  </div>
                  <span className="text-white text-sm font-medium">{plans[selectedPlan].features.installedAgent}</span>
                </div>

                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <div className="flex items-center space-x-2">
                    <span className="text-white/80 text-sm">Real-Time Feedback</span>
                    <Info className="w-4 h-4 text-white/50" />
                  </div>
                  <span className="text-white text-sm font-medium">
                    {plans[selectedPlan].features.realTimeFeedback}
                  </span>
                </div>

                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <div className="flex items-center space-x-2">
                    <span className="text-white/80 text-sm">Adding Time Manually</span>
                    <Info className="w-4 h-4 text-white/50" />
                  </div>
                  <span className="text-white text-sm font-medium">
                    {plans[selectedPlan].features.addingTimeManually1}
                  </span>
                </div>

                <div className="flex justify-between items-center py-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-white/80 text-sm">Adding Time Manually</span>
                    <Info className="w-4 h-4 text-white/50" />
                  </div>
                  <span className="text-white text-sm font-medium">
                    {plans[selectedPlan].features.addingTimeManually2}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
