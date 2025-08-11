"use client";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  Leaf,
  Heart,
  Shield,
  Users,
  Recycle,
  Package,
  Globe,
  TrendingUp,
  CheckCircle,
  Award,
  Target,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Star,
  MapPin,
  TreePine,
  Droplets,
  Sun,
} from "lucide-react";
import { useGlobalContext } from "../../context/ScreenProvider";

export default function EthicalSourcingSustainability() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [testimonialSlide, setTestimonialSlide] = useState(0);
  const [processSlide, setProcessSlide] = useState(0);
  const [statsSlide, setStatsSlide] = useState(0);
  const { is4K } = useGlobalContext();

  const heroImages = [
    {
      url: "/placeholder.svg?height=600&width=800",
      title: "Sustainable Weaving",
      description: "Artisans using eco-friendly materials",
    },
    {
      url: "/placeholder.svg?height=600&width=800",
      title: "Natural Dyes",
      description: "Organic coloring processes",
    },
    {
      url: "/placeholder.svg?height=600&width=800",
      title: "Fair Trade Workshops",
      description: "Ethical working conditions",
    },
    {
      url: "/placeholder.svg?height=600&width=800",
      title: "Upcycling Materials",
      description: "Zero waste production",
    },
  ];
const testimonials = [
    {
      name: "Priya Sharma",
      location: "Kashmir, India",
      image: "/placeholder.svg?height=80&width=80",
      quote:
        "Thanks to De Koshur Crafts, I’ve grown my workshop while preserving traditional weaving techniques. Their support means the world.",
      craft: "Pashmina Weaver",
      rating: 5,
    },
    {
      name: "Ahmed Hassan",
      location: "Rajasthan, India",
      image: "/placeholder.svg?height=80&width=80",
      quote:
        "Their eco-materials training helped me improve my craft while protecting nature. I now feel hopeful about my family's future.",
      craft: "Block Print Artist",
      rating: 5,
    },
    {
      name: "Meera Devi",
      location: "Gujarat, India",
      image: "/placeholder.svg?height=80&width=80",
      quote:
        "Working with them lets me focus on my embroidery while knowing I support sustainability and my local artisan community.",
      craft: "Embroidery Specialist",
      rating: 5,
    },
  ];

  const sustainabilityStats = [
    { label: "CO₂ Reduced", value: 2500, unit: "tons", icon: TreePine },
    { label: "Water Saved", value: 12000, unit: "liters", icon: Droplets },
    { label: "Renewable Energy", value: 85, unit: "%", icon: Sun },
    { label: "Waste Diverted", value: 95, unit: "%", icon: Recycle },
  ];

  const processSteps = [
    {
      title: "Source Verification",
      description: "Every material is traced to its sustainable origin",
      icon: MapPin,
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Artisan Training",
      description: "Comprehensive workshops on eco-friendly practices",
      icon: BookOpen,
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Quality Assurance",
      description: "Rigorous testing for sustainability standards",
      icon: Shield,
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Fair Trade Certification",
      description: "Ensuring ethical practices throughout the chain",
      icon: Award,
      image: "/placeholder.svg?height=300&width=400",
    },
  ];

  const ethicalPrinciples = [
    {
      icon: Heart,
      title: "Fair Compensation",
      description:
        "Every artisan receives a fair wage for their work, allowing them to sustain their livelihoods and reinvest in their communities.",
      stat: "40% above market rate",
    },
    {
      icon: Shield,
      title: "Child Free",
      description:
        "We strictly ensure no child labor is ever involved in producing any goods offered on our platform, protecting ethical standards and fairness.",
      stat: "100% verified workshops",
    },
    {
      icon: Users,
      title: "Work Safety",
      description:
        "We closely collaborate with artisans, making sure their workplaces remain safe, healthy, and supportive so they can thrive while creating quality goods. ",
      stat: "ISO certified facilities",
    },
    {
      icon: Globe,
      title: "Origin Tracking",
      description:
        "Using blockchain technology, we carefully track each product's origin and full journey from the artisan's workshop to its final sale.",
      stat: "End-to-end tracking",
    },
  ];

  const sustainabilityPractices = [
    {
      icon: Leaf,
      title: "Eco-friendly Materials",
      description:
        "Natural fibers, organic dyes, and sustainable materials in all products",
      percentage: 92,
      color: "from-[var(--secondary-hover-color)] to-[var(--secondary-color)]",
    },
    {
      icon: Target,
      title: "Zero-Waste Production",
      description:
        "Utilizing every scrap of material to minimize environmental impact",
      percentage: 88,
      color: "from-[var(--secondary-hover-color)] to-[var(--secondary-color)]",
    },
    {
      icon: Recycle,
      title: "Recycling & Upcycling",
      description:
        "Repurposing materials to contribute to the circular economy",
      percentage: 95,
      color: "from-[var(--secondary-hover-color)] to-[var(--secondary-color)]",
    },
    {
      icon: Package,
      title: "Sustainable Packaging",
      description:
        "Recycled materials and innovative eco‑friendly packaging options",
      percentage: 78,
      color: "from-[var(--secondary-hover-color)] to-[var(--secondary-color)]",
    },
  ];

  const nextSlide = (
    current: number,
    total: number,
    setter: (value: number) => void
  ) => {
    setter((current + 1) % total);
  };

  const prevSlide = (
    current: number,
    total: number,
    setter: (value: number) => void
  ) => {
    setter(current === 0 ? total - 1 : current - 1);
  };

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => {
      const sections = document.querySelectorAll(".scroll-section");
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section, index) => {
        const element = section as HTMLElement;
        if (
          element.offsetTop <= scrollPosition &&
          element.offsetTop + element.offsetHeight > scrollPosition
        ) {
          setActiveSection(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-slide for hero images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Auto-slide for testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Add missing ref for testimonial section
  const testimonialSectionRef = useRef<HTMLDivElement>(null);

  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section with Image Slider */}
      <section
        className={`scroll-section relative overflow-hidden transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        } ${is4K ? "py-32 px-24" : "py-20 px-4"}`}
      >
        <div className="absolute inset-0">
          <div className="relative w-full h-full">
            {heroImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentSlide ? "opacity-20" : "opacity-0"
                }`}
              >
                <img
                  src={image.url || "/placeholder.svg"}
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary-hover-color)] to-[var(--primary-color)] opacity-80"></div>
              </div>
            ))}
          </div>
        </div>
        <div
          className={`text-center relative z-10 mx-auto ${
            is4K ? "max-w-[1800px]" : "max-w-6xl"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-[var(--secondary-light-color)] text-[var(--secondary-color)] px-6 py-2 rounded-full text-sm font-medium mb-6 hover:scale-105 transition-transform duration-300">
            <Leaf className="w-4 h-4" />
            Ethical Sourcing & Sustainability
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Crafting a{" "}
            <span className="text-[var(--primary-hover-color)]">
              Better Future
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-500 max-w-4xl mx-auto leading-relaxed mb-8 text-left px-2">
            At De Koshur Crafts, we are committed to ethically sourcing products
            and ensuring that our entire supply chain is sustainable, from raw
            materials to the finished product.
          </p>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 mb-8 max-w-md mx-auto">
            <h3 className="text-xl font-bold text-[var(--primary-hover-color)] mb-2">
              {heroImages[currentSlide].title}
            </h3>
            <p className="text-[var(--primary-light-text-color)]">
              {heroImages[currentSlide].description}
            </p>
          </div>
          <div className="flex justify-center gap-2 mb-8">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-[var(--secondary-hover-color)] scale-125"
                    : "bg-white bg-opacity-50"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

{/* Sustainability Stats Slider */}
<section
  className={`scroll-section text-[var(--primary-hover-color)] ${
    is4K ? "py-24 px-20" : "py-16 px-4"
  }`}
>
  <div className={`mx-auto ${is4K ? "max-w-[1800px]" : "max-w-6xl"}`}>
    <div className="text-center mb-12">
      <h2
        className={`font-bold mb-4 ${
          is4K ? "text-5xl" : "text-3xl md:text-4xl"
        }`}
      >
        Our <span className="text-[var(--secondary-color)]">Impact</span>{" "}
        in Numbers
      </h2>
    </div>
    <div className="grid md:grid-cols-4 gap-8">
      {sustainabilityStats.map((stat, index) => {
        const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

        return (
          <div
            ref={ref}
            key={index}
            className="group bg-gradient-to-br from-[var(--primary-color)] to-[var(--primary-light-text-color)] rounded-2xl p-8 text-center hover:scale-105 transition-all duration-500 hover:shadow-2xl"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="bg-[var(--secondary-hover-color)] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
              <stat.icon className="w-8 h-8 text-white" />
            </div>
            <div className="text-4xl font-bold text-[var(--secondary-hover-color)] mb-2">
              {inView ? (
                <CountUp end={stat.value} duration={2} separator="," />
              ) : (
                0
              )}
            </div>
            <div className="text-sm text-gray-200 mb-1">{stat.unit}</div>
            <div className="text-lg font-semibold text-gray-200">
              {stat.label}
            </div>
          </div>
        );
      })}
    </div>
  </div>
</section>

      {/* Ethical Sourcing Principles */}
      <section
        className={`scroll-section ${is4K ? "py-28 px-20" : "py-20 px-4"}`}
      >
        <div className={`mx-auto ${is4K ? "max-w-[1800px]" : "max-w-6xl"}`}>
          <div className="text-center mb-16">
            <h2
              className={`font-bold text-[#0f172a] mb-4 ${
                is4K ? "text-5xl" : "text-3xl md:text-4xl"
              }`}
            >
              Our Commitment to{" "}
              <span className="text-[var(--secondary-color)]">
                Ethical Sourcing
              </span>
            </h2>
            <p
              className={`text-gray-600 max-w-3xl mx-auto ${
                is4K ? "text-xl" : "text-lg"
              }`}
            >
              Every product is carefully vetted for its origin, materials, and
              crafting process to ensure it meets our ethical standards.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ethicalPrinciples.map((principle, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[var(--primary-color)] to-[var(--primary-hover-color)] opacity-5 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="bg-gradient-to-br from-[var(--primary-hover-color)] to-[var(--primary-color)] w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10">
                  <principle.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0f172a] mb-4 group-hover:text-[#1b4f68] transition-colors duration-300">
                  {principle.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {principle.description}
                </p>
                <div className="bg-[var(--primary-color)] text-white px-3 py-1 rounded-full text-sm font-semibold inline-block">
                  {principle.stat}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        ref={testimonialSectionRef}
        className={`scroll-section bg-gradient-to-r from-[#e4e6eb] to-white ${
          is4K ? "py-28 px-20" : "py-20 px-4"
        }`}
      >
        <div className={`mx-auto ${is4K ? "max-w-[1800px]" : "max-w-6xl"}`}>
          <div className="text-center mb-16">
            <h2
              className={`font-bold text-[#0f172a] mb-4 ${
                is4K ? "text-5xl" : "text-3xl md:text-4xl"
              }`}
            >
              Sustainability:{" "}
              <span className="text-[var(--secondary-color)]">
                Protecting Our Planet
              </span>
            </h2>
            <p
              className={`text-gray-600 max-w-3xl mx-auto ${
                is4K ? "text-xl" : "text-lg"
              }`}
            >
              Building a business model that benefits artisans while supporting
              long-term environmental responsibility.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
             {sustainabilityPractices.map((practice, index) => {
        const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

        return (
          <div
            key={index}
            ref={ref}
            className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105"
          >
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Icon */}
              <div className="flex flex-col items-center sm:items-start">
                <div className="bg-gradient-to-br from-[var(--primary-cyan-color)] to-[var(--primary-hover-color)] w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:rotate-12 transition-transform duration-300">
                  <practice.icon className="w-7 h-7 text-white" />
                </div>
              </div>

              {/* Right Section */}
              <div className="flex-1 w-full flex flex-col gap-2">
                {/* Heading + Percentage */}
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-bold text-[#0f172a] group-hover:text-[var(--primary-hover-color)] transition-colors duration-300">
                    {practice.title}
                  </h3>
                  <span className="text-xl font-bold text-[var(--primary-cyan-color)] sm:self-start">
                    {inView ? (
                      <CountUp end={practice.percentage} duration={2} suffix="%" />
                    ) : (
                      "0%"
                    )}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {practice.description}
                </p>

                {/* Progress Bar */}
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <motion.div
                    className={`bg-gradient-to-r ${practice.color} h-3 rounded-full`}
                    initial={{ width: "0%" }}
                    animate={{
                      width: inView ? `${practice.percentage}%` : "0%",
                    }}
                    transition={{ duration: 3, ease: "easeOut" }}
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })}
          </div>

          {/* Carbon Footprint Card */}
          <div className="bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-hover-color)] rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-transparent bg-opacity-20 w-16 h-16 rounded-2xl flex items-center justify-center">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3
                  className={`font-bold ${
                    is4K ? "text-5xl" : "text-2xl md:text-3xl"
                  }`}
                >
                  Carbon Footprint Reduction
                </h3>
              </div>
              <p
                className={`opacity-90 mb-8 max-w-3xl ${
                  is4K ? "text-xl" : "text-lg"
                }`}
              >
                We implement energy-efficient practices, promote carbon-neutral
                shipping options, and partner with logistics companies that
                prioritize sustainability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Slider */}
      <section className="scroll-section py-20 px-4">
        <div className={`mx-auto ${is4K ? "max-w-[1800px]" : "max-w-6xl"}`}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-4">
              Voices from Our{" "}
              <span className="text-[var(--secondary-color)]">
                Artisan Community
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hear directly from the artisans whose lives have been transformed
              through sustainable practices.
            </p>
          </div>
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${testimonialSlide * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="bg-gradient-to-br rounded-3xl p-8 md:p-12 max-w-4xl mx-auto border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="flex-shrink-0">
                          <img
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            className="w-24 h-24 rounded-full object-cover border-4 border-[var(--secondary-color)]"
                          />
                        </div>
                        <div className="flex-1 text-left">
                          <div className="flex justify-center md:justify-start gap-1 mb-4">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star
                                key={i}
                                className="w-5 h-5 fill-[var(--secondary-color)] text-[var(--secondary-hover-color)]"
                              />
                            ))}
                          </div>
                          <blockquote className="text-lg md:text-xl text-[#0f172a] leading-relaxed mb-6 italic">
                            "{testimonial.quote}"
                          </blockquote>
                          <div>
                            <div className="font-bold text-xl text-[#0f172a]">
                              {testimonial.name}
                            </div>
                            <div className="text-[var(--secondary-color)] font-semibold">
                              {testimonial.craft}
                            </div>
                            <div className="flex items-center md:justify-start gap-2 text-gray-600 mt-2">
                              <MapPin className="w-4 h-4" />
                              {testimonial.location}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Testimonial Controls */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={() =>
                  prevSlide(
                    testimonialSlide,
                    testimonials.length,
                    setTestimonialSlide
                  )
                }
                className="bg-[var(--secondary-color)] hover:bg-[var(--secondary-hover-color)] text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <div className="flex gap-2 items-center">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setTestimonialSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === testimonialSlide
                        ? "bg-[#d85834] scale-125"
                        : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={() =>
                  nextSlide(
                    testimonialSlide,
                    testimonials.length,
                    setTestimonialSlide
                  )
                }
                className="bg-[var(--secondary-color)] hover:bg-[var(--secondary-hover-color)] text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section
        className={`scroll-section ${
          is4K ? "py-28 px-20" : "py-20 px-4"
        } text-gray-900`}
      >
        <div className={`mx-auto ${is4K ? "max-w-[1800px]" : "max-w-6xl"}`}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                className={`font-bold mb-6 text-center md:text-left ${
                  is4K ? "text-5xl" : "text-3xl md:text-4xl"
                }`}
              >
                Our Promise to{" "}
                <span className="text-[var(--primary-color)]">Kashmir</span>
              </h2>
              <p
                className={`opacity-90 mb-8 leading-relaxed ${
                  is4K ? "text-xl" : "text-lg"
                }`}
              >
                Every dollar earned through B2B Connect drives initiatives back
                to the valley:
              </p>
              <div className="space-y-4">
                {[
                  "Digital craft literacy",
                  "Artisan health & tool grants",
                  "International design collaborations",
                  "Scholarships for artisan youth",
                  "Publications via CraftLore and HCRF",
                ].map((point, index) => (
                  <div key={index} className="flex items-center gap-3 group">
                    <CheckCircle className={is4K ? "w-7 h-7" : "w-6 h-6"} />
                    <span
                      className={`opacity-90 group-hover:opacity-100 transition-opacity duration-300 ${
                        is4K ? "text-lg" : ""
                      }`}
                    >
                      {point}
                    </span>
                  </div>
                ))}
              </div>
              <p
                className={`opacity-90 mt-8 leading-relaxed ${
                  is4K ? "text-xl" : "text-lg"
                }`}
              >
                We don't extract value from Kashmir. We return it.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-[var(--primary-light-text-color)] to-[var(--primary-color)] rounded-3xl p-8 transform hover:scale-105 transition-transform duration-500 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -translate-y-16 translate-x-16"></div>
                <Award className={is4K ? "w-20 h-20" : "w-16 h-16"} />
                <h3
                  className={`font-bold text-white mb-4 ${
                    is4K ? "text-3xl" : "text-2xl"
                  }`}
                >
                  Impact That Matters
                </h3>
                <p
                  className={`text-white opacity-90 leading-relaxed ${
                    is4K ? "text-lg" : ""
                  }`}
                >
                  Every initiative we undertake directly uplifts local artisans,
                  safeguards centuries-old cultural heritage, and drives
                  long-term, sustainable development—ensuring a resilient and
                  thriving future for the valley and its communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Goals */}
      <section
        className={`scroll-section ${is4K ? "py-28 px-20" : "py-20 px-4"}`}
      >
        <div className={`mx-auto ${is4K ? "max-w-[1800px]" : "max-w-6xl"}`}>
          <div className="text-center mb-16">
            <h2
              className={`font-bold text-[#0f172a] mb-4 ${
                is4K ? "text-5xl" : "text-3xl md:text-4xl"
              }`}
            >
              Our Future:{" "}
              <span className="text-[#1b4f68]">Growing Sustainably</span>
            </h2>
            <p
              className={`text-gray-600 max-w-3xl mx-auto ${
                is4K ? "text-xl" : "text-lg"
              }`}
            >
              We are excited about continued growth and the positive impact we
              can make on the world.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Sustainable Efforts",
                description:
                  "Helping more artisans adopt green practices in their production processes",
                color:
                  "from-[var(--primary-color)] to-[var(--primary-hover-color)]",
                icon: TrendingUp,
              },
              {
                title: "Global Impact",
                description:
                  "Connecting more buyers with artisans who prioritize sustainability",
                color:
                  "from-[var(--primary-color)] to-[var(--primary-hover-color)]",
                icon: Globe,
              },
              {
                title: "Environmental Care",
                description:
                  "Minimizing carbon footprint with like-minded partners",
                color:
                  "from-[var(--primary-color)] to-[var(--primary-hover-color)]",
                icon: Leaf,
              },
            ].map((goal, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gray-100 to-transparent opacity-50 rounded-full -translate-y-16 translate-x-16"></div>
                <div
                  className={`bg-gradient-to-br ${goal.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10`}
                >
                  <goal.icon className={is4K ? "w-9 h-9" : "w-8 h-8"} />
                </div>
                <h3
                  className={`font-bold text-[#0f172a] mb-4 group-hover:text-[#1b4f68] transition-colors duration-300 ${
                    is4K ? "text-2xl" : "text-xl"
                  }`}
                >
                  {goal.title}
                </h3>
                <p
                  className={`text-gray-600 leading-relaxed ${
                    is4K ? "text-lg" : ""
                  }`}
                >
                  {goal.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
