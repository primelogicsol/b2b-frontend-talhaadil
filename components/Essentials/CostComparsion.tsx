"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useGlobalContext } from "../../context/ScreenProvider"

interface Platform {
  name: string
  value: string
  isOurPlatform: boolean
}

interface CostComparisonItem {
  feature: string
  platforms: Record<string, Platform>
}

interface CostComparisonResponsiveProps {
  costComparison: CostComparisonItem[]
}

export default function CostComparisonResponsive({ costComparison }: CostComparisonResponsiveProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const cardsPerSlide = 3
  const totalSlides = Math.ceil(costComparison.length / cardsPerSlide)
  const { is4K } = useGlobalContext()

  // Extract platform names dynamically from the first item
  const platformKeys = costComparison.length > 0 ? Object.keys(costComparison[0].platforms) : []
  const platforms = costComparison.length > 0 ? Object.values(costComparison[0].platforms) : []

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const getCurrentCards = () => {
    const startIndex = currentSlide * cardsPerSlide
    return costComparison.slice(startIndex, startIndex + cardsPerSlide)
  }

  // Helper function to format platform names for display
  const formatPlatformName = (name: string) => {
    if (name === "deKoshurCrafts") return "De Koshur Crafts"
    if (name === "eprolo") return "EPROLO"
    if (name === "modalyst") return "Modalyst"
    if (name === "spocket") return "Spocket"
    if (name === "cjdropshipping") return "CJDropshipping"
    return name.charAt(0).toUpperCase() + name.slice(1)
  }

  return (
    <div
      className="max-w-6xl mx-auto"
      style={{
        maxWidth: is4K ? "2000px" : "1152px",
        paddingLeft: is4K ? "7rem" : "1rem",
        paddingRight: is4K ? "7rem" : "1rem",
        fontSize: is4K ? "1.125rem" : "1rem", // Apply font size increase
      }}
    >
      {/* Large Screen - Table View (xl and above) */}
      <div className="bg-[var(--white)] rounded-lg shadow-lg overflow-hidden hidden lg:block">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px]">
            <thead>
              <tr className="bg-[var(--secondary-color)] text-[var(--white)]">
                <th className="px-6 py-4 text-left font-semibol bg-[#3a929e]">Feature</th>
                {platforms.map((platform, index) => (
                  <th
                    key={platform.name}
                    className={`px-6 py-2 text-center font-semibold ${
                      platform.isOurPlatform ? "bg-[var(--primary-color)]" : ""
                    }`}
                  >
                    {formatPlatformName(platform.name)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {costComparison.map((row, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-[var(--white)]" : "bg-[var(--background)]"
                  } hover:bg-[var(--primary-color)] transition-colors duration-200`}
                >
                  <td className="px-6 py-2 font-medium transition-colors duration-200 bg-[#3a929e] text-white border">
                    {row.feature}
                  </td>
                  {platformKeys.map((platformKey) => {
                    const platform = row.platforms[platformKey]
                    return (
                      <td
                        key={platformKey}
                        className={`px-6 py-2 text-center text-sm transition-colors duration-200 border border-white ${
                          platform.isOurPlatform ? "font-bold bg-[var(--primary-color)] text-white" : "bg-gray-300"
                        }`}
                      >
                        {platform.value}
                      </td>
                    )
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Medium Screen - Cards Grid View (md to lg) */}
      <div className="hidden md:block xl:hidden">
        <div className="grid grid-cols-2 gap-6">
          {costComparison.map((row, index) => (
            <div
              key={index}
              className="bg-[var(--white)] rounded-lg shadow-lg p-6 border border-[var(--primary-color)]"
            >
              <h3 className="font-bold text-xl text-[var(--primary-color)] mb-4 text-center">{row.feature}</h3>
              <div className="space-y-3">
                {platformKeys.map((platformKey) => {
                  const platform = row.platforms[platformKey]
                  return (
                    <div
                      key={platformKey}
                      className={`flex justify-between items-center p-3 rounded-md ${
                        platform.isOurPlatform ? "bg-[var(--primary-header-color)]" : "border-b border-gray-200 p-2"
                      }`}
                    >
                      <span
                        className={`text-sm ${
                          platform.isOurPlatform
                            ? "font-medium text-[var(--primary-color)]"
                            : "text-[var(--foreground)]"
                        }`}
                      >
                        {formatPlatformName(platform.name)}:
                      </span>
                      <span
                        className={`text-sm ${
                          platform.isOurPlatform ? "font-bold text-[var(--primary-color)]" : "text-[var(--foreground)]"
                        }`}
                      >
                        {platform.value}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Small Screen - Slider View (below md) */}
      <div className="md:hidden px-6">
        <div className="relative">
          {/* Cards Container */}
          <div className="space-y-4 mb-6">
            {getCurrentCards().map((row, index) => {
              const actualIndex = currentSlide * cardsPerSlide + index
              return (
                <div
                  key={actualIndex}
                  className="bg-[var(--white)] rounded-lg shadow-lg p-4 border border-[var(--primary-color)]"
                >
                  <h3 className="font-bold text-lg text-[var(--primary-color)] mb-3 text-center">{row.feature}</h3>
                  <div className="space-y-2">
                    {platformKeys.map((platformKey) => {
                      const platform = row.platforms[platformKey]
                      return (
                        <div
                          key={platformKey}
                          className={`flex justify-between items-center p-2 ${
                            platform.isOurPlatform ? "bg-[var(--primary-header-color)] rounded-md" : ""
                          }`}
                        >
                          <span
                            className={`text-sm ${
                              platform.isOurPlatform
                                ? "font-medium text-[var(--primary-color)]"
                                : "text-[var(--foreground)]"
                            }`}
                          >
                            {formatPlatformName(platform.name)}:
                          </span>
                          <span
                            className={`text-sm ${
                              platform.isOurPlatform
                                ? "font-bold text-[var(--primary-color)]"
                                : "text-[var(--foreground)]"
                            }`}
                          >
                            {platform.value}
                          </span>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="flex items-center gap-2 px-1 py-2 text-sm font-medium text-[var(--primary-color)] bg-[var(--white)] border border-[var(--primary-color)] rounded-md hover:bg-[var(--primary-hover-color)] hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[var(--white)] disabled:hover:text-[var(--primary-color)]"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Slide Indicators */}
            <div className="flex space-x-1">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? "bg-[var(--secondary-color)]" : "bg-gray-300"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              disabled={currentSlide === totalSlides - 1}
              className="flex items-center gap-2 px-2 py-2 text-sm font-medium text-[var(--primary-color)] bg-[var(--white)] border border-[var(--primary-color)] rounded-md hover:bg-[var(--primary-hover-color)] hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[var(--white)] disabled:hover:text-[var(--primary-color)]"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Slide Counter */}
          <div className="text-center mt-4 text-sm text-[var(--primary-color)]">
            {currentSlide + 1} of {totalSlides}
          </div>
        </div>
      </div>
    </div>
  )
}
