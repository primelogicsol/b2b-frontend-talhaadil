import { Building, Layers, Package, Phone, Warehouse, Truck, Palette, Camera } from "lucide-react"

const locations = [
  {
    icon: Building,
    title: "Head Office",
    location: "USA, Virginia – Fairfax",
  },
  {
    icon: Layers,
    title: "Communications",
    location: "USA, Virginia Beach",
  },
  {
    icon: Package,
    title: "Regional USA",
    location: "USA, CA – Ridgecrest",
  },
  {
    icon: Phone,
    title: "Call Centre Office",
    location: "USA, Texas – Dallas",
  },
  {
    icon: Warehouse,
    title: "USA Warehouse",
    location: "Virginia – Front Royal",
  },
  {
    icon: Warehouse, // Using Warehouse for India Warehouse too
    title: "India Warehouse",
    location: "J & K – Srinagar",
  },
  {
    icon: Truck, // More specific for logistics
    title: "USA Logistics",
    location: "Illinois – Chicago",
  },
  {
    icon: Truck, // More specific for logistics
    title: "India Logistics",
    location: "Delhi – New Delhi",
  },
  {
    icon: Palette,
    title: "Design Studio",
    location: "J & K – Srinagar",
  },
  {
    icon: Camera,
    title: "Photo Studio",
    location: "J & K – Srinagar",
  },
]

const achievements = [
  "Fueling Expansion Through Operational Synergy Worldwide.",
  "Logistics Streamlined for Maximum Efficiency and Impact.",
  "Bridging Markets, Unlocking Potential, Delivering Growth.",
  "Innovative Foundations for Limitless Global Connectivity.",
  "Expanding Horizons, Strengthening Networks, Achieving Goals.",
]

export default function Location() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#1b4f68] text-center mb-12 leading-tight">
          Our Global Presence & Impact
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          {/* Left side: Grid of location items (horizontal strips) */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4">
            {locations.map((item, index) => (
              <div
                key={index}
                className="flex items-center p-4 rounded-xl shadow-md bg-white border border-transparent
                           hover:border-[#d85834] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-in-out cursor-pointer"
              >
                <item.icon className="w-8 h-8 text-[#d85834] flex-shrink-0 mr-4" />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-[#1b4f68]">{item.title}</h3>
                  <p className="text-sm text-[#346880]">{item.location}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right side: Bullet points */}
          <div className="lg:col-span-2 flex flex-col justify-center p-8 rounded-xl bg-[#e4e6eb] shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1b4f68] mb-6">Key Achievements</h2>
            <ul className="space-y-4">
              {achievements.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-[#0f172a]">
                  <span className="text-[#d85834] text-2xl leading-none font-bold">•</span>
                  <p className="flex-1 text-base md:text-lg">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
