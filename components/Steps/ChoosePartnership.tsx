"use client";
import { useEffect, useState } from "react";
import { FaHandshake, FaCheck, FaLock } from "react-icons/fa";
import { useGlobalContext } from "@/context/ScreenProvider";
import { sendLevel } from "@/services/regitsration";
import Cookies from "js-cookie";
import { useToast } from "@/context/ToastProvider";
import { TruckElectricIcon } from "lucide-react";
interface Partnership {
  id: string;
  level: number;
  partnership_name: string;
  vendor: string;
  buyer: string;
  description: string;
  retention: string;
  kpiScore: string;
  available: boolean;
  isAltPath?: boolean;
}

interface ChoosePartnershipProps {
  data?: {
    selected: string;
    title: string;
  };
  onUpdate: (data: { selected: string; title: string }) => void;
  onNext: () => void;
  onPrev: () => void;
  user_role?: "buyer" | "vendor"; // Add user role prop
}
const partnerships: Partnership[] = [
  {
    id: "drop_shipping",
    level: 1,
    partnership_name: "Drop Shipping / E-Commerce",
    vendor: "Fulfillment Partner",
    buyer: "Reseller",
    description:
      "Perfect entry point for online business expansion. Low risk, high potential for market reach and customer acquisition.",
    retention: "No requirement",
    kpiScore: "No requirement",
    available: true,
  },
  {
    id: "consignment",
    level: 2,
    partnership_name: "Consignment",
    vendor: "Consignor",
    buyer: "Consignee",
    description:
      "Risk-free inventory management model. Products are sold on behalf of the consignor with shared revenue structure.",
    retention: "18 months",
    kpiScore: "7+",
    available: false,
    isAltPath: true,
  },
  {
    id: "import_export",
    level: 3,
    partnership_name: "Import Export",
    vendor: "Exporter",
    buyer: "Importer",
    description:
      "International trade opportunities with global market access. Requires compliance with international trade regulations.",
    retention: "6 months",
    kpiScore: "7+",
    available: false,
    isAltPath: true,
  },
  {
    id: "wholesale",
    level: 4,
    partnership_name: "Wholesale & Distribution",
    vendor: "Wholesaler",
    buyer: "Distributor",
    description:
      "Bulk trading partnership for large volume transactions. Ideal for established businesses with strong distribution networks.",
    retention: "12 months",
    kpiScore: "8+",
    available: false,
    isAltPath: true,
  },
  {
    id: "exhibition",
    level: 5,
    partnership_name: "Exhibition",
    vendor: "Exhibitor",
    buyer: "Participant / Event Organizer",
    description:
      "Showcase products at premium exhibitions and trade shows. Direct access to targeted audience and networking opportunities.",
    retention: "6 months",
    kpiScore: "7+",
    available: false,
  },
  {
    id: "auction",
    level: 6,
    partnership_name: "Auction & Bidding",
    vendor: "Auction",
    buyer: "Bidder",
    description:
      "Premium auction platform for high-value Kashmir crafts. Competitive bidding environment with authenticated products.",
    retention: "24 months",
    kpiScore: "8+",
    available: false,
  },
  {
    id: "white_label",
    level: 7,
    partnership_name: "White Label",
    vendor: "White Label Producer",
    buyer: "Brand Owner",
    description:
      "Private label manufacturing partnership. Create your own brand with our premium Kashmir craft expertise.",
    retention: "18 months",
    kpiScore: "8+",
    available: false,
  },
  {
    id: "brick_mortar",
    level: 8,
    partnership_name: "Brick & Mortar",
    vendor: "Space Provider",
    buyer: "Tenant",
    description:
      "Physical retail space partnership for premium Kashmir craft stores. Prime locations with established foot traffic.",
    retention: "12 months",
    kpiScore: "7+",
    available: false,
  },
  {
    id: "design_collaboration",
    level: 9,
    partnership_name: "Design Collaboration",
    vendor: "Collaboration Supplier",
    buyer: "Collaboration Partner",
    description:
      "Creative partnership for custom design development. Combine traditional craftsmanship with modern design aesthetics.",
    retention: "9 months",
    kpiScore: "7+",
    available: false,
  },
  {
    id: "storytelling",
    level: 10,
    partnership_name: "Storytelling & Media",
    vendor: "Content Supplier",
    buyer: "Media Rights Buyer",
    description:
      "Content creation and media rights partnership. Share the rich heritage and stories behind Kashmir crafts.",
    retention: "6 months",
    kpiScore: "6+",
    available: false,
  },
  {
    id: "warehouse",
    level: 11,
    partnership_name: "Warehouse",
    vendor: "Warehouse Provider",
    buyer: "Warehouse Client",
    description:
      "Strategic storage and fulfillment partnership. Optimized logistics for efficient inventory management.",
    retention: "12 months",
    kpiScore: "7+",
    available: false,
  },
  {
    id: "packaging",
    level: 12,
    partnership_name: "Packaging",
    vendor: "Packaging Supplier",
    buyer: "Packaging Client",
    description:
      "Premium packaging solutions for Kashmir crafts. Sustainable and culturally appropriate packaging designs.",
    retention: "6 months",
    kpiScore: "6+",
    available: false,
  },
  {
    id: "logistics",
    level: 13,
    partnership_name: "Logistics",
    vendor: "Logistics Provider",
    buyer: "Logistics Client",
    description:
      "End-to-end logistics partnership for seamless product delivery. Specialized handling for delicate Kashmir crafts.",
    retention: "9 months",
    kpiScore: "7+",
    available: false,
  },
  {
    id: "museum_institutional",
    level: 14,
    partnership_name: "Museum / Institutional",
    vendor: "Institutional Supplier",
    buyer: "Museum Buyer",
    description:
      "Cultural preservation partnership with museums and institutions. Showcase authentic Kashmir heritage globally.",
    retention: "36 months",
    kpiScore: "9+",
    available: false,
  },
  {
    id: "ngo_government",
    level: 15,
    partnership_name: "NGO & Government",
    vendor: "NGO Supplier",
    buyer: "NGO Buyer",
    description:
      "Social impact partnership supporting local artisans. Government and NGO collaboration for community development.",
    retention: "24 months",
    kpiScore: "8+",
    available: false,
  },
  {
    id: "technology_partnership",
    level: 16,
    partnership_name: "Technology Partnership",
    vendor: "Technology Provider",
    buyer: "Technology Client",
    description:
      "Innovation-driven partnership leveraging technology for craft promotion. Digital transformation of traditional business models.",
    retention: "18 months",
    kpiScore: "8+",
    available: false,
  },
];

export default function ChoosePartnership({
  data,
  onUpdate,
  onNext,
  onPrev,
}: ChoosePartnershipProps) {
  const { is4K } = useGlobalContext();
  const [selectedPartnership, setSelectedPartnership] = useState(
    data?.selected || ""
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [user_role, setUserRole] = useState<"buyer" | "vendor">("buyer");
  const { showToast } = useToast();
  useEffect(() => {
    const roleFromCookie = Cookies.get("user_role") as
      | "vendor"
      | "buyer"
      | undefined;
    if (roleFromCookie) {
      setUserRole(roleFromCookie);
    }
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleSelect = (p: Partnership) => {
    if (p.available) {
      setSelectedPartnership(p.id);
      const roleBasedTitle = user_role === "buyer" ? p.buyer : p.vendor;
      onUpdate({
        selected: p.id,
        title: `${p.partnership_name} - ${roleBasedTitle}`,
      });
    }
  };

  const submitPartnershipSelection = async (partnershipData: any) => {
    try {
      setIsSubmitting(true);
      console.log(partnershipData);

      const selectedPartnership = partnerships.find(
        (p) => p.id === partnershipData.selected
      );
      const selectedLevel = selectedPartnership?.level || 1;

      // Get all partnership IDs from level 1 up to the selected level
      const allLevelsUpToSelected = partnerships
        .filter((p) => p.level <= selectedLevel)
        .sort((a, b) => a.level - b.level)
        .map((p) => p.id);

      const lastElement =
        allLevelsUpToSelected[allLevelsUpToSelected.length - 1];

      if (lastElement) {
        localStorage.setItem("partnershipType", lastElement);
      }

      const response = sendLevel({
        levels: allLevelsUpToSelected, // Send all levels instead of just the selected one
        is_lateral: partnershipData.isLateral || false,
      });

      data = (await response).data;
      console.log("Partnership selection submitted successfully:", data);
    } catch (error: any) {
      const errorMsg = error?.response?.data?.detail;

      if (errorMsg === "User already has registration levels") {
        showToast("You have already submitted the information.");
        setTimeout(() => {
          onNext();
        }, 4000);
      } else {
        showToast("Network error. Please try again.");
      }

      console.error("Network Error:", error);

      console.error("Error submitting partnership selection:", error);
      throw error;
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNext = async () => {
    if (selectedPartnership) {
      try {
        const selectedData = {
          selected: selectedPartnership,
          title:
            partnerships.find((p) => p.id === selectedPartnership)
              ?.partnership_name || "",
          isLateral:
            partnerships.find((p) => p.id === selectedPartnership)?.isAltPath ||
            false,
        };

        await submitPartnershipSelection(selectedData);
        onNext();
      } catch (error) {
        // Error already handled in submitPartnershipSelection
      }
    }
  };

  const handleGoToPay = (p: Partnership) => {
    alert(
      `Redirecting to payment for ${p.partnership_name} - ${
        user_role === "buyer" ? p.buyer : p.vendor
      }…`
    );
  };

  const getRoleBasedTitle = (p: Partnership) => {
    return user_role === "buyer" ? p.buyer : p.vendor;
  };

  const getRoleBasedDescription = (p: Partnership) => {
    const baseDescription = p.description;
    const roleContext =
      user_role === "buyer"
        ? `As a ${p.buyer}, you will benefit from this partnership structure.`
        : `As a ${p.vendor}, you will provide services in this partnership model.`;

    return `${baseDescription} ${roleContext}`;
  };

  return (
    <div className={`mx-auto px-6 ${is4K ? "max-w-[2200px]" : "max-w-7xl"}`}>
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-[var(--primary-color)] rounded-full mb-6">
          <FaHandshake className="text-white text-2xl" />
        </div>
        <h1
          className={`font-bold text-[var(--primary-color)] mb-4 ${
            is4K ? "text-6xl" : "text-4xl"
          }`}
        >
          Choose Your Partnership
        </h1>
        <p
          className={`text-[var(--primary-color)]/70 mx-auto ${
            is4K ? "text-2xl max-w-4xl" : "text-xl max-w-2xl"
          }`}
        >
          Select the partnership that best aligns with your business goals as a{" "}
          {user_role}
        </p>
        <div className="mt-4 inline-flex items-center px-4 py-2 bg-[var(--secondary-light-color)] rounded-full">
          <span className="text-sm font-semibold text-[var(--primary-color)]">
            Role: {user_role.charAt(0).toUpperCase() + user_role.slice(1)}
          </span>
        </div>
      </div>

      <div
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12 ${
          is4K ? "gap-12" : ""
        }`}
      >
        {partnerships.map((p) => (
          <div
            key={p.id}
            onClick={() => handleSelect(p)}
            className={`group relative rounded-3xl shadow-xl transition-all duration-300 transform p-8
              ${
                p.available
                  ? "cursor-pointer hover:-translate-y-2"
                  : "opacity-60 grayscale"
              }
              ${
                selectedPartnership === p.id
                  ? "ring-4 ring-[var(--secondary-color)] scale-105"
                  : ""
              }
              ${is4K ? "text-lg" : "text-base"}
            `}
          >
            {p.isAltPath && (
              <div className="absolute top-0 left-0 bg-[var(--secondary-color)] text-white text-xs font-semibold px-3 py-1 rounded-br-2xl rounded-tl-2xl">
                Lateral
              </div>
            )}

            <div className="absolute top-2 right-2 bg-[var(--primary-color)] text-white text-xs font-bold px-2 py-1 rounded-full">
              Level {p.level}
            </div>

            <div className="absolute -top-3 -right-3">
              {selectedPartnership === p.id ? (
                <div className="w-10 h-10 bg-[var(--secondary-color)] rounded-full flex items-center justify-center">
                  <FaCheck className="text-white text-lg" />
                </div>
              ) : p.available ? (
                <div className="w-8 h-8 bg-[var(--primary-color)] rounded-full flex items-center justify-center">
                  <FaCheck className="text-white text-sm" />
                </div>
              ) : (
                <div className="w-8 h-8 bg-[var(--primary-hover-color)] rounded-full flex items-center justify-center">
                  <FaLock className="text-white text-sm" />
                </div>
              )}
            </div>

            <div className="flex justify-start mb-6 mt-6">
              <span
                className={`px-4 py-2 text-sm font-semibold rounded-full ${
                  p.available
                    ? "bg-[var(--secondary-light-color)] text-[var(--primary-color)] border border-[var(--secondary-color)]"
                    : "bg-[var(--primary-hover-color)]/20 text-[var(--primary-color)] border border-[var(--primary-hover-color)]/40"
                }`}
              >
                {p.available ? "Available Now" : "Requirements Not Met"}
              </span>
            </div>

            <h3
              className={`font-bold text-[var(--primary-color)] mb-2 ${
                is4K ? "text-2xl" : "text-xl"
              }`}
            >
              {p.partnership_name}
            </h3>

            <p className="text-sm font-semibold text-[var(--secondary-color)] mb-4">
              Role: {getRoleBasedTitle(p)}
            </p>

            <div className="flex justify-between mb-6 p-4 bg-[var(--primary-hover-color)]/5 rounded-xl">
              <div className="text-center">
                <p className="text-xs text-[var(--primary-color)]/70 mb-1">
                  Retention
                </p>
                <p className="text-sm font-semibold text-[var(--primary-color)]">
                  {p.retention}
                </p>
              </div>
              <div className="w-px bg-[var(--primary-color)]/20"></div>
              <div className="text-center">
                <p className="text-xs text-[var(--primary-color)]/70 mb-1">
                  KPI Score
                </p>
                <p className="text-sm font-semibold text-[var(--primary-color)]">
                  {p.kpiScore}
                </p>
              </div>
            </div>

            <p
              className={`leading-relaxed mb-6 ${
                is4K ? "text-base" : "text-sm"
              } text-[var(--primary-color)]/80`}
            >
              {getRoleBasedDescription(p)}
            </p>

            {!p.available && (
              <div className="mt-auto space-y-2">
                <button
                  className={`w-full text-sm font-semibold py-2 px-4 border rounded-xl transition-colors 
                  text-[var(--secondary-color)] border-[var(--secondary-color)] hover:bg-[var(--secondary-light-color)]`}
                >
                  Learn About Fast-Track Options →
                </button>
                {p.isAltPath && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleGoToPay(p);
                    }}
                    className={`w-full text-sm font-semibold py-2 px-4 border rounded-xl transition-colors 
                    text-[var(--primary-color)] border-[var(--primary-color)] hover:bg-[var(--primary-hover-color)] hover:text-white`}
                  >
                    Go to Pay
                  </button>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {selectedPartnership && (
        <div
          className={`bg-white rounded-3xl shadow-xl p-8 mb-8 border-l-4 border-[var(--secondary-color)] ${
            is4K ? "text-lg" : ""
          }`}
        >
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-[var(--secondary-color)] rounded-full flex items-center justify-center">
              <FaCheck className="text-white text-xl" />
            </div>
            <div>
              <h3
                className={`font-bold text-[var(--primary-color)] ${
                  is4K ? "text-2xl" : "text-xl"
                }`}
              >
                Partnership Selected
              </h3>
              <p className="text-[var(--primary-color)]/80">
                {
                  partnerships.find((p) => p.id === selectedPartnership)
                    ?.partnership_name
                }{" "}
                -{" "}
                {getRoleBasedTitle(
                  partnerships.find((p) => p.id === selectedPartnership)!
                )}
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="flex justify-between items-center mt-8">
        <button
          onClick={onPrev}
          disabled={isSubmitting}
          className={`px-4 py-2 sm:px-8 sm:py-4 sm:font-bold border-2 text-gray-700 rounded-xl transition-all font-medium
            border-[var(--primary-color)] hover:bg-[var(--primary-hover-color)] hover:text-white
            ${is4K ? "text-lg" : ""} ${
            isSubmitting ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          <span className="inline">←</span>
          <span className="hidden md:inline ml-2">Prev</span>
        </button>

        <button
          onClick={handleNext}
          disabled={!selectedPartnership || isSubmitting}
          className={`px-4 py-2 sm:px-8 sm:py-4 sm:font-bold rounded-xl text-white shadow-lg transition-all font-medium
            bg-[var(--primary-color)] hover:bg-[var(--primary-hover-color)]
            ${is4K ? "text-lg" : ""} 
            ${
              !selectedPartnership || isSubmitting
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
        >
          <span className="hidden md:inline mr-2">
            {isSubmitting ? "Submitting..." : "Next"}
          </span>
          <span className="inline">{isSubmitting ? "" : "→"}</span>
        </button>
      </div>
    </div>
  );
}
