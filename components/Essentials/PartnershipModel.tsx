import { Package, Handshake, GalleryVertical, Globe, Building, Store, Network, Gem } from "lucide-react"

export default function PartnershipModel() {
  const partnershipModels = [
    {
      model: "Drop Shipping",
      purpose:
        "Plug into our supply chain. Sell authentic Kashmiri crafts directly from verified vendors without inventory.",
      icon: Package,
    },
    {
      model: "Consignment",
      purpose: "Partner with Kashmir’s top artisan cooperatives for a flexible sales model built on mutual trust.",
      icon: Handshake,
    },
    {
      model: "Exhibition",
      purpose: "Showcase or source authentic Kashmiri collections at international design expos and art fairs.",
      icon: GalleryVertical,
    },
    {
      model: "Import Export",
      purpose: "Source certified, high-quality Kashmiri crafts for wholesale, retail, or gallery curation.",
      icon: Globe,
    },
    {
      model: "Subsidiary",
      purpose:
        "Launch strategic extensions of Kashmiri craft businesses into the U.S. via our business infrastructure.",
      icon: Building,
    },
    {
      model: "Brick & Mortar",
      purpose: "Co-develop physical craft stores in the U.S. — blending heritage with high-street elegance.",
      icon: Store,
    },
    {
      model: "Franchise",
      purpose: "Expand pre-verified Kashmiri craft brands into your region with full support and backend integration.",
      icon: Network,
    },
    {
      model: "Luxury Auction",
      purpose:
        "Access our private bidding platform for elite collectors and luxury retail. Rare, museum-grade pieces only.",
      icon: Gem,
    },
  ]

  return (
    <section className="py-8 md:py-12 bg-background text-foreground">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary-color)]">
            Our Strategic Partnership Models
          </h2>
          <p className="mt-2 text-lg text-[var(--secondary-color)]">
           Avail Opportunity for 7-Year Progessive Partnership Journey With Us
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          {partnershipModels.map((model, index) => (
            <div
              key={index}
              className="flex flex-col h-full rounded-lg border-2 border-[var(--primary-color)] bg-card text-card-foreground shadow-sm
                         hover:border-[var(--primary-color)] transition-colors duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <div className="flex flex-col items-center text-center p-6 pb-4 min-h-[120px] justify-center">
                <model.icon className="w-10 h-10 mb-4 text-[var(--secondary-color)]" />
                <h3 className="text-xl font-semibold text-[var(--primary-color)]">{model.model}</h3>
              </div>
              <div className="flex-grow p-6 pt-0 min-h-[100px] flex items-center justify-center">
                <p className="text-center text-[var(--primary-color)]">{model.purpose}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
