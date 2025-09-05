import React from "react";
import SinglePicSection from "../Section/SinglePicSection";
import ScrollVideoSection from "../Section/ScrollVideoSection";
import StatisticsSection from "../Material/StatsBar";

function Homepage() {
  return (
    <div>
      <video
        src="/hero1.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-full mx-auto block"
      ></video>

      <SinglePicSection />
      <StatisticsSection />
      <ScrollVideoSection />
    </div>
  );
}

export default Homepage;
