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
          className={`text-3xl md:text-4xl lg:text-5xl ${
            is4K ? "text-8xl" : ""
          } font-extrabold text-[var(--primary-color)] mb-12 ${
            is4K ? "mb-20" : ""
          } text-center`}
        >
          What Sets Us Apart
        </h2>
        {/* Timeline Section */}
        <Timeline />
      </section>
      {/* Heritage Section */}
      <section
        className={`py-16 md:py-20 ${
          is4K ? "py-36" : ""
        } px-4 sm:px-6 lg:px-8 bg-white`}
      >
        <div className={`max-w-6xl ${is4K ? "max-w-screen-2xl" : ""} mx-auto`}>
          <div
            className={`grid lg:grid-cols-2 gap-12 lg:gap-16 ${
              is4K ? "gap-32" : ""
            } items-center`}
          >
            <div className="order-2 lg:order-1">
              <h2
                className={`text-3xl md:text-4xl lg:text-5xl ${
                  is4K ? "text-8xl" : ""
                } font-bold mb-6 md:mb-8 ${is4K ? "mb-12" : ""}`}
                style={{ color: "var(--primary-color)" }}
              >
                A Legacy Rooted in Craftsmanship
              </h2>
              <div
                className={`space-y-4 md:space-y-6 ${
                  is4K ? "space-y-10" : ""
                } text-base md:text-lg ${
                  is4K ? "text-3xl" : ""
                } text-gray-700 leading-relaxed`}
              >
                <p>
                  The journey of De Koshur Crafts begins in the heart of
                  Kashmir, a region celebrated for its extraordinary cultural
                  and artistic heritage. For centuries, the artisans of Kashmir
                  have been weaving intricate Pashmina shawls, crafting Kani
                  woven textiles, and creating exquisite Papier Mâché
                  artifacts—each piece a testament to the region's deep-rooted
                  artistry and skilled craftsmanship.
                </p>
                <p>
                  These crafts tell the stories of Kashmir's history,
                  traditions, and unique way of life. However, while these
                  masterpieces have historically been revered by collectors and
                  traders around the world, the artisans who create them have
                  faced significant challenges.
                </p>
                <p>
                  From economic instability to lack of access to international
                  markets, many artisans found it difficult to sustain their
                  livelihoods and preserve their crafts in an ever-changing
                  world.
                </p>
              </div>
            </div>
            <div className="relative order-1 lg:order-2">
              <div
                className={`aspect-square rounded-2xl md:rounded-3xl ${
                  is4K ? "rounded-4xl" : ""
                } shadow-xl md:shadow-2xl ${
                  is4K ? "shadow-3xl" : ""
                } overflow-hidden`}
              >
                <div className="w-full h-full bg-gradient-to-br from-orange-100 to-blue-100 flex items-center justify-center">
                  <div
                    className={`text-center p-6 md:p-8 ${is4K ? "p-16" : ""}`}
                  >
                    <Heart
                      className={`h-12 w-12 md:h-16 md:w-16 ${
                        is4K ? "h-24 w-24" : ""
                      } mx-auto mb-4 ${is4K ? "mb-8" : ""}`}
                      style={{ color: "var(--secondary-color)" }}
                    />
                    <p
                      className={`text-lg font-semibold ${
                        is4K ? "text-4xl" : ""
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
            className={`grid lg:grid-cols-2 gap-12 lg:gap-16 ${
              is4K ? "gap-32" : ""
            } items-center`}
          >
            <div className="relative">
              <div
                className={`aspect-[4/5] rounded-2xl md:rounded-3xl ${
                  is4K ? "rounded-4xl" : ""
                } shadow-xl md:shadow-2xl ${
                  is4K ? "shadow-3xl" : ""
                } overflow-hidden`}
              >
                <div className="w-full h-full bg-gradient-to-br from-blue-100 to-orange-100 flex items-center justify-center">
                  <div
                    className={`text-center p-6 md:p-8 ${is4K ? "p-16" : ""}`}
                  >
                    <Users
                      className={`h-12 w-12 md:h-16 md:w-16 ${
                        is4K ? "h-24 w-24" : ""
                      } mx-auto mb-4 ${is4K ? "mb-8" : ""}`}
                      style={{ color: "var(--primary-color)" }}
                    />
                    <p
                      className={`text-lg font-semibold ${
                        is4K ? "text-4xl" : ""
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
                className={`text-3xl md:text-4xl lg:text-5xl ${
                  is4K ? "text-8xl" : ""
                } font-bold mb-6 md:mb-8 ${is4K ? "mb-12" : ""}`}
                style={{ color: "var(--primary-color)" }}
              >
                The Birth of De Koshur Crafts
              </h2>
              <div
                className={`space-y-4 md:space-y-6 ${
                  is4K ? "space-y-10" : ""
                } text-base md:text-lg ${
                  is4K ? "text-3xl" : ""
                } text-gray-700 leading-relaxed`}
              >
                <p>
                  In 2019,{" "}
                  <strong style={{ color: "var(--secondary-color)" }}>
                    Fayaz Ahmad Khan
                  </strong>
                  , the founder of De Koshur Crafts, recognized the critical
                  need to preserve and promote Kashmir's rich crafts. As a
                  native Kashmiri, Fayaz saw the struggles that artisans were
                  facing firsthand—many were at risk of losing their craft to
                  modern mass production, while others struggled to find fair
                  buyers for their works.
                </p>
                <p>
                  With a deep passion for his heritage and an entrepreneurial
                  spirit, Fayaz decided to create De Koshur Crafts—a platform
                  that would not only connect artisans with global markets but
                  also provide them with the tools, support, and resources to
                  grow their businesses.
                </p>
                <p>
                  The platform's mission was simple: to provide artisans with a
                  space where they could showcase their authentic craftsmanship,
                  connect with buyers from across the world, and receive fair
                  compensation for their work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Growth Metrics */}
      <section
        className={`py-16 md:py-20 ${
          is4K ? "py-36" : ""
        } px-4 sm:px-6 lg:px-8 bg-white`}
      >
        <div
          className={`max-w-6xl ${
            is4K ? "max-w-screen-2xl" : ""
          } mx-auto text-center`}
        >
          <h2
            className={`text-2xl md:text-3xl lg:text-4xl ${
              is4K ? "text-7xl" : ""
            } font-extrabold mb-12 md:mb-16 ${is4K ? "mb-24" : ""}`}
            style={{ color: "var(--secondary-color)" }}
          >
            Our Growth: Bridging Tradition with Innovation
          </h2>
          {/* Responsive Grid */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 ${
              is4K ? "gap-20" : ""
            } mb-12 md:mb-16 ${is4K ? "mb-24" : ""}`}
          >
            {/* Card 1 */}
            <div
              className={`p-6 md:p-8 ${
                is4K ? "p-16" : ""
              } rounded-xl md:rounded-2xl ${
                is4K ? "rounded-3xl" : ""
              } shadow-lg hover:shadow-xl transition-all duration-300`}
              style={{ backgroundColor: "var(--primary-color)" }}
            >
              <div
                className={`text-4xl md:text-5xl ${
                  is4K ? "text-8xl" : ""
                } font-bold mb-4 ${is4K ? "mb-8" : ""}`}
                style={{ color: "var(--secondary-light-color)" }}
              >
                2000+
              </div>
              <h3
                className={`text-lg md:text-xl ${
                  is4K ? "text-4xl" : ""
                } font-semibold mb-3 ${is4K ? "mb-6" : ""}`}
                style={{ color: "var(--secondary-light-color)" }}
              >
                Craft Preservation
              </h3>
              <p
                className={`text-gray-200 text-sm md:text-base ${
                  is4K ? "text-2xl" : ""
                }`}
              >
                Preserving traditions with blockchain for product authenticity
              </p>
            </div>
            {/* Card 2 */}
            <div
              className={`p-6 md:p-8 ${
                is4K ? "p-16" : ""
              } rounded-xl md:rounded-2xl ${
                is4K ? "rounded-3xl" : ""
              } shadow-lg hover:shadow-xl transition-all duration-300`}
              style={{ backgroundColor: "var(--primary-color)" }}
            >
              <div
                className={`text-4xl md:text-5xl ${
                  is4K ? "text-8xl" : ""
                } font-bold mb-4 ${is4K ? "mb-8" : ""}`}
                style={{ color: "var(--secondary-light-color)" }}
              >
                2000+
              </div>
              <h3
                className={`text-lg md:text-xl ${
                  is4K ? "text-4xl" : ""
                } font-semibold mb-3 ${is4K ? "mb-6" : ""}`}
                style={{ color: "var(--secondary-light-color)" }}
              >
                Skilled Artisans
              </h3>
              <p
                className={`text-gray-200 text-sm md:text-base ${
                  is4K ? "text-2xl" : ""
                }`}
              >
                Providing fair wages and access to global customer base
              </p>
            </div>
            {/* Card 3 */}
            <div
              className={`p-6 md:p-8 ${
                is4K ? "p-16" : ""
              } rounded-xl md:rounded-2xl ${
                is4K ? "rounded-3xl" : ""
              } shadow-lg hover:shadow-xl transition-all duration-300`}
              style={{ backgroundColor: "var(--primary-color)" }}
            >
              <div
                className={`text-4xl md:text-5xl ${
                  is4K ? "text-8xl" : ""
                } font-bold mb-4 ${is4K ? "mb-8" : ""}`}
                style={{ color: "var(--secondary-light-color)" }}
              >
                100+
              </div>
              <h3
                className={`text-lg md:text-xl ${
                  is4K ? "text-4xl" : ""
                } font-semibold mb-3 ${is4K ? "mb-6" : ""}`}
                style={{ color: "var(--secondary-light-color)" }}
              >
                Global Buyers
              </h3>
              <p
                className={`text-gray-200 text-sm md:text-base ${
                  is4K ? "text-2xl" : ""
                }`}
              >
                International retailers to luxury brands sourcing authentic
                crafts
              </p>
            </div>
            {/* Card 4 */}
            <div
              className={`p-6 md:p-8 ${
                is4K ? "p-16" : ""
              } rounded-xl md:rounded-2xl ${
                is4K ? "rounded-3xl" : ""
              } shadow-lg hover:shadow-xl transition-all duration-300`}
              style={{ backgroundColor: "var(--primary-color)" }}
            >
              <div
                className={`text-4xl md:text-5xl ${
                  is4K ? "text-8xl" : ""
                } font-bold mb-4 ${is4K ? "mb-8" : ""}`}
                style={{ color: "var(--secondary-light-color)" }}
              >
                $3M+
              </div>
              <h3
                className={`text-lg md:text-xl ${
                  is4K ? "text-4xl" : ""
                } font-semibold mb-3 ${is4K ? "mb-6" : ""}`}
                style={{ color: "var(--secondary-light-color)" }}
              >
                Paid to Artisans
              </h3>
              <p
                className={`text-gray-200 text-sm md:text-base ${
                  is4K ? "text-2xl" : ""
                }`}
              >
                Direct payments enabling reinvestment in craft and communities
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
              className={`text-3xl md:text-4xl lg:text-5xl ${
                is4K ? "text-8xl" : ""
              } font-bold mb-6 md:mb-8 ${is4K ? "mb-12" : ""}`}
              style={{ color: "var(--primary-color)" }}
            >
              How We Help Artisans Thrive
            </h2>
            <p
              className={`text-lg md:text-xl ${
                is4K ? "text-4xl" : ""
              } text-gray-700 max-w-4xl ${is4K ? "max-w-6xl" : ""} mx-auto`}
            >
              Our platform provides more than just a marketplace; it is a
              holistic support system designed to help artisans expand their
              reach, optimize their production, and scale their businesses.
            </p>
          </div>
          <div
            className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 ${
              is4K ? "gap-16" : ""
            }`}
          >
            <div
              className={`bg-white p-6 md:p-8 ${
                is4K ? "p-16" : ""
              } rounded-xl md:rounded-2xl ${
                is4K ? "rounded-3xl" : ""
              } shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}
            >
              <div
                className={`w-12 h-12 md:w-16 md:h-16 ${
                  is4K ? "w-24 h-24" : ""
                } rounded-full flex items-center justify-center mb-4 md:mb-6 ${
                  is4K ? "mb-10" : ""
                }`}
                style={{ backgroundColor: "var(--primary-color)" }}
              >
                <Heart
                  className={`h-6 w-6 md:h-8 md:w-8 ${
                    is4K ? "h-12 w-12" : ""
                  } text-white`}
                />
              </div>
              <h3
                className={`text-lg md:text-xl ${
                  is4K ? "text-4xl" : ""
                } font-bold mb-3 md:mb-4 ${is4K ? "mb-6" : ""}`}
                style={{ color: "var(--primary-color)" }}
              >
                Compensation Growth
              </h3>
              <p
                className={`text-gray-700 text-sm md:text-base ${
                  is4K ? "text-2xl" : ""
                }`}
              >
                Ensuring artisans receive fair market value, cutting middlemen &
                connecting with buyers.
              </p>
            </div>
            <div
              className={`bg-white p-6 md:p-8 ${
                is4K ? "p-16" : ""
              } rounded-xl md:rounded-2xl ${
                is4K ? "rounded-3xl" : ""
              } shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}
            >
              <div
                className={`w-12 h-12 md:w-16 md:h-16 ${
                  is4K ? "w-24 h-24" : ""
                } rounded-full flex items-center justify-center mb-4 md:mb-6 ${
                  is4K ? "mb-10" : ""
                }`}
                style={{ backgroundColor: "var(--secondary-color)" }}
              >
                <Globe
                  className={`h-6 w-6 md:h-8 md:w-8 ${
                    is4K ? "h-12 w-12" : ""
                  } text-white`}
                />
              </div>
              <h3
                className={`text-lg md:text-xl ${
                  is4K ? "text-4xl" : ""
                } font-bold mb-3 md:mb-4 ${is4K ? "mb-6" : ""}`}
                style={{ color: "var(--primary-color)" }}
              >
                Global Market Access
              </h3>
              <p
                className={`text-gray-700 text-sm md:text-base ${
                  is4K ? "text-2xl" : ""
                }`}
              >
                Connecting artisans with international buyers, luxury brands,
                and retail giants worldwide.
              </p>
            </div>
            <div
              className={`bg-white p-6 md:p-8 ${
                is4K ? "p-16" : ""
              } rounded-xl md:rounded-2xl ${
                is4K ? "rounded-3xl" : ""
              } shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}
            >
              <div
                className={`w-12 h-12 md:w-16 md:h-16 ${
                  is4K ? "w-24 h-24" : ""
                } rounded-full flex items-center justify-center mb-4 md:mb-6 ${
                  is4K ? "mb-10" : ""
                }`}
                style={{ backgroundColor: "var(--primary-color)" }}
              >
                <Users
                  className={`h-6 w-6 md:h-8 md:w-8 ${
                    is4K ? "h-12 w-12" : ""
                  } text-white`}
                />
              </div>
              <h3
                className={`text-lg md:text-xl ${
                  is4K ? "text-4xl" : ""
                } font-bold mb-3 md:mb-4 ${is4K ? "mb-6" : ""}`}
                style={{ color: "var(--primary-color)" }}
              >
                Business Development
              </h3>
              <p
                className={`text-gray-700 text-sm md:text-base ${
                  is4K ? "text-2xl" : ""
                }`}
              >
                Mentorship, training, and marketing tools to help artisans
                succeed in the global marketplace.
              </p>
            </div>
            <div
              className={`bg-white p-6 md:p-8 ${
                is4K ? "p-16" : ""
              } rounded-xl md:rounded-2xl ${
                is4K ? "rounded-3xl" : ""
              } shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}
            >
              <div
                className={`w-12 h-12 md:w-16 md:h-16 ${
                  is4K ? "w-24 h-24" : ""
                } rounded-full flex items-center justify-center mb-4 md:mb-6 ${
                  is4K ? "mb-10" : ""
                }`}
                style={{ backgroundColor: "var(--secondary-color)" }}
              >
                <Award
                  className={`h-6 w-6 md:h-8 md:w-8 ${
                    is4K ? "h-12 w-12" : ""
                  } text-white`}
                />
              </div>
              <h3
                className={`text-lg md:text-xl ${
                  is4K ? "text-4xl" : ""
                } font-bold mb-3 md:mb-4 ${is4K ? "mb-6" : ""}`}
                style={{ color: "var(--primary-color)" }}
              >
                Technology Empowerment
              </h3>
              <p
                className={`text-gray-700 text-sm md:text-base ${
                  is4K ? "text-2xl" : ""
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
        className={`py-16 md:py-20 ${
          is4K ? "py-36" : ""
        } px-4 sm:px-6 lg:px-8 bg-white`}
      >
        <div className={`max-w-6xl ${is4K ? "max-w-screen-2xl" : ""} mx-auto`}>
          <div className={`text-center mb-12 md:mb-16 ${is4K ? "mb-24" : ""}`}>
            <h2
              className={`text-3xl md:text-4xl lg:text-5xl ${
                is4K ? "text-8xl" : ""
              } font-bold mb-6 md:mb-8 ${is4K ? "mb-12" : ""}`}
              style={{ color: "var(--primary-color)" }}
            >
              The Heart of De Koshur Crafts: The Artisans
            </h2>
            <p
              className={`text-lg md:text-xl ${
                is4K ? "text-4xl" : ""
              } text-gray-700 max-w-4xl ${
                is4K ? "max-w-6xl" : ""
              } mx-auto leading-relaxed`}
            >
              At De Koshur Crafts, we believe that the artisans are at the core
              of our mission. Their stories are our story, and their
              craftsmanship is what makes us stand apart.
            </p>
          </div>
          <div
            className={`grid lg:grid-cols-2 gap-12 lg:gap-16 ${
              is4K ? "gap-32" : ""
            } items-center`}
          >
            <div
              className={`space-y-4 md:space-y-6 ${
                is4K ? "space-y-10" : ""
              } text-base md:text-lg ${
                is4K ? "text-3xl" : ""
              } text-gray-700 leading-relaxed`}
            >
              <p>
                These artisans, who often come from remote villages and small
                workshops, possess skills passed down from generations of
                craftspeople. They are the true custodians of Kashmir's rich
                heritage, and De Koshur Crafts provides them with a stage to
                shine on the global stage.
              </p>
              <p>
                Each product sold on our platform carries the story of an
                artisan's journey, of the time and care taken to create it, and
                the cultural significance it embodies. From Pashmina weaving to
                wood carving and embroidery, every piece is a labor of love,
                created with the utmost dedication and passion.
              </p>
            </div>
            <div className="relative">
              <div
                className={`aspect-[4/3] rounded-2xl md:rounded-3xl ${
                  is4K ? "rounded-4xl" : ""
                } shadow-xl md:shadow-2xl ${
                  is4K ? "shadow-3xl" : ""
                } overflow-hidden`}
              >
                <div className="w-full h-full bg-gradient-to-br from-orange-100 to-blue-100 flex items-center justify-center">
                  <div
                    className={`text-center p-6 md:p-8 ${is4K ? "p-16" : ""}`}
                  >
                    <Users
                      className={`h-12 w-12 md:h-16 md:w-16 ${
                        is4K ? "h-24 w-24" : ""
                      } mx-auto mb-4 ${is4K ? "mb-8" : ""}`}
                      style={{ color: "var(--primary-color)" }}
                    />
                    <p
                      className={`text-lg font-semibold ${
                        is4K ? "text-4xl" : ""
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
        className={`py-16 md:py-20 ${
          is4K ? "py-36" : ""
        } px-4 sm:px-6 lg:px-8 bg-white`}
      >
        <div
          className={`max-w-6xl ${
            is4K ? "max-w-screen-2xl" : ""
          } mx-auto text-center`}
        >
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl ${
              is4K ? "text-8xl" : ""
            } font-bold mb-6 md:mb-8 ${is4K ? "mb-12" : ""}`}
            style={{ color: "var(--primary-color)" }}
          >
            The Future of De Koshur Crafts
          </h2>
          <p
            className={`text-lg md:text-xl ${
              is4K ? "text-4xl" : ""
            } text-gray-700 mb-12 md:mb-16 ${is4K ? "mb-24" : ""} max-w-4xl ${
              is4K ? "max-w-6xl" : ""
            } mx-auto`}
          >
            We are creating a future where authentic crafts, sustainability, and
            fair trade are not just ideals but realities. We are building a
            future where Kashmiri artisans are not just skilled creators but are
            also global business leaders, entrepreneurs, and cultural
            ambassadors.
          </p>
          <div
            className={`grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 ${
              is4K ? "gap-16" : ""
            } mb-12 md:mb-16 ${is4K ? "mb-24" : ""}`}
          >
            <div
              className={`bg-gradient-to-br from-blue-50 to-orange-50 p-4 md:p-6 ${
                is4K ? "p-14" : ""
              } rounded-xl shadow-lg hover:shadow-xl transition-all duration-300`}
            >
              <Target
                className={`h-8 w-8 md:h-10 md:w-10 ${
                  is4K ? "h-16 w-16" : ""
                } mx-auto mb-3 md:mb-4 ${is4K ? "mb-8" : ""}`}
                style={{ color: "var(--secondary-color)" }}
              />
              <div
                className={`text-md md:text-3xl ${
                  is4K ? "text-6xl" : ""
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
              className={`bg-gradient-to-br from-orange-50 to-blue-50 p-4 md:p-6 ${
                is4K ? "p-14" : ""
              } rounded-xl shadow-lg hover:shadow-xl transition-all duration-300`}
            >
              <Globe
                className={`h-8 w-8 md:h-10 md:w-10 ${
                  is4K ? "h-16 w-16" : ""
                } mx-auto mb-3 md:mb-4 ${is4K ? "mb-8" : ""}`}
                style={{ color: "var(--primary-color)" }}
              />
              <div
                className={`text-md md:text-3xl ${
                  is4K ? "text-6xl" : ""
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
              className={`bg-gradient-to-br from-blue-50 to-orange-50 p-4 md:p-6 ${
                is4K ? "p-14" : ""
              } rounded-xl shadow-lg hover:shadow-xl transition-all duration-300`}
            >
              <Leaf
                className={`h-8 w-8 md:h-10 md:w-10 ${
                  is4K ? "h-16 w-16" : ""
                } mx-auto mb-3 md:mb-4 ${is4K ? "mb-8" : ""}`}
                style={{ color: "var(--secondary-color)" }}
              />
              <div
                className={`text-md md:text-3xl ${
                  is4K ? "text-6xl" : ""
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
              className={`bg-gradient-to-br from-orange-50 to-blue-50 p-4 md:p-6 ${
                is4K ? "p-14" : ""
              } rounded-xl shadow-lg hover:shadow-xl transition-all duration-300`}
            >
              <TrendingUp
                className={`h-8 w-8 md:h-10 md:w-10 ${
                  is4K ? "h-16 w-16" : ""
                } mx-auto mb-3 md:mb-4 ${is4K ? "mb-8" : ""}`}
                style={{ color: "var(--primary-color)" }}
              />
              <div
                className={`text-md md:text-3xl ${
                  is4K ? "text-6xl" : ""
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
            <DiagonalSection />
          </section>
        </div>
      </section>
    </div>
  );
}
