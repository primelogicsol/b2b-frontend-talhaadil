"use client";

import React from "react";
import Image from "next/image";

interface HowItWorksProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  mini_desc:string;
  phases: string[];
}

export default function HowItWorksSection({
  title,
  description,
  imageUrl,
  imageAlt,
  mini_desc,
  phases,
}: HowItWorksProps) {
  return (
    <section className="mb-16 py-12 bg-white rounded-xl px-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-[var(--primary-color)]">
        {title}
      </h2>
      <p className="text-lg text-[var(--primary-light-text-color)] text-center max-w-4xl mx-auto mb-10">
        {description}
      </p>
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-6xl mx-auto">
        <div className="md:w-1/2 justify-center animate-fade-in-delay hidden md:flex">
          <img
            src={imageUrl}
            alt={imageAlt}
            width={600}
            height={1000}
            className="rounded-lg shadow-xl object-cover border border-gray-200 max-h-[500px] w-full"
          />
        </div>
        <div className="md:w-1/2 space-y-4 text-left">
          <h3 className="text-2xl sm:text-4xl font-bold text-[var(--primary-color)] text-center mb-4 animate-slide-in-up">
            {mini_desc}
          </h3>
          <ul className="list-none p-0 m-0 space-y-3">
            {phases.map((phase, index) => (
              <li
                key={index}
                className="flex items-start text-lg text-[var(--primary-light-text-color)] animate-pop-in"
                style={{
                  "--animation-delay": `${0.1 * index}s`,
                } as React.CSSProperties}
              >
                <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-[var(--secondary-hover-color)] text-[var(--primary-header-color)] font-bold text-sm mr-3 shadow-md">
                  {index + 1}
                </span>
                {phase}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-center gap-6 mt-12">
        <button className="bg-[var(--secondary-color)] text-[var(--primary-header-color)] py-3 px-8 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-[var(--secondary-hover-color)] hover:shadow-lg animate-pulse-once">
          Register Now
        </button>
       
        <button className="bg-[var(--primary-color)] text-[var(--primary-header-color)] py-3 px-8 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-[var(--primary-hover-color)] hover:shadow-lg animate-pulse-once">
          Book Appointment
        </button>
      </div>
    </section>
  );
}
