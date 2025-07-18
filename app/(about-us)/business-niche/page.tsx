import VerticalHeroSlider from "@/components/Essentials/VerticalBanner";
import Accordion from "@/components/Material/Accordion";
import Counter from "@/components/Material/Counter";
import PremiumTabs from "@/components/Material/PremiumTabs";
import ScrollSection from "@/components/Section/ScrollSection";
import React from "react";

function page() {
  return (
    <div>
      <VerticalHeroSlider />
      <section className="px-4 md:px-8 lg:px-12 py-30">
        <h1
          className="
      text-center font-extrabold mb-6
      text-3xl sm:text-4xl md:text-5xl
      text-[color:var(--primary-color)]
    "
        >
          Global Impact Metrics
        </h1>
        <p
          className="
      text-center mb-10
      text-base sm:text-lg md:text-xl
      text-[color:var(--secondary-color)]
    "
        >
          Discover the journey of our brand and what makes us unique.
        </p>
        <Accordion />
      </section>

      <PremiumTabs />
      <Counter />
      <Counter />
      <ScrollSection />
    </div>
  );
}

export default page;
