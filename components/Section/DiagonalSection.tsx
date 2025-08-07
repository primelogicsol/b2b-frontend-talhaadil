"use client";

import Image from "next/image";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { useGlobalContext } from "../../context/ScreenProvider"; // Adjust path as needed

interface SectionProps {
  subtitle?: string;
  title?: string;
  highlight?: string;
  description?: string;
  steps?: string[];
  footerHeadline?: string;
  footerDescription?: string;
  mainImage?: string;
  smallImage?: string;
}

export default function DiagonalSection({
  subtitle = "WELCOME TO B2B CONNECT - USA",
  title = "Empowering Kashmiri Artisans, Startups in Accessing American",
  highlight = "Markets",
  description = "At De Koshur Crafts, our mission transcends the typical e-commerce experience.We believe that authentic Kashmiri craftsmanship deserves global respect, recognition, and reach.Our platform empowers artisans, preserves heritage crafts, and connects them to international markets through sustainable, fair trade practices and innovation.",
  steps = [
    "Honor It: Celebrate Kashmir’s artistry by uplifting Pashmina, Kani weaving, and Papier Mâché through global recognition and fair trade.",
    "Preserve It: Protect centuries‑old craftsmanship with sustainable methods, cultural safeguarding, and technology‑backed authenticity.",
    "Empower It: Equip artisans with training, tools, and direct markets so they grow businesses and earn fair compensation.",
    "Share It: Carry each artisan’s story worldwide using digital platforms, transparent sourcing, and innovative outreach.",
  ],
  footerHeadline = "Crafting a Borderless Platform Rooted in Legacy",
  footerDescription = "Empowering Artisans | Preserving Culture | Advancing Ethical Innovation",
  mainImage = "/images/new-pic6.webp",
  smallImage = "/images/new-pic4.webp",
}: SectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const { is4K } = useGlobalContext();

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-white text-gray-900 relative">
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(#e5e5e5 1px, transparent 1px)`,
          backgroundSize: `20px 20px`,
        }}
      ></div>

      <main
        className={`relative z-10 flex flex-col lg:flex-row items-center justify-center ${
          is4K ? "px-24 py-24" : "px-4 py-12 lg:px-8"
        }`}
      >
        <div
          className={`relative w-full ${
            is4K ? "max-w-[700px] h-[700px]" : "max-w-md lg:max-w-xl h-[400px] lg:h-[550px]"
          } flex items-center justify-center mb-12 lg:mb-0 lg:mr-16`}
        >
          <div
            className={`relative ${
              is4K
                ? "w-[550px] h-[650px]"
                : "w-[350px] h-[450px] md:w-[450px] md:h-[550px]"
            }`}
          >
            <div
              className={`absolute top-0 left-0 ${
                is4K
                  ? "w-[500px] h-[600px]"
                  : "w-[260px] h-[330px] md:w-[400px] md:h-[500px]"
              } transform rotate-[-15deg] skew-x-[-10deg] rounded-xl overflow-hidden group transition-transform duration-300 hover:scale-105 z-20`}
            >
              <div className="absolute inset-0 border-4 border-[var(--primary-color)] rounded-xl z-10 pointer-events-none"></div>
              <div className="absolute inset-[4px] border-4 border-gray-900 rounded-xl z-10 pointer-events-none"></div>
              <Image
                src='/images/cop.jpeg'
                alt="Main visual"
                width={600}
                height={700}
                className="absolute inset-0 w-full h-full object-cover transform rotate-[15deg] skew-x-[10deg]"
              />
            </div>

            <div
              className={`absolute bottom-0 right-0 ${
                is4K
                  ? "w-[250px] h-[300px]"
                  : "w-[150px] h-[200px] md:w-[200px] md:h-[250px]"
              } transform rotate-[15deg] skew-x-[10deg] rounded-xl overflow-hidden border-4 border-[var(--primary-color)] z-50 group transition-transform duration-300 hover:scale-105`}
            >
              <Image
                src='/images/download.jpeg'
                alt="Decorative"
                width={200}
                height={250}
                className="w-full h-full object-cover transition-transform duration-300 z-50 group-hover:scale-110 group-hover:rotate-1"
              />
            </div>
          </div>
        </div>

        <div className="w-full max-w-2xl text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start mb-4">
            <div className="w-12 h-0.5 bg-[var(--primary-color)] mr-3"></div>
            <p className="text-sm font-semibold uppercase text-gray-600">
              {subtitle}
              <span className="text-[var(--secondary-color)] text-sm font-semibold uppercase ml-2">
                Mission
              </span>
            </p>
          </div>
          <h1
            className={`${
              is4K ? "text-6xl leading-[1.2]" : "text-3xl md:text-4xl lg:text-5xl"
            } font-extrabold mb-6`}
          >
            {title} <br className="hidden md:block" />{" "}
            <span className="text-[var(--secondary-color)]">{highlight}</span>
          </h1>
          <p
            className={`${
              is4K ? "text-xl" : "text-base md:text-lg"
            } text-gray-700 leading-relaxed mb-8`}
          >
            {description}
          </p>

          <div className="grid gap-6 mb-8">
            {steps.map((text, i) => {
              const [before, after] = text.split(":");
              return (
                <div key={i} className="flex items-start group">
                  <div className="w-8 h-0.5 bg-[var(--primary-color)] mt-3 mr-4 transition-all duration-300"></div>
                  <p
                    className={`font-bold ${
                      is4K ? "text-xl" : "text-lg"
                    }`}
                  >
                    <span className="text-[var(--secondary-color)]">
                      {before}
                    </span>
                    {after ? `:${after}` : ""}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="text-sm text-gray-600 mt-8">
            <p className="font-bold text-[var(--primary-color)] mb-1">
              {footerHeadline}
            </p>
            <p>{footerDescription}</p>
          </div>
        </div>
      </main>
    </div>
  );
}
