"use client"

import { useState, useEffect } from "react"

interface FAQItem {
  id: number
  question: string
  answer: string
}

interface InDepthFAQProps {
  data: FAQItem[]
}

export default function InDepthFAQ({ data }: InDepthFAQProps) {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set())
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const toggleItem = (id: number) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(id)) newOpenItems.delete(id)
    else newOpenItems.add(id)
    setOpenItems(newOpenItems)
  }

  return (
    <section className="w-full bg-[var(--primary-header-color)] py-16 px-4 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* background animations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gray-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gray-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gray-100/40 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="mx-auto max-w-6xl relative z-10">
        {/* heading */}
        <div
          className={`text-center mb-12 lg:mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl font-bold text-[var(--primary-color)] sm:text-4xl lg:text-5xl mb-4 ">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-[var(--primary-hover-color)] max-w-2xl mx-auto leading-relaxed">
            Find answers to common questions about our products, shipping,
            returns, and more. Can't find what you're looking for? Contact our support team.
          </p>
        </div>

        {/* two column */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          <div className="space-y-4">
            {data.slice(0, Math.ceil(data.length / 2)).map((item, index) => {
              const isOpen = openItems.has(item.id)
              return (
                <div
                  key={item.id}
                  className={`bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 group ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full px-6 py-5 text-left focus:outline-none focus:ring-2 focus:ring-[var(--secondary-color)] focus:ring-offset-2 rounded-2xl relative z-10 transition-all duration-300"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-base font-semibold text-gray-900 pr-3 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                        {item.question}
                      </h3>
                      <div className="flex-shrink-0">
                        <div
                          className={`w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 group-hover:bg-gray-200 transition-all duration-300 ${
                            isOpen ? "rotate-45 scale-110" : "rotate-0 scale-100"
                          } group-hover:scale-110`}
                        >
                          <svg
                            className="w-4 h-4 text-[var(--primary-color)]"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2.5}
                              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-out ${
                      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-6 pb-5">
                      <div className="pt-2 border-t border-gray-200">
                        <p
                          className={`text-[var(--primary-hover-color)] leading-relaxed mt-4 text-sm transition-all duration-500 ${
                            isOpen ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
                          }`}
                        >
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="space-y-4">
            {data.slice(Math.ceil(data.length / 2)).map((item, index) => {
              const isOpen = openItems.has(item.id)
              return (
                <div
                  key={item.id}
                  className={`bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 group ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${(index + 8) * 100}ms` }}
                >
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full px-6 py-5 text-left focus:outline-none focus:ring-2 focus:ring-[var(--secondary-color)] rounded-2xl relative z-10 transition-all duration-300"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-base font-semibold text-gray-900 pr-3 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                        {item.question}
                      </h3>
                      <div className="flex-shrink-0">
                        <div
                          className={`w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 group-hover:bg-gray-200 transition-all duration-300 ${
                            isOpen ? "rotate-45 scale-110" : "rotate-0 scale-100"
                          } group-hover:scale-110`}
                        >
                          <svg
                            className="w-4 h-4 text-gray-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2.5}
                              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-out ${
                      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-6 pb-5">
                      <div className="pt-2 border-t border-gray-200">
                        <p
                          className={`text-[var(--primary-color)] leading-relaxed mt-4 text-sm transition-all duration-500 ${
                            isOpen ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
                          }`}
                        >
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
