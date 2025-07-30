"use client"
import VerticalHeroSlider from "@/components/Essentials/VerticalBanner"
import Accordion from "@/components/Material/Accordion"
import Counter from "@/components/Material/Counter"
import PremiumTabs from "@/components/Material/PremiumTabs"
import BusinessLocation from "@/components/Essentials/BusinessLocation"
import { Shirt, Palette, Scissors, TreePine, Settings, Gem, Landmark, Leaf, Gift } from "lucide-react"
import Location from "@/components/Essentials/Location"
import { useGlobalContext } from "@/context/ScreenProvider"

function page() {
  const { is4K } = useGlobalContext()

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
  ]
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
  ]
  const impactData = [
    {
      id: "artisan-income",
      title: "Artisan Income",
      content:
        "Over 2,000 artisans gained fair global exposure, achieving a 30% income rise and earning millions collectively through direct sales.",
      icon: "users",
    },
    {
      id: "women-empowerment",
      title: "Women Growth",
      content:
        "Sixty percent are women artisans, with 35% higher earnings, building independence and supporting families across their communities.",
      icon: "heartHandshake",
    },
    {
      id: "training-support",
      title: "Skill Training",
      content:
        "More than 100 sessions trained 1,500 artisans in marketing, sustainability, and quality control to expand their craft and business.",
      icon: "graduationCap",
    },
    {
      id: "education-health",
      title: "Family Care",
      content:
        "Scholarships for 500+ children and health aid for 3,000 members ensure artisan families grow stronger and lead healthier lives.",
      icon: "stethoscope",
    },
    {
      id: "community-build",
      title: "Local Growth",
      content:
        "Fifteen infrastructure projects, 200 micro‑loans, and farming initiatives uplift villages and strengthen artisan communities deeply.",
      icon: "building2",
    },
    {
      id: "eco-materials",
      title: "Green Craft",
      content:
        "Seventy‑five percent of products use eco‑friendly materials, organic dyes, and recycled fibers to protect nature while creating art.",
      icon: "leaf",
    },
    {
      id: "carbon-reduce",
      title: "Low Carbon",
      content:
        "Fifty tons of offsets and recycled packaging ensure every shipment lowers waste and supports a more sustainable production path.",
      icon: "factory",
    },
    {
      id: "global-reach",
      title: "World Sales",
      content:
        "Kashmiri crafts reached 100 nations, 300 retail partners, and over 100,000 products sold to buyers worldwide celebrating heritage.",
      icon: "globe2",
    },
  ]
  const items = [
    {
      icon: <Shirt className="text-[color:var(--primary-color)] w-12 h-12" />,
      title: "Pashmina Shawls",
      description:
        "Soft crafted shawls with old world touch and new charm woven with care to keep warmth alive and true art here.",
    },
    {
      icon: <Shirt className="text-[color:var(--primary-color)] w-12 h-12" />,
      title: "Pashmina Shawls",
      description:
        "Soft crafted shawls with old world touch and new charm woven with care to keep warmth alive and true art here.",
    },
    {
      icon: <Palette className="text-[color:var(--secondary-color)] w-12 h-12" />,
      title: "Papier Mache Art",
      description:
        "Fine painted crafts with bright bold tones that tell of past times with care and skill that still lives on now.",
    },
    {
      icon: <Scissors className="text-[color:var(--primary-color)] w-12 h-12" />,
      title: "Kani Weaving Now",
      description:
        "Old comb work weaves with small great moves to make strong cloth and clear shapes that last with fine warm love.",
    },
    {
      icon: <TreePine className="text-[color:var(--secondary-color)] w-12 h-12" />,
      title: "Wood Carving Art",
      description:
        "Fine carved wood made with soft sharp tools and old skill to give forms and shapes that glow and live with charm.",
    },
    {
      icon: <Settings className="text-[color:var(--primary-color)] w-12 h-12" />,
      title: "Custom Craft Made",
      description:
        "Your own fine work shaped with heart and hand with old skill to make warm true forms that stand with deep art.",
    },
  ]
  const cards = [
    {
      icon: <Gem className="w-8 h-8 text-white" />,
      title: "Luxury Buyers",
      description:
        "People who seek rare crafted items with lasting charm and elegant appeal, making each purchase feel truly unique.",
    },
    {
      icon: <Landmark className="w-8 h-8 text-white" />,
      title: "Culture Lovers",
      description:
        "People who value art and heritage, looking for timeless goods that honor traditions and bring meaning to life.",
    },
    {
      icon: <Leaf className="w-8 h-8 text-white" />,
      title: "Green Seekers",
      description:
        "People who choose products built with care for nature, ensuring every item supports a kind and safe future.",
    },
    {
      icon: <Gift className="w-8 h-8 text-white" />,
      title: "Home Stylers",
      description:
        "People who love fine decor and unique gifts, searching for pieces that enrich spaces and bring lasting joy.",
    },
  ]

  return (
    <div>
      <VerticalHeroSlider />
      {/* Hero Section for Business Niche */}
      <section className={`px-4 md:px-8 lg:px-12 py-20 bg-white ${is4K ? "2xl:py-32" : ""}`}>
        <div className={`max-w-7xl mx-auto ${is4K ? "2xl:max-w-[2000px]" : ""}`}>
          <h2
            className={`text-4xl lg:text-5xl font-extrabold text-center mb-4 text-[color:var(--primary-color)] ${is4K ? "2xl:text-6xl" : ""}`}
          >
            Our Niche Products
          </h2>
          <p
            className={`text-center text-lg text-[color:var(--secondary-color)] mb-16 max-w-3xl mx-auto ${is4K ? "2xl:text-xl 2xl:mb-20" : ""}`}
          >
            Each piece represents centuries of perfected tradition and cultural heritage
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((item, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-[color:var(--primary-color)] to-[color:var(--primary-hover-color)] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div
                  className={`w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 mx-auto ${is4K ? "2xl:w-24 2xl:h-24 2xl:mb-8" : ""}`}
                >
                  {item.icon}
                </div>
                <h3
                  className={`text-2xl font-bold text-white mb-4 text-center h-16 flex items-center justify-center ${is4K ? "2xl:text-3xl 2xl:h-20" : ""}`}
                >
                  {item.title}
                </h3>
                <p className={`text-gray-200 text-center leading-relaxed ${is4K ? "2xl:text-lg" : ""}`}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Differentiation */}
      <section
        className={`px-4 md:px-8 lg:px-12 py-20 bg-gradient-to-b from-gray-50 to-white ${is4K ? "2xl:py-32" : ""}`}
      >
        <div className={`max-w-6xl mx-auto ${is4K ? "2xl:max-w-[2000px]" : ""}`}>
          <h2
            className={`text-4xl lg:text-5xl font-extrabold text-center mb-4 text-[color:var(--primary-color)] ${is4K ? "2xl:text-6xl" : ""}`}
          >
            What Makes Us Unique
          </h2>
          <p
            className={`text-center text-lg text-[color:var(--secondary-color)] mb-16 max-w-3xl mx-auto ${is4K ? "2xl:text-xl 2xl:mb-20" : ""}`}
          >
            Standing out in the handmade crafts market through authenticity and ethical practices
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-[color:var(--primary-color)] hover:scale-105 duration-500">
              <h3
                className={`text-2xl font-bold text-[color:var(--primary-color)] mb-4 ${is4K ? "2xl:text-3xl 2xl:mb-6" : ""}`}
              >
                Authenticity & Tradition
              </h3>
              <p className={`text-gray-700 leading-relaxed ${is4K ? "2xl:text-lg" : ""}`}>
                Only authentic Kashmiri crafts made by artisans who have inherited techniques through generations. Each
                item carries the story of the land and culture.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-[color:var(--primary-color)] hover:scale-105 duration-500">
              <h3
                className={`text-2xl font-bold text-[color:var(--primary-color)] mb-4 ${is4K ? "2xl:text-3xl 2xl:mb-6" : ""}`}
              >
                Fair Trade & Empowerment
              </h3>
              <p className={`text-gray-700 leading-relaxed ${is4K ? "2xl:text-lg" : ""}`}>
                Ensuring fair wages, training access, and global showcase opportunities for artisans, creating
                sustainable livelihoods for families.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-[color:var(--primary-color)] hover:scale-105 duration-500">
              <h3
                className={`text-2xl font-bold text-[color:var(--primary-color)] mb-4 ${is4K ? "2xl:text-3xl 2xl:mb-6" : ""}`}
              >
                Sustainability Focus
              </h3>
              <p className={`text-gray-700 leading-relaxed ${is4K ? "2xl:text-lg" : ""}`}>
                Eco-friendly materials and sustainable crafting practices ensure minimal environmental footprint while
                preserving traditional methods.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-[color:var(--primary-color)] hover:scale-105 duration-500">
              <h3
                className={`text-2xl font-bold text-[color:var(--primary-color)] mb-4 ${is4K ? "2xl:text-3xl 2xl:mb-6" : ""}`}
              >
                Global Reach, Local Impact
              </h3>
              <p className={`text-gray-700 leading-relaxed ${is4K ? "2xl:text-lg" : ""}`}>
                Connecting Kashmiri artisans to global markets while providing employment, education, and healthcare
                support to local communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Market */}
      <section
        className={`px-4 md:px-8 lg:px-12 py-20 text-white bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-hover-color)] ${is4K ? "2xl:py-32" : ""}`}
      >
        <div className={`max-w-6xl mx-auto ${is4K ? "2xl:max-w-[2000px]" : ""}`}>
          <h2
            className={`text-4xl lg:text-5xl font-extrabold text-center mb-4 text-[var(--secondary-light-color)] ${is4K ? "2xl:text-6xl" : ""}`}
          >
            Our Global Audience
          </h2>
          <p
            className={`text-center text-lg mb-16 max-w-3xl mx-auto opacity-90 ${is4K ? "2xl:text-xl 2xl:mb-20" : ""}`}
          >
            Serving customers who value authenticity, tradition, and ethical business practices
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cards.map((card, index) => (
              <div key={index} className="text-center p-6 rounded-2xl bg-white shadow-md">
                <div
                  className={`w-20 h-20 rounded-full flex items-center justify-center mb-4 mx-auto bg-[var(--primary-color)] ${is4K ? "2xl:w-24 2xl:h-24 2xl:mb-6" : ""}`}
                >
                  {card.icon}
                </div>
                <h3
                  className={`text-xl font-bold mb-3 text-[var(--primary-color)] ${is4K ? "2xl:text-2xl 2xl:mb-4" : ""}`}
                >
                  {card.title}
                </h3>
                <p className={`text-sm text-gray-700 ${is4K ? "2xl:text-base" : ""}`}>{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Impact Metrics Section */}
      <section className={`px-4 md:px-8 lg:px-12 py-30 ${is4K ?  "mx-auto max-w-[2400px] 2xl:py-40" : ""}`}>
        <h1
          className={`text-center font-extrabold mb-6 text-3xl sm:text-4xl md:text-5xl text-[color:var(--primary-color)] ${is4K ? "2xl:text-6xl 2xl:mb-8" : ""}`}
        >
          Global Impact Metrics
        </h1>
        <p
          className={`text-center mb-10 text-base sm:text-lg md:text-xl text-[color:var(--secondary-color)] ${is4K ? "2xl:text-2xl 2xl:mb-12" : ""}`}
        >
          Discover the journey of our brand and what makes us unique.
        </p>
        <Accordion data={impactData} />
      </section>

      <PremiumTabs />

      <div className="bg-gradient-to-b from-blue-50 to-blue-100 pt-4">
        <div className="text-center mt-16 mb-6">
          <h2
            className={`text-4xl lg:text-5xl font-extrabold text-[var(--primary-color)] mb-4 ${is4K ? "2xl:text-6xl 2xl:mb-6" : ""}`}
          >
            Our Reach
          </h2>
        </div>
        <section className={`py-6 ${is4K ? "2xl:py-10" : ""}`}>
          <div className="container mx-auto px-4 text-center">
            <h3
              className={`text-3xl font-extrabold text-[var(--secondary-color)] mb-3 ${is4K ? "2xl:text-4xl 2xl:mb-4" : ""}`}
            >
              Buyer
            </h3>
            <Counter slides={buyerslides} />
          </div>
        </section>
        <section className={`py-6 ${is4K ? "2xl:py-10" : ""}`}>
          <div className="container mx-auto px-4 text-center">
            <h3
              className={`text-3xl font-extrabold text-[var(--secondary-color)] mb-3 ${is4K ? "2xl:text-4xl 2xl:mb-4" : ""}`}
            >
              Vendor
            </h3>
            <Counter slides={vendorslides} />
          </div>
        </section>
      </div>

      {/* Future Vision */}
      <section className={`px-4 md:px-8 lg:px-12 py-20 ${is4K ? "2xl:py-32" : ""}`}>
        <div className={`max-w-4xl mx-auto text-center ${is4K ? "2xl:max-w-[2000px]" : ""}`}>
          <h2
            className={`text-4xl lg:text-5xl font-extrabold mb-6 text-[color:var(--primary-color)] ${is4K ? "2xl:text-6xl 2xl:mb-8" : ""}`}
          >
            Our Future Vision
          </h2>
          <p
            className={`text-lg sm:text-xl text-gray-700 leading-relaxed mb-8 ${is4K ? "2xl:text-2xl 2xl:mb-10" : ""}`}
          >
            Expanding our global reach while staying true to our roots. We aim to be the go-to destination for luxury
            Kashmiri crafts, offering customers an authentic, sustainable, and impactful shopping experience through new
            crafts, custom offerings, and global partnerships.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch">
            <div className="bg-white rounded-lg p-6 shadow-lg flex-1 min-w-[220px]">
              <h3
                className={`text-xl font-bold text-[color:var(--primary-color)] mb-2 ${is4K ? "2xl:text-2xl 2xl:mb-3" : ""}`}
              >
                Expand Globally
              </h3>
              <p className={`text-gray-700 text-sm ${is4K ? "2xl:text-base" : ""}`}>Reaching new markets worldwide</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg flex-1 min-w-[220px]">
              <h3
                className={`text-xl font-bold text-[color:var(--primary-color)] mb-2 ${is4K ? "2xl:text-2xl 2xl:mb-3" : ""}`}
              >
                New Crafts
              </h3>
              <p className={`text-gray-700 text-sm ${is4K ? "2xl:text-base" : ""}`}>
                Introducing more Kashmiri traditions
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg flex-1 min-w-[220px]">
              <h3
                className={`text-xl font-bold text-[color:var(--primary-color)] mb-2 ${is4K ? "2xl:text-2xl 2xl:mb-3" : ""}`}
              >
                Custom Excellence
              </h3>
              <p className={`text-gray-700 text-sm ${is4K ? "2xl:text-base" : ""}`}>Expanding bespoke offerings</p>
            </div>
          </div>
        </div>
      </section>
      {/* <ScrollSection /> */}
      <BusinessLocation />
      <Location />
    </div>
  )
}

export default page
