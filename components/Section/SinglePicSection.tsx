"use client";

import type React from "react";
import { useGlobalContext } from "@/context/ScreenProvider";
import { Sparkles, Users, Leaf } from "lucide-react";
import { FlipCard } from "../Cards/FlipCard";
interface FeatureItem {
  title: string;
  desc: string;
}

interface SectionContent {
  imageSrc?: string;
  sidebarText?: string;
  header?: string;
  mainHeading?: React.ReactNode;
  description?: string;
  features?: FeatureItem[];
  bottomHeading?: string;
  bottomText?: string;
}

interface SinglePicSectionProps {
  content?: SectionContent;
}

export default function SinglePicSection({ content }: SinglePicSectionProps) {
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

  const defaults: SectionContent = {
    imageSrc: "/images/hero2.webp",
    sidebarText: "Your Link to Kashmir Craft Markets",
    header: "WELCOME TO B2B CONNECT - USA",
    mainHeading: (
      <>
        Empowering USA-Based Buyers in <br className="hidden md:block" />
        Accessing Kashmir Craft Vendor{" "}
        <span style={{ color: "var(--secondary-color)" }}>Market</span>
      </>
    ),
    description:
      "A Transformative Platform Connecting USA Buyers with Artisans and Authentic Products...",
    features: [
      {
        title: "Dream It:",
        desc: "Envision your store or product lineup. We'll provide the roadmap...",
      },
      {
        title: "Define It:",
        desc: "Browse our curated collections and select from a wide range...",
      },
      {
        title: "Dominate It:",
        desc: "Stand out in the marketplace by offering authentic Kashmiri products...",
      },
    ],
    bottomHeading: "Handicraft Progressive Business Model for Every Vision",
    bottomText:
      "Crafting US Next Generations with 700+ Old Legacy of Kashmir Handicraft Together",
  };

  const data = { ...defaults, ...content };

  return (
    <section
      className="w-full bg-white"

    >
      <div
        className={`max-w-[1600px] mx-auto ${is4K ? "px-20 py-32" : "px-4 md:px-8 py-10 lg:py-30"
          }`}
      >
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 items-stretch ${is4K ? "gap-16" : "gap-12"
            }`}
        >
          {/* Image side */}
          <div className="relative h-full flex">
            <div className="relative w-full h-full overflow-hidden rounded-lg">
              <div
                className="w-full h-full bg-[var(--secondary-color)]"
              ></div>
            </div>
          </div>

          {/* Text side */}
          <div
            className={`${is4K ? "pl-16" : "pl-0 lg:pl-8"
              } flex flex-col justify-center`}
          >
            <div className="flex items-center mb-2">
              <div
                className={`${is4K ? "w-16 h-1" : "w-12 h-0.5"} mr-4`}
                style={{ backgroundColor: "var(--secondary-color)" }}
              />
              <span
                className={`${is4K ? "text-xl" : "text-sm md:text-base"
                  } font-medium tracking-wide uppercase`}
                style={{ color: "var(--primary-light-text-color)" }}
              >
                {data.header}
              </span>
            </div>
            <h1
              className={`${is4K
                  ? "text-6xl mb-12"
                  : "text-2xl md:text-3xl lg:text-4xl"
                } font-bold leading-tight`}
              style={{ color: "var(--primary-color)" }}
            >
              {data.mainHeading}
            </h1>
            <p
              className={`${is4K
                  ? "text-2xl mb-16 leading-relaxed"
                  : "text-base md:text-lg lg:text-[16px] mb-10 leading-relaxed"
                }`}
              style={{ color: "var(--primary-light-text-color)" }}
            >
              {data.description}
            </p>
            <div
              className={`${is4K ? "gap-12" : "gap-8"
                } grid grid-cols-1 lg:grid-cols-3`}
            >
              {cards.map((card, index) => (
                <FlipCard key={index} {...card} />
              ))}
            </div>

            <div className={`${is4K ? "mt-20" : "mt-4"}`}>
              <h2
                className={`${is4K ? "text-3xl mb-4" : "text-xl md:text-[20px] mb-1"
                  } font-bold`}
                style={{ color: "var(--primary-color)" }}
              >
                {data.bottomHeading}
              </h2>
              <p
                className={`${is4K ? "text-xl" : "text-sm md:text-base"}`}
                style={{ color: "var(--primary-light-text-color)" }}
              >
                {data.bottomText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
