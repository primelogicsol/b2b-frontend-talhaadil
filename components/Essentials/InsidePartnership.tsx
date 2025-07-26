"use client";

import type React from "react";

import { useState, useEffect } from "react";
import {
  Check,
  ShoppingCart,
  Home,
  Building,
  Plane,
  Store,
  Warehouse,
  Handshake,
Users, Target, DollarSign, Shield, Star, AlertCircle, XCircle, CheckCircle 
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import RecSquareSection from "../Section/RecSquareSection";
import Accordion from "../Material/Accordion";
import SectionFaq from "../Section/SectionFaq";

// Define types for all the data structures
export interface ServiceCard {
  title: string;
  description: string;
  icon: keyof typeof serviceIconMap;
  featured: boolean;
}

export interface AccordionItem {
  id: string;
  title: string;
  content: string;
  icon: string;
}

// Each feature entry has a value and a level
type FeatureDetail = {
  value: string;
  level: string; // extend as needed
};

// All possible feature keys (you can add/remove as needed)
type FeatureKeys =
  | 'Breadth of Handicraft Products'
  | 'Kashmir Heritage Focus'
  | 'Kashmir Entire Product Line'
  | 'Seller Verification'
  | 'Artisan Support'
  | 'GI Tags/Certifications'
  | 'Origin Traceability'
  | 'Fair Trade Policies'
  | 'Eco-friendly Practices'
  | 'Cultural Storytelling'
  | 'Multimedia Content'
  | 'Personalized Suggestions'
  | 'Thematic Collections'
  | 'Pricing Transparency'
  | 'Value-Added Services'
  | 'International Shipping'
  | 'B2B Networking'
  | 'Customer Education'
  | 'Return Policies'
  | 'Brand Trust'
  | 'Influencer Partnerships';

// A record mapping each feature key to its detail
type FeaturesMap = Record<FeatureKeys, FeatureDetail>;

// The main comparison item type
interface ComparisonItem {
  solution: string;
  icon: React.ReactNode;
  color: string;
  isMainPlatform: boolean;
  features: FeaturesMap;
}

export interface HexagonalAdvantage {
  number: string;
  title: string;
  description: string;
  color: string;
}

export interface CostComparisonItem {
  feature: string;
  deKoshurCrafts: string;
  eprolo: string;
  modalyst: string;
  spocket: string;
  cjdropshipping: string;
}

export interface PricingPlan {
  name: string;
  price: {
    monthly: number;
    yearly: number;
  };
  earlyAdopters: string;
  features: string[];
  popular: boolean;
  description: string;
}

export interface FaqItem {
  title: string;
  desc: string;
}

export interface HomePageProps {
  heroTitle: string;
  heroDescription: string;
  accordionData: AccordionItem[];
  comparisonData: ComparisonItem[];
  hexagonalAdvantages: HexagonalAdvantage[];
  costComparison: CostComparisonItem[];
  pricingPlans: PricingPlan[];
  faqs: FaqItem[];
  serviceCards: ServiceCard[];
}

const serviceIconMap = {
  shoppingCart: ShoppingCart,
  home: Home,
  building: Building,
  plane: Plane,
  store: Store,
  warehouse: Warehouse,
  handshake: Handshake,
};

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
  const [isYearly, setIsYearly] = useState(false);
   const [expandedItems, setExpandedItems] = useState<number[]>([0]) // First item expanded by default

  const toggleExpanded = (index: number) => {
    setExpandedItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll(".animate-on-scroll");
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
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
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      {/* Hero Section */}
      <section className="py-16 px-4">
        <RecSquareSection title={heroTitle} description={heroDescription} />
      </section>

      {/* Key Features Accordion */}
      <section className="py-16 px-4 bg-[var(--white)]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-[var(--primary-dark-slate)] animate-on-scroll">
            Key Features
          </h2>
          <Accordion data={accordionData} />
        </div>
      </section>

    <section className="py-16 px-4 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-[var(--primary-color)] animate-on-scroll">
          Compare to Other Platforms
        </h2>

        {/* Responsive Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 animate-on-scroll">
          {comparisonData.map((solution, index) => (
            <div
              key={index}
              className={`bg-[var(--white)] rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl ${
                solution.isMainPlatform
                  ? "ring-2 ring-[var(--primary-color)] transform hover:scale-105"
                  : "hover:transform hover:scale-102"
              }`}
            >
              {/* Platform Header */}
              <div
                className={`${solution.color} px-6 py-4 text-[var(--white)]  relative ${
                  solution.isMainPlatform ? "bg-[var(--primary-color)]" : ""
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <h3 className="text-xl font-bold">{solution.solution}</h3>
                  </div>
                  {solution.isMainPlatform && <Star className="w-6 h-6 text-yellow-300 fill-current" />}
                </div>
                {solution.isMainPlatform && (
                  <div className="mt-2">
                    <span className="text-sm bg-white bg-opacity-20 px-2 py-1 rounded-full text-[var(--primary-color)]">Our Platform</span>
                  </div>
                )}
              </div>

              {/* Features List */}
              <div className="p-6">
                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {Object.entries(solution.features).map(([featureName, featureData], featureIndex) => (
                    <div
                      key={featureIndex}
                      className={`p-3 rounded-lg border ${getPerformanceColor(featureData.level)} transition-colors duration-200`}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="text-sm font-semibold text-[var(--primary-color)] leading-tight">
                          {featureName}
                        </h4>
                        {getPerformanceIcon(featureData.level)}
                      </div>
                      <p className="text-xs text-[var(--foreground)] leading-relaxed">{featureData.value}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
      {/* Advantages Section (Hexagonal Design) */}
      <section className="py-16 px-4 bg-[var(--white)]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-[var(--primary-color)] animate-on-scroll">
            Advantages
          </h2>
          {/* Hexagonal Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {hexagonalAdvantages.slice(0, 4).map((item, index) => (
              <div
                key={index}
                className="text-center animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Hexagonal Shape */}
                <div className="relative mx-auto mb-6 w-32 h-32 flex items-center justify-center">
                  <div
                    className={`${item.color} w-28 h-28 transform rotate-45 rounded-lg shadow-lg transition-all duration-300 hover:scale-110`}
                    style={{
                      clipPath:
                        "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
                    }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center transform -rotate-45">
                      <span className="text-3xl font-bold text-[var(--white)]">
                        {item.number}
                      </span>
                    </div>
                  </div>
                </div>
                {/* Title */}
                <h3 className="text-xl font-bold mb-4 text-[var(--primary-dark-slate)]">
                  {item.title}
                </h3>
                {/* Description */}
                <p className="text-[var(--primary-color)] text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {hexagonalAdvantages.slice(4, 8).map((item, index) => (
              <div
                key={index + 4}
                className="text-center animate-on-scroll"
                style={{ animationDelay: `${(index + 4) * 0.1}s` }}
              >
                {/* Hexagonal Shape */}
                <div className="relative mx-auto mb-6 w-32 h-32 flex items-center justify-center">
                  <div
                    className={`${item.color} w-28 h-28 transform rotate-45 rounded-lg shadow-lg transition-all duration-300 hover:scale-110`}
                    style={{
                      clipPath:
                        "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
                    }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center transform -rotate-45">
                      <span className="text-3xl font-bold text-[var(--white)]">
                        {item.number}
                      </span>
                    </div>
                  </div>
                </div>
                {/* Title */}
                <h3 className="text-xl font-bold mb-4 text-[var(--primary-dark-slate)]">
                  {item.title}
                </h3>
                {/* Description */}
                <p className="text-[var(--foreground)] text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Connection Line (hidden on small screens) */}
          <div className="hidden lg:flex justify-center items-center space-x-8 mt-8">
            {hexagonalAdvantages.slice(0, 4).map((item, index) => (
              <div key={index} className="flex items-center">
                <div
                  className={`w-6 h-6 transform rotate-45 ${item.color}`}
                  style={{
                    clipPath:
                      "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
                  }}
                ></div>
                {index < 4 && (
                  <div className={`w-16 h-1 bg-[var(--primary-color)]`}></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Affordability Table */}
      <section className="py-16 px-4 bg-[var(--background)]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-[var(--primary-color)] animate-on-scroll">
            Cost Comparison
          </h2>
          <div className="bg-[var(--white)] rounded-lg shadow-lg overflow-hidden animate-on-scroll">
            {/* Table view (hidden on small screens) */}
            <div className="overflow-x-auto hidden md:block">
              <table className="w-full min-w-[700px]">
                <thead>
                  <tr className="bg-[var(--secondary-hover-color)] text-[var(--white)]">
                    <th className="px-6 py-4 text-left font-semibold">
                      Feature
                    </th>
                    <th className="px-6 py-4 text-center font-semibold bg-[var(--primary-color)]">
                      De Koshur Crafts
                    </th>
                    <th className="px-6 py-4 text-center font-semibold">
                      EPROLO
                    </th>
                    <th className="px-6 py-4 text-center font-semibold">
                      Modalyst
                    </th>
                    <th className="px-6 py-4 text-center font-semibold">
                      Spocket
                    </th>
                    <th className="px-6 py-4 text-center font-semibold">
                      CJDropshipping
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {costComparison.map((row, index) => (
                    <tr
                      key={index}
                      className={`${
                        index % 2 === 0
                          ? "bg-[var(--white)]"
                          : "bg-[var(--background)]"
                      } hover:bg-[var(--primary-header-color)] transition-colors duration-200`}
                    >
                      <td className="px-6 py-4 font-medium text-[var(--primary-dark-slate)]">
                        {row.feature}
                      </td>
                      <td className="px-6 py-4 text-center font-bold text-[var(--primary-color)] bg-[var(--primary-header-color)] text-sm">
                        {row.deKoshurCrafts}
                      </td>
                      <td className="px-6 py-4 text-center text-[var(--foreground)] text-sm">
                        {row.eprolo}
                      </td>
                      <td className="px-6 py-4 text-center text-[var(--foreground)] text-sm">
                        {row.modalyst}
                      </td>
                      <td className="px-6 py-4 text-center text-[var(--foreground)] text-sm">
                        {row.spocket}
                      </td>
                      <td className="px-6 py-4 text-center text-[var(--foreground)] text-sm">
                        {row.cjdropshipping}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Collapse Stack for Cost Comparison (shown on small screens) */}
            <div className="md:hidden p-4 space-y-4">
              {costComparison.map((row, index) => (
                <div
                  key={index}
                  className={`rounded-lg shadow-md p-4 ${
                    index % 2 === 0
                      ? "bg-[var(--white)]"
                      : "bg-[var(--background)]"
                  } border border-[var(--primary-header-color)]`}
                >
                  <h3 className="font-bold text-lg text-[var(--primary-dark-slate)] mb-3">
                    {row.feature}
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-[var(--primary-color)]">
                        De Koshur Crafts:
                      </span>
                      <span className="text-sm font-bold text-[var(--primary-color)]">
                        {row.deKoshurCrafts}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-[var(--foreground)]">
                        EPROLO:
                      </span>
                      <span className="text-sm text-[var(--foreground)]">
                        {row.eprolo}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-[var(--foreground)]">
                        Modalyst:
                      </span>
                      <span className="text-sm text-[var(--foreground)]">
                        {row.modalyst}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-[var(--foreground)]">
                        Spocket:
                      </span>
                      <span className="text-sm text-[var(--foreground)]">
                        {row.spocket}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-[var(--foreground)]">
                        CJDropshipping:
                      </span>
                      <span className="text-sm text-[var(--foreground)]">
                        {row.cjdropshipping}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 bg-[var(--white)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-[var(--primary-color)] animate-on-scroll">
              Early Adopter Yearly De Koshur Crafts-USA Drop Shipping Platform
              Fees is Zero (2025)
            </h2>
            <p className="text-xl text-[var(--primary-light-text-color)] mb-2">
              Tailored Plans for Every Stage of Your Growth Journey
            </p>
            <p className="text-lg text-[var(--foreground)] mb-2">
              Empowering Artisans & Businesses with Flexible Plans
            </p>
            <p className="text-base text-[var(--primary-light-text-color)]">
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
                0: { slidesPerView: 1 }, // mobile
                640: { slidesPerView: 2 }, // tablets/ipads
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
                      <h3 className="text-2xl font-bold text-[var(--primary-dark-slate)] mb-2">
                        {plan.name}
                      </h3>
                      <p className="text-sm text-[var(--foreground)] mb-4">
                        {plan.description}
                      </p>
                      <div className="mb-4">
                        <span className="text-4xl font-bold text-[var(--primary-color)]">
                          ${isYearly ? plan.price.yearly : plan.price.monthly}
                        </span>
                        <span className="text-[var(--primary-light-text-color)]">
                          /{isYearly ? "year" : "month"}
                        </span>
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
                          <span className="text-[var(--foreground)] text-sm">
                            {feature}
                          </span>
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
                  <h3 className="text-2xl font-bold text-[var(--primary-dark-slate)] mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-[var(--foreground)] mb-4">
                    {plan.description}
                  </p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-[var(--primary-color)]">
                      ${isYearly ? plan.price.yearly : plan.price.monthly}
                    </span>
                    <span className="text-[var(--primary-light-text-color)]">
                      /{isYearly ? "year" : "month"}
                    </span>
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
                      <span className="text-[var(--foreground)] text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <button
                  className="w-full py-3 rounded-lg font-semibold transition-all duration-200 bg-[var(--primary-color)] hover:bg-[var(--primary-hover-color)] text-[var(--white)]"
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-[var(--background)]">
        <SectionFaq
          subTitle="SUPPORT CENTER"
          sectionTitle="Frequently Asked Questions"
          faqTitle="Complete <span>Guide</span>"
          faqContent="Find answers to common questions about our drop shipping and private label services"
          faqItems={faqs}
        />
      </section>

      {/* Our Services Section (moved to bottom) */}
      <section className="py-16 px-4 bg-[var(--background)]">
        <div className="max-w-6xl mx-auto">
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
                    const IconComponent = serviceIconMap[service.icon];
                    return IconComponent ? (
                      <IconComponent className="w-8 h-8" />
                    ) : null;
                  })()}
                </div>
                {/* Title */}
                <h3
                  className={`text-xl font-bold mb-4 text-center ${
                    service.featured
                      ? "text-[var(--white)]"
                      : "text-[var(--primary-dark-slate)]"
                  }`}
                >
                  {service.title}
                </h3>
                {/* Description */}
                <p
                  className={`text-sm leading-relaxed text-center mb-6 ${
                    service.featured
                      ? "text-[var(--white)] opacity-90"
                      : "text-[var(--foreground)]"
                  }`}
                >
                  {service.description}
                </p>
                {/* Special indicator for featured card */}
               
                {/* Read More Button */}
                <div className="text-center">
                  <button
                    className={`inline-flex items-center font-semibold text-sm transition-all duration-300 ${
                      service.featured
                        ? "text-[var(--white)] hover:text-[var(--secondary-hover-color)]"
                        : "text-[var(--primary-color)] hover:text-[var(--secondary-color)]"
                    }`}
                  >
                    READ MORE
                    <svg
                      className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
