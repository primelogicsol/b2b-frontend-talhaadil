"use client"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import parse from "html-react-parser"
import SectionTitle from "./SectionTitle"
import { useGlobalContext } from "../Context/GlobalProvider"

interface FaqItem {
  title: string
  desc: string
}

interface FaqProps {
  subTitle?: string
  sectionTitle?: string
  imgMain?: string
  faqTitle?: string
  faqContent?: string
  faqItems?: FaqItem[]
  decoImg1?: string
  decoImg2?: string
}

const deffaqItems: FaqItem[] = [
  {
    title: "What is the purpose of this platform?",
    desc: "This platform aims to connect Kashmiri artisans and startups with global markets.",
  },
  {
    title: "What is the purpose of this platform?",
    desc: "This platform aims to connect Kashmiri artisans and startups with global markets.",
  },

  {
    title: "How can I get started?",
    desc: "To get started, you can sign up on our website and explore the various partnership models available.",
  },
]

export default function SectionFaq({
  subTitle = "SOLUTEK COMPANY",
  sectionTitle = "Keeping Your Business Safe and Available",
  imgMain = "/assets/images/faq1.png",
  faqTitle = "A Comprehensive <span>Guide.</span>",
  faqContent = "Alternative innovation network environmental whiteboard pursue for premier methods empowerment go forward opportunities",
  faqItems = deffaqItems,
  decoImg1 = "/assets/images/faq2.png",
  decoImg2 = "/assets/images/faq3.png",
}: FaqProps) {
  const accordionContentRef = useRef<HTMLDivElement>(null)
  const [openItemIndex, setOpenItemIndex] = useState<number>(-1)
  const [firstItemOpen, setFirstItemOpen] = useState<boolean>(true)
  const { is4K } = useGlobalContext()

  const handleItemClick = (index: number) => {
    setOpenItemIndex((prev) => (index === prev ? -1 : index))
  }

  useEffect(() => {
    if (firstItemOpen) {
      setOpenItemIndex(0)
      setFirstItemOpen(false)
    }
  }, [firstItemOpen])

  return (
    <section
      className="relative bg-white py-20 px-4"
      style={{
        paddingLeft: is4K ? "8rem" : "1rem",
        paddingRight: is4K ? "8rem" : "1rem",
        fontSize: is4K ? "1.125rem" : "1rem", // Apply font size increase
      }}
    >
      <div
        className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center"
        style={{ maxWidth: is4K ? "2000px" : "1280px" }}
      >
        {/* Left Section */}
        <div className="space-y-8">
          <SectionTitle SubTitle={subTitle} Title={sectionTitle} />
          <div>
            <Image
              src={imgMain || "/placeholder.svg"}
              alt="faq-main"
              width={600}
              height={700}
              className="rounded-lg shadow-lg w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="space-y-6">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">{parse(faqTitle)}</h3>
            <p className="text-gray-600 text-base">{faqContent}</p>
          </div>

          <ul className="space-y-4">
            {faqItems.map((item, index) => (
              <li
                key={index}
                className={`border rounded-lg overflow-hidden transition-all duration-300 shadow-sm ${
                  index === openItemIndex ? "bg-orange-50 border-[var(--primary-color)]" : "bg-white border-gray-200"
                }`}
              >
                <button
                  onClick={() => handleItemClick(index)}
                  className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none hover:bg-orange-300 transition group"
                >
                  <span className="text-md font-medium text-gray-800 group-hover:text-[var(--primary-hover-color)]">
                    {item.title}
                  </span>
                  <span
                    className={`transform transition-transform duration-300 ${
                      index === openItemIndex ? "rotate-180 text-[var(--primary-color)]" : "rotate-0 text-gray-400"
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

      {/* Decorative Images */}
      <Image
        src={decoImg1 || "/placeholder.svg"}
        alt="deco1"
        width={96}
        height={96}
        className="absolute top-10 left-0 w-24 animate-pulse hidden md:block"
      />
      <Image
        src={decoImg2 || "/placeholder.svg"}
        alt="deco2"
        width={112}
        height={112}
        className="absolute bottom-0 right-0 w-28 animate-bounce hidden md:block"
      />
    </section>
  )
}
