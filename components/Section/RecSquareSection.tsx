"use client"

import Image from "next/image"
import { CheckSquare, ArrowRight, Laptop } from "lucide-react"
import { useGlobalContext } from "../../context/ScreenProvider"

interface PartnershipActivationProps {
  mainImage?: string
  smallImage?: string
  title?: string
  description?: string
  phases?: string[]
  readMoreLink?: string
  appointmentLink?: string
}

const defaultPhases = [
  "Registration Start",
  "Document Submission",
  "Eligibility Review",
  "Agreement Certification",
  "Profile Setup",
  "Customs Clearance",
  "Partnership Onboarding",
  "Training Checkup",
  "Portal Activation",
  "Partnership Launch",
  "KPI Engagement",
]

export default function RecSquareSection({
  mainImage = "/images/new-pic2.webp?height=600&width=400",
  smallImage = "/images/new-pic2.webp?height=200&width=250",
  title = "Swift Partnership Activation",
  description = `Experience a seamless journey from registration to partnership, empowering USA-based buyers with tools, training, and support to thrive in a global marketplace.`,
  phases = defaultPhases,
  readMoreLink = "/process",
  appointmentLink = "/appointment",
}: PartnershipActivationProps) {
  const { is4K } = useGlobalContext()

  return (
    <div
      className="flex flex-col lg:flex-row items-center justify-center p-4 md:p-8 mx-auto mt-8 lg:gap-20 bg-white"
      style={{
        maxWidth: is4K ? "2000px" : "1280px",
        paddingLeft: is4K ? "8rem" : "1rem",
        paddingRight: is4K ? "8rem" : "1rem",
        fontSize: is4K ? "1.125rem" : "1rem",
      }}
    >
      <div className="relative w-full lg:w-1/2 flex justify-center items-center p-4 lg:p-0">
        <div className="relative w-full max-w-sm md:max-w-md lg:max-w-lg group">
          <div className="absolute inset-0 -m-4 border-4 border-[var(--secondary-color)] rounded-2xl z-20 pointer-events-none"></div>

          <div className="aspect-[3/4] rounded-2xl overflow-hidden">
          <div className="w-full h-full bg-[var(--primary-color)]"></div>
            <div className="absolute inset-0 opacity-60 mix-blend-multiply"></div>
          </div>
        </div>

       
      </div>

      <div className="w-full lg:w-1/2 p-4 md:p-8 lg:pl-16 mt-8 lg:mt-0 text-center lg:text-left">
        <div className="flex items-center justify-center lg:justify-start text-[var(--secondary-color)] font-semibold text-sm mb-4">
          <CheckSquare className="w-5 h-5 mr-2" />
          HOW IT WORKS
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6 text-left px-3">
          {title}
        </h2>

        <p className="text-gray-700 leading-relaxed mb-8 text-sm md:text-base text-left px-2 ">
          {description}
        </p>

        <ul className="flex flex-col gap-2 text-gray-700 mb-10 text-sm md:text-base items-start">
          {phases.map((phase, index) => (
            <li
              key={index}
              className="w-full h-full flex items-start justify-start group transition-colors duration-300 hover:text-[var(--secondary-color)]"
            >
              <CheckSquare className="w-5 h-5 text-[var(--secondary-color)] mr-3 shrink-0 transition-transform duration-300 group-hover:scale-110" />
              <span className="break-words">{phase}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
          <a
            href={readMoreLink}
            className="group flex items-center justify-center px-8 py-4 bg-[var(--secondary-color)] text-white font-bold rounded-xl shadow-lg
                       transition-all duration-300 ease-in-out hover:bg-opacity-90 hover:scale-[1.02]
                       focus:outline-none focus:ring-4 focus:ring-[var(--secondary-color)] focus:ring-opacity-50
                       min-w-[200px]"
          >
            READ MORE
            <ArrowRight className="w-5 h-5 ml-3 transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          <a href={appointmentLink} className="flex items-center gap-3 group">
            <div
              className="bg-[var(--secondary-color)] p-4 rounded-full transition-all duration-300 ease-in-out
                          group-hover:scale-105 group-hover:bg-opacity-90 shadow-md"
            >
              <Laptop className="w-6 h-6 text-white" />
            </div>
            <div className="text-gray-800 font-semibold text-base md:text-lg relative">
              <span className="block text-[var(--secondary-color)] font-bold text-lg md:text-xl relative overflow-hidden">
                <span className="inline-block relative">
                  Book Appointment
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[var(--secondary-color)] transition-all duration-300 group-hover:w-full"></span>
                </span>
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}
