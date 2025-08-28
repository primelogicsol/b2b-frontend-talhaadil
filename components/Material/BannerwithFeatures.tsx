import React from "react";
import Features from "@/components/Cards/Features";
import VerticalHeroSlider from "../Essentials/VerticalBanner";
import { useGlobalContext } from "@/context/ScreenProvider";
function BannerWithFeatures() {
  const { is4K } = useGlobalContext()
  return (
    <div className="relative mb-50">
      <VerticalHeroSlider isBanner/>
      <div
        className="mt-6 flex justify-center mx-4 lg:mx-0
             lg:mt-0 lg:absolute lg:inset-x-0 lg:-bottom-40"
      >
        <Features />
      </div>

    </div>
  );
}

export default BannerWithFeatures;