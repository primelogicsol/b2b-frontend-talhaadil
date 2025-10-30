"use client"

import { MapPin, Globe, Users, Building2, Truck, Phone, Heart } from "lucide-react"
import { useGlobalContext } from "../../context/ScreenProvider"
import Location from "@/components/Essentials/Location"


export default function BusinessLocation() {
  const { is4K } = useGlobalContext()
  return (
    <div className="min-h-screen bg-white">
      {/* Custom CSS Variables */}

      {/* Introduction */}
      <section className={`${is4K ? "py-10 md:py-24 lg:py-32" : "py-12 md:py-16 lg:py-20"}`}>
        <div className={`${is4K ? "max-w-7xl" : "max-w-6xl"} mx-auto px-4 sm:px-6 lg:px-8`}>
          <div className="text-center mb-12">
            <h2
              className={`text-3xl sm:text-3xl md:text-4xl ${is4K ? "lg:text-6xl" : "lg:text-5xl"} text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 drop-shadow-md text-[var(--primary-color)] font-extrabold uppercase leading-tight`}
            >
              Our Location
            </h2>

            <p
              className={`${is4K ? "text-xl md:text-2xl lg:text-3xl" : "text-base md:text-lg lg:text-xl"} text-left md:text-center lg:text-center px-2 text-gray-700 leading-relaxed ${is4K ? "max-w-5xl" : "max-w-4xl"} mx-auto`}
            >
              At De Koshur Crafts, we are committed to not just promoting Kashmiri craftsmanship, but also ensuring that
              local artisans have access to global markets. Our business footprint extends from the heart of Kashmir to
              the USA, India, and beyond, connecting traditional artistry with the modern world.
            </p>
          </div>
        </div>
      </section>

      {/* Headquarters Section */}
      <section className={`${is4K ? "py-20 md:py-24" : "py-12 md:py-16"} bg-gray-50`}>
        <div className={`${is4K ? "max-w-[2000px]" : "max-w-7xl"} mx-auto px-4 sm:px-6 lg:px-8`}>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <div className="flex items-start mb-6">
                <Building2
                  className={`${is4K ? "w-8 h-8" : "w-6 h-6"} text-[var(--secondary-color)] mr-3 mt-3 flex-shrink-0`}
                />
                <h2
                  className={`text-2xl md:text-3xl ${is4K ? "lg:text-5xl" : "lg:text-4xl"} font-bold text-[var(--primary-color)] leading-snug`}
                >
                  Headquarters: Greater Washington, D.C. (Virginia Fairfax, USA)
                </h2>
              </div>

              <p
                className={`${is4K ? "text-lg md:text-xl lg:text-2xl" : "text-gray-700 mb-8 text-sm md:text-base lg:text-lg"} leading-relaxed`}
              >
                De Koshur Crafts operates from its headquarters in Virginia – Fairfax, part of the Greater Washington, D.C.
                Metropolitan Area, where we manage our global operations, customer relations, and international partnerships.
                Our headquarters serves as the command center for coordinating logistics, marketing, and vendor management,
                ensuring smooth connectivity between our artisan network in Kashmir and our markets across North America and beyond.
              </p>
            </div>
            <div className={`bg-white rounded-lg shadow-lg ${is4K ? "p-10 md:p-12" : "p-6 md:p-8"}`}>
              <h3
                className={`${is4K ? "text-3xl md:text-4xl" : "text-xl md:text-2xl"} font-semibold text-[var(--primary-color)] mb-6`}
              >
                Key Functions:
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Truck
                    className={`${is4K ? "w-8 h-8" : "w-6 h-6"} text-[var(--secondary-color)] mr-3 mt-1 flex-shrink-0`}
                  />
                  <div>
                    <h4 className={`${is4K ? "text-xl" : "font-semibold"} text-[var(--primary-light-text-color)] mb-1`}>
                      Operations & Logistics Management
                    </h4>
                    <p className={`${is4K ? "text-lg" : "text-gray-600 text-sm md:text-base"}`}>
                      Managing seamless product movement from Kashmir to global destinations.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Globe
                    className={`${is4K ? "w-8 h-8" : "w-6 h-6"} text-[var(--secondary-color)] mr-3 mt-1 flex-shrink-0`}
                  />
                  <div>
                    <h4 className={`${is4K ? "text-xl" : "font-semibold"} text-[var(--primary-light-text-color)] mb-1`}>
                      International Sales & Partnerships
                    </h4>
                    <p className={`${is4K ? "text-lg" : "text-gray-600 text-sm md:text-base"}`}>
                      Building relationships with global retailers and craft distributors.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone
                    className={`${is4K ? "w-8 h-8" : "w-6 h-6"} text-[var(--secondary-color)] mr-3 mt-1 flex-shrink-0`}
                  />
                  <div>
                    <h4 className={`${is4K ? "text-xl" : "font-semibold"} text-[var(--primary-light-text-color)] mb-1`}>
                      Customer Support
                    </h4>
                    <p className={`${is4K ? "text-lg" : "text-gray-600 text-sm md:text-base"}`}>
                      Assisting global clients with efficient communication and order handling.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Artisan Network Section */}
      <section className={`${is4K ? "py-20 md:py-24 lg:py-32" : "py-12 md:py-16 lg:py-20"}`}>
        <div className={`${is4K ? "max-w-[2000px]" : "max-w-7xl"} mx-auto px-4 sm:px-6 lg:px-8`}>
          <div className="text-center mb-12">
            <div className="flex items-center justify-start lg:justify-center mb-6">
              <Users
                className={`${is4K ? "w-8 h-8" : "w-6 h-6"} text-[var(--secondary-color)] mr-3 mt-1 lg:mt-2 flex-shrink-0`}
              />
              <h2
                className={`text-2xl md:text-3xl ${is4K ? "lg:text-5xl" : "lg:text-4xl"} font-bold text-[var(--primary-color)] leading-snug`}
              >
                Artisan Network in India
              </h2>
            </div>

            <p
              className={`${is4K ? "text-xl md:text-2xl lg:text-3xl" : "text-gray-700 max-w-4xl mx-auto text-sm md:text-base lg:text-lg"} text-left md:text-center lg:text-center  leading-relaxed`}
            >
              Our roots are deeply tied to Kashmir, where most of our artisans are located. We work directly with
              artisans from Kashmir, Srinagar, and other parts of India, empowering them to create exceptional products
              that are sold globally.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <div
              className={`bg-[var(--primary-color)] rounded-lg ${is4K ? "p-10 md:p-12" : "p-6 md:p-8"} text-center`}
            >
              <MapPin
                className={`${is4K ? "w-16 h-16" : "w-12 h-12"} text-gray-200 mx-auto mb-4`}
              />
              <h3
                className={`${is4K ? "text-3xl md:text-4xl" : "text-xl md:text-2xl"} font-semibold !text-gray-200 mb-3`}
              >
                Srinagar
              </h3>
              <p
                className={`${is4K ? "text-lg md:text-xl" : "text-sm md:text-base"} !text-gray-200 text-left md:text-center lg:text-center`}
              >
                The heart of Kashmiri crafts, where we collaborate with artisans to
                produce Pashmina shawls, Papier Mâché art, and Kani weaving.
              </p>
            </div>

            <div
              className={`bg-[var(--primary-color)] rounded-lg ${is4K ? "p-10 md:p-12" : "p-6 md:p-8"} text-center`}
            >
              <MapPin
                className={`${is4K ? "w-16 h-16" : "w-12 h-12"} text-gray-200 mx-auto mb-4`}
              />
              <h3
                className={`${is4K ? "text-3xl md:text-4xl" : "text-xl md:text-2xl"} font-semibold !text-gray-200 mb-3`}
              >
                Jammu & Kashmir
              </h3>
              <p
                className={`${is4K ? "text-lg md:text-xl" : "text-sm md:text-base"} !text-gray-200 text-left md:text-center lg:text-center`}
              >
                Throughout the region, we work with woodcarvers, silk weavers, and
                embroiderers to create unique handcrafted products.
              </p>
            </div>

            <div
              className={`bg-[var(--primary-color)] rounded-lg ${is4K ? "p-10 md:p-12" : "p-6 md:p-8"} text-center md:col-span-2 lg:col-span-1`}
            >
              <Heart
                className={`${is4K ? "w-16 h-16" : "w-12 h-12"} text-gray-200 mx-auto mb-4`}
              />
              <h3
                className={`${is4K ? "text-3xl md:text-4xl" : "text-xl md:text-2xl"} font-semibold !text-gray-200 mb-3`}
              >
                Rural Areas
              </h3>
              <p
                className={`${is4K ? "text-lg md:text-xl" : "text-sm md:text-base"} !text-gray-200 text-left md:text-center lg:text-center`}
              >
                We ensure that even artisans from remote areas have access to essential
                resources, proper training, and a global platform to showcase their
                crafts.
              </p>
            </div>
          </div>



        </div>
      </section>
      {/* Importance Section */}
      <section
        className={`${is4K ? "py-20 md:py-24 lg:py-32" : "py-12 md:py-16 lg:py-20"} bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-hover-color)] text-white`}
      >
        <div className={`${is4K ? "max-w-7xl" : "max-w-6xl"} mx-auto px-4 sm:px-6 lg:px-8`}>
          <div className="text-center">
            <h2
              className={`${is4K ? "text-4xl md:text-5xl lg:text-6xl" : "text-2xl md:text-3xl lg:text-4xl"} font-bold mb-8`}
            >
              The Importance of Our Locations
            </h2>
            <p
              className={`${is4K ? "text-xl md:text-2xl lg:text-3xl" : "text-base md:text-lg lg:text-xl"} leading-relaxed  text-left md:text-center lg:text-center${is4K ? "max-w-5xl" : "max-w-4xl"} mx-auto`}
            >
              Our headquarters in Fairfax, Virginia — part of the Greater Washington, D.C. area — places us at the center of U.S. global trade, logistics, and international partnerships, giving our artisan network direct access to world markets. Together with our base in Kashmir and our expanding global retail hubs, this strategic presence allows us to promote authentic Kashmiri craftsmanship, empower artisans, and ensure that the timeless legacy of Kashmir’s artistry continues to thrive across the modern world.
            </p>
            <div className="mt-8">
              <div className={`${is4K ? "w-32 h-1.5" : "w-24 h-1"} bg-[var(--secondary-color)] mx-auto`}></div>
            </div>
          </div>
        </div>
      </section>
      <Location />

      {/* Global Expansion Section */}
      <section className={`${is4K ? "py-20 md:py-24 lg:py-32" : "py-12 md:py-16 lg:py-20"} bg-gray-50`}>
        <div className={`${is4K ? "max-w-[2000px]" : "max-w-7xl"} mx-auto px-4 sm:px-6 lg:px-8`}>
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Globe className={`${is4K ? "w-10 h-10" : "w-8 h-8"} text-[var(--secondary-color)] mr-3 -mt-6 lg:mt-0`} />
              <h2
                className={`${is4K ? "text-3xl md:text-4xl lg:text-5xl" : "text-2xl md:text-3xl lg:text-4xl"} text-left md:text-center lg:text-center font-bold text-[var(--primary-color)]`}
              >
                Global Expansion: Reaching New Markets
              </h2>
            </div>
            <p
              className={`${is4K ? "text-xl md:text-2xl lg:text-3xl" : "text-gray-700 max-w-4xl mx-auto text-sm md:text-base lg:text-lg"} text-left md:text-center lg:text-center leading-relaxed`}
            >
              As part of our global vision, De Koshur Crafts has expanded its presence across several regions, ensuring
              that Kashmiri handicrafts are introduced to luxury markets and design-conscious consumers worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <div
              className={`bg-white rounded-lg shadow-lg ${is4K ? "p-10 md:p-12" : "p-6 md:p-8"} hover:shadow-xl transition-shadow duration-300`}
            >
              <div className="text-center mb-4">
                <div
                  className={`w-20 h-20 bg-[var(--primary-color)] rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <Building2 className={`${is4K ? "w-10 h-10" : "w-8 h-8"} text-white`} />
                </div>
                <h3
                  className={`${is4K ? "text-3xl md:text-4xl" : "text-xl md:text-2xl"} font-semibold text-[var(--primary-color)] mb-3`}
                >
                  United States
                </h3>
              </div>
              <p className={`${is4K ? "text-lg md:text-xl" : "text-gray-700 text-sm md:text-base"} text-left md:text-center lg:text-center`}>
                Our products are proudly sold through 200+ trusted retail partners across the country, including
                renowned luxury boutiques and premium home decor retailers operating nationwide.
              </p>
            </div>
            <div
              className={`bg-white rounded-lg shadow-lg ${is4K ? "p-10 md:p-12" : "p-6 md:p-8"} hover:shadow-xl transition-shadow duration-300`}
            >
              <div className="text-center mb-4">
                <div
                  className={`w-20 h-20 bg-[var(--primary-color)] rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <MapPin className={`${is4K ? "w-10 h-10" : "w-8 h-8"} text-white`} />
                </div>
                <h3
                  className={`${is4K ? "text-3xl md:text-4xl" : "text-xl md:text-2xl"} font-semibold text-[var(--primary-color)] mb-3`}
                >
                  Europe
                </h3>
              </div>
              <p className={`${is4K ? "text-lg md:text-xl" : "text-gray-700 text-sm md:text-base"} text-left md:text-center lg:text-center`}>
                We have expanded our market presence to several European countries, including France, Germany, and the
                UK, focusing on high-end home décor and fashion accessories.
              </p>
            </div>
            <div
              className={`bg-white rounded-lg shadow-lg ${is4K ? "p-10 md:p-12" : "p-6 md:p-8"} hover:shadow-xl transition-shadow duration-300 md:col-span-2 lg:col-span-1`}
            >
              <div className="text-center mb-4">
                <div
                  className={`w-20 h-20 bg-[var(--primary-color)] rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <Globe className={`${is4K ? "w-10 h-10" : "w-8 h-8"} text-white`} />
                </div>
                <h3
                  className={`${is4K ? "text-3xl md:text-4xl" : "text-xl md:text-2xl"} font-semibold text-[var(--primary-color)] mb-3`}
                >
                  Asia
                </h3>
              </div>
              <p className={`${is4K ? "text-lg md:text-xl" : "text-gray-700 text-sm md:text-base"} text-left md:text-center lg:text-center`}>
                We have a rapidly growing base of consumers in Japan, Hong Kong, and India, who deeply appreciate the
                rich cultural heritage and the uniqueness of Kashmiri crafts.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
