"use client";

import { useGlobalContext } from "@/context/ScreenProvider";

export default function PartnershipSection() {
    const {is4K} = useGlobalContext()
  const features = [
    "Optimized Consignment Inventory Control",
    "Augmented Reality (AR) for Product Visualization",
    "Virtual Store Planning & Merchandising",
    "Haptic Feedback for Stock Accuracy",
    "AI-Powered Demand Forecasting Tools",
    "Geo-Fencing for Consumer Targeting",
    "Automated Reconciliation for Sales & Inventory",
    "Blockchain-Based Product Authentication",
    "Omnichannel Buyer Support Systems",
    "Sustainable Packaging & Eco-Friendly Retail Solutions",
  ]

  return (
    <div className="bg-gray-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className={`w-full overflow-hidden ${is4K ? "max-w-[1800px]" : "max-w-7xl "}`}>
        <div className="flex flex-col lg:flex-row">
          {/* Left side - Image */}
          <div className="w-full lg:w-1/2 relative h-64 sm:h-80 lg:h-auto">
            <img
              src="/collaborative-hands.png"
              alt="Team collaboration - hands coming together"
              className="w-full h-full object-cover"
            />
            {/* Orange sidebar with text */}
            <div className="hidden sm:flex absolute left-0 top-0 bottom-0 w-12 sm:w-16 bg-orange-500 items-center justify-center">
              <div className="text-white font-semibold text-xs sm:text-sm transform -rotate-90 whitespace-nowrap">
                Your Gateway to Kashmir Craft Markets
              </div>
              {/* Chain link icon */}
              <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l-3 3a4 4 0 10-5.656 5.656l1.5-1.5a1 1 0 101.414 1.414l1.5-1.5a2 2 0 11-2.828-2.828l3-3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="w-full lg:w-1/2 p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
            {/* Small header */}
            <div className="text-orange-500 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-3 sm:mb-4">
              Technology Advancements in DKC Consignment Partnership
            </div>

            {/* Main heading */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Innovative Tools for Modern Consignment <span className="text-orange-500">Operations</span>
            </h1>

            {/* Description paragraph */}
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8 italic">
              Our platform integrates cutting-edge technologies to enhance U.S.-based buyers' consignment operations,
              optimize inventory efficiency, and improve retail performance. Explore advanced solutions built for
              seamless sourcing and retail success.
            </p>

            {/* Features list */}
            <div className="space-y-3 sm:space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 sm:gap-4">
                  <div className="w-6 sm:w-8 h-0.5 bg-orange-500 flex-shrink-0"></div>
                  <span className="text-gray-700 font-medium text-sm sm:text-base">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
