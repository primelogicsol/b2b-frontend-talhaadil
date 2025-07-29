import type React from "react";
import {
  Shield,
  Globe,
  Package,
  Camera,
  Megaphone,
  Store,
  Code,
  Users,
  TrendingUp,
  ShoppingCart,
  FileText,
  Truck,
  Building,
  Calendar,
  Gavel,
  Tag,
  Home,
  Lightbulb,
  Video,
  GraduationCap,
  Wrench,
  DollarSign,
  LibraryIcon as Museum,
  Heart,
  BarChart3,
} from "lucide-react";

interface PartnershipBenefit {
  title: string;
  description: string;
}

interface PartnershipTier {
  title: string;
  description: string;
  details: string;
  kpi: string;
  retention: string;
}

interface TierAdvancement {
  tier: string;
  fromTier: string;
  retention: string;
  kpiThreshold: string;
}

type PartnershipCategory = {
  title: string;
  items: { title: string }[];
};

export interface PartnershipPageProps {
  title: string;
  subtitle: string;
  categories: PartnershipCategory[];
  // Vendor Partnership Section
  vendorTitle: string;
  vendorSubtitle: string;
  vendorIntro: string;
  vendorBenefits: PartnershipBenefit[];

  // Buyer Partnership Section
  buyerTitle: string;
  buyerTagline: string;
  buyerDescription: string;

  // Partnership Categories
  Title: string;
  Description: string;
  Partnerships: PartnershipTier[];

  // Tier Advancement
  tierAdvancementTitle: string;
  tierAdvancements: TierAdvancement[];
}

export const PartnershipPage: React.FC<PartnershipPageProps> = ({
  vendorTitle,
  vendorSubtitle,
  vendorIntro,
  vendorBenefits,
  buyerTitle,
  buyerTagline,
  buyerDescription,
  Title,
  Description,
  Partnerships,
 
  tierAdvancementTitle,
  tierAdvancements,
  title,
  subtitle,
  categories,
}) => {
  const PartnershipCard: React.FC<{
    partnership: PartnershipTier;
    index: number;
  }> = ({ partnership, index }) => {
    const getIcon = (title: string) => {
      const iconMap: { [key: string]: any } = {
        "Drop Shipping Buyer": ShoppingCart,
        "Consignment Buyer": FileText,
        "Import Buyer": Truck,
        "Wholesale & Distribution Buyer": Building,
        "Exhibition Buyer & Event Organizer": Calendar,
        "Auction & Bidding Buyer": Gavel,
        "White-Label Buyer": Tag,
        "Brick & Mortar Space-Sharing Buyer": Home,
        "Knowledge & Design Partner": Lightbulb,
        "Storytelling & Media Partner": Video,
        "Buyer Mentorship Program": GraduationCap,
        "Craft Innovation Patron": Wrench,
        "Strategic Investor Buyer": DollarSign,
        "Museum/Institutional Buyer": Museum,
        "NGO & Government Buyer": Heart,
        "Impact Measurement Buyer": BarChart3,
      };
      const IconComponent = iconMap[title] || ShoppingCart;
      return <IconComponent className="w-8 h-8 text-white" />;
    };

    return (
      <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white via-gray-50 to-white border border-gray-200 hover:border-[var(--primary-color)] transition-all duration-500 hover:shadow-2xl hover:shadow-[var(--primary-color)]/20 transform hover:-translate-y-2 ">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-color)]/5 via-transparent to-[var(--secondary-color)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="relative p-8">
          <div className="flex items-start justify-between mb-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--primary-color)] to-[var(--primary-hover-color)] flex items-center justify-center shadow-lg">
              {getIcon(partnership.title)}
            </div>
            <div className="flex gap-2">
              <span className="px-4 py-2 bg-gradient-to-r from-[var(--secondary-color)] to-[var(--secondary-color)]/80 text-white text-xs font-bold rounded-full shadow-lg">
                {partnership.kpi}
              </span>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-[var(--primary-color)] mb-4 group-hover:text-[var(--primary-hover-color)] transition-colors duration-300">
            {partnership.title}
          </h3>

          <p className="text-gray-700 mb-6 leading-relaxed text-lg font-medium">
            {partnership.description}
          </p>

          <p className="text-gray-600 mb-6 leading-relaxed">
            {partnership.details}
          </p>

          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-gradient-to-r from-[var(--secondary-light-color)] to-[var(--secondary-light-color)]/70 text-[var(--secondary-color)] rounded-full font-semibold text-sm shadow-md">
              {partnership.retention}
            </span>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--primary-color)] via-[var(--secondary-color)] to-[var(--primary-color)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
        </div>
      </div>
    );
  };

  const BenefitCard: React.FC<{
    benefit: PartnershipBenefit;
    index: number;
  }> = ({ benefit, index }) => {
    const getIcon = (index: number) => {
      const icons = [
        Shield,
        Globe,
        Package,
        Camera,
        Megaphone,
        Store,
        Code,
        Users,
        TrendingUp,
      ];
      const IconComponent = icons[index] || Shield;
      return <IconComponent className="w-8 h-8 text-white" />;
    };

    return (
      <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:border-[var(--secondary-color)] transition-all duration-500 hover:shadow-2xl hover:shadow-[var(--secondary-color)]/20 transform hover:-translate-y-3">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--secondary-color)]/10 via-transparent to-[var(--primary-color)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        <div className="relative p-8">
          <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-[var(--secondary-color)] to-[var(--secondary-color)]/80 flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform duration-500">
            {getIcon(index)}
          </div>

          <h3 className="text-xl font-bold text-[var(--primary-color)] mb-4 group-hover:text-[var(--secondary-color)] transition-colors duration-300">
            {benefit.title}
          </h3>

          <p className="text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
            {benefit.description}
          </p>

          <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gradient-to-br from-[var(--primary-color)]/20 to-[var(--secondary-color)]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
      </div>
    );
  };

  const SectionHeader: React.FC<{
    title: string;
    description: string;
    accent?: boolean;
  }> = ({ title, description, accent = false }) => (
    <div className="text-center mb-20 px-4">
      <div className="relative inline-block">
        <h2 className="text-4xl md:text-6xl font-black mb-6 text-[var(--primary-color)]">
          {title}
        </h2>
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-[var(--secondary-color)] to-[var(--primary-color)] rounded-full"></div>
      </div>
      <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mt-8 font-medium">
        {description}
      </p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Vendor Benefits Section */}
      <section className="py-24 px-6 lg:px-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-color)]/5 via-transparent to-[var(--secondary-color)]/5"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[var(--primary-color)]/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[var(--secondary-color)]/10 to-transparent rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto relative">
          <SectionHeader
            title={vendorTitle}
            description={vendorIntro}
            accent={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {vendorBenefits.map((benefit, index) => (
              <BenefitCard key={index} benefit={benefit} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Buyer Partnership Marketplace */}
      <section className="py-24 px-6 lg:px-12 bg-gradient-to-br from-[var(--primary-color)] via-[var(--primary-hover-color)] to-[var(--primary-color)] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="w-full h-full bg-white/5 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
            <div className="absolute top-0 left-0 w-2 h-2 bg-white/20 rounded-full"></div>
            <div className="absolute top-10 left-20 w-1 h-1 bg-white/15 rounded-full"></div>
            <div className="absolute top-20 left-10 w-1.5 h-1.5 bg-white/10 rounded-full"></div>
            <div className="absolute top-5 right-10 w-1 h-1 bg-white/20 rounded-full"></div>
            <div className="absolute top-32 right-20 w-2 h-2 bg-white/15 rounded-full"></div>
            <div className="absolute bottom-10 left-32 w-1 h-1 bg-white/10 rounded-full"></div>
            <div className="absolute bottom-20 right-32 w-1.5 h-1.5 bg-white/20 rounded-full"></div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto text-center relative">
          <div className="mb-8">
            <h2 className=" text-4xl md:text-7xl font-black mb-8 text-white">
              {buyerTitle}
            </h2>
            <div className="relative inline-block">
              <p className="text-2xl md:text-3xl font-bold text-[var(--secondary-light-color)] mb-8 italic relative z-10">
                "{buyerTagline}"
              </p>
            </div>
            <p className="text-xl text-white/90 max-w-5xl mx-auto leading-relaxed font-medium">
              {buyerDescription}
            </p>
          </div>
        </div>
      </section>

      <section
        className="w-full py-12 md:py-16 bg-gradient-to-br from-slate-50 to-white"
      
      >
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7\xl">
          {/* Header Section */}
          <SectionHeader  title={title} description={subtitle} />

          {/* Categories Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {categories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-[var(--secondary-light-color)]"
              >
                {/* Category Header */}
                <div className="bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-hover-color)] p-6">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                    {category.title}
                  </h3>
                </div>

                {/* Partnership Items */}
                <div className="p-6 space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="flex items-center space-x-3 p-3 rounded-xl hover:bg-[var(--secondary-light-color)] hover:bg-opacity-20 transition-all duration-300 cursor-pointer"
                    >
                      <div className="w-6 h-6 bg-[var(--secondary-color)] text-white rounded-full flex items-center justify-center text-xs font-bold">
                        {itemIndex + 1}
                      </div>
                      <h4 className="text-base font-medium text-[var(--primary-color)] hover:text-[var(--primary-hover-color)] transition-colors duration-300">
                        {item.title}
                      </h4>
                    </div>
                  ))}
                </div>

                {/* Bottom Accent */}
                <div className="h-2 bg-gradient-to-r from-[var(--secondary-color)] to-[var(--secondary-light-color)] transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Trade Partnerships */}
      <section className="py-24 px-6 lg:px-12 relative">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title={Title}
            description={Description}
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {Partnerships.map((partnership, index) => (
              <PartnershipCard
                key={index}
                partnership={partnership}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

   
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-12 bg-gradient-to-br from-[var(--primary-color)] via-[var(--primary-hover-color)] to-[var(--primary-color)] text-white relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full relative">
            <div className="absolute top-4 sm:top-6 md:top-10 left-4 sm:left-6 md:left-10 w-2 sm:w-2.5 md:w-3 h-2 sm:h-2.5 md:h-3 bg-white/20 rounded-full animate-pulse"></div>
            <div className="absolute top-16 sm:top-20 md:top-32 left-16 sm:left-20 md:left-32 w-1.5 sm:w-2 md:w-2 h-1.5 sm:h-2 md:h-2 bg-white/15 rounded-full animate-pulse delay-100"></div>
            <div className="absolute top-8 sm:top-12 md:top-20 right-8 sm:right-12 md:right-20 w-1 sm:w-1.5 md:w-1.5 h-1 sm:h-1.5 md:h-1.5 bg-white/10 rounded-full animate-pulse delay-200"></div>
            <div className="absolute bottom-8 sm:bottom-12 md:bottom-20 left-8 sm:left-12 md:left-20 w-2 sm:w-2.5 md:w-2.5 h-2 sm:h-2.5 md:h-2.5 bg-white/25 rounded-full animate-pulse delay-300"></div>
            <div className="absolute bottom-16 sm:bottom-20 md:bottom-32 right-16 sm:right-20 md:right-32 w-1 h-1 bg-white/15 rounded-full animate-pulse delay-500"></div>
            <div className="absolute top-1/2 left-1/4 w-1.5 sm:w-2 md:w-2 h-1.5 sm:h-2 md:h-2 bg-white/20 rounded-full animate-pulse delay-700"></div>
            <div className="absolute top-1/3 right-1/3 w-1 sm:w-1.5 md:w-1.5 h-1 sm:h-1.5 md:h-1.5 bg-white/10 rounded-full animate-pulse delay-1000"></div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          {/* Title */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 sm:mb-6 text-white leading-tight">
              {tierAdvancementTitle}
            </h3>
          </div>

          {/* Desktop/Tablet Table View */}
          <div className="hidden sm:block overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl backdrop-blur-sm">
            <div className="overflow-x-auto">
              <table className="w-full bg-white/95 backdrop-blur-sm min-w-[600px]">
                <thead className="bg-gradient-to-r from-[var(--secondary-color)] to-[var(--secondary-color)]/80 text-white">
                  <tr>
                    <th className="px-3 sm:px-4 md:px-6 lg:px-8 py-3 sm:py-4 md:py-5 lg:py-6 text-left font-black text-sm sm:text-base md:text-lg">
                      Tier
                    </th>
                    <th className="px-3 sm:px-4 md:px-6 lg:px-8 py-3 sm:py-4 md:py-5 lg:py-6 text-left font-black text-sm sm:text-base md:text-lg">
                      From Which Tier
                    </th>
                    <th className="px-3 sm:px-4 md:px-6 lg:px-8 py-3 sm:py-4 md:py-5 lg:py-6 text-left font-black text-sm sm:text-base md:text-lg">
                      Retention Required
                    </th>
                    <th className="px-3 sm:px-4 md:px-6 lg:px-8 py-3 sm:py-4 md:py-5 lg:py-6 text-left font-black text-sm sm:text-base md:text-lg">
                      KPI Threshold
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tierAdvancements.map((advancement, index) => (
                    <tr
                      key={index}
                      className={`${
                        index % 2 === 0 ? "bg-gray-50/80" : "bg-white/80"
                      } hover:bg-[var(--secondary-light-color)]/30 transition-colors duration-300`}
                    >
                      <td className="px-3 sm:px-4 md:px-6 lg:px-8 py-3 sm:py-4 md:py-5 lg:py-6 font-bold text-[var(--primary-color)] text-sm sm:text-base md:text-lg">
                        {advancement.tier}
                      </td>
                      <td className="px-3 sm:px-4 md:px-6 lg:px-8 py-3 sm:py-4 md:py-5 lg:py-6 font-semibold text-gray-700 text-sm sm:text-base">
                        {advancement.fromTier}
                      </td>
                      <td className="px-3 sm:px-4 md:px-6 lg:px-8 py-3 sm:py-4 md:py-5 lg:py-6 font-semibold text-gray-700 text-sm sm:text-base">
                        {advancement.retention}
                      </td>
                      <td className="px-3 sm:px-4 md:px-6 lg:px-8 py-3 sm:py-4 md:py-5 lg:py-6">
                        <span className="inline-block px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-hover-color)] text-white rounded-full font-bold text-xs sm:text-sm shadow-lg">
                          {advancement.kpiThreshold}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile Card View */}
          <div className="sm:hidden space-y-4">
            {tierAdvancements.map((advancement, index) => (
              <div
                key={index}
                className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/20"
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-xl font-black text-[var(--primary-color)]">
                    {advancement.tier}
                  </h4>
                  <span className="px-3 py-1 bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-hover-color)] text-white rounded-full font-bold text-xs shadow-lg">
                    {advancement.kpiThreshold}
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-semibold text-gray-600">
                      From Tier:
                    </span>
                    <span className="text-sm font-bold text-gray-800">
                      {advancement.fromTier}
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm font-semibold text-gray-600">
                      Retention:
                    </span>
                    <span className="text-sm font-bold text-gray-800">
                      {advancement.retention}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
