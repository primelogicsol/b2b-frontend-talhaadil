"use client"

import type React from "react"
import { useGlobalContext } from "@/context/ScreenProvider"

interface FeatureItem {
  title: string
  desc: string
}

interface SectionContent {
  imageSrc?: string
  sidebarText?: string
  header?: string
  mainHeading?: React.ReactNode
  description?: string
  features?: FeatureItem[]
  bottomHeading?: string
  bottomText?: string
}

interface SinglePicSectionProps {
  content?: SectionContent
}

export default function SinglePicSection({ content }: SinglePicSectionProps) {
  const { is4K } = useGlobalContext()

  const defaults: SectionContent = {
    imageSrc: "/your-image.jpg",
    sidebarText: "Your Link to Kashmir Craft Markets",
    header: "WELCOME TO B2B CONNECT - USA",
    mainHeading: (
      <>
        Empowering USA-Based Buyers in <br className="hidden md:block" />
        Accessing Kashmiri Craft{" "}
        <span style={{ color: "var(--secondary-color)" }}>Markets</span>
      </>
    ),
    description:
      "A Transformative Platform Connecting USA Buyers with Kashmiri Artisans and Authentic Products...",
    features: [
      {
        title: "Dream It:",
        desc: "Envision your store or product lineup. We'll provide the roadmap..."
      },
      {
        title: "Define It:",
        desc: "Browse our curated collections and select from a wide range..."
      },
      {
        title: "Dominate It:",
        desc: "Stand out in the marketplace by offering authentic Kashmiri products..."
      }
    ],
    bottomHeading: "Handicraft Progressive Business Model for Every Vision",
    bottomText:
      "Crafting US Next Generations with 700+ Old Legacy of Kashmir Handicraft Together"
  }

  const data = { ...defaults, ...content }

  return (
    <section
      className="w-full bg-white"
      style={
        {
          "--primary-hover-color": "#2a5f7a",
          "--primary-color": "#1b4f68",
          "--primary-light-text-color": "#346880",
          "--primary-header-color": "#e4e6eb",
          "--secondary-hover-color": "#f48261",
          "--secondary-color": "#d85834",
          "--secondary-light-color": "#f9c6b2"
        } as React.CSSProperties
      }
    >
      <div className={`max-w-[1600px] mx-auto ${is4K ? "px-20 py-32" : "px-6 md:px-8 py-16"}`}>
        <div className={`grid grid-cols-1 lg:grid-cols-2 items-center ${is4K ? "gap-16" : "gap-12"}`}>
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={data.imageSrc}
                alt="Team collaboration - hands coming together"
                className={`w-full object-cover ${is4K ? "h-[1200px]" : "h-[500px] md:h-[700px]"}`}
              />
              <div
                className={`absolute left-0 top-0 ${is4K ? "w-24" : "w-16 md:w-20"} h-full flex items-center justify-center`}
                style={{ backgroundColor: "var(--secondary-color)" }}
              >
                <div className="transform -rotate-90 whitespace-nowrap">
                  <span className={`${is4K ? "text-2xl tracking-wider" : "text-lg md:text-xl tracking-wide"} text-white font-medium`}>
                    {data.sidebarText}
                  </span>
                </div>
              </div>
              <div className={`absolute ${is4K ? "bottom-12 left-12" : "bottom-6 left-6 md:bottom-8 md:left-8"}`}>
                <div
                  className={`rounded-full flex items-center justify-center ${is4K ? "w-16 h-16" : "w-10 h-10 md:w-12 md:h-12"}`}
                  style={{ backgroundColor: "var(--secondary-color)" }}
                >
                  <svg
                    className={`${is4K ? "w-8 h-8" : "w-5 h-5 md:w-6 md:h-6"} text-white`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className={`${is4K ? "pl-16" : "pl-0 lg:pl-8"}`}>
            <div className="flex items-center mb-2">
              <div className={`${is4K ? "w-16 h-1" : "w-12 h-0.5"} mr-4`} style={{ backgroundColor: "var(--secondary-color)" }} />
              <span className={`${is4K ? "text-xl" : "text-sm md:text-base"} font-medium tracking-wide uppercase`} style={{ color: "var(--primary-light-text-color)" }}>
                {data.header}
              </span>
            </div>
            <h1 className={`${is4K ? "text-7xl mb-12" : "text-2xl md:text-3xl lg:text-4xl mb-8"} font-bold leading-tight`} style={{ color: "var(--primary-color)" }}>
              {data.mainHeading}
            </h1>
            <p className={`${is4K ? "text-2xl mb-16 leading-relaxed" : "text-base md:text-lg lg:text-[16px] mb-10 leading-relaxed"}`} style={{ color: "var(--primary-light-text-color)" }}>
              {data.description}
            </p>
            <div className={`${is4K ? "space-y-8" : "space-y-3"}`}>
              {data.features?.map((item, idx) => (
                <div key={idx} className="flex items-start">
                  <div
                    className={`${is4K ? "w-16 h-1 mt-2" : "w-12 h-0.5 mt-1"} mr-6 flex-shrink-0`}
                    style={{ backgroundColor: "var(--secondary-color)" }}
                  />
                  <div>
                    <h3 className={`${is4K ? "text-2xl mb-3" : "text-lg md:text-xl mb-2"} font-semibold`} style={{ color: "var(--primary-color)" }}>
                      {item.title}{" "}
                      <span className={`${is4K ? "text-xl" : "text-base md:text-[16px]"} font-normal`}>
                        {item.desc}
                      </span>
                    </h3>
                  </div>
                </div>
              ))}
            </div>
            <div className={`${is4K ? "mt-20" : "mt-4"}`}>
              <h2 className={`${is4K ? "text-3xl mb-4" : "text-xl md:text-[20px] mb-3"} font-bold`} style={{ color: "var(--secondary-color)" }}>
                {data.bottomHeading}
              </h2>
              <p className={`${is4K ? "text-xl" : "text-sm md:text-base"}`} style={{ color: "var(--primary-light-text-color)" }}>
                {data.bottomText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
