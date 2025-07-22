"use client";

import { Globe, Heart, Users, Zap } from "lucide-react";


const cards = [
  {
    icon: Globe,
    title: "Global Reach", // 12 chars
    description:
      "We link makers in Kashmir to new buyers across the globe to help their art grow and shine strong today.",
  },
  {
    icon: Users,
    title: "Fair Trade ", // 12 chars (note extra space at end)
    description:
      "We pay fair and good to each maker so their work brings life and hope and bright smiles to them and kin.",
  },
  {
    icon: Heart,
    title: "True Heritage", // 12 chars
    description:
      "We save the old art made by wise hands to keep alive the craft that has lived for years with much love.",
  },
  {
    icon: Zap,
    title: "New Design ", // 12 chars (note space at end)
    description:
      "We mix tech with old art to make fresh works that bring past and now together for all to see and love.",
  },
]
export default function OurVision() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6"
            style={{ color: "var(--primary-color)" }}
          >
            Our Vision
          </h2>
          <div
            className="w-24 h-1 mx-auto mb-6"
            style={{ backgroundColor: "var(--secondary-color)" }}
          ></div>
          <p
            className="text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed"
            style={{ color: "var(--primary-light-text-color)" }}
          >
            A Future Built on Tradition, Innovation, and Empowerment
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Left Column - Main Vision Text */}
          <div className="space-y-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-6">
                As we look to the future, we envision a global marketplace where
                Kashmiri artisans are celebrated, empowered, and recognized for
                their incredible craftsmanship. De Koshur Crafts is not just a
                marketplace—it is a movement that seeks to build a sustainable,
                fair trade ecosystem that connects artisans, buyers, and
                cultural enthusiasts.
              </p>

              <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-6">
                Our ultimate goal is to create a sustainable, thriving business
                for each artisan while making Kashmiri craftsmanship synonymous
                with quality, authenticity, and innovation on the global stage.
                We aim to ensure that each piece of Kashmiri craftsmanship tells
                a story of artistry, heritage, and empowerment.
              </p>
            </div>

            {/* Call to Action */}
            <div className="pt-4">
              <button
                className="inline-flex items-center px-8 py-4 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
                style={{
                  backgroundColor: "var(--secondary-color)",
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLButtonElement).style.backgroundColor =
                    "var(--secondary-hover-color)")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLButtonElement).style.backgroundColor =
                    "var(--secondary-color)")
                }
              >
                Join Our Movement
                <Heart className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {cards.map((card, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border-2 border-transparent hover:border-opacity-20 transition-all duration-300 bg-white shadow-lg hover:shadow-xl"
                style={{ borderColor: "var(--primary-color)" }}
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: "var(--secondary-light-color)" }}
                >
                  <card.icon
                    className="w-6 h-6"
                    style={{ color: "var(--secondary-color)" }}
                  />
                </div>
                <h3
                  className="text-lg font-semibold mb-2"
                  style={{ color: "var(--primary-color)" }}
                >
                  {card.title}
                </h3>
                <p className="text-sm text-gray-600">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
