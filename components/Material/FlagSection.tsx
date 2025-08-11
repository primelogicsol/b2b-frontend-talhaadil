"use client";

import Image from "next/image";
import { useState } from "react";
import { useGlobalContext } from "@/context/ScreenProvider";

export default function HeroSection() {
  const { is4K } = useGlobalContext();

  // Initial Main Logo & Text
  const initialMainLogo = "/images/flags/14.webp";
  const [selectedLogo, setSelectedLogo] = useState({
    src: initialMainLogo,
    title: "DKC Himalayan Pashmina Luxe",
    subtitle: "Feel the Luxury, Wear the Heritage.",
  });

  const smallLogos = [
    {
      src: "/images/flags/14.webp",
      alt: "Mountains logo",
      position: "top-left",
      title: "DKC Himalayan Pashmina Luxe",
      subtitle: "Feel the Luxury, Wear the Heritage.",
    },
    {
      src: "/images/flags/15.webp",
      alt: "Bird logo",
      position: "top-right",
      title: "DKC Couture Boutique",
      subtitle: " Crafting Style with a Kashmiri Touch.",
    },
    {
      src: "/images/flags/16.webp",
      alt: "Diamond logo",
      position: "bottom-right",
      title: "DKC Heritage Interiors",
      subtitle: " Infusing Your Home with Kashmir’s Rich Legacy.",
    },
    {
      src: "/images/flags/17.webp",
      alt: "Boat logo",
      position: "bottom-left",
      title: "DKC Kashmir Gemstone",
      subtitle: "Jewels as Pure and Radiant as Kashmir’s Heart.",
    },
    {
      src: "/images/flags/18.webp",
      alt: "Flower logo",
      position: "left",
      title: "DKC Kashmir Floor Art",
      subtitle: "Transforms Your Floor into a Masterpiece.",
    },
    {
      src: "/images/flags/19.webp",
      alt: "Shawl logo",
      position: "right",
      title: "DKC Wooden Wonders",
      subtitle: "Turning Wood into Wonders with Kashmir’s Touch.",
    },
  ];

  const getLogoPositionClasses = (position: string) => {
    switch (position) {
      case "top-left":
        return "top-[10%] left-[10%] 2xl:top-[15%] 2xl:left-[15%]";
      case "top-right":
        return "top-[10%] right-[10%] 2xl:top-[15%] 2xl:right-[15%]";
      case "bottom-right":
        return "bottom-[10%] right-[10%] 2xl:bottom-[15%] 2xl:right-[15%]";
      case "bottom-left":
        return "bottom-[10%] left-[10%] 2xl:bottom-[15%] 2xl:left-[15%]";
      case "left":
        return "left-[5%] top-1/2 -translate-y-1/2 2xl:left-[8%]";
      case "right":
        return "right-[5%] top-1/2 -translate-y-1/2 2xl:right-[8%]";
      default:
        return "";
    }
  };

  return (
    <section
      className={`relative w-full overflow-hidden flex items-center justify-center ${
        is4K ? "h-[60vh]" : "h-[90vh]"
      }`}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/flags/bg-pic.webp"
          alt="Distressed US Flag Background"
          fill
          priority
          className="object-fit"
          style={{ objectPosition: "left center" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-4">
        {/* Top Right Text */}
        <div className="absolute top-8 right-4 2xl:right-[15%] text-center text-white text-sm md:text-lg 2xl:text-2xl max-w-[90%]">
          <p className="font-semibold drop-shadow-md">
            DKC: Elevating Kashmir&apos;s Craft to Global Excellence
          </p>
          <p className="text-xs md:text-base drop-shadow-md">
            Luxury, Heritage, and Timeless Craft.
          </p>
        </div>

        {/* Main Logo & Small Logos */}
        <div className="relative w-[350px] h-[350px] md:w-[500px] md:h-[500px] lg:w-[700px] lg:h-[700px] 2xl:w-[900px] 2xl:h-[900px] flex items-center justify-center p-2 lg:p-10">
          {/* Main Logo */}
          <div className="relative w-full h-full">
            <Image
              src={selectedLogo.src}
              alt="Main Display Logo"
              fill
              priority
              className="object-contain rounded-full shadow-lg"
            />
          </div>

          {/* Small Logos */}
          {smallLogos.map((logo, index) => (
            <button
              key={index}
              onClick={() =>
                setSelectedLogo({
                  src: logo.src,
                  title: logo.title,
                  subtitle: logo.subtitle,
                })
              }
              className={`absolute w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36 2xl:w-48 2xl:h-48 rounded-full overflow-hidden transition-transform duration-200 hover:scale-110 ${getLogoPositionClasses(
                logo.position
              )}`}
              aria-label={`Select ${logo.alt}`}
            >
              <Image src={logo.src} alt={logo.alt} fill className="object-cover" />
            </button>
          ))}
        </div>

        {/* Bottom Center Text (Dynamic) */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-xs md:text-lg 2xl:text-2xl text-center">
          <p className="font-semibold drop-shadow-md">{selectedLogo.title}</p>
          <p className="text-xs md:text-base drop-shadow-md">
            {selectedLogo.subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}
