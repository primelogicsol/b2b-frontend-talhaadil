"use client"

import { useState, useEffect } from "react"
import { motion, useInView, Variants, AnimatePresence } from "framer-motion"
import { useRef } from "react"
import { useGlobalContext } from "@/context/ScreenProvider"
import Image from "next/image"
import { XCircle, CheckCircle } from "lucide-react"
import * as Icons from "lucide-react"
import Link from "next/link"

type LandingPageData = {
    hero: {
        headline: string
        subtext: string
        ctaButtons: string[]
    }
    whyDropshipping: {
        heading: string
        problems: string[]
        solutions: string[]
    }
    platformDifference: {
        heading: string
        features: { icon: string; title: string; description: string }[]
        exclusivity: string
    }
    capabilities?: {
        heading: string
        subheading: string
        sections: { icon: string; title: string; items: string[] }[]
    }
    eligibility: {
        heading: string
        requirements: string[]
    }
    pricing: {
        heading: string
        freeOffer: { title: string; description: string; note: string }
        packages: { name: string; price: string; features: string[] }[]
        range: string
    }
    technology?: {
        heading: string
        description: string
        features: { icon: string; title: string; description: string }[]
        support: string
    }
    platformAdvantage?: {
        heading: string
        description: string
        sections: { title: string; items: string[] }[]
    }
    workflow: {
        heading: string
        steps: string[]
    }
    faq: { question: string; answer: string }[]
    apiIntegration?: {
        heading?: string
        description?: string
        features?: { icon: string; title: string; description: string }[]
        support: { title: string; description: string; note: string }
    }
    finalCta: {
        heading: string
        subtext: string
        ctaButtons: string[]
    }
}

export default function InsidePage({ landingPageData }: { landingPageData: LandingPageData }) {
    const [activeStep, setActiveStep] = useState<number | null>(null)
    const { is4K } = useGlobalContext()
    const [slideUpVisible, setSlideUpVisible] = useState(false)
    const [activeItem, setActiveItem] = useState<number | null>(null)
    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 50, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.6, ease: "easeOut" },
        },
        hover: {
            y: -8,
            scale: 1.02,
            transition: { duration: 0.3, ease: "easeInOut" },
        },
    }

    const checkmarkVariants: Variants = {
        hidden: { scale: 0, rotate: -180 },
        visible: {
            scale: 1,
            rotate: 0,
            transition: { duration: 0.4, delay: 0.2, ease: "easeOut" },
        },
    }

    const fadeInUp: Variants = {
        hidden: { opacity: 0, y: 60 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    }

    // Container with staggered children
    const staggerContainer: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    }

    // Card hover effect
    const cardHover: Variants = {
        rest: { scale: 1, y: 0 },
        hover: {
            scale: 1.05,
            y: -8,
            transition: { duration: 0.3, ease: "easeOut" },
        },
    }
    // Refs for scroll animations
    const heroRef = useRef(null)
    const slideUpRef = useRef(null)
    const isSlideUpInView = useInView(slideUpRef, { once: true, margin: "-100px" })

    useEffect(() => {
        if (isSlideUpInView) {
            const timer = setTimeout(() => setSlideUpVisible(true), 500)
            return () => clearTimeout(timer)
        }
    }, [isSlideUpInView])

    const containerClass = is4K ? "max-w-[1800px] text-xl" : "max-w-[1200px] text-base"
    const headingClass = is4K ? "text-6xl" : "text-4xl"
    const subHeadingClass = is4K ? "text-4xl" : "text-2xl"

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            {/* Hero Section */}
            <motion.section
                ref={heroRef}
                className="relative overflow-hidden bg-gradient-to-br from-[var(--primary-color)] via-[var(--primary-hover-color)] to-[var(--secondary-color)] text-white"
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
            >
                <div className="absolute inset-0 bg-black/10"></div>
                <motion.div
                    className={`relative z-10 ${containerClass} mx-auto px-6 py-24 lg:py-32`}
                    animate={{
                        backgroundPosition: ["0% 0%", "100% 100%"],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                    }}
                >
                    <div className="text-center space-y-8">
                        <motion.h1 className={`${headingClass} font-bold leading-tight`} variants={fadeInUp}>
                            {landingPageData.hero.headline}
                        </motion.h1>
                        <motion.p
                            className={`${is4K ? "text-2xl" : "text-xl"} leading-relaxed max-w-4xl mx-auto text-blue-100`}
                            variants={fadeInUp}
                        >
                            {landingPageData.hero.subtext}
                        </motion.p>
                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
                            variants={staggerContainer}
                        >
                            {landingPageData.hero.ctaButtons.map((button, index) => (
                                <motion.button
                                    key={index}
                                    className={`${is4K ? "px-10 py-5 text-xl" : "px-8 py-4 text-lg"} bg-white text-[var(--primary-color)] font-semibold rounded-lg hover:bg-[var(--secondary-light-color)] hover:text-[var(--primary-hover-color)] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1`}
                                    variants={fadeInUp}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {button}
                                </motion.button>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            </motion.section>

            {/* Why Dropshipping Section */}
            <motion.section
                className={`mx-auto px-6 py-20 ${containerClass}`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left side: Image */}
                    <motion.div className="flex justify-center" variants={fadeInUp}>
                        <Image
                            src="/images/why-core-trade.png"
                            alt="Why Core Trade"
                            width={600}
                            height={700}
                            className="rounded-2xl shadow-lg w-full max-w-md object-cover"
                        />
                    </motion.div>

                    {/* Right side: Heading + Points */}
                    <motion.div
                        className="space-y-8"
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >
                        <motion.h2
                            className={`font-bold text-[var(--primary-color)] text-left ${is4K ? "text-5xl" : "text-3xl sm:text-4xl"
                                }`}
                            variants={fadeInUp}
                        >
                            {landingPageData.whyDropshipping.heading}
                        </motion.h2>

                        {/* Problems */}
                        <div>
                            <h3
                                className={`font-semibold text-[var(--secondary-color)] mb-4 flex items-center gap-2 ${is4K ? "text-2xl" : "text-xl"
                                    }`}
                            >
                                <XCircle className="w-6 h-6" />
                                Current Problems:
                            </h3>
                            <div className="space-y-4">
                                {landingPageData.whyDropshipping.problems.map((problem, index) => (
                                    <motion.div
                                        key={index}
                                        className="flex items-start gap-3"
                                        variants={fadeInUp}
                                    >
                                        <XCircle className="w-5 h-5 text-[var(--secondary-color)] mt-1 flex-shrink-0" />
                                        <p
                                            className={`text-gray-700 ${is4K ? "text-xl" : "text-base"
                                                }`}
                                        >
                                            {problem}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Solutions */}
                        <div>
                            <h3
                                className={`font-semibold text-[var(--primary-color)] mb-4 flex items-center gap-2 ${is4K ? "text-2xl" : "text-xl"
                                    }`}
                            >
                                <CheckCircle className="w-6 h-6" />
                                Core Trade Provides:
                            </h3>
                            <div className="space-y-4">
                                {landingPageData.whyDropshipping.solutions.map((solution, index) => (
                                    <motion.div
                                        key={index}
                                        className="flex items-start gap-3"
                                        variants={fadeInUp}
                                    >
                                        <CheckCircle className="w-5 h-5 text-[var(--primary-color)] mt-1 flex-shrink-0" />
                                        <p
                                            className={`text-gray-700 ${is4K ? "text-xl" : "text-base"
                                                }`}
                                        >
                                            {solution}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.section>

            <motion.section
                className="bg-gradient-to-r from-slate-50 to-blue-50 py-20"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
            >
                <div className={`${containerClass} mx-auto px-6`}>
                    <motion.h2
                        className={`${subHeadingClass} font-bold text-center mb-16 text-[var(--primary-color)]`}
                        variants={fadeInUp}
                    >
                        {landingPageData.platformDifference.heading}
                    </motion.h2>

                    <motion.div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12" variants={staggerContainer}>
                        {landingPageData.platformDifference.features.map((feature, index) => {
                            const Icon = (Icons as any)[feature.icon] || Icons.HelpCircle

                            return (
                                <motion.div
                                    key={index}
                                    className="group relative bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200 overflow-hidden"
                                    variants={cardHover}
                                    initial="rest"
                                    whileHover="hover"
                                >

                                    <div className="relative mb-6">
                                        <div className="w-14 h-14 bg-gradient-to-br from-[var(--primary-dark-slate)] via-[var(--primary-color)] to-[var(--primary-color)] rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                                            <Icon className={`${is4K ? "w-7 h-7" : "w-6 h-6"} text-white`} />
                                        </div>
                                    </div>

                                    <div className="relative">
                                        <h3
                                            className={`${is4K ? "text-xl" : "text-lg"} font-bold mb-3 text-gray-900 group-hover:text-[var(--primary-color)] transition-colors duration-300`}
                                        >
                                            {feature.title}
                                        </h3>
                                        <p
                                            className={`${is4K ? "text-base" : "text-sm"} text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300`}
                                        >
                                            {feature.description}
                                        </p>
                                    </div>

                                    <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-[var(--primary-dark-slate)] via-[var(--primary-color)] to-[var(--primary-color)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                                </motion.div>
                            )
                        })}
                    </motion.div>

                    <motion.div className="text-center" variants={fadeInUp}>
                        <p className={`${is4K ? "text-xl" : "text-lg"} font-semibold text-[var(--secondary-color)]`}>
                            {landingPageData.platformDifference.exclusivity}
                        </p>
                    </motion.div>
                </div>
            </motion.section>

            {landingPageData.capabilities && <section className={`px-4 md:px-8 lg:px-12 py-12 ${is4K ? "mx-auto max-w-[2400px] 2xl:py-20" : ""}`}>
                <div className={`w-full ${is4K ? " md:px-24" : "px-2 md:px-8"} flex items-center justify-center`}>
                    <div className="w-full">
                        {/* Heading */}
                        <h2 className={`text-center text-[var(--primary-color)] font-bold mb-12 ${is4K ? "text-5xl" : "text-2xl md:text-3xl lg:text-4xl"}`}>
                            {landingPageData.capabilities.heading}
                        </h2>
                        {/*sub Heading */}
                        <h2 className={`text-center text-[var(--primary-color)] mb-7 ${is4K ? "text-5xl" : "text-1xl md:text-2xl lg:text-4xl"}`}>
                            {landingPageData.capabilities.subheading}
                        </h2>

                        {/* Desktop Horizontal Accordion */}
                        <div className={`hidden lg:flex gap-4 ${is4K ? "h-[500px]" : "h-96"} w-full`}>
                            {landingPageData.capabilities.sections.map((item, index) => {
                                const isActive = activeItem === index
                                const Icon = (Icons as any)[item.icon] || Icons.HelpCircle

                                return (
                                    <motion.div
                                        key={index}
                                        className={`relative cursor-pointer rounded-3xl border-2 border-[var(--secondary-hover-color)] bg-[var(--primary-color)] backdrop-blur-sm overflow-hidden ${isActive ? "flex-[4]" : "flex-1"
                                            }`}
                                        onClick={() => setActiveItem(index)}
                                        layout
                                        transition={{
                                            type: "spring",
                                            stiffness: 400,
                                            damping: 40,
                                            mass: 0.8,
                                        }}
                                        whileHover={{
                                            scale: isActive ? 1 : 1.03,
                                            transition: { duration: 0.2, ease: "easeOut" },
                                        }}
                                        whileTap={{
                                            scale: 0.97,
                                            transition: { duration: 0.1 },
                                        }}
                                    >
                                        <div className={`relative h-full w-full ${is4K ? "p-10" : "p-6"} flex flex-col justify-center`}>
                                            <AnimatePresence mode="wait">
                                                {isActive ? (
                                                    <motion.div
                                                        key="expanded"
                                                        initial={{ opacity: 0, y: 30, scale: 0.9 }}
                                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                                        exit={{ opacity: 0, y: -30, scale: 0.9 }}
                                                        transition={{
                                                            duration: 0.4,
                                                            ease: [0.25, 0.46, 0.45, 0.94],
                                                        }}
                                                        className="text-white"
                                                    >
                                                        <div className={`flex items-center gap-4 ${is4K ? "mb-8" : "mb-6"}`}>
                                                            {Icon && (
                                                                <Icon
                                                                    className={`${is4K ? "w-16 h-16" : "w-12 h-12"} text-[var(--secondary-hover-color)]`}
                                                                />
                                                            )}
                                                            <h2 className={`${is4K ? "text-5xl" : "text-4xl"} font-bold`}>{item.title}</h2>
                                                        </div>
                                                        <ul className={`list-disc pl-6 space-y-2 ${is4K ? "text-xl" : "text-lg"} leading-relaxed opacity-90`}>
                                                            {item.items.map((point, i) => (
                                                                <li key={i}>{point}</li>
                                                            ))}
                                                        </ul>
                                                    </motion.div>
                                                ) : (
                                                    <motion.div
                                                        key="collapsed"
                                                        initial={{ opacity: 0, rotate: -90 }}
                                                        animate={{ opacity: 1, rotate: -90 }}
                                                        exit={{ opacity: 0, rotate: -90 }}
                                                        transition={{
                                                            duration: 0.3,
                                                            ease: "easeInOut",
                                                        }}
                                                        className="h-full flex flex-col items-center justify-center gap-4"
                                                    >
                                                        {Icon && (
                                                            <Icon className={`${is4K ? "w-12 h-12" : "w-8 h-8"} text-[var(--secondary-hover-color)]`} />
                                                        )}
                                                        <h3 className={`${is4K ? "text-2xl" : "text-xl"} text-white font-semibold whitespace-nowrap`}>
                                                            {item.title}
                                                        </h3>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>

                                        {/* Hover overlay */}
                                        <motion.div
                                            className="absolute inset-0 bg-white/5 opacity-0"
                                            whileHover={{ opacity: isActive ? 0 : 1 }}
                                            transition={{ duration: 0.2 }}
                                        />
                                    </motion.div>
                                )
                            })}
                        </div>

                        {/* Mobile Vertical Stack */}
                        <div className="lg:hidden space-y-6">
                            {landingPageData.capabilities.sections.map((item, index) => {
                                const Icon = (Icons as any)[item.icon] || Icons.HelpCircle
                                return (
                                    <motion.div
                                        key={index}
                                        className={`rounded-3xl border-2 border-[var(--secondary-hover-color)] bg-[var(--primary-color)] backdrop-blur-sm ${is4K ? "p-10" : "p-6"}`}
                                        initial={{ opacity: 0, y: 60, scale: 0.8 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        transition={{
                                            duration: 0.6,
                                            delay: index * 0.15,
                                            type: "spring",
                                            stiffness: 120,
                                            damping: 20,
                                        }}
                                        whileHover={{
                                            scale: 1.03,
                                            transition: { duration: 0.2, ease: "easeOut" },
                                        }}
                                        whileTap={{
                                            scale: 0.97,
                                            transition: { duration: 0.1 },
                                        }}
                                    >
                                        <div className="text-white">
                                            <div className={`flex items-center gap-4 ${is4K ? "mb-6" : "mb-4"}`}>
                                                {Icon && (
                                                    <Icon className={`${is4K ? "w-12 h-12" : "w-8 h-8"} text-[var(--secondary-hover-color)]`} />
                                                )}
                                                <h2 className={`${is4K ? "text-3xl" : "text-2xl"} font-bold`}>{item.title}</h2>
                                            </div>
                                            <ul className={`list-disc pl-6 space-y-2 ${is4K ? "text-lg" : "text-base"} leading-relaxed opacity-90`}>
                                                {item.items.map((point, i) => (
                                                    <li key={i}>{point}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </motion.div>
                                )
                            })}
                        </div>
                    </div>
                </div>

            </section>}
            {/* Slide-Up Content Section */}
            <section className="w-full py-16 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-[var(--primary-dark-slate)] via-[var(--primary-color)] to-[var(--primary-color)]">
                <div className="max-w-4xl mx-auto">
                    <div className="rounded-2xl shadow-xl bg-white p-10 border-l-8 border-[var(--secondary-color)]">
                        {/* Heading */}
                        <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary-color)] mb-6">
                            {landingPageData.eligibility.heading}
                        </h2>

                        {/* List */}
                        <ul className="space-y-4">
                            {landingPageData.eligibility.requirements.map((item, index) => (
                                <li key={index} className="flex items-start space-x-3">
                                    <span className="flex-shrink-0 w-2 h-2 rounded-full bg-[var(--secondary-color)] shadow-md mt-2" />
                                    <span className="text-lg text-[var(--primary-color)] leading-relaxed">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        {/* Highlight */}
                        <Link href="/registration">
                         <div className="mt-8 p-4 rounded-xl bg-[var(--primary-hover-color)] text-white text-center font-semibold cursor-pointer hover:opacity-90 transition">
                             Start your journey today — no barriers, just growth.
                        </div>
                        </Link>
                    </div>
                </div>
            </section>
            {/* Pricing Section */}
            <motion.section
                className={`${containerClass} mx-auto px-6 py-20`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
            >
                <motion.h2
                    className={`${subHeadingClass} text-2xl md:text-3xl lg:text-4xl font-extrabold text-center mb-16 text-[var(--primary-color)]`}
                    variants={fadeInUp}
                >
                    {landingPageData.pricing.heading}
                </motion.h2>

                <motion.div
                    className="bg-gradient-to-br from-[var(--primary-dark-slate)] via-[var(--primary-color)] to-[var(--primary-color)] border-2 border-[var(--secondary-color)]/20 p-8 rounded-3xl mb-16 text-center relative overflow-hidden"
                    variants={fadeInUp}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="relative z-10">
                        <h3 className={`${is4K ? "text-3xl" : "text-2xl"} font-bold text-[var(--secondary-color)] mb-4`}>
                            {landingPageData.pricing.freeOffer.title}
                        </h3>
                        <p
                            className={`${is4K ? "text-lg" : "text-base"} text-white mb-2 max-w-2xl mx-auto leading-relaxed`}
                        >
                            {landingPageData.pricing.freeOffer.description}
                        </p>
                        <p className={`${is4K ? "text-base" : "text-sm"} text-white font-medium`}>
                            {landingPageData.pricing.freeOffer.note}
                        </p>
                    </div>
                </motion.div>

                <motion.div className="grid md:grid-cols-3 gap-8 mb-12" variants={staggerContainer}>
                    {landingPageData.pricing.packages.map((pkg, index) => (
                        <motion.div
                            key={index}
                            className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-[var(--secondary-color)]/40 relative overflow-hidden group"
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            whileHover="hover"
                            viewport={{ once: true }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-[var(--secondary-light-color)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <div className="relative z-10">
                                <h3 className={`${is4K ? "text-2xl" : "text-xl"} font-bold text-[var(--primary-color)] mb-6`}>
                                    {pkg.name}
                                </h3>

                                <div className="mb-8">
                                    <div
                                        className={`${is4K ? "text-5xl" : "text-4xl"} font-bold text-[var(--secondary-color)] mb-2 group-hover:scale-105 transition-transform duration-300`}
                                    >
                                        {pkg.price}
                                    </div>
                                </div>

                                <ul className="space-y-4">
                                    {pkg.features.map((feature, featureIndex) => (
                                        <motion.li
                                            key={featureIndex}
                                            className={`${is4K ? "text-base" : "text-sm"} text-[var(--primary-hover-color)] flex items-start gap-3`}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                            transition={{ delay: featureIndex * 0.1 }}
                                        >
                                            <motion.div
                                                className="flex-shrink-0 w-6 h-6 bg-[var(--primary-color)] rounded-full flex items-center justify-center mt-0.5 shadow-md"
                                                variants={checkmarkVariants}
                                            >
                                                <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </motion.div>
                                            <span className="leading-relaxed font-medium">{feature}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div className="text-center" variants={fadeInUp}>
                    <p
                        className={`${is4K ? "text-2xl" : "text-xl"} font-bold text-[var(--secondary-color)] bg-[var(--secondary-light-color)]/30 px-8 py-4 rounded-2xl inline-block`}
                    >
                        {landingPageData.pricing.range}
                    </p>
                </motion.div>
            </motion.section>

            {/* Technology Section */}
            {landingPageData.technology && (<motion.section
                className="bg-gradient-to-br from-[var(--primary-dark-slate)] via-[var(--primary-color)] to-[var(--primary-color)] text-white py-20"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
            >
                <div className={`${containerClass} mx-auto px-6`}>
                    <motion.h2 className={`${subHeadingClass} font-bold text-center mb-8 text-2xl md:text-3xl lg:text-4xl`} variants={fadeInUp}>
                        {landingPageData.technology.heading}
                    </motion.h2>

                    <motion.p
                        className={`${is4K ? "text-lg" : "text-base"} text-center mb-16 text-gray-300 leading-relaxed max-w-4xl mx-auto`}
                        variants={fadeInUp}
                    >
                        {landingPageData.technology.description}
                    </motion.p>

                    <motion.div
                        className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12"
                        variants={staggerContainer}
                    >
                        {landingPageData.technology.features.map((feature, index) => {
                            const Icon = (Icons as any)[feature.icon] || Icons.HelpCircle

                            return (
                                <motion.div
                                    key={index}
                                    className="bg-transparent p-6 rounded-xl border border-white/50 transition-colors duration-300"
                                    variants={cardHover}
                                    initial="rest"
                                    whileHover="hover"
                                >
                                    <div className={`${is4K ? "text-4xl" : "text-3xl"} mb-4`}>
                                        <Icon />
                                    </div>
                                    <h3 className={`${is4K ? "text-xl" : "text-lg"} font-semibold mb-3`}>
                                        {feature.title}
                                    </h3>
                                    <p className={`${is4K ? "text-base" : "text-sm"} text-gray-300 leading-relaxed`}>
                                        {feature.description}
                                    </p>
                                </motion.div>
                            )
                        })}

                    </motion.div>

                    <motion.div className="text-center" variants={fadeInUp}>
                        <p className={`${is4K ? "text-lg" : "text-base"} text-white`}>{landingPageData.technology.support}</p>
                    </motion.div>
                </div>
            </motion.section>)}
            {landingPageData.platformAdvantage && (
                <motion.section
                    className={`${containerClass} mx-auto px-6 py-32 relative overflow-hidden`}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                >

                    <div className="relative z-10">
                        <motion.h2
                            className={`${subHeadingClass} font-black text-center mb-12 bg-gradient-to-r from-[var(--primary-color)] via-[var(--primary-hover-color)] to-[var(--secondary-color)] bg-clip-text text-transparent drop-shadow-sm text-2xl md:text-3xl lg:text-4xl`}
                            variants={fadeInUp}
                        >
                            {landingPageData.platformAdvantage.heading}
                        </motion.h2>

                        <motion.p
                            className={`${is4K ? "text-xl" : "text-lg"} text-center mb-20 text-[var(--primary-color)]/80 leading-relaxed max-w-5xl mx-auto font-medium`}
                            variants={fadeInUp}
                        >
                            {landingPageData.platformAdvantage.description}
                        </motion.p>

                        <div className="space-y-8">
                            {landingPageData.platformAdvantage.sections.map((section, index) => (
                                <motion.div
                                    key={index}
                                    className="group bg-white/80 backdrop-blur-sm p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/50 hover:border-[var(--primary-hover-color)]/50 hover:-translate-y-2"
                                    variants={fadeInUp}
                                >
                                    <div className="w-20 h-1.5 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] rounded-full mb-8 group-hover:w-32 transition-all duration-500"></div>

                                    <h3
                                        className={`${is4K ? "text-3xl" : "text-2xl"} font-bold mb-8 bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-hover-color)] bg-clip-text text-transparent`}
                                    >
                                        {section.title}
                                    </h3>
                                    <div className="grid sm:grid-cols-2 gap-6">
                                        {section.items.map((item, itemIndex) => (
                                            <div
                                                key={itemIndex}
                                                className={`${is4K ? "text-lg" : "text-base"} text-[var(--primary-color)]/90 leading-relaxed flex items-start gap-3 group-hover:text-[var(--primary-hover-color)] transition-colors duration-300`}
                                            >
                                                <div className="w-2 h-2 bg-[var(--secondary-color)] rounded-full mt-2.5 flex-shrink-0"></div>
                                                <span className="font-medium">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.section>

            )}
            <section>
                <div className="w-full max-w-4xl mx-auto p-6 md:p-8">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary-color)] mb-4">{landingPageData.workflow.heading}</h2>
                        <div className="w-24 h-1 bg-[var(--secondary-color)] mx-auto rounded-full"></div>
                    </div>

                    {/* Desktop Layout */}
                    <div className="relative z-10 justify-between items-start hidden md:flex">
                        {/* Progress Line */}
                        <div className="absolute top-12 left-12 right-12 h-1 bg-[var(--secondary-light-color)] z-0">
                            <div
                                className="h-full bg-[var(--secondary-color)] rounded-full"
                            ></div>
                        </div>

                        {landingPageData.workflow.steps.map((step, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center cursor-default z-10"
                            >
                                {/* Step Circle */}
                                <div className="w-24 h-24 rounded-full flex items-center justify-center text-white font-bold text-lg transition-all duration-300 transform bg-[var(--primary-color)]">
                                    {index + 1}
                                </div>

                                {/* Step Content */}
                                <div className="mt-6 text-center max-w-xs">
                                    <div className="p-4 rounded-lg">
                                        <p className="text-[var(--primary-color)] font-semibold leading-relaxed max-w-[90px]">
                                            {step}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Mobile Layout - Simple Points */}
                    <div className="md:hidden space-y-3 px-4">
                        {landingPageData.workflow.steps.map((step, index) => (
                            <div key={index} className="flex items-start space-x-3">
                                {/* Step Number (Fixed Circle) */}
                                <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full bg-[var(--primary-color)] text-white text-sm font-medium">
                                    {index + 1}
                                </div>

                                {/* Step Text */}
                                <p className="text-[var(--primary-color)] font-medium leading-snug">
                                    {step}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Call to Action */}
                    <div className="text-center mt-12">
                    <Link href="/registration">
        <button className="bg-[var(--secondary-color)] hover:bg-[var(--primary-color)] text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
          Start Your Journey
        </button>
      </Link>
                    </div>
                </div>
            </section>

            <motion.section
                className="relative py-32 overflow-hidden bg-gradient-to-br from-[var(--primary-dark-slate)] via-[var(--primary-color)] to-[var(--primary-color)]"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
            >

                <div className={`${containerClass} mx-auto px-6 relative z-10`}>
                    <motion.h2
                        className={`${subHeadingClass} font-black text-center mb-20 text-white drop-shadow-2xl`}
                        variants={fadeInUp}
                    >
                        <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                            Frequently Asked Questions
                        </span>
                    </motion.h2>

                    <div className="space-y-6">
                        {landingPageData.faq.map((faq, index) => (
                            <motion.div
                                key={index}
                                className="group bg-white/10 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-500 hover:bg-white/15 hover:scale-[1.02]"
                                variants={fadeInUp}
                            >
                                <div className={`${is4K ? "p-10" : "p-8"} relative`}>
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                    <h3
                                        className={`${is4K ? "text-2xl" : "text-xl"} font-bold text-white mb-6 relative z-10 group-hover:text-blue-100 transition-colors duration-300`}
                                    >
                                        {faq.question}
                                    </h3>
                                    <p
                                        className={`${is4K ? "text-lg" : "text-base"} text-slate-300 leading-relaxed relative z-10 group-hover:text-slate-200 transition-colors duration-300 font-medium`}
                                    >
                                        {faq.answer}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>


            {/* API Integration Section */}
            {landingPageData.apiIntegration && (<motion.section
                className={`${containerClass} mx-auto px-6 py-20 relative`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
            >
                {/* Heading */}
                {landingPageData.apiIntegration.heading &&(
                      <motion.h2
                    className={`${subHeadingClass} font-extrabold text-center mb-8  text-2xl md:text-3xl lg:text-4xl text-[var(--primary-color)]`}
                    variants={fadeInUp}
                >
                    {landingPageData.apiIntegration.heading}
                </motion.h2>
                ) }
              

                {/* Description */}
                {landingPageData.apiIntegration.description && (
                    
                      <motion.p
                    className={`${is4K ? "text-lg" : "text-base"} text-center mb-16 text-gray-700 leading-relaxed max-w-3xl mx-auto`}
                    variants={fadeInUp}
                >
                    {landingPageData.apiIntegration.description}
                </motion.p>

                )}
              
                {/* Features Grid */}
                {landingPageData.apiIntegration.features && (
                     <motion.div
                    className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
                    variants={staggerContainer}
                >
                    {landingPageData.apiIntegration.features.map((feature, index) => {
                        const Icon = (Icons as any)[feature.icon] || Icons.HelpCircle
                        return (
                            <motion.div
                                key={index}
                                className="relative bg-white/70 backdrop-blur-lg border border-white/20 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                                variants={cardHover}
                                initial="rest"
                                whileHover="hover"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <Icon className="w-10 h-10 text-[var(--primary-color)]" />
                                    <h3 className={`${is4K ? "text-xl" : "text-lg"} font-semibold text-[var(--primary-color)]`}>
                                        {feature.title}
                                    </h3>
                                </div>
                                <p className={`${is4K ? "text-base" : "text-sm"} text-gray-600 leading-relaxed`}>
                                    {feature.description}
                                </p>
                            </motion.div>
                        )
                    })}
                </motion.div>

                )}
               
                {/* Support Section */}

                <motion.div
                    className="bg-gradient-to-r from-[var(--primary-color)]/10 to-[var(--secondary-light-color)]/20 p-10 rounded-2xl shadow-lg border border-white/20"
                    variants={fadeInUp}
                >
                    <h3
                        className={`${is4K ? "text-2xl" : "text-xl"} font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)]`}
                    >
                        {landingPageData.apiIntegration.support.title}
                    </h3>
                    <p
                        className={`${is4K ? "text-lg" : "text-base"} text-gray-700 mb-4 leading-relaxed`}
                    >
                        {landingPageData.apiIntegration.support.description}
                    </p>
                    <p
                        className={`${is4K ? "text-base" : "text-sm"} font-semibold text-[var(--secondary-color)]`}
                    >
                        {landingPageData.apiIntegration.support.note}
                    </p>
                </motion.div>
            </motion.section>)}
            {/* Final CTA Section */}
            <section className="bg-gradient-to-br from-[var(--primary-color)] via-[var(--primary-hover-color)] to-[var(--secondary-color)] text-white py-20">
                <div className={`${containerClass} mx-auto px-6 text-center`}>
                    <h2 className={`${headingClass} font-bold mb-8`}>
                        {landingPageData.finalCta.heading}
                    </h2>

                    <p
                        className={`${is4K ? "text-2xl" : "text-xl"} leading-relaxed max-w-4xl mx-auto mb-12 text-blue-100`}
                    >
                        {landingPageData.finalCta.subtext}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        {landingPageData.finalCta.ctaButtons.map((button, index) => (
                           <Link
                           key={index}
                           href="/registration"
                           className={`${is4K ? "px-10 py-5 text-xl" : "px-8 py-4 text-lg"} bg-white text-[var(--primary-color)] font-semibold rounded-lg hover:bg-[var(--secondary-light-color)] hover:text-[var(--primary-hover-color)] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block`}
                         >
                           {button}
                         </Link>
                         
                        ))}
                    </div>
                </div>
            </section>
            F
        </div>
    )
}
