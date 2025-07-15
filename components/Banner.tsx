import type React from "react"

interface BannerProps {
  type: "offer" | "conference" | "template" // Type still helps with content alignment/text
  title: string
  subtitle?: string
  miniText?: string
}

const Banner: React.FC<BannerProps> = ({ type, title, subtitle, miniText }) => {
  const gradientClasses = "from-[#2a0a5e] to-[#0a0a2a]" // Dark Purple to Dark Blue
  const contentAlignment = "items-start"

  // Base SVG fill opacity for prominent background styles
  const svgFillOpacity1 = "rgba(255,255,255,0.18)" // Slightly more prominent
  const svgFillOpacity2 = "rgba(255,255,255,0.10)"
  const svgFillOpacity3 = "rgba(255,255,255,0.05)"

  // Unique, abstract SVG background for all banner types
  const uniqueSvgBackground = (
    <>
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1000 200"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Layer 1: Large, sweeping curve */}
        <path d="M0,150 C200,100 400,180 600,120 C800,60 1000,100 1000,100 L1000,0 L0,0 Z" fill={svgFillOpacity1} />
        {/* Layer 2: Smaller, more angular curve */}
        <path d="M0,80 C150,120 300,40 500,90 C700,140 850,70 1000,100 L1000,0 L0,0 Z" fill={svgFillOpacity2} />
        {/* Layer 3: Abstract blob/shape on the right */}
        <path d="M700,0 C750,50 850,0 900,50 C950,100 1000,50 1000,0 Z" fill={svgFillOpacity3} />
        {/* Layer 4: Abstract blob/shape on the left */}
        <path d="M0,50 C50,0 150,50 200,0 C250,50 300,0 300,50 Z" fill={svgFillOpacity3} />
      </svg>
    </>
  )

  return (
    <div
      className={`relative w-full max-w-4xl mx-auto h-40 md:h-48 lg:h-56 rounded-xl overflow-hidden shadow-lg flex items-center p-6 md:p-8 lg:p-10 bg-gradient-to-r ${gradientClasses}
      transform transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl`}
    >
      {/* Unique SVG Background Shapes */}
      {uniqueSvgBackground}

      {/* Content */}
      <div className={`relative z-10 flex flex-col w-full ${contentAlignment}`}>
        <div className={`flex flex-col text-white ${type === "offer" ? "text-right md:text-right" : "text-left"}`}>
          <span className="text-sm md:text-base font-semibold opacity-80">
            {type === "offer" ? "SPECIAL OFFER" : ""}
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold leading-tight">{title}</h2>
          {subtitle && <p className="text-sm md:text-base opacity-90 mt-1">{subtitle}</p>}
          {miniText && <p className="text-xs md:text-sm opacity-70 mt-2">{miniText}</p>}
        </div>
      </div>
    </div>
  )
}

export default Banner
