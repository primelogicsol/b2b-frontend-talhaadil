"use client";

import type React from "react";
import { useGlobalContext } from "@/context/ScreenProvider";

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
      "A Transformative Platform Connecting USA Buyers with Kashmiri Artisans and Authentic Products...",
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
      style={
        {
          "--primary-hover-color": "#2a5f7a",
          "--primary-color": "#1b4f68",
          "--primary-light-text-color": "#346880",
          "--primary-header-color": "#e4e6eb",
          "--secondary-hover-color": "#f48261",
          "--secondary-color": "#d85834",
          "--secondary-light-color": "#f9c6b2",
        } as React.CSSProperties
      }
    >
      <div
        className={`max-w-[1600px] mx-auto ${
          is4K ? "px-20 py-32" : "px-6 md:px-8 py-16"
        }`}
      >
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 items-stretch ${
            is4K ? "gap-16" : "gap-12"
          }`}
        >
          {/* Image side */}
          <div className="relative h-full flex">
            <div className="relative w-full h-full overflow-hidden rounded-lg">
              <video
                src="/videos/gateway.mp4" // replace with your actual video path
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text side */}
          <div
            className={`${
              is4K ? "pl-16" : "pl-0 lg:pl-8"
            } flex flex-col justify-center`}
          >
            <div className="flex items-center mb-2">
              <div
                className={`${is4K ? "w-16 h-1" : "w-12 h-0.5"} mr-4`}
                style={{ backgroundColor: "var(--secondary-color)" }}
              />
              <span
                className={`${
                  is4K ? "text-xl" : "text-sm md:text-base"
                } font-medium tracking-wide uppercase`}
                style={{ color: "var(--primary-light-text-color)" }}
              >
                {data.header}
              </span>
            </div>
            <h1
              className={`${
                is4K
                  ? "text-6xl mb-12"
                  : "text-2xl md:text-3xl lg:text-4xl mb-8"
              } font-bold leading-tight`}
              style={{ color: "var(--primary-color)" }}
            >
              {data.mainHeading}
            </h1>
            <p
              className={`${
                is4K
                  ? "text-2xl mb-16 leading-relaxed"
                  : "text-base md:text-lg lg:text-[16px] mb-10 leading-relaxed"
              }`}
              style={{ color: "var(--primary-light-text-color)" }}
            >
              {data.description}
            </p>
            <div className={`${is4K ? "space-y-8" : "space-y-3"}`}>
              {data.features?.map((item, idx) => (
                <div key={idx} className="flex items-start">
                  <div
                    className={`${
                      is4K ? "w-16 h-1 mt-2" : "w-4 h-0.5 mt-3"
                    } mr-4 flex-shrink-0`}
                    style={{ backgroundColor: "var(--secondary-color)" }}
                  />
                  <div>
                    <h3
                      className={`${
                        is4K ? "text-2xl mb-3" : "text-lg md:text-xl mb-2"
                      } font-semibold`}
                      style={{ color: "var(--primary-color)" }}
                    >
                      {item.title}{" "}
                      <span
                        className={`${
                          is4K ? "text-xl" : "text-base md:text-[16px]"
                        } font-normal`}
                      >
                        {item.desc}
                      </span>
                    </h3>
                  </div>
                </div>
              ))}
            </div>
            <div className={`${is4K ? "mt-20" : "mt-4"}`}>
              <h2
                className={`${
                  is4K ? "text-3xl mb-4" : "text-xl md:text-[20px] mb-3"
                } font-bold`}
                style={{ color: "var(--secondary-color)" }}
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
