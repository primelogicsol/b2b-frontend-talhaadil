"use client"

interface HeaderBannerProps {
  heading: string
  description: string
  buttonText: string
  onButtonClick?: () => void
}

export default function HeaderBanner({ heading, description, buttonText, onButtonClick }: HeaderBannerProps) {
  return (
    <div className="relative w-full max-w-6xl mx-auto my-8 p-4 md:p-8 lg:p-12 bg-[#4A00E0] rounded-[32px] overflow-hidden shadow-lg">
      {/* Background shapes */}
      <div className="absolute inset-0 z-0">
        {/* Main dark purple to lighter purple gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#4A00E0] to-[#8E2DE2]" />

        {/* Top-left dark angular shape */}
        <div
          className="absolute top-0 left-0 w-[70%] h-[70%] bg-gradient-to-br from-[#2A0050] to-transparent transform -rotate-12 -translate-x-1/4 -translate-y-1/4"
          style={{ clipPath: "polygon(0 0, 100% 0, 75% 100%, 0% 100%)" }}
        />

        {/* Bottom-right bright magenta/purple sweeping shape */}
        <div
          className="absolute bottom-0 right-0 w-[120%] h-[120%] bg-gradient-to-tl from-[#FF00FF] to-[#8E2DE2] transform rotate-12 translate-x-1/3 translate-y-1/3 opacity-70"
          style={{ clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)" }}
        />

        {/* Subtle top-right angular shape */}
        <div
          className="absolute top-0 right-0 w-[50%] h-[50%] bg-gradient-to-bl from-[#6A0DAD] to-transparent transform rotate-6 translate-x-1/4 -translate-y-1/4 opacity-50"
          style={{ clipPath: "polygon(50% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center py-16 md:py-24 lg:py-32 px-4">
        <h1 className="text-white font-extrabold text-4xl md:text-5xl lg:text-6xl leading-tight mb-4 drop-shadow-md">
          {heading}
        </h1>
        <p className="text-white text-lg md:text-xl lg:text-2xl max-w-3xl mb-8 opacity-90 drop-shadow-sm">
          {description}
        </p>
        <button
          onClick={onButtonClick}
          className="bg-white text-[#4A00E0] px-8 py-4 rounded-full font-bold text-lg shadow-xl transition-all duration-300 ease-in-out hover:bg-gray-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50"
        >
          {buttonText}
        </button>
      </div>
    </div>
  )
}
