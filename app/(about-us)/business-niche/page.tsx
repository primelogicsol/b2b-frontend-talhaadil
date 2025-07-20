import VerticalHeroSlider from "@/components/Essentials/VerticalBanner"
import Accordion from "@/components/Material/Accordion"
import Counter from "@/components/Material/Counter"
import PremiumTabs from "@/components/Material/PremiumTabs"
import ScrollSection from "@/components/Section/ScrollSection"
import {  Shirt, Palette, Scissors, TreePine, Settings } from "lucide-react"
function page() {
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
          Each piece represents centuries of perfected tradition and cultural heritage
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Pashmina Shawls */}
          <div className="bg-gradient-to-br from-[color:var(--primary-color)] to-[color:var(--primary-hover-color)] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 mx-auto">
              <Shirt className="text-[color:var(--primary-color)] w-12 h-12" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 text-center h-16 flex items-center justify-center">
              Pashmina Shawls
            </h3>
            <p className="text-gray-200 text-center leading-relaxed">
              Luxurious shawls from finest Pashmina wool, combining timeless tradition with modern design for
              exceptional softness and warmth.
            </p>
          </div>

          {/* Papier Mâché */}
          <div className="bg-gradient-to-br from-[color:var(--primary-color)] to-[color:var(--primary-hover-color)] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 mx-auto">
              <Palette className="text-[color:var(--secondary-color)] w-12 h-12" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 text-center h-16 flex items-center justify-center">
              Papier Mâché Art
            </h3>
            <p className="text-gray-200 text-center leading-relaxed">
              Intricate hand-painted decorative pieces with vibrant traditional motifs that tell stories of Kashmir's
              rich cultural heritage.
            </p>
          </div>

          {/* Kani Weaving */}
          <div className="bg-gradient-to-br from-[color:var(--primary-color)] to-[color:var(--primary-hover-color)] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 mx-auto">
              <Scissors className="text-[color:var(--primary-color)] w-12 h-12" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 text-center h-16 flex items-center justify-center">
              Kani Weaving
            </h3>
            <p className="text-gray-200 text-center leading-relaxed">
              Traditional method creating intricate patterns using wooden combs, producing exquisite shawls, stoles, and
              scarves.
            </p>
          </div>

          {/* Wood Carving */}
          <div className="bg-gradient-to-br from-[color:var(--primary-color)] to-[color:var(--primary-hover-color)] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 mx-auto">
              <TreePine className="text-[color:var(--secondary-color)] w-12 h-12" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 text-center h-16 flex items-center justify-center">
              Wood Carving
            </h3>
            <p className="text-gray-200 text-center leading-relaxed">
              Beautifully detailed furniture, jewelry boxes, and home décor pieces rooted in Kashmir's artistic history
              and tradition.
            </p>
          </div>

          {/* Custom Crafting */}
          <div className="bg-gradient-to-br from-[color:var(--primary-color)] to-[color:var(--primary-hover-color)] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 md:col-span-2 lg:col-span-1">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 mx-auto">
              <Settings className="text-[color:var(--primary-color)] w-12 h-12" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 text-center h-16 flex items-center justify-center">
              Custom Crafting
            </h3>
            <p className="text-gray-200 text-center leading-relaxed">
              Personalized designs and bespoke creations tailored to your unique tastes and preferences with authentic
              craftsmanship.
            </p>
          </div>
            {/* Kani Weaving */}
          <div className="bg-gradient-to-br from-[color:var(--primary-color)] to-[color:var(--primary-hover-color)] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 mx-auto">
              <Scissors className="text-[color:var(--primary-color)] w-12 h-12" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 text-center h-16 flex items-center justify-center">
              Kani Weaving
            </h3>
            <p className="text-gray-200 text-center leading-relaxed">
              Traditional method creating intricate patterns using wooden combs, producing exquisite shawls, stoles, and
              scarves.
            </p>
          </div>
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
            Standing out in the handmade crafts market through authenticity and ethical practices
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-[color:var(--secondary-color)]">
              <h3 className="text-2xl font-bold text-[color:var(--primary-color)] mb-4">Authenticity & Tradition</h3>
              <p className="text-gray-700 leading-relaxed">
                Only authentic Kashmiri crafts made by artisans who have inherited techniques through generations. Each
                item carries the story of the land and culture.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-[color:var(--secondary-color)]">
              <h3 className="text-2xl font-bold text-[color:var(--primary-color)] mb-4">Fair Trade & Empowerment</h3>
              <p className="text-gray-700 leading-relaxed">
                Ensuring fair wages, training access, and global showcase opportunities for artisans, creating
                sustainable livelihoods for families.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-[color:var(--secondary-color)]">
              <h3 className="text-2xl font-bold text-[color:var(--primary-color)] mb-4">Sustainability Focus</h3>
              <p className="text-gray-700 leading-relaxed">
                Eco-friendly materials and sustainable crafting practices ensure minimal environmental footprint while
                preserving traditional methods.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-[color:var(--secondary-color)]">
              <h3 className="text-2xl font-bold text-[color:var(--primary-color)] mb-4">Global Reach, Local Impact</h3>
              <p className="text-gray-700 leading-relaxed">
                Connecting Kashmiri artisans to global markets while providing employment, education, and healthcare
                support to local communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Market */}
      <section className="px-4 md:px-8 lg:px-12 py-20 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-center mb-4">Our Global Audience</h2>
          <p className="text-center text-lg mb-16 max-w-3xl mx-auto opacity-90">
            Serving customers who value authenticity, tradition, and ethical business practices
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-3xl">💎</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Luxury Shoppers</h3>
              <p className="text-sm opacity-90">
                High-end customers seeking exclusive, luxurious products with timeless beauty
              </p>
            </div>

            <div className="text-center p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-3xl">🏛️</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Cultural Enthusiasts</h3>
              <p className="text-sm opacity-90">Passionate about preserving traditions and rich cultural heritage</p>
            </div>

            <div className="text-center p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-3xl">🌱</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Eco-Conscious Buyers</h3>
              <p className="text-sm opacity-90">Prioritizing sustainable products and ethical business practices</p>
            </div>

            <div className="text-center p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-3xl">🎁</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Gift & Décor Shoppers</h3>
              <p className="text-sm opacity-90">Seeking unique gifts and luxury home décor statement pieces</p>
            </div>
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
        <Accordion />
      </section>

      <PremiumTabs />

      <div className="bg-gradient-to-b from-blue-50 to-blue-100 pt-4">
        <div className="text-center mt-16 mb-6">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-[var(--primary-color)] mb-4">Our Reach</h2>
        </div>
        <section className="py-6">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-3xl font-extrabold text-[var(--secondary-color)] mb-3">Vendors</h3>
            <Counter />
          </div>
        </section>
        <section className="py-6">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-3xl font-extrabold text-[var(--secondary-color)] mb-3">Buyers</h3>
            <Counter />
          </div>
        </section>
      </div>

      {/* Future Vision */}
      <section className="px-4 md:px-8 lg:px-12 py-20 bg-gradient-to-r from-orange-50 to-red-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 text-[color:var(--primary-color)]">
            Our Future Vision
          </h2>
          <p className="text-lg sm:text-xl text-[color:var(--secondary-color)] leading-relaxed mb-8">
            Expanding our global reach while staying true to our roots. We aim to be the go-to destination for luxury
            Kashmiri crafts, offering customers an authentic, sustainable, and impactful shopping experience through new
            crafts, custom offerings, and global partnerships.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="bg-white rounded-lg p-6 shadow-lg flex-1 max-w-xs">
              <h3 className="text-xl font-bold text-[color:var(--primary-color)] mb-2">Expand Globally</h3>
              <p className="text-[color:var(--secondary-color)] text-sm">Reaching new markets worldwide</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg flex-1 max-w-xs">
              <h3 className="text-xl font-bold text-[color:var(--primary-color)] mb-2">New Crafts</h3>
              <p className="text-[color:var(--secondary-color)] text-sm">Introducing more Kashmiri traditions</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg flex-1 max-w-xs">
              <h3 className="text-xl font-bold text-[color:var(--primary-color)] mb-2">Custom Excellence</h3>
              <p className="text-[color:var(--secondary-color)] text-sm">Expanding bespoke offerings</p>
            </div>
          </div>
        </div>
      </section>

      <ScrollSection />
    </div>
  )
}

export default page
