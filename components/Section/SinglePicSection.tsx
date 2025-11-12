"use client";

import type React from "react";
import { useGlobalContext } from "@/context/ScreenProvider";
import { Sparkles, Users, Leaf } from "lucide-react";
import { FlipCard } from "../Cards/FlipCard";

export default function VideoCardSection() {
  const { is4K } = useGlobalContext();

  const cards = [
    {
      title: "Dream It",
      description: "Visualize your perfect store",
      detailedDescription:
        "Envision your store or product lineup. We'll provide the roadmap to turn your ideas into reality—helping you design, plan, and launch with confidence and creativity.",
      icon: Sparkles,
    },
    {
      title: "Define It",
      description: "Curate your ideal collection",
      detailedDescription:
        "Browse our curated collections and select from a wide range of authentic Kashmiri crafts. Each product tells a story of tradition, skill, and dedication, helping you define your unique brand identity.",
      icon: Users,
    },
    {
      title: "Dominate It",
      description: "Lead with authentic products",
      detailedDescription:
        "Stand out in the marketplace by offering authentic Kashmiri products crafted with precision and soul. Build trust, attract loyal customers, and dominate your niche with timeless artistry and value.",
      icon: Leaf,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gray-100 text-[var(--primary-color)]">
      <div
        className={`relative z-10 max-w-[1600px] mx-auto ${
          is4K ? "px-20 py-32" : "px-4 md:px-8 py-16"
        }`}
      >
        {/* Heading */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center mb-2">
            <div
              className={`${is4K ? "w-16 h-1" : "w-12 h-0.5"} mr-4`}
              style={{ backgroundColor: "var(--secondary-color)" }}
            />
            <span
              className={`${is4K ? "text-xl" : "text-sm md:text-base"} font-medium tracking-wide uppercase`}
              style={{ color: "var(--primary-light-text-color)" }}
            >
              WELCOME TO B2B CONNECT - USA
            </span>
          </div>

          <h1
            className={`font-bold leading-tight ${
              is4K ? "text-6xl mb-12" : "text-3xl md:text-4xl lg:text-5xl mb-6"
            }`}
          >
            Empowering USA-Based Buyers in{" "}
            <br className="hidden md:block" />
            Accessing Kashmir Craft Vendor{" "}
            <span style={{ color: "var(--secondary-color)" }}>Market</span>
          </h1>
        </div>

        {/* Cards Section */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ${
            is4K ? "mt-20" : "mt-10"
          }`}
        >
          {/* 1st Card (Video) */}
          <div className="flex justify-center items-stretch">
            <div className="w-full h-full rounded-2xl overflow-hidden shadow-lg bg-black/40 flex">
              <video
                src="/videos/gatewayfinal.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Next 3 FlipCards */}
          {cards.map((card, index) => (
            <div key={index} className="flex justify-center items-stretch">
              <FlipCard {...card} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
