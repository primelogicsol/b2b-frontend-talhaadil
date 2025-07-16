"use client";

import SectionTitle from "../Section/SectionTitle";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface ServiceItem {
  icon: string;
  title: string;
  desc: string;
  btnLink: string;
  btnText: string;
}

interface Services1Props {
  data?: ServiceItem[];
}

const fallbackData: ServiceItem[] = [
  {
    icon: "/assets/images/service-icon1.png",
    title: "Cloud Solutions",
    desc: "Empower your business with scalable cloud services.",
    btnLink: "/services/cloud",
    btnText: "Learn More",
  },
  {
    icon: "/assets/images/service-icon2.png",
    title: "Cybersecurity",
    desc: "Protect your data and ensure compliance with industry standards.",
    btnLink: "/services/security",
    btnText: "Learn More",
  },
  {
    icon: "/assets/images/service-icon3.png",
    title: "AI & Automation",
    desc: "Streamline workflows with intelligent automation.",
    btnLink: "/services/ai",
    btnText: "Learn More",
  },
  {
    icon: "/assets/images/service-icon4.png",
    title: "IT Consulting",
    desc: "Get expert guidance to drive business success.",
    btnLink: "/services/consulting",
    btnText: "Learn More",
  },
];

const ServicesCards: React.FC<Services1Props> = ({ data }) => {
  const servicesData = data && data.length > 0 ? data : fallbackData;

  return (
    <section className="relative bg-gray-100 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-12">
          <SectionTitle
            SubTitle="SOLUTEK COMPANY"
            Title="How Professional IT Services<br/> Can Drive <span>Success.</span>"
          />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((item, i) => (
            <div
              key={i}
              className="group relative bg-white rounded-xl p-8 transition-all duration-500 shadow-md overflow-hidden z-10 hover:-translate-y-6"
            >
              {/* Background animation using Framer Motion */}
              <motion.div
                initial={{
                  clipPath:
                    "polygon(50% 0, 50% 0, 50% 50%, 50% 100%, 50% 100%, 50% 50%)",
                }}
                whileHover={{
                  clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0 bg-[url('/assets/images/service6.png')] bg-cover bg-center z-0"
              />

              {/* Icon */}
              <div className="relative z-10 w-[65px] h-[65px] mb-6 rounded-full flex items-center justify-center transition duration-500 bg-[#f4f4f4] group-hover:bg-[#ff3b00]">
                <Image
                  src={item.icon}
                  alt="icon"
                  width={30}
                  height={30}
                  className="transition duration-500 group-hover:invert group-hover:brightness-0"
                />
              </div>

              {/* Title */}
              <div className="relative z-10">
                <h3 className="text-lg font-semibold mb-2 transition duration-500 group-hover:text-white">
                  {item.title}
                </h3>
                <p className="text-sm mb-5 transition duration-500 group-hover:text-white">
                  {item.desc}
                </p>
              </div>

              {/* Button */}
              <div className="relative z-10">
                <Link
                  href={item.btnLink}
                  className="inline-flex items-center gap-2 font-semibold text-sm transition duration-500 text-[#ff3c00] group-hover:text-white"
                >
                  <i className="bi bi-plus w-[35px] h-[35px] text-center leading-[35px] rounded-full bg-[#f4f4f4] group-hover:bg-[#ff6d3e] group-hover:text-white text-[#ff3c00] transition-all duration-500"></i>
                  {item.btnText}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative Shapes */}
        <Image
          src="/assets/images/service5.png"
          alt="shape1"
          width={200}
          height={200}
          className="absolute top-0 right-0 animate-bounce z-0 hidden lg:block"
        />
        <Image
          src="/assets/images/service7.png"
          alt="shape2"
          width={150}
          height={150}
          className="absolute top-[16%] left-[3%] animate-pulse z-0 hidden lg:block"
        />
        <Image
          src="/assets/images/service8.png"
          alt="shape3"
          width={150}
          height={150}
          className="absolute top-[2%] left-0 animate-bounce z-0 hidden lg:block"
        />
      </div>
    </section>
  );
};

export default ServicesCards;
