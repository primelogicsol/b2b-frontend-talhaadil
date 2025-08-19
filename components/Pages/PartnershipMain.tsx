"use client";

import { motion, AnimatePresence, easeInOut,Variants } from "framer-motion";
import { useState } from "react";
import { useGlobalContext } from "@/context/ScreenProvider";
import { coreTradeData } from "@/lib/coreTradeData";
import {
  Truck,
  ShoppingBag,
  Package,
  Globe,
  CheckCircle,
  XCircle,
  ArrowRight,
  Star,
  Users,
  TrendingUp,
  Shield,
  Zap,
  ChevronDown,
  Clock,
  Target,
  Rocket,
} from "lucide-react";
import Image from "next/image";
import EligibilityQuiz from "../Essentials/ElgibiltyProvider";
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

const iconMap = {
  truck: Truck,
  "shopping-bag": ShoppingBag,
  package: Package,
  globe: Globe,
};

export default function CoreTradeLanding() {
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

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.section
        className="relative overflow-hidden bg-gradient-to-br from-[var(--primary-color)] via-[var(--primary-hover-color)] to-[var(--secondary-color)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-black/10" />
        <div
          className={`relative mx-auto px-6 py-20 sm:py-32 ${containerClass}`}
        >
          <motion.div
            className="text-center"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.h1
              className={`font-bold text-white mb-6 ${
                is4K ? "text-7xl" : "text-4xl sm:text-5xl lg:text-6xl"
              }`}
              variants={fadeInUp}
            >
              {coreTradeData.hero.headline}
            </motion.h1>
            <motion.p
              className={`text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed ${
                is4K ? "text-2xl" : "text-lg sm:text-xl"
              }`}
              variants={fadeInUp}
            >
              {coreTradeData.hero.subtext}
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              variants={fadeInUp}
            >
              {coreTradeData.hero.ctaButtons.map((button, index) => (
                <motion.button
                  key={index}
                  className={`px-8 py-4 rounded-lg font-semibold transition-all duration-300 ${
                    index === 0
                      ? "bg-[var(--secondary-color)] text-white hover:bg-[var(--secondary-color)]/90 shadow-lg hover:shadow-xl"
                      : "bg-white text-[var(--primary-color)] hover:bg-gray-100"
                  } ${is4K ? "text-xl px-12 py-6" : "text-base"}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {button}
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

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
              className={`font-bold text-[var(--primary-color)] text-left ${
                is4K ? "text-5xl" : "text-3xl sm:text-4xl"
              }`}
              variants={fadeInUp}
            >
              {coreTradeData.whyCoreTrade.heading}
            </motion.h2>

            {/* Problems */}
            <div>
              <h3
                className={`font-semibold text-[var(--secondary-color)] mb-4 flex items-center gap-2 ${
                  is4K ? "text-2xl" : "text-xl"
                }`}
              >
                <XCircle className="w-6 h-6" />
                Current Problems:
              </h3>
              <div className="space-y-4">
                {coreTradeData.whyCoreTrade.problems.map((problem, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3"
                    variants={fadeInUp}
                  >
                    <XCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                    <p
                      className={`text-gray-700 ${
                        is4K ? "text-xl" : "text-base"
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
                className={`font-semibold text-[var(--primary-color)] mb-4 flex items-center gap-2 ${
                  is4K ? "text-2xl" : "text-xl"
                }`}
              >
                <CheckCircle className="w-6 h-6" />
                Core Trade Provides:
              </h3>
              <div className="space-y-4">
                {coreTradeData.whyCoreTrade.solutions.map((solution, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3"
                    variants={fadeInUp}
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <p
                      className={`text-gray-700 ${
                        is4K ? "text-xl" : "text-base"
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
        className={`${
          is4K ? "py-40" : "py-24"
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
            className={`${
              is4K ? "text-6xl mb-20" : "text-4xl md:text-5xl mb-16"
            } font-bold text-center font-serif`}
            variants={itemVariants}
          >
            <span className="gradient-text font-sans">
              {coreTradeData.eligibility.heading}
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
                className={`${
                  is4K ? "text-4xl" : "text-3xl"
                } font-bold text-[var(--primary-color)] mb-8 font-sans relative z-10`}
              >
                {coreTradeData.eligibility.standard.title}
              </h3>
              <div className="space-y-6 relative z-10">
                <div className="p-6 bg-gradient-to-r from-blue-50 to-blue-100/50 rounded-2xl border border-blue-200/50">
                  <p
                    className={`${is4K ? "text-xl" : "text-lg"} text-gray-800`}
                  >
                    <strong className="text-[var(--primary-color)]">
                      Vendors:
                    </strong>{" "}
                    {coreTradeData.eligibility.standard.vendors}
                  </p>
                </div>
                <div className="p-6 bg-gradient-to-r from-purple-50 to-purple-100/50 rounded-2xl border border-purple-200/50">
                  <p
                    className={`${is4K ? "text-xl" : "text-lg"} text-gray-800`}
                  >
                    <strong className="text-[var(--primary-color)]">
                      Buyers:
                    </strong>{" "}
                    {coreTradeData.eligibility.standard.buyers}
                  </p>
                </div>
                <div className="p-6 bg-gradient-to-r from-[var(--secondary-light-color)]/50 to-orange-100/50 rounded-2xl border border-orange-200/50">
                  <p
                    className={`${
                      is4K ? "text-xl" : "text-lg"
                    } text-[var(--primary-color)] font-semibold`}
                  >
                    👉 {coreTradeData.eligibility.standard.note}
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
                className={`${
                  is4K ? "text-4xl" : "text-3xl"
                } font-bold mb-8 font-sans relative z-10`}
              >
                ✨ {coreTradeData.eligibility.lateral.title}
              </h3>
              <p
                className={`${
                  is4K ? "text-2xl" : "text-xl"
                } mb-8 opacity-95 relative z-10`}
              >
                {coreTradeData.eligibility.lateral.description}
              </p>
              <ul className="space-y-4 mb-10 relative z-10">
                {coreTradeData.eligibility.lateral.points.map(
                  (point, index) => (
                    <motion.li
                      key={index}
                      className={`${
                        is4K ? "text-lg" : "text-base"
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
                className="bg-white text-[var(--primary-color)] px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 relative z-10"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {coreTradeData.eligibility.lateral.cta}
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.section>
      {/* Eligibility Test Section - Replaced with comprehensive quiz component */}
      <EligibilityQuiz />


      {/* Core Trade Tracks - Kept only the cards, removed the table */}
      <motion.section
        className={`mx-auto px-6 py-20 bg-gray-50 ${containerClass}`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className={`font-bold text-[var(--primary-color)] text-center mb-16 ${
            is4K ? "text-5xl" : "text-3xl sm:text-4xl"
          }`}
          variants={fadeInUp}
        >
          Choose Your Core Trade Path
        </motion.h2>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {coreTradeData.tracks.map((track, index) => {
            const IconComponent = iconMap[track.icon as keyof typeof iconMap];
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
                      className={`text-[var(--primary-color)] ${
                        is4K ? "w-16 h-16" : "w-12 h-12"
                      }`}
                    />
                  </div>
                  <h3
                    className={`font-bold text-[var(--primary-color)] mb-4 ${
                      is4K ? "text-2xl" : "text-xl"
                    }`}
                  >
                    {track.name}
                  </h3>
                  <div className="space-y-3 mb-6">
                    <p
                      className={`text-gray-600 ${
                        is4K ? "text-lg" : "text-sm"
                      }`}
                    >
                      <span className="font-semibold">KPI:</span> {track.kpi}
                    </p>
                    <p
                      className={`text-gray-600 ${
                        is4K ? "text-lg" : "text-sm"
                      }`}
                    >
                      <span className="font-semibold">Retention:</span>{" "}
                      {track.retention}
                    </p>
                    <p
                      className={`text-gray-700 ${
                        is4K ? "text-lg" : "text-sm"
                      }`}
                    >
                      <span className="font-semibold">Best For:</span>{" "}
                      {track.bestFor}
                    </p>
                    <p
                      className={`text-[var(--secondary-color)] font-medium ${
                        is4K ? "text-lg" : "text-sm"
                      }`}
                    >
                      {track.benefit}
                    </p>
                  </div>
                  <motion.button
                    className={`w-full bg-[var(--primary-color)] text-white py-3 rounded-lg font-semibold hover:bg-[var(--primary-hover-color)] transition-colors duration-300 ${
                      is4K ? "text-lg py-4" : "text-sm"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {track.cta}
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.section>

      <motion.section
        className={`${is4K ? "py-40" : "py-24"} px-4 bg-white `}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div
          className={`${is4K ? "max-w-[1800px]" : "max-w-[1200px]"} mx-auto`}
        >
          <motion.h2
            className={`${
              is4K ? "text-6xl mb-20" : "text-4xl md:text-5xl mb-16"
            } font-bold text-center font-serif`}
            variants={itemVariants}
          >
            <span className="gradient-text font-sans">
              {coreTradeData.workflow.heading}
            </span>
          </motion.h2>

          <div className="flex justify-center mb-12">
            <div className="bg-gray-100 p-2 rounded-2xl">
              <button
                className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                  activeWorkflow === "standard"
                    ? "bg-[var(--primary-color)] text-white shadow-lg"
                    : "text-[var(--primary-color)] hover:bg-gray-200"
                }`}
                onClick={() => setActiveWorkflow("standard")}
              >
                Standard Path
              </button>
              <button
                className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                  activeWorkflow === "fasttrack"
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
                className={`${
                  is4K ? "text-4xl" : "text-3xl"
                } font-bold mb-8 text-center font-serif ${
                  activeWorkflow === "standard"
                    ? "text-[var(--primary-color)]"
                    : "text-[var(--secondary-color)]"
                }`}
              >
                {activeWorkflow === "standard"
                  ? coreTradeData.workflow.standard.title
                  : coreTradeData.workflow.fastTrack.title}
              </h3>

              <div className="flex flex-wrap justify-center gap-4">
                {(activeWorkflow === "standard"
                  ? coreTradeData.workflow.standard.steps
                  : coreTradeData.workflow.fastTrack.steps
                ).map((step, index) => (
                  <motion.div
                    key={index}
                    className={`flex items-center gap-4 ${
                      index <
                      (activeWorkflow === "standard"
                        ? coreTradeData.workflow.standard.steps
                        : coreTradeData.workflow.fastTrack.steps
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
                      className={`px-6 py-4 rounded-2xl font-semibold text-white shadow-lg ${
                        activeWorkflow === "standard"
                          ? "bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-hover-color)]"
                          : "bg-gradient-to-r from-[var(--secondary-color)] to-[var(--secondary-color)]/80"
                      }`}
                    >
                      {step}
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
          className={`font-bold text-[var(--primary-color)] text-center mb-16 ${
            is4K ? "text-5xl" : "text-3xl sm:text-4xl"
          }`}
          variants={fadeInUp}
        >
          {coreTradeData.journey.heading}
        </motion.h2>

        <div className="space-y-8">
          {coreTradeData.journey.steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg"
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h3
                className={`font-bold text-[var(--primary-color)] mb-4 flex items-center gap-3 ${
                  is4K ? "text-2xl" : "text-xl"
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
                        className={`text-gray-700 ${
                          is4K ? "text-lg" : "text-base"
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
                  className={`text-gray-700 mb-4 ${
                    is4K ? "text-lg" : "text-base"
                  }`}
                >
                  {step.description}
                </p>
              )}

              {step.note && (
                <p
                  className={`text-[var(--primary-color)] font-medium ${
                    is4K ? "text-lg" : "text-base"
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
                        className={`text-gray-700 ${
                          is4K ? "text-lg" : "text-base"
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
          className={`font-bold text-[var(--primary-color)] text-center mb-16 ${
            is4K ? "text-5xl" : "text-3xl sm:text-4xl"
          }`}
          variants={fadeInUp}
        >
          Core Trade Fee Summary
        </motion.h2>

        <div className="space-y-6">
          {coreTradeData.feePackages.map((feePackage, index) => {
            const IconComponent =
              iconMap[feePackage.icon as keyof typeof iconMap];
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
                  className={`w-full text-left p-6 bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-hover-color)] text-white hover:from-[var(--primary-hover-color)] hover:to-[var(--primary-color)] transition-all duration-200 ${
                    is4K ? "text-xl" : "text-lg"
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
                        className={`font-semibold text-[var(--primary-color)] mb-2 ${
                          is4K ? "text-xl" : "text-lg"
                        }`}
                      >
                        Free / Onboarding:
                      </h4>
                      <p
                        className={`text-gray-700 ${
                          is4K ? "text-lg" : "text-base"
                        }`}
                      >
                        {feePackage.onboarding}
                      </p>
                    </div>

                    <h4
                      className={`font-semibold text-[var(--primary-color)] mb-4 ${
                        is4K ? "text-xl" : "text-lg"
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
                            className={`font-bold text-[var(--secondary-color)] mb-2 ${
                              is4K ? "text-lg" : "text-base"
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
                                  className={`text-gray-700 ${
                                    is4K ? "text-base" : "text-sm"
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

      {/* Comparison Section */}
      <motion.section
        className={`mx-auto px-6 py-20 bg-gray-50 ${containerClass}`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className={`font-bold text-[var(--primary-color)] text-center mb-16 ${
            is4K ? "text-5xl" : "text-3xl sm:text-4xl"
          }`}
          variants={fadeInUp}
        >
          {coreTradeData.comparison.heading}
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
              className={`font-bold text-[var(--primary-color)] mb-2 flex items-center gap-2 ${
                is4K ? "text-3xl" : "text-2xl"
              }`}
            >
              <Shield className="w-8 h-8" />
              {coreTradeData.comparison.standard.title}
            </h3>
            <p
              className={`text-gray-600 mb-6 ${is4K ? "text-xl" : "text-base"}`}
            >
              {coreTradeData.comparison.standard.subtitle}
            </p>
            <div className="space-y-3 mb-6">
              {coreTradeData.comparison.standard.features.map(
                (feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <p
                      className={`text-gray-700 ${
                        is4K ? "text-lg" : "text-sm"
                      }`}
                    >
                      {feature}
                    </p>
                  </div>
                )
              )}
            </div>
            <p
              className={`text-orange-600 mb-6 flex items-start gap-2 ${
                is4K ? "text-lg" : "text-sm"
              }`}
            >
              <TrendingUp className="w-4 h-4 mt-1 flex-shrink-0" />
              {coreTradeData.comparison.standard.note}
            </p>
            <motion.button
              className={`w-full bg-[var(--primary-color)] text-white py-3 rounded-lg font-semibold hover:bg-[var(--primary-hover-color)] transition-colors duration-300 ${
                is4K ? "text-lg py-4" : "text-base"
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {coreTradeData.comparison.standard.cta}
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
              className={`font-bold text-[var(--secondary-color)] mb-2 flex items-center gap-2 ${
                is4K ? "text-3xl" : "text-2xl"
              }`}
            >
              <Zap className="w-8 h-8" />
              {coreTradeData.comparison.lateral.title}
            </h3>
            <p
              className={`text-gray-600 mb-6 ${is4K ? "text-xl" : "text-base"}`}
            >
              {coreTradeData.comparison.lateral.subtitle}
            </p>
            <div className="space-y-3 mb-6">
              {coreTradeData.comparison.lateral.features.map(
                (feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <p
                      className={`text-gray-700 ${
                        is4K ? "text-lg" : "text-sm"
                      }`}
                    >
                      {feature}
                    </p>
                  </div>
                )
              )}
            </div>
            <p
              className={`text-[var(--secondary-color)] mb-6 font-medium flex items-start gap-2 ${
                is4K ? "text-lg" : "text-sm"
              }`}
            >
              <Star className="w-4 h-4 mt-1 flex-shrink-0" />
              {coreTradeData.comparison.lateral.note}
            </p>
            <motion.button
              className={`w-full bg-[var(--secondary-color)] text-white py-3 rounded-lg font-semibold hover:bg-[var(--secondary-color)]/90 transition-all duration-300 ${
                is4K ? "text-lg py-4" : "text-base"
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {coreTradeData.comparison.lateral.cta}
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
          className={`font-bold text-[var(--primary-color)] text-center mb-16 ${
            is4K ? "text-5xl" : "text-3xl sm:text-4xl"
          }`}
          variants={fadeInUp}
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="max-w-4xl mx-auto space-y-4">
          {coreTradeData.faq.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.button
                className={`w-full text-left p-6 font-semibold text-[var(--primary-color)] hover:bg-gray-50 transition-colors duration-200 ${
                  is4K ? "text-xl" : "text-lg"
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
                  className={`p-6 pt-0 text-gray-700 ${
                    is4K ? "text-lg" : "text-base"
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
        className="bg-[var(--primary-color)] text-white py-12"
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
            {coreTradeData.hero.ctaButtons.map((button, index) => (
              <motion.button
                key={index}
                className={`px-8 py-4 rounded-lg font-semibold transition-all duration-300 ${
                  index === 0
                    ? "bg-[var(--secondary-color)] text-white hover:bg-[var(--secondary-color)]/90"
                    : "bg-transparent text-white border-2 border-white hover:bg-white hover:text-[var(--primary-color)]"
                } ${is4K ? "text-xl px-12 py-6" : "text-base"}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {button}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </motion.footer>
    </div>
  );
}
