"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Mail,
  Phone,
  Calendar,
  Building2,
  MapPin,
  Globe,
  Shield,
  Award,
  AlertTriangle,
  CheckCircle,
  Store,
  CreditCard,
  Check,
  X,
  Package,
  Edit3,
  TrendingUp,
} from "lucide-react";
import { getUserInfo, approveRegistration, getDocumentInfo, approveDocument, updateKpiScore } from "@/services/admin"; // Added updateKpiScore
import { get_product_by_user_id } from "@/services/admin";
import Cookies from "js-cookie";
import { categories } from "@/lib/categories";

// Interface for document info
interface DocumentInfo {
  id: number;
  user_id: number;
  document_type: string;
  ai_verification_status: string;
  file_url: string;
}

// Document mapping based on role
const documentMapping: Record<"vendor" | "buyer", Record<string, string>> = {
  vendor: {
    business_registration: "Business Registration Certificate",
    business_license: "Business License",
    adhaar_card: "Aadhaar Card",
    artisan_id_card: "Artisan/Trade License",
    bank_statement: "Bank Statement",
    product_catalog: "Catalog/Certifications",
    certifications: "Catalog/Certifications"
  },
  buyer: {
    business_registration: "Articles of Incorporation",
    business_license: "Business License",
    adhaar_card: "Photo ID",
    artisan_id_card: "Trade License",
    bank_statement: "Bank Statement",
    product_catalog: "Product Catalog",
    certifications: "Certifications"
  }
};

// Interface definitions remain the same
interface RegistrationInfo {
  business_name: string;
  business_legal_structure: string;
  business_type: string;
  year_established: number;
  business_registration_number: string;
  brand_affiliations: string;
  website: string;
  annual_turnover: string;
  gst_number: string;
  tax_identification_number: string;
  import_export_code: string;
  street_address_1: string;
  street_address_2: string;
  city: string;
  state_region: string;
  postal_code: string;
  country: string;
  contact_person_name: string;
  contact_email: string;
  contact_phone: string;
  contact_whatsapp: string;
  contact_district: string;
  contact_pin_code: string;
  contact_state: string;
  contact_country: string;
  material_standard: number;
  quality_level: number;
  sustainability_level: number;
  service_level: number;
  standards_level: number;
  ethics_level: number;
  certifications: string[];
  bank_name: string;
  account_name: string;
  account_type: string;
  account_number: string;
  ifsc_code: string;
  swift_bis_code: string;
  iban_code: string;
  kyc_challenges: boolean;
  gst_compliance_issues: boolean;
  fema_payment_issues: boolean;
  digital_banking_issues: boolean;
  fraud_cybersecurity_issues: boolean;
  payment_gateway_compliance_issues: boolean;
  account_activity_issues: boolean;
  regulatory_actions: boolean;
  kpi_score?: number; // Added KPI score to interface
}

interface ProductData {
  categoryId: string;
  categoryName: string;
  subcategoryId: string;
  subcategoryName: string;
  specifications:
  any

}

// Role-based label mappings
const roleLabelMappings: {
  [key: string]: { vendor: string; buyer: string };
} = {
  gst_number: {
    vendor: "GST Number",
    buyer: "State Sales Tax Permit Number",
  },
  tax_identification_number: {
    vendor: "Tax Identification Number",
    buyer: "EIN (Employee Identification Number)",
  },
  import_export_code: {
    vendor: "Import Export Code",
    buyer: "US Import Exporter",
  },
  bank_name: { vendor: "Bank Name", buyer: "Bank Name" },
  account_name: { vendor: "Account Name", buyer: "Account Name" },
  account_type: { vendor: "Account Type", buyer: "Account Type" },
  account_number: { vendor: "Account Number", buyer: "Account Number" },
  ifsc_code: { vendor: "IFSC Code", buyer: "ABA Routing Number" },
  swift_bis_code: { vendor: "SWIFT Code", buyer: "SWIFT Code" },
  iban_code: { vendor: "IBAN Code", buyer: "IBAN Code" },
  kyc_challenges: {
    vendor: "Have you faced challenges with KYC regulations recently?",
    buyer: "Customer Identification Program (CIP)",
  },
  gst_compliance_issues: {
    vendor: "Any issues with GST compliance in transactions?",
    buyer: "Sales Tax Compliance",
  },
  fema_payment_issues: {
    vendor: "Difficulties with FEMA for international payments recently?",
    buyer: "OFAC & FinCEN Cross-Border Payment Rules",
  },
  digital_banking_issues: {
    vendor: "Have digital banking regulations impacted your operations?",
    buyer: "Federal Reserve, OCC, FDIC, CFPB Banking Regulations",
  },
  payment_gateway_compliance_issues: {
    vendor: "Challenges with payment gateway compliance or security regulations?",
    buyer: "PCI-DSS Compliance",
  },
  fraud_cybersecurity_issues: {
    vendor: "Encountered any fraud or cybersecurity issues recently?",
    buyer: "Fraud / Cybersecurity Issues",
  },
  account_activity_issues: {
    vendor: "Any account activity issues or fraudulent claims made?",
    buyer: "Any account activity issues or fraudulent claims made?",
  },
  regulatory_actions: {
    vendor: "Have regulatory actions been taken against your account?",
    buyer: "Regulatory Actions",
  },
};

// Utility function to format field names for fallback
const formatFieldName = (field: string): string => {
  return field
    .split('_')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

export default function RegistrationInfoPage() {
  const params = useParams();
  const [registrationInfo, setRegistrationInfo] = useState<RegistrationInfo | null>(null);
  const [productData, setProductData] = useState<ProductData | null>(null);
  const [documents, setDocuments] = useState<DocumentInfo[]>([]); // Added state for documents
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [register, setRegister] = useState<string | null>(null);
  const [userRole, setUserRole] = useState<"vendor" | "buyer">("vendor");
  const [approveLoading, setApproveLoading] = useState(false);
  const [rejectLoading, setRejectLoading] = useState(false);
  const [kpiUpdating, setKpiUpdating] = useState(false); // Added KPI loading state
  const [showKpiInput, setShowKpiInput] = useState(false); // Added state for KPI input visibility
  const [tempKpiScore, setTempKpiScore] = useState<number>(registrationInfo?.kpi_score || 0); // Added temp KPI score state

  // condition to check if Approve/Reject buttons should be shown

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userId = Array.isArray(params.id) ? params.id[0] : params.id;

        if (!userId || typeof userId !== "string") {
          throw new Error("Invalid user ID");
        }

        const [id, isRegistered, docVerified, role] = userId.split("-");
        setRegister(isRegistered);
        if (role === "vendor" || role === "buyer") {
          setUserRole(role);
        }

        const [userResponse, documentResponse, productResponse] = await Promise.all([
          getUserInfo(id),
          getDocumentInfo(Number(id)), // Fetch document info
          get_product_by_user_id(parseInt(id)),
        ]);
        setRegistrationInfo(userResponse.data);
        // Set initial KPI score
        setTempKpiScore(userResponse.data.kpi_score || 0);
        // Filter documents by user_id
        setDocuments(documentResponse.data);
        setProductData(productResponse.data.selectedData);
        console.log(productResponse.data)
        console.log(productData)
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    if (params.id) {
      fetchData();
    }
  }, [params.id]);

  // Updated KPI score handler
  const handleUpdateKpiScore = async () => {

    try {
      setKpiUpdating(true);
      const userId = Array.isArray(params.id) ? params.id[0] : params.id;
      if (!userId || typeof userId !== "string") {
        throw new Error("Invalid user ID");
      }
      const [id] = userId.split("-");

      const response = await updateKpiScore(Number(id), tempKpiScore);
      console.log("KPI updated successfully:", response.data);

      // Update local state
      setRegistrationInfo(prev => prev ? { ...prev, kpi_score: tempKpiScore } : null);
      setShowKpiInput(false);

      // Show success message (you can replace this with a toast notification)
    } catch (err) {
      console.error("Failed to update KPI score:", err);
      setError(err instanceof Error ? err.message : "Failed to update KPI score");
      // Revert to previous value on error
    } finally {
      setKpiUpdating(false);
    }
  };

  const handleApprove = async () => {
    try {
      const userId = Array.isArray(params.id) ? params.id[0] : params.id;
      if (!userId || typeof userId !== "string") {
        throw new Error("Invalid user ID");
      }
      const [id] = userId.split("-");
      const response = await approveRegistration(id, {
        status: "APPROVED",
        remarks: "Approved by admin",
      });
      setRegister("APPROVED");
      console.log(response.data);
      window.location.href = "/admin/users";
    } catch (err) {
      console.log(err);
      setError(err instanceof Error ? err.message : "Failed to approve user");
    }
  };

  const handleReject = async () => {
    try {
      const userId = Array.isArray(params.id) ? params.id[0] : params.id;
      if (!userId || typeof userId !== "string") {
        throw new Error("Invalid user ID");
      }
      const [id] = userId.split("-");
      await approveRegistration(id, {
        status: "REJECTED",
        remarks: "Rejected by admin",
      });
      window.location.href = "/admin/users";
      setRegister("REJECTED");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to reject user");
    }
  };

  const handleDocumentAction = async (documentId: number, approve: boolean) => {
    try {

      await approveDocument(documentId, approve);
      // Update document state locally after action
      setDocuments((prevDocs) =>
        prevDocs.map((doc) =>
          doc.id === documentId
            ? { ...doc, ai_verification_status: approve ? "PASS" : "FAIL" }
            : doc
        )
      );
    } catch (err) {
      setError(err instanceof Error ? err.message : `Failed to ${approve ? "approve" : "reject"} document`);
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 4) return "text-green-600";
    if (score >= 3) return "text-yellow-600";
    return "text-red-600";
  };

  const getScoreBarColor = (score: number) => {
    if (score >= 4) return "bg-green-600";
    if (score >= 3) return "bg-yellow-600";
    return "bg-red-600";
  };

  const getKpiColor = (score?: number) => {
    if (!score) return "text-gray-500";
    if (score >= 80) return "text-green-600";
    if (score >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  const getKpiBarColor = (score?: number) => {
    if (!score) return "bg-gray-300";
    if (score >= 80) return "bg-green-600";
    if (score >= 60) return "bg-yellow-600";
    return "bg-red-600";
  };

  const credibilityScores = {
    "Material Standard": registrationInfo?.material_standard ?? 0,
    "Quality Level": registrationInfo?.quality_level ?? 0,
    Sustainability: registrationInfo?.sustainability_level ?? 0,
    "Service Level": registrationInfo?.service_level ?? 0,
    "Standards Level": registrationInfo?.standards_level ?? 0,
    "Ethics Level": registrationInfo?.ethics_level ?? 0,
  };

  const complianceIssues = {
    kyc_challenges: registrationInfo?.kyc_challenges ?? false,
    gst_compliance_issues: registrationInfo?.gst_compliance_issues ?? false,
    fema_payment_issues: registrationInfo?.fema_payment_issues ?? false,
    digital_banking_issues: registrationInfo?.digital_banking_issues ?? false,
    fraud_cybersecurity_issues: registrationInfo?.fraud_cybersecurity_issues ?? false,
    payment_gateway_compliance_issues: registrationInfo?.payment_gateway_compliance_issues ?? false,
    account_activity_issues: registrationInfo?.account_activity_issues ?? false,
    regulatory_actions: registrationInfo?.regulatory_actions ?? false,
  };

  // Function to get label based on role
  const getLabel = (field: string): string => {
    return roleLabelMappings[field]?.[userRole] || formatFieldName(field);
  };

  // Function to get document name based on type and role
  const getDocumentName = (type: string): string => {
    return documentMapping[userRole]?.[type] || formatFieldName(type);
  };
  console.log("PRODCTDATA", productData)
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error || !registrationInfo) {
    return (
      <div className="text-center py-12">
        <div className="w-24 h-24 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-white text-2xl">!</span>
        </div>
        <h1 className="text-2xl font-bold text-slate-900 mb-2">Registration Info Not Found</h1>
        <p className="text-slate-600 mb-6">
          {error || "The registration information you're looking for doesn't exist."}
        </p>
        <Link
          href="/admin/users"
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Users
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="space-y-8">
        {/* Header (unchanged) */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link
              href="/admin/users"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 bg-white rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Users
            </Link>
            <div>
              <div className="flex items-center space-x-3 mb-2">
                <h1 className="text-4xl font-bold text-slate-900">{registrationInfo.business_name}</h1>
                <span className="inline-flex items-center px-3 py-1 text-sm font-medium rounded-full bg-purple-100 text-purple-700">
                  <Store className="w-4 h-4 mr-1" />
                  {registrationInfo.business_type.charAt(0).toUpperCase() + registrationInfo.business_type.slice(1)}
                </span>
              </div>
              <div className="flex items-center space-x-6 text-slate-600">
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  {registrationInfo.contact_email}
                </div>
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  {registrationInfo.contact_phone}
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  Established {registrationInfo.year_established}
                </div>
              </div>
            </div>
          </div>
          {
            register?.toLowerCase() === "pending" ? (
              <div className="flex flex-col space-y-2">
                <div className="flex items-center space-x-4">
                  <button
                    onClick={handleApprove}
                    className="inline-flex items-center px-4 py-2 rounded-lg transition-colors
                        bg-green-600 text-white hover:bg-green-700"


                  >
                    <Check className="w-4 h-4 mr-2" />
                    Approve
                  </button>
                  <button
                    onClick={handleReject}

                    className="inline-flex items-center px-4 py-2 rounded-lg transition-colors 
                      bg-red-600 text-white hover:bg-red-700"

                  >
                    <X className="w-4 h-4 mr-2" />
                    Reject
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-4 pt-4">
                <div className="relative">
                  <input
                    type="text"
                    value={tempKpiScore}
                    onChange={(e) => setTempKpiScore(parseFloat(e.target.value) || 0)}
                    className="w-24 px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="0"
                  />
                </div>

                <button
                  onClick={handleUpdateKpiScore}
                  disabled={kpiUpdating}
                  className="inline-flex items-center px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 disabled:bg-orange-400 transition-colors"
                >
                  <TrendingUp className="w-4 h-4 mr-2" />
                  {kpiUpdating ? "Updating..." : "Update KPI"}
                </button>
              </div>

            )
          }
        </div>

        {/* Business Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Building2 className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">Business Information</h2>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-slate-600">{getLabel("business_name")}</label>
                  <p className="text-sm text-slate-900 font-medium">{registrationInfo.business_name}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-600">{getLabel("business_type")}</label>
                  <p className="text-sm text-slate-900">{registrationInfo.business_type}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-slate-600">{getLabel("business_legal_structure")}</label>
                  <p className="text-sm text-slate-900">{registrationInfo.business_legal_structure}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-600">{getLabel("business_registration_number")}</label>
                  <p className="text-sm text-slate-900">{registrationInfo.business_registration_number}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-slate-600">{getLabel("year_established")}</label>
                  <p className="text-sm text-slate-900">{registrationInfo.year_established}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-600">{getLabel("annual_turnover")}</label>
                  <p className="text-sm text-slate-900">{registrationInfo.annual_turnover}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-slate-600">{getLabel("gst_number")}</label>
                  <p className="text-sm text-slate-900">{registrationInfo.gst_number}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-600">{getLabel("tax_identification_number")}</label>
                  <p className="text-sm text-slate-900">{registrationInfo.tax_identification_number}</p>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-slate-600">{getLabel("import_export_code")}</label>
                <p className="text-sm text-slate-900">{registrationInfo.import_export_code}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-slate-600">{getLabel("brand_affiliations")}</label>
                <p className="text-sm text-slate-900">{registrationInfo.brand_affiliations}</p>
              </div>
              <div className="pt-4 border-t border-slate-200">
                <div className="flex items-center space-x-2 mb-2">
                  <MapPin className="w-4 h-4 text-slate-500" />
                  <span className="text-sm font-medium text-slate-600">Location</span>
                </div>
                <p className="text-sm text-slate-900">
                  {registrationInfo.street_address_1}
                  {registrationInfo.street_address_2 && `, ${registrationInfo.street_address_2}`}
                  <br />
                  {registrationInfo.city}, {registrationInfo.state_region}, {registrationInfo.postal_code}
                  <br />
                  {registrationInfo.country}
                </p>
              </div>
              {registrationInfo.website && (
                <div className="flex items-center space-x-2">
                  <Globe className="w-4 h-4 text-slate-500" />
                  <a
                    href={registrationInfo.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:text-blue-800"
                  >
                    {registrationInfo.website}
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Contact Information (unchanged) */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">Contact Information</h2>
            </div>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-slate-600">Contact Person</label>
                <p className="text-sm text-slate-900 font-medium">{registrationInfo.contact_person_name}</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-slate-600">Email</label>
                  <p className="text-sm text-slate-900">{registrationInfo.contact_email}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-600">Phone</label>
                  <p className="text-sm text-slate-900">{registrationInfo.contact_phone}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-slate-600">WhatsApp</label>
                  <p className="text-sm text-slate-900">{registrationInfo.contact_whatsapp}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-600">District</label>
                  <p className="text-sm text-slate-900">{registrationInfo.contact_district}</p>
                </div>
              </div>
              <div className="pt-4 border-t border-slate-200">
                <div className="flex items-center space-x-2 mb-2">
                  <MapPin className="w-4 h-4 text-slate-500" />
                  <span className="text-sm font-medium text-slate-600">Contact Address</span>
                </div>
                <p className="text-sm text-slate-900">
                  {registrationInfo.contact_pin_code}, {registrationInfo.contact_district}
                  <br />
                  {registrationInfo.contact_state}, {registrationInfo.contact_country}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Banking Information */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
              <CreditCard className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-xl font-bold text-slate-900">Banking Information</h2>
          </div>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-slate-600">{getLabel("bank_name")}</label>
                <p className="text-sm text-slate-900">{registrationInfo.bank_name}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-slate-600">{getLabel("account_name")}</label>
                <p className="text-sm text-slate-900">{registrationInfo.account_name}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-slate-600">{getLabel("account_type")}</label>
                <p className="text-sm text-slate-900">{registrationInfo.account_type}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-slate-600">{getLabel("account_number")}</label>
                <p className="text-sm text-slate-900">{registrationInfo.account_number}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-slate-600">{getLabel("ifsc_code")}</label>
                <p className="text-sm text-slate-900">{registrationInfo.ifsc_code}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-slate-600">{getLabel("swift_bis_code")}</label>
                <p className="text-sm text-slate-900">{registrationInfo.swift_bis_code}</p>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-slate-600">{getLabel("iban_code")}</label>
              <p className="text-sm text-slate-900">{registrationInfo.iban_code}</p>
            </div>
          </div>
        </div>




        {/* Credibility Assessment */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-xl font-bold text-slate-900">Credibility Assessment</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
            {Object.entries(credibilityScores).map(([key, value]) => (
              <div key={key} className="text-center">
                <div className="text-sm font-medium text-slate-600 mb-2">{key}</div>
                <div className={`text-2xl font-bold ${getScoreColor(value)}`}>{value}/5</div>
                <div className="w-full bg-slate-200 rounded-full h-2 mt-2">
                  <div
                    className={`h-2 rounded-full ${getScoreBarColor(value)}`}
                    style={{ width: `${(value / 5) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications & Compliance */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-yellow-600 rounded-lg flex items-center justify-center">
                <Award className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">Certifications</h2>
            </div>
            <div className="space-y-3">
              {registrationInfo.certifications.map((certification, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm text-slate-700">{certification}</span>
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">Compliance Status</h2>
            </div>
            <div className="space-y-3">
              {Object.entries(complianceIssues).map(([key, value]) => (
                <div key={key} className="flex items-center justify-between">
                  <span className="text-sm text-slate-700">{getLabel(key)}</span>
                  {value ? (
                    <AlertTriangle className="w-5 h-5 text-red-600" />
                  ) : (
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Document Information */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center">
              <Package className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-xl font-bold text-slate-900">Document Information</h2>
          </div>
          <div className="space-y-4">
            {documents.length > 0 ? (
              documents.map((doc) => (
                <div key={doc.id} className="flex items-center justify-between border-b border-slate-200 pb-4">
                  <div>
                    <p className="text-sm font-medium text-slate-600">{getDocumentName(doc.document_type)}</p>
                    <a
                      href={doc.file_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 hover:text-blue-800"
                    >
                      View Document
                    </a>
                    <p className="text-sm text-slate-900">
                      Status: {doc.ai_verification_status}
                    </p>
                  </div>
                  {doc.ai_verification_status === "PENDING" && (
                    <div className="flex items-center space-x-4">
                      <button
                        onClick={() => handleDocumentAction(doc.id, true)}
                        disabled={approveLoading}
                        className="inline-flex items-center px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition-colors"
                      >
                        <Check className="w-4 h-4 mr-2" />
                        {approveLoading ? "Approving..." : "Approve"}
                      </button>
                      <button
                        disabled={rejectLoading}
                        onClick={() => handleDocumentAction(doc.id, false)}
                        className="inline-flex items-center px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition-colors"
                      >
                        <X className="w-4 h-4 mr-2" />
                        {rejectLoading ? "Rejecting..." : "Reject"}
                      </button>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <p className="text-sm text-slate-600">No documents found for this user.</p>
            )}
          </div>
        </div>

        {Array.isArray(productData) && (
          <>
            {productData.map((category: any) => (
              category?.subcategories?.length > 0 && (
                <div
                  key={category.categoryId}
                  className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-6"
                >
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center">
                      <Package className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-xl font-bold text-slate-900">
                      {category.categoryName}
                    </h2>
                  </div>

                  {Array.isArray(category.subcategories) &&
                    category.subcategories.map((subcat: any) => (
                      <div
                        key={subcat.subcategoryId}
                        className="space-y-4 mb-4"
                      >
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm font-medium text-slate-600">
                              Category
                            </label>
                            <p className="text-sm text-slate-900">
                              {category.categoryName}
                            </p>
                          </div>
                          <div>
                            <label className="text-sm font-medium text-slate-600">
                              Subcategory
                            </label>
                            <p className="text-sm text-slate-900">
                              {subcat.subcategoryName}
                            </p>
                          </div>
                        </div>

                        <div className="pt-4 border-t border-slate-200">
                          <h3 className="text-sm font-medium text-slate-600 mb-3">
                            Specifications
                          </h3>
                          <div className="grid grid-cols-2 gap-4">
                            {subcat.specifications &&
                              Object.entries(subcat.specifications).map(
                                ([key, values]) => (
                                  <div key={key}>
                                    <label className="text-sm font-medium text-slate-600">
                                      {key
                                        .replace(/_/g, " ")
                                        .replace(/\b\w/g, (c) => c.toUpperCase())}
                                    </label>
                                    <ul className="text-sm text-slate-900 list-disc list-inside">
                                      {Array.isArray(values) &&
                                        values.map((value, index) => (
                                          <li key={index}>{value}</li>
                                        ))}
                                    </ul>
                                  </div>
                                )
                              )}
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              )
            ))}
          </>
        )}

      </div>
    </div>
  );
}