"use client";

import {
  Users,
  Globe,
  HeartHandshake,
  Rocket,
  Star,
  Handshake,
} from "lucide-react";
import { motion } from "framer-motion";

export default function TeamVisionSection() {
  return (
    <section className="relative py-20 px-4 md:px-10 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto space-y-24">

        {/* Collaboration Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8 text-center"
        >
          <div className="flex justify-center items-center gap-4">
            <Users className="h-10 w-10" style={{ color: "var(--primary-color)" }} />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              The Power of Collaboration
            </h2>
          </div>

          <p className="text-lg leading-relaxed max-w-4xl mx-auto text-gray-600">
            The De Koshur Crafts team works collaboratively, drawing from each other’s strengths,
            skills, and perspectives to ensure that the company remains dynamic, innovative, and
            growth-oriented. Our commitment to ethical business practices and sustainability is shared
            by everyone — this collective passion is what drives us.
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <motion.div
              whileHover={{ scale: 1.0, y: -4 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex items-center gap-3"
            >
              <Globe className="w-8 h-8" style={{ color: "var(--primary-cyan-color)" }} />
              <span className="text-gray-700 font-medium">Global partnerships</span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.0, y: -4 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex items-center gap-3"
            >
              <Handshake className="w-8 h-8" style={{ color: "var(--secondary-color)" }} />
              <span className="text-gray-700 font-medium">Retailer & NGO alliances</span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.0, y: -4 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex items-center gap-3"
            >
              <HeartHandshake className="w-8 h-8" style={{ color: "var(--secondary-hover-color)" }} />
              <span className="text-gray-700 font-medium">Ethical practices</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Looking Ahead Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="space-y-8 text-center"
        >
          <div className="flex justify-center items-center gap-4">
            <Rocket className="h-10 w-10" style={{ color: "var(--primary-navy-color)" }} />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Looking Ahead: Our Vision for the Future
            </h2>
          </div>

          <p className="text-lg leading-relaxed max-w-4xl mx-auto text-gray-600">
            As we look ahead, we’re excited about expanding our reach, creating more opportunities for
            artisans, and enhancing our technology — all while staying grounded in sustainability and
            cultural preservation.
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <motion.div
              whileHover={{ scale: 1.0, y: -4 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex items-center gap-3"
            >
              <Star className="w-8 h-8" style={{ color: "var(--secondary-light-color)" }} />
              <span className="text-gray-700 font-medium">Empowering artisans</span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.0, y: -4 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex items-center gap-3"
            >
              <Globe className="w-8 h-8" style={{ color: "var(--primary-cyan-color)" }} />
              <span className="text-gray-700 font-medium">Global cultural impact</span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.0, y: -4 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex items-center gap-3"
            >
              <Rocket className="w-8 h-8" style={{ color: "var(--primary-navy-color)" }} />
              <span className="text-gray-700 font-medium">Innovation-first mindset</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}