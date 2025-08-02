"use client"

import { useState } from "react"
import { Key, BarChart, Truck, Briefcase, Check } from "lucide-react" // Import specific icons
import { useGlobalContext } from "../../context/ScreenProvider"
import Image from "next/image"
export default function FinalActivation() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null)
const { is4K } = useGlobalContext()
  return (
    <div className="bg-gradient-to-br from-[var(--primary-header-color)] to-white">
      {/* Header */}
      <header className="bg-[var(--primary-color)] text-white py-6 px-4 sm:px-6 lg:px-8 shadow-lg">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
            <div className="text-center sm:text-left">
              <h1 className="text-2xl sm:text-3xl font-bold">De Koshur Crafts</h1>
              <p className="text-[var(--primary-header-color)] text-sm sm:text-base">Partnership Activation</p>
            </div>
            <div className="bg-[var(--primary-hover-color)] px-4 py-2 rounded-full">
              <span className="text-sm font-medium">Process 7 - Welcome Onboard</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className={`mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 ${is4K ? "max-w-[2000px]" : "max-w-7xl"}`}>
        {/* Hero Section */}
        <section className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 lg:p-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)]"></div>

            {/* Success Icon */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[var(--secondary-light-color)] rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-slow">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[var(--secondary-color)] rounded-full flex items-center justify-center">
                <Check className="w-6 h-6 sm:w-8 sm:h-8 text-white" /> {/* Using Lucide Check icon */}
              </div>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--primary-color)] mb-4 sm:mb-6">
              Welcome to Your Partnership Activation!
            </h2>
            <p className="text-lg sm:text-xl text-[var(--primary-light-text-color)] mb-6 sm:mb-8">
              Buyer Partnership Registration Process
            </p>
          </div>
        </section>

        {/* Welcome Message */}
        <section className="mb-12 sm:mb-16 animate-fade-in-up delay-100">
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 lg:p-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-[var(--primary-color)] mb-6">Dear Buyer Partner,</h3>
            <div className="space-y-4 sm:space-y-6 text-gray-700 leading-relaxed">
              <p className="text-base sm:text-lg">
                Thank you for choosing{" "}
                <span className="font-semibold text-[var(--primary-color)]">De Koshur Crafts</span> as your trusted
                partner. We deeply appreciate the effort and vision that has brought you to this moment, and we are
                thrilled to move forward together in building a lasting and fruitful partnership.
              </p>
              <p className="text-base sm:text-lg">
                At De Koshur Crafts, we are driven by a profound commitment to the legacy of Kashmiri craftsmanship, a
                tradition that reflects centuries of heritage, passion, and exceptional skill. By joining us, you are
                not only showcasing your artistry to the world but also helping preserve and elevate the rich cultural
                heritage of Kashmiri craftsmanship.
              </p>
              <p className="text-base sm:text-lg">
                We value your dedication and are excited to support your business growth, innovation, and success.
                Together, we will continue to share the beauty and authenticity of Kashmiri handmade crafts with global
                markets, ensuring that the craftsmanship behind each piece is celebrated far and wide.
              </p>
              <div className="bg-[var(--secondary-light-color)] rounded-xl p-4 sm:p-6 border-l-4 border-[var(--secondary-color)]">
                <p className="text-base sm:text-lg font-semibold text-[var(--primary-color)]">
                  Congratulations on completing the process! We're excited to have you on board. Your partnership with
                  De Koshur Crafts begins <span className="text-[var(--secondary-color)]">TODAY</span>!
                </p>
              </div>
              <p className="text-base sm:text-lg font-medium text-[var(--primary-color)]">
                Best regards,
                <br />
                Director De Koshur Crafts / B2B Connect USA
              </p>
              <Image src="/images/signature.png" alt="Partnership Activation" width={350} height={350} className="-mt-8"/>
            </div>
          </div>
        </section>

        {/* Partnership Level Badge */}
        <section className="mb-12 sm:mb-16 animate-fade-in-up delay-150">
          <div className="bg-gradient-to-r from-[var(--secondary-light-color)] to-white rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10 border border-[var(--secondary-color)]/20 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--secondary-color)]/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-[var(--primary-color)]/10 rounded-full translate-y-12 -translate-x-12"></div>

            <div className="relative z-10">
              <div className="text-center mb-6 sm:mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-[var(--secondary-color)] rounded-full mb-4 sm:mb-6 animate-pulse-slow">
                  <Check className="w-8 h-8 sm:w-10 sm:h-10 text-white" /> {/* Using Lucide Check icon */}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[var(--primary-color)] mb-2 sm:mb-3">
                  Your Partnership Level
                </h3>
              </div>

              <div className="text-center">
                <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 mb-4 sm:mb-6 border-2 border-[var(--secondary-color)]/30 hover:border-[var(--secondary-color)] transition-all duration-300 hover:shadow-xl">
                  <h4 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--secondary-color)] mb-3 sm:mb-4 leading-tight">
                    DKC Drop Shipping Partner
                  </h4>
                  <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4">
                    <span className="text-sm sm:text-base font-semibold text-[var(--primary-color)]">
                      Partnership ID:
                    </span>
                    <span className="text-sm sm:text-base font-mono bg-[var(--primary-header-color)] text-[var(--primary-color)] px-3 py-1 rounded-lg">
                      DKC-DS-2024-001
                    </span>
                  </div>
                </div>

                {/* Partnership Benefits */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                  {[
                    { icon: Key, title: "Exclusive Access", desc: "Premium product catalog" },
                    { icon: BarChart, title: "Analytics", desc: "Real-time insights" },
                    { icon: Truck, title: "Fast Shipping", desc: "Priority fulfillment" },
                    { icon: Briefcase, title: "Support", desc: "Dedicated account manager" },
                  ].map((benefit, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 hover:border-[var(--primary-color)]/30"
                    >
                      <benefit.icon className="w-8 h-8 sm:w-10 sm:h-10 text-[var(--primary-color)] mb-2 sm:mb-3 mx-auto" />
                      <h5 className="font-bold text-[var(--primary-color)] text-sm sm:text-base mb-1 sm:mb-2">
                        {benefit.title}
                      </h5>
                      <p className="text-xs sm:text-sm text-gray-600">{benefit.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partnership Details & Next Steps Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
          {/* Partnership Details */}
          <section className="animate-fade-in-left delay-200">
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 h-full">
              <h3 className="text-2xl sm:text-3xl font-bold text-[var(--primary-color)] mb-6 sm:mb-8">
                Your Partnership Details
              </h3>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-3 border-b border-gray-200">
                  <span className="font-semibold text-[var(--primary-color)] mb-1 sm:mb-0">Application ID:</span>
                  <span className="text-gray-700 font-mono bg-gray-50 px-3 py-1 rounded">VND-2024-001</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-3 border-b border-gray-200">
                  <span className="font-semibold text-[var(--primary-color)] mb-1 sm:mb-0">User ID:</span>
                  <span className="text-gray-700 font-mono bg-gray-50 px-3 py-1 rounded">[Your Unique User ID]</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-3 border-b border-gray-200">
                  <span className="font-semibold text-[var(--primary-color)] mb-1 sm:mb-0">Last Updated:</span>
                  <span className="text-gray-700">1/25/2025, 5:57:07 PM</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-3">
                  <span className="font-semibold text-[var(--primary-color)] mb-1 sm:mb-0">Password:</span>
                  <span className="text-gray-700 font-mono bg-gray-50 px-3 py-1 rounded">
                    [Your Temporary Password]
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Next Steps */}
          <section className="animate-fade-in-right delay-300">
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 h-full">
              <h3 className="text-2xl sm:text-3xl font-bold text-[var(--primary-color)] mb-6 sm:mb-8">Next Steps</h3>
              <div className="space-y-6 sm:space-y-8">
                {[
                  {
                    number: "1",
                    title: "Login to Your Account",
                    subtitle: "Platform Access:",
                    description: "Use the User ID and Password provided above to access your account.",
                  },
                  {
                    number: "2",
                    title: "Complete Your Profile",
                    subtitle: "",
                    description:
                      "After logging in, please complete your buyer profile by updating your business details, product offerings, and certifications. This will ensure your account is fully activated.",
                  },
                  {
                    number: "3",
                    title: "Access Dashboard",
                    subtitle: "",
                    description:
                      "Your personalized dashboard will provide insights into your partnership journey, including access to analytics, sales data, and communications.",
                  },
                ].map((step, index) => (
                  <div
                    key={index}
                    className={`flex items-start space-x-4 p-4 rounded-xl transition-all duration-300 cursor-pointer ${
                      hoveredStep === index ? "bg-[var(--secondary-light-color)] shadow-md" : "hover:bg-gray-50"
                    }`}
                    onMouseEnter={() => setHoveredStep(index)}
                    onMouseLeave={() => setHoveredStep(null)}
                  >
                    <div
                      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-white transition-colors duration-300 ${
                        hoveredStep === index ? "bg-[var(--secondary-color)]" : "bg-[var(--primary-color)]"
                      }`}
                    >
                      {step.number}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-[var(--primary-color)] mb-1">{step.title}</h4>
                      {step.subtitle && (
                        <p className="font-semibold text-[var(--primary-light-text-color)] text-sm mb-2">
                          {step.subtitle}
                        </p>
                      )}
                      <p className="text-gray-700 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* Action Buttons */}
        <section className="animate-fade-in-up delay-400">
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-[var(--primary-color)] mb-4">Begin Your Journey</h3>
              <p className="text-gray-600">Ready to start your partnership with De Koshur Crafts?</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 max-w-2xl mx-auto">
              <button className="flex-1 bg-[var(--primary-color)] hover:bg-[var(--primary-hover-color)] text-white font-bold py-4 px-6 sm:px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg text-base sm:text-lg">
                Login to Dashboard
              </button>
              <button className="flex-1 border-2 border-[var(--secondary-color)] text-[var(--secondary-color)] hover:bg-[var(--secondary-color)] hover:text-white font-bold py-4 px-6 sm:px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg text-base sm:text-lg">
                Contact Support
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center mt-12 sm:mt-16 py-6 sm:py-8 border-t border-gray-200">
          <p className="text-gray-600 mb-4">Questions? Our partnership team is here to help.</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-8">
            <a
              href="mailto:partnerships@dekoshur.com"
              className="text-[var(--primary-color)] hover:text-[var(--primary-hover-color)] font-medium transition-colors duration-200"
            >
              partnerships@dekoshur.com
            </a>
            <a
              href="tel:+1-800-DEKOSHUR"
              className="text-[var(--primary-color)] hover:text-[var(--primary-hover-color)] font-medium transition-colors duration-200"
            >
              +1-800-DEKOSHUR
            </a>
          </div>
        </footer>
      </main>
    </div>
  )
}
