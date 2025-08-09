"use client"

import { useState, useEffect } from "react"
import {
  Check,
  ShoppingCart,
  Home,
  Building,
  Plane,
  Store,
  Warehouse,
  Handshake,
  AlertCircle,
  XCircle,
  CheckCircle,
} from "lucide-react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import { Pagination } from "swiper/modules"
import RecSquareSection from "../Section/RecSquareSection"
import Accordion from "../Material/Accordion"
import SectionFaq from "../Section/SectionFaq"// Corrected path
import CostComparisonResponsive from "./CostComparsion"
import { useGlobalContext } from "../../context/ScreenProvider"

// Define types for all the data structures
export interface ServiceCard {
  title: string
  description: string
  icon: keyof typeof serviceIconMap
  featured: boolean
}

export interface AccordionItem {
  id: string
  title: string
  content: string
  icon: string
}

export interface HexagonalAdvantage {
  number: string
  title: string
  description: string
  color: string
}
export interface PlatformEntry {
  name: string
  value: string
  isOurPlatform: boolean
}

export interface CostComparisonItem {
  feature: string
  platforms: {
    deKoshurCrafts: PlatformEntry
    eprolo: PlatformEntry
    modalyst: PlatformEntry
    spocket: PlatformEntry
    cjdropshipping: PlatformEntry
  }
}
export interface PricingPlan {
  name: string
  price: {
    monthly: number
    yearly: number
  }
  earlyAdopters: string
  features: string[]
  popular: boolean
  description: string
}

export interface FaqItem {
  title: string
  desc: string
}

export interface HomePageProps {
  heroTitle: string
  heroDescription: string
  accordionData: AccordionItem[]
  comparisonData: CostComparisonItem[]
  hexagonalAdvantages: HexagonalAdvantage[]
  costComparison: CostComparisonItem[]
  pricingPlans: PricingPlan[]
  faqs: FaqItem[]
  serviceCards: ServiceCard[]
}

const serviceIconMap = {
  shoppingCart: ShoppingCart,
  home: Home,
  building: Building,
  plane: Plane,
  store: Store,
  warehouse: Warehouse,
  handshake: Handshake,
}

export default function InsidePartnership({
  heroTitle = "Swift Partnership Activation",
  heroDescription,
  accordionData,
  comparisonData,
  hexagonalAdvantages,
  costComparison,
  pricingPlans,
  faqs,
  serviceCards,
}: HomePageProps) {
  const [isYearly, setIsYearly] = useState(false)
  const [expandedItems, setExpandedItems] = useState<number[]>([0])
  const { is4K } = useGlobalContext()

  const toggleExpanded = (index: number) => {
    setExpandedItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in")
        }
      })
    }, observerOptions)

    const animatedElements = document.querySelectorAll(".animate-on-scroll")
    animatedElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
  const getPerformanceIcon = (level: string) => {
    switch (level) {
      case "excellent":
        return <CheckCircle className="w-4 h-4 text-green-600" />
      case "good":
        return <CheckCircle className="w-4 h-4 text-blue-600" />
      case "moderate":
        return <AlertCircle className="w-4 h-4 text-yellow-600" />
      case "limited":
        return <AlertCircle className="w-4 h-4 text-orange-600" />
      case "poor":
        return <XCircle className="w-4 h-4 text-red-600" />
      default:
        return <AlertCircle className="w-4 h-4 text-gray-600" />
    }
  }

  const getPerformanceColor = (level: string) => {
    switch (level) {
      case "excellent":
        return "bg-green-50 border-green-200"
      case "good":
        return "bg-blue-50 border-blue-200"
      case "moderate":
        return "bg-yellow-50 border-yellow-200"
      case "limited":
        return "bg-orange-50 border-orange-200"
      case "poor":
        return "bg-red-50 border-red-200"
      default:
        return "bg-gray-50 border-gray-200"
    }
  }

  return (
    <div
      className="min-h-screen bg-[var(--background)] text-[var(--foreground)]"
      style={{ fontSize: is4K ? "1.125rem" : "1rem" }} // Base font size adjustment for 4K
    >
      {/* Hero Section */}
      <section
        className="py-16 px-4"
        style={{ paddingLeft: is4K ? "8rem" : "1rem", paddingRight: is4K ? "8rem" : "1rem" }}
      >
        <RecSquareSection title={heroTitle} description={heroDescription} />
      </section>

      {/* Key Features Accordion */}
      <section
        className="py-16 px-4 bg-[var(--white)]"
        style={{ paddingLeft: is4K ? "6rem" : "1rem", paddingRight: is4K ? "8rem" : "1rem" }}
      >
        <div className="max-w-7xl mx-auto" style={{ maxWidth: is4K ? "2000px" : "1280px" }}>
          <h2 className="text-4xl font-bold text-center mb-12 text-[var(--primary-dark-slate)] animate-on-scroll">
            Key Features
          </h2>
          <Accordion data={accordionData} />
        </div>
      </section>
      {/* Comparison Section */}
      <section
        className="py-12 px-4"
        style={{ paddingLeft: is4K ? "6rem" : "1rem", paddingRight: is4K ? "8rem" : "1rem" }}
      >
        <h2 className="text-2xl md:text-4xl xl:text-5xl font-extrabold text-center mb-10 text-[var(--primary-color)]">
          Platform Features
        </h2>
        <CostComparisonResponsive costComparison={comparisonData} />
      </section>
      {/* Advantages Section (Hexagonal Design) */}
      <section
        className="py-16 px-4 bg-white"
        style={{ paddingLeft: is4K ? "8rem" : "1rem", paddingRight: is4K ? "8rem" : "1rem" }}
      >
        <div className="max-w-6xl mx-auto" style={{ maxWidth: is4K ? "1800px" : "1152px" }}>
          <h2 className="text-4xl font-bold text-center mb-16 text-[var(--primary-dark-slate)] animate-on-scroll">
            Advantages
          </h2>
          {/* First Row of Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {hexagonalAdvantages.slice(0, 4).map((item, index) => (
              <div key={index} className="text-center animate-on-scroll" style={{ animationDelay: `${index * 0.1}s` }}>
                <div
                  className="h-full flex flex-col justify-between p-6 border-2 border-[var(--primary-color)] rounded-lg shadow-lg
  transition-all duration-300 ease-in-out hover:scale-[1.03] hover:shadow-xl group bg-white"
                >
                  <div className="flex flex-col items-center p-0">
                    {/* Generic Logo/Icon Container - using item.color for background */}
                    <div
                      className={`w-20 h-20 flex items-center justify-center ${item.color} text-[var(--primary-header-color)] rounded-full mb-6 shadow-md
  transition-all duration-300 ease-in-out group-hover:scale-110`}
                    >
                      {/* Generic placeholder SVG for "logo" */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-10 h-10"
                      >
                        {/* A simple abstract shape or star as a placeholder logo */}
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                      </svg>
                    </div>
                    {/* Title */}
                    <h3 className="text-xl font-bold mb-3 text-[var(--primary-dark-slate)] group-hover:text-[var(--primary-color)] transition-colors duration-300">
                      {item.title}
                    </h3>
                    {/* Description */}
                    <p className="text-[var(--primary-light-text-color)] text-left px-1 md:text-center lg:text-center text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Second Row of Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {hexagonalAdvantages.slice(4, 8).map((item, index) => (
              <div
                key={index + 4}
                className="text-center animate-on-scroll"
                style={{ animationDelay: `${(index + 4) * 0.1}s` }}
              >
                <div
                  className="h-full flex flex-col justify-between p-6 border-2 border-[var(--primary-color)] rounded-lg shadow-lg
  transition-all duration-300 ease-in-out hover:scale-[1.03] hover:shadow-xl group bg-white"
                >
                  <div className="flex flex-col items-center p-0">
                    {/* Generic Logo/Icon Container - using item.color for background */}
                    <div
                      className={`w-20 h-20 flex items-center justify-center ${item.color} text-[var(--primary-header-color)] rounded-full mb-6 shadow-md
  transition-all duration-300 ease-in-out group-hover:scale-110`}
                    >
                      {/* Generic placeholder SVG for "logo" */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-10 h-10"
                      >
                        {/* A simple abstract shape or star as a placeholder logo */}
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                      </svg>
                    </div>
                    {/* Title */}
                    <h3 className="text-xl font-bold mb-3 text-[var(--primary-dark-slate)] group-hover:text-[var(--primary-color)] transition-colors duration-300">
                      {item.title}
                    </h3>
                    {/* Description */}
                    <p className="text-left px-1 md:text-center lg:text-center text-[var(--primary-light-text-color)] text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-12 px-4"
        style={{ paddingLeft: is4K ? "8rem" : "1rem", paddingRight: is4K ? "8rem" : "1rem" }}
      >
        <h2 className="text-2xl md:text-4xl font-extrabold text-center mb-10 text-[var(--primary-color)]">
          Cost Comparison with Other Platforms
        </h2>
        <CostComparisonResponsive costComparison={comparisonData} />
      </section>

      {/* Pricing Section */}
      <section
        className="py-16 px-4 bg-[var(--white)]"
        style={{ paddingLeft: is4K ? "8rem" : "1rem", paddingRight: is4K ? "8rem" : "1rem" }}
      >
        <div className="max-w-7xl mx-auto" style={{ maxWidth: is4K ? "2000px" : "1280px" }}>
          <div className="text-center mb-16">
            <h2 className="text-4xl  font-bold mb-4 text-[var(--primary-color)] animate-on-scroll">
              Zero Fees for 2025 Drop-Shipping
            </h2>
            <p className="text-left px-1 md:text-center lg:text-center text-xl text-[var(--primary-light-text-color)] mb-2">
              Tailored Plans for Every Stage of Your Growth Journey
            </p>
            <p className="text-left px-1 md:text-center lg:text-center text-lg text-[var(--foreground)] mb-2">
              Empowering Artisans & Businesses with Flexible Plans
            </p>
            <p className="text-left px-1 md:text-center lg:text-center text-base text-[var(--primary-light-text-color)]">
              From Starter to Premium, Unlock Exclusive Benefits at Every Step
            </p>
          </div>

          <div className="flex justify-center mb-12 animate-on-scroll">
            <div className="bg-[var(--background)] p-1 rounded-lg flex">
              <button
                className={`px-6 py-2 rounded-md transition-all duration-200 font-semibold ${
                  !isYearly
                    ? "bg-[var(--primary-color)] shadow-sm text-[var(--primary-header-color)]"
                    : "text-[var(--primary-light-text-color)] hover:bg-gray-200"
                }`}
                onClick={() => setIsYearly(false)}
              >
                Monthly
              </button>
              <button
                className={`px-6 py-2 rounded-md transition-all duration-200 font-semibold ${
                  isYearly
                    ? "bg-[var(--primary-color)] shadow-sm text-[var(--primary-header-color)]"
                    : "text-[var(--primary-light-text-color)] hover:bg-gray-200 "
                }`}
                onClick={() => setIsYearly(true)}
              >
                Yearly
              </button>
            </div>
          </div>

          <div className="block lg:hidden my-slide">
            <Swiper
              modules={[Pagination]}
              spaceBetween={16} // gap between slides
              pagination={{ clickable: true }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  slidesPerGroup: 1, // slide 1 at a time
                },
                640: {
                  slidesPerView: 2,
                  slidesPerGroup: 2, // slide 2 at a time
                },
              }}
            >
              {pricingPlans.map((plan, index) => (
                <SwiperSlide key={index}>
                  <div
                    className={`relative bg-[var(--white)] rounded-lg shadow-lg p-8 transition-all duration-300 transform hover:scale-105 hover:shadow-xl animate-on-scroll border-2 ${
                      plan.popular
                        ? "border-[var(--primary-color)] ring-2 ring-[var(--primary-color)]"
                        : "border-[var(--primary-header-color)]"
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-[var(--primary-color)] text-[var(--white)] px-4 py-1 rounded-full text-sm font-semibold">
                          Most Popular
                        </span>
                      </div>
                    )}
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-[var(--primary-dark-slate)] mb-2">{plan.name}</h3>
                      <p className="text-sm text-[var(--foreground)] mb-4">{plan.description}</p>
                      <div className="mb-4">
                        <span className="text-4xl font-bold text-[var(--primary-color)]">
                          ${isYearly ? plan.price.yearly : plan.price.monthly}
                        </span>
                        <span className="text-[var(--primary-light-text-color)]">/{isYearly ? "year" : "month"}</span>
                      </div>
                      <div className="bg-[var(--secondary-light-color)] px-3 py-1 rounded-full inline-block">
                        <span className="text-sm font-semibold text-[var(--secondary-color)]">
                          Early Adopters ({plan.earlyAdopters})
                        </span>
                      </div>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-[var(--foreground)] text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button className="w-full py-3 rounded-lg font-semibold transition-all duration-200 bg-[var(--primary-color)] hover:bg-[var(--primary-header-color)] text-gray-200">
                      Get Started
                    </button>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-[var(--white)] rounded-lg shadow-lg p-8 transition-all duration-300 transform hover:scale-105 hover:shadow-xl animate-on-scroll border-2 ${
                  plan.popular
                    ? "border-[var(--primary-color)] ring-2 ring-[var(--primary-color)]"
                    : "border-[var(--primary-header-color)]"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-[var(--primary-color)] text-[var(--white)] px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-center mb-2">{plan.name}</h3>
                  <p className="text-sm text-[var(--foreground)] mb-4">{plan.description}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-[var(--primary-color)]">
                      ${isYearly ? plan.price.yearly : plan.price.monthly}
                    </span>
                    <span className="text-[var(--primary-light-text-color)]">/{isYearly ? "year" : "month"}</span>
                  </div>
                  <div className="bg-[var(--secondary-light-color)] px-3 py-1 rounded-full inline-block">
                    <span className="text-sm font-semibold text-[var(--secondary-color)]">
                      Early Adopters ({plan.earlyAdopters})
                    </span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-[var(--foreground)] text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full py-3 rounded-lg font-semibold transition-all duration-200 bg-[var(--primary-color)] hover:bg-[var(--primary-hover-color)] text-[var(--white)]">
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        className="py-16 px-4 bg-[var(--background)]"
        style={{ paddingLeft: is4K ? "8rem" : "1rem", paddingRight: is4K ? "8rem" : "1rem" }}
      >
        <SectionFaq
          subTitle="SUPPORT CENTER"
          sectionTitle="Frequently Asked Questions"
          faqTitle="Complete <span>Guide</span>"
          faqContent="Find answers to common questions about our drop shipping and private label services"
          faqItems={faqs}
        />
      </section>

      {/* Our Services Section (moved to bottom) */}
      <section
        className="py-16 px-4 bg-[var(--background)]"
        style={{ paddingLeft: is4K ? "8rem" : "1rem", paddingRight: is4K ? "8rem" : "1rem" }}
      >
        <div className="max-w-6xl mx-auto" style={{ maxWidth: is4K ? "2000px" : "1152px" }}>
          <h2 className="text-4xl font-bold text-center mb-16 text-[var(--primary-dark-slate)] animate-on-scroll">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 ">
            {serviceCards.map((service, index) => (
              <div
                key={index}
                className={`relative p-6 rounded-2xl transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl animate-on-scroll group ${
                  service.featured
                    ? "bg-[var(--primary-color)] text-[var(--white)]"
                    : "bg-[var(--white)] text-[var(--primary-dark-slate)] hover:shadow-lg border"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon Circle */}
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto ${
                    service.featured
                      ? "bg-[var(--white)] text-[var(--secondary-color)]"
                      : "bg-[var(--secondary-light-color)] text-[var(--secondary-color)]"
                  } transition-all duration-300`}
                >
                  {(() => {
                    const IconComponent = serviceIconMap[service.icon]
                    return IconComponent ? <IconComponent className="w-8 h-8" /> : null
                  })()}
                </div>
                {/* Title */}
                <h3
                  className={`text-xl font-bold mb-4 text-center ${
                    service.featured ? "text-[var(--white)]" : "text-[var(--primary-dark-slate)]"
                  }`}
                >
                  {service.title}
                </h3>
                {/* Description */}
                <p
                  className={`text-left px-2 md:text-center lg:text-center text-sm leading-relaxed text-center mb-6 ${
                    service.featured ? "text-[var(--white)] opacity-90" : "text-[var(--foreground)]"
                  }`}
                >
                  {service.description}
                </p>
                {/* Special indicator for featured card */}

                {service.featured && (
                  <p className="text-md text-[var(--secondary-color)] mb-1 font-bold text-left px-1 md:text-center lg:text-center">You are currently here</p>
                )}

                {/* Read More Button */}
                <div className="text-center">
                  <button
                    className={`inline-flex items-center font-semibold text-sm transition-all duration-300  ${
                      service.featured
                        ? "text-[var(--white)] hover:text-[var(--secondary-hover-color)]"
                        : "text-[var(--primary-color)]  hover:text-[var(--secondary-color)]"
                    }`}
                  >
                    READ MORE
                    <svg
                      className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Call to Action Banner */}
      <section
        className="py-12 mb-1 px-4 bg-[var(--primary-color)] text-[var(--primary-header-color)] animate-on-scroll"
        style={{ paddingLeft: is4K ? "8rem" : "1rem", paddingRight: is4K ? "8rem" : "1rem" }}
      >
        <div className="max-w-7xl mx-auto text-center" style={{ maxWidth: is4K ? "2000px" : "1280px" }}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">Ready to Partner with Us?</h2>
          <p className="text-left px-3 md:text-center lg:text-center text-base sm:text-lg md:text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Join our network of successful businesses. Register today or book an appointment to discuss your needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              className="px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300
                           bg-[var(--secondary-color)] hover:bg-[var(--secondary-hover-color)] text-[var(--primary-header-color)]
                           shadow-md hover:shadow-lg transform hover:-translate-y-1"
            >
              Register Now
            </button>
            <button
              className="px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300
                           border-2 border-[var(--primary-header-color)] text-[var(--primary-header-color)]
                           hover:bg-[var(--primary-hover-color)] hover:border-[var(--primary-hover-color)]
                           shadow-md hover:shadow-lg transform hover:-translate-y-1"
            >
              Book Appointment
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
