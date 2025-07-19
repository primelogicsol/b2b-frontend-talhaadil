"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import VideoModal from "./VideoModal";

export default function MissionSection() {
  const [toggle, setToggle] = useState(false);
  const [iframeSrc, setIframeSrc] = useState("about:blank");

  const handleClick = () => {
    setIframeSrc("https://www.youtube.com/embed/rRid6GCJtgc");
    setToggle(true);
  };

  const handleClose = () => {
    setIframeSrc("about:blank");
    setToggle(false);
  };

  return (
    <section className="relative bg-white py-20 px-4 lg:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Heading */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h5 className="text-sm text-[var(--primary-color)] uppercase font-bold mb-2">
            OUR WAYS
          </h5>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-snug">
            Brand <span className="text-[var(--secondary-color)]">Credentials</span>
          </h2>
          <p className="text-gray-600 text-base">
        Our mission is to deliver innovative technology solutions that not only solve complex business challenges but also inspire lasting trust among our clients and partners. We are committed to driving measurable business growth by leveraging cutting‑edge tools, strategic insights, and forward‑thinking approaches. Every solution we design is built with the future in mind—empowering organizations to adapt, thrive, and lead in a rapidly evolving digital landscape. Through our work, we aim to create a better, smarter, and more connected digital future for businesses and communities alike.
          </p>
        </motion.div>

        {/* Right Side - Video */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative w-full"
        >
          <Image
            src="/images/default-about-img.jpg"
            alt="Mission Thumbnail"
            width={600}
            height={400}
            className="rounded-lg shadow-lg object-cover w-full h-auto"
          />
          <motion.button
            onClick={handleClick}
            whileHover={{ scale: 1.05 }}
            className="absolute top-4 right-4 bg-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-3 group transition-all"
          >
            <i className="bi bi-play text-white bg-[var(--secondary-color)] p-2 rounded-full text-lg group-hover:bg-[var(--primary-hover-color)] transition"></i>
            <span className="text-[var(--secondary-color)] font-semibold underline text-sm">
              WATCH VIDEO
            </span>
          </motion.button>
        </motion.div>
      </div>

      <VideoModal isTrue={toggle} iframeSrc={iframeSrc} handelClose={handleClose} />
    </section>
  );
}
