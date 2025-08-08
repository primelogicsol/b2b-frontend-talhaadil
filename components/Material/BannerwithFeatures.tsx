import React from "react";
import Features from "@/components/Cards/Features";
import VerticalHeroSlider from "../Essentials/VerticalBanner";

function BannerWithFeatures() {
  return (
    <div className="relative mb-20">
      <VerticalHeroSlider />
      <div
        className="mt-6 
    flex justify-center 
    lg:mt-0 lg:absolute lg:-bottom-40 lg:left-1/2 lg:transform lg:-translate-x-1/2"
      >
        <Features />
      </div>
    </div>
  );
}

export default BannerWithFeatures;