'use client'
import type React from "react"
import {
  Shield,
  Globe,
  Package,
  Camera,
  Megaphone,
  Store,
  Code,
  Users,
  TrendingUp,
  ShoppingCart,
  FileText,
  Truck,
  Building,
  Calendar,
  Gavel,
  Tag,
  Home,
  Lightbulb,
  Video,
  GraduationCap,
  Wrench,
  DollarSign,
  LibraryIcon as Museum,
  Heart,
  BarChart3,
} from "lucide-react"
import { useGlobalContext } from "@/context/ScreenProvider" // Import useGlobalContext
import Link from "next/link"

interface PartnershipBenefit {
  title: string
  description: string
}

interface PartnershipTier {
  title: string
  description: string
  details: string
  kpi: string
  retention: string
  link: string
}

interface TierAdvancement {
  tier: string
  fromTier: string
  retention: string
  kpiThreshold: string
}

type PartnershipCategory = {
  title: string
  items: { title: string }[]
}

export interface PartnershipPageProps {
  title: string
  subtitle: string
  categories: PartnershipCategory[]
  // Vendor Partnership Section
  vendorTitle: string
  vendorSubtitle: string
  vendorIntro: string
  vendorBenefits: PartnershipBenefit[]

  // Buyer Partnership Section
  buyerTitle: string
  buyerTagline: string
  buyerDescription: string

  // Partnership Categories
  Title: string
  Description: string
  Partnerships: PartnershipTier[]

  // Tier Advancement
  tierAdvancementTitle: string
  tierAdvancements: TierAdvancement[]
}

export const PartnershipPage: React.FC<PartnershipPageProps> = ({
  vendorTitle,
  vendorSubtitle,
  vendorIntro,
  vendorBenefits,
  buyerTitle,
  buyerTagline,
  buyerDescription,
  Title,
  Description,
  Partnerships,

  tierAdvancementTitle,
  tierAdvancements,
  title,
  subtitle,
  categories,
}) => {
  const { is4K } = useGlobalContext() // Use the hook here

  const PartnershipCard: React.FC<{
    partnership: PartnershipTier
    index: number
  }> = ({ partnership, index }) => {
    const getIcon = (title: string) => {
      const iconMap: { [key: string]: any } = {
        "Drop Shipping Buyer": ShoppingCart,
        "Consignment Buyer": FileText,
        "Import Buyer": Truck,
        "Wholesale & Distribution Buyer": Building,
        "Exhibition Buyer & Event Organizer": Calendar,
        "Auction & Bidding Buyer": Gavel,
        "White-Label Buyer": Tag,
        "Brick & Mortar Space-Sharing Buyer": Home,
        "Knowledge & Design Partner": Lightbulb,
        "Storytelling & Media Partner": Video,
        "Buyer Mentorship Program": GraduationCap,
        "Craft Innovation Patron": Wrench,
        "Strategic Investor Buyer": DollarSign,
        "Museum/Institutional Buyer": Museum,
        "NGO & Government Buyer": Heart,
        "Impact Measurement Buyer": BarChart3,
      }
      const IconComponent = iconMap[title] || ShoppingCart
      return <IconComponent className={is4K ? "w-10 h-10 text-white" : "w-8 h-8 text-white"} /> // Increased icon size
    }

    return (
<div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white via-gray-50 to-white border border-gray-200 hover:border-[var(--primary-color)] transition-all duration-500 hover:shadow-2xl hover:shadow-[var(--primary-color)]/20 transform hover:-translate-y-2">
  <Link href={partnership.link} className="block h-full">
    <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-color)]/5 via-transparent to-[var(--secondary-color)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    <div className={is4K ? "relative p-10" : "relative p-8"}>
      <div className="flex items-start justify-between mb-6">
        <div
          className={
            is4K
              ? "w-20 h-20 rounded-2xl bg-gradient-to-br from-[var(--primary-color)] to-[var(--primary-hover-color)] flex items-center justify-center shadow-lg"
              : "w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--primary-color)] to-[var(--primary-hover-color)] flex items-center justify-center shadow-lg"
          }
        >
          {getIcon(partnership.title)}
        </div>
        <div className="flex gap-2">
          <span
            className={
              is4K
                ? "px-6 py-3 bg-gradient-to-r from-[var(--secondary-color)] to-[var(--secondary-color)]/80 text-white text-base font-bold rounded-full shadow-lg"
                : "px-4 py-2 bg-gradient-to-r from-[var(--secondary-color)] to-[var(--secondary-color)]/80 text-white text-xs font-bold rounded-full shadow-lg"
            }
          >
            {partnership.kpi}
          </span>
        </div>
      </div>

      <h3
        className={
          is4K
            ? "text-3xl font-bold text-[var(--primary-color)] mb-5 group-hover:text-[var(--primary-hover-color)] transition-colors duration-300"
            : "text-2xl font-bold text-[var(--primary-color)] mb-4 group-hover:text-[var(--primary-hover-color)] transition-colors duration-300"
        }
      >
        {partnership.title}
      </h3>

      <p
        className={
          is4K
            ? "text-gray-700 mb-8 leading-relaxed text-xl font-medium"
            : "text-gray-700 mb-6 leading-relaxed text-lg font-medium"
        }
      >
        {partnership.description}
      </p>

      <p className={is4K ? "text-gray-600 mb-8 leading-relaxed text-lg" : "text-gray-600 mb-6 leading-relaxed"}>
        {partnership.details}
      </p>

      <div className="flex flex-wrap gap-3">
        <span
          className={
            is4K
              ? "px-6 py-3 bg-gradient-to-r from-[var(--secondary-light-color)] to-[var(--secondary-light-color)]/70 text-[var(--secondary-color)] rounded-full font-semibold text-base shadow-md"
              : "px-4 py-2 bg-gradient-to-r from-[var(--secondary-light-color)] to-[var(--secondary-light-color)]/70 text-[var(--secondary-color)] rounded-full font-semibold text-sm shadow-md"
          }
        >
          {partnership.retention}
        </span>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--primary-color)] via-[var(--secondary-color)] to-[var(--primary-color)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
    </div>
  </Link>
</div>
    )
  }

  const BenefitCard: React.FC<{
    benefit: PartnershipBenefit
    index: number
  }> = ({ benefit, index }) => {
    const getIcon = (index: number) => {
      const icons = [Shield, Globe, Package, Camera, Megaphone, Store, Code, Users, TrendingUp]
      const IconComponent = icons[index] || Shield
      return <IconComponent className={is4K ? "w-10 h-10 text-white" : "w-8 h-8 text-white"} /> // Increased icon size
    }

    return (
      <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:border-[var(--secondary-color)] transition-all duration-500 hover:shadow-2xl hover:shadow-[var(--secondary-color)]/20 transform hover:-translate-y-3">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--secondary-color)]/10 via-transparent to-[var(--primary-color)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        <div className={is4K ? "relative p-10" : "relative p-8"}>
          {" "}
          {/* Increased padding */}
          <div
            className={
              is4K
                ? "w-24 h-24 rounded-3xl bg-gradient-to-br from-[var(--secondary-color)] to-[var(--secondary-color)]/80 flex items-center justify-center mb-8 shadow-xl group-hover:scale-110 transition-transform duration-500"
                : "w-20 h-20 rounded-3xl bg-gradient-to-br from-[var(--secondary-color)] to-[var(--secondary-color)]/80 flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform duration-500"
            }
          >
            {" "}
            {/* Increased size */}
            {getIcon(index)}
          </div>
          <h3
            className={
              is4K
                ? "text-2xl font-bold text-[var(--primary-color)] mb-5 group-hover:text-[var(--secondary-color)] transition-colors duration-300"
                : "text-xl font-bold text-[var(--primary-color)] mb-4 group-hover:text-[var(--secondary-color)] transition-colors duration-300"
            }
          >
            {" "}
            {/* Increased font size */}
            {benefit.title}
          </h3>
          <p
            className={
              is4K
                ? "text-gray-700 leading-relaxed text-lg group-hover:text-gray-800 transition-colors duration-300"
                : "text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors duration-300"
            }
          >
            {" "}
            {/* Increased font size */}
            {benefit.description}
          </p>
          <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gradient-to-br from-[var(--primary-color)]/20 to-[var(--secondary-color)]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
      </div>
    )
  }

  const SectionHeader: React.FC<{
    title: string
    description: string
    accent?: boolean
  }> = ({ title, description, accent = false }) => (
    <div className={is4K ? "text-center mb-24 px-6" : "text-center mb-20 px-2 lg:px-4"}>
      {" "}
      {/* Increased margin and padding */}
      <div className="relative inline-block">
        <h2
          className={
            is4K
              ? "text-5xl md:text-7xl font-black mb-8 text-[var(--primary-color)]"
              : "text-4xl md:text-6xl font-black mb-6 text-[var(--primary-color)]"
          }
        >
          {" "}
          {/* Increased font size */}
          {title}
        </h2>
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-[var(--secondary-color)] to-[var(--primary-color)] rounded-full"></div>
      </div>
      <p
        className={
          is4K
            ? "text-2xl text-gray-700 max-w-5xl mx-auto leading-relaxed mt-10 font-medium"
            : "text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mt-8 font-medium text-left lg:text-center"
        }
      >
        {" "}
        {/* Increased font size and max-width */}
        {description}
      </p>
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Vendor Benefits Section */}
      <section
        className={is4K ? "py-32 px-16 relative overflow-hidden" : "py-24 px-6 lg:px-12 relative overflow-hidden"}
      >
        {" "}
        {/* Increased padding */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-color)]/5 via-transparent to-[var(--secondary-color)]/5"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[var(--primary-color)]/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[var(--secondary-color)]/10 to-transparent rounded-full blur-3xl"></div>
        <div className={is4K ? "max-w-[1800px] mx-auto relative" : "max-w-7xl mx-auto relative"}>
          {" "}
          {/* Increased max-width */}
          <SectionHeader title={vendorTitle} description={vendorIntro} accent={true} />
          <div
            className={
              is4K
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16"
                : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
            }
          >
            {" "}
            {/* Increased gap */}
            {vendorBenefits.map((benefit, index) => (
              <BenefitCard key={index} benefit={benefit} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Buyer Partnership Marketplace */}
      <section
        className={
          is4K
            ? "py-32 px-16 bg-gradient-to-br from-[var(--primary-color)] via-[var(--primary-hover-color)] to-[var(--primary-color)] text-white relative overflow-hidden"
            : "py-24 px-6 lg:px-12 bg-gradient-to-br from-[var(--primary-color)] via-[var(--primary-hover-color)] to-[var(--primary-color)] text-white relative overflow-hidden"
        }
      >
        {" "}
        {/* Increased padding */}
        <div className="absolute inset-0 opacity-30">
          <div className="w-full h-full bg-white/5 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
            <div className="absolute top-0 left-0 w-2 h-2 bg-white/20 rounded-full"></div>
            <div className="absolute top-10 left-20 w-1 h-1 bg-white/15 rounded-full"></div>
            <div className="absolute top-20 left-10 w-1.5 h-1.5 bg-white/10 rounded-full"></div>
            <div className="absolute top-5 right-10 w-1 h-1 bg-white/20 rounded-full"></div>
            <div className="absolute top-32 right-20 w-2 h-2 bg-white/15 rounded-full"></div>
            <div className="absolute bottom-10 left-32 w-1 h-1 bg-white/10 rounded-full"></div>
            <div className="absolute bottom-20 right-32 w-1.5 h-1.5 bg-white/20 rounded-full"></div>
          </div>
        </div>
        <div
          className={is4K ? "max-w-[1800px] mx-auto text-center relative" : "max-w-7xl mx-auto text-center relative"}
        >
          {" "}
          {/* Increased max-width */}
          <div className="mb-4">
            <h2
              className={
                is4K
                  ? "text-5xl md:text-8xl font-black mb-10 text-white"
                  : "text-4xl md:text-7xl font-black mb-8 text-white"
              }
            >
              {" "}
              {/* Increased font size */}
              {buyerTitle}
            </h2>
            <div className="relative inline-block">
              <p
                className={
                  is4K
                    ? "text-3xl md:text-4xl font-bold text-[var(--secondary-light-color)] mb-10 italic relative z-10"
                    : "text-2xl md:text-3xl font-bold text-[var(--secondary-light-color)] mb-8 italic relative z-10"
                }
              >
                {" "}
                {/* Increased font size */}"{buyerTagline}"
              </p>
            </div>
            <p
              className={
                is4K
                  ? "text-2xl text-white/90 max-w-6xl mx-auto leading-relaxed font-medium"
                  : "text-xl text-white/90 max-w-5xl mx-auto leading-relaxed font-medium"
              }
            >
              {" "}
              {/* Increased font size and max-width */}
              {buyerDescription}
            </p>
          </div>
        </div>
      </section>

      <section
        className={
          is4K
            ? "w-full py-16 md:py-20 bg-gradient-to-br from-slate-50 to-white"
            : "w-full py-12 md:py-16 bg-gradient-to-br from-slate-50 to-white"
        } // Increased padding
      >
        <div
          className={
            is4K
              ? "container mx-auto px-8 md:px-10 lg:px-12 max-w-[1800px]"
              : "container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl"
          }
        >
          {" "}
          {/* Increased padding and max-width */}
          {/* Header Section */}
          <SectionHeader title={title} description={subtitle} />
          {/* Categories Grid */}
          <div className={is4K ? "grid grid-cols-1 lg:grid-cols-2 gap-10" : "grid grid-cols-1 lg:grid-cols-2 gap-8"}>
            {" "}
            {/* Increased gap */}
            {categories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-[var(--secondary-light-color)]"
              >
                {/* Category Header */}
                <div
                  className={
                    is4K
                      ? "bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-hover-color)] p-8"
                      : "bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-hover-color)] p-6"
                  }
                >
                  {" "}
                  {/* Increased padding */}
                  <h3
                    className={
                      is4K
                        ? "text-2xl md:text-3xl font-bold text-white mb-3"
                        : "text-xl md:text-2xl font-bold text-white mb-2"
                    }
                  >
                    {" "}
                    {/* Increased font size */}
                    {category.title}
                  </h3>
                </div>

                {/* Partnership Items */}
                <div className={is4K ? "p-8 space-y-4" : "p-6 space-y-3"}>
                  {" "}
                  {/* Increased padding and space */}
                  {category.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className={
                        is4K
                          ? "flex items-center space-x-4 p-4 rounded-xl hover:bg-[var(--secondary-light-color)] hover:bg-opacity-20 transition-all duration-300 cursor-pointer"
                          : "flex items-center space-x-3 p-3 rounded-xl hover:bg-[var(--secondary-light-color)] hover:bg-opacity-20 transition-all duration-300 cursor-pointer"
                      } // Increased padding and space
                    >
                      <div
                        className={
                          is4K
                            ? "w-8 h-8 bg-[var(--secondary-color)] text-white rounded-full flex items-center justify-center text-sm font-bold"
                            : "w-6 h-6 bg-[var(--secondary-color)] text-white rounded-full flex items-center justify-center text-xs font-bold"
                        }
                      >
                        {" "}
                        {/* Increased size and font size */}
                        {itemIndex + 1}
                      </div>
                      <h4
                        className={
                          is4K
                            ? "text-lg font-medium text-[var(--primary-color)] hover:text-[var(--primary-hover-color)] transition-colors duration-300"
                            : "text-base font-medium text-[var(--primary-color)] hover:text-[var(--primary-hover-color)] transition-colors duration-300"
                        }
                      >
                        {" "}
                        {/* Increased font size */}
                        {item.title}
                      </h4>
                    </div>
                  ))}
                </div>

                {/* Bottom Accent */}
                <div className="h-2 bg-gradient-to-r from-[var(--secondary-color)] to-[var(--secondary-light-color)] transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Trade Partnerships */}
      <section className={is4K ? "py-32 px-16 relative" : "py-24 px-6 lg:px-12 relative"}>
        {" "}
        {/* Increased padding */}
        <div className={is4K ? "max-w-[1800px] mx-auto" : "max-w-7xl mx-auto"}>
          {" "}
          {/* Increased max-width */}
          <SectionHeader title={Title} description={Description} />
          <div
            className={
              is4K
                ? "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16"
                : "grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
            }
          >
            {" "}
            {/* Increased gap */}
            {Partnerships.map((partnership, index) => (
              <PartnershipCard key={index} partnership={partnership} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section
        className={
          is4K
            ? "py-16 sm:py-20 md:py-24 lg:py-28 px-6 sm:px-8 lg:px-16 bg-gradient-to-br from-[var(--primary-color)] via-[var(--primary-hover-color)] to-[var(--primary-color)] text-white relative overflow-hidden"
            : "py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-12 bg-gradient-to-br from-[var(--primary-color)] via-[var(--primary-hover-color)] to-[var(--primary-color)] text-white relative overflow-hidden"
        }
      >
        {" "}
        {/* Increased padding */}
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full relative">
            <div className="absolute top-4 sm:top-6 md:top-10 left-4 sm:left-6 md:left-10 w-2 sm:w-2.5 md:w-3 h-2 sm:h-2.5 md:h-3 bg-white/20 rounded-full animate-pulse"></div>
            <div className="absolute top-16 sm:top-20 md:top-32 left-16 sm:left-20 md:left-32 w-1.5 sm:w-2 md:w-2 h-1.5 sm:h-2 md:h-2 bg-white/15 rounded-full animate-pulse delay-100"></div>
            <div className="absolute top-8 sm:top-12 md:top-20 right-8 sm:right-12 md:right-20 w-1 sm:w-1.5 md:w-1.5 h-1 sm:h-1.5 md:h-1.5 bg-white/10 rounded-full animate-pulse delay-200"></div>
            <div className="absolute bottom-8 sm:bottom-12 md:bottom-20 left-8 sm:left-12 md:left-20 w-2 sm:w-2.5 md:w-2.5 h-2 sm:h-2.5 md:h-2.5 bg-white/25 rounded-full animate-pulse delay-300"></div>
            <div className="absolute bottom-16 sm:bottom-20 md:bottom-32 right-16 sm:right-20 md:right-32 w-1 h-1 bg-white/15 rounded-full animate-pulse delay-500"></div>
            <div className="absolute top-1/2 left-1/4 w-1.5 sm:w-2 md:w-2 h-1.5 sm:h-2 md:h-2 bg-white/20 rounded-full animate-pulse delay-700"></div>
            <div className="absolute top-1/3 right-1/3 w-1 sm:w-1.5 md:w-1.5 h-1 sm:h-1.5 md:h-1.5 bg-white/10 rounded-full animate-pulse delay-1000"></div>
          </div>
        </div>
        <div className={is4K ? "max-w-[1800px] mx-auto relative" : "max-w-7xl mx-auto relative"}>
          {" "}
          {/* Increased max-width */}
          {/* Title */}
          <div className={is4K ? "text-center mb-10 sm:mb-14 md:mb-18" : "text-center mb-8 sm:mb-12 md:mb-16"}>
            {" "}
            {/* Increased margin */}
            <h3
              className={
                is4K
                  ? "text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-5 sm:mb-7 text-white leading-tight"
                  : "text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 sm:mb-6 text-white leading-tight"
              }
            >
              {" "}
              {/* Increased font size */}
              {tierAdvancementTitle}
            </h3>
          </div>
          {/* Desktop/Tablet Table View */}
          <div className="hidden sm:block overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl backdrop-blur-sm">
            <div className="overflow-x-auto">
              <table className="w-full bg-white/95 backdrop-blur-sm min-w-[600px]">
                <thead className="bg-gradient-to-r from-[var(--secondary-color)] to-[var(--secondary-color)]/80 text-white">
                  <tr>
                    <th
                      className={
                        is4K
                          ? "px-5 sm:px-6 md:px-8 lg:px-10 py-4 sm:py-5 md:py-6 lg:py-7 text-left font-black text-base sm:text-lg md:text-xl"
                          : "px-3 sm:px-4 md:px-6 lg:px-8 py-3 sm:py-4 md:py-5 lg:py-6 text-left font-black text-sm sm:text-base md:text-lg"
                      }
                    >
                      {" "}
                      {/* Increased padding and font size */}
                      Tier
                    </th>
                    <th
                      className={
                        is4K
                          ? "px-5 sm:px-6 md:px-8 lg:px-10 py-4 sm:py-5 md:py-6 lg:py-7 text-left font-black text-base sm:text-lg md:text-xl"
                          : "px-3 sm:px-4 md:px-6 lg:px-8 py-3 sm:py-4 md:py-5 lg:py-6 text-left font-black text-sm sm:text-base md:text-lg"
                      }
                    >
                      {" "}
                      {/* Increased padding and font size */}
                      From Which Tier
                    </th>
                    <th
                      className={
                        is4K
                          ? "px-5 sm:px-6 md:px-8 lg:px-10 py-4 sm:py-5 md:py-6 lg:py-7 text-left font-black text-base sm:text-lg md:text-xl"
                          : "px-3 sm:px-4 md:px-6 lg:px-8 py-3 sm:py-4 md:py-5 lg:py-6 text-left font-black text-sm sm:text-base md:text-lg"
                      }
                    >
                      {" "}
                      {/* Increased padding and font size */}
                      Retention Required
                    </th>
                    <th
                      className={
                        is4K
                          ? "px-5 sm:px-6 md:px-8 lg:px-10 py-4 sm:py-5 md:py-6 lg:py-7 text-left font-black text-base sm:text-lg md:text-xl"
                          : "px-3 sm:px-4 md:px-6 lg:px-8 py-3 sm:py-4 md:py-5 lg:py-6 text-left font-black text-sm sm:text-base md:text-lg"
                      }
                    >
                      {" "}
                      {/* Increased padding and font size */}
                      KPI Threshold
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tierAdvancements.map((advancement, index) => (
                    <tr
                      key={index}
                      className={`${
                        index % 2 === 0 ? "bg-gray-50/80" : "bg-white/80"
                      } hover:bg-[var(--secondary-light-color)]/30 transition-colors duration-300`}
                    >
                      <td
                        className={
                          is4K
                            ? "px-5 sm:px-6 md:px-8 lg:px-10 py-4 sm:py-5 md:py-6 lg:py-7 font-bold text-[var(--primary-color)] text-base sm:text-lg md:text-xl"
                            : "px-3 sm:px-4 md:px-6 lg:px-8 py-3 sm:py-4 md:py-5 lg:py-6 font-bold text-[var(--primary-color)] text-sm sm:text-base md:text-lg"
                        }
                      >
                        {" "}
                        {/* Increased padding and font size */}
                        {advancement.tier}
                      </td>
                      <td
                        className={
                          is4K
                            ? "px-5 sm:px-6 md:px-8 lg:px-10 py-4 sm:py-5 md:py-6 lg:py-7 font-semibold text-gray-700 text-base sm:text-lg"
                            : "px-3 sm:px-4 md:px-6 lg:px-8 py-3 sm:py-4 md:py-5 lg:py-6 font-semibold text-gray-700 text-sm sm:text-base"
                        }
                      >
                        {" "}
                        {/* Increased padding and font size */}
                        {advancement.fromTier}
                      </td>
                      <td
                        className={
                          is4K
                            ? "px-5 sm:px-6 md:px-8 lg:px-10 py-4 sm:py-5 md:py-6 lg:py-7 font-semibold text-gray-700 text-base sm:text-lg"
                            : "px-3 sm:px-4 md:px-6 lg:px-8 py-3 sm:py-4 md:py-5 lg:py-6 font-semibold text-gray-700 text-sm sm:text-base"
                        }
                      >
                        {" "}
                        {/* Increased padding and font size */}
                        {advancement.retention}
                      </td>
                      <td
                        className={
                          is4K
                            ? "px-5 sm:px-6 md:px-8 lg:px-10 py-4 sm:py-5 md:py-6 lg:py-7"
                            : "px-3 sm:px-4 md:px-6 lg:px-8 py-3 sm:py-4 md:py-5 lg:py-6"
                        }
                      >
                        {" "}
                        {/* Increased padding */}
                        <span
                          className={
                            is4K
                              ? "inline-block px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-hover-color)] text-white rounded-full font-bold text-sm sm:text-base shadow-lg"
                              : "inline-block px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-hover-color)] text-white rounded-full font-bold text-xs sm:text-sm shadow-lg"
                          }
                        >
                          {" "}
                          {/* Increased padding and font size */}
                          {advancement.kpiThreshold}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          {/* Mobile Card View */}
          <div className="sm:hidden space-y-4">
            {tierAdvancements.map((advancement, index) => (
              <div
                key={index}
                className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/20"
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-sm font-black text-[var(--primary-color)]">{advancement.tier}</h4>
                  <span className="px-3 py-1 bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-hover-color)] text-white rounded-full font-bold text-[9px] shadow-lg">
                    {advancement.kpiThreshold}
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-semibold text-gray-600">From Tier:</span>
                    <span className="text-sm font-bold text-gray-800">{advancement.fromTier}</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm font-semibold text-gray-600">Retention:</span>
                    <span className="text-sm font-bold text-gray-800">{advancement.retention}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
