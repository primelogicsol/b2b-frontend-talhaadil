"use client"
import { motion, easeOut } from "framer-motion"
import { useState } from "react"
import {
 
  Mail,
  ArrowRight,
  Users,
  Globe,
  Shield,
  TrendingUp,
} from "lucide-react"

import { 
  FaFacebookF as Facebook, 
  FaTwitter as Twitter, 
  FaInstagram as Instagram, 
  FaLinkedinIn as Linkedin 
} from "react-icons/fa";

export default function Component() {
  const [email, setEmail] = useState("")
  const [isHovered, setIsHovered] = useState(false)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: easeOut,
      },
    },
  }

  const linkVariants = {
    rest: { x: 0, color: "#93c5fd" },
    hover: {
      x: 8,
      color: "#ffffff",
      transition: { duration: 0.3, ease: easeOut },
    },
  }

  const socialIconVariants = {
    rest: {
      scale: 1,
      rotate: 0,
      backgroundColor: "rgba(255,255,255,0.1)",
      boxShadow: "0 0 0 rgba(0,0,0,0)",
    },
    hover: {
      scale: 1.3,
      rotate: 15,
      backgroundColor: "rgba(255,255,255,0.2)",
      boxShadow: "0 8px 25px rgba(0,0,0,0.3)",
      transition: { duration: 0.3, ease: easeOut },
    },
  }

  const sectionVariants = {
    rest: { scale: 1 },
    hover: {
      scale: 1.02,
      transition: { duration: 0.3 },
    },
  }

  return (
    <footer className="bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Top CTA Section */}
      <motion.div
        className="bg-gradient-to-r from-blue-700 to-blue-600 py-6 px-4 relative"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.div className="flex items-center gap-3" whileHover={{ scale: 1.02 }}>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center"
            >
              <Users className="w-4 h-4" />
            </motion.div>
            <h3 className="text-lg md:text-xl font-semibold">Stay Connected to Craftlore-Kashmir Craft Repository</h3>
          </motion.div>
          <motion.button
            className="bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-hover-color)] hover:from-[var(--primary-hover-color)] hover:to-[var(--primary-hover-color)] px-8 py-3 rounded-full font-semibold text-white shadow-lg transition-all duration-300 flex items-center gap-2 group"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}
            whileTap={{ scale: 0.95 }}
          >
            SUBSCRIBE TODAY
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>
      </motion.div>

      {/* Main Footer Content */}
      <motion.div
        className="max-w-7xl mx-auto px-4 py-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <motion.div
            className="lg:col-span-1 p-6 rounded-xl hover:bg-white/5 transition-all duration-300"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <motion.div className="flex items-center gap-3 mb-6" whileHover={{ scale: 1.05 }}>
              <div className="w-12 h-12 bg-gradient-to-br from-[var(--primary-color)] to-[var(--primary-hover-color)] rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Craftlore
              </h2>
            </motion.div>
            <motion.p className="text-blue-200 leading-relaxed mb-8 text-sm" variants={itemVariants}>
              A non-commercial platform and the world's largest open craft repository focused on Kashmir craftsmanship.
              We empower you with knowledge and tools to make informed, independent choices, free from external pressure
              or bias.
            </motion.p>

            {/* Fixed Social Icons - Individual Hover */}
            <motion.div className="flex gap-4" variants={itemVariants}>
              {[
                { icon: Facebook, color: "#1877F2", label: "Facebook" },
                { icon: Twitter, color: "#1DA1F2", label: "Twitter" },
                { icon: Instagram, color: "#E4405F", label: "Instagram" },
                { icon: Linkedin, color: "#0A66C2", label: "LinkedIn" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="cursor-pointer w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.1)",
                  }}
                  whileHover={{
                    scale: 1.3,
                    rotate: 15,
                    backgroundColor: social.color,
                    boxShadow: "0 8px 25px rgba(0,0,0,0.3)",
                    transition: { duration: 0.3, ease: "easeOut" },
                  }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 relative z-10 text-white" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Craft Registry */}
          <motion.div
            variants={itemVariants}
            initial="rest"
            whileHover="hover"
            className="p-6 rounded-xl hover:bg-white/5 transition-all duration-300"
          >
            <motion.h3
              className="text-xl font-semibold mb-6 flex items-center gap-2"
              whileHover={{ x: 5, transition: { duration: 0.2 } }}
            >
              <Globe className="w-5 h-5 text-[var(--primary-color)]" />
              Craft Registry
            </motion.h3>
            <ul className="space-y-3">
              {[
                "Kashmir Craft Profile",
                "Geographical Indication",
                "Blockchain Traceability",
                "Carbon Footprint",
                "Price Estimation",
                "Trade Registry",
              ].map((item, index) => (
                <motion.li key={index}>
                  <motion.a
                    href="#"
                    className="text-blue-200 hover:text-white transition-colors duration-300 text-sm flex items-center gap-2 group relative overflow-hidden py-2 px-3 rounded-lg hover:bg-white/10"
                    variants={linkVariants}
                    initial="rest"
                    whileHover="hover"
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-[var(--primary-color)]/20 to-transparent"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "0%" }}
                      transition={{ duration: 0.3 }}
                    />
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
                    <span className="relative z-10">{item}</span>
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Craft Resources */}
          <motion.div
            variants={itemVariants}
            initial="rest"
            whileHover="hover"
            className="p-6 rounded-xl hover:bg-white/5 transition-all duration-300"
          >
            <motion.h3
              className="text-xl font-semibold mb-6 flex items-center gap-2"
              whileHover={{ x: 5, transition: { duration: 0.2 } }}
            >
              <TrendingUp className="w-5 h-5 text-[var(--primary-color)]" />
              Craft Resources
            </motion.h3>
            <ul className="space-y-3">
              {[
                "Intellectual Property",
                "Counterfeits",
                "Production Insights",
                "Export Data",
                "Employment Trends",
                "Gender Dynamics",
              ].map((item, index) => (
                <motion.li key={index}>
                  <motion.a
                    href="#"
                    className="text-blue-200 hover:text-white transition-colors duration-300 text-sm flex items-center gap-2 group relative overflow-hidden py-2 px-3 rounded-lg hover:bg-white/10"
                    variants={linkVariants}
                    initial="rest"
                    whileHover="hover"
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-[var(--primary-color)]/20 to-transparent"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "0%" }}
                      transition={{ duration: 0.3 }}
                    />
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
                    <span className="relative z-10">{item}</span>
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* About & Connect */}
          <motion.div
            variants={itemVariants}
            initial="rest"
            whileHover="hover"
            className="p-6 rounded-xl hover:bg-white/5 transition-all duration-300"
          >
            <motion.h3
              className="text-xl font-semibold mb-6 flex items-center gap-2"
              whileHover={{ x: 5, transition: { duration: 0.2 } }}
            >
              <Mail className="w-5 h-5 text-[var(--primary-color)]" />
              About & Connect
            </motion.h3>
            <ul className="space-y-3">
              {["Our Mission", "Projects", "Our Team", "Careers", "Contact Us", "Become a Sponsor"].map(
                (item, index) => (
                  <motion.li key={index}>
                    <motion.a
                      href="#"
                      className="text-blue-200 hover:text-white transition-colors duration-300 text-sm flex items-center gap-2 group relative overflow-hidden py-2 px-3 rounded-lg hover:bg-white/10"
                      variants={linkVariants}
                      initial="rest"
                      whileHover="hover"
                      whileTap={{ scale: 0.95 }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-[var(--primary-color)]/20 to-transparent"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "0%" }}
                        transition={{ duration: 0.3 }}
                      />
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
                      <span className="relative z-10">{item}</span>
                    </motion.a>
                  </motion.li>
                ),
              )}
            </ul>
          </motion.div>
        </div>

        {/* Fixed Newsletter Section */}
        <motion.div className="mt-16 pt-12 border-t border-blue-700/50" variants={itemVariants}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-3 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Stay Updated
              </h3>
              <p className="text-blue-200 text-sm">
                Subscribe to our newsletter for the latest updates on Kashmir's craft heritage.
              </p>
            </div>
            <motion.div className="flex gap-3">
              <motion.input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                whileHover={{
                  scale: 1.02,
                  backgroundColor: "rgba(255,255,255,0.15)",
                  borderColor: "rgba(255,255,255,0.3)",
                }}
                whileFocus={{
                  scale: 1.02,
                  boxShadow: "0 0 0 3px rgba(251, 146, 60, 0.3)",
                }}
                style={{
                  WebkitAppearance: "none",
                  pointerEvents: "auto",
                  userSelect: "text",
                }}
              />
              <motion.button
                className="bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-hover-color)] hover:from-[var(--primary-hover-color)] hover:to-[var(--primary-hover-color)] px-8 py-3 rounded-lg font-semibold text-white shadow-lg transition-all duration-300 flex items-center gap-2 whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  if (email) {
                    console.log("Subscribing:", email)
                    // Handle subscription logic here
                  }
                }}
              >
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="mt-12 pt-8 border-t mb-[-30] border-blue-700/50 flex flex-col md:flex-row justify-between items-center gap-4"
          variants={itemVariants}
        >
          <p className="text-blue-300 text-sm">© 2025 Craftlore. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm">
            <p className="text-blue-300">Powered and Maintained by Prime Logic Solutions USA</p>
            <div className="flex gap-4">
              <motion.a
                href="#"
                className="text-blue-300 hover:text-white transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                Terms
              </motion.a>
              <motion.a
                href="#"
                className="text-blue-300 hover:text-white transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                Privacy
              </motion.a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  )
}
