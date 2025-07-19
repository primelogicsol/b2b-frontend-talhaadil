"use client";

import {
  Palette,
  Hand,
  Layers3,
  Users,
  MessageCircle,
  Megaphone,
  Banknote,
  Truck,
} from "lucide-react";
import { motion } from "framer-motion";

const craftingHighlights = [
  {
    icon: <Hand className="w-8 h-8" style={{ color: "var(--secondary-color)" }} />,
    label: "Handcrafted Excellence",
  },
  {
    icon: <Layers3 className="w-8 h-8" style={{ color: "var(--primary-cyan-color)" }} />,
    label: "Generations of Tradition",
  },
  {
    icon: <Users className="w-8 h-8" style={{ color: "var(--primary-color)" }} />,
    label: "Diverse & Passionate Community",
  },
];

const supportRoles = [
  {
    icon: <MessageCircle className="w-20 h-5 mt-1" style={{ color: "var(--primary-color)" }} />,
    title: "Customer Support",
    desc: "Dedicated to helping buyers and artisans with quick responses, issue resolution, and personalized service.",
  },
  {
    icon: <Megaphone className="w-20 h-5 mt-1" style={{ color: "var(--secondary-hover-color)" }} />,
    title: "Marketing & Outreach",
    desc: "Telling artisan stories, growing our brand, and engaging with the global audience through creative content and partnerships.",
  },
  {
    icon: <Banknote className="w-20 h-5 mt-1" style={{ color: "var(--primary-cyan-color)" }} />,
    title: "Finance & Payments",
    desc: "Ensures timely, fair payments to artisans while managing financial growth and sustainability of the platform.",
  },
  {
    icon: <Truck className="w-20 h-5 mt-1" style={{ color: "var(--primary-dark-slate)" }} />,
    title: "Logistics & Operations",
    desc: "Manages inventory, shipping, and order fulfillment so that every piece reaches its new home with care.",
  },
];

export default function TeamCraftSupport() {
  return (
    <section className="py-20 px-4 md:px-10 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto space-y-24">

        {/* --- Our Crafting Team --- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-10 text-center"
        >
          <div className="flex items-center justify-center gap-3">
            <Palette className="h-10 w-10" style={{ color: "var(--primary-color)" }} />
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "var(--primary-dark-slate)" }}>
              Our Crafting Team: The Artisans Who Make It All Possible
            </h2>
          </div>

          <p className="text-lg max-w-4xl mx-auto text-gray-600 leading-relaxed">
            At De Koshur Crafts, we are not just a business—we are a community. Our artisans, from remote
            villages to bustling cities, are the heart of our platform. Every piece tells a story of skill,
            tradition, and passion passed down through generations.
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            {craftingHighlights.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-4 rounded-xl transition-all duration-300 hover:scale-105 "
              >
                {item.icon}
                <span className="text-gray-700 font-medium">{item.label}</span>
              </div>
            ))}
          </div>

          <blockquote className="italic text-gray-500 max-w-2xl mx-auto pt-4 border-t mt-6 text-sm">
            "We are more than just creators. We are custodians of a rich cultural legacy, and through De
            Koshur Crafts, we ensure our art continues to be appreciated worldwide."
          </blockquote>
        </motion.div>

        {/* --- Support and Development Team --- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="space-y-10 text-center"
        >
          <div className="flex items-center justify-center gap-3">
            <Users className="h-10 w-10" style={{ color: "var(--primary-navy-color)" }} />
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "var(--primary-dark-slate)" }}>
              Support & Development Team: The Backbone of Our Operations
            </h2>
          </div>

          <p className="text-lg max-w-4xl mx-auto text-gray-600 leading-relaxed">
            Behind every artisan's success is a support team ensuring smooth operations. From
            exceptional customer service to marketing and logistics, this team makes sure the mission
            of De Koshur Crafts is delivered with excellence.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
            {supportRoles.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 text-left p-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-md"
              >
                {item.icon}
                <div>
                  <h4 className="font-semibold" style={{ color: "var(--primary-hover-color)" }}>
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
