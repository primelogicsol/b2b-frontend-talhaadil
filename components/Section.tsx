"use client"

import Image from "next/image"
import { ArrowUp } from "lucide-react"
import { useEffect, useState } from "react"

export default function Section() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }
    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 relative overflow-hidden">
      <div className="h-16 bg-gray-900 flex items-center px-8">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
      </div>

      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(#e5e5e5 1px, transparent 1px)`,
          backgroundSize: `20px 20px`,
        }}
      ></div>

      <main className="relative z-10 flex flex-col lg:flex-row items-center justify-center min-h-[calc(100vh-64px)] px-4 py-12 lg:px-8">
        <div className="relative w-full max-w-md lg:max-w-xl h-[400px] lg:h-[550px] flex items-center justify-center mb-12 lg:mb-0 lg:mr-16">
          <div className="relative w-[350px] h-[450px] md:w-[450px] md:h-[550px]">
            <div className="absolute top-0 left-0 w-[300px] h-[400px] md:w-[400px] md:h-[500px] transform rotate-[-15deg] skew-x-[-10deg] rounded-xl overflow-hidden group transition-transform duration-300 hover:scale-105 z-20">
              <div className="absolute inset-0 border-4 border-orange-500 rounded-xl z-10 pointer-events-none"></div>
              <div className="absolute inset-[4px] border-4 border-gray-900 rounded-xl z-10 pointer-events-none"></div>
              <Image
                src="/images/new-pic6.webp"
                alt="Two people working on a laptop"
                width={600}
                height={700}
                className="absolute inset-0 w-full h-full object-cover transform rotate-[15deg] skew-x-[10deg]"
              />
            </div>

            {/* Additional Image in Small Square with Hover Effect */}
            <div className="absolute bottom-0 right-0 w-[150px] h-[200px] md:w-[200px] md:h-[250px] transform rotate-[15deg] skew-x-[10deg] rounded-xl overflow-hidden border-4 border-orange-500 z-10 group transition-transform duration-300 hover:scale-105">
              <Image
                src="/images/new-pic4.webp"
                alt="Decorative"
                width={200}
                height={250}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 group-hover:rotate-1"
              />
            </div>
          </div>
        </div>

        <div className="w-full max-w-2xl text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start mb-4">
            <div className="w-12 h-0.5 bg-orange-500 mr-3"></div>
            <p className="text-sm font-semibold uppercase text-gray-600">WELCOME TO B2B CONNECT - USA</p>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
            Empowering Kashmiri Artisans, Startups <br className="hidden md:block" /> in Accessing American {" "}
            <span className="text-orange-500">Markets</span>
          </h1>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8">
            A transformative and progressive platform with an investment of $3.7 million, connecting Kashmir&apos;s
            artisans, startups, and businesses to global markets, fostering fair trade, preserving heritage, and
            unlocking boundless opportunities for sustainable growth.
          </p>

          <div className="grid gap-6 mb-8">
            {[
              "Dream It: Envision your goals. We'll provide the roadmap",
              "Define It: Select the partnership model tailored to your ambitions.",
              "Deliver It: Upload your credentials, verify your status, and join a league of visionary partners.",
              "Dominate It: Access our resources and watch your business flourish on the global stage."
            ].map((text, i) => (
              <div key={i} className="flex items-start group">
                <div className="w-8 h-0.5 bg-orange-500 mt-3 mr-4 transition-all duration-300 group-hover:w-12"></div>
                <p className="font-bold text-lg">{text}</p>
              </div>
            ))}
          </div>

          <div className="text-sm text-gray-600 mt-8">
            <p className="font-bold text-orange-500 mb-1">Handicraft Progressive Business Model for Every Vision</p>
            <p>
              Crafting Kashmir&apos;s Next Generations Future Together | Amir-e-Kabir&apos;s Legacy, Reimagined for
              Today&apos;s World
            </p>
          </div>
        </div>
      </main>

      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-orange-500 text-white p-4 rounded-full shadow-lg hover:bg-orange-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </div>
  )
}
