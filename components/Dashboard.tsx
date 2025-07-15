"use client"
import {
  DollarSign,
  Globe,
  Users,
  TrendingUp,
  Award,
  Target,
  Package,
  Scale,
  Heart,
  Clock,
  Zap,
  Star,
} from "lucide-react"
import MetricCard from "./MetricCard"
import ProductList from "./ProductList"
import GlobeBackground from "./GlobeBackground"

const metricsLeft = [
  { icon: DollarSign, title: "Annual Revenue", value: "$160M+" },
  { icon: Globe, title: "Global Export", value: "78%" },
  { icon: Users, title: "Artisans", value: "88000+" },
  { icon: TrendingUp, title: "Market Growth", value: "17% YoY" },
  { icon: Award, title: "Quality Rating", value: "4.8/5" },
  { icon: Target, title: "Sustainability", value: "96%" },
]

const metricsRight = [
  { icon: Package, title: "Market Share", value: "30%" },
  { icon: Scale, title: "Product Range", value: "80+" },
  { icon: Heart, title: "Customer Satisfaction", value: "97%" },
  { icon: Clock, title: "Avg Production Time", value: "60 Days" },
  { icon: Zap, title: "Energy Efficiency", value: "93%" },
  { icon: Star, title: "Innovation Index", value: "4.6/5" },
]

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
]

export default function Dashboard() {
  return (
    <div className="relative min-h-screen bg-dark-blue text-light-text flex flex-col items-center justify-center p-4 overflow-hidden">
      <GlobeBackground />

      {/* Main Card Container */}
      <div className="relative z-10 bg-dark-card p-8 rounded-3xl shadow-2xl max-w-7xl w-full mx-auto my-8 border border-gray-700">
        {/* Card Header */}
        <header className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2">Boutique Insights</h1>
          <p className="text-xl md:text-2xl text-muted-text">Kashmir India Sourced</p>
        </header>

        {/* Content Grid within the card */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          {/* Left Metrics Column */}
          <div className="grid grid-cols-1 gap-6">
            {metricsLeft.map((metric, index) => (
              <MetricCard key={index} {...metric} />
            ))}
          </div>

          {/* Product List Center */}
          <div className="min-h-[400px] flex">
            <ProductList products={products} />
          </div>

          {/* Right Metrics Column */}
          <div className="grid grid-cols-1 gap-6">
            {metricsRight.map((metric, index) => (
              <MetricCard key={index} {...metric} />
            ))}
          </div>
        </div>
      </div>

      {/* Custom Scrollbar Styles for ProductList */}
      <style jsx global>{`
            .custom-scrollbar::-webkit-scrollbar {
              width: 8px;
            }
            .custom-scrollbar::-webkit-scrollbar-track {
              background: #2d3748; /* dark-card */
              border-radius: 10px;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb {
              background: #4a5568; /* slightly lighter dark-card */
              border-radius: 10px;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb:hover {
              background: #ff7e00; /* accent-orange */
            }
          `}</style>
    </div>
  )
}
