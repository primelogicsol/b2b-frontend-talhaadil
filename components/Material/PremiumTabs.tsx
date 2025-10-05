"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useGlobalContext } from "../../context/ScreenProvider"
const tabData = {
  brickStores: {
    title: "Brick Stores",
    cards: [
      {
        title: "Store Share",
        points: [
          "Luxury boutiques revenue totals $12.8B",
          "Design studios revenue totals $9.6B",
          "Artisan galleries revenue totals $6.4B",
          "Heritage shops revenue totals $3.2B",
        ],
      },
      {
        title: "Store Data",
        points: [
          "Mall locations bring in about 45% sales",
          "Downtown store locations hold 25% share",
          "Cultural districts provide 20% of sales",
          "Suburban outlets bring in 10% of revenue",
        ],
      },
      {
        title: "Ops Metrics",
        points: [
          "Sales per square foot reach about $850",
          "Stock turnover occurs four times a year",
          "Customer conversion stands at near 4.2%",
          "Average basket value is around $280 now",
        ],
      },
      {
        title: "Key Factors",
        points: [
          "Footfall conversion stays near 35 percent",
          "Display effectiveness holds near 42 value",
          "Staff productivity hits $1,200 each day",
          "Space utilization reaches about 85 percent",
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
          "Online imported crafts revenue is $28B",
          "Digital platforms dominate major sales",
          "Cross‑border payments widely supported",
          "Returns logistics fully standardized now",
        ],
      },
      {
        title: "Sales Data",
        points: [
          "Marketplace share is valued at $16.8B",
          "Direct website sales reach about $8.4B",
          "Social commerce channels reach $2.8B",
          "Mobile sales growth is around forty five",
        ],
      },
      {
        title: "Ops Metrics",
        points: [
          "Cart conversion stands at near 53.2%",
          "Average order value holds at $180 here",
          "Return rate recorded at about twelve %",
          "Customer retention stays near sixty eight",
        ],
      },
      {
        title: "Acquire Cost",
        points: [
          "Paid search cost is $322 per customer",
          "Social media cost is $218 per customer",
          "Email marketing cost is $108 per client",
          "Referral program cost is $72 per client",
        ],
      },
    ],
  },

  consignMarket: {
    title: "Consign Market",
    cards: [
      {
        title: "Share Data",
        points: [
          "Premium crafts revenue totals near $12.8B",
          "Mid‑range products revenue totals $9B",
          "Artisanal pieces revenue totals $6.4B",
          "Heritage items revenue totals $3.2B",
        ],
      },
      {
        title: "Channel Data",
        points: [
          "High‑end boutiques hold about 45% share",
          "Design galleries hold about 25% market",
          "Museum stores contribute a solid 20% now",
          "Specialty shops capture about 10% share",
        ],
      },
      {
        title: "Ops Metrics",
        points: [
          "Sell‑through rate stands at around 75%",
          "Average markup recorded at near 2.8×",
          "Return rate measured low at only 5%",
          "Inventory turns occur about 4× yearly",
        ],
      },
      {
        title: "Category Wins",
        points: [
          "Textile products reach around 82 percent",
          "Decorative items reach about 78 percent",
          "Home furnishings hold around 72 percent",
          "Personal accessories near 68 percent now",
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
          "Trade shows bring in about $180M total",
          "Craft fairs bring in around $135M value",
          "Gallery events bring in about $90M total",
          "Pop‑up events bring in around $45M value",
        ],
      },
      {
        title: "Channel Data",
        points: [
          "Marketplaces drive about $4.8B revenue",
          "Craft platforms reach around $3.6B value",
          "Direct websites reach about $2.4B share",
          "Social commerce earns near $1.2B sales",
        ],
      },
      {
        title: "Ops Metrics",
        points: [
          "Conversion rate stands at near 4.2%",
          "Average order value holds at $280 now",
          "Return rate recorded at around 8%",
          "Repeat purchase stands at 65 percent",
        ],
      },
      {
        title: "Success Data",
        points: [
          "Customer retention stands at 72 percent",
          "Brand loyalty measures around 68 percent",
          "Satisfaction rating stands at 4.6 of 5",
          "Review rating remains high at 4.8 of 5",
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
          "US imports total recorded at $42 billion",
          "Handmade segment valued at $18.2B now",
          "Premium crafts revenue totals near $8.4B",
          "Growth rate measured near 15% yearly up",
        ],
      },
      {
        title: "Platform Data",
        points: [
          "Marketplace conversion stays at 4.2%",
          "Average session length hits 8.5 mins",
          "Basket completion stands at 65 percent",
          "Mobile traffic holds near 72 percent now",
        ],
      },
      {
        title: "Ops Metrics",
        points: [
          "Order fulfillment measured at ninety six",
          "Shipping time averages around 12 days",
          "Return rate recorded at around 8 percent",
          "Inventory turnover occurs about 4× yearly",
        ],
      },
      {
        title: "Conversion Data",
        points: [
          "First‑time buyers reach near 2.8 percent",
          "Repeat customers stand at 4.5 percent",
          "Cart abandonment stays at 68 percent",
          "Recovery rate stands at 25 percent now",
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
          "Premium malls hold share of about $5.4B",
          "Downtown locations bring near $3B sales",
          "Design districts reach around $1.8B now",
          "Cultural centers hold near $1.2B figure",
        ],
      },
      {
        title: "Sales Data",
        points: [
          "Sales per sqft range from $850 to $1200",
          "Conversion rate stands at near 4.8%",
          "Average basket ranges $280 to $450 now",
          "Customer dwell time averages 28 minutes",
        ],
      },
      {
        title: "Ops Metrics",
        points: [
          "Inventory turnover occurs near 6× yearly",
          "Gross margin recorded near 65 to 70%",
          "Operating costs remain near thirty five",
          "Staff productivity hits $1,200 per day",
        ],
      },
      {
        title: "Location Data",
        points: [
          "High street stores reach $1.8M each year",
          "Mall locations average near $2.2M yearly",
          "Design districts reach $1.5M each year",
          "Cultural zones reach $1.2M each year",
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
          "Live auctions revenue totals about $18B",
          "Online bidding revenue totals about $12B",
          "Hybrid events revenue totals about $8B",
          "Private sales revenue totals about $4B",
        ],
      },
      {
        title: "Bid Metrics",
        points: [
          "Opening bid conversion stays near 65%",
          "Price escalation stands at around 35%",
          "Buyer participation is 18 per lot now",
          "Completion rate measured at 82 percent",
        ],
      },
      {
        title: "Category Data",
        points: [
          "Premium carpets value near $850 a sqft",
          "Artisan textiles value $280 each piece",
          "Heritage crafts value $1,200 per item",
          "Designer craft value $3,500 per item",
        ],
      },
      {
        title: "Success Data",
        points: [
          "First auction success hits 72 percent",
          "Repeat buyer rate stands at 85 percent",
          "Cross‑category bidding near 45 percent",
          "Seasonal performance is 28 percent now",
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
          "Handcraft commands an added forty five%",
          "Quality rating recorded high at 4.8 of 5",
          "Traditional crafts valued near ninety two",
          "Premium crafts growth hits fifteen point five",
        ],
      },
      {
        title: "Authentic Edge",
        points: [
          "Verification demand increases by eighty five",
          "Design premium stands strong at sixty five",
          "Unique pieces count reaches forty two now",
          "Authentication adds about thirty five value",
        ],
      },
      {
        title: "Heritage Pull",
        points: [
          "Heritage demand grows around twenty eight",
          "Storytelling engages buyers by fifty five",
          "Traditional designs lead by sixty eight now",
          "Cultural education reaches seventy five here",
        ],
      },
      {
        title: "Ethical Trend",
        points: [
          "Sustainable premium rises by forty percent",
          "Ethical sourcing stands at eighty two value",
          "Carbon awareness reaches seventy five percent",
          "Fair trade adds value of around forty five",
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
          "Urban professionals make up forty five %",
          "Design enthusiasts form twenty eight %",
          "Cultural collectors make up seventeen %",
          "Conscious consumers account for ten %",
        ],
      },
      {
        title: "Age Data",
        points: [
          "Ages thirty five to forty five hold 40%",
          "Ages forty six to fifty five hold 30%",
          "Ages twenty five to thirty four hold 20%",
          "Ages fifty six and above hold 10%",
        ],
      },
      {
        title: "Region Data",
        points: [
          "Northeast buyers account for thirty five",
          "West Coast buyers account for thirty now",
          "Southeast buyers account for twenty %",
          "Midwest buyers account for fifteen %",
        ],
      },
      {
        title: "Purchase Mode",
        points: [
          "Online shoppers account for forty five %",
          "Store visitors account for thirty now",
          "Exhibition buyers account for fifteen %",
          "Auction participants account for ten %",
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
          "Single regulatory framework in operation",
          "Unified logistics system in deployment",
          "Consistent consumer behavior is noticed",
          "Streamlined marketing helps the market",
        ],
      },
      {
        title: "Premium Edge",
        points: [
          "Higher profit margins are well achieved",
          "Better quality recognition is secured",
          "Stronger brand positioning is noted",
          "Simplified authentication is applied",
        ],
      },
      {
        title: "Market Growth",
        points: [
          "Deep penetration of the target market",
          "Niche dominance within product areas",
          "Better relationships with consumers",
          "Controlled growth across all sectors",
        ],
      },
      {
        title: "Size Scope",
        points: [
          "Massive market with much opportunity",
          "Untapped potential remains available",
          "Small current share leaves growth room",
          "Huge growth room still existing here",
        ],
      },
    ],
  },
}

export default function PremiumTabs() {
  const { is4K } = useGlobalContext();
  const [activeTab, setActiveTab] = useState("brickStores");
  const [tabIndex, setTabIndex] = useState(0);

  const tabs = Object.entries(tabData);
  const totalTabs = tabs.length;

  const handlePrevTab = () => {
    setTabIndex((prev) => (prev === 0 ? totalTabs - 1 : prev - 1));
    setActiveTab(tabs[tabIndex === 0 ? totalTabs - 1 : tabIndex - 1][0]);
  };

  const handleNextTab = () => {
    setTabIndex((prev) => (prev === totalTabs - 1 ? 0 : prev + 1));
    setActiveTab(tabs[tabIndex === totalTabs - 1 ? 0 : tabIndex + 1][0]);
  };

  return (
    <div className={`${is4K ? "p-6 md:p-12 lg:p-20" : "p-3 md:p-6 lg:p-10"} min-w-[280px]`}>
      <div className={`${is4K ? "max-w-[2000px]" : "max-w-6xl"} mx-auto`}>
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1
            className={`text-xl xs:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 text-[var(--secondary-color)]`}
          >
            North American Handicraft Business Insights
          </h1>
          <p
            className={`text-base xs:text-lg md:text-xl lg:text-2xl text-center px-2 text-gray-700 ${is4K ? "max-w-4xl" : "max-w-3xl"} mx-auto leading-relaxed`}
          >
            Actionable Data and Market Strategies to Guide Smarter Trade Decisions
          </p>
        </motion.div>

        {/* Tab Navigation with Arrows */}
        <motion.div
          className="flex items-center justify-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <button
            onClick={handlePrevTab}
            className={`p-2 rounded-full bg-[var(--primary-color)] text-white shadow-md hover:bg-[var(--primary-hover-color)] transition-all duration-300 ${is4K ? "mr-6" : "mr-4"}`}
            aria-label="Previous tab"
          >
            <svg
              className={`${is4K ? "w-8 h-8" : "w-6 h-6"}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div 
            className={`flex bg-transparent justify-center items-center rounded-full w-full max-w-[300px] xs:max-w-[400px] md:max-w-[500px]`}
           
          >
            <motion.button
              onClick={() => setActiveTab(tabs[tabIndex][0])}
              className={`relative ${is4K ? "px-6 py-4 text-base" : "px-6 py-4 text-sm"} rounded-full font-semibold transition-all duration-300 flex items-center justify-center w-full text-white`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{
                background: "linear-gradient(to right, var(--secondary-color), var(--secondary-hover-color))",
              }}
            >
              <span className="relative z-10 flex items-center justify-center">
                {tabs[tabIndex][1].title}
              </span>
            </motion.button>
          </div>

          <button
            onClick={handleNextTab}
            className={`p-2 rounded-full bg-[var(--primary-color)] text-white shadow-md hover:bg-[var(--primary-hover-color)] transition-all duration-300 ${is4K ? "ml-6" : "ml-4"}`}
            aria-label="Next tab"
          >
            <svg
              className={`${is4K ? "w-8 h-8" : "w-6 h-6"}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </motion.div>

        {/* Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {tabData[activeTab].cards.map((card, index) => (
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
                className={`rounded-2xl shadow-xl ${is4K ? "p-8" : "p-6"} border transition-all duration-300 group cursor-pointer relative overflow-hidden`}
                style={{
                  backgroundColor: "var(--primary-color)",
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
                  <div className={`flex items-center gap-3 ${is4K ? "mb-6" : "mb-4"}`}>
                    <h3
                      className={`${is4K ? "text-xl" : "text-lg"} font-bold text-gray-100 transition-colors duration-300`}
                    >
                      {card.title}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {card.points.map((point, pointIndex) => (
                      <motion.li
                        key={pointIndex}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + pointIndex * 0.05 }}
                        className={`flex items-start gap-2 text-gray-100`}
                      >
                        <motion.div
                          className={`${is4K ? "w-2.5 h-2.5" : "w-2 h-2"} rounded-full mt-1`}
                          style={{
                            background: "white",
                          }}
                        />
                        <span className={`${is4K ? "text-base" : "text-sm"} leading-relaxed -mt-1`}>{point}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}