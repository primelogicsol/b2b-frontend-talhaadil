"use client";
import { useEffect, useState } from "react";
import { FaHandshake, FaCheck, FaLock } from "react-icons/fa";
import Cookies from "js-cookie";
import { useGlobalContext } from "@/context/ScreenProvider";
import { getCurrentLevel, getAvaliableLevels } from "@/services/user"; // Assuming APIs are in a services file

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

interface PartnershipData {
    available_partnerships: string[];
    kpi_score: number;
    current_partnership_level: string;
    retention_period: string;
    retention_expiration: string;
}

interface CurrentPartnership {
    partnership_level: string;
    kpi_score: number;
    retention_period: string;
    retention_expiration: string;
    is_retention_expired: boolean;
}

const partnerships: Partnership[] = [
    {
        id: "drop_shipping",
        level: 1,
        partnership_name: "Drop Shipping",
        vendor: "Fulfillment Partner",
        buyer: "Reseller",
        description:
            "Perfect entry point for online business expansion. Low risk, high potential for market reach and customer acquisition.",
        retention: "None",
        kpiScore: "None",
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
        retention: "12 months",
        kpiScore: "6+",
        available: true,
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
        retention: "4 months",
        kpiScore: "6.5+",
        available: false,
        isAltPath: true,
    },
    {
        id: "wholesale",
        level: 4,
        partnership_name: "Wholesale",
        vendor: "Wholesaler",
        buyer: "Distributor",
        description:
            "Bulk trading partnership for large volume transactions. Ideal for established businesses with strong distribution networks.",
        retention: "4 months",
        kpiScore: "7+",
        available: false,
        isAltPath: true,
    },
    {
        id: "exhibition",
        level: 5,
        partnership_name: "Exhibition",
        vendor: "Exhibitor",
        buyer: "Participant",
        description:
            "Showcase products at premium exhibitions and trade shows. Direct access to targeted audience and networking opportunities.",
        retention: "4 months",
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
        retention: "4 months",
        kpiScore: "7.5+",
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
        retention: "4 months",
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
        retention: "4 months",
        kpiScore: "8+",
        available: false,
    },
    {
        id: "packaging",
        level: 9,
        partnership_name: "Packaging",
        vendor: "Packaging Supplier",
        buyer: "Packaging Client",
        description:
            "Premium packaging solutions for Kashmir crafts. Sustainable and culturally appropriate packaging designs.",
        retention: "18 months",
        kpiScore: "8+",
        available: false,
    },
    {
        id: "design_collaboration",
        level: 10,
        partnership_name: "Design Collaboration",
        vendor: "Collaboration Supplier",
        buyer: "Collaboration Partner",
        description:
            "Creative partnership for custom design. Combine traditional craftsmanship with modern aesthetics.",
        retention: "4 months",
        kpiScore: "8+",
        available: false,
    },
    {
        id: "storytelling",
        level: 11,
        partnership_name: "Storytelling & Media",
        vendor: "Content Supplier",
        buyer: "Media Rights Buyer",
        description:
            "Content creation and media rights partnership. Share the rich heritage and stories behind Kashmir crafts.",
        retention: "4 months",
        kpiScore: "8.5+",
        available: false,
    },
    {
        id: "warehouse",
        level: 12,
        partnership_name: "Warehouse",
        vendor: "Warehouse Provider",
        buyer: "Warehouse Client",
        description:
            "Strategic storage and fulfillment partnership. Optimized logistics for efficient inventory management.",
        retention: "4 months",
        kpiScore: "8.5+",
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
        retention: "12 months",
        kpiScore: "Negotiable",
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
        retention: "None",
        kpiScore: "None",
        available: false,
    },
    {
        id: "ngo_government",
        level: 15,
        partnership_name: "NGO & Government",
        vendor: "NGO Supplier",
        buyer: "NGO Buyer",
        description:
            "Social impact partnership supporting artisans. Government & NGO collaboration for community development.",
        retention: "None",
        kpiScore: "None",
        available: false,
    },
    {
        id: "technology_partnership",
        level: 16,
        partnership_name: "Tech Partner",
        vendor: "Technology Provider",
        buyer: "Technology Client",
        description:
            "Innovation-driven partnership leveraging technology for craft promotion. Digital transformation of traditional business models.",
        retention: "None",
        kpiScore: "None",
        available: false,
    },
];

export default function PartnershipDisplay() {
    const { is4K } = useGlobalContext();
    const [userRole, setUserRole] = useState<"buyer" | "vendor">("buyer");
    const [partnershipData, setPartnershipData] = useState<PartnershipData | null>(null);
    const [currentPartnership, setCurrentPartnership] = useState<CurrentPartnership | null>(null);
    const [displayPartnerships, setDisplayPartnerships] = useState<Partnership[]>(partnerships);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const roleFromCookie = Cookies.get("user_role") as "vendor" | "buyer" | undefined;
        if (roleFromCookie) {
            setUserRole(roleFromCookie);
        }
    }, []);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    useEffect(() => {
        const fetchPartnershipData = async () => {
            try {
                setLoading(true);
                // Call both APIs concurrently
                const [currentLevelResponse, availableLevelsResponse] = await Promise.all([
                    getCurrentLevel(),
                    getAvaliableLevels(),
                ]);

                const currentData = currentLevelResponse.data;
                const availableData = availableLevelsResponse.data;

                if (currentData.partnership_level === "BRICK_MORTRAR") {
                    currentData.partnership_level = "BRICK_MORTAR";
                }

                if (availableData.current_partnership_level === "BRICK_MORTRAR") {
                    availableData.current_partnership_level = "BRICK_MORTAR";
                }

                setCurrentPartnership(currentData);
                setPartnershipData(availableData);

            } catch (err) {
                setError("Failed to fetch partnership data. Please try again later.");
                console.error("API Error:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchPartnershipData();
    }, []);

    useEffect(() => {
        if (partnershipData) {
            // Normalize available partnerships to match partnership IDs
            const normalizedAvailable = partnershipData.available_partnerships.map((p) =>
                p.toLowerCase().replace("_", "_")
            );

            // Find the highest level among available partnerships
            const maxLevel = Math.max(
                ...partnerships
                    .filter((p) => normalizedAvailable.includes(p.id))
                    .map((p) => p.level),
                0
            );

            // Update partnerships to make all levels up to maxLevel available
            const updatedPartnerships = partnerships.map((p) => ({
                ...p,
                available: p.level <= maxLevel || normalizedAvailable.includes(p.id),
            }));

            setDisplayPartnerships(updatedPartnerships);
        }
    }, [partnershipData]);

    const getRoleBasedTitle = (p: Partnership) => {
        return userRole === "buyer" ? p.buyer : p.vendor;
    };

    const getRoleBasedDescription = (p: Partnership) => {
        const baseDescription = p.description;
        const roleContext =
            userRole === "buyer"
                ? `As a ${p.buyer}, you will benefit from this partnership structure.`
                : `As a ${p.vendor}, you will provide services in this partnership model.`;
        return `${baseDescription} ${roleContext}`;
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="w-12 h-12 border-4 border-[var(--primary-color)] border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }


    if (error) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p className="text-red-600 text-xl">{error}</p>
            </div>
        );
    }

    if (!partnershipData || !currentPartnership) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p className="text-[var(--primary-color)] text-xl">No partnership data available.</p>
            </div>
        );
    }

    return (
        <div className={`mx-auto px-6 pt-20 ${is4K ? "max-w-[2200px]" : "max-w-7xl"}`}>
            <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[var(--primary-color)] rounded-full mb-6">
                    <FaHandshake className="text-white text-2xl" />
                </div>
                <h1
                    className={`font-bold text-[var(--primary-color)] mb-4 ${is4K ? "text-6xl" : "text-4xl"}`}
                >
                    Partnership Levels
                </h1>
                <p
                    className={`text-[var(--primary-color)]/70 mx-auto ${is4K ? "text-2xl max-w-4xl" : "text-xl max-w-2xl"}`}
                >
                    Explore the partnership levels available to you as a {userRole}
                </p>
                <div className="mt-4 inline-flex items-center px-4 py-2 bg-[var(--secondary-light-color)] rounded-full">
                    <span className="text-sm font-semibold text-[var(--primary-color)]">
                        Role: {userRole.charAt(0).toUpperCase() + userRole.slice(1)}
                    </span>
                </div>
            </div>

            <div
                className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12 ${is4K ? "gap-12" : ""}`}
            >
                {displayPartnerships.map((p) => (
                    <div
                        key={p.id}
                        className={`group relative rounded-3xl shadow-xl transition-all duration-300 transform p-8
              ${p.id.toUpperCase() === currentPartnership.partnership_level
                                ? "ring-4 ring-green-500 bg-green-50"
                                : p.available
                                    ? "cursor-pointer hover:-translate-y-2"
                                    : "opacity-60"
                            }
              ${is4K ? "text-lg" : "text-base"}
            `}
                    >
                        {p.isAltPath && (
                            <div className="absolute top-0 left-0 bg-[var(--secondary-color)] text-white text-xs font-semibold px-3 py-1 rounded-br-2xl rounded-tl-2xl">
                                Lateral
                            </div>
                        )}

                        <div
                            className={`absolute top-2 right-4 text-white text-xs font-bold px-2 py-1 rounded-full ${p.available ? "bg-[var(--primary-color)]" : "bg-red-600"
                                }`}
                        >
                            Level {p.level}
                        </div>

                        <div className="absolute -top-3 -right-3">
                            {p.id.toUpperCase() === currentPartnership.partnership_level ? (
                                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                                    <FaCheck className="text-white text-lg" />
                                </div>
                            ) : p.available ? (
                                <div className="w-8 h-8 bg-[var(--primary-color)] rounded-full flex items-center justify-center">
                                    <FaCheck className="text-white text-sm" />
                                </div>
                            ) : (
                                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                                    <FaLock className="text-white text-sm" />
                                </div>
                            )}
                        </div>

                        <div className="flex justify-start mb-6 mt-6">
                            <span
                                className={`px-4 py-2 text-sm font-semibold rounded-full ${p.id.toUpperCase() === currentPartnership.partnership_level
                                    ? "bg-green-100 text-green-700 border border-green-500"
                                    : p.available
                                        ? "bg-[var(--secondary-light-color)] text-[var(--primary-color)] border border-[var(--secondary-color)]"
                                        : "bg-[var(--primary-hover-color)]/20 text-[var(--primary-color)] border border-[var(--primary-hover-color)]/40"
                                    }`}
                            >
                                {p.id.toUpperCase() === currentPartnership?.partnership_level
                                    ? "Current Partnership"
                                    : (() => {
                                        const current = partnerships.find(
                                            part => part.id.toUpperCase() === currentPartnership?.partnership_level
                                        );
                                        return current && p.level < current.level
                                            ? "Past Partnership"
                                            : p.available
                                                ? "Available Now"
                                                : "Requirements Not Met";
                                    })()}
                            </span>
                        </div>

                        <h3
                            className={`font-bold text-[var(--primary-color)] mb-2 ${is4K ? "text-2xl" : "text-xl"}`}
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
                            className={`leading-relaxed mb-6 ${is4K ? "text-base" : "text-sm"} text-[var(--primary-color)]/80`}
                        >
                            {getRoleBasedDescription(p)}
                        </p>
                    </div>
                ))}
            </div>

            <div
                className={`bg-white rounded-3xl shadow-xl p-8 mb-8 border-l-4 border-green-500 ${is4K ? "text-lg" : ""}`}
            >
                <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                        <FaCheck className="text-white text-xl" />
                    </div>
                    <div>
                        <h3
                            className={`font-bold text-[var(--primary-color)] ${is4K ? "text-2xl" : "text-xl"}`}
                        >
                            Current Partnership
                        </h3>
                        <p className="text-[var(--primary-color)]/80">
                            {
                                partnerships.find(
                                    (p) => p.id.toUpperCase() === currentPartnership.partnership_level
                                )?.partnership_name
                            }{" "}
                            -{" "}
                            {getRoleBasedTitle(
                                partnerships.find(
                                    (p) => p.id.toUpperCase() === currentPartnership.partnership_level
                                )!
                            )}
                        </p>
                        <p className="text-sm text-[var(--primary-color)]/70 mt-2">
                            Retention Period: {currentPartnership.retention_period} days | KPI Score:{" "}
                            {currentPartnership.kpi_score} | Expires:{" "}
                            {new Date(currentPartnership.retention_expiration).toLocaleDateString()}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}