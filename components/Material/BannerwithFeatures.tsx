import React from "react";
import Features from "@/components/Cards/Features";
import VerticalHeroSlider from "../Essentials/VerticalBanner";
import { useGlobalContext } from "@/context/ScreenProvider";
function BannerWithFeatures() {
  const { is4K } = useGlobalContext()
  return (
    <div className="relative mb-20">
      <VerticalHeroSlider />
      <div
        className={`mt-6 
    flex justify-center 
    lg:mt-0 lg:left-70 lg:absolute lg:-bottom-40 ${is4K ? "pl-300" : ""} `}
      >
        <Features />
      </div>
    </div>
  );
}

export default BannerWithFeatures;