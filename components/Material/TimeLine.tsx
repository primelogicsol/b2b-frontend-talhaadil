"use client"

import { useState } from "react"
import { CheckCircle } from "lucide-react"

export function Timeline() {
  const [activeItem, setActiveItem] = useState(0)

  const timelineItems = [
    {
      year: "2020",
      title: "Taxim Launched",
      description:
        "Started as a specialized outsourcing provider, offering dispatch and administrative support to British taxi companies.",
    },
    {
      year: "2021",
      title: "Service Expansion",
      description:
        "Introduced accounting, email management, and project oversight to help taxi businesses operate more efficiently.",
    },
    {
      year: "2022",
      title: "Technology Integration",
      description:
        "Adopted advanced dispatch systems like CAB9, Autocab, and CRM tools to streamline taxi operations.",
    },
    {
      year: "2023",
      title: "Growth & Digital Solutions",
      description:
        "Expanded digital marketing services, including social media management, web development, and branding strategies.",
    },
    {
      year: "2024",
      title: "Scaling Nationwide",
      description:
        "Strengthened our nationwide presence, helping taxi companies across the UK enhance efficiency and profitability.",
    },
  ]

  return (
    <div className="relative py-12 px-4 sm:px-6 lg:px-8 bg-white">
      {/* center line */}
      <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-[var(--primary-light-text-color)]"></div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {timelineItems.map((item, index) => (
          <div
            key={index}
            className={`relative flex items-center mb-12 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
            onMouseEnter={() => setActiveItem(index)}
          >
            {/* Text container */}
            <div className={`${index % 2 === 0 ? "w-1/2 pr-12 text-right" : "w-1/2 pl-12"}`}>
              <div
                className={`transition-all duration-300 ${
                  activeItem === index ? "scale-105" : ""
                }`}
              >
                <div
                  className="font-bold text-xl mb-2"
                  style={{ color: "var(--secondary-color)" }}
                >
                  {item.year}
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: "var(--primary-color)" }}>
                  {item.title}
                </h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            </div>

            {/* Circle */}
            <div
              className={`absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                activeItem === index
                  ? "scale-110"
                  : ""
              }`}
              style={{
                backgroundColor: activeItem === index ? "var(--primary-color)" : "white",
                border: activeItem === index ? "none" : "1px solid var(--primary-light-text-color)",
                boxShadow: activeItem === index ? "0 0 12px var(--secondary-color)" : "none",
              }}
            >
              {activeItem === index ? (
                <CheckCircle className="h-5 w-5" style={{ color: "white" }} />
              ) : (
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: "var(--secondary-color)" }}
                ></div>
              )}
            </div>

            {/* empty space on other side */}
            <div className="w-1/2"></div>
          </div>
        ))}
      </div>
    </div>
  )
}