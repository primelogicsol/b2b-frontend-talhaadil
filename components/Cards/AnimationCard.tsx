"use client";

import type React from "react";
import { useGlobalContext } from "@/components/Context/GlobalProvider";

export interface AnimationCardProps {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  buttonText?: string;
  onReadMore?: () => void;
}

export function AnimationCard({
  title = "Cool Wave System",
  description = "Upgrade to the latest energy and efficient air conditioning Frost technology with Eco Cool",
  icon,
  buttonText = "READ MORE",
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
}

interface AnimationCardGridProps {
  data: CardData[];
}

export function AnimationCardGrid({ data }: AnimationCardGridProps) {
  const { is4K } = useGlobalContext();

  return (
    <div className={`flex flex-wrap justify-center gap-4 ${is4K ? "px-12 gap-6" : "px-4"}`}>
      {data.map((card, index) => (
        <AnimationCard
          key={index}
          icon={card.icon}
          title={card.title}
          description={card.description}
          buttonText={card.buttonText}
          onReadMore={() => alert(`Read more about: ${card.title}`)}
        />
      ))}
    </div>
  );
}
