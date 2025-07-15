'use client'

import HeroBanner from "@/components/HeroBanner";
import React from "react";
import { Navbar } from "@/components/Navbar";
import SliderComponent from "@/components/Counter";
import { FlipCard } from "@/components/Card";
import { ShieldCheck, Globe, Zap } from "lucide-react";
import ProductDashboard from "@/components/ProfitBox";
import PricingTable from "@/components/PricingTable";
import Process from "@/components/CardUse";
import TeamCard from "@/components/OurTeam";
import ServiceCard from "@/components/ProcessCard";
import PremiumTabs from "@/components/PremiumTabs";
function page() {
  return (
    <div>
      <Navbar />
      <HeroBanner />
      <SliderComponent />
      <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center gap-8 p-8">
        <h2 className="text-3xl font-bold mb-6">Flip Card Demo</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
          <FlipCard
          isVertical
            title="Security"
            description="Your data is encrypted end-to-end."
            detailedDescription="We use AES-256 encryption and follow industry best practices to secure all communications and storage."
            icon={ShieldCheck}
          />
          <FlipCard
            title="Global Access"
            description="Access your content worldwide."
            detailedDescription="Deploy your app across multiple continents with our global CDN and high-availability architecture."
            icon={Globe}
          />
          <FlipCard
            title="Performance"
            description="Lightning-fast response times."
            detailedDescription="Optimized backend and edge caching ensures your users always get blazing-fast experiences."
            icon={Zap}
          />
        </div>
      </div>
      <ProductDashboard/>
      <PricingTable/>
      <Process/>
      <ServiceCard/>
    <PremiumTabs/>
    </div>
  );
}

export default page;
