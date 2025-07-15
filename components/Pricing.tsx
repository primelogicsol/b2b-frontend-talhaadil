"use client";

import SectionTitle from "./SectionTitle";
import PricingCard from "./PricingCard";

const Pricing = () => {
  const SectionDesc = {
    Content:
      "paradigms. Monotonectally extend open-source mvia competitive methods of empowerment dri revolutionize stand- business.",
  };

  return (
    <section className="bg-white py-20 pricing-area">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title Row */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="text-left">
            <SectionTitle
              SubTitle="Start Business"
              Title="Choose Your Best Plan"
            />
          </div>
          <div className="text-left">
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              {SectionDesc.Content}
            </p>
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingData.map((plan, idx) => (
            <PricingCard key={idx} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

const pricingData = [
  {
    Price: "$49",
    PricePlan: "Standard Plan",
    BtnUrl: "/pricing",
    BtnText: "Choose Plan",
    FeatureList: [
      "30 Days Trial Features",
      "Multi-Language Content",
      "Unlimited Features",
      "Data backup and recovery",
      "Synced To Cloud Database",
    ],
  },
  {
    Price: "$59",
    PricePlan: "Basic Plan",
    BtnUrl: "/pricing",
    BtnText: "Choose Plan",
    FeatureList: [
      "30 Days Trial Features",
      "Multi-Language Content",
      "Unlimited Features",
      "Data backup and recovery",
      "Synced To Cloud Database",
    ],
  },
  {
    Price: "$69",
    PricePlan: "Beginner Plan",
    BtnUrl: "/pricing",
    BtnText: "Choose Plan",
    FeatureList: [
      "30 Days Trial Features",
      "Multi-Language Content",
      "Unlimited Features",
      "Data backup and recovery",
      "Synced To Cloud Database",
    ],
  },
  {
    Price: "$79",
    PricePlan: "Premium Plan",
    BtnUrl: "/pricing",
    BtnText: "Choose Plan",
    FeatureList: [
      "30 Days Trial Features",
      "Multi-Language Content",
      "Unlimited Features",
      "Data backup and recovery",
      "Synced To Cloud Database",
    ],
  },
];

export default Pricing;
