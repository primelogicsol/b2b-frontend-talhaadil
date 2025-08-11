"use client";

import type React from "react";
import { useGlobalContext } from "@/context/ScreenProvider";
import Link from "next/link";
export interface AnimationCardProps {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  buttonText?: string;
  link?: string;
  onReadMore?: () => void;
}

export function AnimationCard({
  title = "Cool Wave System",
  description = "Upgrade to the latest energy and efficient air conditioning Frost technology with Eco Cool",
  icon,
  buttonText = "READ MORE",
  link = "",
  onReadMore,
}: AnimationCardProps) {
  const { is4K } = useGlobalContext();

  return (
    <div
      className={`group relative w-full ${
        is4K ? "max-w-md h-[460px] p-10" : "max-w-xs sm:max-w-sm h-96 p-8"
      } rounded-3xl shadow-lg overflow-hidden cursor-pointer transition-all duration-700 hover:shadow-2xl bg-white`}
    >
      <div className="absolute top-0 left-0 w-12 h-24 bg-[var(--primary-color)] opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out transform -translate-x-full -translate-y-8 group-hover:translate-x-0 group-hover:translate-y-0 rounded-br-3xl"></div>
      <div className="absolute bottom-0 right-0 w-12 h-24 bg-[var(--primary-color)] opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out transform translate-x-full translate-y-8 group-hover:translate-x-0 group-hover:translate-y-0 rounded-tl-3xl"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
        <div className="relative mb-8">
          <div
            className={`${
              is4K ? "w-24 h-24" : "w-20 h-20"
            } rounded-full bg-white border-4 border-[var(--primary-color)] flex items-center justify-center text-[var(--primary-color)] transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 group-hover:border-[var(--primary-hover-color)]`}
          >
            {icon}
          </div>
          <div
            className={`absolute inset-0 ${
              is4K ? "w-24 h-24" : "w-20 h-20"
            } rounded-full border-2 border-[var(--primary-light-text-color)] opacity-0 group-hover:opacity-100 scale-150 group-hover:scale-125 transition-all duration-700 ease-out`}
          ></div>
        </div>

        <h3
          className={`${
            is4K ? "text-3xl" : "text-2xl"
          } font-bold text-slate-800 mb-4 transition-all duration-500 group-hover:text-slate-900 group-hover:-translate-y-1`}
        >
          {title}
        </h3>

        <p
          className={`${
            is4K ? "text-base" : "text-sm"
          } text-gray-600 leading-relaxed mb-8 transition-all duration-500 group-hover:text-gray-700 group-hover:-translate-y-1`}
        >
          {description}
        </p>
        {link && (
          <Link
            href={link}
            className="inline-block px-4 py-2 bg-[var(--primary-color)] text-white rounded-md hover:bg-[var(--primary-hover-color)] no-underline"
          >
            Read More
          </Link>
        )}
      </div>

      <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-700">
        <div className="absolute top-4 right-4 w-32 h-32 rounded-full border border-orange-200"></div>
        <div className="absolute bottom-4 left-4 w-24 h-24 rounded-full border border-orange-200"></div>
      </div>
    </div>
  );
}

export interface CardData {
  icon: React.ReactNode;
  title: string;
  description: string;
  buttonText?: string;
  link?: string;
}

interface AnimationCardGridProps {
  data: CardData[];
}
export function AnimationCardGrid({ data }: AnimationCardGridProps) {
  const { is4K } = useGlobalContext();

  // Assign fixed links to first 4 cards
  const linkMap = [
    "/our-values",
    "/our-story",
    "/buisness-niche",
    "/our-team",
  ];

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center ${
        is4K ? "max-w-[1600px] mx-auto px-12 gap-6" : "px-4 max-w-7xl mx-auto"
      }`}
    >
      {data.map((card, index) => (
        <AnimationCard
          key={index}
          icon={card.icon}
          title={card.title}
          description={card.description}
          buttonText={card.buttonText}
          link={linkMap[index] || card.link || ""}
          onReadMore={() => alert(`Read more about: ${card.title}`)}
        />
      ))}
    </div>
  );
}
