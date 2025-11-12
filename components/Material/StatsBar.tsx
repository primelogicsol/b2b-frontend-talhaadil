"use client"
import { useGlobalContext } from "@/context/ScreenProvider"
export default function StatisticsSection() {
  const { is4K } = useGlobalContext()

  const stats = [
    {
      percentage: "98%",
      label: "Compliance Assurance Rate",
    },
    {
      percentage: "95%",
      label: "Technology Adoption Rate",
    },
    {
      percentage: "95%",
      label: "Supply Chain Efficiency",
    },
    {
      percentage: "60%",
      label: "Operational Cost Savings",
    },
  ]

  return (
    <div className="max-w-[1580px] bg-gray-100 px-4 mx-auto">
      <div
        className="relative overflow-hidden"
        style={{
          backgroundImage: "url('/images/cop.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          borderRadius: "24px",
          padding: is4K ? "80px 60px" : "60px 40px",
        }}
      >
        {/* Orange gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, var(--secondary-color), var(--secondary-hover-color), var(--secondary-color))",
          }}
        />

        {/* Background pattern overlay */}
        <div
          className="absolute inset-0 opacity-10 z-10 "
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        {/* Content */}
        <div className="relative z-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center text-center relative">
                {/* Vertical divider - hidden on mobile, shown on lg+ screens except for last item */}
                {index < stats.length - 1 && (
                  <div
                    className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30"
                    style={{
                      width: "1px",
                      height: is4K ? "120px" : "80px",
                    }}
                  />
                )}

                <div className="text-white font-bold leading-none tracking-tight text-[1.2rem] md:text-[2.4rem] ]">
                  {stat.percentage}
                </div>

                <div className="text-white font-semibold tracking-wider leading-snug max-w-[180px] sm:max-w-[200px] md:max-w-[220px] xl:max-w-[250px] 2xl:max-w-[280px] text-[1rem] md:text-[1rem] ">
                  {stat.label}
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
