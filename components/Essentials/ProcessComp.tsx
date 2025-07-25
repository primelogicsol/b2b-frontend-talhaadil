"use client";

import type React from "react";
import { useState } from "react";
import {
  CheckCircle,
  Globe,
  Zap,
  Shield,
  Handshake,
  ChevronLeft,
  ChevronRight,
  Lightbulb,
  Package,
  Smile,
  Truck,
  Gem,
  ClipboardCheck,
  MessageSquare,
  Banknote,
  Settings,
  FileText,
  Leaf,
  Cpu,
  TrendingUp,
  Award,
  BookOpen,
  ListChecks,
  Store,
  ExternalLink,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import PricingTable from "../Material/PricingTable";

export default function Process() {
  const kpiMetrics = [
    {
      name: "Artisan Engagement",
      description:
        "Assesses vendor efforts in supporting and empowering artisans, ensuring fair wages and opportunities. High scores reflect social responsibility and ethical practices.",
      underachiever: "< 5",
      performer: "6-8",
      leader: "> 8",
      icon: Handshake,
    },
    {
      name: "Risk Management",
      description:
        "Evaluates the vendor’s ability to foresee, mitigate, and address potential risks in operations. Effective risk management ensures continuity and resilience.",
      underachiever: "< 4",
      performer: "5-8",
      leader: "> 8",
      icon: Shield,
    },
    {
      name: "Product Availability",
      description:
        "Ensures consistent stock levels to effectively meet market demand and avoid any disruptions. High availability reflects robust supply chain management practices.",
      underachiever: "< 5",
      performer: "6-8",
      leader: "> 8",
      icon: Package,
    },
    {
      name: "Customer Satisfaction",
      description:
        "Measures customer feedback, reviews, and repeat business. High scores reflect a strong understanding of client needs and exceptional service.",
      underachiever: "< 6",
      performer: "7-8",
      leader: "> 8",
      icon: Smile,
    },
    {
      name: "Delivery Timeliness",
      description:
        "Evaluates adherence to the agreed-upon delivery schedules. Consistent and timely on-time deliveries effectively showcase reliability and operational efficiency.",
      underachiever: "< 6",
      performer: "7-8",
      leader: "> 8",
      icon: Truck,
    },
    {
      name: "Products Quality",
      description:
        "Assesses the durability, craftsmanship, and value of products or services provided. High-quality offerings enhance brand reputation and customer trust.",
      underachiever: "< 7",
      performer: "8",
      leader: "> 8",
      icon: Gem,
    },
    {
      name: "Compliance with DKC",
      description:
        "Ensures adherence to organizational standards, ethical guidelines, and operational protocols. Compliance reflects professionalism and alignment with company values.",
      underachiever: "< 6",
      performer: "7-8",
      leader: "> 8",
      icon: ClipboardCheck,
    },
    {
      name: "Innovation",
      description:
        "Recognizes the ability to innovate and adapt to market trends, customer preferences, and emerging challenges. Encourages creative problem-solving and agility in operations.",
      underachiever: "< 2",
      performer: "3-6",
      leader: "> 6",
      icon: Lightbulb,
    },
    {
      name: "Communication",
      description:
        "Assesses effectiveness in responding to queries, maintaining transparency, and collaborating with stakeholders. Strong communication fosters seamless partnerships.",
      underachiever: "< 5",
      performer: "6-7",
      leader: "> 7",
      icon: MessageSquare,
    },
    {
      name: "Financial Stability",
      description:
        "Evaluates the vendor's ability to maintain financial health and meet obligations. A financially stable vendor ensures uninterrupted operations.",
      underachiever: "< 4",
      performer: "5-8",
      leader: "> 8",
      icon: Banknote,
    },
    {
      name: "Operational Efficiency",
      description:
        "Measures the effectiveness of internal processes, inventory management, and resource allocation. High efficiency reduces costs and increases reliability.",
      underachiever: "< 6",
      performer: "7-8",
      leader: "> 8",
      icon: Settings,
    },
    {
      name: "Regulatory Standards",
      description:
        "Ensures that all legal requirements and industry-specific regulations are consistently met. Strong regulatory compliance effectively minimizes risks and maintains organizational credibility.",
      underachiever: "< 7",
      performer: "7-8",
      leader: "> 8",
      icon: FileText,
    },
    {
      name: "Sustainability",
      description:
        "Evaluates the use of eco-friendly materials, waste management, and sustainable production practices. Vendors with minimal environmental impact align with global sustainability goals.",
      underachiever: "< 5",
      performer: "6-7",
      leader: "> 7",
      icon: Leaf,
    },
    {
      name: "Tech Capabilities",
      description:
        "Measures the adoption of technology for production, supply chain, and customer engagement. Technologically advanced vendors demonstrate efficiency and innovation.",
      underachiever: "< 3",
      performer: "4-7",
      leader: "> 7",
      icon: Cpu,
    },
  ];
  const partnershipLevels = [
    {
      level: 1,
      type: "Drop Shipping",
      retention: "≥ 18 Months at Ecommerce Platform",
      kpi: "≥ 7+ Aggregate Platform Performance Score",
      next: "Consignment",
      image: "/placeholder.svg?height=200&width=300",
      description:
        "The Drop Shipping level is your entry point into the De Koshur Crafts ecosystem. Without needing to hold inventory or manage logistics, artisans and vendors can sell their products directly through our ecommerce channels. This model allows you to test your product-market fit, generate early traction, and familiarize yourself with our standards. Our platform handles packaging, shipping, and customer service—enabling you to focus on production and quality. This stage is ideal for emerging artisans or businesses exploring global outreach with low upfront risk.",
    },
    {
      level: 2,
      type: "Consignment",
      retention: "≥ 6 Months at Consignment Platform",
      kpi: "≥ 7+ Aggregate Platform Performance Score",
      next: "Exhibition",
      image: "/placeholder.svg?height=200&width=300",
      description:
        "The Consignment level offers enhanced exposure through our curated retail platforms—both online and physical. Your products are featured in premium digital showcases and occasionally in temporary installations, without requiring full ownership transfer. You earn revenue upon each successful sale, which minimizes financial burden while expanding visibility. Vendors at this level build credibility, refine product offerings, and benefit from customer insights gathered via our marketing and analytics support. This phase prepares you for hands-on engagement with selective markets and customers.",
    },
    {
      level: 3,
      type: "Exhibition",
      retention: "≥ 6 Months at Exhibition Platform",
      kpi: "≥ 8+ Aggregate Platform Performance Score",
      next: "Import Export",
      image: "/placeholder.svg?height=200&width=300",
      description:
        "At the Exhibition level, artisans showcase their products at exclusive trade events, pop-ups, exhibitions, and showroom experiences organized by De Koshur Crafts. This stage is a catalyst for visibility and networking, connecting you directly with global buyers, media, influencers, and retail scouts. The focus here is on storytelling, craftsmanship, and brand elevation. Successful vendors gain real-time feedback, build customer loyalty, and solidify their identity as premium craft producers with global potential.",
    },
    {
      level: 4,
      type: "Import Export",
      retention: "≥ 6 Months at Import Export Platform",
      kpi: "≥ 8+ Aggregate Platform Performance Score",
      next: "Subsidiary",
      image: "/placeholder.svg?height=200&width=300",
      description:
        "This level opens international trade doors. Vendors at the Import Export stage become part of our cross-border logistics network, allowing their products to reach international distributors, retailers, and platforms under structured compliance. We assist with export documentation, customs regulations, freight handling, and packaging standardization. Your brand now travels globally, benefiting from shared credibility and ecosystem-wide logistics. This phase is key for artisans aiming to scale and build recurring overseas demand while maintaining craft integrity.",
    },
    {
      level: 5,
      type: "Investor",
      retention: "≥ 12 Months at Subsidiary Platform",
      kpi: "≥ 8+ Aggregate Platform Performance Score",
      next: "Brick & Mortar",
      image: "/placeholder.svg?height=200&width=300",
      description:
        "This is the transition from partner to stakeholder. The Investor level is for collaborators who have demonstrated sustained performance and wish to invest in De Koshur Crafts' vision. Investors gain equity opportunities, strategic influence, and access to joint ventures, including platform expansion, market penetration strategies, and innovation labs. This role is both financial and strategic—focusing on long-term ecosystem development, rural upliftment, craft revival, and infrastructure scaling.",
    },
    {
      level: 6,
      type: "Brick & Mortar",
      retention: "≥ 24 Months at Brick & Mortar Platform",
      kpi: "≥ 8+ Aggregate Platform Performance Score",
      next: "Franchise",
      image: "/placeholder.svg?height=200&width=300",
      description:
        "Partners at this level establish their own physical retail outlets in domestic or international cities under the De Koshur Crafts brand or as co-branded ventures. We provide full architectural guidance, store layout templates, visual merchandising strategy, point-of-sale systems, and training for in-store staff. You gain supply chain integration, interior branding support, and access to limited edition artisan lines. This level focuses on expanding the offline footprint and offering immersive cultural retail experiences to global consumers.",
    },
    {
      level: 7,
      type: "DKC Brand Franchise",
      retention: "≥ 6 Months at Franchise Platform",
      kpi: "≥ 8+ Aggregate Platform Performance Score",
      next: "Enjoy Collaborative US-Kashmir-India Craft Business in the USA",
      image: "/placeholder.svg?height=200&width=300",
      description:
        "This is the pinnacle of our partnership ecosystem. Franchisees operate under the De Koshur Crafts umbrella with full rights to use our brand identity, design systems, global catalogs, sourcing network, and marketing playbooks. You become an official DKC brand custodian in your region, with dedicated support from our central and regional teams. Franchisees benefit from cross-country collaborations, access to flagship events, shared customer bases, technology infrastructure, and participation in high-level strategy dialogues. The goal is to create globally respected hubs that celebrate, sell, and scale the soul of Kashmiri artistry.",
    },
  ];

  const onboardingPhases = [
    "Registration Phase",
    "Document Submission Phase",
    "Eligibility Review Phase",
    "Agreement and Certification Phase",
    "Profile Setup Phase",
    "Partnership-Specific Onboarding Phase",
    "Training and Resource Checkup Phase",
    "Portal Access Activation Phase",
    "Partnership Launch and Support Phase",
    "KPI and Marketplace Engagement Phase",
  ];

  const [currentLevelIndex, setCurrentLevelIndex] = useState(0);
  const [currentKPIIndex, setCurrentKPIIndex] = useState(0);

  const nextLevel = () => {
    setCurrentLevelIndex(
      (prevIndex) => (prevIndex + 1) % partnershipLevels.length
    );
  };

  const prevLevel = () => {
    setCurrentLevelIndex((prevIndex) =>
      prevIndex === 0 ? partnershipLevels.length - 1 : prevIndex - 1
    );
  };

  const nextKPI = () => {
    setCurrentKPIIndex(
      (prevIndex) => (prevIndex + 1) % Math.ceil(kpiMetrics.length / 3)
    );
  };

  const prevKPI = () => {
    setCurrentKPIIndex((prevIndex) =>
      prevIndex === 0 ? Math.ceil(kpiMetrics.length / 3) - 1 : prevIndex - 1
    );
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 text-gray-900">
      <main className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="text-center mb-16 py-16 rounded-xl bg-gradient-to-br from-[var(--primary-header-color)] to-white shadow-lg">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 text-[var(--primary-dark-slate)] animate-fade-in">
            B2B Connect - USA
          </h1>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[var(--secondary-color)] animate-slide-in-up">
            Buyer Partnership Process Overview
          </h2>
          <p className="text-lg sm:text-xl text-[var(--primary-light-text-color)] max-w-3xl mx-auto mb-8 animate-fade-in-delay">
            At De Koshur Crafts, our Buyer Partnership Process is designed to
            provide seamless access to exclusive Kashmiri products. We focus on
            delivering high-quality, sustainable, and ethically sourced items to
            help your business grow.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mt-10">
            <div className="flex flex-col items-center p-6 rounded-lg shadow-md bg-[var(--primary-light-text-color)] transition-all duration-300 hover:shadow-xl hover:scale-[1.02] border border-gray-100">
              <Zap className="w-10 h-10 text-[var(--secondary-color)] mb-3 animate-bounce-in" />
              <h3 className="text-xl font-semibold text-[var(--primary-header-color)] mb-2">
                Enable Growth
              </h3>
              <p className="text-[var(--primary-header-color)] text-center text-sm">
                Helping scale with authentic Kashmiri crafts.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 rounded-lg shadow-md bg-[var(--primary-light-text-color)] transition-all duration-300 hover:shadow-xl hover:scale-[1.02] border border-gray-100">
              <CheckCircle className="w-10 h-10 text-[var(--secondary-color)] mb-3 animate-bounce-in" />
              <h3 className="text-xl font-semibold text-[var(--primary-header-color)] mb-2">
                Aligned Standards
              </h3>
              <p className="text-[var(--primary-header-color)] text-center text-sm">
                Products meet high-quality and sustainability standards.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 rounded-lg shadow-md bg-[var(--primary-light-text-color)] transition-all duration-300 hover:shadow-xl hover:scale-[1.02] border border-gray-100">
              <Globe className="w-10 h-10 text-[var(--secondary-color)] mb-3 animate-bounce-in" />
              <h3 className="text-xl font-semibold text-[var(--primary-header-color)] mb-2">
                Access Options
              </h3>
              <p className="text-[var(--primary-header-color)] text-center text-sm">
                Connect with top Kashmiri artisans and vendors.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 rounded-lg shadow-md bg-[var(--primary-light-text-color)] transition-all duration-300 hover:shadow-xl hover:scale-[1.02] border border-gray-100">
              <Handshake className="w-10 h-10 text-[var(--secondary-color)] mb-3 animate-bounce-in" />
              <h3 className="text-xl font-semibold text-[var(--primary-header-color)] mb-2">
                Simplified Pathway
              </h3>
              <p className="text-[var(--primary-header-color)] text-center text-sm">
                Seamless Clear Easy Trusted Process
              </p>
            </div>
          </div>
          <p className="text-xl sm:text-2xl font-bold mt-12 text-[var(--primary-dark-slate)]">
            Handicraft Progressive Business Model for Every Vision
          </p>
          <p className="text-lg sm:text-xl text-[var(--primary-light-text-color)] mt-2">
            Crafting US Next Generations with 700+ Old Legacy of Kashmir
            Handicraft Together
          </p>
        </section>

        {/* Buyer Partnership Framework and Pathway - Slider */}
        <section className="mb-16 relative py-12 bg-[var(--primary-hover-color)] rounded-xl shadow-lg">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-[var(--secondary-color)]">
            Buyer Partnership Framework and Pathway
          </h2>
          <p className="text-lg text-[var(--primary-header-color)] text-center max-w-4xl mx-auto mb-6">
            At De Koshur Crafts, we understand that every business is unique.
            That's why we offer flexible partnership pathways tailored to your
            goals, strengths, and vision. Whether you're sourcing for a boutique
            or expanding your retail business, our programs are designed to
            provide access to authentic Kashmiri products with ease and
            confidence, while ensuring the highest standards of quality, ethics,
            and sustainability.
          </p>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentLevelIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="text-lg text-[var(--secondary-hover-color)] text-center max-w-4xl mx-auto mb-6"
            >
              {partnershipLevels[currentLevelIndex].description}
            </motion.div>
          </AnimatePresence>
          <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentLevelIndex * 100}%)` }}
            >
              {partnershipLevels.map((level) => (
                <div
                  key={level.level}
                  className="flex-shrink-0 w-full p-8 rounded-lg shadow-md border border-gray-200 bg-[var(--primary-header-color)] flex flex-col md:flex-row items-center gap-6 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] group"
                >
                  <img
                    src={level.image || "/placeholder.svg"}
                    alt={`Level ${level.level}: ${level.type}`}
                    width={200}
                    height={150}
                    className="rounded-lg object-cover shadow-sm md:w-1/3 transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="md:w-2/3 text-left">
                    <h3 className="text-2xl font-bold mb-3 text-[var(--primary-dark-slate)]">
                      Level {level.level}: {level.type}
                    </h3>
                    <ul className="text-[var(--primary-light-text-color)] space-y-2 text-sm">
                      <li>
                        <span className="font-semibold text-[var(--secondary-color)]">
                          Retention Period:
                        </span>{" "}
                        {level.retention}
                      </li>
                      <li>
                        <span className="font-semibold text-[var(--secondary-color)]">
                          KPI Score:
                        </span>{" "}
                        {level.kpi}
                      </li>
                      <li>
                        <span className="font-semibold text-[var(--secondary-color)]">
                          Next Partnership Level:
                        </span>{" "}
                        {level.next}
                      </li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={prevLevel}
              className="absolute top-1/2 left-0 -translate-y-1/2 bg-[var(--primary-color)] text-[var(--primary-header-color)] p-1 rounded-full shadow-md transition-all duration-300 hover:bg-[var(--primary-hover-color)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-hover-color)] z-10 ml-1"
              aria-label="Previous partnership level"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextLevel}
              className="absolute top-1/2 right-0 -translate-y-1/2 bg-[var(--primary-color)] text-[var(--primary-header-color)] p-1 rounded-full shadow-md transition-all duration-300 hover:bg-[var(--primary-hover-color)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-hover-color)] z-10 mr-1"
              aria-label="Next partnership level"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <p className="text-xl sm:text-2xl font-bold text-center mt-12 text-[var(--primary-header-color)]">
            Enjoy Collaborative US-Kashmir-India Craft Business in the USA
          </p>
          <p className="text-lg sm:text-xl text-[var(--primary-header-color)] text-center mt-4">
            Our Six-Year Promise: Empowering You for Secure Success &
            Independence in Kashmir Luxury Craft.
          </p>
          <p className="text-lg sm:text-xl text-[var(--primary-header-color)] text-center mt-2">
            Let’s build your path to independence & success today. Empower
            yourself, inspire others, lead the way as true global entrepreneur.
          </p>
        </section>

        {/* What happens if a buyer is not eligible for the next level of partnership? */}
        <section className="mb-16 py-12 bg-white rounded-xl shadow-lg">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-[var(--primary-color)]">
            What happens if a buyer is not eligible for the next level of
            partnership?
          </h2>
          <p className="text-lg text-[var(--primary-light-text-color)] text-center max-w-4xl mx-auto mb-10">
            At De Koshur Crafts, we believe in empowering ambitious buyers to
            achieve their goals without compromising the principles that define
            our platform. For experienced business houses, we offer a unique
            opportunity to bypass the retention period while maintaining an
            unwavering commitment to the highest KPI standards.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-10">
            <div className="flex flex-col items-center p-6 rounded-lg shadow-md bg-[var(--primary-header-color)] transition-all duration-300 hover:shadow-xl hover:scale-[1.02] border border-gray-100">
              <TrendingUp className="w-10 h-10 text-[var(--secondary-color)] mb-3 animate-bounce-in" />
              <h3 className="text-xl font-semibold text-[var(--primary-dark-slate)] mb-2 text-center">
                Fast Growth
              </h3>
              <p className="text-[var(--primary-light-text-color)] text-center text-sm">
                Bypass retention and advance your journey with ease.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 rounded-lg shadow-md bg-[var(--primary-header-color)] transition-all duration-300 hover:shadow-xl hover:scale-[1.02] border border-gray-100">
              <Award className="w-10 h-10 text-[var(--secondary-color)] mb-3 animate-bounce-in" />
              <h3 className="text-xl font-semibold text-[var(--primary-dark-slate)] mb-2 text-center">
                Ethical Excellence
              </h3>
              <p className="text-[var(--primary-light-text-color)] text-center text-sm">
                Uphold KPI standards ensuring quality and lasting impact.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 rounded-lg shadow-md bg-[var(--primary-header-color)] transition-all duration-300 hover:shadow-xl hover:scale-[1.02] border border-gray-100">
              <Globe className="w-10 h-10 text-[var(--secondary-color)] mb-3 animate-bounce-in" />
              <h3 className="text-xl font-semibold text-[var(--primary-dark-slate)] mb-2 text-center">
                Global Reach
              </h3>
              <p className="text-[var(--primary-light-text-color)] text-center text-sm">
                Access partnerships, expand into key global markets worldwide.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 rounded-lg shadow-md bg-[var(--primary-header-color)] transition-all duration-300 hover:shadow-xl hover:scale-[1.02] border border-gray-100">
              <Shield className="w-10 h-10 text-[var(--secondary-color)] mb-3 animate-bounce-in" />
              <h3 className="text-xl font-semibold text-[var(--primary-dark-slate)] mb-2 text-center">
                Platform Integrity
              </h3>
              <p className="text-[var(--primary-light-text-color)] text-center text-sm">
                Join a trusted network committed to ethical craftsmanship
                standards.
              </p>
            </div>
          </div>
          <p className="text-xl sm:text-2xl font-bold text-center mt-12 text-[var(--primary-dark-slate)]">
            Handicraft Progressive Business Model for Every Vision
          </p>
          <p className="text-lg sm:text-xl text-[var(--secondary-hover-color)] text-center mt-2 mb-8">
            Crafting US Next Generations with 700+ Old Legacy of Kashmir
            Handicraft Together
          </p>
        </section>

        {/* Empowering Experienced Business Houses Section */}
        <section className="py-16 bg-gradient-to-br from-[var(--primary-dark-slate)] via-[var(--primary-color)] to-[var(--primary-color)] rounded-t-xl shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 bg-[var(--primary-hover-color)] rounded-full blur-3xl animate-pulse"></div>
            <div
              className="absolute bottom-10 right-10 w-40 h-40 bg-[var(--secondary-color)] rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute top-1/2 left-1/2 w-24 h-24 bg-[var(--secondary-color)] rounded-full blur-2xl animate-pulse"
              style={{ animationDelay: "2s" }}
            ></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                <span className="bg-gradient-to-r from-[var(--secondary-color)] to-white bg-clip-text text-transparent">
                  Lateral Entry Pathway
                </span>
              </h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-lg text-gray-200 leading-relaxed mb-4">
                  A{" "}
                  <span className="font-bold text-[var(--secondary-hover-color)]">
                    privilege earned through dedication
                  </span>{" "}
                  - bypass retention periods while maintaining platform
                  integrity through rigorous HCRF evaluation.
                </p>
                <p className="text-base text-gray-200 leading-relaxed">
                  Reserved for buyers with significant business experience who
                  have proven their commitment to ethical craftsmanship and
                  sustainable growth. This pathway allows experienced buyers to
                  advance quickly while ensuring they are well-equipped to lead
                  and thrive in global markets.
                </p>
              </div>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl px-8 py-7 border border-white/20 shadow-2xl">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-[var(--secondary-color)] to-[var(--secondary-hover-color)] rounded-xl flex items-center justify-center mr-4">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      HCRF Evaluation Required
                    </h3>
                  </div>
                  <p className="text-gray-200 leading-relaxed mb-4">
                    Hamadan Craft Revival Foundation, Kashmir's first Craft
                    Policy Think-Tank, will thoroughly evaluate your business
                    against industry standards to ensure it aligns with our
                    ethical and operational values.
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    Only upon successful evaluation will you be granted access
                    to this accelerated growth path. This applies even if you
                    pay for the Lateral Pathway Package, ensuring every buyer
                  </p>
                  <a
                    href="https://www.hcrf.org.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-gradient-to-r from-[var(--secondary-color)] to-[var(--secondary-hover-color)] text-white py-3 px-8 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-2xl hover:scale-105 group"
                  >
                    Get Evaluated Now
                    <ExternalLink className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-[var(--secondary-hover-color)] to-[var(--secondary-color)] rounded-lg flex items-center justify-center mr-3">
                      <BookOpen className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-md font-bold text-white">
                        CraftLore & ArtStay
                      </h4>
                      <span className="text-xs bg-[var(--secondary-hover-color)] text-white px-2 py-1 rounded-full">
                        FREE 2025
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Exclusive access to premium packages for accelerated growth
                    & global visibility
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-[var(--secondary-hover-color)] to-[var(--secondary-color)] rounded-lg flex items-center justify-center mr-3">
                      <ListChecks className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="text-md font-bold text-white">
                      Trade Registry
                    </h4>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Get listed, verified, and ranked in Kashmir handicrafts
                    global directory
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group sm:col-span-2 lg:col-span-1 xl:col-span-2">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-[var(--secondary-hover-color)] to-[var(--secondary-color)] rounded-lg flex items-center justify-center mr-3">
                      <Store className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="text-md font-bold text-white">
                      Offline Business Synergy
                    </h4>
                  </div>
                  <p className="text-gray-300 text-sm">
                    ArtStay builds synergy between Kashmir's tourism and
                    handicraft sectors, encouraging collaboration that supports
                    artisans and enriches visitor experiences. This partnership
                    brings sustainable growth and business directly to your
                    doorstep.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-3xl font-bold text-[var(--secondary-hover-color)] mb-2">
                  700+
                </div>
                <div className="text-gray-300 text-sm">Years Legacy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[var(--secondary-hover-color)] mb-2">
                  100%
                </div>
                <div className="text-gray-300 text-sm">Ethical Standards</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[var(--secondary-hover-color)] mb-2">
                  24/7
                </div>
                <div className="text-gray-300 text-sm">Global Support</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[var(--secondary-hover-color)] mb-2">
                  ∞
                </div>
                <div className="text-gray-300 text-sm">Growth Potential</div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Table Section */}
        <PricingTable />

        {/* KPI Evaluation Metrics Framework - Slider Design */}
        <section className="mb-16 py-16 bg-gradient-to-br from-[var(--primary-header-color)] via-white to-[var(--primary-header-color)] rounded-2xl shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 25% 25%, var(--secondary-hover-color) 2px, transparent 2px)`,
                backgroundSize: "50px 50px",
              }}
            ></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-hover-color)] bg-clip-text text-transparent">
                  KPI Evaluation Framework
                </span>
              </h2>
              <p className="text-xl text-[var(--primary-light-text-color)] max-w-3xl mx-auto">
                Your pathway to{" "}
                <span className="font-bold text-[var(--secondary-color)]">
                  progressive partnerships
                </span>
              </p>
            </div>
            <div className="relative">
              <div className="overflow-hidden rounded-2xl">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{
                    transform: `translateX(-${currentKPIIndex * 100}%)`,
                  }}
                >
                  {Array.from({ length: Math.ceil(kpiMetrics.length / 3) }).map(
                    (_, slideIndex) => (
                      <div key={slideIndex} className="flex-shrink-0 w-full">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 bg-white/50 backdrop-blur-sm border border-white/60">
                          {kpiMetrics
                            .slice(slideIndex * 3, slideIndex * 3 + 3)
                            .map((metric, index) => {
                              const IconComponent = metric.icon;
                              return (
                                <div
                                  key={slideIndex * 3 + index}
                                  className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group relative overflow-hidden min-h-[280px]"
                                >
                                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[var(--primary-header-color)] opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                                  <div className="relative z-10 h-full flex flex-col">
                                    <div className="flex items-center mb-4">
                                      <div className="w-12 h-12 bg-gradient-to-br from-[var(--primary-hover-color)] to-[var(--primary-color)] rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                                        {IconComponent && (
                                          <IconComponent className="w-6 h-6 text-white" />
                                        )}
                                      </div>
                                      <h3 className="text-lg font-bold text-[var(--primary-dark-slate)] leading-tight">
                                        {metric.name}
                                      </h3>
                                    </div>
                                    <p className="text-[var(--primary-light-text-color)] text-sm leading-relaxed mb-6 flex-grow">
                                      {metric.description}
                                    </p>
                                    <div className="space-y-3 mt-auto">
                                      <div className="flex items-center justify-between">
                                        <span className="text-xs font-medium text-gray-600">
                                          Underachiever
                                        </span>
                                        <span className="px-3 py-1 text-xs font-bold rounded-full bg-gradient-to-r from-[var(--secondary-color)] to-[var(--secondary-hover-color)] text-white shadow-sm">
                                          {metric.underachiever}
                                        </span>
                                      </div>
                                      <div className="flex items-center justify-between">
                                        <span className="text-xs font-medium text-gray-600">
                                          Performer
                                        </span>
                                        <span className="px-3 py-1 text-xs font-bold rounded-full bg-gradient-to-r from-gray-400 to-gray-500 text-white shadow-sm">
                                          {metric.performer}
                                        </span>
                                      </div>
                                      <div className="flex items-center justify-between">
                                        <span className="text-xs font-medium text-gray-600">
                                          Leader
                                        </span>
                                        <span className="px-3 py-1 text-xs font-bold rounded-full bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-hover-color)] text-white shadow-sm">
                                          {metric.leader}
                                        </span>
                                      </div>
                                    </div>
                                    <div className="mt-4 pt-4 border-t border-gray-100">
                                      <div className="flex justify-between text-xs text-gray-500 mb-2">
                                        <span>Performance Scale</span>
                                        <span>1-10</span>
                                      </div>
                                      <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div
                                          className="bg-gradient-to-r from-[var(--secondary-color)] via-gray-400 to-[var(--primary-color)] h-2 rounded-full"
                                          style={{ width: "100%" }}
                                        ></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
              <button
                onClick={prevKPI}
                className="absolute top-1/2 left-2 -translate-y-1/2 bg-[var(--primary-color)] text-[var(--primary-header-color)] p-1 rounded-full shadow-lg transition-all duration-300 hover:bg-[var(--primary-hover-color)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-hover-color)] z-10"
                aria-label="Previous KPI metrics"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextKPI}
                className="absolute top-1/2 right-2 -translate-y-1/2 bg-[var(--primary-color)] text-[var(--primary-header-color)] p-1 rounded-full shadow-lg transition-all duration-300 hover:bg-[var(--primary-hover-color)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-hover-color)] z-10"
                aria-label="Next KPI metrics"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
              <div className="flex justify-center mt-8 space-x-2">
                {Array.from({ length: Math.ceil(kpiMetrics.length / 3) }).map(
                  (_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentKPIIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        currentKPIIndex === index
                          ? "bg-[var(--secondary-hover-color)] scale-125"
                          : "bg-gray-300 hover:bg-gray-400"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  )
                )}
              </div>
              <div className="text-center mt-4">
                <span className="text-sm text-[var(--primary-light-text-color)]">
                  {currentKPIIndex + 1} of {Math.ceil(kpiMetrics.length / 3)} •
                  Showing {Math.min(3, kpiMetrics.length - currentKPIIndex * 3)}{" "}
                  of {kpiMetrics.length} metrics
                </span>
              </div>
            </div>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-white/60">
                <div className="text-3xl font-bold text-[var(--primary-color)] mb-2">
                  14
                </div>
                <div className="text-[var(--primary-light-text-color)] text-sm font-medium">
                  Key Metrics
                </div>
              </div>
              <div className="text-center p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-white/60">
                <div className="text-3xl font-bold text-[var(--primary-color)] mb-2">
                  3
                </div>
                <div className="text-[var(--primary-light-text-color)] text-sm font-medium">
                  Performance Levels
                </div>
              </div>
              <div className="text-center p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-white/60">
                <div className="text-3xl font-bold text-[var(--primary-hover-color)] mb-2">
                  8+
                </div>
                <div className="text-[var(--primary-light-text-color)] text-sm font-medium">
                  Leader Score
                </div>
              </div>
              <div className="text-center p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-white/60">
                <div className="text-3xl font-bold text-[var(--primary-hover-color)] mb-2">
                  ∞
                </div>
                <div className="text-[var(--primary-light-text-color)] text-sm font-medium">
                  Growth Opportunities
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-16 py-12 bg-white rounded-xl shadow-lg">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-[var(--primary-color)]">
            How It Works
          </h2>
          <p className="text-lg text-[var(--primary-light-text-color)] text-center max-w-4xl mx-auto mb-10">
            Swift Partnership Activation: Experience a seamless journey from
            registration to marketplace leadership through DKC’s transformative
            onboarding process, empowering buyers with tools, training, and
            support to thrive in a global marketplace.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-6xl mx-auto">
            <div className="md:w-1/2 flex justify-center animate-fade-in-delay">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="How It Works Illustration"
                width={600}
                height={400}
                className="rounded-lg shadow-xl object-cover border border-gray-200"
              />
            </div>
            <div className="md:w-1/2 space-y-4 text-left">
              <h3 className="text-2xl font-bold text-[var(--primary-color)] mb-4 animate-slide-in-up">
                Our Streamlined Onboarding Process
              </h3>
              <ul className="list-none p-0 m-0 space-y-3">
                {onboardingPhases.map((phase, index) => (
                  <li
                    key={index}
                    className="flex items-start text-lg text-[var(--primary-light-text-color)] animate-pop-in"
                    style={
                      {
                        "--animation-delay": `${0.1 * index}s`,
                      } as React.CSSProperties
                    }
                  >
                    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-[var(--secondary-hover-color)] text-[var(--primary-header-color)] font-bold text-sm mr-3 shadow-md">
                      {index + 1}
                    </span>
                    {phase}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-6 mt-12">
            <button className="bg-[var(--secondary-color)] text-[var(--primary-header-color)] py-3 px-8 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-[var(--secondary-hover-color)] hover:shadow-lg animate-pulse-once">
              Register Now
            </button>
            <button className="bg-transparent border-2 border-[var(--primary-hover-color)] text-[var(--primary-color)] py-3 px-8 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-[var(--primary-light-text-color)] hover:text-[var(--primary-header-color)] hover:shadow-lg animate-fade-in-delay">
              Partner Smarter: Pre-Registration Consultation
            </button>
            <button className="bg-[var(--primary-color)] text-[var(--primary-header-color)] py-3 px-8 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-[var(--primary-hover-color)] hover:shadow-lg animate-pulse-once">
              Book Appointment
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
