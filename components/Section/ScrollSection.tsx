"use client";

import Image from "next/image";
import {
  ChevronUp,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useRef, useState, useEffect, useCallback } from "react";

interface Feature {
  title: string;
  description: string;
}

interface KashmiriArtisansSectionProps {
  mainTitle?: string;
  mainDescription?: string;
  imageSrc?: string;
  imageAlt?: string;
  imageLabel?: string;
  features?: Feature[];
  autoslideInterval?: number;
}

const defaultFeatures: Feature[] = [
  {
    title: "Full Profit Retention",
    description:
      "No commissions or intermediariesartisans keep 100% of their earnings, ensuring fair compensation for their work.",
  },
  {
    title: "Transparent Buyer Access",
    description:
      "Connect directly with buyers and build long-term, trust-based relationships without gatekeeping platforms or brokers.",
  },
  {
    title: "Artisan-Controlled Pricing",
    description:
      "Vendors set their own prices, reflecting the true value of their craftsmanship without middleman interference.",
  },
  {
    title: "Custom Orders & Feedback",
    description:
      "Receive custom orders directly from buyers and use their feedback to improve your craft and grow your business.",
  },
  {
    title: "Own Your Digital Storefront",
    description:
      "Get a personalized, easy-to-manage digital storefront to display and sell your products globallyno tech skills needed.",
  },
  {
    title: "Zero Upfront Investment",
    description:
      "Start showcasing and selling your crafts with no initial financial barriersour platform is risk-free for artisans.",
  },
  {
    title: "Skill Development & Support",
    description:
      "Access training, resources, and a supportive artisan community to refine your skills and boost your income potential.",
  },
  {
    title: "Sustainable Artisan Prosperity",
    description:
      "Our model fosters long-term economic independence, helping artisans thrive through direct access to global demand.",
  }
]


export default function ScrollSection({
  mainTitle = "Empowering Kashmiri Artisans by Removing Middlemen",
  mainDescription = "We eliminate unnecessary intermediaries by directly connecting Kashmiri artisans with buyers especially in high demand global markets like the U.S. This transparent, commission-free approach ensures artisans receive the full value of their work, boosting income and long-term prosperity.",
  imageSrc = "/images/kashmiri-artisans.png",
  imageAlt = "Group of people sitting in a modern office setting",
  imageLabel = "PLATFORM UNIQUENESS",
  features = defaultFeatures,
  autoslideInterval = 5000,
}: KashmiriArtisansSectionProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [thumbSize, setThumbSize] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const handleScroll = useCallback(() => {
    if (scrollContainerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } =
        scrollContainerRef.current;
      const scrollableHeight = scrollHeight - clientHeight;
      if (scrollableHeight > 0) {
        setScrollProgress(scrollTop / scrollableHeight);
        const newThumbSize = (clientHeight / scrollHeight) * 100;
        setThumbSize(Math.max(10, newThumbSize));
      } else {
        setScrollProgress(0);
        setThumbSize(100);
      }
    }
  }, []);

  const scrollTo = useCallback((direction: "up" | "down") => {
    if (scrollContainerRef.current) {
      const currentScrollTop = scrollContainerRef.current.scrollTop;
      const firstFeatureCard = scrollContainerRef.current
        .children[0] as HTMLElement;
      const scrollAmount = firstFeatureCard
        ? firstFeatureCard.offsetHeight + 32
        : 0;

      scrollContainerRef.current.scrollTo({
        top:
          direction === "down"
            ? currentScrollTop + scrollAmount
            : currentScrollTop - scrollAmount,
        behavior: "smooth",
      });
    }
  }, []);

  useEffect(() => {
    const startAutoslide = () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        if (scrollContainerRef.current && !isHovering) {
          const { scrollTop, scrollHeight, clientHeight } =
            scrollContainerRef.current;
          const scrollableHeight = scrollHeight - clientHeight;
          const firstFeatureCard = scrollContainerRef.current
            .children[0] as HTMLElement;
          const scrollStep = firstFeatureCard
            ? firstFeatureCard.offsetHeight + 32
            : 0;

          if (scrollableHeight <= 0) return;
          if (scrollTop + clientHeight >= scrollHeight - 1) {
            scrollContainerRef.current.scrollTo({ top: 0, behavior: "smooth" });
          } else {
            scrollContainerRef.current.scrollBy({
              top: scrollStep,
              behavior: "smooth",
            });
          }
        }
      }, autoslideInterval);
    };

    if (!isHovering) startAutoslide();
    else if (intervalRef.current) clearInterval(intervalRef.current);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [autoslideInterval, isHovering]);

  useEffect(() => {
    handleScroll();
    const container = scrollContainerRef.current;
    if (container) container.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    return () => {
      if (container) container.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [handleScroll]);

  const thumbPosition = scrollProgress * (100 - thumbSize);

  return (
    <div className= "bg-gray-50 py-25 px-6 lg:px-8 relative overflow-hidden">
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle, #d1d5db 1px, transparent 1px)`,
          backgroundSize: "10px 10px",
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
        {/* Left */}
        <div className="flex flex-col">
          <div className="flex items-center gap-2 text-[var(--primary-color)] text-sm font-semibold uppercase tracking-wider">
            <span className="w-8 h-0.5 bg-[var(--primary-color)]"></span>
            <span>Built for vision and connection</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mt-4">
            {mainTitle.split(" ").slice(0, 2).join(" ")}{" "}
            <span className="text-[var(--secondary-color)]">
              {mainTitle.split(" ").slice(2).join(" ")}
            </span>
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-md">
            {mainDescription}
          </p>

         
        </div>

        {/* Right */}
        <div className="relative flex flex-col">
          <div
            ref={scrollContainerRef}
            className="flex flex-col gap-8 max-h-[400px] lg:max-h-[420px] overflow-y-auto no-scrollbar"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {features.map((feature, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md"
              >
                <div className="w-12 h-0.5 bg-[var(--primary-color)] mb-2"></div>
                <h2 className="text-xl  font-bold text-gray-900">
                  {feature.title}
                </h2>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Scrollbar controls */}
          <div
            className="mt-8 flex flex-row items-center justify-between w-full max-w-xs mx-auto h-10 bg-gray-200 rounded-full px-2
                       lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 lg:w-10 lg:h-full lg:max-h-[300px] lg:mt-0 lg:flex-col lg:py-2"
          >
            <button
              onClick={() => scrollTo("up")}
              className="w-8 h-8 rounded-full bg-[var(--secondary-color)] text-white flex items-center justify-center hover:bg-[var(--primary-hover-color)] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:ring-offset-2"
            >
              <ChevronLeft className="w-5 h-5 lg:hidden" />
              <ChevronUp className="w-5 h-5 hidden lg:block" />
            </button>

            <div className="relative flex-1 h-2 bg-gray-300 rounded-full mx-2 lg:w-2 lg:h-full lg:my-2 lg:mx-0">
              <div
                className="absolute bg-[var(--secondary-hover-color)] rounded-full transition-all duration-100 ease-out h-full"
                style={{ width: `${thumbSize}%`, left: `${thumbPosition}%` }}
              ></div>
              <div
                className="absolute bg-[var(--secondary-color)] rounded-full transition-all duration-100 ease-out hidden lg:block w-full"
                style={{ height: `${thumbSize}%`, top: `${thumbPosition}%` }}
              ></div>
            </div>

            <button
              onClick={() => scrollTo("down")}
              className="w-8 h-8 rounded-full bg-[var(--secondary-color)] text-white flex items-center justify-center hover:bg-[var(--primary-hover-color)] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:ring-offset-2"
            >
              <ChevronRight className="w-5 h-5 lg:hidden" />
              <ChevronDown className="w-5 h-5 hidden lg:block" />
            </button>
          </div>

         
        </div>
      </div>
    </div>
  );
}
