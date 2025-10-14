"use client"

import type React from "react"
import { useGlobalContext } from "../../context/ScreenProvider"
import Link from "next/link"
interface HowItWorksProps {
  title: string
  description: string
  imageUrl: string
  imageAlt: string
  mini_desc: string
  phases: string[]
}

export default function HowItWorksSection({
  title,
  description,
  imageUrl,
  imageAlt,
  mini_desc,
  phases,
}: HowItWorksProps) {
  const { is4K } = useGlobalContext()

  return (
    <section className={is4K ? "mb-16 py-14 bg-white rounded-xl px-10" : "mb-16 py-12 bg-white rounded-xl px-8"}>
      <h2
        className={
          is4K
            ? "text-4xl sm:text-5xl font-bold text-center mb-10 text-[var(--primary-color)]"
            : "text-3xl sm:text-4xl font-bold text-center mb-8 text-[var(--primary-color)]"
        }
      >
        {title}
      </h2>
      <p
        className={
          is4K
            ? "text-xl text-[var(--primary-light-text-color)] text-center max-w-5xl mx-auto mb-12"
            : "text-lg text-left lg:text-center md:text-center  text-[var(--primary-light-text-color)] text-center max-w-4xl mx-auto mb-10"
        }
      >
        {description}
      </p>
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-6xl mx-auto">
        <div className="md:w-1/2 justify-center animate-fade-in-delay">
          <img
            src="/images/process1.webp"
            alt={imageAlt}
            width={500}
            height={1000}
            className={
              is4K
                ? "rounded-lg shadow-xl object-cover border border-gray-200 max-h-[600px] w-full"
                : "rounded-lg shadow-xl object-cover border border-gray-200 max-h-[500px] w-full"
            }
          />
        </div>
        <div className="text-left">
          <h3
            className={
              is4K
                ? "text-3xl sm:text-5xl font-bold text-[var(--primary-color)] text-center mb-6 animate-slide-in-up"
                : "text-2xl sm:text-4xl font-bold text-[var(--primary-color)] text-center mb-4 animate-slide-in-up"
            }
          >
            {mini_desc}
          </h3>
          <ul className="list-none p-0 m-0 space-y-3">
            {phases.map((phase, index) => (
              <li
                key={index}
                className={
                  is4K
                    ? "flex items-start text-xl text-[var(--primary-light-text-color)] animate-pop-in"
                    : "flex items-start text-lg text-[var(--primary-light-text-color)] animate-pop-in"
                }
                style={
                  {
                    "--animation-delay": `${0.1 * index}s`,
                  } as React.CSSProperties
                }
              >
                <span
                  className={
                    is4K
                      ? "flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-[var(--secondary-hover-color)] text-[var(--primary-header-color)] font-bold text-base mr-4 shadow-md"
                      : "flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-[var(--secondary-hover-color)] text-[var(--primary-header-color)] font-bold text-sm mr-3 shadow-md"
                  }
                >
                  {index + 1}
                </span>
                {phase}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-center gap-6 mt-12">
        <Link href="/registration" passHref>
          <button
            className={
              is4K
                ? "bg-[var(--secondary-color)] text-[var(--primary-header-color)] py-4 px-10 rounded-full text-xl font-semibold transition-all duration-300 hover:bg-[var(--secondary-hover-color)] hover:shadow-lg animate-pulse-once"
                : "bg-[var(--secondary-color)] text-[var(--primary-header-color)] py-3 px-8 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-[var(--secondary-hover-color)] hover:shadow-lg animate-pulse-once"
            }
          >
            Register Now
          </button>
        </Link>

        <Link href="/appointment" passHref>
          <button
            className={
              is4K
                ? "bg-[var(--primary-color)] text-[var(--primary-header-color)] py-4 px-10 rounded-full text-xl font-semibold transition-all duration-300 hover:bg-[var(--primary-hover-color)] hover:shadow-lg animate-pulse-once"
                : "bg-[var(--primary-color)] text-[var(--primary-header-color)] py-3 px-8 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-[var(--primary-hover-color)] hover:shadow-lg animate-pulse-once"
            }
          >
            Book Appointment
          </button>
        </Link>
      </div>
    </section>
  )
}
