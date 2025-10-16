"use client";
import { motion, easeOut } from "framer-motion";
import { useState } from "react";
import {
  Mail,
  ArrowRight,
  Users,
  Globe,
  Shield,
  TrendingUp,
  Info
} from "lucide-react";
import Image from "next/image";
import {
  FaFacebookF as Facebook,
  FaTwitter as Twitter,
  FaInstagram as Instagram,
  FaLinkedinIn as Linkedin,
} from "react-icons/fa";

export default function Footer() {
  const [email, setEmail] = useState("");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: easeOut } },
  };

  // Updated so default link color is white
  const linkVariants = {
    rest: { x: 0, color: "#ffffff" },
    hover: {
      x: 8,
      color: "#ffffff",
      transition: { duration: 0.3, ease: easeOut },
    },
  };

  return (
    <footer className="relative overflow-hidden bg-[var(--primary-color)] mt-20">
      {/* Top CTA Section */}
      <motion.div
        className="relative px-4"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-white" />
        <div className="relative w-[85vw] lg:w-[75vw] mx-auto bg-[var(--primary-color)] border-b-8 border-b-[var(--secondary-color)] rounded-t-lg">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 py-6 px-4">
            <motion.div
              className="flex items-center gap-3"
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 20,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
                className="hidden lg:flex min-w-8 min-h-8 w-8 h-8 bg-white/20 rounded-full  items-center justify-center"
              >
                <Users className="w-4 h-4 text-white" />
              </motion.div>
              <h3 className="text-lg md:text-xl font-semibold text-[var(--primary-header-color)] text-center">
                Stay Connected to DKC's B2B Connect
              </h3>
            </motion.div>
            <motion.button
              onClick={() => (window.location.href = "/registration")}
              className="cursor-pointer bg-[var(--secondary-color)] hover:bg-[var(--secondary-hover-color)] px-8 py-3 rounded-[5px] font-semibold text-white shadow-lg transition-all duration-300 flex items-center gap-2 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              REGISTER
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Main Footer */}
      <motion.div
        className="max-w-7xl mx-auto px-4 py-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <motion.div
            className="w-[135%] p-6 rounded-xl hover:bg-white/5 transition-all duration-300"
            variants={itemVariants}
          >
            <div className="flex items-center gap-3 mb-6 -ml-4 -mt-4">
              <Image
                src="/images/logo3.png"
                alt="Dekoshur Crafts"
                width={160}
                height={90}
              />
            </div>

            <p className="text-white leading-relaxed mb-8 text-sm">
              A global trade platform connecting artisans, exporters, and buyers
              under De Koshur Crafts. We aim to promote sustainable
              partnerships, transparency, and fair trade across borders.
            </p>

            <div className="flex gap-4">
              {[
                { icon: Facebook, color: "#1877F2" },
                { icon: Twitter, color: "#1DA1F2" },
                { icon: Instagram, color: "#E4405F" },
                { icon: Linkedin, color: "#0A66C2" },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                  whileHover={{
                    scale: 1.3,
                    rotate: 15,
                    backgroundColor: social.color,
                    boxShadow: "0 8px 25px rgba(0,0,0,0.3)",
                  }}
                >
                  <social.icon className="w-4 h-4 text-white" />
                </motion.a>
              ))}
            </div>
          </motion.div>
          {/* Craft Registry */}
          <motion.div
            variants={itemVariants}
            className="p-2 rounded-xl hover:bg-white/5 transition-all duration-300"
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 text-[var(--primary-header-color)]">
              <Globe className="w-5 h-5 text-[var(--secondary-color)]" /> Craft
              Registry
            </h3>
            <ul className="space-y-3">
              {[
                {
                  txt: "Kashmir Craft Profile",
                  link: "/crafts/kashmir-profile",
                },
                {
                  txt: "Geographical Indication",
                  link: "/crafts/geographical-indication",
                },
                {
                  txt: "Blockchain Traceability",
                  link: "/crafts/blockchain-traceability",
                },
                { txt: "Carbon Footprint", link: "/crafts/carbon-footprint" },
                { txt: "Price Estimation", link: "/crafts/price-estimation" },
                { txt: "Trade Registry", link: "/crafts/trade-registry" },
              ].map(({ txt, link }, i) => (
                <motion.li key={i}>
                  <motion.a
                    href={link}
                    className="text-white hover:text-white transition-colors duration-300 text-sm flex items-center gap-2 group py-1 px-1 rounded-lg hover:bg-white/10"
                    variants={linkVariants}
                    initial="rest"
                    whileHover="hover"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
                    {txt}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Craft Resources */}
          <motion.div
            variants={itemVariants}
            className="p-2 rounded-xl hover:bg-white/5 transition-all duration-300"
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 text-[var(--primary-header-color)]">
              <TrendingUp className="w-5 h-5 text-[var(--secondary-color)]" />{" "}
              Craft Resources
            </h3>
            <ul className="space-y-3">
              {[
                {
                  txt: "Intellectual Property",
                  link: "/resources/intellectual-property",
                },
                { txt: "Counterfeits", link: "/resources/counterfeits" },
                {
                  txt: "Production Insights",
                  link: "/resources/production-insights",
                },
                { txt: "Export Data", link: "/resources/export-data" },
                {
                  txt: "Employment Trends",
                  link: "/resources/employment-trends",
                },
                { txt: "Gender Dynamics", link: "/resources/gender-dynamics" },
              ].map(({ txt, link }, i) => (
                <motion.li key={i}>
                  <motion.a
                    href={link}
                    className="text-white hover:text-white transition-colors duration-300 text-sm flex items-center gap-2 group py-1 px-1 rounded-lg hover:bg-white/10"
                    variants={linkVariants}
                    initial="rest"
                    whileHover="hover"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
                    {txt}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="p-2 rounded-xl hover:bg-white/5 transition-all duration-300"
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 text-[var(--primary-header-color)]">
              <Info className="w-5 h-5 text-[var(--secondary-color)]" />
              About Us
            </h3>
            <ul className="space-y-3">
              {[
                { txt: "Network", link: "/our-niche/network" },
                { txt: "Brand Story", link: "/our-brand/brand-story" },
                {
                  txt: "Brand Credentials",
                  link: "/our-brand/brand-credentials",
                },
                { txt: "Location", link: "/our-niche/location" },
                { txt: "Business", link: "/our-niche/business" },
                { txt: "Contact", link: "/contact" },
              ].map(({ txt, link }, i) => (
                <motion.li key={i}>
                  <motion.a
                    href={link}
                    className="text-white hover:text-white transition-colors duration-300 text-sm flex items-center gap-2 group py-1 px-1 rounded-lg hover:bg-white/10"
                    variants={linkVariants}
                    initial="rest"
                    whileHover="hover"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
                    {txt}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          {/* About & Connect */}
          <motion.div
            variants={itemVariants}
            className="p-2 rounded-xl hover:bg-white/5 transition-all duration-300"
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 text-[var(--primary-header-color)]">
              <Mail className="w-5 h-5 text-[var(--secondary-color)]" />
              Connect
            </h3>
            <ul className="space-y-3">
              {[
                { txt: "Core Trade", link: "/core-trade" },
                { txt: "Brand Expansion", link: "/brand-growth" },
                {
                  txt: "Collaborative",
                  link: "/collaborative",
                },
                { txt: "Institutional", link: "/institutional" },
                { txt: "Register", link: "/registration" },
                { txt: "Process", link: "/process" },
              ].map(({ txt, link }, i) => (
                <motion.li key={i}>
                  <motion.a
                    href={link}
                    className="text-white hover:text-white transition-colors duration-300 text-sm flex items-center gap-2 group py-1 px-1 rounded-lg hover:bg-white/10"
                    variants={linkVariants}
                    initial="rest"
                    whileHover="hover"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
                    {txt}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

        </div>

        {/* Newsletter */}
        <motion.div
          className="mt-16 pt-12 border-t border-[var(--secondary-color)]/50"
          variants={itemVariants}
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Text Section */}
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-semibold mb-3 bg-gradient-to-r from-white to-[var(--secondary-light-color)] bg-clip-text text-transparent">
                Stay Updated
              </h3>
              <p className="text-white text-sm">
                Subscribe to our newsletter for the latest updates.
              </p>
            </div>

            {/* Email Input + Button */}
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:col-span-1">
              <motion.input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full sm:flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-[var(--secondary-color)]"
              />
              <motion.button
                className="w-full sm:w-auto cursor-pointer bg-[var(--secondary-color)] hover:bg-[var(--secondary-hover-color)] px-8 py-3 rounded-lg font-semibold text-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                JOIN
              </motion.button>
            </div>

            {/* Verified Payment / Price Tag Image */}
            <div className="flex justify-center lg:justify-end">
              <img
                src="/images/price-tag.png"
                alt="Verified Payment"
                className="w-110 h-auto object-contain opacity-90"
              />
            </div>
          </div>
        </motion.div>
        {/* Bottom */}
        <motion.div
          className="mt-12 pt-8 border-t border-[var(--secondary-color)]/50 flex flex-col md:flex-row justify-between items-center gap-4"
          variants={itemVariants}
        >
          <div className="flex flex-col gap-1">
            <p className="text-white text-sm">
              © {new Date().getFullYear()} De Koshur Crafts Bazaar USA. All rights
              reserved.
            </p>
            <p className="text-white text-sm">
              Desgined and Developed by <a href="https://primelogicsol.com/" target="_blank" className="text-[var(--secondary-light-color)]">Prime Logical Solutions USA</a>
            </p>
          </div>
          <div className="flex items-center gap-6 text-sm">
            <div className="flex gap-4">
              <motion.a
                href="/terms&condition/privacyPolicy"
                className="text-white hover:text-white text-xs md:text-md"
              >
                Privacy Policy
              </motion.a>
              <motion.a
                href="/terms&condition/refund&cancellationPolicy"
                className="text-white hover:text-white text-xs md:text-md"
              >
                Refund Policy
              </motion.a>
              <motion.a
                href="/terms&condition/disputeResolution"
                className="text-white hover:text-white text-xs md:text-md"
              >
                Dispute Policy
              </motion.a>
              <motion.a
                href="/terms&condition/kyc-onboardingPolicy"
                className="text-white hover:text-white text-xs md:text-md"
              >
                KYC Policy
              </motion.a>
              <motion.a
                href="/terms&condition/contact"
                className="text-white hover:text-white text-xs md:text-md"
              >
                Contact Support
              </motion.a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}
