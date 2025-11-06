"use client";
import {
  Heart,
  Globe,
  Users,
  Award,
  Target,
  Leaf,
  TrendingUp,
} from "lucide-react";
import VerticalHeroSlider from "@/components/Essentials/VerticalBanner";
import Timeline from "@/components/Material/TimeLine";
import DiagonalSection from "@/components/Section/DiagonalSection";
import { useGlobalContext } from "@/context/ScreenProvider";

export default function OurStoryPage() {
  const { is4K } = useGlobalContext();
  return (
    <div className="min-h-screen overflow-x-hidden">
      <VerticalHeroSlider />
      <section className={`pt-16 pb-6 ${is4K ? "pt-32 pb-16" : ""}`}>
        <h2
          className={`text-3xl md:text-4xl lg:text-5xl ${is4K ? "text-8xl" : ""
            } font-bold text-[var(--primary-color)] mb-12 ${is4K ? "mb-20" : ""
            } text-center`}
        >
          What Sets Us Apart
        </h2>
        {/* Timeline Section */}
        <Timeline />
      </section>
      {/* Heritage Section */}
      <section
        className={`py-16 md:py-20 ${is4K ? "py-36" : ""
          } px-4 sm:px-6 lg:px-8 bg-white`}
      >
        <div className={`max-w-6xl ${is4K ? "max-w-screen-2xl" : ""} mx-auto`}>
          <div
            className={`grid lg:grid-cols-2 gap-12 lg:gap-16 ${is4K ? "gap-32" : ""
              } items-center`}
          >
            <div className="order-2 lg:order-1">
              <h2
                className={`text-3xl md:text-4xl lg:text-5xl ${is4K ? "text-8xl" : ""
                  } font-bold mb-6 md:mb-8 ${is4K ? "mb-12" : ""}`}
                style={{ color: "var(--primary-color)" }}
              >
                A Legacy Rooted in Craftsmanship
              </h2>
              <div
                className={`space-y-4 md:space-y-6 ${is4K ? "space-y-10" : ""
                  } text-base md:text-lg ${is4K ? "text-3xl" : ""
                  } text-gray-700 leading-relaxed`}
              >
                <p>
                  Stands proudly among fifty cities worldwide in the UNESCO Creative Cities Network under the Crafts and Folk Art category — a recognition of artisanal excellence on the global stage. Honored further among sixty-three World Craft Cities by the World Craft Council (WCC), Kashmir’s place as a global epicenter of heritage and mastery is cemented.

                </p>
                <p>
                  Carrying the proud legacy of the Silk Route, the region was a crossroads of craft commerce from the 1st century BCE to the 15th century CE. It is also remembered as home to the world’s first martyrs of craft labor — pioneers who gave their lives in the global struggle for artisanal rights. Today, Kashmir remains a timeless sanctuary, nurturing the world’s largest concentration of master artisans.
                </p>

              </div>
            </div>
            <div className="relative order-1 lg:order-2">
              <div
                className={`aspect-square rounded-2xl md:rounded-3xl ${is4K ? "rounded-4xl" : ""
                  } shadow-xl md:shadow-2xl ${is4K ? "shadow-3xl" : ""
                  } overflow-hidden`}
              >
                <div className="w-full h-full bg-gradient-to-br from-orange-100 to-blue-100 flex items-center justify-center">
                  <div
                    className={`text-center p-6 md:p-8 ${is4K ? "p-16" : ""}`}
                  >
                    <Heart
                      className={`h-12 w-12 md:h-16 md:w-16 ${is4K ? "h-24 w-24" : ""
                        } mx-auto mb-4 ${is4K ? "mb-8" : ""}`}
                      style={{ color: "var(--secondary-color)" }}
                    />
                    <p
                      className={`text-lg font-semibold ${is4K ? "text-4xl" : ""
                        }`}
                      style={{ color: "var(--primary-color)" }}
                    >
                      Heritage Image Gallery
                    </p>
                    <p
                      className={`text-gray-600 mt-2 ${is4K ? "text-2xl" : ""}`}
                    >
                      Traditional Kashmir Crafts
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Founder Section */}
      <section
        className={`py-16 md:py-20 ${is4K ? "py-36" : ""} px-4 sm:px-6 lg:px-8`}
        style={{ backgroundColor: "var(--secondary-light-color)" }}
      >
        <div className={`max-w-6xl ${is4K ? "max-w-screen-2xl" : ""} mx-auto`}>
          <div
            className={`grid lg:grid-cols-2 gap-12 lg:gap-16 ${is4K ? "gap-32" : ""
              } items-center`}
          >
            <div className="relative">
              <div
                className={`aspect-[4/5] rounded-2xl md:rounded-3xl ${is4K ? "rounded-4xl" : ""
                  } shadow-xl md:shadow-2xl ${is4K ? "shadow-3xl" : ""
                  } overflow-hidden`}
              >
                <div className="w-full h-full bg-gradient-to-br from-blue-100 to-orange-100 flex items-center justify-center">
                  <div
                    className={`text-center p-6 md:p-8 ${is4K ? "p-16" : ""}`}
                  >
                    <Users
                      className={`h-12 w-12 md:h-16 md:w-16 ${is4K ? "h-24 w-24" : ""
                        } mx-auto mb-4 ${is4K ? "mb-8" : ""}`}
                      style={{ color: "var(--primary-color)" }}
                    />
                    <p
                      className={`text-lg font-semibold ${is4K ? "text-4xl" : ""
                        }`}
                      style={{ color: "var(--primary-color)" }}
                    >
                      Founder Portrait
                    </p>
                    <p
                      className={`text-gray-600 mt-2 ${is4K ? "text-2xl" : ""}`}
                    >
                      Fayaz Ahmad Khan
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2
                className={`text-3xl md:text-4xl lg:text-5xl ${is4K ? "text-8xl" : ""
                  } font-bold mb-6 md:mb-8 ${is4K ? "mb-12" : ""}`}
                style={{ color: "var(--primary-color)" }}
              >
                The Birth of De Koshur Crafts
              </h2>
              <div
                className={`space-y-4 md:space-y-6 ${is4K ? "space-y-10" : ""
                  } text-base md:text-lg ${is4K ? "text-3xl" : ""
                  } text-gray-700 leading-relaxed`}
              >
                <p>
                  In 2019, the vision for De Koshur Crafts was born out of a critical need to safeguard Kashmir’s cultural heritage and position its artisans on the global stage. Generations of makers were facing existential threats: displacement by mass production, shrinking opportunities, and the absence of equitable recognition for their work.


                </p>
                <p>
                  De Koshur Crafts emerged as a bridge between tradition and innovation, linking artisans with international markets through technology, transparency, and fair trade. The platform is not only connecting creators with buyers worldwide but also delivering tools, resources, and strategic partnerships that ensure sustainability, dignity, and growth.

                </p>
                <p>
                  Our mission is clear: to transform Kashmir’s craftsmanship into a globally recognized economy of heritage and innovation, where every artisan receives fair compensation, every buyer is assured authenticity, and every product carries the story of a timeless cultural legacy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Growth Metrics */}
      <section
        className={`py-16 md:py-20 ${is4K ? "py-36" : ""
          } px-4 sm:px-6 lg:px-8 bg-white`}
      >
        <div
          className={`max-w-6xl ${is4K ? "max-w-screen-2xl" : ""
            } mx-auto text-center`}
        >
          <h2
            className={`text-2xl md:text-3xl lg:text-4xl ${is4K ? "text-7xl" : ""
              } font-bold mb-12 md:mb-16 ${is4K ? "mb-24" : ""}`}
            style={{ color: "var(--secondary-color)" }}
          >
            Our Growth: Bridging Tradition with Innovation
          </h2>
          {/* Responsive Grid */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 ${is4K ? "gap-20" : ""
              } mb-12 md:mb-16 ${is4K ? "mb-24" : ""}`}
          >
            {/* Card 1 */}
            <div
              className={`p-6 md:p-8 ${is4K ? "p-16" : ""
                } rounded-xl md:rounded-2xl ${is4K ? "rounded-3xl" : ""
                } shadow-lg hover:shadow-xl transition-all duration-300`}
              style={{ backgroundColor: "var(--primary-color)" }}
            >
              <div
                className={`text-4xl md:text-5xl ${is4K ? "text-8xl" : ""
                  } font-bold mb-4 ${is4K ? "mb-8" : ""}`}
                style={{ color: "var(--secondary-light-color)" }}
              >
                2000+
              </div>
              <h3
                className={`text-lg md:text-xl ${is4K ? "text-4xl" : ""
                  } font-semibold mb-3 ${is4K ? "mb-6" : ""}`}
                style={{ color: "var(--secondary-light-color)" }}
              >
                Craft Preservation
              </h3>
              <p
                className={`text-gray-200 text-sm md:text-base ${is4K ? "text-2xl" : ""
                  }`}
              >
                Preserving traditions with blockchain for product authenticity
              </p>
            </div>
            {/* Card 2 */}
            <div
              className={`p-6 md:p-8 ${is4K ? "p-16" : ""
                } rounded-xl md:rounded-2xl ${is4K ? "rounded-3xl" : ""
                } shadow-lg hover:shadow-xl transition-all duration-300`}
              style={{ backgroundColor: "var(--primary-color)" }}
            >
              <div
                className={`text-4xl md:text-5xl ${is4K ? "text-8xl" : ""
                  } font-bold mb-4 ${is4K ? "mb-8" : ""}`}
                style={{ color: "var(--secondary-light-color)" }}
              >
                2000+
              </div>
              <h3
                className={`text-lg md:text-xl ${is4K ? "text-4xl" : ""
                  } font-semibold mb-3 ${is4K ? "mb-6" : ""}`}
                style={{ color: "var(--secondary-light-color)" }}
              >
                Skilled Artisans
              </h3>
              <p
                className={`text-gray-200 text-sm md:text-base ${is4K ? "text-2xl" : ""
                  }`}
              >
                Providing fair wages and access to global customer base
              </p>
            </div>
            {/* Card 3 */}
            <div
              className={`p-6 md:p-8 ${is4K ? "p-16" : ""
                } rounded-xl md:rounded-2xl ${is4K ? "rounded-3xl" : ""
                } shadow-lg hover:shadow-xl transition-all duration-300`}
              style={{ backgroundColor: "var(--primary-color)" }}
            >
              <div
                className={`text-4xl md:text-5xl ${is4K ? "text-8xl" : ""
                  } font-bold mb-4 ${is4K ? "mb-8" : ""}`}
                style={{ color: "var(--secondary-light-color)" }}
              >
                100+
              </div>
              <h3
                className={`text-lg md:text-xl ${is4K ? "text-4xl" : ""
                  } font-semibold mb-3 ${is4K ? "mb-6" : ""}`}
                style={{ color: "var(--secondary-light-color)" }}
              >
                Global Buyers
              </h3>
              <p
                className={`text-gray-200 text-sm md:text-base ${is4K ? "text-2xl" : ""
                  }`}
              >
                International retailers to luxury brands sourcing authentic
                crafts
              </p>
            </div>
            {/* Card 4 */}
            <div
              className={`p-6 md:p-8 ${is4K ? "p-16" : ""
                } rounded-xl md:rounded-2xl ${is4K ? "rounded-3xl" : ""
                } shadow-lg hover:shadow-xl transition-all duration-300`}
              style={{ backgroundColor: "var(--primary-color)" }}
            >
              <div
                className={`text-4xl md:text-5xl ${is4K ? "text-8xl" : ""
                  } font-bold mb-4 ${is4K ? "mb-8" : ""}`}
                style={{ color: "var(--secondary-light-color)" }}
              >
                $3M+
              </div>
              <h3
                className={`text-lg md:text-xl ${is4K ? "text-4xl" : ""
                  } font-semibold mb-3 ${is4K ? "mb-6" : ""}`}
                style={{ color: "var(--secondary-light-color)" }}
              >

                Seed Investment

              </h3>
              <p
                className={`text-gray-200 text-sm md:text-base ${is4K ? "text-2xl" : ""
                  }`}
              >
                Catalyzing growth with funding to empower artisans and communities.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* How We Help Section */}
      <section
        className={`py-16 md:py-20 ${is4K ? "py-36" : ""} px-4 sm:px-6 lg:px-8`}
        style={{ backgroundColor: "var(--secondary-light-color)" }}
      >
        <div className={`max-w-6xl ${is4K ? "max-w-screen-2xl" : ""} mx-auto`}>
          <div className={`text-center mb-12 md:mb-16 ${is4K ? "mb-24" : ""}`}>
            <h2
              className={`text-3xl md:text-4xl lg:text-5xl ${is4K ? "text-8xl" : ""
                } font-bold mb-6 md:mb-8 ${is4K ? "mb-12" : ""}`}
              style={{ color: "var(--primary-color)" }}
            >
              How We Help Artisans Thrive
            </h2>
            <p
              className={`text-lg md:text-xl ${is4K ? "text-4xl" : ""
                } text-gray-700 text-left lg:text-center md:text-center px-1 max-w-4xl ${is4K ? "max-w-6xl" : ""} mx-auto`}
            >
              Our platform provides more than just a marketplace; it is a
              holistic support system designed to help artisans expand their
              reach, optimize their production, and scale their businesses.
            </p>
          </div>
          <div
            className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 ${is4K ? "gap-16" : ""
              }`}
          >
            <div
              className={`bg-white p-6 md:p-8 ${is4K ? "p-16" : ""
                } rounded-xl md:rounded-2xl ${is4K ? "rounded-3xl" : ""
                } shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}
            >
              <div
                className={`w-12 h-12 md:w-16 md:h-16 ${is4K ? "w-24 h-24" : ""
                  } rounded-full flex items-center justify-center mb-4 md:mb-6 ${is4K ? "mb-10" : ""
                  }`}
                style={{ backgroundColor: "var(--primary-color)" }}
              >
                <Heart
                  className={`h-6 w-6 md:h-8 md:w-8 ${is4K ? "h-12 w-12" : ""
                    } text-white`}
                />
              </div>
              <h3
                className={`text-lg md:text-xl ${is4K ? "text-4xl" : ""
                  } font-bold mb-3 md:mb-4 ${is4K ? "mb-6" : ""}`}
                style={{ color: "var(--primary-color)" }}
              >
                Compensation Growth
              </h3>
              <p
                className={`text-gray-700 text-sm md:text-base ${is4K ? "text-2xl" : ""
                  }`}
              >
                Ensuring artisans receive fair market value, cutting middlemen &
                connecting with buyers.
              </p>
            </div>
            <div
              className={`bg-white p-6 md:p-8 ${is4K ? "p-16" : ""
                } rounded-xl md:rounded-2xl ${is4K ? "rounded-3xl" : ""
                } shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}
            >
              <div
                className={`w-12 h-12 md:w-16 md:h-16 ${is4K ? "w-24 h-24" : ""
                  } rounded-full flex items-center justify-center mb-4 md:mb-6 ${is4K ? "mb-10" : ""
                  }`}
                style={{ backgroundColor: "var(--secondary-color)" }}
              >
                <Globe
                  className={`h-6 w-6 md:h-8 md:w-8 ${is4K ? "h-12 w-12" : ""
                    } text-white`}
                />
              </div>
              <h3
                className={`text-lg md:text-xl ${is4K ? "text-4xl" : ""
                  } font-bold mb-3 md:mb-4 ${is4K ? "mb-6" : ""}`}
                style={{ color: "var(--primary-color)" }}
              >
                Global Market Access
              </h3>
              <p
                className={`text-gray-700 text-sm md:text-base ${is4K ? "text-2xl" : ""
                  }`}
              >
                Connecting artisans with international buyers, luxury brands,
                and retail giants worldwide.
              </p>
            </div>
            <div
              className={`bg-white p-6 md:p-8 ${is4K ? "p-16" : ""
                } rounded-xl md:rounded-2xl ${is4K ? "rounded-3xl" : ""
                } shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}
            >
              <div
                className={`w-12 h-12 md:w-16 md:h-16 ${is4K ? "w-24 h-24" : ""
                  } rounded-full flex items-center justify-center mb-4 md:mb-6 ${is4K ? "mb-10" : ""
                  }`}
                style={{ backgroundColor: "var(--primary-color)" }}
              >
                <Users
                  className={`h-6 w-6 md:h-8 md:w-8 ${is4K ? "h-12 w-12" : ""
                    } text-white`}
                />
              </div>
              <h3
                className={`text-lg md:text-xl ${is4K ? "text-4xl" : ""
                  } font-bold mb-3 md:mb-4 ${is4K ? "mb-6" : ""}`}
                style={{ color: "var(--primary-color)" }}
              >
                Business Development
              </h3>
              <p
                className={`text-gray-700 text-sm md:text-base ${is4K ? "text-2xl" : ""
                  }`}
              >
                Mentorship, training, and marketing tools to help artisans
                succeed in the global marketplace.
              </p>
            </div>
            <div
              className={`bg-white p-6 md:p-8 ${is4K ? "p-16" : ""
                } rounded-xl md:rounded-2xl ${is4K ? "rounded-3xl" : ""
                } shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}
            >
              <div
                className={`w-12 h-12 md:w-16 md:h-16 ${is4K ? "w-24 h-24" : ""
                  } rounded-full flex items-center justify-center mb-4 md:mb-6 ${is4K ? "mb-10" : ""
                  }`}
                style={{ backgroundColor: "var(--secondary-color)" }}
              >
                <Award
                  className={`h-6 w-6 md:h-8 md:w-8 ${is4K ? "h-12 w-12" : ""
                    } text-white`}
                />
              </div>
              <h3
                className={`text-lg md:text-xl ${is4K ? "text-4xl" : ""
                  } font-bold mb-3 md:mb-4 ${is4K ? "mb-6" : ""}`}
                style={{ color: "var(--primary-color)" }}
              >
                Technology Empowerment
              </h3>
              <p
                className={`text-gray-700 text-sm md:text-base ${is4K ? "text-2xl" : ""
                  }`}
              >
                Blockchain for authenticity and AI-powered tools for business
                optimization and growth.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* The Heart Section */}
      <section
        className={`py-16 md:py-20 ${is4K ? "py-36" : ""
          } px-4 sm:px-6 lg:px-8 bg-white`}
      >
        <div className={`max-w-6xl ${is4K ? "max-w-screen-2xl" : ""} mx-auto`}>
          <div className={`text-center mb-12 md:mb-16 ${is4K ? "mb-24" : ""}`}>
            <h2
              className={`text-3xl md:text-4xl lg:text-5xl ${is4K ? "text-8xl" : ""
                } font-bold text-left lg:text-center md:text-center mb-6 md:mb-8 ${is4K ? "mb-12" : ""}`}
              style={{ color: "var(--primary-color)" }}
            >
              The Heart of De Koshur Crafts: The Artisans
            </h2>
            <p
              className={`text-lg md:text-xl ${is4K ? "text-4xl" : ""
                } text-gray-700 text-left md:text-center lg:text-center max-w-4xl ${is4K ? "max-w-6xl" : ""
                } mx-auto leading-relaxed`}
            >
              At De Koshur Crafts, artisans are not just part of our mission — they are its very foundation. Their lives and legacies define our identity, and their mastery gives our platform its global distinction.

            </p>
          </div>
          <div
            className={`grid lg:grid-cols-2 gap-12 lg:gap-16 ${is4K ? "gap-32" : ""
              } items-center`}
          >
            <div
              className={`space-y-4 md:space-y-6 ${is4K ? "space-y-10" : ""
                } text-base md:text-lg ${is4K ? "text-3xl" : ""
                } text-gray-700 leading-relaxed`}
            >
              <p>
                From mountain villages to modest urban workshops, these creators carry wisdom inherited across generations. They stand as custodians of Kashmir’s living heritage, and De Koshur Crafts ensures their voices and work are elevated to the world stage.

              </p>
              <p>
                Every creation offered through our platform carries the imprint of an artisan’s journey — the patience of its making, the care of its detail, and the cultural memory it preserves. Each piece is more than a product: it is testimony, devotion, and artistry woven into form.
              </p>
            </div>
            <div className="relative">
              <div
                className={`aspect-[4/3] rounded-2xl md:rounded-3xl ${is4K ? "rounded-4xl" : ""
                  } shadow-xl md:shadow-2xl ${is4K ? "shadow-3xl" : ""
                  } overflow-hidden`}
              >
                <div className="w-full h-full bg-gradient-to-br from-orange-100 to-blue-100 flex items-center justify-center">
                  <div
                    className={`text-center p-6 md:p-8 ${is4K ? "p-16" : ""}`}
                  >
                    <Users
                      className={`h-12 w-12 md:h-16 md:w-16 ${is4K ? "h-24 w-24" : ""
                        } mx-auto mb-4 ${is4K ? "mb-8" : ""}`}
                      style={{ color: "var(--primary-color)" }}
                    />
                    <p
                      className={`text-lg font-semibold ${is4K ? "text-4xl" : ""
                        }`}
                      style={{ color: "var(--primary-color)" }}
                    >
                      Artisan Community
                    </p>
                    <p
                      className={`text-gray-600 mt-2 ${is4K ? "text-2xl" : ""}`}
                    >
                      Craftspeople at Work
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Future Vision */}
      <section
        className={`py-16 md:py-20 ${is4K ? "py-36" : ""
          } px-4 sm:px-6 lg:px-8 bg-white`}
      >
        <div
          className={`max-w-6xl ${is4K ? "max-w-screen-2xl" : ""
            } mx-auto text-center`}
        >
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl ${is4K ? "text-8xl" : ""
              } font-bold mb-6 md:mb-8 ${is4K ? "mb-12" : ""}`}
            style={{ color: "var(--primary-color)" }}
          >
            The Future of De Koshur Crafts
          </h2>
          <p
            className={`text-lg md:text-xl ${is4K ? "text-4xl" : "text-left md:text-center lg:text-center"
              } text-gray-700 mb-12 md:mb-16 ${is4K ? "mb-24" : ""} max-w-4xl ${is4K ? "max-w-6xl" : "ext-left md:text-center lg:text-center"
              } mx-auto`}
          >
            We are shaping a future where authenticity, sustainability, and fair trade are not aspirations but living realities. De Koshur Crafts envisions a global ecosystem where Kashmiri artisans are not only celebrated as master creators but also empowered as business leaders, innovators, and cultural ambassadors.

            By 2030, our mission is bold: to connect 100,000 artisans to international markets, expand global networks across continents, embed eco-conscious practices at every stage, and integrate cutting-edge technology to ensure transparency, traceability, and long-term growth.

          </p>
          <div
            className={`grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 ${is4K ? "gap-16" : ""
              } mb-12 md:mb-16 ${is4K ? "mb-24" : ""}`}
          >
            <div
              className={`bg-gradient-to-br from-blue-50 to-orange-50 p-4 md:p-6 ${is4K ? "p-14" : ""
                } rounded-xl shadow-lg hover:shadow-xl transition-all duration-300`}
            >
              <Target
                className={`h-8 w-8 md:h-10 md:w-10 ${is4K ? "h-16 w-16" : ""
                  } mx-auto mb-3 md:mb-4 ${is4K ? "mb-8" : ""}`}
                style={{ color: "var(--secondary-color)" }}
              />
              <div
                className={`text-md md:text-3xl ${is4K ? "text-6xl" : ""
                  } font-bold mb-2 ${is4K ? "mb-4" : ""}`}
                style={{ color: "var(--secondary-color)" }}
              >
                10,000
              </div>
              <p className={`text-sm md:text-base ${is4K ? "text-2xl" : ""}`}>
                Artisans by 2030
              </p>
            </div>
            <div
              className={`bg-gradient-to-br from-orange-50 to-blue-50 p-4 md:p-6 ${is4K ? "p-14" : ""
                } rounded-xl shadow-lg hover:shadow-xl transition-all duration-300`}
            >
              <Globe
                className={`h-8 w-8 md:h-10 md:w-10 ${is4K ? "h-16 w-16" : ""
                  } mx-auto mb-3 md:mb-4 ${is4K ? "mb-8" : ""}`}
                style={{ color: "var(--secondary-color)" }}
              />
              <div
                className={`text-md md:text-3xl ${is4K ? "text-6xl" : ""
                  } font-bold mb-2 ${is4K ? "mb-4" : ""}`}
                style={{ color: "var(--secondary-color)" }}
              >
                Global
              </div>
              <p className={`text-sm md:text-base ${is4K ? "text-2xl" : ""}`}>
                Market Expansion
              </p>
            </div>
            <div
              className={`bg-gradient-to-br from-blue-50 to-orange-50 p-4 md:p-6 ${is4K ? "p-14" : ""
                } rounded-xl shadow-lg hover:shadow-xl transition-all duration-300`}
            >
              <Leaf
                className={`h-8 w-8 md:h-10 md:w-10 ${is4K ? "h-16 w-16" : ""
                  } mx-auto mb-3 md:mb-4 ${is4K ? "mb-8" : ""}`}
                style={{ color: "var(--secondary-color)" }}
              />
              <div
                className={`text-md md:text-3xl ${is4K ? "text-6xl" : ""
                  } font-bold mb-2 ${is4K ? "mb-4" : ""}`}
                style={{ color: "var(--secondary-color)" }}
              >
                Eco
              </div>
              <p className={`text-sm md:text-base ${is4K ? "text-2xl" : ""}`}>
                Sustainable Practices
              </p>
            </div>
            <div
              className={`bg-gradient-to-br from-orange-50 to-blue-50 p-4 md:p-6 ${is4K ? "p-14" : ""
                } rounded-xl shadow-lg hover:shadow-xl transition-all duration-300`}
            >
              <TrendingUp
                className={`h-8 w-8 md:h-10 md:w-10 ${is4K ? "h-16 w-16" : ""
                  } mx-auto mb-3 md:mb-4 ${is4K ? "mb-8" : ""}`}
                style={{ color: "var(--secondary-color)" }}
              />
              <div
                className={`text-md md:text-3xl ${is4K ? "text-6xl" : ""
                  } font-bold mb-2 ${is4K ? "mb-4" : ""}`}
                style={{ color: "var(--secondary-color)" }}
              >
                Innovation
              </div>
              <p className={`text-sm md:text-base ${is4K ? "text-2xl" : ""}`}>
                Technology Integration
              </p>
            </div>
          </div>
          <section className={`mt-30 lg:mt-10 ${is4K ? "mt-28" : ""}`}>
            <DiagonalSection
              subtitle="Our In-House Ecosystem"
              title="Empowering Artisans Beyond"
              highlight="Markets"
              description="At De Koshur Crafts, artisan empowerment is supported by a complete ecosystem of in-house platforms. Each initiative addresses a unique dimension of heritage, innovation, and global connectivity, ensuring artisans are not only market-ready but future-ready."
              steps={[
                "De Koshur Crafts Bazaar LLC : U.S. trade hub connecting Kashmiri crafts to international buyers with compliance and logistics support.",
                "CraftLore : Global registry of authenticity, valuation, and traceability powered by technology and research.",
                "ArtStay : Craft tourism experiences linking artisans with travelers through immersive cultural engagement.",
                "Prime Logic Solution : IT and digital backbone delivering advanced e-commerce, automation, and AI-driven support.",
                "Hamadan Craft Revival Foundation : Policy, advocacy, and institutional research safeguarding Kashmir’s craft legacy.",
                "Sufi Science Center : Knowledge platform blending cultural wisdom, ethics, and science for sustainable innovation.",
              ]}
              footerHeadline="Together, these six institutions form the pillars of De Koshur Crafts"
              footerDescription="Advancing artisanship through markets, research, technology, advocacy, tourism, and cultural knowledge."
              mainImage="/images/new-pic6.webp"
              smallImage="/images/new-pic4.webp"
            />

          </section>
        </div>
      </section>
    </div>
  );
}
