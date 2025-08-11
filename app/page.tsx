"use client";
import Counter from "@/components/Material/Counter";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useEffect, useState, useCallback } from "react";
import { AnimationCardGrid } from "@/components/Cards/AnimationCard";
import Image from "next/image";
import Link from "next/link";
import { UserPlus, CalendarCheck } from "lucide-react"
import {
  DollarSign,
  Globe,
  Users,
  TrendingUp,
  Award,
  Target,
  Heart,
  Clock,
  Zap,
  Star,
  ChevronUp,
  ChevronDown,
  ArrowRight,
  Calendar,
  CheckCircle,
  Sparkles,
  Building,
  Lightbulb,
  Shield,
  Handshake,
  ShieldCheck,
  Scale,
  BookOpen,
  MapPin,
} from "lucide-react";
import BannerWithFeatures from "@/components/Material/BannerwithFeatures";
import { useRef, createRef } from "react";
import { useGlobalContext } from "@/context/ScreenProvider";
import HowItWorksSection from "@/components/Section/HowItWorksSection";
import ScrollSection from "@/components/Section/ScrollSection";
import MainPageCards from "@/components/Cards/MainPageCards";
import RecSquareSection from "@/components/Section/RecSquareSection";
import Homepage from "@/components/Essentials/HomePage";
import KashmirCraftsCarousel from "@/components/Material/ProfitBox";
import FlagSection from "@/components/Material/FlagSection";
import Location from "@/components/Essentials/Location";
// Screen detection hook

const howItWorksData = {
  title: "How It Works",
  description:
    "Swift Partnership Activation: Experience a seamless journey from registration to marketplace leadership through DKC’s transformative onboarding process, empowering buyers with tools, training, and support to thrive in a global marketplace.",
  imageUrl: "/images/onboarding.jpg", // Ensure this image exists in /public/images
  imageAlt: "Onboarding Illustration",
  mini_desc: " Our Onboarding Process",
  phases: [
    "Registration Phase      ",
    "Document Submission Phase      ",
    "Eligibility Review Phase      ",
    "Agreement and Certification Phase      ",
    "Profile Setup Phase      ",
    "Partnership-Specific Onboarding Phase      ",
    "Training and Resource Checkup Phase      ",
    "Portal Access Activation Phase      ",
    "Partnership Launch and Support Phase      ",
    "KPI and Marketplace Engagement Phase      ",
  ],
};

const buyerslides = [
  { id: 1, title: "Individual Purchasers", number: 1523 },
  { id: 2, title: "Retail Customers", number: 351 },
  { id: 3, title: "Wholesale Purchasers", number: 311 },
  { id: 4, title: "Online Purchasers", number: 18 },
  { id: 5, title: "Interior Designers", number: 68 },
  { id: 6, title: "Corporate Purchasers", number: 8 },
  { id: 7, title: "Art Preservationists", number: 205 },
  { id: 8, title: "Global Merchandisers", number: 52 },
  { id: 10, title: "Hospitality Chains", number: 21 },
  { id: 11, title: "Fashion Designers", number: 28 },
];
const vendorslides = [
  { id: 1, title: "Individual Artisans", number: 1032 },
  { id: 2, title: "Artisan Communities", number: 15 },
  { id: 3, title: "Small Businesses", number: 23 },
  { id: 4, title: "Women Entrepreneurs", number: 6 },
  { id: 5, title: "Export Specialists", number: 17 },
  { id: 6, title: "Online Merchandisers", number: 22 },
  { id: 7, title: "Design Professionals", number: 3 },
  { id: 8, title: "Luxury Merchandisers", number: 16 },
  { id: 9, title: "Wholesale Suppliers", number: 13 },
  { id: 10, title: "Craft Professionals", number: 7 },
];

const partnershipCategories = [
  {
    label: "Core Trade",
    href: "/core-trade",
    summary:
      "Trade-centric partnerships including dropshipping and distribution.",
    subItems: [
      { label: "Drop Shipping & E-Commerce", href: "/core-trade/dropshipping-ecommerce" },
      { label: "Import & Export", href: "/core-trade/import-export" },
      { label: "Wholesale & Distribution", href: "/core-trade/wholesale-distribution" },
      { label: "Consignment", href: "/core-trade/consignment" },
    ],
  },
  {
    label: "Brand Expansion",
    href: "/brand-growth",
    summary:
      "Expand reach via exhibitions, white-label, and physical space-sharing.",
    subItems: [
      { label: "Auction & Bidding", href: "/brand-growth/auction-bidding" },
      { label: "White-Label", href: "/brand-growth/white-label" },
      { label: "Exhibition", href: "/brand-growth/exhibition" },
      { label: "Brick & Mortar Space-Sharing", href: "/brand-growth/brick-mortar" },
    ],
  },
  {
    label: "Collaborative",
    href: "/collaborative",
    summary:
      "Collaboration through design, media, mentorship, and craft innovation.",
    subItems: [
      { label: "Packaging", href: "/collaborative/packaging" },
      { label: "Design Collaboration", href: "/collaborative/design-collaboration" },
      { label: "Storytelling & Media", href: "/collaborative/storytelling-media" },
      { label: "Warehouse", href: "/collaborative/warehouse" },
    ],
  },
  {
    label: "Institutional",
    href: "/institutional",
    summary:
      "Institutional alliances with NGOs, museums, and strategic investors.",
    subItems: [
      { label: "Museum / Institutional", href: "/institutional/museum-institutional" },
      { label: "Technology Partnership", href: "/institutional/technology-partnership" },
      { label: "NGO & Government", href: "/institutional/ngo-government" },
      { label: "Logistics", href: "/institutional/logistics" },
    ],
  },
];


const whatSetsUsApartCards = [
  {
    icon: <Scale className="w-8 h-8" />,
    title: "Our Values",
    description:
      "We are committed to authenticity, fair practices, and cultural preservation, ensuring every step aligns with our core principles.",
    buttonText: "READ MORE",
    link: "/our-values",
  },
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: "Our Story",
    description:
      "From the valleys of Kashmir to the global stage, our journey is driven by passion, craftsmanship, and a mission to empower artisans.",
    buttonText: "READ MORE",
    link: "/our-story",
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Business Niche",
    description:
      "We specialize in connecting authentic Kashmiri handmade products to worldwide buyers, blending tradition with modern reach.",
    buttonText: "READ MORE",
    link: "/business-niche",
  },
  {
    icon: <MapPin className="w-8 h-8" />,
    title: "Our Team",
    description:
      "A dedicated group of skilled professionals working together to deliver excellence and innovation every day.",
    buttonText: "READ MORE",
    link: "/our-team",

  },
];

export default function LandingPage() {
  const [activeTab, setActiveTab] = useState("buyer");
  const { is4K } = useGlobalContext();
  const { scrollYProgress } = useScroll();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const refs = useRef(partnershipCategories.map(() => createRef()));
  // Scroll animations
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  // Profit metrics data
  const products = [
    "Pashmina",
    "Kani",
    "Cashmere",
    "Silk",
    "Bags & Purses",
    "Jackets",
    "Kaftans",
    "Kurtas",
    "Pherans",
    "Jewelry",
  ];

  const leftMetrics = [
    {
      icon: <DollarSign size={20} />,
      title: "Annual Revenue",
      value: "$160M+",
    },
    { icon: <Globe size={20} />, title: "Global Export", value: "78%" },
    { icon: <Users size={20} />, title: "Artisans", value: "88000+" },
    {
      icon: <TrendingUp size={20} />,
      title: "Market Growth",
      value: "17% YoY",
    },
    { icon: <Award size={20} />, title: "Quality Rating", value: "4.8/5" },
    { icon: <Target size={20} />, title: "Sustainability", value: "96%" },
  ];

  const rightMetrics = [
    { icon: <Target size={20} />, title: "Market Share", value: "30%" },
    { icon: <Award size={20} />, title: "Product Range", value: "80+" },
    { icon: <Heart size={20} />, title: "Customer Satisfaction", value: "97%" },
    {
      icon: <Clock size={20} />,
      title: "Avg Production Time",
      value: "60 Days",
    },
    { icon: <Zap size={20} />, title: "Energy Efficiency", value: "93%" },
    { icon: <Star size={20} />, title: "Innovation Index", value: "4.6/5" },
  ];

  const scrollFeatures = [
    {
      title: "Direct Market Access",
      description:
        "Eliminate the middlemen. Showcase your creations directly to buyers worldwide, ensuring you get the full value of your work.",
    },
    {
      title: "Seamless Branding & Outreach",
      description:
        "From storytelling to social media, gain professional branding and marketing support that amplifies your voice and vision.",
    },
    {
      title: "Global Connections",
      description:
        "Tap into a vast network of international buyers, collectors, and enthusiasts who value authentic Kashmiri craftsmanship.",
    },
    {
      title: "Thriving Artisan Network",
      description:
        "Collaborate, share knowledge, and grow alongside a supportive community of artisans and craft entrepreneurs.",
    },
    {
      title: "Ethical & Sustainable Growth",
      description:
        "Embrace fair trade principles and eco-friendly practices that honor both the artisan and the environment.",
    },
    {
      title: "Heritage in Every Thread",
      description:
        "Preserve and celebrate the timeless artistry of Kashmiri crafts, passing its beauty and traditions to future generations.",
    },
  ];

  // Animated components
  const MetricCard = ({ icon, title, value, position, index }: any) => (
    <motion.div
      className={`flex items-center gap-4 ${
        position === "right" ? "flex-row-reverse text-right" : ""
      }`}
      initial={{ opacity: 0, x: position === "left" ? -50 : 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
    >
      <motion.div
        className="flex-shrink-0 w-12 h-12 bg-[var(--primary-color)] rounded-full flex items-center justify-center cursor-pointer"
        whileHover={{ backgroundColor: "#ffffff", rotate: 360 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div className="text-gray-400" whileHover={{ scale: 1.2 }}>
          {icon}
        </motion.div>
      </motion.div>
      <motion.div whileHover={{ x: position === "left" ? 5 : -5 }}>
        <motion.h3
          className="text-white font-semibold text-lg"
          whileHover={{ color: "#808080" }}
        >
          {title}
        </motion.h3>
        <motion.p
          className="text-gray-300 text-sm"
          whileHover={{ color: "#ffffff" }}
        >
          {value}
        </motion.p>
      </motion.div>
    </motion.div>
  );

  const createDottedEarth = () => {
    const dots = [];
    const radius = is4K ? 400 : 300;
    const centerX = is4K ? 500 : 400;
    const centerY = is4K ? 500 : 400;

    for (let ring = 0; ring < 4; ring++) {
      const currentRadius = radius - ring * (is4K ? 80 : 60);
      const dotsInRing = Math.max(24 - ring * 4, 8);

      for (let i = 0; i < dotsInRing; i++) {
        const angle = (i / dotsInRing) * 2 * Math.PI;
        const x = centerX + Math.cos(angle) * currentRadius;
        const y = centerY + Math.sin(angle) * currentRadius;

        dots.push(
          <motion.circle
            key={`${ring}-${i}`}
            cx={x}
            cy={y}
            r={2 + ring * 0.5}
            fill="rgba(59, 130, 246, 0.3)"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.2, 1] }}
            transition={{
              duration: 3,
              delay: ring * 0.2 + i * 0.1,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        );
      }
    }
    return dots;
  };

  const handleScroll = useCallback(() => {
    if (scrollContainerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } =
        scrollContainerRef.current;
      const scrollableHeight = scrollHeight - clientHeight;
      if (scrollableHeight > 0) {
        setScrollProgress(scrollTop / scrollableHeight);
      }
    }
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, [handleScroll]);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section */}
      <BannerWithFeatures />
      <Homepage />

      {/* About Us Sections */}
      <section
        className="px-2 pb-6
             
              md:px-6 lg:px-8 bg-white text-center"
      >
        <AnimationCardGrid data={whatSetsUsApartCards} />
      </section>
      <ScrollSection features={scrollFeatures} />
      {/* Partnerships Section */}

 {/* Partnerships Section */}
<section
  className={`bg-gradient-to-br from-[var(--primary-dark-slate)] via-[var(--primary-color)] to-[var(--primary-color)] text-left ${
    is4K ? "py-28 px-20" : "py-16 px-4"
  }`}
>
  <div className={`${is4K ? "max-w-[1600px]" : "max-w-7xl"} mx-auto`}>
    {/* Header */}
    <motion.div
      className="text-center mb-16 flex flex-col items-center gap-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <img
        src="/images/main-page-image.png"
        alt="De Koshur Crafts Logo"
        className={`${is4K ? "w-[300px]" : "w-40"} h-auto`}
      />
      <h2
        className={`${
          is4K ? "text-6xl" : "text-3xl md:text-4xl"
        } font-bold text-white`}
      >
        Tailored for Your Success
      </h2>
      <h3
        className={`${
          is4K ? "text-3xl max-w-5xl" : "text-xl max-w-3xl"
        } text-white font-semibold`}
      >
        Buyer Progressive Partnership Framework and Pathway
      </h3>
    </motion.div>

    {/* Grid */}
    <div className={`grid md:grid-cols-2 ${is4K ? "gap-14" : "gap-8"}`}>
      {partnershipCategories.map((category, index) => {
        const ref = useRef(null);
        const isInView = useInView(ref, { once: true, margin: "-100px" });

        return (
          <motion.div
            key={index}
            ref={ref}
            className={`bg-gray-800 ${
              is4K ? "p-14" : "p-8"
            } rounded-lg border border-gray-700 hover:border-[var(--secondary-color)] transition-all duration-300`}
            initial={{ opacity: 0, y: 50 }}
            animate={
              isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
            }
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            {/* Category Title */}
            <h3
              className={`${
                is4K ? "text-4xl" : "text-2xl"
              } font-bold text-white mb-4`}
            >
              {category.label}
            </h3>

            {/* Summary */}
            <p
              className={`${
                is4K ? "text-xl" : "text-lg"
              } text-gray-300 mb-6`}
            >
              {category.summary}
            </p>

            {/* Subitems */}
            <ul className="space-y-3 mb-8">
              {category.subItems.map((item, itemIndex) => (
                <motion.li
                  key={itemIndex}
                  className="flex items-center gap-3 text-gray-400"
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    isInView
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: -20 }
                  }
                  transition={{
                    duration: 0.4,
                    delay: index * 0.1 + itemIndex * 0.05,
                  }}
                >
                  <CheckCircle
                    size={is4K ? 28 : 20}
                    className="text-[var(--secondary-color)] flex-shrink-0"
                  />
                  <Link
                    href={item.href}
                    className={`${
                      is4K ? "text-lg" : "text-base"
                    } hover:text-white transition-colors duration-200`}
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>

            {/* Read More Button */}
            <Link
              href={category.href}
              className={`inline-flex items-center gap-2 ${
                is4K ? "px-8 py-4 text-xl" : "px-6 py-3 text-lg"
              } bg-[var(--secondary-color)] text-white rounded-lg font-semibold hover:bg-[var(--secondary-hover-color)] transition-colors duration-300`}
            >
              Read More
              <ArrowRight size={is4K ? 28 : 20} />
            </Link>
          </motion.div>
        );
      })}
    </div>
  </div>
</section>


      {/* Process Section */}
      <RecSquareSection />

      {/* <KashmirCraftsCarousel/> */}
      <MainPageCards />
      <div className="bg-gradient-to-b from-blue-50 to-blue-100 pt-4">
        <div className="text-center mt-16 mb-6">
          <h2
            className={`text-4xl lg:text-5xl font-extrabold text-[var(--primary-color)] mb-4 ${
              is4K ? "2xl:text-6xl 2xl:mb-6" : ""
            }`}
          >
            Our Reach
          </h2>
        </div>

        <div className="flex justify-center space-x-6 border-[var(--primary-color)]">
          <button
            onClick={() => setActiveTab("buyer")}
            className={`py-3 px-6 font-extrabold text-2xl focus:outline-none ${
              activeTab === "buyer"
                ? "border-b-4 border-[var(--primary-color)] text-[var(--primary-color)]"
                : "text-[var(--secondary-color)] hover:text-[var(--primary-color)]"
            }`}
          >
            Buyer
          </button>
          <button
            onClick={() => setActiveTab("vendor")}
            className={`py-3 px-6 font-extrabold text-2xl focus:outline-none ${
              activeTab === "vendor"
                ? "border-b-4 border-[var(--primary-color)] text-[var(--primary-color)]"
                : "text-[var(--secondary-color)] hover:text-[var(--primary-color)]"
            }`}
          >
            Vendor
          </button>
        </div>

        <section className={`py-6 ${is4K ? "2xl:py-10" : ""}`}>
          <div className="container mx-auto px-4 text-center">
            {activeTab === "buyer" && (
              <>
                <h3
                  className={`text-3xl font-extrabold text-[var(--secondary-color)] mb-3 ${
                    is4K ? "2xl:text-4xl 2xl:mb-4" : ""
                  }`}
                >
                  Buyer
                </h3>
                <Counter slides={buyerslides} />
              </>
            )}

            {activeTab === "vendor" && (
              <>
                <h3
                  className={`text-3xl font-extrabold text-[var(--secondary-color)] mb-3 ${
                    is4K ? "2xl:text-4xl 2xl:mb-4" : ""
                  }`}
                >
                  Vendor
                </h3>
                <Counter slides={vendorslides} />
              </>
            )}
          </div>
        </section>
      </div>
      <KashmirCraftsCarousel />

      <FlagSection />
      <Location />

            {/* New Banner Section */}
            <section
      className="w-full py-16 md:py-24 lg:py-18 text-white"
      style={{
        background: "var(--primary-hover-color)",
      }}
    >
      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center text-center gap-8">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
          Unlock Your Potential: Join Our Community!
        </h2>
        <p className="max-w-3xl text-lg md:text-xl lg:text-2xl opacity-90">
          Discover a world of opportunities. Whether you're looking to connect with like-minded individuals or seeking
          expert guidance, we're here to help you thrive.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
          {/* Registration Card/Block */}
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg flex flex-col items-center text-center border border-white/20 transition-all duration-300 hover:bg-white/20">
            <UserPlus className="h-12 w-12 text-white mb-4" />
            <h3 className="text-2xl font-bold mb-2">Become a Member</h3>
            <p className="text-base opacity-80 mb-6">
              Access exclusive content, connect with experts, and grow your skills within our vibrant community.
            </p>
            <Link href="/registration" className="w-full">
              <button
                className="w-full bg-white rounded-lg font-semibold transition-colors duration-300 px-8 py-4 text-lg shadow-md hover:shadow-xl"
                style={{
                  color: "var(--primary-color)",
                  backgroundColor: "white",
                 // For focus ring if needed
                }}
              >
                Register Now
              </button>
            </Link>
          </div>

          {/* Book Appointment Card/Block */}
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg flex flex-col items-center text-center border border-white/20 transition-all duration-300 hover:bg-white/20">
            <CalendarCheck className="h-12 w-12 text-white mb-4" />
            <h3 className="text-2xl font-bold mb-2">Book an Appointment</h3>
            <p className="text-base opacity-80 mb-6">
              Schedule a personalized session with our specialists to get tailored advice and support for your needs.
            </p>
            <Link href="/appointment" className="w-full">
              <button
                className="w-full bg-white rounded-lg font-semibold transition-colors duration-300 px-8 py-4 text-lg shadow-md hover:shadow-xl"
                style={{
                  color: "var(--primary-color)",
                  backgroundColor: "white",
                
                }}
              >
                Schedule a Call
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>

    </div>
  );
}
