"use client";

import data from "@/Data/feature.json";
import Image from "next/image";
import { useState } from "react";

const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.map((item, i) => (
            <FeatureCard key={i} img={item.img} title={item.title} desc={item.desc} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  img: string;
  title: string;
  desc: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ img, title, desc }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`relative overflow-hidden rounded-xl text-center border transition-all duration-500 p-8 cursor-pointer ${
        hovered ? "border-orange-600 bg-orange-600 text-white" : "border-gray-200 bg-gray-100"
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* ::after pseudo-like background */}
      <div
        className={`absolute inset-0 transition-transform duration-500 bg-cover bg-center z-0 ${
          hovered
            ? "opacity-100 rotate-x-0"
            : "opacity-0 -rotate-x-90"
        }`}
        style={{
          backgroundImage: "url(/assets/images/feature7.png)",
          transformStyle: "preserve-3d",
        }}
      />

      {/* Feature Icon */}
      <div className="relative z-10 mx-auto mb-4 w-[75px] h-[75px] rounded-full border-2 border-white flex items-center justify-center bg-white/40">
        <div
          className={`absolute inset-0 rounded-full bg-[#171a2b] transition-transform duration-500 ${
            hovered ? "scale-100" : "scale-0"
          }`}
        />
        <Image
          src={img}
          alt="icon"
          width={40}
          height={40}
          className={`relative z-10 transition duration-500 ${
            hovered ? "invert brightness-0" : ""
          }`}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h3
          className={`text-lg font-semibold transition-colors duration-500 ${
            hovered ? "text-white" : "text-gray-900"
          }`}
        >
          {title}
        </h3>
        <p
          className={`mt-2 text-sm transition-colors duration-500 ${
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
