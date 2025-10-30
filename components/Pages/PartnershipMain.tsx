"use client";
import * as Icons from "lucide-react"
import { motion, AnimatePresence, easeInOut, Variants } from "framer-motion";
import { useState } from "react";
import { useGlobalContext } from "@/context/ScreenProvider";
import {
  CheckCircle,
  XCircle,
  ArrowRight,
  Star,
  TrendingUp,
  Shield,
  Zap,
  ChevronDown,

} from "lucide-react";
import { EligibilityQuiz } from "../Essentials/ElgibiltyProvider";
import Image from "next/image";
import Link from "next/link";
import BannerWithFeatures from "../Material/BannerwithFeatures";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardHoverVariants = {
  hover: {
    y: -8,
    scale: 1.02,
    boxShadow: "0 25px 50px rgba(27, 79, 104, 0.15)",
    transition: {
      duration: 0.3,
      ease: [0.42, 0, 0.58, 1], // cubic-bezier for easeInOut
    },
  },
};
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easeInOut,
    },
  },
};



type pageData = {
  data : any[];
  tier: number,
  hero: {
    headline: string;
    subtext: string;
    ctaButtons: string[];
  };
  whyCoreTrade: {
    heading: string;
    problems: string[];
    solutions: string[];
  };
  eligibility: {
    heading: string;
    standard: {
      title: string;
      vendors: string;
      buyers: string;
      note: string;
    };

    lateral: {
      title: string;
      description: string;
      points: string[];
      cta: string;
    };
  };
  platformAdvantage?: {
    heading: string
    description: string
    sections: { title: string; items: string[] }[]
  }
  tracks: Array<{
    id: string | number;
    icon: string;
    prev?: string;
    name: string;
    href: string;
    kpi: string;
    retention: string;
    bestFor: string;
    benefit: string;
    cta: string;
    fastTrackAvailable?: boolean;
  }>;
  workflow: {
    heading: string;
    standard: {
      title: string;
      steps: string[];
    };
    fastTrack: {
      title: string;
      steps: string[];
    };
  };
  journey: {
    heading: string;
    steps: Array<{
      title: string;
      options?: string[];
      description?: string;
      note?: string;
      pathways?: string[];
    }>;
  };
  feePackages: Array<{
    icon: string;
    track: string;
    range: string;
    onboarding: string;
    packages: Array<{
      name: string;
      price: string;
      features: string[];
    }>;
  }>;
  comparison: {
    heading: string;
    standard: {
      title: string;
      subtitle: string;
      features: string[];
      note: string;
      cta: string;
    };
    lateral: {
      title: string;
      subtitle: string;
      features: string[];
      note: string;
      cta: string;
    };
  };
  faq: Array<{
    question: string;
    answer: string;
  }>;
}

export function MainPartnership({ pageData }: { pageData: pageData }) {
  const { is4K } = useGlobalContext();
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);
  const [activeFeeAccordion, setActiveFeeAccordion] = useState<string | null>(
    null
  );
  const [activeWorkflow, setActiveWorkflow] = useState<
    "standard" | "fasttrack"
  >("standard");

  const containerClass = is4K
    ? "max-w-[1800px] text-xl"
    : "max-w-[1200px] text-base";
  const subHeadingClass = is4K ? "text-4xl" : "text-2xl"

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <BannerWithFeatures data={pageData.data}/>
      {/* Why Core Trade Section */}
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
              {pageData.whyCoreTrade.heading}
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
                {pageData.whyCoreTrade.problems.map((problem, index) => (
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
                {pageData.hero.headline
                  .match(/(.*?\bPartnerships\b)/i)?.[1]
                  ?.replace(/\bPartnerships\b/i, 'Partnership')
                  .trim() || pageData.hero.headline} Provides:
              </h3>
              <div className="space-y-4">
                {pageData.whyCoreTrade.solutions.map((solution, index) => (
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
        className={`${is4K ? "py-40" : "py-24"
          } px-4 bg-gradient-to-br from-[var(--secondary-light-color)]/30 via-gray-50 to-[var(--primary-color)]/5`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div
          className={`${is4K ? "max-w-[1800px]" : "max-w-[1200px]"} mx-auto`}
        >
          <motion.h2
            className={`${is4K ? "text-6xl mb-20" : "text-4xl md:text-5xl mb-16"
              } font-bold text-center font-sans`}
            variants={itemVariants}
          >
            <span className="gradient-text font-sans">
              {pageData.eligibility.heading}
            </span>
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-white/50 relative overflow-hidden group"
              variants={itemVariants}
              //@ts-ignore
              whileHover={cardHoverVariants.hover}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-color)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <h3
                className={`${is4K ? "text-4xl" : "text-3xl"
                  } font-bold text-[var(--primary-color)] mb-8 font-sans relative z-10`}
              >
                {pageData.eligibility.standard.title}
              </h3>
              <div className="space-y-6 relative z-10">
                <div className="p-6 bg-gradient-to-r from-blue-50 to-blue-100/50 rounded-2xl border border-blue-200/50">
                  <p
                    className={`${is4K ? "text-xl" : "text-lg"} text-gray-800`}
                  >
                    <strong className="text-[var(--primary-color)]">
                      Vendors:
                    </strong>{" "}
                    {pageData.eligibility.standard.vendors}
                  </p>
                </div>
                <div className="p-6 bg-gradient-to-r from-purple-50 to-purple-100/50 rounded-2xl border border-purple-200/50">
                  <p
                    className={`${is4K ? "text-xl" : "text-lg"} text-gray-800`}
                  >
                    <strong className="text-[var(--primary-color)]">
                      Buyers:
                    </strong>{" "}
                    {pageData.eligibility.standard.buyers}
                  </p>
                </div>
                <div className="p-6 bg-gradient-to-r from-[var(--secondary-light-color)]/50 to-orange-100/50 rounded-2xl border border-orange-200/50">
                  <p
                    className={`${is4K ? "text-xl" : "text-lg"
                      } text-[var(--primary-color)] font-semibold`}
                  >
                    👉 {pageData.eligibility.standard.note}
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-[var(--primary-color)] via-[var(--primary-hover-color)] to-[var(--primary-color)] rounded-3xl p-10 shadow-2xl text-white relative overflow-hidden group"
              variants={itemVariants}
              //@ts-ignore
              whileHover={cardHoverVariants.hover}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-4 right-4 text-6xl opacity-20">
                ✨
              </div>
              <h3
                className={`${is4K ? "text-4xl" : "text-3xl"
                  } font-bold mb-8 font-sans relative z-10`}
              >
                ✨ {pageData.eligibility.lateral.title}
              </h3>
              <p
                className={`${is4K ? "text-2xl" : "text-xl"
                  } mb-8 opacity-95 relative z-10`}
              >
                {pageData.eligibility.lateral.description}
              </p>
              <ul className="space-y-4 mb-10 relative z-10">
                {pageData.eligibility.lateral.points.map(
                  (point, index) => (
                    <motion.li
                      key={index}
                      className={`${is4K ? "text-lg" : "text-base"
                        } opacity-90 flex items-start gap-3`}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 0.9, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <span className="text-yellow-300 text-xl">•</span>
                      {point}
                    </motion.li>
                  )
                )}
              </ul>
              <motion.button
                onClick={() => window.open('https://khcrf.org/', '_blank')}

                className="bg-white text-[var(--primary-color)] px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 relative z-10"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {pageData.eligibility.lateral.cta}
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.section>


      {/* Core Trade Tracks - Kept only the cards, removed the table */}
      <motion.section
        className={`mx-auto px-6 py-20 bg-gray-50 ${containerClass}`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className={`font-bold text-[var(--primary-color)] text-center mb-4 ${is4K ? "text-5xl" : "text-3xl sm:text-4xl"
            }`}
          variants={fadeInUp}
        >
          Choose Your Partnership Path
        </motion.h2>
        <motion.h2
          className={`font-bold text-[var(--secondary-color)] text-center mb-16 ${is4K ? "text-5xl" : "text-3xl sm:text-4xl"
            }`}
          variants={fadeInUp}
        >
          Tier {pageData.tier}
        </motion.h2>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {pageData.tracks.map((track, index) => {
            const IconComponent = (Icons as any)[track.icon] || Icons.HelpCircle
            return (
              <motion.div
                key={track.id}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative"
                variants={fadeInUp}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                }}
              >
                {track.fastTrackAvailable && (
                  <div className="absolute -top-2 -right-2 bg-[var(--secondary-color)] text-white text-xs px-2 py-1 rounded-full font-semibold">
                    Fast-Track Available
                  </div>
                )}
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    <IconComponent
                      className={`text-[var(--primary-color)] ${is4K ? "w-16 h-16" : "w-12 h-12"
                        }`}
                    />
                  </div>
                  <h3
                    className={`font-bold text-[var(--primary-color)] mb-4 ${is4K ? "text-2xl" : "text-xl"
                      }`}
                  >
                    {track.name}
                  </h3>
                  <div className="space-y-3 mb-6">
                    <p
                      className={`text-gray-600 ${is4K ? "text-lg" : "text-sm"
                        }`}
                    >
                      <span className="font-semibold">KPI:</span> {track.kpi}
                    </p>
                    <p
                      className={`text-gray-600 ${is4K ? "text-lg" : "text-sm"
                        }`}
                    >
                      <span className="font-semibold">Retention:</span>{" "}
                      {track.retention}
                    </p>
                    <p
                      className={`text-gray-700 ${is4K ? "text-lg" : "text-sm"
                        }`}
                    >
                      <span className="font-semibold">Previous Level:</span>{" "}
                      {track.prev}
                    </p>
                    <p
                      className={`text-gray-700 ${is4K ? "text-lg" : "text-sm"
                        }`}
                    >
                      <span className="font-semibold">Best For:</span>{" "}
                      {track.bestFor}
                    </p>
                    <p
                      className={`text-[var(--secondary-color)] font-medium ${is4K ? "text-lg" : "text-sm"
                        }`}
                    >
                      {track.benefit}
                    </p>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      href={track.href}
                      className={`w-full bg-[var(--primary-color)] text-white py-3 rounded-lg font-semibold hover:bg-[var(--primary-hover-color)] transition-colors duration-300 px-2 ${is4K ? "text-lg py-4" : "text-sm"
                        }`}
                    >
                      {track.cta}
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.section>

      <motion.section
        className={`${is4K ? "py-40" : "py-24"} px-4 bg-white`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className={`${is4K ? "max-w-[1800px]" : "max-w-[1200px]"} mx-auto`}>
          <motion.h2
            className={`${is4K ? "text-6xl mb-20" : "text-4xl md:text-5xl mb-16"} font-bold text-center font-sans text-[var(--primary-color)]`}
            variants={itemVariants}
          >
            <span className="gradient-text font-sans">{pageData.workflow.heading}</span>
          </motion.h2>

          <div className="flex justify-center mb-12">
            <div className="bg-gray-100 p-2 rounded-2xl flex ">
              <button
                className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${activeWorkflow === "standard"
                  ? "bg-[var(--primary-color)] text-white shadow-lg"
                  : "text-[var(--primary-color)] hover:bg-gray-200"
                  }`}
                onClick={() => setActiveWorkflow("standard")}
              >
                Standard Path
              </button>
              <button
                className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${activeWorkflow === "fasttrack"
                  ? "bg-[var(--secondary-color)] text-white shadow-lg"
                  : "text-[var(--secondary-color)] hover:bg-gray-200"
                  }`}
                onClick={() => setActiveWorkflow("fasttrack")}
              >
                Fast-Track Path
              </button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeWorkflow}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-gray-50 to-white p-10 rounded-3xl shadow-xl border border-gray-200/50"
            >
              <h3
                className={`${is4K ? "text-4xl" : "text-3xl"} font-bold mb-8 text-center font-sans ${activeWorkflow === "standard" ? "text-[var(--primary-color)]" : "text-[var(--secondary-color)]"
                  }`}
              >
                {activeWorkflow === "standard"
                  ? pageData.workflow.standard.title
                  : pageData.workflow.fastTrack.title}
              </h3>

              <div className="hidden md:flex flex-wrap justify-center gap-4">
                {(activeWorkflow === "standard"
                  ? pageData.workflow.standard.steps
                  : pageData.workflow.fastTrack.steps
                ).map((step, index) => (
                  <motion.div
                    key={index}
                    className={`flex items-center gap-4 ${index <
                      (activeWorkflow === "standard"
                        ? pageData.workflow.standard.steps
                        : pageData.workflow.fastTrack.steps
                      ).length -
                      1
                      ? 'after:content-["→"] after:text-2xl after:text-gray-400'
                      : ""
                      }`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <div
                      className={`px-6 py-4 rounded-2xl font-semibold text-white shadow-lg ${activeWorkflow === "standard"
                        ? "bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-hover-color)]"
                        : "bg-gradient-to-r from-[var(--secondary-color)] to-[var(--secondary-color)]/80"
                        }`}
                    >
                      {step}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="md:hidden space-y-4">
                {(activeWorkflow === "standard"
                  ? pageData.workflow.standard.steps
                  : pageData.workflow.fastTrack.steps
                ).map((step, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm ${activeWorkflow === "standard" ? "bg-[var(--primary-color)]" : "bg-[var(--secondary-color)]"
                        }`}
                    >
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="text-lg font-semibold text-gray-800">{step}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.section>
      {/* Journey Flow */}
      <motion.section
        className={`mx-auto px-6 py-20 bg-gray-50 ${containerClass}`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className={`font-bold text-[var(--primary-color)] text-center mb-16 ${is4K ? "text-5xl" : "text-3xl sm:text-4xl"
            }`}
          variants={fadeInUp}
        >
          {pageData.journey.heading}
        </motion.h2>

        <div className="space-y-8">
          {pageData.journey.steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg"
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h3
                className={`font-bold text-[var(--primary-color)] mb-4 flex items-center gap-3 ${is4K ? "text-2xl" : "text-xl"
                  }`}
              >
                <div className="w-8 h-8 bg-[var(--primary-color)] text-white rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                {step.title}
              </h3>

              {step.options && (
                <div className="space-y-2 mb-4">
                  {step.options.map((option, optionIndex) => (
                    <div key={optionIndex} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <p
                        className={`text-gray-700 ${is4K ? "text-lg" : "text-base"
                          }`}
                      >
                        {option}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {step.description && (
                <p
                  className={`text-gray-700 mb-4 ${is4K ? "text-lg" : "text-base"
                    }`}
                >
                  {step.description}
                </p>
              )}

              {step.note && (
                <p
                  className={`text-[var(--primary-color)] font-medium ${is4K ? "text-lg" : "text-base"
                    }`}
                >
                  <ArrowRight className="w-4 h-4 inline mr-2" />
                  {step.note}
                </p>
              )}

              {step.pathways && (
                <div className="space-y-2">
                  {step.pathways.map((pathway, pathwayIndex) => (
                    <div key={pathwayIndex} className="flex items-start gap-3">
                      <TrendingUp className="w-4 h-4 text-[var(--secondary-color)] mt-1 flex-shrink-0" />
                      <p
                        className={`text-gray-700 ${is4K ? "text-lg" : "text-base"
                          }`}
                      >
                        {pathway}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Fee Packages Section */}
      <motion.section
        className={`mx-auto px-6 py-20 ${containerClass}`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className={`font-bold text-[var(--primary-color)] text-center mb-16 ${is4K ? "text-5xl" : "text-3xl sm:text-4xl"
            }`}
          variants={fadeInUp}
        >
          Partnership
          Fee Summary
        </motion.h2>

        <div className="space-y-6">
          {pageData.feePackages.map((feePackage, index) => {
            const IconComponent =
              (Icons as any)[feePackage.icon] || Icons.HelpCircle;
            return (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden"
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <motion.button
                  className={`w-full text-left p-6 bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-hover-color)] text-white hover:from-[var(--primary-hover-color)] hover:to-[var(--primary-color)] transition-all duration-200 ${is4K ? "text-xl" : "text-lg"
                    }`}
                  onClick={() =>
                    setActiveFeeAccordion(
                      activeFeeAccordion === `fee-${index}`
                        ? null
                        : `fee-${index}`
                    )
                  }
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <IconComponent className="w-8 h-8" />
                      <div>
                        <span className="font-bold">{feePackage.track}</span>
                        <span className="ml-4 text-white/80">
                          Range: {feePackage.range}
                        </span>
                      </div>
                    </div>
                    <motion.div
                      animate={{
                        rotate: activeFeeAccordion === `fee-${index}` ? 180 : 0,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="w-6 h-6" />
                    </motion.div>
                  </div>
                </motion.button>

                <motion.div
                  initial={false}
                  animate={{
                    height: activeFeeAccordion === `fee-${index}` ? "auto" : 0,
                    opacity: activeFeeAccordion === `fee-${index}` ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="p-6">
                    <div className="mb-6">
                      <h4
                        className={`font-semibold text-[var(--primary-color)] mb-2 ${is4K ? "text-xl" : "text-lg"
                          }`}
                      >
                        Free / Onboarding:
                      </h4>
                      <p
                        className={`text-gray-700 ${is4K ? "text-lg" : "text-base"
                          }`}
                      >
                        {feePackage.onboarding}
                      </p>
                    </div>

                    <h4
                      className={`font-semibold text-[var(--primary-color)] mb-4 ${is4K ? "text-xl" : "text-lg"
                        }`}
                    >
                      Monthly Packages:
                    </h4>

                    <div className="grid md:grid-cols-3 gap-6">
                      {feePackage.packages.map((pkg, pkgIndex) => (
                        <div
                          key={pkgIndex}
                          className="bg-gray-50 rounded-lg p-4 border border-gray-200"
                        >
                          <h5
                            className={`font-bold text-[var(--secondary-color)] mb-2 ${is4K ? "text-lg" : "text-base"
                              }`}
                          >
                            {pkg.name} ({pkg.price}/month)
                          </h5>
                          <ul className="space-y-2">
                            {pkg.features.map((feature, featureIndex) => (
                              <li
                                key={featureIndex}
                                className="flex items-start gap-2"
                              >
                                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                <span
                                  className={`text-gray-700 ${is4K ? "text-base" : "text-sm"
                                    }`}
                                >
                                  {feature}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </motion.section>
      {pageData.platformAdvantage && (
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
              {pageData.platformAdvantage.heading}
            </motion.h2>

            <motion.p
              className={`${is4K ? "text-xl" : "text-lg"} text-center mb-20 text-[var(--primary-color)]/80 leading-relaxed max-w-5xl mx-auto font-medium`}
              variants={fadeInUp}
            >
              {pageData.platformAdvantage.description}
            </motion.p>

            <div className="space-y-8">
              {pageData.platformAdvantage.sections.map((section, index) => (
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


      {/* Comparison Section */}
      <motion.section
        className={`mx-auto px-6 py-20 bg-gray-50 ${containerClass}`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className={`font-bold text-[var(--primary-color)] text-center mb-16 ${is4K ? "text-5xl" : "text-3xl sm:text-4xl"
            }`}
          variants={fadeInUp}
        >
          {pageData.comparison.heading}
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Standard Path */}
          <motion.div
            className="bg-white rounded-xl p-8 shadow-lg border border-gray-100"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h3
              className={`font-bold text-[var(--primary-color)] mb-2 flex items-center gap-2 ${is4K ? "text-3xl" : "text-2xl"
                }`}
            >
              <Shield className="w-8 h-8" />
              {pageData.comparison.standard.title}
            </h3>
            <p
              className={`text-gray-600 mb-6 ${is4K ? "text-xl" : "text-base"}`}
            >
              {pageData.comparison.standard.subtitle}
            </p>
            <div className="space-y-3 mb-6">
              {pageData.comparison.standard.features.map(
                (feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <p
                      className={`text-gray-700 ${is4K ? "text-lg" : "text-sm"
                        }`}
                    >
                      {feature}
                    </p>
                  </div>
                )
              )}
            </div>
            <p
              className={`text-orange-600 mb-6 flex items-start gap-2 ${is4K ? "text-lg" : "text-sm"
                }`}
            >
              <TrendingUp className="w-4 h-4 mt-1 flex-shrink-0" />
              {pageData.comparison.standard.note}
            </p>
            <motion.button
              onClick={() => window.open('/registration', '_blank')}

              className={`w-full bg-[var(--primary-color)] text-white py-3 rounded-lg font-semibold hover:bg-[var(--primary-hover-color)] transition-colors duration-300 ${is4K ? "text-lg py-4" : "text-base"
                }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {pageData.comparison.standard.cta}
            </motion.button>
          </motion.div>

          {/* Lateral Entry */}
          <motion.div
            className="bg-gradient-to-br from-[var(--secondary-light-color)] to-white rounded-xl p-8 shadow-lg border border-[var(--secondary-color)]"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h3
              className={`font-bold text-[var(--secondary-color)] mb-2 flex items-center gap-2 ${is4K ? "text-3xl" : "text-2xl"
                }`}
            >
              <Zap className="w-8 h-8" />
              {pageData.comparison.lateral.title}
            </h3>
            <p
              className={`text-gray-600 mb-6 ${is4K ? "text-xl" : "text-base"}`}
            >
              {pageData.comparison.lateral.subtitle}
            </p>
            <div className="space-y-3 mb-6">
              {pageData.comparison.lateral.features.map(
                (feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <p
                      className={`text-gray-700 ${is4K ? "text-lg" : "text-sm"
                        }`}
                    >
                      {feature}
                    </p>
                  </div>
                )
              )}
            </div>
            <p
              className={`text-[var(--secondary-color)] mb-6 font-medium flex items-start gap-2 ${is4K ? "text-lg" : "text-sm"
                }`}
            >
              <Star className="w-4 h-4 mt-1 flex-shrink-0" />
              {pageData.comparison.lateral.note}
            </p>
            <motion.button
              onClick={() => window.open('https://khcrf.org/', '_blank')}
              className={`w-full bg-[var(--secondary-color)] text-white py-3 rounded-lg font-semibold hover:bg-[var(--secondary-color)]/90 transition-all duration-300 ${is4K ? "text-lg py-4" : "text-base"
                }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {pageData.comparison.lateral.cta}
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        className={`mx-auto px-6 py-20 ${containerClass}`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className={`font-bold text-[var(--primary-color)] text-center mb-16 ${is4K ? "text-5xl" : "text-3xl sm:text-4xl"
            }`}
          variants={fadeInUp}
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="max-w-4xl mx-auto space-y-4">
          {pageData.faq.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.button
                className={`w-full text-left p-6 font-semibold text-[var(--primary-color)] hover:bg-gray-50 transition-colors duration-200 ${is4K ? "text-xl" : "text-lg"
                  }`}
                onClick={() =>
                  setActiveAccordion(
                    activeAccordion === `faq-${index}` ? null : `faq-${index}`
                  )
                }
              >
                <div className="flex justify-between items-center">
                  <span>{item.question}</span>
                  <motion.div
                    animate={{
                      rotate: activeAccordion === `faq-${index}` ? 180 : 0,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-6 h-6" />
                  </motion.div>
                </div>
              </motion.button>
              <motion.div
                initial={false}
                animate={{
                  height: activeAccordion === `faq-${index}` ? "auto" : 0,
                  opacity: activeAccordion === `faq-${index}` ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div
                  className={`p-6 pt-0 text-gray-700 ${is4K ? "text-lg" : "text-base"
                    }`}
                >
                  {item.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        className="bg-[var(--primary-color)] text-white py-12 mb-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className={`mx-auto px-6 text-center ${containerClass}`}>
          <motion.h3
            className={`font-bold mb-4 ${is4K ? "text-3xl" : "text-2xl"}`}
            variants={fadeInUp}
          >
            Ready to Start Your Core Trade Journey?
          </motion.h3>
          <motion.p
            className={`mb-8 opacity-90 ${is4K ? "text-xl" : "text-lg"}`}
            variants={fadeInUp}
          >
            Join thousands of vendors and buyers in the global craft commerce
            network.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            variants={fadeInUp}
          >
            {pageData.hero.ctaButtons.map((button, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/registration"
                  className={`px-8 py-4 rounded-lg font-semibold transition-all duration-300 ${index === 0
                    ? "bg-[var(--secondary-color)] text-white hover:bg-[var(--secondary-color)]/90"
                    : "bg-transparent text-white border-2 border-white hover:bg-white hover:text-[var(--primary-color)]"
                    } ${is4K ? "text-xl px-12 py-6" : "text-base"}`}
                >
                  {button}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.footer>
    </div>
  );
}
