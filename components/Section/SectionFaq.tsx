'use client'
import SectionTitle from "./SectionTitle";
import data from '../Data/faq.json';
import { useEffect, useRef, useState } from "react";
import parse from 'html-react-parser';
import Image from "next/image";

const Faq = () => {
  const accordionContentRef = useRef<HTMLDivElement>(null);
  const [openItemIndex, setOpenItemIndex] = useState<number>(-1);
  const [firstItemOpen, setFirstItemOpen] = useState<boolean>(true);

  const handleItemClick = (index: number) => {
    setOpenItemIndex(prev => (index === prev ? -1 : index));
  };

  useEffect(() => {
    if (firstItemOpen) {
      setOpenItemIndex(0);
      setFirstItemOpen(false);
    }
  }, [firstItemOpen]);

  const FaqContent = {
    img1: "/assets/images/faq1.png",
    Title: "A Comprehensive <span>Guide.</span>",
    Content:
      "Alternative innovation network environmental whiteboard pursue for premier methods empowerment go forward opportunities",
  };

  return (
    <section className="relative bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <SectionTitle
            SubTitle="SOLUTEK COMPANY"
            Title="Keeping Your Business<br> Safe and <span>Available.</span>"
          />
          <div>
            <Image
              src={FaqContent.img1}
              alt="faq1"
              width={600}
              height={500}
              className="rounded-lg shadow-lg w-full h-auto object-contain"
            />
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">
              {parse(FaqContent.Title)}
            </h3>
            <p className="text-gray-600 text-base">{FaqContent.Content}</p>
          </div>

          <ul className="space-y-4">
            {data.map((item, index) => (
              <li
                key={index}
                className={`border rounded-lg overflow-hidden transition-all duration-300 shadow-sm ${
                  index === openItemIndex ? "bg-orange-50 border-orange-500" : "bg-white border-gray-200"
                }`}
              >
                <button
                  onClick={() => handleItemClick(index)}
                  className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none hover:bg-orange-100 transition group"
                >
                  <span className="text-lg font-medium text-gray-800 group-hover:text-orange-600">
                    {item.title}
                  </span>
                  <span
                    className={`transform transition-transform duration-300 ${
                      index === openItemIndex ? "rotate-180 text-orange-500" : "rotate-0 text-gray-400"
                    }`}
                  >
                    ▼
                  </span>
                </button>
                <div
                  ref={accordionContentRef}
                  className={`px-6 pt-0 pb-4 text-gray-600 text-sm transition-all duration-300 ${
                    index === openItemIndex ? "block" : "hidden"
                  }`}
                >
                  {item.desc}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Decorative Shapes */}
      <Image
        src="/assets/images/faq2.png"
        alt="faq2"
        width={96}
        height={96}
        className="absolute top-10 left-0 w-24 animate-pulse hidden md:block"
      />
      <Image
        src="/assets/images/faq3.png"
        alt="faq3"
        width={112}
        height={112}
        className="absolute bottom-0 right-0 w-28 animate-bounce hidden md:block"
      />
    </section>
  );
};

export default Faq;
