"use client";

import { useState } from "react";
import Image from "next/image";
import { useGlobalContext } from "@/context/ScreenProvider";

interface MediaItem {
  type: "video" | "image";
  src: string;
  title: string;
}

interface MediaSliderProps {
  items?: MediaItem[];
}

function MediaSlider({
  items = [
    {
      type: "video",
      src: "/videos/1.mp4",
      title: "Default Video 1",
    },
    {
      type: "video",
      src: "/videos/3.mp4",
      title: "Default Image",
    },
    {
      type: "video",
      src: "/videos/2.mp4",
      title: "Default Video 2",
    },
    {
      type: "video",
      src: "/videos/4.mp4",
      title: "Default Video 4",
    },
  ],
}: MediaSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentMedia = items[currentIndex];

  return (
    <div className="relative w-full max-w-6xl 2xl:max-w-7xl mx-auto rounded-xl overflow-hidden shadow-lg">
      {currentMedia.type === "video" ? (
        <video
          key={currentMedia.src}
          className="w-full h-auto object-cover aspect-video"
          controls
          autoPlay
          muted
          loop
        >
          <source src={currentMedia.src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <Image
          key={currentMedia.src}
          src={currentMedia.src}
          alt={currentMedia.title}
          width={1600}
          height={900}
          className="w-full h-auto object-cover aspect-video"
        />
      )}

      {/* title overlay */}
     

      {/* slider dots */}
      <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex space-x-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${currentIndex === index ? "bg-white w-6" : "bg-gray-400"
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function ScrollVideoSection({
  heading = "At De Koshur Crafts, our mission goes far beyond the boundaries of a typical e-commerce experience. We are deeply driven by a powerful and unwavering belief: that the authentic and timeless craftsmanship of Kashmiri artisans deserves not only recognition but also the utmost respect and a prominent platform on the global stage. Our ultimate goal is to empower these talented artisans by preserving their ancient, heritage-rich crafts and connecting them directly to a vibrant and thriving international marketplace. We are committed to ensuring sustainability and promoting fair trade practices at every step of this journey, fostering an environment where artisans can flourish and their unique cultural legacy can be celebrated and sustained for generations to come.",
  introLabel = "Our Mission",
  items,
}: {
  heading?: string;
  introLabel?: string;
  items?: MediaItem[];
}) {
  const { is4K } = useGlobalContext();

  return (
    <div className="bg-white text-gray-900 font-sans px-5">
      <style jsx global>{`
        body {
          background-image: radial-gradient(circle, #e0e0e0 1px, transparent 1px);
          background-size: 20px 20px;
        }
      `}</style>

      <main className="container mx-auto px-4 py-12 md:py-20 2xl:px-8">
        {/* top section */}
        <section className="grid md:grid-cols-2 gap-12 items-center mb-16 md:mb-24">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-0.5 bg-[var(--secondary-color)]" />
              <p className="text-2xl md:text-3xl lg:text-5xl 2xl:text-6xl uppercase text-[var(--secondary-color)] font-extrabold mb-5">
                {introLabel}
              </p>
            </div>
            <h1 className="text-base text-md md:text-lg leading-relaxed">
              {heading}
            </h1>
          </div>

          <div className="flex justify-center">
            <MediaSlider items={items} />
          </div>
        </section>

        {/* bottom section */}
        <section className="grid md:grid-cols-2 gap-12 md:gap-16 2xl:gap-24">
          {/* bottom left */}
          <div className="space-y-8">
            <div className="space-y-4">
              {[
                {
                  title: "Dream It:",
                  desc: "Envision your store or product lineup. We’ll provide the roadmap for sourcing products that meet your unique business needs ethically made Kashmiri handicrafts",
                },
                {
                  title: "Define It:",
                  desc: "Seamless shipping, tracking, and logistics. Certified authenticity ensures GI-tagged crafts, fair trade, and empowerment with advance blockchain verification and market trends.",
                },
                {
                  title: "Dominate It:",
                  desc: "We operate across United States of America with major facilitation hubs at New York, D.C., Los Angeles, San Francisco, Chicago, Houston, and Miami.",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-8 h-0.5 bg-[var(--secondary-color)]" />
                  <p className="text-lg font-semibold text-gray-800">
                    {item.title}{" "}
                    <span className="font-normal text-gray-700">{item.desc}</span>
                  </p>
                </div>
              ))}
            </div>
            <p className="font-bold text-lg 2xl:text-xl text-[var(--secondary-color)]">
              Handicraft Progressive Business Model for Every Vision
              <br />
              <span className="text-gray-700 font-normal text-base 2xl:text-lg">
                Crafting US Next Generations with 700+ Old Legacy of Kashmiri Handicraft Together
              </span>
            </p>
          </div>

          {/* bottom right */}
          <div className="space-y-6 text-gray-700 text-base lg:text-lg 2xl:text-xl leading-relaxed">
            <p>
              We enjoy <span className="font-bold text-gray-900">Global Leadership in Kashmir Handicrafts</span>, Business Innovation, Craft Advocacy, and Research Excellence.
            </p>
            <p>
              We are certified U.S. business committed to diversity, equity, inclusion, and belonging. As a U.S. Veteran-Owned Business, it holds prestigious certifications, including WBENC (<span className="font-bold text-gray-900">Women&apos;s Business Enterprise</span>) and MBE (<span className="font-bold text-gray-900">Minority Business Enterprise Program</span>), demonstrating its dedication to fostering an inclusive and equitable business environment.
            </p>
            <p>
              We are America&apos;s Premier Progressive{" "}
              <span className="font-bold text-gray-900">Omni-Channel Business Ecosystem</span>, customized exclusively for premier Kashmiri handicrafts.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
