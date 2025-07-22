import VerticalHeroSlider from "@/components/Essentials/VerticalBanner";
import Accordion from "@/components/Material/Accordion";
import Counter from "@/components/Material/Counter";
import PremiumTabs from "@/components/Material/PremiumTabs";
import BusinessLocation from "@/components/Essentials/BusinessLocation";
import {
  Shirt,
  Palette,
  Scissors,
  TreePine,
  Settings,
  Gem,
  Landmark,
  Leaf,
  Gift,
} from "lucide-react";
import Location from "@/components/Essentials/Location";
function page() {
const buyerslides = [
  { id: 1, title: "Individual Purchasers", number: 1523 }, // 11+11=22
  { id: 2, title: "Retail Customers", number: 351 },       // 6+9=15? not enough, adjust
  { id: 3, title: "Wholesale Purchasers", number: 311 },  // 9+11=20
  { id: 4, title: "Online Purchasers", number: 18 },      // 6+11=17
  { id: 5, title: "Interior Designers", number: 68 },     // 8+9=17
  { id: 6, title: "Corporate Purchasers", number: 8 },    // 9+11=20
  { id: 7, title: "Art Preservationists", number: 205 },        // 3+10=13? adjust
  { id: 8, title: "Global Merchandisers", number: 52 },         // 6+7=13? adjust
  { id: 10, title: "Hospitality Chains", number: 21 },    // 11+6=17
  { id: 11, title: "Fashion Designers", number: 28 },     // 7+9=16? adjust
];

const vendorslides = [
  { id: 1, title: "Individual Artisans", number: 1032 },  // 11+8=19
  { id: 2, title: "Artisan Communities", number: 15 },    // 7+12=19
  { id: 3, title: "Small Businesses", number: 23 },       // 5+10=15? adjust
  { id: 4, title: "Women Entrepreneurs", number: 6 },     // 5+13=18
  { id: 5, title: "Export Specialists", number: 17 },     // 6+11=17
  { id: 6, title: "Online Merchandisers", number: 22 },   // 6+13=19
  { id: 7, title: "Design Professionals", number: 3 },    // 6+13=19
  { id: 8, title: "Luxury Merchandisers", number: 16 },   // 6+13=19
  { id: 9, title: "Wholesale Suppliers", number: 13 },    // 9+9=18
  { id: 10, title: "Craft Professionals", number: 7 },       // 5+10=15? adjust
];

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
  ];

  const items = [
    {
      icon: <Shirt className="text-[color:var(--primary-color)] w-12 h-12" />,
      title: "Pashmina Shawls", // 16 chars including spaces
      description:
        "Soft crafted shawls with old world touch and new charm woven with care to keep warmth alive and true art here.",
    },
    {
      icon: <Shirt className="text-[color:var(--primary-color)] w-12 h-12" />,
      title: "Pashmina Shawls", // 16 chars including spaces
      description:
        "Soft crafted shawls with old world touch and new charm woven with care to keep warmth alive and true art here.",
    },
    {
      icon: (
        <Palette className="text-[color:var(--secondary-color)] w-12 h-12" />
      ),
      title: "Papier Mache Art", // 16 chars
      description:
        "Fine painted crafts with bright bold tones that tell of past times with care and skill that still lives on now.",
    },
    {
      icon: (
        <Scissors className="text-[color:var(--primary-color)] w-12 h-12" />
      ),
      title: "Kani Weaving Now", // 16 chars
      description:
        "Old comb work weaves with small great moves to make strong cloth and clear shapes that last with fine warm love.",
    },
    {
      icon: (
        <TreePine className="text-[color:var(--secondary-color)] w-12 h-12" />
      ),
      title: "Wood Carving Art", // 16 chars
      description:
        "Fine carved wood made with soft sharp tools and old skill to give forms and shapes that glow and live with charm.",
    },
    {
      icon: (
        <Settings className="text-[color:var(--primary-color)] w-12 h-12" />
      ),
      title: "Custom Craft Made", // 16 chars
      description:
        "Your own fine work shaped with heart and hand with old skill to make warm true forms that stand with deep art.",
    },
  ];

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
  ];

  return (
    <div>
      <VerticalHeroSlider />

      {/* Hero Section for Business Niche */}

      <section className="px-4 md:px-8 lg:px-12 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-center mb-4 text-[color:var(--primary-color)]">
            Our Niche Products
          </h2>
          <p className="text-center text-lg text-[color:var(--secondary-color)] mb-16 max-w-3xl mx-auto">
            Each piece represents centuries of perfected tradition and cultural
            heritage
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((item, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-[color:var(--primary-color)] to-[color:var(--primary-hover-color)] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 mx-auto">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center h-16 flex items-center justify-center">
                  {item.title}
                </h3>
                <p className="text-gray-200 text-center leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Market Differentiation */}
      <section className="px-4 md:px-8 lg:px-12 py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-center mb-4 text-[color:var(--primary-color)]">
            What Makes Us Unique
          </h2>
          <p className="text-center text-lg text-[color:var(--secondary-color)] mb-16 max-w-3xl mx-auto">
            Standing out in the handmade crafts market through authenticity and
            ethical practices
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-[color:var(--primary-color)] hover:scale-105 duration-500">
              <h3 className="text-2xl font-bold text-[color:var(--primary-color)] mb-4">
                Authenticity & Tradition
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Only authentic Kashmiri crafts made by artisans who have
                inherited techniques through generations. Each item carries the
                story of the land and culture.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-[color:var(--primary-color)] hover:scale-105 duration-500">
              <h3 className="text-2xl font-bold text-[color:var(--primary-color)] mb-4">
                Fair Trade & Empowerment
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Ensuring fair wages, training access, and global showcase
                opportunities for artisans, creating sustainable livelihoods for
                families.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-[color:var(--primary-color)] hover:scale-105 duration-500">
              <h3 className="text-2xl font-bold text-[color:var(--primary-color)] mb-4">
                Sustainability Focus
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Eco-friendly materials and sustainable crafting practices ensure
                minimal environmental footprint while preserving traditional
                methods.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-[color:var(--primary-color)] hover:scale-105 duration-500">
              <h3 className="text-2xl font-bold text-[color:var(--primary-color)] mb-4">
                Global Reach, Local Impact
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Connecting Kashmiri artisans to global markets while providing
                employment, education, and healthcare support to local
                communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Market */}
      <section className="px-4 md:px-8 lg:px-12 py-20 text-white bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-hover-color)]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-center mb-4 text-[var(--secondary-light-color)]">
            Our Global Audience
          </h2>
          <p className="text-center text-lg mb-16 max-w-3xl mx-auto opacity-90">
            Serving customers who value authenticity, tradition, and ethical
            business practices
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cards.map((card, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-white shadow-md"
              >
                <div className="w-20 h-20 rounded-full flex items-center justify-center mb-4 mx-auto bg-[var(--primary-color)]">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-[var(--primary-color)]">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-700">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Impact Metrics Section */}
      <section className="px-4 md:px-8 lg:px-12 py-30">
        <h1 className="text-center font-extrabold mb-6 text-3xl sm:text-4xl md:text-5xl text-[color:var(--primary-color)]">
          Global Impact Metrics
        </h1>
        <p className="text-center mb-10 text-base sm:text-lg md:text-xl text-[color:var(--secondary-color)]">
          Discover the journey of our brand and what makes us unique.
        </p>
        <Accordion data={impactData} />
      </section>

      <PremiumTabs />

      <div className="bg-gradient-to-b from-blue-50 to-blue-100 pt-4">
        <div className="text-center mt-16 mb-6">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-[var(--primary-color)] mb-4">
            Our Reach
          </h2>
        </div>
        <section className="py-6">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-3xl font-extrabold text-[var(--secondary-color)] mb-3">
              Buyer
            </h3>
            <Counter slides={buyerslides} />
          </div>
        </section>
        <section className="py-6">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-3xl font-extrabold text-[var(--secondary-color)] mb-3">
              Vendor
            </h3>
            <Counter slides={vendorslides} />
          </div>
        </section>
      </div>

      {/* Future Vision */}
      <section className="px-4 md:px-8 lg:px-12 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 text-[color:var(--primary-color)]">
            Our Future Vision
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-8">
            Expanding our global reach while staying true to our roots. We aim
            to be the go-to destination for luxury Kashmiri crafts, offering
            customers an authentic, sustainable, and impactful shopping
            experience through new crafts, custom offerings, and global
            partnerships.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="bg-white rounded-lg p-6 shadow-lg flex-1 max-w-xs">
              <h3 className="text-xl font-bold text-[color:var(--primary-color)] mb-2">
                Expand Globally
              </h3>
              <p className="text-gray-700 text-sm">
                Reaching new markets worldwide
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg flex-1 max-w-xs">
              <h3 className="text-xl font-bold text-[color:var(--primary-color)] mb-2">
                New Crafts
              </h3>
              <p className="text-gray-700 text-sm">
                Introducing more Kashmiri traditions
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg flex-1 max-w-xs">
              <h3 className="text-xl font-bold text-[color:var(--primary-color)] mb-2">
                Custom Excellence
              </h3>
              <p className="text-gray-700 text-sm">
                Expanding bespoke offerings
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <ScrollSection /> */}
      <BusinessLocation />
      <Location />
    </div>
  );
}

export default page;
