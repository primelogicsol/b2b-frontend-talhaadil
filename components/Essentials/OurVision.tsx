"use client";

import { useGlobalContext } from "../Context/GlobalProvider";
import { Globe, Heart, Users, Zap } from "lucide-react";

const cards = [
  {
    icon: Globe,
    title: "Global Reach",
    description:
      "We link makers in Kashmir to new buyers across the globe to help their art grow and shine strong today.",
  },
  {
    icon: Users,
    title: "Fair Trade ",
    description:
      "We pay fair and good to each maker so their work brings life and hope and bright smiles to them and kin.",
  },
  {
    icon: Heart,
    title: "True Heritage",
    description:
      "We save the old art made by wise hands to keep alive the craft that has lived for years with much love.",
  },
  {
    icon: Zap,
    title: "New Design ",
    description:
      "We mix tech with old art to make fresh works that bring past and now together for all to see and love.",
  },
];

export default function OurVision() {
  const { is4K } = useGlobalContext();

  return (
    <section
      className={`${
        is4K ? "py-40" : "py-16 lg:py-24"
      } bg-gradient-to-br from-slate-50 to-white`}
    >
      <div
        className={`container mx-auto ${
          is4K ? "px-32 max-w-[1800px]" : "px-4 sm:px-6 lg:px-8 max-w-7xl"
        }`}
      >
        {/* Header */}
        <div className={`text-center ${is4K ? "mb-24" : "mb-16"}`}>
          <h2
            className={`font-extrabold mb-6 ${
              is4K
                ? "text-6xl"
                : "text-3xl sm:text-4xl lg:text-5xl"
            }`}
            style={{ color: "var(--primary-color)" }}
          >
            Our Vision
          </h2>
          <div
            className="w-24 h-1 mx-auto mb-6"
            style={{ backgroundColor: "var(--secondary-color)" }}
          ></div>
          <p
            className={`mx-auto leading-relaxed ${
              is4K ? "text-2xl max-w-5xl" : "text-lg sm:text-xl max-w-3xl"
            }`}
            style={{ color: "var(--primary-light-text-color)" }}
          >
            A Future Built on Tradition, Innovation, and Empowerment
          </p>
        </div>

        {/* Main Content Grid */}
        <div
          className={`items-center ${
            is4K
              ? "grid grid-cols-2 gap-24 mb-24"
              : "grid lg:grid-cols-2 gap-12 lg:gap-16 mb-16"
          }`}
        >
          {/* Left Column - Main Vision Text */}
          <div className="space-y-6">
            <div className="prose prose-lg max-w-none text-center">
              <p
                className={`text-gray-700 mb-6 ${
                  is4K ? "text-xl leading-loose" : "text-base sm:text-lg leading-relaxed"
                }`}
              >
                As we look to the future, we envision a global marketplace where
                Kashmiri artisans are celebrated, empowered, and recognized for
                their incredible craftsmanship. De Koshur Crafts is not just a
                marketplace—it is a movement that seeks to build a sustainable,
                fair trade ecosystem that connects artisans, buyers, and
                cultural enthusiasts.
              </p>

              <p
                className={`text-gray-700 mb-6 ${
                  is4K ? "text-xl leading-loose" : "text-base sm:text-lg leading-relaxed"
                }`}
              >
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
                className={`inline-flex items-center font-semibold rounded-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 ${
                  is4K ? "px-10 py-6 text-xl" : "px-8 py-4 text-base"
                } text-white`}
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
                <Heart className={`${is4K ? "ml-3 w-6 h-6" : "ml-2 w-5 h-5"}`} />
              </button>
            </div>
          </div>

          {/* Right Column - Cards */}
          <div className={`grid sm:grid-cols-2 ${is4K ? "gap-10" : "gap-6"}`}>
            {cards.map((card, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border-2 border-transparent hover:border-opacity-20 transition-all duration-300 bg-white shadow-lg hover:shadow-xl"
                style={{ borderColor: "var(--primary-color)" }}
              >
                <div
                  className={`flex items-center justify-center mb-4 rounded-lg ${
                    is4K ? "w-16 h-16" : "w-12 h-12"
                  }`}
                  style={{ backgroundColor: "var(--secondary-light-color)" }}
                >
                  <card.icon
                    className={is4K ? "w-8 h-8" : "w-6 h-6"}
                    style={{ color: "var(--secondary-color)" }}
                  />
                </div>
                <h3
                  className={`font-semibold mb-2 ${
                    is4K ? "text-xl" : "text-lg"
                  }`}
                  style={{ color: "var(--primary-color)" }}
                >
                  {card.title}
                </h3>
                <p
                  className={`text-gray-600 ${
                    is4K ? "text-base leading-relaxed" : "text-sm"
                  }`}
                >
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
