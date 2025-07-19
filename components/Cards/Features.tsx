"use client";

import Image from "next/image";
import { useState } from "react";

interface FeatureItem {
  img?: string;
  title: string;
  desc: string;
  isimage: boolean;
}

interface FeaturesProps {
  data?: FeatureItem[];
}

const fallbackData: FeatureItem[] = [
  {
    img: "/assets/images/feature1.png",
    title: "Drop shipping",
    desc: "Explore authentic Kashmiri crafts for your thriving online marketplace.",
    isimage: true,
  },
  {
    img: "/assets/images/feature2.png",
    title: "Consignment",
    desc: "Establish lasting relationships with verified Kashmiri artisans for products.",
    isimage: true,
  },
  {
    img: "/assets/images/feature3.png",
    title: "Exhibition",
    desc: "Discover exclusive Kashmiri collections showcased at global events.",
    isimage: true,
  },
  {
    img: "/assets/images/feature4.png",
    title: "Import Export",
    desc: "Effortlessly source high-quality, ethical Kashmiri crafts for business.",
    isimage: true,
  },
  {
    img: "/assets/images/feature5.png",
    title: "Investor",
    desc: "Maximize returns by investing in Kashmiri craft businesses with global potential.",
    isimage: true,
  },
  {
    img: "/assets/images/feature6.png",
    title: "Brick & Mortar",
    desc: "Partner with Kashmiri craft suppliers for physical retail spaces.",
    isimage: true,
  },
  {
    img: "/assets/images/feature7.png",
    title: "Franchise",
    desc: "Expand your USA-based franchise with established Kashmiri craft brands.",
    isimage: true,
  },
  {
      img: "/assets/images/feature7.png",
    title: "Verified Artisans",
    desc: "Partner with pre-verified artisans to ensure quality and trust.",
       isimage: true,
  },
];

const Features = ({ data }: FeaturesProps) => {
  const featuresData = data && data.length > 0 ? data : fallbackData;

  return (
    <section className="pb-20">
      <div className="max-w-7xl mx-auto px-4 flex justify-center">
        <div  className={
    `grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-5 justify-center items-center ` +
    (featuresData[0].isimage ? 'lg:grid-cols-8' : 'lg:grid-cols-6')
  }>
          {featuresData.map((item, i) => (
            <FeatureCard
              key={i}
              img={item.img}
              title={item.title}
              desc={item.desc}
              isimage={item.isimage}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  img?: string;
  title: string;
  desc: string;
  isimage: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ img, title, desc, isimage }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`relative overflow-hidden rounded-xl text-center border transition-all duration-500 cursor-pointer w-35 h-40 ${
        hovered
          ? "border-[var(--primary-hover-color)] bg-[var(--secondary-color)] text-white"
          : "border-gray-200 bg-gray-100"
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {isimage && (
        <>
          <div
            className={`absolute inset-0 transition-transform duration-500 bg-cover bg-center z-0 ${
              hovered ? "opacity-100 rotate-x-0" : "opacity-0 -rotate-x-90"
            }`}
            style={{
              backgroundImage: "url(/assets/images/feature7.png)",
              transformStyle: "preserve-3d",
            }}
          />
          <div className="relative z-10 mx-auto mt-2 w-12 h-12 rounded-full border-2 border-white flex items-center justify-center bg-white/40">
            <div
              className={`absolute inset-0 rounded-full bg-[#171a2b] transition-transform duration-500 ${
                hovered ? "scale-100" : "scale-0"
              }`}
            />
            {img && (
              <Image
                src={img}
                alt="icon"
                width={40}
                height={40}
                className={`relative z-10 transition duration-500 ${
                  hovered ? "invert brightness-0" : ""
                }`}
              />
            )}
          </div>
        </>
      )}

      <div className="relative z-10 mt-2 px-2">
        <h6
          className={`text-md font-semibold transition-colors duration-500 ${
            hovered ? "text-white" : "text-gray-900"
          }`}
        >
          {title}
        </h6>
        <p
          className={`mt-2 text-[10px] transition-colors duration-500 ${
            hovered ? "text-white" : "text-gray-600"
          }`}
        >
          {desc}
        </p>
      </div>
    </div>
  );
};

export default Features;