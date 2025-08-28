"use client"
import { useState } from "react"
import { CheckCircle, Globe, Users, Award, Star, Sparkles,Building2,Handshake } from "lucide-react"
import { useGlobalContext } from "../../context/ScreenProvider"

export default function Timeline() {
  const [activeItem, setActiveItem] = useState(0)
  const { is4K } = useGlobalContext()
const timelineItems = [
  {
    year: "2019",
    title: "The Vision Born",
    description:
      "Fayaz Ahmad Khan founded De Koshur Crafts with the mission to preserve Kashmir’s living heritage and empower artisans struggling under economic pressures.",
    icon: <Sparkles className={`h-6 w-6 ${is4K ? "h-10 w-10" : ""}`} />,
  },
  {
    year: "2020",
    title: "Building Foundations",
    description:
      "Launched the first platform connecting 100 artisans directly with buyers. Early focus on authentic Pashmina shawls and Papier-Mâché works established credibility.",
    icon: <Users className={`h-6 w-6 ${is4K ? "h-10 w-10" : ""}`} />,
  },
  {
    year: "2021",
    title: "Global Expansion",
    description:
      "Reached 500+ artisans and partnered with 25+ international buyers, extending Kashmir’s craft presence across Europe and North America.",
    icon: <Globe className={`h-6 w-6 ${is4K ? "h-10 w-10" : ""}`} />,
  },
  {
    year: "2022",
    title: "Technology Integration",
    description:
      "Introduced blockchain to secure product authenticity and AI-powered dashboards to guide artisans in pricing, demand forecasting, and customer access.",
    icon: <Award className={`h-6 w-6 ${is4K ? "h-10 w-10" : ""}`} />,
  },
  {
    year: "2023",
    title: "Recognition & Partnerships",
    description:
      "Forged alliances with museums, NGOs, and trade councils. Kashmir’s crafts gained recognition as part of global sustainability and fair-trade movements.",
    icon: <Handshake className={`h-6 w-6 ${is4K ? "h-10 w-10" : ""}`} />,
  },
  {
    year: "2024",
    title: "Thriving Community",
    description:
      "Now supporting 2,000+ artisans with 100+ global buyers, channeling millions directly into artisan incomes while sustaining centuries-old techniques.",
    icon: <Star className={`h-6 w-6 ${is4K ? "h-10 w-10" : ""}`} />,
  },
  {
    year: "2025",
    title: "Scaling New Horizons",
    description:
      "Expanding into U.S. retail hubs with brick-and-mortar showcases, digital catalogs, and trade fairs — building a global stage for Kashmir’s next generation of artisans.",
    icon: <Building2 className={`h-6 w-6 ${is4K ? "h-10 w-10" : ""}`} />,
  },
];

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