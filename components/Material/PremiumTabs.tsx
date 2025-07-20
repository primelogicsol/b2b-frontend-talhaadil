"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
const tabData = {
   brickStores: {
    title: "Brick Stores",
    cards: [
      {
        title: "Store Share",
        points: [
          "Luxury boutiques: $12.8B",
          "Design studios: $9.6B",
          "Artisan galleries: $6.4B",
          "Heritage shops: $3.2B",
        ],
      },
      {
        title: "Location Data",
        points: [
          "Mall locations: 45% revenue",
          "Downtown stores: 25% sales",
          "Cultural districts: 20% share",
          "Suburban outlets: 10%",
        ],
      },
      {
        title: "Ops Metrics",
        points: [
          "Sales per sqft: $850",
          "Stock turnover: 4× yearly",
          "Customer conversion: 4.2%",
          "Average basket: $280",
        ],
      },
      {
        title: "Key Factors",
        points: [
          "Footfall conversion: 35%",
          "Display effectiveness: 42%",
          "Staff productivity: $1,200/day",
          "Space utilization: 85%",
        ],
      },
    ],
  },
  onlineMarket: {

    title: "Online Market",
    cards: [
      {
        title: "Share Sales",
        points: [
          "Online imported crafts: $28B",
          "Digital platforms lead sales",
          "Cross‑border payments",
          "Returns logistics standardized",
        ],
      },
      {
        title: "Performance Data",
        points: [
          "Marketplace share: $16.8B (60%)",
          "Direct website: $8.4B (30%)",
          "Social commerce: $2.8B (10%)",
          "Mobile sales growth: 45%",
        ],
      },
      {
        title: "Ops Metrics",
        points: [
          "Cart conversion: 53.2%",
          "Average order: $180",
          "Return rate: 12%",
          "Customer retention: 68%",
        ],
      },
      {
        title: "Acquire Cost",
        points: [
          "Paid search: $322/customer",
          "Social media: $218/customer",
          "Email marketing: $108/customer",
          "Referral program: $72/customer",
        ],
      },
    ],
  },
 
  consignMarket: {
    title: "Consign Market",
    cards: [
      {
        title: "Segment Share",
        points: [
          "Premium crafts: $12.8B (40%)",
          "Mid‑range products: $9B (30%)",
          "Artisanal pieces: $6.4B (20%)",
          "Heritage items: $3.2B (10%)",
        ],
      },
      {
        title: "Channel Data",
        points: [
          "High‑end boutiques: 45%",
          "Design galleries: 25%",
          "Museum stores: 20%",
          "Specialty shops: 10%",
        ],
      },
      {
        title: "Ops Metrics",
        points: [
          "Sell‑through rate: 75%",
          "Average markup: 2.8× cost",
          "Return rate: 5%",
          "Inventory turns: 4× annually",
        ],
      },
      {
        title: "Category Wins",
        points: [
          "Textile products: 82%",
          "Decorative items: 78%",
          "Home furnishings: 72%",
          "Personal accessories: 68%",
        ],
      },
    ],
  },
  exhibitions: {
    title: "Exhibitions Insight",
    cards: [
      {
        title: "Event Share",
        points: [
          "Trade shows: $180M (40%)",
          "Craft fairs: $135M (30%)",
          "Gallery events: $90M (20%)",
          "Pop‑ups: $45M (10%)",
        ],
      },
      {
        title: "Channel Data",
        points: [
          "Marketplaces: $4.8B (40%)",
          "Craft platforms: $3.6B (30%)",
          "Direct websites: $2.4B (20%)",
          "Social commerce: $1.2B (10%)",
        ],
      },
      {
        title: "Ops Metrics",
        points: [
          "Conversion rate: 4.2%",
          "Average order: $280",
          "Return rate: 8%",
          "Repeat purchase: 65%",
        ],
      },
      {
        title: "Success Data",
        points: [
          "Customer retention: 72%",
          "Brand loyalty: 68%",
          "Satisfaction rate: 4.6/5",
          "Review rating: 4.8/5",
        ],
      },
    ],
  },
  importExport: {
    title: "Import Export",
    cards: [
      {
        title: "Trade Share",
        points: [
          "US imports total: $42B",
          "Handmade segment: $18.2B",
          "Premium crafts: $8.4B",
          "Growth rate: 15% annually",
        ],
      },
      {
        title: "Platform Data",
        points: [
          "Marketplace conversion: 4.2%",
          "Average session: 8.5 minutes",
          "Basket completion: 65%",
          "Mobile traffic: 72%",
        ],
      },
      {
        title: "Ops Metrics",
        points: [
          "Order fulfillment: 96%",
          "Shipping time: 12 days",
          "Return rate: 8%",
          "Inventory turnover: 4×",
        ],
      },
      {
        title: "Conversion Data",
        points: [
          "First‑time buyers: 2.8%",
          "Repeat customers: 4.5%",
          "Cart abandonment: 68%",
          "Recovery rate: 25%",
        ],
      },
    ],
  },
  franchiseMarket: {
    title: "Franchise Market",
    cards: [
      {
        title: "Site Share",
        points: [
          "Premium malls: 45% ($5.4B)",
          "Downtown locations: 30% ($3B)",
          "Design districts: 15% ($1.8B)",
          "Cultural centers: 10% ($1.2B)",
        ],
      },
      {
        title: "Sales Data",
        points: [
          "Sales per sqft: $850–$1200",
          "Conversion rate: 4.8%",
          "Average basket: $280–$450",
          "Customer dwell time: 28 min",
        ],
      },
      {
        title: "Ops Metrics",
        points: [
          "Inventory turnover: 6×/year",
          "Gross margin: 65–70%",
          "Operating costs: 35%",
          "Staff productivity: $1,200/day",
        ],
      },
      {
        title: "Location Data",
        points: [
          "High street stores: $1.8M/year",
          "Mall locations: $2.2M/year",
          "Design district: $1.5M/year",
          "Cultural zones: $1.2M/year",
        ],
      },
    ],
  },
  b2bAuctions: {
    title: "B2B Auctions",
    cards: [
      {
        title: "Auction Value",
        points: [
          "Live auctions: $18B",
          "Online bidding: $12B",
          "Hybrid events: $8B",
          "Private sales: $4B",
        ],
      },
      {
        title: "Bid Metrics",
        points: [
          "Opening bid conversion: 65%",
          "Price escalation: 35%",
          "Buyer participation: 18/lot",
          "Completion rate: 82%",
        ],
      },
      {
        title: "Category Data",
        points: [
          "Premium carpets: $850/sqft",
          "Artisan textiles: $280/piece",
          "Heritage crafts: $1,200/item",
          "Designer craft: $3,500/item",
        ],
      },
      {
        title: "Success Data",
        points: [
          "First auction success: 72%",
          "Repeat buyer rate: 85%",
          "Cross‑category bidding: 45%",
          "Seasonal performance: 28%",
        ],
      },
    ],
  },
  buyerBehavior: {
    title: "Buyer Behavior",
    cards: [
      {
        title: "Artistry Value",
        points: [
          "Handcraft commands: +45%",
          "Quality rating: 4.8/5",
          "Traditional crafts valued: 92%",
          "Premium crafts growth: 15.5%",
        ],
      },
      {
        title: "Authentic Edge",
        points: [
          "Verification demand: +85%",
          "Design premium: 65%",
          "Unique pieces: 42%",
          "Authentication adds: 35% value",
        ],
      },
      {
        title: "Heritage Pull",
        points: [
          "Heritage demand: +28%",
          "Storytelling engages: +55%",
          "Traditional designs lead: 68%",
          "Cultural education reaches: 75%",
        ],
      },
      {
        title: "Ethical Trend",
        points: [
          "Sustainable premium: +40%",
          "Ethical sourcing: 82%",
          "Carbon awareness: 75%",
          "Fair trade adds: 45%",
        ],
      },
    ],
  },
  buyerDemography: {
    title: "Buyer Demography",
    cards: [
      {
        title: "Consumer Mix",
        points: [
          "Urban professionals: 45%",
          "Design enthusiasts: 28%",
          "Cultural collectors: 17%",
          "Conscious consumers: 10%",
        ],
      },
      {
        title: "Age Data",
        points: [
          "Ages 35–45: 40%",
          "Ages 46–55: 30%",
          "Ages 25–34: 20%",
          "Ages 56+: 10%",
        ],
      },
      {
        title: "Region Data",
        points: [
          "Northeast: 35%",
          "West Coast: 30%",
          "Southeast: 20%",
          "Midwest: 15%",
        ],
      },
      {
        title: "Purchase Mode",
        points: [
          "Online shoppers: 45%",
          "Store visitors: 30%",
          "Exhibition buyers: 15%",
          "Auction participants: 10%",
        ],
      },
    ],
  },
  businessEase: {
    title: "Business Ease",
    cards: [
      {
        title: "Market Focus",
        points: [
          "Single regulatory framework",
          "Unified logistics system",
          "Consistent consumer behavior",
          "Streamlined marketing",
        ],
      },
      {
        title: "Premium Edge",
        points: [
          "Higher profit margins",
          "Better quality recognition",
          "Stronger brand positioning",
          "Simplified authentication",
        ],
      },
      {
        title: "Market Growth",
        points: [
          "Deep penetration",
          "Niche dominance",
          "Better relationships",
          "Controlled growth",
        ],
      },
      {
        title: "Size Scope",
        points: [
          "Massive market",
          "Untapped potential",
          "Small current share",
          "Huge growth room",
        ],
      },
    ],
  },
};


export default function PremiumTabs() {
  const [activeTab, setActiveTab] = useState("brickStores")

  return (
    <div
      className="p-4 md:p-8 lg:p-12"
      style={{
        background: "linear-gradient(to bottom right,var(--primary-color),var(--primary-hover-color),var(--primary-light-text-color)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1
            className="text-5xl md:text-6xl font-bold mb-6 text-[var(--secondary-color)] "
          
          >
           Business Insights
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Actionable Data and Strategies to Guide Smarter Decisions
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div
            className="flex gap-2 p-2 rounded-full shadow-lg border overflow-x-auto no-scrollbar"
            style={{
              backgroundColor: "white",
              borderColor: "var(--primary-light-text-color)",
            }}
          >
            {Object.entries(tabData).map(([key, data]) => {
              return (
                <motion.button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`relative px-6 py-3 rounded-full font-semibold transition-all duration-300 whitespace-nowrap flex items-center gap-2 text-sm ${
                    activeTab === key
                      ? "text-white shadow-lg"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    background:
                      activeTab === key
                        ? "linear-gradient(to right, var(--secondary-color), var(--secondary-hover-color))"
                        : "transparent",
                  }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {data.title}
                  </span>
                </motion.button>
              )
            })}
          </div>
        </motion.div>

        {/* Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {tabData[activeTab as keyof typeof tabData].cards.map((card, index) => {
              return (
                <motion.div
                  key={`${card.title}-${index}`}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.5,
                    type: "spring",
                    bounce: 0.3,
                  }}
                  whileHover={{
                    scale: 1.03,
                    y: -8,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                  }}
                  className="rounded-2xl shadow-xl p-8 border transition-all duration-300 group cursor-pointer relative overflow-hidden"
                  style={{
                    backgroundColor: "white",
                    borderColor: "var(--primary-light-text-color)",
                  }}
                >
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: "",
                    }}
                    initial={false}
                  />
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                     
                      <h3 className="text-xl font-bold text-gray-500 group-hover:text-[var(--primary-color)] transition-colors duration-300">
                        {card.title}
                      </h3>
                    </div>
                    <ul className="space-y-3">
                      {card.points.map((point, pointIndex) => (
                        <motion.li
                          key={pointIndex}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 + pointIndex * 0.05 }}
                          className="flex items-start gap-3 text-gray-600"
                        >
                          <motion.div
                            className="w-2 h-2 rounded-full mt-2"
                            style={{
                              background: "linear-gradient(to right, var(--primary-color), var(--secondary-hover-color))",
                            }}
                          />
                          <span className="text-sm leading-relaxed">{point}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </AnimatePresence>

      
      </div>
    </div>
  )
}