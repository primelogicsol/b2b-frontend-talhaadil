"use client"
import { useState } from "react"
import { CheckCircle, Globe, Users, Award, Star, Sparkles } from "lucide-react"
import { useGlobalContext } from "../Context/GlobalProvider"

export default function Timeline() {
  const [activeItem, setActiveItem] = useState(0)
  const { is4K } = useGlobalContext()

  const timelineItems = [
    {
      year: "2019",
      title: "The Vision Born",
      description:
        "Fayaz Ahmad Khan founded De Koshur Crafts with a mission to preserve Kashmir's rich heritage and empower local artisans facing economic challenges.",
      icon: <Sparkles className={`h-6 w-6 ${is4K ? "h-10 w-10" : ""}`} />,
    },
    {
      year: "2020",
      title: "Building Foundations",
      description:
        "Established our platform connecting the first 100 artisans with global markets, focusing on authentic Pashmina shawls and Papier Mâché artifacts.",
      icon: <Users className={`h-6 w-6 ${is4K ? "h-10 w-10" : ""}`} />,
    },
    {
      year: "2021",
      title: "Global Expansion",
      description:
        "Reached 500+ artisans and secured partnerships with 25+ international buyers, expanding our reach across Europe and North America.",
      icon: <Globe className={`h-6 w-6 ${is4K ? "h-10 w-10" : ""}`} />,
    },
    {
      year: "2022",
      title: "Technology Integration",
      description:
        "Introduced blockchain technology for product authenticity and AI-powered tools to help artisans optimize their businesses and reach.",
      icon: <Award className={`h-6 w-6 ${is4K ? "h-10 w-10" : ""}`} />,
    },
    {
      year: "2024",
      title: "Thriving Community",
      description:
        "Now supporting 2000+ artisans with 100+ global buyers, having paid millions directly to craftspeople while preserving centuries-old techniques.",
      icon: <Star className={`h-6 w-6 ${is4K ? "h-10 w-10" : ""}`} />,
    },
    {
      year: "2025",
      title: "Thriving Community",
      description:
        "Now supporting 2000+ artisans with 100+ global buyers, having paid millions directly to craftspeople while preserving centuries-old techniques.",
      icon: <Star className={`h-6 w-6 ${is4K ? "h-10 w-10" : ""}`} />,
    },
  ]

  return (
    <div
      className={`relative py-12 px-4 sm:px-6 lg:px-8 ${
        is4K ? "py-32 px-24" : ""
      } bg-white`}
    >
      {/* center line */}
      <div
        className={`absolute left-1/2 -translate-x-1/2 h-full w-1 ${
          is4K ? "w-2" : ""
        } bg-[var(--primary-light-text-color)]`}
      ></div>

      <div
        className={`relative z-10 max-w-4xl mx-auto ${
          is4K ? "max-w-screen-xl px-20" : ""
        }`}
      >
        {timelineItems.map((item, index) => (
          <div
            key={index}
            className={`relative flex items-center mb-12 ${
              is4K ? "mb-24" : ""
            } ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
            onMouseEnter={() => setActiveItem(index)}
          >
            {/* Text container */}
            <div
              className={`${
                index % 2 === 0
                  ? `w-1/2 pr-6 ${is4K ? "pr-24 text-right" : ""}`
                  : `w-1/2 pl-6 ${is4K ? "pl-24" : ""}`
              }`}
            >
              <div
                className={`transition-all duration-300 ${
                  activeItem === index ? "scale-105" : ""
                }`}
              >
                <div
                  className={`font-bold text-xl ${
                    is4K ? "text-5xl mb-6" : "mb-2"
                  }`}
                  style={{ color: "var(--secondary-color)" }}
                >
                  {item.year}
                </div>
                <h3
                  className={`text-xl font-bold ${
                    is4K ? "text-4xl lg:text-5xl mb-4" : "mb-2"
                  }`}
                  style={{ color: "var(--primary-color)" }}
                >
                  {item.title}
                </h3>
                <p
                  className={`text-gray-700 text-base ${
                    is4K ? "text-2xl lg:text-3xl leading-relaxed" : ""
                  }`}
                >
                  {item.description}
                </p>
              </div>
            </div>

            {/* Circle */}
            <div
              className={`absolute left-1/2 -translate-x-1/2 w-10 h-10 ${
                is4K ? "w-16 h-16" : ""
              } rounded-full flex items-center justify-center transition-all duration-300 ${
                activeItem === index ? "scale-110" : ""
              }`}
              style={{
                backgroundColor:
                  activeItem === index
                    ? "var(--primary-color)"
                    : "white",
                border:
                  activeItem === index
                    ? "none"
                    : "1px solid var(--primary-light-text-color)",
                boxShadow:
                  activeItem === index
                    ? "0 0 12px var(--secondary-color)"
                    : "none",
              }}
            >
              {activeItem === index ? (
                <CheckCircle
                  className={`h-5 w-5 ${is4K ? "h-10 w-10" : ""}`}
                  style={{ color: "white" }}
                />
              ) : (
                <div
                  className={`w-3 h-3 ${is4K ? "w-5 h-5" : ""} rounded-full`}
                  style={{
                    backgroundColor: "var(--secondary-color)",
                  }}
                ></div>
              )}
            </div>

            {/* Empty side */}
            <div className="w-1/2"></div>
          </div>
        ))}
      </div>
    </div>
  )
}