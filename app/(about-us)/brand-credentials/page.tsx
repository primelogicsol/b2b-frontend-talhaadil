import VerticalHeroSlider from "@/components/Essentials/VerticalBanner";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
        <VerticalHeroSlider/>
      {/* First Section - Video on Right */}
      <section className="py-16 px-10 max-w-7xl mx-auto mt-20">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Content Area */}
          <div className="flex-1">
            <div className="mb-8 lg:mb-12">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--primary-color)] mb-4">
                Certified for Success
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                Building Trust, Unlocking Markets, Empowering Growth Globally
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 h-fit">
              <div className="bg-[var(--secondary-light-color)] p-4 sm:p-6 rounded-lg border-l-4 border-[var(--secondary-color)]">
                <h3 className="text-lg sm:text-xl font-semibold text-[var(--primary-color)] mb-3">
                  Product Credibility
                </h3>
                <p className="text-sm sm:text-base text-gray-700">
                  Certifications validate quality, authenticity, and origins globally.
                </p>
              </div>

              <div className="bg-[var(--secondary-light-color)] p-4 sm:p-6 rounded-lg border-l-4 border-[var(--secondary-color)]">
                <h3 className="text-lg sm:text-xl font-semibold text-[var(--primary-color)] mb-3">Market Access</h3>
                <p className="text-sm sm:text-base text-gray-700">
                  Unlock premium global markets with certified products.
                </p>
              </div>

              <div className="bg-[var(--secondary-light-color)] p-4 sm:p-6 rounded-lg border-l-4 border-[var(--secondary-color)]">
                <h3 className="text-lg sm:text-xl font-semibold text-[var(--primary-color)] mb-3">Competitive Edge</h3>
                <p className="text-sm sm:text-base text-gray-700">
                  Stand out with recognized standards that inspire trust.
                </p>
              </div>

              <div className="bg-[var(--secondary-light-color)] p-4 sm:p-6 rounded-lg border-l-4 border-[var(--secondary-color)]">
                <h3 className="text-lg sm:text-xl font-semibold text-[var(--primary-color)] mb-3">Customer Trust</h3>
                <p className="text-sm sm:text-base text-gray-700">
                  Build strong relationships through verified quality assurance.
                </p>
              </div>

              <div className="bg-[var(--secondary-light-color)] p-4 sm:p-6 rounded-lg border-l-4 border-[var(--secondary-color)]">
                <h3 className="text-lg sm:text-xl font-semibold text-[var(--primary-color)] mb-3">
                  Sustainability Advantage
                </h3>
                <p className="text-sm sm:text-base text-gray-700">
                  Attract eco-conscious buyers with certified practices.
                </p>
              </div>

              <div className="bg-[var(--secondary-light-color)] p-4 sm:p-6 rounded-lg border-l-4 border-[var(--secondary-color)]">
                <h3 className="text-lg sm:text-xl font-semibold text-[var(--primary-color)] mb-3">Growth Potential</h3>
                <p className="text-sm sm:text-base text-gray-700">
                  Expand opportunities with partnerships in high-value markets.
                </p>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg h-full min-h-[300px] lg:min-h-[600px]">
              <video className="w-full h-full object-cover" controls poster="/business-certification-success.png">
                <source src="/placeholder-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Second Section - Video on Left */}
      <section className="py-16 px-10 max-w-7xl mx-auto bg-gray-50">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          <div className="flex-1 order-2 lg:order-1">
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg h-full min-h-[300px] lg:min-h-[600px]">
              <video className="w-full h-full object-cover" controls poster="/global-business-growth-empowerment.png">
                <source src="/placeholder-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-1 order-1 lg:order-2">
            <div className="mb-8 lg:mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--primary-color)] mb-4">
                Empowering Global Growth
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                Unlock markets, build trust, and elevate success
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 h-fit">
              <div className="bg-white p-4 sm:p-6 rounded-lg border-l-4 border-[var(--secondary-color)] shadow-sm">
                <h3 className="text-lg sm:text-xl font-semibold text-[var(--primary-color)] mb-3">Global Access</h3>
                <p className="text-sm sm:text-base text-gray-700">
                  Expand your reach and unlock premium market opportunities.
                </p>
              </div>

              <div className="bg-white p-4 sm:p-6 rounded-lg border-l-4 border-[var(--secondary-color)] shadow-sm">
                <h3 className="text-lg sm:text-xl font-semibold text-[var(--primary-color)] mb-3">
                  Enhanced Credibility
                </h3>
                <p className="text-sm sm:text-base text-gray-700">
                  Boost trust and elevate your brand's reputation globally.
                </p>
              </div>

              <div className="bg-white p-4 sm:p-6 rounded-lg border-l-4 border-[var(--secondary-color)] shadow-sm">
                <h3 className="text-lg sm:text-xl font-semibold text-[var(--primary-color)] mb-3">
                  Strategic Networks
                </h3>
                <p className="text-sm sm:text-base text-gray-700">
                  Forge partnerships and thrive in influential business circles.
                </p>
              </div>

              <div className="bg-white p-4 sm:p-6 rounded-lg border-l-4 border-[var(--secondary-color)] shadow-sm">
                <h3 className="text-lg sm:text-xl font-semibold text-[var(--primary-color)] mb-3">
                  Sales Acceleration
                </h3>
                <p className="text-sm sm:text-base text-gray-700">
                  Drive demand and amplify your revenue potential exponentially.
                </p>
              </div>

              <div className="bg-white p-4 sm:p-6 rounded-lg border-l-4 border-[var(--secondary-color)] shadow-sm">
                <h3 className="text-lg sm:text-xl font-semibold text-[var(--primary-color)] mb-3">Industry Insights</h3>
                <p className="text-sm sm:text-base text-gray-700">
                  Stay ahead with knowledge of market trends and innovations.
                </p>
              </div>

              <div className="bg-white p-4 sm:p-6 rounded-lg border-l-4 border-[var(--secondary-color)] shadow-sm">
                <h3 className="text-lg sm:text-xl font-semibold text-[var(--primary-color)] mb-3">Brand Empowerment</h3>
                <p className="text-sm sm:text-base text-gray-700">
                  Strengthen your presence and achieve sustainable business growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
