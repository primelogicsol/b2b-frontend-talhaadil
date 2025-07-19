"use client";

import parse from "html-react-parser";

interface SectionTitleProps {
  Title: string;
  SubTitle: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ Title, SubTitle }) => {
  const words = Title.trim().split(/\s+/);

  // Get everything except last two
  const before = words.slice(0, -2).join(" ");
  // Get last two words
  const lastTwo = words.slice(-2).join(" ");

  return (
    <div className="text-center">
      {/* SubTitle */}
      <div className="relative inline-block mb-6">
        <span className="text-sm font-semibold text-[var(--secondary-color)] bg-[#fff4f0] border border-gray-200 px-5 py-1.5 rounded-full relative inline-block">
          {parse(SubTitle)}
        </span>
        <span className="absolute top-1/2 left-[-40px] w-[30px] h-[3px] bg-gradient-to-r from-white to-[var(--secondary-color)] transform -translate-y-1/2 rounded-full"></span>
        <span className="absolute top-1/2 right-[-40px] w-[30px] h-[3px] bg-gradient-to-r from-[var(--secondary-color)] to-white transform -translate-y-1/2 rounded-full"></span>
      </div>

      {/* Main Title */}
      <h1 className="text-[32px] sm:text-[38px] lg:text-[42px] leading-tight font-extrabold text-[#050a1e]">
        {before && <>{before} </>}
        <span className="text-[var(--secondary-color)]">{lastTwo}</span>
      </h1>
    </div>
  );
};

export default SectionTitle;
