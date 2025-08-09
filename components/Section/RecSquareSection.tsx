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
  description = `Expand your reach and minimize risk with De Koshur Crafts' Consignment Partnership in the USA. This
  partnership allows you to display your products in premium retail spaces while retaining ownership until the
  products are sold. With our expert guidance, we handle everything from inventory management to logistics,
  ensuring your products reach the right audience in top U.S. locations. Our consignment model offers
  flexibility and reducing upfront costs, providing you with the opportunity to test the U.S. market and scale
  at your own pace while benefiting from our extensive network and industry expertise.`,
  phases = defaultPhases,
  readMoreLink = "#",
  appointmentLink = "#",
}: PartnershipActivationProps) {
  const { is4K } = useGlobalContext()

  return (
    <div
      className="flex flex-col lg:flex-row items-center justify-center p-4 md:p-8 mx-auto mt-8 lg:gap-20"
      style={{
        maxWidth: is4K ? "2000px" : "1280px",
        paddingLeft: is4K ? "8rem" : "1rem",
        paddingRight: is4K ? "8rem" : "1rem",
        fontSize: is4K ? "1.125rem" : "1rem", // Apply font size increase
      }}
    >
      {/* Left Section */}
      <div className="relative w-full lg:w-1/2 flex justify-center items-center p-4 lg:p-0">
        <div className="relative w-full max-w-sm md:max-w-md lg:max-w-[400px] h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl">
          <div className="absolute inset-0 border-4 border-[#FF6A13] rounded-2xl transform translate-x-4 translate-y-4 z-0"></div>
          <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl group z-10">
            <Image
              src={mainImage || "/placeholder.svg"}
              alt="Main Partnership Image"
              width={400}
              height={600}
              className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
            />
            <div className="absolute inset-0 opacity-60 mix-blend-multiply"></div>
          </div>
        </div>

        <div className="absolute -bottom-8 right-0 md:top-1/2 md:right-0 md:-translate-y-1/2 lg:top-1/2 lg:left-[calc(100%-120px)] lg:-translate-y-1/2 p-2 bg-white rounded-2xl shadow-2xl z-20 w-[200px] h-[150px] md:w-[250px] md:h-[200px] border border-white group">
          <Image
            src={smallImage || "/placeholder.svg"}
            alt="Small Partnership Image"
            width={250}
            height={200}
            className="w-full h-full object-cover rounded-xl transition-all duration-500 group-hover:scale-105 group-hover:rotate-1"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 p-4 md:p-8 lg:pl-16 mt-8 lg:mt-0 text-center lg:text-left">
        <div className="flex items-center justify-center lg:justify-start text-[#FF6A13] font-semibold text-sm mb-4">
          <CheckSquare className="w-5 h-5 mr-2" />
          HOW IT WORKS
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-6 text-left px-3">{title}</h2>

        <p className="text-gray-700 leading-relaxed mb-8 text-sm md:text-base text-left px-2 ">{description}</p>

        <ul className="flex flex-col gap-4 text-gray-700 mb-10 text-sm md:text-base items-start">
          {phases.map((phase, index) => (
            <li
              key={index}
              className="w-full h-full flex items-start justify-start group transition-colors duration-300 hover:text-[#FF6A13]"
            >
              <CheckSquare className="w-5 h-5 text-[#FF6A13] mr-3 shrink-0 transition-transform duration-300 group-hover:scale-110 mt-1" />
              <span className="break-words">{phase}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
          <a
            href={readMoreLink}
            className="group flex items-center justify-center px-8 py-4 bg-[#FF6A13] text-white font-bold rounded-xl shadow-lg
                       transition-all duration-300 ease-in-out hover:bg-opacity-90 hover:scale-[1.02]
                       focus:outline-none focus:ring-4 focus:ring-[#FF6A13] focus:ring-opacity-50
                       min-w-[200px]"
          >
            READ MORE
            <ArrowRight className="w-5 h-5 ml-3 transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          <a href={appointmentLink} className="flex items-center gap-3 group">
            <div
              className="bg-[#FF6A13] p-4 rounded-full transition-all duration-300 ease-in-out
                          group-hover:scale-105 group-hover:bg-opacity-90 shadow-md"
            >
              <Laptop className="w-6 h-6 text-white" />
            </div>
            <div className="text-gray-800 font-semibold text-base md:text-lg relative">
              <span className="block text-[#FF6A13] font-bold text-lg md:text-xl relative overflow-hidden">
                <span className="inline-block relative">
                  Book Appointment
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#FF6A13] transition-all duration-300 group-hover:w-full"></span>
                </span>
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}
