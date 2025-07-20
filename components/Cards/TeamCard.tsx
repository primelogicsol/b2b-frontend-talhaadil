"use client";

import { VideoIcon as Vimeo, Phone, Share2 } from "lucide-react";
import {
  FaFacebookF as Facebook,
  FaTwitter as Twitter,
  FaLinkedinIn as Linkedin,
} from "react-icons/fa";

interface TeamMember {
  name: string;
  title: string;
  phone: string;
  imageUrl?: string;
  description?: string;
  quote?: string;
  social: {
    facebook?: string;
    vimeo?: string;
    twitter?: string;
    linkedin?: string;
  };
}

export default function TeamCard({
  name = "Asad Iqbal",
  title = "Chief Technology Officer",
  phone = "(+92) 345-3333333",
  imageUrl = "/images/team-asad.jpg",
  description = "Asad leads the tech innovation at De Koshur Crafts...",
  quote = "Technology is a tool for empowerment...",
  social = {
    facebook: "#",
    vimeo: "#",
    twitter: "#",
    linkedin: "#",
  },
}: TeamMember) {
  return (
    <div className="relative w-80 h-[32rem] rounded-2xl shadow-2xl bg-gray-100 group cursor-pointer transform transition-all duration-700 hover:scale-105 overflow-hidden">
      {/* Orange diagonal background */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-[var(--primary-color)] to-[var(--primary-hover-color)] opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out"
        style={{ clipPath: "polygon(0% 100%, 100% 100%, 100% 35%, 0% 65%)" }}
      ></div>

      <div className="relative z-10 flex flex-col items-center h-full pt-12 pb-6 px-4 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400">
        {/* Image */}
        <div className="relative">
          <div className="w-36 h-36 rounded-full bg-gray-400 flex items-center justify-center overflow-hidden ring-4 ring-white/20 group-hover:ring-white/40 transition-all duration-500">
            <img
              src={imageUrl}
              alt={name}
              className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-110"
            />
          </div>

          {/* Share Icon */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 transform transition-all duration-500 group-hover:rotate-180">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-lg ring-2 ring-gray-100 group-hover:ring-[var(--secondary-hover-color)] transition-all duration-500">
              <Share2 className="w-5 h-5 text-gray-600 group-hover:text-[var(--primary-color)] transition-colors duration-500" />
            </div>
          </div>

          {/* Social Icons */}
          <div className="absolute inset-0">
            <div
              className="absolute opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-700 ease-out"
              style={{ top: "10%", right: "-8%", transitionDelay: "0.1s" }}
            >
              <a
                href={social.facebook}
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-[var(--secondary-color)] text-white flex items-center justify-center hover:bg-blue-600 transition-all duration-300 transform hover:scale-110 shadow-lg"
              >
                <Facebook className="w-4 h-4" fill="currentColor" />
              </a>
            </div>
            <div
              className="absolute opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-700 ease-out"
              style={{ top: "35%", right: "-16%", transitionDelay: "0.2s" }}
            >
              <a
                href={social.vimeo}
                aria-label="Vimeo"
                className="w-8 h-8 rounded-full bg-[var(--secondary-color)] text-white flex items-center justify-center hover:bg-blue-500 transition-all duration-300 transform hover:scale-110 shadow-lg"
              >
                <Vimeo className="w-4 h-4" fill="currentColor" />
              </a>
            </div>
            <div
              className="absolute opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-700 ease-out"
              style={{ top: "60%", right: "-15%", transitionDelay: "0.3s" }}
            >
              <a
                href={social.twitter}
                aria-label="Twitter"
                className="w-8 h-8 rounded-full bg-[var(--secondary-color)] text-white flex items-center justify-center hover:bg-sky-500 transition-all duration-300 transform hover:scale-110 shadow-lg"
              >
                <Twitter className="w-4 h-4" fill="currentColor" />
              </a>
            </div>
            <div
              className="absolute opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-700 ease-out"
              style={{ top: "80%", right: "0%", transitionDelay: "0.4s" }}
            >
              <a
                href={social.linkedin}
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full bg-[var(--secondary-color)] text-white flex items-center justify-center hover:bg-blue-700 transition-all duration-300 transform hover:scale-110 shadow-lg"
              >
                <Linkedin className="w-4 h-4" fill="currentColor" />
              </a>
            </div>
          </div>
        </div>

        {/* Text Info */}
        <div className="flex flex-col items-center text-center mt-8">
          <h3 className="text-xl font-bold text-slate-800 group-hover:text-gray-500 transition-all duration-500">
            {name}
          </h3>
          <p className="text-gray-600 group-hover:text-gray-500 transition-all duration-500 mt-1">
            {title}
          </p>
          <div className="flex items-center mt-3 text-gray-700 group-hover:text-white transition-all duration-500">
            <div className="p-2 rounded-full bg-white/10 group-hover:bg-white/20 transition-all duration-500 mr-2">
              <Phone className="w-4 h-4" />
            </div>
            <span className="text-sm font-medium">{phone}</span>
          </div>
        </div>

        {/* Description */}
        {description && (
          <p className="mt-2 text-sm text-gray-700 group-hover:text-white/90 text-center leading-snug transition-all duration-500">
            {description}
          </p>
        )}

        {/* Quote */}
        {quote && (
          <blockquote className="mt-2 text-xs italic text-[var(--secondary-color)] group-hover:text-[var(--secondary-hover-color)] transition-all duration-500 text-center">
            “{quote}”
          </blockquote>
        )}
      </div>
    </div>
  );
}
