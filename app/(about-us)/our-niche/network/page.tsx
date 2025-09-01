'use client'
import VerticalHeroSlider from '@/components/Essentials/VerticalBanner'
import React from 'react'
import { useGlobalContext } from '@/context/ScreenProvider';

function page() {
  const { is4K } = useGlobalContext();

  const items = [
    {
      image: "/logos/artstay.png",
      title: "Craftiore",
      description:
        "Innovative platform connecting travelers with authentic Kashmiri stays, traditions, and cultural experiences.",
    },
    {
      image: "/logos/artstay.png",
      title: "ArtStay",
      description:
        "Innovative platform connecting travelers with authentic Kashmiri stays, traditions, and cultural experiences.",
    },
    {
      image: "/logos/dekoshur.png",
      title: "De Koshur Crafts",
      description:
        "Preserving Kashmiri artistry through curated crafts, empowering artisans while celebrating heritage across generations.",
    },
    {
      image: "/logos/sufi.png",
      title: "Sufi Science Center",
      description:
        "Blending spirituality with science, fostering learning, innovation, and harmony through knowledge-driven programs.",
    },
    {
      image: "/logos/prime.png",
      title: "Prime Logic SOLUTIONS",
      description:
        "Technology-driven company delivering smart digital solutions, boosting efficiency, growth, and innovation worldwide.",
    },
    {
      image: "/logos/kashmir.png",
      title: "Kashmir Hamadan Craft Revival Foundation",
      description:
        "Reviving timeless Kashmiri crafts, supporting artisans, and safeguarding heritage for vibrant cultural sustainability.",
    },
  ];

  return (
    <div>
      <VerticalHeroSlider />
      <section
        className={`px-4 md:px-8 lg:px-12 py-20 bg-white ${
          is4K ? "2xl:py-32" : ""
        }`}
      >
        <div
          className={`max-w-7xl mx-auto ${
            is4K ? "2xl:max-w-[2000px]" : ""
          }`}
        >
          <h2
            className={`text-4xl lg:text-5xl font-extrabold text-center mb-4 text-[color:var(--primary-color)] ${
              is4K ? "2xl:text-6xl" : ""
            }`}
          >
            Our Network
          </h2>
          <p
            className={`text-center text-lg text-[color:var(--secondary-color)] mb-16 max-w-3xl mx-auto ${
              is4K ? "2xl:text-xl 2xl:mb-20" : ""
            }`}
          >
            Each piece represents centuries of perfected tradition and cultural heritage
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((item, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-[color:var(--primary-color)] to-[color:var(--primary-hover-color)] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div
                  className={`w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 mx-auto overflow-hidden ${
                    is4K ? "2xl:w-24 2xl:h-24 2xl:mb-8" : ""
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <h3
                  className={`text-2xl font-bold text-white mb-4 text-center h-16 flex items-center justify-center ${
                    is4K ? "2xl:text-3xl 2xl:h-20" : ""
                  }`}
                >
                  {item.title}
                </h3>
                <p
                  className={`text-gray-200 text-left md:text-center lg:text-center leading-relaxed ${
                    is4K ? "2xl:text-lg" : ""
                  }`}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default page
