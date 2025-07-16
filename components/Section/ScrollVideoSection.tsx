"use client";

import { useState } from "react";
import Image from "next/image";

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
      src: "https://www.w3schools.com/html/mov_bbb.mp4",
      title: "Default Video 1",
    },
    {
      type: "image",
      src: "/placeholder.svg?height=400&width=600",
      title: "Default Image",
    },
    {
      type: "video",
      src: "https://www.w3schools.com/html/movie.mp4",
      title: "Default Video 2",
    },
  ],
}: MediaSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentMedia = items[currentIndex];

  return (
    <div className="relative w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg">
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
          width={800}
          height={450}
          className="w-full h-auto object-cover aspect-video"
        />
      )}

      <div className="absolute top-4 left-4 text-white text-sm font-medium bg-black bg-opacity-50 px-3 py-1 rounded-md">
        {currentMedia.title}
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              currentIndex === index ? "bg-white w-6" : "bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}



export default function ScrollVideoSection({
  heading = "Handicraft Progressive Business Model for Every Vision Seamless Sourcing, Certified Authenticity, and Scalable Partnerships, Connecting You to the Finest Kashmiri Handicrafts for a Competitive Edge in Luxury Markets",
  introLabel = "Welcome to B2B Connect - USA",
  items, // optional to override media
}: {
  heading?: string;
  introLabel?: string;
  items?: MediaItem[];
}) {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <style jsx global>{`
        body {
          background-image: radial-gradient(circle, #e0e0e0 1px, transparent 1px);
          background-size: 20px 20px;
        }
      `}</style>

      <main className="container mx-auto px-4 py-12 md:py-20">
        <section className="grid md:grid-cols-2 gap-12 items-center mb-16 md:mb-24">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-0.5" style={{ backgroundColor: "#FF6600" }} />
              <p className="text-sm font-medium uppercase text-gray-600">
                {introLabel}
              </p>
            </div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold leading-[1.2]">
              {heading}
            </h1>
          </div>

          <div className="flex justify-center">
            <MediaSlider items={items} />
          </div>
        </section>

        {/* you can keep your bottom sections exactly the same */}
        <section className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* bottom left */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-0.5" style={{ backgroundColor: "#FF6600" }} />
                <p className="text-lg font-semibold text-gray-800">
                  Dream It:{" "}
                  <span className="font-normal text-gray-700">
                    Envision your store or product lineup. We&apos;ll provide the roadmap for sourcing products that meet your unique business needs ethically made Kashmiri handicrafts
                  </span>
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-0.5" style={{ backgroundColor: "#FF6600" }} />
                <p className="text-lg font-semibold text-gray-800">
                  Define It:{" "}
                  <span className="font-normal text-gray-700">
                    Seamless shipping, tracking, and logistics. Certified authenticity ensures GI-tagged crafts, fair trade, and empowerment with advance blockchain verification and market trends.
                  </span>
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-0.5" style={{ backgroundColor: "#FF6600" }} />
                <p className="text-lg font-semibold text-gray-800">
                  Dominate It:{" "}
                  <span className="font-normal text-gray-700">
                    We operate across United States of America with major facilitation hubs at New York, D.C., Los Angeles, San Francisco, Chicago, Houston, and Miami.
                  </span>
                </p>
              </div>
            </div>
            <p className="font-bold text-lg" style={{ color: "#FF6600" }}>
              Handicraft Progressive Business Model for Every Vision
              <br />
              <span className="text-gray-700 font-normal text-base">
                Crafting US Next Generations with 700+ Old Legacy of Kashmiri Handicraft Together
              </span>
            </p>
          </div>

          {/* bottom right */}
          <div className="space-y-6 text-gray-700">
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
