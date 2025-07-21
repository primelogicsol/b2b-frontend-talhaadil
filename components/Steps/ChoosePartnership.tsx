"use client"

import { useState } from "react"

interface Partnership {
  id: string
  title: string
  description: string
  retention: string
  kpiScore: string
  available: boolean
}

interface ChoosePartnershipProps {
  data?: {
    selected: string
    title: string
  }
  onUpdate: (data: { selected: string; title: string }) => void
  onNext: () => void
  onPrev: () => void
}

const partnerships: Partnership[] = [
  {
    id: "drop-shipping",
    title: "DKC Drop Shipping",
    description:
      "You are now officially registered for the DKC Drop Shipping Partnership. This partnership opens the door for you to expand your online presence and showcase your products to USA markets.",
    retention: "No requirement",
    kpiScore: "No requirement",
    available: true,
  },
  {
    id: "consignment",
    title: "DKC Consignment",
    description:
      "You are currently ineligible for free access to Consignment Partnership due to the 18-month retention and KPI score of 7+ at the Drop Shipping Partnership level.",
    retention: "18 months",
    kpiScore: "7+",
    available: false,
  },
  {
    id: "exhibition",
    title: "DKC Exhibition",
    description:
      "Currently, you don't meet free access to this Partnership due to the 6-month retention and 7+ KPI score requirement at Consignment Partnership.",
    retention: "6 months",
    kpiScore: "7+",
    available: false,
  },
  {
    id: "import-export",
    title: "DKC Import Export",
    description:
      "Currently, you don't meet free access to this Partnership due to the 6-month retention and 7+ KPI score requirement at Exhibition Partnership.",
    retention: "6 months",
    kpiScore: "7+",
    available: false,
  },
  {
    id: "investor",
    title: "DKC Investor",
    description:
      "At the moment, you don't qualify for free access to this Partnership due to the 36-month retention and 7+ KPI score requirement across all previous Partnerships.",
    retention: "36 months",
    kpiScore: "7+",
    available: false,
  },
  {
    id: "brick-mortar",
    title: "DKC Brick & Mortar",
    description:
      "Setting up your company as a DKC Subsidiary is mandatory to qualify this Partnership. As of now, you don't qualify the 12-month retention, 7+ KPI score.",
    retention: "12 months",
    kpiScore: "7+",
    available: false,
  },
  {
    id: "franchise",
    title: "DKC Franchise",
    description:
      "This paid partnership opens once you stay in the Brick and Mortar Partnership for 24 months, maintaining an 8+ KPI score.",
    retention: "24 months",
    kpiScore: "8+",
    available: false,
  },
]

export default function ChoosePartnership({ data, onUpdate, onNext, onPrev }: ChoosePartnershipProps) {
  const [selectedPartnership, setSelectedPartnership] = useState(data?.selected || "")

  const handleSelect = (partnership: Partnership) => {
    if (partnership.available) {
      setSelectedPartnership(partnership.id)
      onUpdate({ selected: partnership.id, title: partnership.title })
    }
  }

  const handleNext = () => {
    if (selectedPartnership) {
      onNext()
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-[var(--primary-color)] rounded-full mb-6">
          <span className="text-2xl text-white">🤝</span>
        </div>
        <h1 className="text-4xl font-bold text-[var(--primary-color)] mb-4">Choose Your Partnership</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Select the partnership that best aligns with your business goals and growth strategy
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
        {partnerships.map((partnership) => (
          <div
            key={partnership.id}
            onClick={() => handleSelect(partnership)}
            className={`group relative bg-white rounded-3xl shadow-xl p-8 cursor-pointer transition-all duration-300 transform hover:-translate-y-2 ${
              selectedPartnership === partnership.id
                ? "ring-4 ring-[var(--secondary-color)] bg-gradient-to-br from-[var(--secondary-light-color)] to-white scale-105"
                : partnership.available
                  ? "hover:shadow-2xl hover:ring-2 hover:ring-[var(--primary-color)]/20"
                  : "opacity-60 cursor-not-allowed grayscale"
            }`}
          >
            {/* Status Badge */}
            <div className="absolute -top-3 -right-3">
              {selectedPartnership === partnership.id ? (
                <div className="w-10 h-10 bg-[var(--secondary-color)] rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white text-lg">✓</span>
                </div>
              ) : partnership.available ? (
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white text-sm">✓</span>
                </div>
              ) : (
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white text-sm">🔒</span>
                </div>
              )}
            </div>

            {/* Availability Badge */}
            <div className="flex justify-start mb-6">
              <span
                className={`px-4 py-2 text-sm font-semibold rounded-full ${
                  partnership.available
                    ? "bg-green-100 text-green-800 border border-green-200"
                    : "bg-red-100 text-red-800 border border-red-200"
                }`}
              >
                {partnership.available ? "Available Now" : "Requirements Not Met"}
              </span>
            </div>

            <h3 className="text-xl font-bold text-[var(--primary-color)] mb-4 group-hover:text-[var(--primary-hover-color)] transition-colors">
              {partnership.title}
            </h3>

            {/* Requirements */}
            <div className="flex justify-between mb-6 p-4 bg-gray-50 rounded-xl">
              <div className="text-center">
                <p className="text-xs text-gray-500 mb-1">Retention</p>
                <p className="text-sm font-semibold text-gray-800">{partnership.retention}</p>
              </div>
              <div className="w-px bg-gray-300"></div>
              <div className="text-center">
                <p className="text-xs text-gray-500 mb-1">KPI Score</p>
                <p className="text-sm font-semibold text-gray-800">{partnership.kpiScore}</p>
              </div>
            </div>

            <p className="text-sm text-gray-700 leading-relaxed mb-6 line-clamp-4">{partnership.description}</p>

            {!partnership.available && (
              <div className="mt-auto">
                <button className="w-full text-[var(--secondary-color)] text-sm font-semibold hover:text-[var(--secondary-color)]/80 transition-colors py-2 px-4 border border-[var(--secondary-color)] rounded-xl hover:bg-[var(--secondary-color)]/5">
                  Learn About Fast-Track Options →
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Selected Partnership Summary */}
      {selectedPartnership && (
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-8 border-l-4 border-[var(--secondary-color)]">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-[var(--secondary-color)] rounded-full flex items-center justify-center">
              <span className="text-white text-xl">✓</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[var(--primary-color)]">Partnership Selected</h3>
              <p className="text-gray-600">{partnerships.find((p) => p.id === selectedPartnership)?.title}</p>
            </div>
          </div>
        </div>
      )}

      <div className="flex justify-between items-center">
        <button
          onClick={onPrev}
          className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-all font-medium"
        >
          ← Previous
        </button>
        <button
          onClick={handleNext}
          disabled={!selectedPartnership}
          className="px-8 py-4 bg-[var(--primary-color)] hover:bg-[var(--primary-hover-color)] text-white rounded-xl transition-all font-medium shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none"
        >
          Continue to Business Info →
        </button>
      </div>
    </div>
  )
}
