"use client";

import {
  MapPin,
  Globe,
  Users,
  Building2,
  Truck,
  Phone,
  Heart,
} from "lucide-react";

export default function BusinessLocation() {
  return (
    <div className="min-h-screen bg-white">
      {/* Custom CSS Variables */}

      {/* Introduction */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-center sm:text-2xl md:text-3xl lg:text-4xl mb-8 sm:mb-12 md:mb-16 lg:mb-20 drop-shadow-md text-[var(--primary-color)] font-extrabold uppercase leading-tight">
              Our Location
            </h2>

            <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
              At De Koshur Crafts, we are committed to not just promoting
              Kashmiri craftsmanship, but also ensuring that local artisans have
              access to global markets. Our business footprint extends from the
              heart of Kashmir to the USA, India, and beyond, connecting
              traditional artistry with the modern world.
            </p>
          </div>
        </div>
      </section>

      {/* Headquarters Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Building2 className="w-8 h-8 text-[var(--secondary-color)] mr-3" />
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[var(--primary-color)]">
                  Headquarters: Washington, D.C. (USA)
                </h2>
              </div>
              <p className="text-gray-700 mb-8 text-sm md:text-base lg:text-lg leading-relaxed">
                De Koshur Crafts operates out of its headquarters in Washington,
                D.C., where we manage global operations, customer relations, and
                international partnerships. Our headquarters plays a critical
                role in supporting our artisans by managing logistics,
                marketing, and ensuring smooth operations across our
                international market.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-semibold text-[var(--primary-color)] mb-6">
                Key Functions:
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Truck className="w-6 h-6 text-[var(--secondary-color)] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-[var(--primary-light-text-color)] mb-1">
                      Operations & Logistics Management
                    </h4>
                    <p className="text-gray-600 text-sm md:text-base">
                      Overseeing the smooth delivery of products from Kashmir to
                      international markets.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Globe className="w-6 h-6 text-[var(--secondary-color)] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-[var(--primary-light-text-color)] mb-1">
                      International Sales & Partnerships
                    </h4>
                    <p className="text-gray-600 text-sm md:text-base">
                      Cultivating relationships with global retailers,
                      designers, and businesses to promote Kashmiri crafts
                      worldwide.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-[var(--secondary-color)] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-[var(--primary-light-text-color)] mb-1">
                      Customer Support
                    </h4>
                    <p className="text-gray-600 text-sm md:text-base">
                      Providing support for global customers, ensuring that all
                      inquiries and orders are managed efficiently.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Artisan Network Section */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Users className="w-8 h-8 text-[var(--secondary-color)] mr-3" />
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[var(--primary-color)]">
                Artisan Network in Kashmir & India
              </h2>
            </div>
            <p className="text-gray-700 max-w-4xl mx-auto text-sm md:text-base lg:text-lg leading-relaxed">
              Our roots are deeply tied to Kashmir, where most of our artisans
              are located. We work directly with artisans from Kashmir,
              Srinagar, and other parts of India, empowering them to create
              exceptional products that are sold globally.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <div className="bg-[var(--primary-color)] rounded-lg p-6 md:p-8 text-center">
              <MapPin className="w-12 h-12 text-gray-200 mx-auto mb-4" />
              <h3 className="text-xl md:text-2xl font-semibold text-gray-200 mb-3">
                Srinagar
              </h3>
              <p className="text-gray-200 text-sm md:text-base">
                The heart of Kashmiri crafts, where we collaborate with artisans
                to produce Pashmina shawls, Papier Mâché art, and Kani weaving.
              </p>
            </div>
            <div className="bg-[var(--secondary-light-color)] rounded-lg p-6 md:p-8 text-center">
              <MapPin className="w-12 h-12 text-[var(--secondary-color)] mx-auto mb-4" />
              <h3 className="text-xl md:text-2xl font-semibold text-[var(--primary-color)] mb-3">
                Jammu & Kashmir
              </h3>
              <p className="text-gray-700 text-sm md:text-base">
                Throughout the region, we work with woodcarvers, silk weavers,
                and embroiderers to create unique handcrafted products.
              </p>
            </div>
            <div className="bg-[var(--secondary-light-color)] rounded-lg p-6 md:p-8 text-center md:col-span-2 lg:col-span-1">
              <Heart className="w-12 h-12 text-[var(--secondary-color)] mx-auto mb-4" />
              <h3 className="text-xl md:text-2xl font-semibold text-[var(--primary-color)] mb-3">
                Rural Areas
              </h3>
              <p className="text-gray-700 text-sm md:text-base">
                We ensure that even artisans from remote areas have access to
                resources, training, and a platform to showcase their crafts.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Importance Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-hover-color)] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">
              The Importance of Our Locations
            </h2>
            <p className="text-base md:text-lg lg:text-xl leading-relaxed max-w-4xl mx-auto">
              Each of our business locations—Washington, D.C., Kashmir, and our
              global retail hubs—plays an essential role in our ability to
              promote authentic Kashmiri craftsmanship and empower artisans. By
              expanding our presence in global markets while maintaining our
              roots in Kashmir, we continue to ensure that the legacy of
              Kashmiri crafts thrives in the modern world.
            </p>
            <div className="mt-8">
              <div className="w-24 h-1 bg-[var(--secondary-color)] mx-auto"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Expansion Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Globe className="w-8 h-8 text-[var(--secondary-color)] mr-3" />
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[var(--primary-color)]">
                Global Expansion: Reaching New Markets
              </h2>
            </div>
            <p className="text-gray-700 max-w-4xl mx-auto text-sm md:text-base lg:text-lg leading-relaxed">
              As part of our global vision, De Koshur Crafts has expanded its
              presence across several regions, ensuring that Kashmiri
              handicrafts are introduced to luxury markets and design-conscious
              consumers worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-[var(--primary-color)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-[var(--primary-color)] mb-3">
                  United States
                </h3>
              </div>
              <p className="text-gray-700 text-sm md:text-base text-center">
                Our products are sold through 200+ retail partners across the
                country, including luxury boutiques and home decor retailers.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-[var(--primary-color)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-[var(--primary-color)] mb-3">
                  Europe
                </h3>
              </div>
              <p className="text-gray-700 text-sm md:text-base text-center">
                We have expanded our market presence to several European
                countries, including France, Germany, and the UK, focusing on
                high-end home décor and fashion accessories.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 hover:shadow-xl transition-shadow duration-300 md:col-span-2 lg:col-span-1">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-[var(--primary-color)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-[var(--primary-color)] mb-3">
                  Asia
                </h3>
              </div>
              <p className="text-gray-700 text-sm md:text-base text-center">
                We have a growing base of consumers in Japan, Hong Kong, and
                India, who appreciate the rich cultural heritage and the
                uniqueness of Kashmiri crafts.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
