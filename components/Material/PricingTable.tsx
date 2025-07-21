"use client";

import { useState } from "react";
import { Info } from "lucide-react";

interface PricingPlan {
  name: string;
  price: number;
  period: string;
  description: string;
  features: {
    directAccess: string;
    compulsory: string;
    kpiScore: string;
  };
  isPopular?: boolean;
  buttonText: string;
}

const plans: PricingPlan[] = [
  {
    name: "Starter Package",
    price: 1250,
    period: "one-time",
    description: "Designed for small vendors establishing presence in the ecosystem.",
    features: {
      directAccess: "Mid-tier partnerships (Consignment & Exhibition)",
      compulsory: "E-Commerce Partnership Registration & Approval",
      kpiScore: "Minimum 7 across performance metrics",
    },
    buttonText: "Get Started",
  },
  {
    name: "Growth Package",
    price: 2500,
    period: "one-time",
    description: "For scaling vendors transitioning to growth strategies.",
    features: {
      directAccess: "Mid-tier partnership - Import Export",
      compulsory: "E-Commerce Partnership Registration & Approval",
      kpiScore: "Minimum 7 across performance metrics",
    },
    isPopular: true,
    buttonText: "Get Started",
  },
  {
    name: "Premium Package",
    price: 5000,
    period: "one-time",
    description: "For established vendors aiming for global expansion.",
    features: {
      directAccess: "Full-spectrum partnership of Subsidiary",
      compulsory: "E-Commerce Partnership Registration & Approval",
      kpiScore: "Minimum 7 across performance metrics",
    },
    buttonText: "Get Started",
  },
];

export default function PricingTable() {
  const [selectedPlan, setSelectedPlan] = useState(1);

  return (
    <div className="bg-[var(--primary-hover-color)] py-12 px-6 rounded-xl">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-[var(--primary-header-color)] mb-6">
            Confidence in Your Security
          </h1>
        </div>

        {/* Desktop View */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 transition-all duration-300 hover:bg-white/15 hover:scale-105 ${
                plan.isPopular ? "ring-2 ring-[var(--secondary-hover-color)] shadow-2xl" : ""
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-[var(--secondary-hover-color)] text-black px-4 py-1 rounded-full text-xs font-semibold">
                    MOST POPULAR
                  </div>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-white font-semibold text-sm mb-2">{plan.name}</h3>
                <p className="text-white/70 text-xs mb-4 leading-relaxed">{plan.description}</p>

                <div className="mb-4">
                  <span className="text-white text-4xl font-bold">${plan.price}</span>
                  <span className="text-white/70 text-sm"> {plan.period}</span>
                </div>

                <div className="text-[var(--primary-light-text-color)] text-xs mb-6 capitalize">
                  {plan.period.replace("-", " ")}
                </div>

                <button
                  className={`w-full ${
                    plan.isPopular
                      ? "bg-[var(--secondary-hover-color)] hover:bg-[var(--secondary-color)] text-black"
                      : "bg-white/20 hover:bg-white/30 text-white border border-white/30"
                  } transition-all duration-300 py-2 rounded`}
                >
                  {plan.buttonText}
                </button>
              </div>

              <div className="space-y-4 text-sm">
                {Object.entries(plan.features).map(([label, value]) => (
                  <div key={label} className="flex justify-between items-start py-2 border-b border-white/10">
                    <div className="flex items-center space-x-2">
                      <span className="text-white/80 capitalize">{label.replace(/([A-Z])/g, ' $1')}</span>
                      <Info className="w-3 h-3 text-white/50" />
                    </div>
                    <span className="text-white text-right font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View */}
        <div className="lg:hidden">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {plans.map((plan, index) => (
              <button
                key={plan.name}
                onClick={() => setSelectedPlan(index)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedPlan === index
                    ? "bg-[var(--secondary-hover-color)] text-black shadow-lg"
                    : "bg-white/20 text-white hover:bg-white/30"
                }`}
              >
                {plan.name}
              </button>
            ))}
          </div>

          <div className="max-w-md mx-auto">
            <div
              className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 ${
                plans[selectedPlan].isPopular ? "ring-2 ring-[var(--secondary-hover-color)] shadow-2xl" : ""
              }`}
            >
              {plans[selectedPlan].isPopular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-[var(--secondary-hover-color)] text-black px-4 py-1 rounded-full text-xs font-semibold">
                    MOST POPULAR
                  </div>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-white font-semibold text-lg mb-2">{plans[selectedPlan].name}</h3>
                <p className="text-white/70 text-sm mb-4 leading-relaxed">
                  {plans[selectedPlan].description}
                </p>

                <div className="mb-4">
                  <span className="text-white text-5xl font-bold">${plans[selectedPlan].price}</span>
                  <span className="text-white/70 text-lg"> {plans[selectedPlan].period}</span>
                </div>

                <div className="text-[var(--primary-light-text-color)] text-sm mb-6 capitalize">
                  {plans[selectedPlan].period.replace("-", " ")}
                </div>

                <button
                  className={`w-full py-3 text-lg ${
                    plans[selectedPlan].isPopular
                      ? "bg-[var(--secondary-hover-color)] hover:bg-[var(--secondary-color)] text-black"
                      : "bg-white/20 hover:bg-white/30 text-white border border-white/30"
                  } transition-all duration-300 rounded`}
                >
                  {plans[selectedPlan].buttonText}
                </button>
              </div>

              <div className="space-y-4 text-sm">
                {Object.entries(plans[selectedPlan].features).map(([label, value]) => (
                  <div key={label} className="flex justify-between items-start py-3 border-b border-white/10">
                    <div className="flex items-center space-x-2">
                      <span className="text-white/80 capitalize">{label.replace(/([A-Z])/g, ' $1')}</span>
                      <Info className="w-4 h-4 text-white/50" />
                    </div>
                    <span className="text-white text-right font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}