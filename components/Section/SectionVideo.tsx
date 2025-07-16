"use client";

import parse from "html-react-parser";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import VideoModal from "./VideoModal";

interface About4Props {
  MainImg: string;
  SubTitle: string;
  Title: string;
  Content: string;
  listTitle1: string;
  listTitle2: string;
  BoxTitle1: string;
  BoxTitle2: string;
}

const About4: React.FC<About4Props> = ({
   MainImg = "/images/default-about-img.jpg",
  SubTitle = "DEFAULT SUBTITLE",
  Title = "Default <span>Title</span>",
  Content = "Default content about your brand or services goes here.",
  listTitle1 = "Default list item 1",
  listTitle2 = "Default list item 2",
  BoxTitle1 = "99",
  BoxTitle2 = "Default Label",
}) => {
  const [iframeSrc, setIframeSrc] = useState("about:blank");
  const [toggle, setToggle] = useState(false);

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
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center"
      >
        {/* Left Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div>
            <h5 className="text-sm text-orange-500 uppercase font-medium mb-2">{SubTitle}</h5>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-snug">
              {parse(Title)}
            </h1>
            <p className="mt-4 text-gray-600 text-base">{Content}</p>
          </div>

          <ul className="space-y-2 mb-6">
            {[listTitle1, listTitle2].map((item, index) => (
              <li key={index} className="flex items-start gap-2 text-gray-800">
                <span className="w-3 h-3 mt-1 rounded-full bg-orange-500 shrink-0"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="relative inline-block px-6 py-3 font-semibold text-white bg-orange-500 rounded-md overflow-hidden group"
            >
              <span className="absolute inset-0 bg-orange-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out z-0 rounded-md" />
              <span className="relative z-10">EXPLORE MORE</span>
            </Link>

            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="relative bg-gray-100 rounded-lg p-6 shadow-md w-48 text-center"
            >
              <Image
                src="/images/new-pic2.webp"
                alt="icon"
                width={40}
                height={40}
                className="mx-auto mb-2"
              />
              <h4 className="text-2xl font-bold text-orange-500">{BoxTitle1}+</h4>
              <p className="uppercase text-sm text-gray-600 mt-1">{BoxTitle2}</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Image/Video */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative w-full"
        >
          <Image
            src={MainImg}
            alt="About Image"
            width={600}
            height={500}
            className="rounded-lg shadow-lg object-cover w-full h-auto"
          />

          <motion.button
            onClick={handleClick}
            whileHover={{ scale: 1.05 }}
            className="absolute top-4 right-4 bg-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-3 group transition-all"
          >
            <i className="bi bi-play text-white bg-orange-500 p-2 rounded-full text-lg group-hover:bg-orange-600 transition"></i>
            <span className="text-orange-500 font-semibold underline text-sm">WATCH VIDEO</span>
          </motion.button>

          {/* Decorative Shape */}
          <Image
            src="/images/new-pic2.webp"
            alt="Decorative shape"
            width={150}
            height={150}
            className="absolute bottom-[-40px] left-[-20px] z-[-1] animate-bounce hidden md:block"
          />
        </motion.div>
      </motion.div>

      {/* Background Decorations */}
      <Image
        src="/images/new-pic2.webp"
        alt="shape"
        width={150}
        height={150}
        className="absolute top-[20%] left-0 animate-bounce z-0 hidden md:block"
      />
      <Image
        src="/images/new-pic2.webp"
        alt="shape"
        width={120}
        height={120}
        className="absolute top-0 right-0 animate-pulse z-0 hidden md:block"
      />

      <VideoModal isTrue={toggle} iframeSrc={iframeSrc} handelClose={handleClose} />
    </section>
  );
};

export default About4;
