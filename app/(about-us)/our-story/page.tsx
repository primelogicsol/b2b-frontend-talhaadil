import CardNoPic from "@/components/Cards/CardNoPic";
import Features from "@/components/Cards/Features";
import VerticalHeroSlider from "@/components/Essentials/VerticalBanner";
import { Timeline } from "@/components/Material/TimeLine";
import HorizontalSwipeSection from "@/components/Section/HorizontalSwipeSection";
import ProjectDetail from "@/components/Section/ProjectDetail";
import SectionFaq from "@/components/Section/SectionFaq";
import MissionSection from "@/components/Section/MissionSection";
import React from "react";

function page() {
  const faqData = {
    subTitle: "DEFINING MOMENTS",
    sectionTitle: "Moments That Define Us",
    imgMain: "/assets/images/faq1.png",
    faqTitle: "Your Questions <span>Answered.</span>",
    faqContent:
      "Explore the key milestones and decisions that have shaped who we are today, offering insight into our journey and values.",
    faqItems: [
      {
        title: "What are our defining moments?",
        desc: "Our defining moments include groundbreaking collaborations, impactful community projects, and innovations that changed the way we work.",
      },
      {
        title: "How did these moments shape us?",
        desc: "They taught us resilience, creativity, and a commitment to excellence, influencing every step we take in our mission.",
      },
      {
        title: "What can we learn from them?",
        desc: "Each milestone is a lesson—embracing challenges, valuing teamwork, and staying true to our vision no matter the obstacles.",
      },
    ],
    decoImg1: "/assets/images/faq2.png",
    decoImg2: "/assets/images/faq3.png",
  };

  const cardDataList = [
    {
      title: "Why Choose Us",
      description: "We provide best-in-class solutions for modern businesses.",
      points: [
        {
          id: "1",
          title: "Fast",
          description: "Experience lightning-fast delivery and services.",
        },
        {
          id: "2",
          title: "Reliable",
          description: "Dependable infrastructure that keeps you online.",
        },
        {
          id: "3",
          title: "Secure",
          description: "State-of-the-art security protocols and backups.",
        },
      ],
    },
    {
      title: "Our Mission",
      description: "Empowering customers through innovation and care.",
      points: [
        {
          id: "1",
          title: "Innovation",
          description: "We adopt the latest technologies to serve you better.",
        },
        {
          id: "2",
          title: "Accessibility",
          description: "Our platform is designed for everyone, everywhere.",
        },
        {
          id: "3",
          title: "Care",
          description: "We listen to our customers and act on their feedback.",
        },
      ],
    },
    {
      title: "Commitment",
      description:
        "Dedicated to long-term success and ethical business practices.",
      points: [
        {
          id: "1",
          title: "Sustainability",
          description: "Eco-friendly materials and green practices.",
        },
        {
          id: "2",
          title: "Transparency",
          description: "Open policies and honest communication.",
        },
        {
          id: "3",
          title: "Support",
          description: "Round-the-clock support by real people.",
        },
      ],
    },
    {
      title: "Commitment",
      description:
        "Dedicated to long-term success and ethical business practices.",
      points: [
        {
          id: "1",
          title: "Sustainability",
          description: "Eco-friendly materials and green practices.",
        },
        {
          id: "2",
          title: "Transparency",
          description: "Open policies and honest communication.",
        },
        {
          id: "3",
          title: "Support",
          description: "Round-the-clock support by real people.",
        },
      ],
    },
    {
      title: "Commitment",
      description:
        "Dedicated to long-term success and ethical business practices.",
      points: [
        {
          id: "1",
          title: "Sustainability",
          description: "Eco-friendly materials and green practices.",
        },
        {
          id: "2",
          title: "Transparency",
          description: "Open policies and honest communication.",
        },
        {
          id: "3",
          title: "Support",
          description: "Round-the-clock support by real people.",
        },
      ],
    },
    {
      title: "Commitment",
      description:
        "Dedicated to long-term success and ethical business practices.",
      points: [
        {
          id: "1",
          title: "Sustainability",
          description: "Eco-friendly materials and green practices.",
        },
        {
          id: "2",
          title: "Transparency",
          description: "Open policies and honest communication.",
        },
        {
          id: "3",
          title: "Support",
          description: "Round-the-clock support by real people.",
        },
      ],
    },
  ];

  const myData = [
    {
      img: "/assets/images/feature1.png",
      title: "Drop Shipping",
      desc: "Easily start your online store with no inventory risk.",
      isimage: false,
    },
    {
      img: "/assets/images/feature2.png",
      title: "Consignment",
      desc: "Partner with artisans and pay only when you sell.",
      isimage: false,
    },
    {
      title: "Verified Artisans",
      desc: "We work only with trusted, pre-verified Kashmiri artisans.",
      isimage: false,
    },
    {
      img: "/assets/images/feature4.png",
      title: "Import/Export",
      desc: "Navigate international logistics with ease.",
      isimage: false,
    },
    {
      title: "Low MOQs",
      desc: "Start small and scale up—ideal for new businesses.",
      isimage: false,
    },
    {
      img: "/assets/images/feature5.png",
      title: "Investor Friendly",
      desc: "Attract investors with transparent operations.",
      isimage: false,
    },
    {
      title: "24/7 Support",
      desc: "Our team is always available to help you grow.",
      isimage: false,
    },
    {
      img: "/assets/images/feature6.png",
      title: "Retail Partners",
      desc: "Connect with global retailers for maximum reach.",
      isimage: false,
    },
    {
      img: "/assets/images/feature6.png",
      title: "Retail Partners",
      desc: "Connect with global retailers for maximum reach.",
      isimage: false,
    },
    {
      img: "/assets/images/feature6.png",
      title: "Retail Partners",
      desc: "Connect with global retailers for maximum reach.",
      isimage: false,
    },
    {
      img: "/assets/images/feature6.png",
      title: "Retail Partners",
      desc: "Connect with global retailers for maximum reach.",
      isimage: false,
    },
    {
      img: "/assets/images/feature6.png",
      title: "Retail Partners",
      desc: "Connect with global retailers for maximum reach.",
      isimage: false,
    },
  ];

  return (
    <div>
      <VerticalHeroSlider />
      <ProjectDetail />

      <section className="text-center mt-15">
        <h2 className="text-4xl lg:text-5xl font-extrabold text-[var(--primary-color)] mb-4">
          Our Brand Origin
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-4 text-xl">
          Discover why businesses and customers alike trust us every day.
        </p>
      </section>

      <section className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {cardDataList.map((data, idx) => (
          <CardNoPic key={idx} {...data} />
        ))}
      </section>

      <HorizontalSwipeSection />
      <SectionFaq {...faqData} />
      <section className="py-16">
       

        <div className="text-center mt-15">
           <h2 className="text-4xl lg:text-5xl font-extrabold text-[var(--primary-color)] mb-4">
          Our Journey
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-4 text-xl">
           Discover the milestones that shaped who we are today.
        </p>
          <Timeline />
        </div>
      </section>

      <section>
        <MissionSection />
        <Features data={myData} />
      </section>
    </div>
  );
}

export default page;
