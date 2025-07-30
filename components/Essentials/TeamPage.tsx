"use client"
import {
  Scissors,
  Hammer,
  Paintbrush,
  MessageSquare,
  Megaphone,
  DollarSign,
  Handshake,
  Sprout,
  Target,
  Landmark,
} from "lucide-react"
import { useInView } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import { useGlobalContext } from "@/components/Context/GlobalProvider"
export default function TeamPage() {
  const { is4K } = useGlobalContext() // Add this line
  const [isVisible, setIsVisible] = useState(false)
  const features = [
    {
      icon: <Handshake className="w-8 h-8" />,
      title: "Global Partners",
      text: "Worldwide network",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Ethical Practices",
      text: "Fair trade commitment",
    },
    {
      icon: <Sprout className="w-8 h-8" />,
      title: "Sustainability",
      text: "Eco-friendly approach",
    },
    {
      icon: <Landmark className="w-8 h-8" />,
      title: "Heritage",
      text: "Cultural preservation",
    },
  ]
  const supportItems = [
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Customer Support",
      description:
        "Dedicated to providing exceptional service to every buyer and artisan, ensuring positive experiences across our platform with 24/7 assistance.",
    },
    {
      icon: <Megaphone className="w-8 h-8" />,
      title: "Marketing & Outreach",
      description:
        "Building global awareness through compelling storytelling, strategic social media engagement, and meaningful collaborations worldwide.",
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Finance & Operations",
      description:
        "Ensuring fair and prompt payments to artisans while managing smooth workflows, robust inventory systems, and highly efficient logistics operations.",
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Customer Support",
      description:
        "Dedicated to providing exceptional service to every buyer and artisan, ensuring positive experiences across our platform with 24/7 assistance.",
    },
    {
      icon: <Megaphone className="w-8 h-8" />,
      title: "Marketing & Outreach",
      description:
        "Building global awareness through compelling storytelling, strategic social media engagement, and meaningful collaborations worldwide.",
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Finance & Operations",
      description:
        "Ensuring fair and prompt payments to artisans while managing smooth workflows, robust inventory systems, and highly efficient logistics operations.",
    },
  ]
  const artisans = [
    {
      icon: <Scissors className="w-8 h-8" />,
      title: "Pashmina Weavers",
      description:
        "Master artisans who have perfected the ancient art of Pashmina weaving, creating luxurious pieces that tell stories of generations past. Each thread carries the wisdom of centuries.",
    },
    {
      icon: <Hammer className="w-8 h-8" />,
      title: "Wood Carvers",
      description:
        "Skilled craftsmen who transform raw wood into intricate works of art, preserving traditional techniques passed down through families for generations.",
    },
    {
      icon: <Paintbrush className="w-8 h-8" />,
      title: "Traditional Artists",
      description:
        "Creative souls from diverse regions and backgrounds, united by their passion for preserving and sharing Kashmir's rich cultural heritage with the world.",
    },
    {
      icon: <Scissors className="w-8 h-8" />,
      title: "Pashmina Weavers",
      description:
        "Master artisans who have perfected the ancient art of Pashmina weaving, creating luxurious pieces that tell stories of generations past. Each thread carries the wisdom of centuries.",
    },
    {
      icon: <Hammer className="w-8 h-8" />,
      title: "Wood Carvers",
      description:
        "Skilled craftsmen who transform raw wood into intricate works of art, preserving traditional techniques passed down through families for generations.",
    },
    {
      icon: <Paintbrush className="w-8 h-8" />,
      title: "Traditional Artists",
      description:
        "Creative souls from diverse regions and backgrounds, united by their passion for preserving and sharing Kashmir's rich cultural heritage with the world.",
    },
    {
      icon: <Scissors className="w-8 h-8" />,
      title: "Pashmina Weavers",
      description:
        "Master artisans who have perfected the ancient art of Pashmina weaving, creating luxurious pieces that tell stories of generations past. Each thread carries the wisdom of centuries.",
    },
    {
      icon: <Hammer className="w-8 h-8" />,
      title: "Wood Carvers",
      description:
        "Skilled craftsmen who transform raw wood into intricate works of art, preserving traditional techniques passed down through families for generations.",
    },
    {
      icon: <Paintbrush className="w-8 h-8" />,
      title: "Traditional Artists",
      description:
        "Creative souls from diverse regions and backgrounds, united by their passion for preserving and sharing Kashmir's rich cultural heritage with the world.",
    },
  ]
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { amount: 0.3, once: true })

  const stats = [
    { value: 500, label: "Skilled Artisans" },
    { value: 50, label: "Villages" },
    { value: 25, label: "Craft Types" },
    { value: 15, label: "Countries" },
  ]

  const [counts, setCounts] = useState(stats.map(() => 0))

  useEffect(() => {
    if (isInView) {
      stats.forEach((stat, idx) => {
        let current = 0
        const timer = setInterval(() => {
          current += Math.ceil(stat.value / 50) // step size
          if (current >= stat.value) {
            current = stat.value
            clearInterval(timer)
          }
          setCounts((prev) => {
            const copy = [...prev]
            copy[idx] = current
            return copy
          })
        }, 20)
      })
    }
  }, [isInView])

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="team-page">
      <style jsx>{`

          color: var(--primary-color);
          font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
          position: relative;
          overflow-x: hidden;
        }

        .background-pattern {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0.03;

          background-size: 100px 100px, 60px 60px;
          animation: patternMove 20s linear infinite;
          z-index: 0;
        }

        @keyframes patternMove {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(100px, 60px);
          }
        }

        .floating-shapes {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }

        .shape {
          position: absolute;
          border-radius: 50%;
          animation: float 6s ease-in-out infinite;
        }

        .shape-1 {
          width: 120px;
          height: 120px;
          background: linear-gradient(
            135deg,
            var(--primary-cyan-color) 20,
            transparent
          );
          top: 10%;
          left: 10%;
          animation-delay: 0s;
        }

        .shape-2 {
          width: 80px;
          height: 80px;
          background: linear-gradient(
            135deg,
            var(--secondary-color) 15,
            transparent
          );
          top: 60%;
          right: 15%;
          animation-delay: 2s;
        }

        .shape-3 {
          width: 60px;
          height: 60px;
          background: linear-gradient(
            135deg,
            var(--primary-navy-color) 25,
            transparent
          );
          bottom: 20%;
          left: 20%;
          animation-delay: 4s;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-30px) rotate(120deg);
          }
          66% {
            transform: translateY(15px) rotate(240deg);
          }
        }

        .content-wrapper {
          position: relative;
          z-index: 2;
        }

        .main-content {
          padding: 5rem 0;
        }

        .container {
          max-width: ${is4K ? "2000px" : "1400px"};
          margin: 0 auto;
          padding: 0 ${is4K ? "3rem" : "2rem"};
        }

        .section {
          margin-bottom: 8rem;
          position: relative;
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-badge {
          display: inline-block;
          padding: ${is4K ? "0.75rem 2rem" : "0.5rem 1.5rem"};
          background: rgba(216, 88, 52, 0.1);
          border: 1px solid var(--secondary-color);
          border-radius: 30px;
          color: var(--secondary-color);
          font-size: ${is4K ? "1rem" : "0.8rem"};
          font-weight: 600;
          margin-bottom: 1rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          opacity: ${isVisible ? 1 : 0};
          transform: translateY(${isVisible ? "0" : "20px"});
          transition: all 0.8s ease-out;
          backdrop-filter: blur(10px);
        }

        .section-title {
          font-size: ${is4K ? "clamp(3.5rem, 8vw, 6rem)" : "clamp(2.5rem, 6vw, 4rem)"};
          font-weight: 800;
          margin-bottom: 1.5rem;
          color: var(--primary-color);
          line-height: 1.2;
          letter-spacing: -0.02em;
          opacity: ${isVisible ? 1 : 0};
          transform: translateY(${isVisible ? "0" : "50px"});
          transition: all 1s ease-out 0.2s;
        }

        .section-subtitle {
          font-size: ${is4K ? "clamp(1.4rem, 3vw, 1.8rem)" : "clamp(1.1rem, 2.5vw, 1.4rem)"};
          color: var(--primary-light-text-color);
          max-width: ${is4K ? "900px" : "600px"};
          margin: 0 auto;
          line-height: 1.6;
          opacity: ${isVisible ? 1 : 0};
          transform: translateY(${isVisible ? "0" : "30px"});
          transition: all 0.8s ease-out 0.4s;
        }

        .hero-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(${is4K ? "180px" : "120px"}, 1fr));
          gap: ${is4K ? "3rem" : "2rem"};
          max-width: ${is4K ? "1200px" : "800px"};
          margin: 3rem auto 0;
          opacity: ${isVisible ? 1 : 0};
          transform: translateY(${isVisible ? "0" : "30px"});
          transition: all 0.8s ease-out 0.6s;
        }

        .hero-stat {
          text-align: center;
          padding: ${is4K ? "2rem" : "1.5rem"};
          background: var(--primary-light-text-color);
          backdrop-filter: blur(15px);
          border: 1px solid var(--primary-hover-color);
          border-radius: 20px;
          transition: all 0.3s ease;
        }

        .hero-stat:hover {
          transform: translateY(-5px);
          background: rgba(255, 255, 255, 0.08);
          border-color: var(--primary--color);
          box-shadow: 0 20px 40px rgba(0, 172, 193, 0.1);
        }

        .hero-stat-number {
          display: block;
          font-size: ${is4K ? "clamp(2.2rem, 5vw, 3.5rem)" : "clamp(1.8rem, 4vw, 2.5rem)"};
          font-weight: 800;
          color: var(--secondary-hover-color);
          margin-bottom: 0.5rem;
        }

        .hero-stat-label {
          font-size: ${is4K ? "1.1rem" : "0.9rem"};
          color: var(--secondary-hover-color);
          font-weight: 500;
        }

        .artisan-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(${is4K ? "450px" : "350px"}, 1fr));
          gap: ${is4K ? "3.5rem" : "2.5rem"};
          margin-bottom: 4rem;
        }

        .artisan-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          border: 1px solid var(--primary-color);
          border-radius: 24px;
          padding: ${is4K ? "3.5rem" : "2.5rem"};
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          group: hover;
        }

        .artisan-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(
            90deg,
            var(--primary-hover-color),
            var(--secondary-hover-color)
          );
          transform: scaleX(0);
          transition: transform 0.4s ease;
        }

        .artisan-card::after {
          content: "";
          position: absolute;
          top: -50%;
          right: -50%;
          width: 100%;
          height: 100%;
          background: radial-gradient(
            circle,
            var(--primary-hover-color) 05,
            transparent 70%
          );
          transform: scale(0);
          transition: transform 0.4s ease;
        }

        .artisan-card:hover::before {
          transform: scaleX(1);
        }

        .artisan-card:hover::after {
          transform: scale(1);
        }

        .artisan-card:hover {
          transform: translateY(-12px) scale(1.02);
          background: rgba(255, 255, 255, 0.06);
          border-color: var(--primary-hover-color);
          box-shadow: 0 25px 50px rgba(0, 172, 193, 0.15),
            0 0 0 1px rgba(0, 172, 193, 0.1);
        }

        .card-icon-wrapper {
          position: relative;
          margin-bottom: 2rem;
        }

        .card-icon {
          width: ${is4K ? "100px" : "80px"};
          height: ${is4K ? "100px" : "80px"};
          background: var(--secondary-hover-color);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: ${is4K ? "2.5rem" : "2rem"};
          transition: all 0.4s ease;
          position: relative;
          z-index: 1;
        }

        .card-icon::before {
          content: "";
          position: absolute;
          inset: -2px;
          opacity: 0;
          transition: opacity 0.4s ease;
          z-index: -1;
        }

        .artisan-card:hover .card-icon {
          transform: rotate(10deg) scale(1.1);
        }

        .artisan-card:hover .card-icon::before {
          opacity: 0.3;
        }

        .card-title {
          font-size: ${is4K ? "1.8rem" : "1.5rem"};
          font-weight: 700;
          margin-bottom: 1rem;
          color: var(--primary-hover-color);
          line-height: 1.3;
        }

        .card-description {
          color: var(--primary-light-text-color);
          line-height: 1.7;
          font-size: ${is4K ? "1.2rem" : "1rem"};
        }

        .quote-section {
          background: linear-gradient(
            135deg,
            var(--primary-color),
            var(--primary-color)
          );
          border-radius: 32px;
          padding: ${is4K ? "6rem 3rem" : "4rem 2rem"};
          margin: 5rem 0;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .quote-section::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          animation: patternFloat 15s linear infinite;
        }

        @keyframes patternFloat {
          0% {
            transform: translateX(0) translateY(0);
          }
          100% {
            transform: translateX(40px) translateY(-40px);
          }
        }

        .quote-icon {
          width: ${is4K ? "80px" : "60px"};
          height: ${is4K ? "80px" : "60px"};
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 2rem;
          font-size: ${is4K ? "2rem" : "1.5rem"};
          position: relative;
          z-index: 1;
        }

        .quote-text {
          font-size: ${is4K ? "clamp(1.5rem, 4vw, 2.2rem)" : "clamp(1.2rem, 3vw, 1.8rem)"};
          font-style: italic;
          color: var(--primary-header-color);
          line-height: 1.6;
          position: relative;
          z-index: 1;
          font-weight: 400;
          max-width: ${is4K ? "1200px" : "800px"};
          margin: 0 auto;
        }

        .support-section {
          position: relative;
        }

        .support-grid {
            display: grid;
          grid-template-columns: repeat(auto-fit, minmax(${is4K ? "450px" : "350px"}, 1fr));
          gap: ${is4K ? "3.5rem" : "2.5rem"};
          margin-bottom: 4rem;
        }

        .support-card {
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.05),
            rgba(255, 255, 255, 0.02)
          );
          backdrop-filter: blur(20px);
          border: 1px solid var(--primary-color);
          border-radius: 24px;
          padding: ${is4K ? "3.5rem" : "2.5rem"};
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .support-card::after {
          content: "";
          position: absolute;
          top: -50%;
          right: -50%;
          width: 100%;
          height: 100%;
          background: radial-gradient(
            circle,
            var(--secondary-color) 08,
            transparent 70%
          );
          transform: scale(0);
          transition: transform 0.4s ease;
        }

        .support-card:hover::after {
          transform: scale(1);
        }

        .support-card:hover {
          transform: translateY(-10px) scale(1.02);
          border-color: var(--secondary-color);
          box-shadow: 0 25px 50px rgba(216, 88, 52, 0.15),
            0 0 0 1px rgba(216, 88, 52, 0.1);
        }

        .support-icon {
          width: ${is4K ? "90px" : "70px"};
          height: ${is4K ? "90px" : "70px"};
          background: var(--secondary-color);
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 2rem;
          font-size: ${is4K ? "2rem" : "1.5rem"};
          transition: all 0.4s ease;
          position: relative;
          z-index: 1;
        }

        .support-card:hover .support-icon {
          background: var(--secondary-hover-color);
          transform: rotate(-8deg) scale(1.1);
        }

        .collaboration-section {
          border-radius: 32px;
          padding: ${is4K ? "6rem 4rem" : "4rem 3rem"};
          margin: 6rem 0;
          border: 1px solid var(--secondary-color);
          position: relative;
          overflow: hidden;
        }

        .collaboration-section::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;

          opacity: 0.5;
        }

        .collaboration-content {
          text-align: center;
          max-width: ${is4K ? "1300px" : "900px"};
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .collaboration-text {
          font-size: ${is4K ? "clamp(1.3rem, 3vw, 1.6rem)" : "clamp(1.1rem, 2.5vw, 1.3rem)"};
          line-height: 1.8;
          color: var(--primary-light-text-color);
          margin-bottom: 2rem;
        }

        .collaboration-features {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(${is4K ? "280px" : "200px"}, 1fr));
          gap: ${is4K ? "3rem" : "2rem"};
          margin-top: 3rem;
        }

        .collaboration-feature {
          text-align: center;
          padding: ${is4K ? "2rem" : "1.5rem"};
          background: var(--primary-color);
          border-radius: 19px;
          border-color: var(--primary-hover-color);
          transition: all 0.3s ease;
        }

        .collaboration-feature:hover {
          transform: translateY(-5px);
          background: rgba(255, 255, 255, 0.06);
          border: solid;
          border-radius: 19px;
          border-color: var(--secondary-hover-color);
          color: var(--primary-color);
        }

        .feature-icon {
          font-size: ${is4K ? "2.5rem" : "2rem"};
          margin-bottom: 1rem;
          display: block;
        }

        .feature-title {
          font-size: ${is4K ? "1.2rem" : "1rem"};
          font-weight: 600;
          margin-bottom: 0.5rem;
        }
          
     
        .feature-text {
          font-size: ${is4K ? "1.1rem" : "0.9rem"};
          color: var(--secondary-hover-color);
        }

        .future-section {
          text-align: center;
          padding: ${is4K ? "7rem 4rem" : "5rem 3rem"};
          background: linear-gradient(
            135deg,
            var(--primary-color),
            var(--primary-navy-color)
          );
          border-radius: 32px;
          margin-top: 6rem;
          position: relative;
          overflow: hidden;
        }

        .future-section::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;

          animation: drift 25s linear infinite;
        }

        .future-title {
          font-size: ${is4K ? "clamp(3.5rem, 8vw, 5rem)" : "clamp(2.5rem, 6vw, 3.5rem)"};
          font-weight: 800;
          margin-bottom: 2rem;
          color: var(--primary-header-color);
          position: relative;
          z-index: 1;
          line-height: 1.2;
        }

        .future-text {
          font-size: ${is4K ? "clamp(1.3rem, 3vw, 1.6rem)" : "clamp(1.1rem, 2.5vw, 1.3rem)"};
          line-height: 1.8;
          color: var(--primary-light-text-color);
          max-width: ${is4K ? "1200px" : "800px"};
          margin: 0 auto 2rem;
          position: relative;
          z-index: 1;
        }

        .future-mission {
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          padding: ${is4K ? "3rem" : "2rem"};
          margin-top: 3rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          position: relative;
          z-index: 1;
        }

        .mission-text {
          font-size: ${is4K ? "clamp(1.4rem, 3vw, 1.7rem)" : "clamp(1.2rem, 2.5vw, 1.4rem)"};
          font-weight: 600;
          color: var(--primary-header-color);
          line-height: 1.6;
        }

        /* Responsive Design */
        @media (max-width: 1200px) {
          .container {
            padding: 0 1.5rem;
          }
        }

        @media (max-width: 768px) {
          .main-content {
            padding: 3rem 0;
          }

          .hero-stats {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
            margin-top: 2rem;
          }

          .hero-stat {
            padding: 1rem;
          }

          .container {
            padding: 0 1rem;
          }

          .artisan-grid,
          .support-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .artisan-card,
          .support-card {
            padding: 2rem;
          }

          .quote-section,
          .collaboration-section,
          .future-section {
            padding: 3rem 2rem;
            margin: 3rem 0;
            border-radius: 24px;
          }

          .section {
            margin-bottom: 5rem;
          }

          .collaboration-features {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
        }

        @media (max-width: 480px) {
          .hero-stats {
            grid-template-columns: 1fr;
          }

          .artisan-card,
          .support-card {
            padding: 1.5rem;
          }

          .card-icon,
          .support-icon {
            width: 60px;
            height: 60px;
            font-size: 1.2rem;
          }

          .quote-section,
          .collaboration-section,
          .future-section {
            padding: 2rem 1.5rem;
          }
        }
      `}</style>

      <div className="background-pattern"></div>
      <div className="floating-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      <div className="content-wrapper">
        <main className="main-content">
          <div className="container">
            <section className="section">
              <div ref={sectionRef} className="section-header">
                <div className="section-badge">✨ Meet Our Amazing Team</div>
                <h1 className="section-title">Our Crafting Team</h1>
                <p className="section-subtitle">
                  The Artisans Who Make It All Possible. At De Koshur Crafts, we are not just a business—we are a
                  community of passionate creators preserving Kashmir's rich heritage.
                </p>
                <div className="hero-stats">
                  {stats.map((stat, idx) => (
                    <div key={idx} className="hero-stat">
                      <span className="hero-stat-number">{counts[idx]}+</span>
                      <span className="hero-stat-label">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="section-header" style={{ marginTop: "6rem" }}>
                <div className="section-badge">Our Artisans</div>
                <h2 className="section-title">The Heart of Our Craft</h2>
                <p className="section-subtitle">
                  Our artisans, from remote villages to bustling urban centers, are the heart and soul of our platform.
                  Every piece tells a story of skill, tradition, and passion.
                </p>
              </div>
              <div className="artisan-grid">
                {artisans.map((artisan, index) => (
                  <div key={index} className="artisan-card">
                    <div className="card-icon-wrapper">
                      <div className="card-icon">{artisan.icon}</div>
                    </div>
                    <h3 className="card-title">{artisan.title}</h3>
                    <p className="card-description">{artisan.description}</p>
                  </div>
                ))}
              </div>
              <div className="quote-section">
                <div className="quote-icon">💬</div>
                <p className="quote-text">
                  "We are more than just creators. We are custodians of a rich cultural legacy, and through De Koshur
                  Crafts, we can ensure that our art continues to be appreciated by people around the world."
                </p>
              </div>
            </section>

            <section className="section support-section">
              <div className="section-header">
                <div className="section-badge">Support Team</div>
                <h2 className="section-title">The Backbone of Operations</h2>
                <p className="section-subtitle">
                  Behind every successful business is a strong support system. Our diverse team brings expertise in
                  customer service, business development, marketing, and operations.
                </p>
              </div>

              <div className="support-grid">
                {supportItems.map((item, index) => (
                  <div key={index} className="support-card">
                    <div className="support-icon">{item.icon}</div>
                    <h3 className="card-title">{item.title}</h3>
                    <p className="card-description">{item.description}</p>
                  </div>
                ))}
              </div>
            </section>
            <section className="collaboration-section bg-gradient-to-r from-[var(--primary-header-color)] to-[var(--primary-header-color)]">
              <div className="collaboration-content">
                <div className="section-header">
                  <div className="section-badge">Collaboration</div>
                  <h2 className="section-title">The Power of Unity</h2>
                </div>
                <p className="collaboration-text">
                  The De Koshur Crafts team works collaboratively, drawing from each other's strengths, skills, and
                  perspectives to ensure that the company remains dynamic, innovative, and growth-oriented.
                </p>
                <p className="collaboration-text">
                  We collaborate with global partners, designers, retailers, and NGOs to build a thriving ecosystem that
                  connects artisans with buyers and customers with authentic Kashmiri craftsmanship.
                </p>

                <div className="collaboration-features">
                  {features.map((feature, index) => (
                    <div key={index} className="collaboration-feature">
                      <span className="feature-icon text-[var(--secondary-hover-color)] ml-[40%]">{feature.icon}</span>
                      <div className="feature-title text-[var(--secondary-hover-color)]">{feature.title}</div>
                      <div className="feature-text">{feature.text}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  )
}
