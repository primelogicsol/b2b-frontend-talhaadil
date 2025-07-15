"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FC } from "react";

interface Props {
  Price: string;
  PricePlan: string;
  FeatureList: string[];
  BtnUrl: string;
  BtnText: string;
}

const PricingCard: FC<Props> = ({
  Price,
  PricePlan,
  FeatureList,
  BtnUrl,
  BtnText,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="relative group rounded-xl bg-white text-center overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
    >
      {/* 🔥 Entire Card Hover Background Image */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 scale-105 group-hover:scale-100 bg-[url('/assets/images/pricing2.png')] bg-cover bg-center transition-all duration-700 z-0" />

      {/* Top Section */}
      <div className="relative z-10 py-10 px-6 bg-[#fff5f3] rounded-t-xl">
        <div className="absolute top-4 left-6 w-[85%] h-[80%] border border-dashed border-orange-400 rounded-[15px_40px_15px_15px] z-0"></div>

        <h1 className="text-[45px] font-semibold text-[#ff3c00] transition duration-500 group-hover:text-white relative z-10">
          {Price}
        </h1>
        <h3 className="text-[20px] font-semibold text-[#041424] mt-4 transition duration-500 group-hover:text-white relative z-10">
          {PricePlan}
        </h3>
      </div>

      {/* Feature List */}
      <div
        className="relative z-10 px-8 py-10 text-left bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/images/pricing1.png')" }}
      >
        <ul className="mb-8 space-y-3">
          {FeatureList.map((item, index) => (
            <li
              key={index}
              className="flex items-center text-gray-800 text-sm leading-7 group-hover:text-white transition"
            >
              <i className="bi bi-check-circle text-[#ff3d00] text-lg mr-2"></i>
              {item}
            </li>
          ))}
        </ul>

        {/* ✨ Sliding Button */}
        <div className="relative inline-block w-fit group/button">
          <Link
            href={BtnUrl}
            className="relative z-10 px-8 py-4 font-semibold text-[#ff3d00] bg-[#f5ebe8] rounded-md overflow-hidden transition-all duration-500 group-hover:text-white"
          >
            {BtnText}
          </Link>

          {/* Sliding Layer */}
          <span className="absolute left-0 top-0 w-0 h-full bg-[#ff3d00] rounded-md z-0 transition-all duration-500 group-hover/button:w-full"></span>
        </div>
      </div>
    </motion.div>
  );
};

export default PricingCard;
