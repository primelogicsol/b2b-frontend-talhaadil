"use client";

import Image from "next/image";
import { CloudCog } from "lucide-react";
import Link from "next/link";

interface HeroSectionProps {
  leftImage?: string;
  rightImage?: string;
  tagline?: string;
  title?: string;
  highlightedWords?: { one: string; two: string };
  description?: string;
  subTitle?: string;
  subDescription?: string;
  buttonText?: string;
}

export default function RectangleSection({
  leftImage = "/placeholder.svg?height=600&width=400",
  rightImage = "/placeholder.svg?height=600&width=400",
  tagline = "MEET THE HEART OF DE KOSHUR CRAFTS",
  title = "Passionate Individuals Driving",
  highlightedWords = { one: "Tradition", two: "Innovation" },
  description = `
At De Koshur Crafts, our team is the heart of everything we do. Our team members are more than just employees—they are passionate individuals who are deeply committed to preserving the rich heritage of Kashmiri craftsmanship while empowering artisans to thrive in the global marketplace. Each member brings a unique set of skills, experience, and vision to the table, working together towards a shared mission of empowerment, sustainability, and ethical business practices.
Meet the people who are bringing this vision to life.`,
  subTitle = "Empowering Artisans, Shaping Futures",
  subDescription = `Our diverse team blends traditional wisdom with forward-thinking strategies to build a sustainable future for Kashmiri crafts. From design and logistics to storytelling and outreach, every role plays a vital part in uplifting artisan communities.`,
  buttonText = "JOIN OUR MISSION OF EMPOWERMENT",
}: HeroSectionProps) {
  return (
    <section className="relative py-2 md:py-4 lg:py-6 bg-white overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Section - Responsive Images */}
        <div className="relative flex flex-col items-center justify-center w-full space-y-8 lg:space-y-0 lg:min-h-[600px] xl:min-h-[700px]">
          {/* Mobile stacked layout */}
          <div className="relative w-full max-w-xs sm:max-w-sm h-[400px] md:h-[500px] lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-[70%] lg:-translate-y-[40%] lg:w-[45%] lg:h-[70%]">
            <div className="absolute inset-0 bg-[var(--secondary-color)] rounded-[30px] transform translate-x-4 translate-y-8 z-0 shadow-lg before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(#fff_1px,transparent_1px)] before:[background-size:10px_10px] before:opacity-20" />
            <div className="relative z-10 w-full h-full rounded-[30px] overflow-hidden shadow-xl transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
              <Image
                src={leftImage}
                alt="Team member"
                layout="fill"
                objectFit="cover"
                className="rounded-[30px]"
              />
            </div>
          </div>

          <div className="relative w-full max-w-xs sm:max-w-sm h-[400px] md:h-[500px] lg:absolute lg:top-1/2 lg:left-1/2 lg:translate-x-[20%] lg:-translate-y-[60%] lg:w-[45%] lg:h-[70%]">
            <div className="absolute inset-0 bg-[var(--primary-color)] rounded-[30px] transform -translate-x-4 -translate-y-8 z-0 shadow-lg before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(#fff_1px,transparent_1px)] before:[background-size:10px_10px] before:opacity-20" />
            <div className="relative z-10 w-full h-full rounded-[30px] overflow-hidden shadow-xl transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
              <Image
                src={rightImage}
                alt="Team member"
                layout="fill"
                objectFit="cover"
                className="rounded-[30px]"
              />
            </div>
          </div>
        </div>
        {/* Right Section */}
        <div className="flex flex-col justify-center text-center lg:text-left mt-12 lg:mt-0 px-1 sm:px-0">
          <div className="flex items-center justify-center lg:justify-start mb-4">
            <div className="w-8 h-1 bg-[var(--secondary-color)] rounded-full mr-3"></div>
            <p className="text-sm font-semibold text-gray-600 uppercase tracking-wider">
              {tagline}
            </p>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-[var(--primary-dark-slate)]">
            {title}{" "}
            <span className="text-[var(--secondary-color)]">
              {highlightedWords.one}
            </span>{" "}
            and{" "}
            <span className="text-[var(--secondary-color)]">
              {highlightedWords.two}
            </span>
          </h1>
          <p className="text-base sm:text-lg text-[var(--primary-light-text-color)] mb-8 max-w-2xl mx-auto lg:mx-0 whitespace-pre-line text-left">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8 text-left">
            <div className="flex-shrink-0 p-3 rounded-full bg-[var(--secondary-light-color)] text-[var(--secondary-color)] transition-transform duration-300 ease-in-out hover:scale-110">
              <CloudCog className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-center lg:text-left text-lg sm:text-xl font-bold text-[var(--primary-dark-slate)] mb-2">
                {subTitle}
              </h3>
              <p className="text-sm sm:text-base text-[var(--primary-light-text-color)] max-w-2xl mx-auto lg:mx-0 text-left">
                {subDescription}
              </p>
            </div>
          </div>

          <a href="/registration" className="max-w-xs mx-auto lg:mx-0">
            <button className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 sm:font-bold border border-transparent text-sm sm:text-base font-bold rounded-full shadow-lg bg-[var(--secondary-color)] text-white hover:bg-[var(--secondary-hover-color)] transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--secondary-color)] transform hover:-translate-y-1 w-full">
              {buttonText}
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
