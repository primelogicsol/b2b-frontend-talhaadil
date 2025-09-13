"use client"

import { useState, useEffect } from "react"
import { Key, BarChart, Truck, Briefcase, Check } from "lucide-react"
import { useGlobalContext } from "../../context/ScreenProvider"
import Image from "next/image"
import { getUserRegistrationSelected } from "@/services/user"
import Cookies from "js-cookie"

// Partnership type mapping
const partnershipTypeMapping: { [key: string]: string } = {
  drop_shipping: "Drop Shipping Buyer Partnership",
  consignment: "Consignment Buyer Partnership",
  import_export: "Import Export Buyer Partnership",
  wholesale: "Wholesale Partnership",
  exhibition: "Exhibition Buyer Partnership",
  auction: "Auction Partnership",
  white_label: "White Label Partnership",
  brick_mortar: "Brick & Mortar Buyer Partnership",
  design_collaboration: "Design Collaboration Partnership",
  storytelling: "Storytelling Partnership",
  warehouse: "Warehouse Partnership",
  packaging: "Packaging Partnership",
  logistics: "Logistics Partnership",
  museum_institutional: "Museum Institutional Partnership",
  ngo_government: "NGO Government Partnership",
  technology_partnership: "Technology Partnership",
}

export default function FinalActivation() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null)
  const [partnershipName, setPartnershipName] = useState<string>("Drop Shipping Buyer Partnership") // Default
  const { is4K } = useGlobalContext()
  const role = Cookies.get("user_role");

  // Fetch partnership type on component mount
  useEffect(() => {
    const fetchPartnershipType = async () => {
      try {
        const response = await getUserRegistrationSelected()
        const partnershipType = response.data.registration_selected[
          response.data.registration_selected.length - 1
        ]?.toLowerCase() || "drop_shipping"
        const mappedName = partnershipTypeMapping[partnershipType] || "Drop Shipping Buyer Partnership"
        setPartnershipName(mappedName)
      } catch (error) {
        console.error("Error fetching partnership type:", error)
        setPartnershipName("Drop Shipping Buyer Partnership") // Fallback
      }
    }

    fetchPartnershipType()
  }, [])

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

            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[var(--secondary-light-color)] rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-slow">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[var(--secondary-color)] rounded-full flex items-center justify-center">
                <Check className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--primary-color)] mb-4 sm:mb-6">
              Welcome to Your Partnership Activation!
            </h2>
            <p className="text-lg sm:text-xl text-[var(--primary-light-text-color)] mb-6 sm:mb-8">
              {partnershipName}
            </p>
          </div>
        </section>

        {/* Welcome Message */}
        <section className="mb-12 sm:mb-16 animate-fade-in-up delay-100">
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 lg:p-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-[var(--primary-color)] mb-6">Dear {role} Partner,</h3>
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
              <Image src="/images/signature.png" alt="Partnership Activation" width={350} height={350} className="-mt-8" />
            </div>
          </div>
        </section>

        {/* Partnership Level Badge */}
        <section className="mb-12 sm:mb-16 animate-fade-in-up delay-150">
          <div className="bg-gradient-to-r from-[var(--secondary-light-color)] to-white rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10 border border-[var(--secondary-color)]/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--secondary-color)]/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-[var(--primary-color)]/10 rounded-full translate-y-12 -translate-x-12"></div>

            <div className="relative z-10">
              <div className="text-center mb-6 sm:mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-[var(--secondary-color)] rounded-full mb-4 sm:mb-6 animate-pulse-slow">
                  <Check className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[var(--primary-color)] mb-2 sm:mb-3">
                  Your Partnership Level
                </h3>
              </div>

              <div className="text-center">
                <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 mb-4 sm:mb-6 border-2 border-[var(--secondary-color)]/30 hover:border-[var(--secondary-color)] transition-all duration-300 hover:shadow-xl">
                  <h4 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--secondary-color)] mb-3 sm:mb-4 leading-tight">
                    DKC {partnershipName}
                  </h4>
                  <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4">
                   
                   
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


        {/* Action Buttons */}
        <section className="animate-fade-in-up delay-400">
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-[var(--primary-color)] mb-4">Begin Your Journey</h3>
              <p className="text-gray-600">Ready to start your partnership with De Koshur Crafts?</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 max-w-2xl mx-auto">
              <button onClick={
                () => window.location.href = '/user/profile'
              } className="flex-1 bg-[var(--primary-color)] hover:bg-[var(--primary-hover-color)] text-white font-bold py-4 px-6 sm:px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg text-base sm:text-lg">
                Access Dashboard 
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