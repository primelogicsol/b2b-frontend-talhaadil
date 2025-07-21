"use client"

import { useState } from "react"

interface Partnership {
  id: string
  title: string
  description: string
  retention: string
  kpiScore: string
  available: boolean
  isAltPath?: boolean
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
    isAltPath: false,
  },
  {
    id: "consignment",
    title: "DKC Consignment",
    description:
      "You are currently ineligible for free access to Consignment Partnership due to the 18-month retention and KPI score of 7+ at the Drop Shipping Partnership level.",
    retention: "18 months",
    kpiScore: "7+",
    available: false,
    isAltPath: true,
  },
  {
    id: "exhibition",
    title: "DKC Exhibition",
    description:
      "Currently, you don't meet free access to this Partnership due to the 6-month retention and 7+ KPI score requirement at Consignment Partnership.",
    retention: "6 months",
    kpiScore: "7+",
    available: false,
    isAltPath: true,
  },
  {
    id: "import-export",
    title: "DKC Import Export",
    description:
      "Currently, you don't meet free access to this Partnership due to the 6-month retention and 7+ KPI score requirement at Exhibition Partnership.",
    retention: "6 months",
    kpiScore: "7+",
    available: false,
    isAltPath: true,
  },
  {
    id: "investor",
    title: "DKC Investor",
    description:
      "At the moment, you don't qualify for free access to this Partnership due to the 36-month retention and 7+ KPI score requirement across all previous Partnerships.",
    retention: "36 months",
    kpiScore: "7+",
    available: false,
    isAltPath: false,
  },
  {
    id: "brick-mortar",
    title: "DKC Brick & Mortar",
    description:
      "Setting up your company as a DKC Subsidiary is mandatory to qualify this Partnership. As of now, you don't qualify the 12-month retention, 7+ KPI score.",
    retention: "12 months",
    kpiScore: "7+",
    available: false,
    isAltPath: false,
  },
  {
    id: "franchise",
    title: "DKC Franchise",
    description:
      "This paid partnership opens once you stay in the Brick and Mortar Partnership for 24 months, maintaining an 8+ KPI score.",
    retention: "24 months",
    kpiScore: "8+",
    available: false,
    isAltPath: false,
  },
]

export default function ChoosePartnership({ data, onUpdate, onNext, onPrev }: ChoosePartnershipProps) {
  const [selectedPartnership, setSelectedPartnership] = useState(data?.selected || "")

  const handleSelect = (p: Partnership) => {
    if (p.available) {
      setSelectedPartnership(p.id)
      onUpdate({ selected: p.id, title: p.title })
    }
  }

  const handleNext = () => {
    if (selectedPartnership) onNext()
  }

  const handleGoToPay = (p: Partnership) => {
    alert(`Redirecting to payment for ${p.title}…`)
  }

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-[var(--primary-color)] rounded-full mb-6">
          <span className="text-2xl text-white">🤝</span>
        </div>
        <h1 className="text-4xl font-bold text-[var(--primary-color)] mb-4">Choose Your Partnership</h1>
        <p className="text-xl text-[var(--primary-color)]/70 max-w-2xl mx-auto">
          Select the partnership that best aligns with your business goals and growth strategy
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
        {partnerships.map((p) => (
          <div
            key={p.id}
            onClick={() => handleSelect(p)}
            className={`group relative rounded-3xl shadow-xl p-8 transition-all duration-300 transform
           
              ${p.available ? "cursor-pointer hover:-translate-y-2" : "opacity-60 grayscale"}
              ${selectedPartnership === p.id ? "ring-4 ring-[var(--secondary-color)] scale-105" : ""}
            `}
          >
            {p.isAltPath && (
              <div className="absolute top-0 left-0 bg-[var(--secondary-color)] text-white text-xs font-semibold px-3 py-1 rounded-br-2xl rounded-tl-2xl">
                Lateral
              </div>
            )}

            <div className="absolute -top-3 -right-3">
              {selectedPartnership === p.id ? (
                <div className="w-10 h-10 bg-[var(--secondary-color)] rounded-full flex items-center justify-center">
                  <span className="text-white text-lg">✓</span>
                </div>
              ) : p.available ? (
                <div className="w-8 h-8 bg-[var(--primary-color)] rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
              ) : (
                <div className="w-8 h-8 bg-[var(--primary-hover-color)] rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">🔒</span>
                </div>
              )}
            </div>

            <div className="flex justify-start mb-6">
              <span
                className={`px-4 py-2 text-sm font-semibold rounded-full ${
                  p.available
                    ? "bg-[var(--secondary-light-color)] text-[var(--primary-color)] border border-[var(--secondary-color)]"
                    : "bg-[var(--primary-hover-color)]/20 text-[var(--primary-color)] border border-[var(--primary-hover-color)]/40"
                }`}
              >
                {p.available ? "Available Now" : "Requirements Not Met"}
              </span>
            </div>

            <h3 className="text-xl font-bold text-[var(--primary-color)] mb-4">{p.title}</h3>

            <div className="flex justify-between mb-6 p-4 bg-[var(--primary-hover-color)]/5 rounded-xl">
              <div className="text-center">
                <p className="text-xs text-[var(--primary-color)]/70 mb-1">Retention</p>
                <p className="text-sm font-semibold text-[var(--primary-color)]">{p.retention}</p>
              </div>
              <div className="w-px bg-[var(--primary-color)]/20"></div>
              <div className="text-center">
                <p className="text-xs text-[var(--primary-color)]/70 mb-1">KPI Score</p>
                <p className="text-sm font-semibold text-[var(--primary-color)]">{p.kpiScore}</p>
              </div>
            </div>

            <p className="text-sm text-[var(--primary-color)]/80 leading-relaxed mb-6 line-clamp-4">
              {p.description}
            </p>

            {!p.available && (
              <div className="mt-auto space-y-2">
                <button className="w-full text-[var(--secondary-color)] text-sm font-semibold py-2 px-4 border border-[var(--secondary-color)] rounded-xl hover:bg-[var(--secondary-light-color)] transition-colors">
                  Learn About Fast-Track Options →
                </button>
                {p.isAltPath && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      handleGoToPay(p)
                    }}
                    className="w-full text-[var(--primary-color)] text-sm font-semibold py-2 px-4 border border-[var(--primary-color)] rounded-xl hover:bg-[var(--primary-hover-color)] hover:text-white transition-colors"
                  >
                    Go to Pay
                  </button>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {selectedPartnership && (
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-8 border-l-4 border-[var(--secondary-color)]">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-[var(--secondary-color)] rounded-full flex items-center justify-center">
              <span className="text-white text-xl">✓</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[var(--primary-color)]">Partnership Selected</h3>
              <p className="text-[var(--primary-color)]/80">
                {partnerships.find((p) => p.id === selectedPartnership)?.title}
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="flex justify-between items-center">
        <button
          onClick={onPrev}
          className="px-8 py-4 border-2 border-[var(--primary-color)] text-[var(--primary-color)] rounded-xl hover:bg-[var(--primary-hover-color)] hover:text-white transition-all font-medium"
        >
          ← Previous
        </button>
        <button
          onClick={handleNext}
          disabled={!selectedPartnership}
          className="px-8 py-4 bg-[var(--primary-color)] hover:bg-[var(--primary-hover-color)] text-white rounded-xl transition-all font-medium shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none"
        >
          Continue →
        </button>
      </div>
    </div>
  )
}
