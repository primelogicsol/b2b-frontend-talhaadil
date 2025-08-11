import type React from "react";
import {
  CheckCircle,
  AlertTriangle,
  Globe,
  Truck,
  Shield,
  DollarSign,
  Megaphone,
  Award,
  Network,
  Recycle,
  Lock,
} from "lucide-react";

export default function MainPageCards() {
  const solutions = [
    {
      icon: Globe,
      title: "US Handicraft Market Access",
      challenge:
        "Limited international access for Kashmiri artisans, restricting visibility.",
      benefit:
        "De Koshur Crafts empowers global visibility through e-commerce, exhibitions, and retail spaces, connecting artisans to U.S. buyers.",
      color: "text-blue-600",
    },
    {
      icon: Truck,
      title: "Infrastructure Challenges Solved",
      challenge:
        "Small businesses struggle with logistics, warehousing, and customs navigation.",
      benefit:
        "De Koshur Crafts handles logistics, ensuring seamless global access for U.S. buyers while artisans focus on craftsmanship.",
      color: "text-green-600",
    },
    {
      icon: Shield,
      title: "Ethical Standards Simplified",
      challenge:
        "Difficulty in meeting global compliance standards for fair trade and sustainability.",
      benefit:
        "De Koshur Crafts ensures products align with global standards, ensuring ethical sourcing and credibility.",
      color: "text-emerald-600",
    },
    {
      icon: DollarSign,
      title: "Financial Risks Minimized",
      challenge:
        "High upfront costs for international marketing and distribution.",
      benefit:
        "De Koshur Crafts offers flexible models like consignment, reducing risks and maximizing global exposure for buyers.",
      color: "text-yellow-600",
    },
    {
      icon: Megaphone,
      title: "Branding and Marketing",
      challenge:
        "Difficulty in establishing brand recognition in global markets.",
      benefit:
        "De Koshur Crafts provides professional branding, marketing platforms, and event promotions to boost product visibility.",
      color: "text-purple-600",
    },
    {
      icon: Award,
      title: "Quality Improvement Resources",
      challenge:
        "Difficulty in meeting global quality standards and packaging requirements.",
      benefit:
        "De Koshur Crafts offers quality tools, expert photography, and eco-friendly packaging, empowering buyers to compete globally.",
      color: "text-indigo-600",
    },
    {
      icon: Network,
      title: "Industry Network Access",
      challenge:
        "Limited access to essential industry networks and high-value international buyers.",
      benefit:
        "De Koshur Crafts connects buyers to industry networks, opening doors to critical markets and new opportunities.",
      color: "text-pink-600",
    },
    {
      icon: Recycle,
      title: "Sustainable Business Models",
      challenge: "Seasonal demand and limited market diversification.",
      benefit:
        "De Koshur Crafts offers diverse business models, from e-commerce to franchises, ensuring long-term sustainability for buyers.",
      color: "text-teal-600",
    },
    {
      icon: Lock,
      title: "Counterfeit Product Protection",
      challenge: "Risk of counterfeit goods and misrepresentation.",
      benefit:
        "De Koshur Crafts safeguards authenticity with blockchain verification, ensuring only genuine products reach global customers.",
      color: "text-red-600",
    },
  ];

  return (
    <div
      className="p-3 sm:p-4 md:p-6 lg:p-8 mt-4 bg-gradient-to-br from-slate-200 to-slate-100"
      style={
        {
          "--primary-color": "#1b4f68",
          "--primary-hover-color": "#2a5f7a",
          "--secondary-color": "#d85834",
          "--secondary-light-color": "#f9c6b2",
        } as React.CSSProperties
      }
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--primary-color)] mb-2 sm:mb-4 px-4">
            Why you need De Koshur Crafts Partnerships ?
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mx-auto px-4 leading-relaxed">
            Empowering Kashmiri artisans through innovative solutions that
            bridge traditional craftsmanship with global market access
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon;
            return (
              <div
                key={index}
                className="group relative bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 border border-gray-100 overflow-hidden"
              >
                {/* Card Header */}
                <div className="p-4 sm:p-5 md:p-6 pb-3 sm:pb-4">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-3 sm:mb-4">
                    <div className="flex items-center gap-3"></div>
                  </div>
                  <div className="flex items-center">
                    <div className="p-2 sm:p-2.5 rounded-lg flex-shrink-0">
                      <IconComponent
                        className={`w-5 h-5 sm:w-6 sm:h-6 ${solution.color}`}
                      />
                    </div>
                    <h2 className="text-base sm:text-lg md:text-xl font-bold text-[var(--primary-color)] leading-tight">
                      {solution.title}
                    </h2>
                  </div>
                </div>

                {/* Card Content */}
                <div className="px-4 sm:px-5 md:px-6 pb-4 sm:pb-5 md:pb-6 space-y-4 sm:space-y-5">
                  {/* Challenge Section */}
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[var(--secondary-color)] flex-shrink-0" />
                      <span className="text-xs sm:text-sm font-semibold text-[var(--secondary-color)] uppercase tracking-wide">
                        Challenge
                      </span>
                    </div>
                    <div className="pl-5 sm:pl-6 border-l-2 border-[var(--secondary-light-color)]">
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        {solution.challenge}
                      </p>
                    </div>
                  </div>

                  {/* Benefit Section */}
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[var(--primary-color)] flex-shrink-0" />
                      <span className="text-xs sm:text-sm font-semibold text-[var(--primary-color)] uppercase tracking-wide">
                        Solution
                      </span>
                    </div>
                    <div className="pl-5 sm:pl-6 border-l-2 border-[var(--primary-color)] border-opacity-30">
                      <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                        {solution.benefit}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Hover Effect Gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-hover-color)] opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-xl sm:rounded-2xl pointer-events-none" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
