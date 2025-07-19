import React from "react";
import AnimationCard from "@/components/Cards/AnimationCard";
import { SliderCard } from "@/components/Cards/SliderCard";
import Accordion from "@/components/Material/Accordion";
import Counter from "@/components/Material/Counter";
import ProfitBox from "@/components/Material/ProfitBox";
import DiagonalSection from "@/components/Section/DiagonalSection";
import RecSquareSection from "@/components/Section/RecSquareSection";
import ScrollSection from "@/components/Section/ScrollSection";
import SectionFaq from "@/components/Section/SectionFaq";
import VideoGallery from "@/components/Section/VideoGallery";
import BannerWithFeatures from "@/components/Material/BannerwithFeatures";
import TeamCard from "@/components/Cards/TeamCard";

export default function Home() {
  return (
    <div className="w-full overflow-hidden text-gray-800">
      {/* Section: Features */}
      <section>
        <BannerWithFeatures/>
      </section>

      {/* Section: Diagonal Layout */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <DiagonalSection />
        </div>
      </section>

      {/* Section: Animated Counter */}
      <section className="py-2 bg-gradient-to-b from-blue-50 to-blue-100">
        <div className="container mx-auto px-4">
          <Counter />
        </div>
      </section>

      {/* Section: Video Gallery */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-1">
          <VideoGallery />
        </div>
      </section>

      {/* Section: Animation Cards */}
      <section className="py-20 bg-gray-100 border">
        <div className="container mx-auto px-4 flex flex-col ">
          {/* Section Heading */}
          <h2 className="text-3xl font-bold text-center mb-12">
            Explore Our Features
          </h2>

          {/* Top bar with icon and two mini descriptions */}
          <div className="flex justify-between items-center mb-8">
            {/* Left: Icon Image */}
            <div className="flex items-center gap-2">
              <img
                src="/icon.png" // <-- Replace with your actual icon path
                alt="Feature Icon"
                className="w-8 h-8"
              />
              <span className="font-medium text-gray-700">Feature Icon</span>
            </div>

            {/* Right: Two mini descriptions */}
            <div className="text-right text-sm">
              <p className="text-gray-600">Reliable and Scalable</p>
              <p className="text-gray-500">Engineered for performance</p>
            </div>
          </div>

          {/* Actual AnimationCard */}
          <div className="border border-2 rounded-2xl">

          <AnimationCard />
          </div>
        </div>
      </section>

      {/* Section: Rectangular Boxes */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <RecSquareSection />
        </div>
      </section>

      {/* Section: Slider */}
      <section className="py-16 bg-gradient-to-b from-slate-50 to-slate-100">
        <div className="container mx-auto px-4">
          {/* Heading and Description */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-slate-600 text-base md:text-lg leading-4.5">
              Hear from businesses and individuals who’ve trusted us with their digital transformation. 
              Real feedback, real results. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet corrupti obcaecati ipsa nihil id, ducimus adipisci cupiditate, tenetur sapiente esse maiores voluptatibus, unde explicabo minima. Eos nostrum facere facilis recusandae!
            </p>
          </div>

          {/* Slider */}
          <SliderCard />
        </div>
      </section>


      {/* Section: FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionFaq />
        </div>
      </section>

      {/* Section: Scroll Animation */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <ScrollSection />
        </div>
      </section>

      {/* Section: Profit Boxes */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <ProfitBox />
        </div>
      </section>

     {/* Section: Accordion */}
      <section className="bg-gradient-to-b from-white to-gray-100 flex flex-col items-center justify-center min-h-[20vh] px-4 py-16">
        {/* Headings
        <div className="text-center max-w-4xl mb-6">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 leading-snug">
            Discover the Full Range of Security Features We Offer
          </h2>
          <h3 className="text-lg md:text-xl text-slate-600 leading-relaxed mt-2">
            From live monitoring to advanced encryption, explore all the tools designed to protect your digital presence.
          </h3>
        </div>

        {/* Accordion Component */}a
        <div className="w-full max-w-7xl">
          <Accordion />
        </div> 
      </section>



      {/* Section: Extra Counters */}
      {/* <section className="py-16 bg-white">
        <Counter />
        <Counter />
      </section> */}
    </div>
  );
}
