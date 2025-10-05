"use client";
import { useState } from "react";
import * as LucideIcons from "lucide-react";
import Link from "next/link";
import type React from "react";

interface FeatureItem {
  icon: keyof typeof LucideIcons;
  title: string;
  desc: string;
  link: string;
}

interface FeaturesProps {
  data?: FeatureItem[];
}

// ✅ Shortened & balanced descriptions (10 words each)
const fallbackData: FeatureItem[] = [
  {
    icon: "ShoppingCart",
    title: "Core Trade",
    desc: "We focus on trade quality, efficiency, and lasting global reliability.",
    link: "/core-trade",
  },
  {
    icon: "Rocket",
    title: "Brand Growth",
    desc: "We help brands expand reach, boost presence, and achieve success.",
    link: "/brand-growth",
  },
  {
    icon: "Users",
    title: "Collaborative",
    desc: "We build networks, share resources, and create business growth.",
    link: "/collaborative",
  },
  {
    icon: "Building",
    title: "Institutional",
    desc: "We partner with firms, strengthen ties, and foster lasting trust.",
    link: "/institutional",
  },
];

const Features = ({ data }: FeaturesProps) => {
  const featuresData = data && data.length > 0 ? data : fallbackData;
  return (
    <section className="py-8 lg:py-20">
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-6">
          {featuresData.map((item, i) => (
            <FeatureCard
              key={i}
              icon={item.icon}
              title={item.title}
              desc={item.desc}
              link={item.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  icon: keyof typeof LucideIcons;
  title: string;
  desc: string;
  link: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, desc, link }) => {
  const [hovered, setHovered] = useState(false);
  const IconComponent = LucideIcons[icon] as React.ComponentType<{ size?: number; className?: string }>;


  return (
    <Link href={link} className="block">
      <div
        className={`relative overflow-hidden rounded-xl text-center border transition-all duration-500 cursor-pointer p-4 flex flex-col items-center justify-center h-[160px] w-[240px] md:h-[180px] md:w-[180px]`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          backgroundColor: hovered ? "var(--secondary-color)" : "rgb(243 244 246)",
          borderColor: hovered ? "var(--primary-hover-color)" : "rgb(229 231 235)",
          color: hovered ? "#fff" : "#111",
        }}
      >
        {/* Hover background image */}
        <div
          className={`absolute inset-0 transition-opacity duration-500 bg-cover bg-center z-0 ${
            hovered ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: "url(/assets/images/feature7.png)",
          }}
        />

        {/* Icon */}
        <div className="relative z-10 mx-auto mb-2 w-12 h-12 rounded-full border-2 border-white flex items-center justify-center bg-white/40">
          <div
            className={`absolute inset-0 rounded-full bg-[#171a2b] transition-transform duration-500 ${
              hovered ? "scale-100" : "scale-0"
            }`}
          />
          {IconComponent && (
            <IconComponent
              className={`relative z-10 transition duration-500 ${
                hovered ? "text-white" : "text-gray-900"
              }`}
              size={24}
            />
          )}
        </div>

        {/* Text */}
        <div className="relative z-10 px-2">
          <h6
            className={`text-base sm:text-lg font-semibold transition-colors duration-500 ${
              hovered ? "text-white" : "text-gray-900"
            }`}
          >
            {title}
          </h6>
          <p
            className={`mt-1 text-[0.65rem] sm:text-xs transition-colors duration-500 ${
              hovered ? "text-white" : "text-gray-600"
            }`}
          >
            {desc}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Features;
