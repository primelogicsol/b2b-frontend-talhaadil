import React from "react";
import SinglePicSection from "../Section/SinglePicSection";
import ScrollVideoSection from "../Section/ScrollVideoSection";
import StatisticsSection from "../Material/StatsBar";

function Homepage() {
  return (
    <div>
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
      
    </div>
  );
}

export default Homepage;
