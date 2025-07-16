"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import data from "@/Data/faq.json";

const ServiceDetail = () => {
  const Services = [
    "Database Security",
    "IT Solution",
    "Technology Consult",
    "App Development",
    "UI/UX Design",
    "Cyber Security",
  ];

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

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-8 space-y-10">
          <div>
            <Image
              src="/assets/images/inner/service-details.png"
              alt="thumb"
              width={1000}
              height={600}
              className="rounded-lg w-full h-auto"
            />
          </div>
          <div className="space-y-4">
            <h4 className="text-3xl font-bold text-gray-900">
              Best Solutions for App Development
            </h4>
            <p className="text-gray-600">
              Alternative innovation to ethical network environmental whiteboard pursue...
            </p>
            <p className="text-gray-600">
              Continually fashion orthogonal leadership skills whereas wireless metrics...
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-lg p-6 shadow hover:shadow-lg transition-shadow duration-300">
              <h4 className="text-xl font-semibold mb-3">Why Choose Us</h4>
              <p className="text-gray-600 mb-3">
                Alternative innovation to ethical network environmental whiteboard pursue...
              </p>
              <ul className="space-y-2">
                {[
                  "Success Stories",
                  "Success service",
                  "Success store",
                ].map((text, i) => (
                  <li
                    key={i}
                    className="text-sm text-gray-700 pl-4 relative before:content-['→'] before:absolute before:left-0 before:text-orange-500 hover:text-orange-600 transition"
                  >
                    {text}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-orange-50 rounded-lg p-6 shadow hover:shadow-lg transition-shadow duration-300">
              <Image
                src="/assets/images/inner/det-icon.png"
                alt="icon"
                width={40}
                height={40}
                className="mb-4"
              />
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Empowering Your Success
              </h3>
              <p className="text-gray-600">
                Alternative innovation to ethical network environmental whiteboard pursue compelling results...
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Frequently Asked Questions
            </h3>
            <p className="text-gray-600 mb-6">
              Alternative innovation to ethical network environmental whiteboard pursue...
            </p>
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
                    className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none relative group"
                  >
                    <span className="text-lg font-medium text-gray-800 relative z-10 group-hover:text-white transition">
                      {item.title}
                    </span>
                    <span
                      className={`transform transition-transform duration-300 relative z-10 ${
                        index === openItemIndex ? "rotate-180 text-orange-500" : "rotate-0 text-gray-400"
                      }`}
                    >
                      ▼
                    </span>
                    <span className="absolute inset-0 bg-orange-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out rounded" />
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

        <div className="lg:col-span-4 space-y-10">
          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="text-xl font-bold mb-4">Main Services</h4>
            <ul className="divide-y divide-gray-200">
              {Services.map((item, i) => (
                <li key={i} className="py-3">
                  <Link
                    href="/service/service-details"
                    className="group block text-gray-800 relative overflow-hidden transition-all"
                  >
                    <span className="relative z-10 flex items-center gap-2 group-hover:text-white">
                      <Image
                        src="/assets/images/inner/category-icon.png"
                        alt=""
                        width={16}
                        height={16}
                      />
                      {item}
                    </span>
                    <span className="absolute inset-0 bg-orange-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out rounded" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="text-xl font-bold mb-4">Downloads</h4>
            <div className="space-y-3">
              <a
                href="#"
                className="relative group flex justify-between items-center px-4 py-3 rounded-lg bg-gray-100 hover:text-white overflow-hidden"
              >
                <span className="z-10 flex items-center gap-2">
                  <i className="bi bi-file-earmark-pdf"></i>
                  Service Report
                </span>
                <i className="z-10 bi bi-download"></i>
                <span className="absolute inset-0 bg-orange-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out rounded" />
              </a>

              <a
                href="#"
                className="relative group flex justify-between items-center px-4 py-3 rounded-lg bg-orange-500 text-white overflow-hidden"
              >
                <span className="z-10 flex items-center gap-2">
                  <i className="bi bi-file-earmark-pdf"></i>
                  Download Lists
                </span>
                <i className="z-10 bi bi-download"></i>
                <span className="absolute inset-0 bg-orange-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out rounded" />
              </a>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg text-center shadow relative overflow-hidden group">
            <Image
              src="/assets/images/inner-images/sidber-cont-icon.png"
              alt="icon"
              width={60}
              height={60}
              className="mx-auto mb-4"
            />
            <p className="text-sm text-gray-500">Call Us Anytime</p>
            <h3 className="text-2xl font-bold text-gray-800 my-2">+123 (4567) 890</h3>
            <span className="text-sm text-gray-500 flex justify-center items-center gap-2">
              <i className="bi bi-envelope-fill"></i> example@gmail.com
            </span>
            <div className="mt-4">
              <Link
                href="/contact"
                className="relative inline-block px-6 py-3 text-white font-semibold bg-orange-500 rounded overflow-hidden group"
              >
                <span className="relative z-10">Contact Us</span>
                <span className="absolute inset-0 bg-orange-600 scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-300 ease-out rounded" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetail;
