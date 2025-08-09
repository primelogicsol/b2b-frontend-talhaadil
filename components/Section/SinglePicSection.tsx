"use client"

import type React from "react"

import { useGlobalContext } from "@/context/ScreenProvider"
export default function SinglePicSection() {
  const { is4K } = useGlobalContext()

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
          "--secondary-light-color": "#f9c6b2",
        } as React.CSSProperties
      }
    >
      <div className={`max-w-7xl mx-auto ${is4K ? "px-16 py-32" : "px-8 py-16"}`}>
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-${is4K ? "16" : "12"} items-center`}>
          {/* Left Side - Image with Sidebar */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg">
              <img
                alt="Team collaboration - hands coming together"
                className={`w-full ${is4K ? "h-[800px]" : "h-[500px] md:h-[700px]"} object-cover`}
              />

              {/* Orange Sidebar */}
              <div
                className={`absolute left-0 top-0 ${is4K ? "w-24" : "w-16 md:w-20"} h-full flex items-center justify-center`}
                style={{ backgroundColor: "var(--secondary-color)" }}
              >
                <div className="transform -rotate-90 whitespace-nowrap">
                  <span
                    className={`text-white font-medium ${is4K ? "text-2xl tracking-wider" : "text-lg md:text-xl tracking-wide"}`}
                  >
                    Your Link to Kashmir Craft Markets
                  </span>
                </div>
              </div>

              {/* Chain Link Icon */}
              <div className={`absolute ${is4K ? "bottom-12 left-12" : "bottom-6 left-6 md:bottom-8 md:left-8"}`}>
                <div
                  className={`${is4K ? "w-16 h-16" : "w-10 h-10 md:w-12 md:h-12"} rounded-full flex items-center justify-center`}
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

          {/* Right Side - Content */}
          <div className={`${is4K ? "pl-16" : "pl-0 lg:pl-8"}`}>
            {/* Header */}
            <div className="flex items-center mb-2">
              <div
                className={`${is4K ? "w-16 h-1" : "w-12 h-0.5"} mr-4`}
                style={{ backgroundColor: "var(--secondary-color)" }}
              ></div>
              <span
                className={`${is4K ? "text-xl" : "text-sm md:text-base"} font-medium tracking-wide uppercase`}
                style={{ color: "var(--primary-light-text-color)" }}
              >
                WELCOME TO B2B CONNECT - USA
              </span>
            </div>

            {/* Main Heading */}
            <h1
              className={`${is4K ? "text-7xl mb-12" : "text-2xl md:text-3xl lg:text-4xl mb-8"} font-bold leading-9`}
              style={{ color: "var(--primary-color)" }}
            >
              Empowering USA-Based Buyers in <br className="hidden md:block" />
              Accessing Kashmiri Craft <span style={{ color: "var(--secondary-color)" }}>Markets</span>
            </h1>

            {/* Description Paragraph */}
            <p
              className={`${is4K ? "text-2xl mb-16 leading-relaxed" : "text-base md:text-[20px] lg:text-[16px] mb-10 leading-relaxed"} `}
              style={{ color: "var(--primary-light-text-color)" }}
            >
              A Transformative Platform Connecting USA Buyers with Kashmiri Artisans and Authentic Products. The De
              Koshur Crafts platform opens a direct line to premium Kashmiri handicrafts for buyers across the USA,
              supporting ethical trade, preserving cultural heritage, and offering businesses competitive pricing and
              unmatched craftsmanship.
            </p>

            {/* Feature Points */}
            <div className={`space-y-${is4K ? "8" : "2"}`}>
              {/* Dream It */}
              <div className="flex items-start">
                <div
                  className={`${is4K ? "w-16 h-1 mt-2" : "w-12 h-0.5 mt-1"} mr-6 flex-shrink-0`}
                  style={{ backgroundColor: "var(--secondary-color)" }}
                ></div>
                <div>
                  <h3
                    className={`${is4K ? "text-2xl mb-3" : "text-lg md:text-xl lg:text-[19px] "} font-semibold`}
                    style={{ color: "var(--primary-color)" }}
                  >
                    Dream It:{" "}
                    <span className={`${is4K ? "text-xl" : "text-base md:text-[16px] lg:text-[17px]"} font-normal`}>
                      Envision your store or product lineup. We'll provide the roadmap for sourcing products that meet
                      your unique business needs.
                    </span>
                  </h3>
                </div>
              </div>

              {/* Define It */}
              <div className="flex items-start">
                <div
                  className={`${is4K ? "w-16 h-1 mt-4" : "w-12 h-0.5 mt-3"} mr-6 flex-shrink-0`}
                  style={{ backgroundColor: "var(--secondary-color)" }}
                ></div>
                <div>
                  <h3
                    className={`${is4K ? "text-2xl mb-3" : "text-lg md:text-xl mb-2"} font-semibold`}
                    style={{ color: "var(--primary-color)" }}
                  >
                    Define It:{" "}
                    <span className={`${is4K ? "text-xl" : "text-base md:text-[16px] lg:text-[17px]"} font-normal`}>
                      Browse our curated collections and select from a wide range of products that best fit your market
                      & Order directly from artisans or suppliers, and manage your purchases with easy shipping options
                      and tracking systems.
                    </span>
                  </h3>
                </div>
              </div>

              {/* Dominate It */}
              <div className="flex items-start">
                <div
                  className={`${is4K ? "w-16 h-1 mt-4" : "w-12 h-0.5 mt-3"} mr-6 flex-shrink-0`}
                  style={{ backgroundColor: "var(--secondary-color)" }}
                ></div>
                <div>
                  <h3
                    className={`${is4K ? "text-2xl mb-3" : "text-lg md:text-xl mb-2"} font-semibold`}
                    style={{ color: "var(--primary-color)" }}
                  >
                    Dominate It:{" "}
                    <span className={`${is4K ? "text-xl" : "text-base "}md:text-[16px] lg:text-[17px] font-normal`}>
                      Stand out in the marketplace by offering authentic Kashmiri products that tell a rich cultural
                      story.
                    </span>
                  </h3>
                </div>
              </div>
            </div>

            {/* Bottom Text */}
            <div className={`${is4K ? "mt-20" : "mt-3"}`}>
              <h2
                className={`${is4K ? "text-3xl mb-4" : "text-xl md:text-[20px] mb-3"} font-bold`}
                style={{ color: "var(--secondary-color)" }}
              >
                Handicraft Progressive Business Model for Every Vision
              </h2>
              <p
                className={`${is4K ? "text-xl" : "text-sm md:text-base"}`}
                style={{ color: "var(--primary-light-text-color)" }}
              >
                Crafting US Next Generations with 700+ Old Legacy of Kashmir Handicraft Together
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}