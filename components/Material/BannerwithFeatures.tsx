import React from "react";
import Features from "@/components/Cards/Features";
import VerticalHeroSlider from "../Essentials/VerticalBanner";

function BannerWithFeatures() {
  return (
    <div className="relative mb-40">
      <VerticalHeroSlider />
      <div className="
        mt-6 
        flex justify-center 
        lg:mt-0 lg:absolute lg:-bottom-40 lg:left-0 lg:w-full
      ">
        <Features />
      </div>
    </div>
  );
}

export default BannerWithFeatures;