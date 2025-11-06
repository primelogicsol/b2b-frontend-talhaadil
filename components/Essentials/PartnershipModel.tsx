import {
  Package,
  Handshake,
  GalleryVertical,
  Globe,
  Building,
  Store,
  Network,
  Gem,
} from "lucide-react";
import { useGlobalContext } from "@/context/ScreenProvider";

// Default data if no props are passed
const defaultModels = [
  {
    model: "Drop Shipping",
    purpose:
      "Plug into our supply chain. Sell authentic Kashmiri crafts directly from verified vendors without inventory.",
    icon: Package,
  },
  {
    model: "Consignment",
    purpose:
      "Partner with Kashmir’s top artisan cooperatives for a flexible sales model built on mutual trust.",
    icon: Handshake,
  },
  {
    model: "Exhibition",
    purpose:
      "Showcase or source authentic Kashmiri collections at international design expos and art fairs.",
    icon: GalleryVertical,
  },
  {
    model: "Import Export",
    purpose:
      "Source certified, high-quality Kashmiri crafts for wholesale, retail, or gallery curation.",
    icon: Globe,
  },
  
  
];

export default function PartnershipModel({
  title = "Our Strategic Partnership Models",
  subtitle = "Avail Opportunity for 7-Year Progressive Partnership Journey With Us",
  models = defaultModels,
}: {
  title?: string;
  subtitle?: string;
  models?: {
    model: string;
    purpose: string;
    icon: React.ElementType;
  }[];
}) {
  const { is4K } = useGlobalContext();

  return (
    <section className={`py-8 md:py-12 bg-background text-foreground ${is4K ? "py-16" : ""}`}>
      <div className={`container ${is4K ? "px-16" : "px-4 md:px-6"}`}>
        <div className={`text-center mb-12 ${is4K ? "mb-16" : ""}`}>
          <h2
            className={`font-bold text-[var(--primary-color)] ${
              is4K ? "text-7xl font-bold mb-10" : "text-3xl md:text-4xl"
            }`}
          >
            {title}
          </h2>
          <p className={`mt-2 text-[var(--secondary-color)] ${is4K ? "text-2xl" : "text-lg"}`}>
            {subtitle}
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          {models.map((model, index) => (
            <div
              key={index}
              className="flex flex-col h-full rounded-lg border-2 border-[var(--primary-color)] bg-card text-card-foreground shadow-sm
                         hover:border-[var(--primary-color)] transition-colors duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <div
                className={`flex flex-col items-center text-center ${
                  is4K ? "p-8 pb-6 min-h-[140px]" : "p-6 pb-4 min-h-[120px]"
                } justify-center`}
              >
                <model.icon
                  className={`${
                    is4K ? "w-12 h-12 mb-5" : "w-10 h-10 mb-4"
                  } text-[var(--secondary-color)]`}
                />
                <h3 className={`${is4K ? "text-2xl" : "text-xl"} font-semibold text-[var(--primary-color)]`}>
                  {model.model}
                </h3>
              </div>
              <div
                className={`flex-grow ${
                  is4K ? "p-8 pt-0 min-h-[120px]" : "p-6 pt-0 min-h-[100px]"
                } flex items-center justify-center`}
              >
                <p className={`text-center text-[var(--primary-color)] ${is4K ? "text-base leading-relaxed" : ""}`}>
                  {model.purpose}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
