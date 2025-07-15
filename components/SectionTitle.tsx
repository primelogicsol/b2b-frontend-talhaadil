"use client";

import parse from "html-react-parser";

interface SectionTitleProps {
  Title: string;
  SubTitle: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ Title, SubTitle }) => {
  return (
    <div className="text-center">
      {/* SubTitle */}
      <div className="relative inline-block mb-6">
        <span className="text-sm font-semibold text-[#ff3c00] bg-[#fff4f0] border border-gray-200 px-5 py-1.5 rounded-full relative inline-block">
          {parse(SubTitle)}
        </span>
        {/* Decorative Line (pseudo-like) */}
        <span className="absolute top-1/2 left-[-40px] w-[30px] h-[3px] bg-gradient-to-r from-white to-[#ff3b00] transform -translate-y-1/2 rounded-full"></span>
        <span className="absolute top-1/2 right-[-40px] w-[30px] h-[3px] bg-gradient-to-r from-[#ff3b00] to-white transform -translate-y-1/2 rounded-full"></span>
      </div>

      {/* Main Title */}
      <h1 className="text-[32px] sm:text-[38px] lg:text-[42px] leading-tight font-bold text-[#050a1e]">
        {parse(Title)}
      </h1>
    </div>
  );
};

export default SectionTitle;
