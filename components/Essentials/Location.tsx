"use client"
import { Building, Layers, Package, Phone, Warehouse, Truck, Palette, Camera } from "lucide-react"
import React from "react"

import { useGlobalContext } from "../../context/ScreenProvider"

const locations = [
  {
    icon: Building,
    title: "Head Office",
    location: "USA, Virginia – Fairfax",
  },
  {
    icon: Layers,
    title: "Communications",
    location: "USA, Virginia Beach",
  },
  {
    icon: Package,
    title: "Regional USA",
    location: "USA, CA – San Francisco",
  },
  {
    icon: Phone,
    title: "Call Centre Office",
    location: "USA, Texas – Dallas",
  },
  {
    icon: Warehouse,
    title: "USA Warehouse",
    location: "Allentown, PA",
  },
  {
    icon: Warehouse, // Using Warehouse for India Warehouse too
    title: "India Warehouse",
    location: "J & K – Srinagar",
  },
  {
    icon: Truck, // More specific for logistics
    title: "USA Logistics",
    location: "Illinois – Chicago",
  },
  {
    icon: Truck, // More specific for logistics
    title: "India Logistics",
    location: "Delhi – New Delhi",
  },
  {
    icon: Palette,
    title: "Design Studio",
    location: "New York City",
  },
  {
    icon: Camera,
    title: "Photo Studio",
    location: "J & K – Srinagar",
  },
]

const achievements = [
  "Fueling Expansion Through Operational Synergy Worldwide.",
  "Logistics Streamlined for Maximum Efficiency and Impact.",
  "Bridging Markets, Unlocking Potential, Delivering Growth.",
  "Innovative Foundations for Limitless Global Connectivity.",
  "Expanding Horizons, Strengthening Networks, Achieving Goals.",
]

export default function Location() {
  const { is4K } = useGlobalContext()
  return (
    <section className={`${is4K ? "py-24" : "py-16"} bg-white mt-20`}>
      <div className={`container ${is4K ? "max-w-8xl" : "max-w-6xl"} mx-auto px-4 md:px-6`}>
        <h1
          className={`${is4K ? "text-5xl md:text-6xl" : "text-4xl md:text-5xl"} font-extrabold text-[#1b4f68] text-center mb-12 leading-tight`}
        >
          Our Global Presence & Impact
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          {/* Left side: Grid of location items (horizontal strips) */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4">
            {locations.map((item, index) => (
              <div
                key={index}
                className={`flex items-center ${is4K ? "p-6" : "p-4"} rounded-xl shadow-md bg-white border border-transparent
                         hover:border-[#d85834] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-in-out cursor-pointer`}
              >
                {React.createElement(item.icon, {
                  className: `${is4K ? "w-10 h-10" : "w-8 h-8"} text-[#d85834] flex-shrink-0 mr-4`,
                })}
                <div className="flex-1">
                  <h3 className={`${is4K ? "text-xl" : "text-lg"} font-semibold text-[#1b4f68]`}>{item.title}</h3>
                  <p className={`${is4K ? "text-base" : "text-sm"} text-[#346880]`}>{item.location}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right side: Bullet points */}
          <div
            className={`lg:col-span-2 flex flex-col justify-center ${is4K ? "p-10" : "p-8"} rounded-xl bg-[#e4e6eb] shadow-lg`}
          >
            <h2 className={`${is4K ? "text-3xl md:text-4xl" : "text-2xl md:text-3xl"} font-bold text-[#1b4f68] mb-6`}>
              Key Achievements
            </h2>
            <ul className="space-y-4">
              {achievements.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-[#0f172a]">
                  <span className={`${is4K ? "text-3xl" : "text-2xl"} leading-none font-bold`}>•</span>
                  <p className={`flex-1 ${is4K ? "text-lg md:text-xl" : "text-base md:text-lg"}`}>{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
