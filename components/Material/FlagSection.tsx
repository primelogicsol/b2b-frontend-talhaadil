"use client";

import Image from "next/image";
import { useState } from "react";

export default function HeroSection() {
  const initialMainLogo = "/images/flags/14.webp"; // Default main logo
  const [selectedLogoSrc, setSelectedLogoSrc] = useState(initialMainLogo);

  const smallLogos = [
    {
      src: "/images/flags/14.webp",
      alt: "Mountains logo",
      position: "top-left",
    },
    { src: "/images/flags/15.webp", alt: "Bird logo", position: "top-right" },
    {
      src: "/images/flags/16.webp",
      alt: "Diamond logo",
      position: "bottom-right",
    },
    { src: "/images/flags/17.webp", alt: "Boat logo", position: "bottom-left" },
    { src: "/images/flags/18.webp", alt: "Flower logo", position: "left" },
    { src: "/images/flags/19.webp", alt: "Shawl logo", position: "right" },
  ];

  const getLogoPositionClasses = (position: string) => {
    switch (position) {
      case "top-left":
        return "top-[10%] left-[10%] md:top-[17%] md:left-[17%]";
      case "top-right":
        return "top-[10%] right-[10%] md:top-[17%] md:right-[17%]";
      case "bottom-right":
        return "bottom-[10%] right-[10%] md:bottom-[17%] md:right-[17%]";
      case "bottom-left":
        return "bottom-[10%] left-[10%] md:bottom-[17%] md:left-[17%]";
      case "left":
        return "left-[5%] top-1/2 -translate-y-1/2 md:left-[10%]";
      case "right":
        return "right-[5%] top-1/2 -translate-y-1/2 md:right-[10%]";
      default:
        return "";
    }
  };

  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      {/* Background Images */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/flags/bg-pic.webp"
          alt="Distressed US Flag Background"
          fill
          priority
          className="object-fit object-left w-1/2 md:w-auto"
          style={{ objectPosition: "left center" }}
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 w-full h-[90vh] flex flex-col items-center justify-center p-4">
        {/* Top Right Text */}
        <div className="absolute top-8 right-2 text-center lg:right-[20%] text-white text-md md:text-lg lg:text-xl">
          <p className="font-semibold drop-shadow-md">
            DKC: Elevating Kashmir&apos;s Craft to Global Excellence
          </p>
          <p className="text-sm md:text-base drop-shadow-md">
            Luxury, Heritage, and Timeless Craft.
          </p>
        </div>

        {/* Main Logo and Small Logos Container */}
        <div className="relative w-[400px] h-[400px] md:w-[500px] md:h-[500px] lg:w-[700px] lg:h-[700px] flex items-center justify-center p-2 lg:p-10">
          {/* Main Logo */}
          <div className="relative w-full h-full">
            <Image
              src={selectedLogoSrc || "/placeholder.svg"}
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
              onClick={() => setSelectedLogoSrc(logo.src)}
              className={`absolute w-24 h-24 md:w-26 md:h-26 lg:w-36 lg:h-36 rounded-full overflow-hidden transition-transform duration-200 hover:scale-110 ${getLogoPositionClasses(
                logo.position
              )}`}
              aria-label={`Select ${logo.alt}`}
            >
              <Image
                src={logo.src || "/placeholder.svg"}
                alt={logo.alt}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>

        {/* Bottom Left Text */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white md:text-lg lg:text-xl text-center">
          <p className="font-semibold drop-shadow-md">
            DKC Himalayan Pashmina Luxe
          </p>
          <p className="text-sm md:text-base drop-shadow-md">
            Feel the Luxury, Wear the Heritage.
          </p>
        </div>
      </div>
    </section>
  );
}
