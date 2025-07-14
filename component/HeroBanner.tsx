"use client"

import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"
import Image from "next/image"

export default function HeroBanner() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#000080] flex items-center justify-center py-16 px-4 md:px-8 lg:px-16">
      {/* Background Video - Subtle and low opacity */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-10"
        src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" // Placeholder video
        loop
        muted
        autoPlay
        playsInline
      />

      <img
        src="/images/hero3.jpg"
        alt="Background pattern"
        className="absolute inset-0 w-full h-full object-cover opacity-20" // Adjust opacity as needed to blend
      />

      {/* Concentric Circles */}
      <div className="absolute bottom-0 right-0 z-0 translate-x-1/4 translate-y-1/4 hidden md:block">
        <div className="w-[300px] h-[300px] rounded-full border border-white/10 flex items-center justify-center">
          <div className="w-[250px] h-[250px] rounded-full border border-white/10 flex items-center justify-center">
            <div className="w-[200px] h-[200px] rounded-full border border-white/10 flex items-center justify-center">
              <div className="w-[150px] h-[150px] rounded-full border border-white/10" />
            </div>
          </div>
        </div>
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between w-full h-full gap-12">
        {/* Left Section: Text and Button */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center md:items-start text-center md:text-left max-w-2xl"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-0.5 bg-yellow-400" />
            <span className="text-yellow-400 font-medium uppercase text-sm tracking-wider">WELLCOME TO SOFTEC</span>
          </div>
          <h1 className="text-white font-extrabold text-4xl md:text-6xl lg:text-7xl leading-tight mb-8">
            AI-Driven Cyber Security Solutions
          </h1>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 rounded-full border-2 border-yellow-400 text-white bg-transparent px-8 py-4 text-lg font-semibold transition-colors duration-300 hover:bg-yellow-400 hover:text-blue-950"
          >
            Get in Touch
            <ChevronRight className="w-5 h-5 text-yellow-400 group-hover:text-blue-950 transition-colors duration-300" />
          </motion.button>
        </motion.div>

        {/* Right Section: Animated Drone with Padlock */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] flex items-center justify-center"
        >
          {/* Drone Animation */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="absolute"
          >
            <Image
  src="/public/images/subject6.png"
  alt="Animated drone with padlock"
  width={350}
  height={350}
  className="w-[250px] h-[250px] md:w-[350px] md:h-[350px] object-contain"
/>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
