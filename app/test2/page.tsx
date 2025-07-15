import Banner from "@/components/Banner"
import HeaderBanner from "@/components/HeaderBanner"
export default function HomePage() {
  return (
    <div className="flex flex-col items-center space-y-8 p-4 md:p-8 lg:p-12 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Dynamic Banners</h1>
      <Banner
        type="conference"
        title="BUSINESS CONFERENCE"
        miniText="Join us for an insightful event."
      />
      <HeaderBanner/>
    </div>
  )
}
