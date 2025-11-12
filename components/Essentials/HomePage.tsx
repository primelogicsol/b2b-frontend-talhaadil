import React from "react";
import SinglePicSection from "../Section/SinglePicSection";
import ScrollVideoSection from "../Section/ScrollVideoSection";
import StatisticsSection from "../Material/StatsBar";

function Homepage() {
  return (
    <div className="bg-gray-100 pb-20">
      <video
        src="/videos/hero1.webm"
        autoPlay
        loop
        muted
        playsInline
        className="w-full mx-auto block"
      ></video>

      <SinglePicSection />
      <StatisticsSection />
      <div className="text-center mt-14">
        <h2 className="text-lg md:text-3xl font-bold">Handicraft Progressive Business Model for Every Vision
        </h2>
        <h4 className="text-md md:text-xl">Crafting US Next Generations with 700+ Old Legacy of Kashmir Handicraft Together</h4>
      </div>

    </div>
  );
}

export default Homepage;
