"use client";
import { useEffect, useState } from "react";
import {
  Building2,
  Award,
  CreditCard,
  AlertTriangle,
  Star,
} from "lucide-react";
import { useGlobalContext } from "@/context/ScreenProvider";
import { useToast } from "@/context/ToastProvider";
import { sendInfo } from "@/services/regitsration";
import Cookies from "js-cookie";
interface BusinessInformationProps {
  data?: any;
  onUpdate: (data: any) => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function BusinessInformation({
  data,
  onUpdate,
  onNext,
  onPrev,
}: BusinessInformationProps) {
  // ✅ Scroll to top on component mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const { showToast } = useToast();
  const { is4K } = useGlobalContext();

  const [userRole, setUserRole] = useState<"vendor" | "buyer">("buyer");

useEffect(() => {
    const roleFromCookie = Cookies.get("user_role") as "vendor" | "buyer" | undefined
    if (roleFromCookie) {
      setUserRole(roleFromCookie)
    }
  }, [])

  const [formData, setFormData] = useState(
    data || {
      id: 0,
      kpiScore: 0,
      documents: [],
      joinDate: new Date().toISOString(),
      status: "pending",
      type: "vendor",
      department: "",
      businessInfo: {
        businessName: "",
        businessLegalStructure: "",
        businessType: "",
        businessEstablishedYear: 0,
        businessRegistrationNumber: "",
        brandAffiliations: "",
        streetAddress1: "",
        streetAddress2: "",
        city: "",
        stateRegion: "",
        country: "",
        postalCode: "",
        website: "",
        annualTurnover: "",
        gstNumber: "",
        taxIdentificationNumber: "",
        importExportCode: "",
      },
      businessContact: {
        name: "",
        email: "",
        phone: "",
        whatsapp: "",
        district: "",
        pinCode: "",
        state: "",
        country: "",
      },
      credibilityAssessment: {
        materialStandard: 3, // Changed default from 5 to 3 for 1-5 scale
        qualityLevel: 3,
        sustainabilityLevel: 3,
        serviceLevel: 3,
        ethicsLevel: 3,
        standardsLevel: 3,
      },
      certifications: {
        GICertification: false,
        handloomMark: false,
        craftMark: false,
        indiaHandmade: false,
        qualityCouncil: false,
        exportCouncil: false,
        blockChain: false,
        ...(userRole === "vendor" ? { none: false } : { notRequired: false }),
      },
      bankingInfo: {
        bankName: "",
        accountName: "",
        accountType: "",
        accountNumber: "",
        ifscCode: "",
        swiftBisCode: "",
        ibanCode: "",
      },
      complianceIssues: {
        "Have you faced challenges with KYC regulations recently?": false,
        "Any issues with GST compliance in transactions?": false,
        "Difficulties with FEMA for international payments recently?": false,
        "Have digital banking regulations impacted your operations?": false,
        "Encountered any fraud or cybersecurity issues recently?": false,
        "Challenges with payment gateway compliance or security regulations?":
          false,
        "Any account activity issues or fraudulent claims made?": false,
        "Have regulatory actions been taken against your account?": false,
      },
    }
  );

  const [errors, setErrors] = useState<Record<string, string>>({});

  // Validation functions
  const validateBusinessName = (name: string): string => {
    if (!name.trim()) return "Business name is required";
    if (name.trim().length < 2)
      return "Business name must be at least 2 characters";
    if (name.trim().length > 100)
      return "Business name must not exceed 100 characters";
    if (!/^[a-zA-Z0-9\s&.-]+$/.test(name))
      return "Business name contains invalid characters";
    return "";
  };

  const validateRegistrationNumber = (regNum: string): string => {
    if (!regNum.trim()) return "Registration number is required";
    if (regNum.trim().length < 5)
      return "Registration number must be at least 5 characters";
    if (regNum.trim().length > 30)
      return "Registration number must not exceed 30 characters";
    if (!/^[A-Z0-9]+$/.test(regNum.trim()))
      return "Registration number must contain only uppercase letters and numbers";
    return "";
  };

  const validateYear = (year: number): string => {
    const currentYear = new Date().getFullYear();
    if (year && (year < 1900 || year > currentYear)) {
      return `Year must be between 1900 and ${currentYear}`;
    }
    return "";
  };

  const validateWebsite = (website: string): string => {
    if (website && !/^https?:\/\/.+\..+/.test(website)) {
      return "Please enter a valid website URL (e.g., https://example.com)";
    }
    return "";
  };

  const validateEmail = (email: string): string => {
    if (!email.trim()) return "Email is required";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return "Please enter a valid email address";
    return "";
  };

  const validatePhone = (phone: string): string => {
    if (!phone.trim()) return "Phone number is required";
    const phoneRegex = /^[+]?[1-9][\d]{0,15}$/;
    if (!phoneRegex.test(phone.replace(/[\s\-$$$$]/g, ""))) {
      return "Please enter a valid phone number";
    }
    return "";
  };

  const validatePinCode = (pinCode: string): string => {
    if (!pinCode.trim()) return "PIN code is required";
    if (!/^\d{6}$/.test(pinCode)) return "PIN code must be exactly 6 digits";
    return "";
  };

  const validatePostalCode = (postalCode: string): string => {
    if (!postalCode.trim()) return "Postal code is required";
    if (!/^[A-Z0-9\s-]{3,10}$/.test(postalCode.toUpperCase())) {
      return "Please enter a valid postal code";
    }
    return "";
  };

  const validateGSTNumber = (gst: string): string => {
    if (!gst.trim()) return "GST number is required";
    const gstRegex =
      /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;
    if (!gstRegex.test(gst.toUpperCase())) {
      return "Please enter a valid GST number (15 characters: 22AAAAA0000A1Z5)";
    }
    return "";
  };

  const validateTaxId = (taxId: string): string => {
    if (!taxId.trim()) return "Tax identification number is required";
    if (taxId.trim().length < 10 || taxId.trim().length > 15) {
      return "Tax ID must be between 10-15 characters";
    }
    if (!/^[A-Z0-9]+$/.test(taxId.toUpperCase())) {
      return "Tax ID must contain only letters and numbers";
    }
    return "";
  };

  const validateAccountNumber = (accNum: string): string => {
    if (!accNum.trim()) return "Account number is required";
    if (!/^\d{9,18}$/.test(accNum)) return "Account number must be 9-18 digits";
    return "";
  };

  const validateIFSCCode = (ifsc: string): string => {
    if (!ifsc.trim()) return "IFSC code is required";
    const ifscRegex = /^[A-Z]{4}0[A-Z0-9]{6}$/;
    if (!ifscRegex.test(ifsc.toUpperCase())) {
      return "Please enter a valid IFSC code (e.g., SBIN0001234)";
    }
    return "";
  };

  const validateSWIFTCode = (swift: string): string => {
    if (
      swift &&
      !/^[A-Z]{6}[A-Z0-9]{2}([A-Z0-9]{3})?$/.test(swift.toUpperCase())
    ) {
      return "Please enter a valid SWIFT code (8 or 11 characters)";
    }
    return "";
  };

  const validateIBANCode = (iban: string): string => {
    if (
      iban &&
      !/^[A-Z]{2}[0-9]{2}[A-Z0-9]{4}[0-9]{7}([A-Z0-9]?){0,16}$/.test(
        iban.toUpperCase()
      )
    ) {
      return "Please enter a valid IBAN code";
    }
    return "";
  };

  const handleBusinessInfoChange = (field: string, value: string) => {
    setFormData((prev: typeof formData) => ({
      ...prev,
      businessInfo: { ...prev.businessInfo, [field]: value },
    }));

    // Clear error when user starts typing
    if (errors[`businessInfo.${field}`]) {
      setErrors((prev) => ({ ...prev, [`businessInfo.${field}`]: "" }));
    }

    // Real-time validation for specific fields
    let error = "";
    switch (field) {
      case "businessName":
        error = validateBusinessName(value);
        break;
      case "businessRegistrationNumber":
        error = validateRegistrationNumber(value);
        break;
      case "website":
        error = validateWebsite(value);
        break;
      case "gstNumber":
        error = validateGSTNumber(value);
        break;
      case "taxIdentificationNumber":
        error = validateTaxId(value);
        break;
      case "postalCode":
        error = validatePostalCode(value);
        break;
    }

    if (error) {
      setErrors((prev) => ({ ...prev, [`businessInfo.${field}`]: error }));
    }
  };

  const handleBusinessContactChange = (field: string, value: string) => {
    setFormData((prev: typeof formData) => ({
      ...prev,
      businessContact: { ...prev.businessContact, [field]: value },
    }));

    // Clear error when user starts typing
    if (errors[`businessContact.${field}`]) {
      setErrors((prev) => ({ ...prev, [`businessContact.${field}`]: "" }));
    }

    // Real-time validation
    let error = "";
    switch (field) {
      case "email":
        error = validateEmail(value);
        break;
      case "phone":
      case "whatsapp":
        if (field === "phone" || value) {
          error = validatePhone(value);
        }
        break;
      case "pinCode":
        error = validatePinCode(value);
        break;
    }

    if (error) {
      setErrors((prev) => ({ ...prev, [`businessContact.${field}`]: error }));
    }
  };

  const handleBankingInfoChange = (field: string, value: string) => {
    setFormData((prev: typeof formData) => ({
      ...prev,
      bankingInfo: { ...prev.bankingInfo, [field]: value },
    }));

    // Clear error when user starts typing
    if (errors[`bankingInfo.${field}`]) {
      setErrors((prev) => ({ ...prev, [`bankingInfo.${field}`]: "" }));
    }

    // Real-time validation
    let error = "";
    switch (field) {
      case "accountNumber":
        error = validateAccountNumber(value);
        break;
      case "ifscCode":
        error = validateIFSCCode(value);
        break;
      case "swiftBisCode":
        error = validateSWIFTCode(value);
        break;
      case "ibanCode":
        error = validateIBANCode(value);
        break;
    }

    if (error) {
      setErrors((prev) => ({ ...prev, [`bankingInfo.${field}`]: error }));
    }
  };

  const handleYearChange = (value: string) => {
    const year = Number.parseInt(value) || 0;
    setFormData((prev: typeof formData) => ({
      ...prev,
      businessInfo: { ...prev.businessInfo, businessEstablishedYear: year },
    }));

    const error = validateYear(year);
    if (error) {
      setErrors((prev) => ({
        ...prev,
        "businessInfo.businessEstablishedYear": error,
      }));
    } else {
      setErrors((prev) => ({
        ...prev,
        "businessInfo.businessEstablishedYear": "",
      }));
    }
  };

  const validateAndSubmit = () => {
    const newErrors: Record<string, string> = {};

    // Validate all required fields
    newErrors["businessInfo.businessName"] = validateBusinessName(
      formData.businessInfo.businessName
    );
    newErrors["businessInfo.businessRegistrationNumber"] =
      validateRegistrationNumber(
        formData.businessInfo.businessRegistrationNumber
      );
    newErrors["businessInfo.businessEstablishedYear"] = validateYear(
      formData.businessInfo.businessEstablishedYear
    );
    newErrors["businessInfo.website"] = validateWebsite(
      formData.businessInfo.website || ""
    );
    newErrors["businessInfo.gstNumber"] = validateGSTNumber(
      formData.businessInfo.gstNumber
    );
    newErrors["businessInfo.taxIdentificationNumber"] = validateTaxId(
      formData.businessInfo.taxIdentificationNumber
    );
    newErrors["businessInfo.postalCode"] = validatePostalCode(
      formData.businessInfo.postalCode
    );

    newErrors["businessContact.email"] = validateEmail(
      formData.businessContact.email
    );
    newErrors["businessContact.phone"] = validatePhone(
      formData.businessContact.phone
    );
    newErrors["businessContact.pinCode"] = validatePinCode(
      formData.businessContact.pinCode
    );

    newErrors["bankingInfo.accountNumber"] = validateAccountNumber(
      formData.bankingInfo.accountNumber
    );
    newErrors["bankingInfo.ifscCode"] = validateIFSCCode(
      formData.bankingInfo.ifscCode
    );
    newErrors["bankingInfo.swiftBisCode"] = validateSWIFTCode(
      formData.bankingInfo.swiftBisCode || ""
    );
    newErrors["bankingInfo.ibanCode"] = validateIBANCode(
      formData.bankingInfo.ibanCode || ""
    );

    // Check required text fields
    const requiredTextFields = [
      {
        field: "businessInfo.streetAddress1",
        value: formData.businessInfo.streetAddress1,
        message: "Street address is required",
      },
      {
        field: "businessInfo.city",
        value: formData.businessInfo.city,
        message: "City is required",
      },
      {
        field: "businessInfo.stateRegion",
        value: formData.businessInfo.stateRegion,
        message: "State/Region is required",
      },
      {
        field: "businessInfo.country",
        value: formData.businessInfo.country,
        message: "Country is required",
      },
      {
        field: "businessContact.name",
        value: formData.businessContact.name,
        message: "Contact person name is required",
      },
      {
        field: "businessContact.district",
        value: formData.businessContact.district,
        message: "District is required",
      },
      {
        field: "businessContact.state",
        value: formData.businessContact.state,
        message: "State is required",
      },
      {
        field: "businessContact.country",
        value: formData.businessContact.country,
        message: "Country is required",
      },
      {
        field: "bankingInfo.bankName",
        value: formData.bankingInfo.bankName,
        message: "Bank name is required",
      },
      {
        field: "bankingInfo.accountName",
        value: formData.bankingInfo.accountName,
        message: "Account name is required",
      },
      {
        field: "bankingInfo.accountType",
        value: formData.bankingInfo.accountType,
        message: "Account type is required",
      },
    ];

    requiredTextFields.forEach(({ field, value, message }) => {
      if (!value || value.trim() === "") {
        newErrors[field] = message;
      }
    });

    // Check required select fields
    if (!formData.businessInfo.businessLegalStructure) {
      newErrors["businessInfo.businessLegalStructure"] =
        "Business legal structure is required";
    }
    if (!formData.businessInfo.businessType) {
      newErrors["businessInfo.businessType"] = "Business type is required";
    }

    // Filter out empty errors
    const filteredErrors = Object.fromEntries(
      Object.entries(newErrors).filter(([_, value]) => value !== "")
    );

    setErrors(filteredErrors);

    if (Object.keys(filteredErrors).length === 0) {
      handleSubmit();
    } else {
      showToast("Please fix all validation errors before submitting.");
    }
  };

  const getFieldLabels = () => {
    if (userRole === "buyer") {
      return {
        taxRegistration: {
          field1: "State Sales Tax Permit Number",
          field2: "EIN (Employee Identification Number)",
          field3: "US Import Exporter",
        },
        banking: {
          routingCode: "ABA Routing Number",
        },
        compliance: {
          "Have you faced challenges with KYC regulations recently?":
            "Have you faced challenges with Customer Identification Program (CIP) recently?",
          "Any issues with GST compliance in transactions?":
            "Any issues with Sales Tax Compliance in transactions?",
          "Difficulties with FEMA for international payments recently?":
            "Difficulties with OFAC & FinCEN Cross-Border Payment Rules recently?",
          "Have digital banking regulations impacted your operations?":
            "Have Federal Reserve, OCC, FDIC, CFPB Banking Regulations impacted your operations?",
          "Challenges with payment gateway compliance or security regulations?":
            "Challenges with PCI-DSS Compliance or security regulations?",
        },
      };
    } else {
      return {
        taxRegistration: {
          field1: "GST Number",
          field2: "Tax Identification Number",
          field3: "Import Export Code",
        },
        banking: {
          routingCode: "IFSC Code",
        },
        compliance: {
          "Have you faced challenges with KYC regulations recently?":
            "Have you faced challenges with KYC regulations recently?",
          "Any issues with GST compliance in transactions?":
            "Any issues with GST compliance in transactions?",
          "Difficulties with FEMA for international payments recently?":
            "Difficulties with FEMA Rules (Foreign Exchange) recently?",
          "Have digital banking regulations impacted your operations?":
            "Have digital banking regulations impacted your operations?",
          "Challenges with payment gateway compliance or security regulations?":
            "Challenges with payment gateway compliance or security regulations?",
        },
      };
    }
  };

  const fieldLabels = getFieldLabels();

  // ✅ Save to localStorage whenever formData changes
  useEffect(() => {
    localStorage.setItem("businessRegistrationData", JSON.stringify(formData));
  }, [formData]);

  const certificationMap = {
    GICertification: "GI Certification",
    handloomMark: "Handloom Mark",
    craftMark: "Craft Mark",
    indiaHandmade: "India Handmade",
    qualityCouncil: "Quality Council",
    exportCouncil: "Export Council",
    blockChain: "Blockchain",
  };

  // Handler for basic user info
  const handleUserInfoChange = (field: string, value: string) => {
    const updatedData = {
      ...formData,
      [field]: value,
    };
    setFormData(updatedData);
    onUpdate(updatedData);
  };

  // Handler for credibility assessment
  const handleCredibilityChange = (field: string, value: number) => {
    const updatedData = {
      ...formData,
      credibilityAssessment: {
        ...formData.credibilityAssessment,
        [field]: value,
      },
    };
    setFormData(updatedData);
    onUpdate(updatedData);
  };

  // Handler for certifications
  const handleCertificationChange = (field: string, value: boolean) => {
    const updatedData = {
      ...formData,
      certifications: {
        ...formData.certifications,
        [field]: value,
      },
    };
    setFormData(updatedData);
    onUpdate(updatedData);
  };

  // Handler for compliance issues
  const handleComplianceChange = (field: string, value: boolean) => {
    const updatedData = {
      ...formData,
      complianceIssues: {
        ...formData.complianceIssues,
        [field]: value,
      },
    };
    setFormData(updatedData);
    onUpdate(updatedData);
  };

  // Handler for form submission
  const handleSubmit = async () => {
    try {
      // Transform form data to match API structure
      const apiPayload = {
        business_name: formData.businessInfo.businessName,
        business_legal_structure: formData.businessInfo.businessLegalStructure,
        business_type: formData.businessInfo.businessType,
        year_established: formData.businessInfo.businessEstablishedYear || 1800,
        business_registration_number:
          formData.businessInfo.businessRegistrationNumber,
        brand_affiliations: formData.businessInfo.brandAffiliations || "",
        website: formData.businessInfo.website || "",
        annual_turnover: formData.businessInfo.annualTurnover || "",
        gst_number: formData.businessInfo.gstNumber,
        tax_identification_number:
          formData.businessInfo.taxIdentificationNumber,
        import_export_code: formData.businessInfo.importExportCode || "",
        street_address_1: formData.businessInfo.streetAddress1,
        street_address_2: formData.businessInfo.streetAddress2 || "",
        city: formData.businessInfo.city,
        state_region: formData.businessInfo.stateRegion,
        postal_code: formData.businessInfo.postalCode,
        country: formData.businessInfo.country,
        contact_person_name: formData.businessContact.name,
        contact_email: formData.businessContact.email,
        contact_phone: formData.businessContact.phone,
        contact_whatsapp: formData.businessContact.whatsapp || "",
        contact_district: formData.businessContact.district,
        contact_pin_code: formData.businessContact.pinCode,
        contact_state: formData.businessContact.state,
        contact_country: formData.businessContact.country,
        material_standard: formData.credibilityAssessment.materialStandard,
        quality_level: formData.credibilityAssessment.qualityLevel,
        sustainability_level:
          formData.credibilityAssessment.sustainabilityLevel,
        service_level: formData.credibilityAssessment.serviceLevel,
        standards_level: formData.credibilityAssessment.standardsLevel,
        ethics_level: formData.credibilityAssessment.ethicsLevel,
        certifications: Object.entries(formData.certifications)
          .filter(([_, value]) => value)
          .map(
            ([key]) => certificationMap[key as keyof typeof certificationMap]
          ),
        bank_name: formData.bankingInfo.bankName,
        account_name: formData.bankingInfo.accountName,
        account_type: formData.bankingInfo.accountType,
        account_number: formData.bankingInfo.accountNumber,
        ifsc_code: formData.bankingInfo.ifscCode,
        swift_bis_code: formData.bankingInfo.swiftBisCode || "",
        iban_code: formData.bankingInfo.ibanCode || "",
        kyc_challenges:
          formData.complianceIssues[
            "Have you faced challenges with KYC regulations recently?"
          ] || false,
        gst_compliance_issues:
          formData.complianceIssues[
            "Any issues with GST compliance in transactions?"
          ] || false,
        fema_payment_issues:
          formData.complianceIssues[
            "Difficulties with FEMA for international payments recently?"
          ] || false,
        digital_banking_issues:
          formData.complianceIssues[
            "Have digital banking regulations impacted your operations?"
          ] || false,
        fraud_cybersecurity_issues:
          formData.complianceIssues[
            "Encountered any fraud or cybersecurity issues recently?"
          ] || false,
        payment_gateway_compliance_issues:
          formData.complianceIssues[
            "Challenges with payment gateway compliance or security regulations?"
          ] || false,
        account_activity_issues:
          formData.complianceIssues[
            "Any account activity issues or fraudulent claims made?"
          ] || false,
        regulatory_actions:
          formData.complianceIssues[
            "Have regulatory actions been taken against your account?"
          ] || false,
      };

      localStorage.setItem(
        "businessRegistrationData",
        JSON.stringify(apiPayload)
      );
      console.log("API Payload:", apiPayload);

      // Make API call
      const response = sendInfo(apiPayload);
      const data = (await response).data;
      console.log(data);
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
    }
  };

  // ✅ Modified validation and submission
  const handleNext = () => {
    validateAndSubmit();
  };

  // ✅ Fixed completion percentage - only count required fields
  const getCompletionPercentage = () => {
    const requiredFields = [
      // Business info - only required fields
      formData.businessInfo.businessName,
      formData.businessInfo.businessLegalStructure,
      formData.businessInfo.businessType,
      formData.businessInfo.businessRegistrationNumber,
      formData.businessInfo.streetAddress1,
      formData.businessInfo.city,
      formData.businessInfo.stateRegion,
      formData.businessInfo.country,
      formData.businessInfo.postalCode,
      formData.businessInfo.gstNumber,
      formData.businessInfo.taxIdentificationNumber,
      // Business contact - only required fields
      formData.businessContact.name,
      formData.businessContact.email,
      formData.businessContact.phone,
      formData.businessContact.district,
      formData.businessContact.pinCode,
      formData.businessContact.state,
      formData.businessContact.country,
      // Banking info - only required fields
      formData.bankingInfo.bankName,
      formData.bankingInfo.accountName,
      formData.bankingInfo.accountType,
      formData.bankingInfo.accountNumber,
      formData.bankingInfo.ifscCode,
    ];

    const filledFields = requiredFields.filter((field) => {
      if (typeof field === "string") {
        return field.trim() !== "";
      }
      return field !== null && field !== undefined && field !== 0;
    }).length;

    return Math.round((filledFields / requiredFields.length) * 100);
  };

  const ErrorMessage = ({ error }: { error?: string }) => {
    if (!error) return null;
    return <p className="text-red-500 text-sm mt-1">{error}</p>;
  };

  return (
    <div className={`mx-auto px-2 ${is4K ? "max-w-[2000px]" : "max-w-5xl"}`}>
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-[var(--primary-color)] rounded-full mb-6">
          <Building2 className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-4xl font-bold text-[var(--primary-color)] mb-4">
          Complete Business Registration
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Please provide comprehensive business details for partnership
          registration. This information helps us understand your business
          better and assess partnership opportunities.
        </p>
      </div>

      {/* Progress Bar */}
      <div className="bg-white rounded-3xl shadow-xl p-6 mb-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-[var(--primary-color)]">
            Form Completion
          </h3>
          <span className="text-2xl font-bold text-[var(--secondary-color)]">
            {getCompletionPercentage()}%
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div
            className="bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] h-3 rounded-full transition-all duration-500"
            style={{ width: `${getCompletionPercentage()}%` }}
          ></div>
        </div>
      </div>

      <div className="space-y-8">
        {/* Business Details */}
        <div className="bg-white rounded-3xl shadow-xl p-8">
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 bg-[var(--primary-hover-color)] rounded-full flex items-center justify-center mr-3">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-[var(--primary-color)]">
              Business Details
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">
                Business Name *
              </label>
              <input
                type="text"
                value={formData.businessInfo.businessName}
                onChange={(e) =>
                  handleBusinessInfoChange("businessName", e.target.value)
                }
                className={`w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:outline-none focus:ring-[var(--primary-color)] focus:border-transparent transition-all text-gray-800 font-medium ${
                  errors["businessInfo.businessName"]
                    ? "border-red-500"
                    : "border-gray-200"
                }`}
                placeholder="Enter your business name"
              />
              <ErrorMessage error={errors["businessInfo.businessName"]} />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">
                Business Legal Structure *
              </label>
              <select
                value={formData.businessInfo.businessLegalStructure}
                onChange={(e) =>
                  handleBusinessInfoChange(
                    "businessLegalStructure",
                    e.target.value
                  )
                }
                className={`w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:outline-none focus:ring-[var(--primary-color)] focus:border-transparent transition-all text-gray-800 font-medium ${
                  errors["businessInfo.businessLegalStructure"]
                    ? "border-red-500"
                    : "border-gray-200"
                }`}
              >
                <option value="">Select legal structure</option>
                <option value="sole-proprietorship">Sole Proprietorship</option>
                <option value="partnership">Partnership</option>
                <option value="private-limited">Private Limited Company</option>
                <option value="public-limited">Public Limited Company</option>
                <option value="llp">Limited Liability Partnership</option>
                <option value="one-person-company">One Person Company</option>
              </select>
              <ErrorMessage
                error={errors["businessInfo.businessLegalStructure"]}
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">
                Business Type *
              </label>
              <select
                value={formData.businessInfo.businessType}
                onChange={(e) =>
                  handleBusinessInfoChange("businessType", e.target.value)
                }
                className={`w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:outline-none focus:ring-[var(--primary-color)] focus:border-transparent transition-all text-gray-800 font-medium ${
                  errors["businessInfo.businessType"]
                    ? "border-red-500"
                    : "border-gray-200"
                }`}
              >
                <option value="">Select business type</option>
                <option value="manufacturer">Manufacturer</option>
                <option value="wholesaler">Wholesaler</option>
                <option value="retailer">Retailer</option>
                <option value="distributor">Distributor</option>
                <option value="exporter">Exporter</option>
                <option value="importer">Importer</option>
                <option value="service-provider">Service Provider</option>
              </select>
              <ErrorMessage error={errors["businessInfo.businessType"]} />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">
                Year Established
              </label>
              <input
                type="number"
                value={formData.businessInfo.businessEstablishedYear || ""}
                onChange={(e) => handleYearChange(e.target.value)}
                className={`w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:outline-none focus:ring-[var(--primary-color)] focus:border-transparent transition-all text-gray-800 font-medium ${
                  errors["businessInfo.businessEstablishedYear"]
                    ? "border-red-500"
                    : "border-gray-200"
                }`}
                placeholder="YYYY"
                min="1900"
                max={new Date().getFullYear()}
              />
              <ErrorMessage
                error={errors["businessInfo.businessEstablishedYear"]}
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">
                Business Registration Number *
              </label>
              <input
                type="text"
                value={formData.businessInfo.businessRegistrationNumber}
                onChange={(e) =>
                  handleBusinessInfoChange(
                    "businessRegistrationNumber",
                    e.target.value.toUpperCase()
                  )
                }
                className={`w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:outline-none focus:ring-[var(--primary-color)] focus:border-transparent transition-all text-gray-800 font-medium ${
                  errors["businessInfo.businessRegistrationNumber"]
                    ? "border-red-500"
                    : "border-gray-200"
                }`}
                placeholder="Enter registration number"
              />
              <ErrorMessage
                error={errors["businessInfo.businessRegistrationNumber"]}
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">
                Brand Affiliations
              </label>
              <input
                type="text"
                value={formData.businessInfo.brandAffiliations || ""}
                onChange={(e) =>
                  handleBusinessInfoChange("brandAffiliations", e.target.value)
                }
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:outline-none focus:ring-[var(--primary-color)] focus:border-transparent transition-all text-gray-800 font-medium"
                placeholder="Enter brand affiliations"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">
                Website
              </label>
              <input
                type="url"
                value={formData.businessInfo.website || ""}
                onChange={(e) =>
                  handleBusinessInfoChange("website", e.target.value)
                }
                className={`w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:outline-none focus:ring-[var(--primary-color)] focus:border-transparent transition-all text-gray-800 font-medium ${
                  errors["businessInfo.website"]
                    ? "border-red-500"
                    : "border-gray-200"
                }`}
                placeholder="https://www.example.com"
              />
              <ErrorMessage error={errors["businessInfo.website"]} />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">
                Annual Turnover
              </label>
              <select
                value={formData.businessInfo.annualTurnover}
                onChange={(e) =>
                  handleBusinessInfoChange("annualTurnover", e.target.value)
                }
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:outline-none focus:ring-[var(--primary-color)] focus:border-transparent transition-all text-gray-800 font-medium"
              >
                <option value="">Select annual turnover</option>
                <option value="below-1-lakh">Below ₹1 Lakh</option>
                <option value="1-5-lakh">₹1 - 5 Lakh</option>
                <option value="5-10-lakh">₹5 - 10 Lakh</option>
                <option value="10-25-lakh">₹10 - 25 Lakh</option>
                <option value="25-50-lakh">₹25 - 50 Lakh</option>
                <option value="50-1-crore">₹50 Lakh - 1 Crore</option>
                <option value="1-5-crore">₹1 - 5 Crore</option>
                <option value="above-5-crore">Above ₹5 Crore</option>
              </select>
            </div>
          </div>

          {/* Tax & Registration Information */}
          <div className="mt-8 pt-8 border-t">
            <h3 className="text-lg font-semibold text-[var(--primary-color)] mb-4">
              Tax & Registration Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  {fieldLabels.taxRegistration.field1} *
                </label>
                <input
                  type="text"
                  value={formData.businessInfo.gstNumber}
                  onChange={(e) =>
                    handleBusinessInfoChange(
                      "gstNumber",
                      e.target.value.toUpperCase()
                    )
                  }
                  className={`w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:outline-none focus:ring-[var(--primary-color)] focus:border-transparent transition-all text-gray-800 font-medium ${
                    errors["businessInfo.gstNumber"]
                      ? "border-red-500"
                      : "border-gray-200"
                  }`}
                  placeholder={`Enter ${fieldLabels.taxRegistration.field1.toLowerCase()}`}
                  maxLength={15}
                />
                <ErrorMessage error={errors["businessInfo.gstNumber"]} />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  {fieldLabels.taxRegistration.field2} *
                </label>
                <input
                  type="text"
                  value={formData.businessInfo.taxIdentificationNumber}
                  onChange={(e) =>
                    handleBusinessInfoChange(
                      "taxIdentificationNumber",
                      e.target.value.toUpperCase()
                    )
                  }
                  className={`w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:outline-none focus:ring-[var(--primary-color)] focus:border-transparent transition-all text-gray-800 font-medium ${
                    errors["businessInfo.taxIdentificationNumber"]
                      ? "border-red-500"
                      : "border-gray-200"
                  }`}
                  placeholder={`Enter ${fieldLabels.taxRegistration.field2.toLowerCase()}`}
                  maxLength={15}
                />
                <ErrorMessage
                  error={errors["businessInfo.taxIdentificationNumber"]}
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  {fieldLabels.taxRegistration.field3}
                </label>
                <input
                  type="text"
                  value={formData.businessInfo.importExportCode || ""}
                  onChange={(e) =>
                    handleBusinessInfoChange("importExportCode", e.target.value)
                  }
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:outline-none focus:ring-[var(--primary-color)] focus:border-transparent transition-all text-gray-800 font-medium"
                  placeholder={`Enter ${fieldLabels.taxRegistration.field3.toLowerCase()} (if applicable)`}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Address Information */}
        <div className="bg-white rounded-3xl shadow-xl p-8">
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 bg-[var(--primary-hover-color)] rounded-full flex items-center justify-center mr-3">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-[var(--primary-color)]">
              Business Address
            </h2>
          </div>
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  Street Address 1 *
                </label>
                <input
                  type="text"
                  value={formData.businessInfo.streetAddress1}
                  onChange={(e) =>
                    handleBusinessInfoChange("streetAddress1", e.target.value)
                  }
                  className={`w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:outline-none focus:ring-[var(--primary-color)] focus:border-transparent transition-all text-gray-800 font-medium ${
                    errors["businessInfo.streetAddress1"]
                      ? "border-red-500"
                      : "border-gray-200"
                  }`}
                  placeholder="Enter street address"
                />
                <ErrorMessage error={errors["businessInfo.streetAddress1"]} />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  Street Address 2
                </label>
                <input
                  type="text"
                  value={formData.businessInfo.streetAddress2 || ""}
                  onChange={(e) =>
                    handleBusinessInfoChange("streetAddress2", e.target.value)
                  }
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:outline-none focus:ring-[var(--primary-color)] focus:border-transparent transition-all text-gray-800 font-medium"
                  placeholder="Enter additional address info"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  City *
                </label>
                <input
                  type="text"
                  value={formData.businessInfo.city}
                  onChange={(e) =>
                    handleBusinessInfoChange("city", e.target.value)
                  }
                  className={`w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:outline-none focus:ring-[var(--primary-color)] focus:border-transparent transition-all text-gray-800 font-medium ${
                    errors["businessInfo.city"]
                      ? "border-red-500"
                      : "border-gray-200"
                  }`}
                  placeholder="Enter city"
                />
                <ErrorMessage error={errors["businessInfo.city"]} />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  State/Region *
                </label>
                <input
                  type="text"
                  value={formData.businessInfo.stateRegion}
                  onChange={(e) =>
                    handleBusinessInfoChange("stateRegion", e.target.value)
                  }
                  className={`w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:outline-none focus:ring-[var(--primary-color)] focus:border-transparent transition-all text-gray-800 font-medium ${
                    errors["businessInfo.stateRegion"]
                      ? "border-red-500"
                      : "border-gray-200"
                  }`}
                  placeholder="Enter state/region"
                />
                <ErrorMessage error={errors["businessInfo.stateRegion"]} />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  Postal Code *
                </label>
                <input
                  type="text"
                  value={formData.businessInfo.postalCode}
                  onChange={(e) =>
                    handleBusinessInfoChange(
                      "postalCode",
                      e.target.value.toUpperCase()
                    )
                  }
                  className={`w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:outline-none focus:ring-[var(--primary-color)] focus:border-transparent transition-all text-gray-800 font-medium ${
                    errors["businessInfo.postalCode"]
                      ? "border-red-500"
                      : "border-gray-200"
                  }`}
                  placeholder="Enter postal code"
                  maxLength={10}
                />
                <ErrorMessage error={errors["businessInfo.postalCode"]} />
              </div>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">
                Country *
              </label>
              <select
                value={formData.businessInfo.country}
                onChange={(e) =>
                  handleBusinessInfoChange("country", e.target.value)
                }
                className={`w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:outline-none focus:ring-[var(--primary-color)] focus:border-transparent transition-all text-gray-800 font-medium ${
                  errors["businessInfo.country"]
                    ? "border-red-500"
                    : "border-gray-200"
                }`}
              >
                <option value="">Select country</option>
                <option value="IN">India</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="UK">United Kingdom</option>
                <option value="AU">Australia</option>
                <option value="DE">Germany</option>
                <option value="FR">France</option>
                <option value="JP">Japan</option>
                <option value="CN">China</option>
              </select>
              <ErrorMessage error={errors["businessInfo.country"]} />
            </div>
          </div>
        </div>

        {/* Business Contact Person */}
        <div className="bg-white rounded-3xl shadow-xl p-8">
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 bg-[var(--primary-hover-color)] rounded-full flex items-center justify-center mr-3">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-[var(--primary-color)]">
              Business Contact Person
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">
                Contact Person Name *
              </label>
              <input
                type="text"
                value={formData.businessContact.name}
                onChange={(e) =>
                  handleBusinessContactChange("name", e.target.value)
                }
                className={`w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:outline-none focus:ring-[var(--primary-color)] focus:border-transparent transition-all text-gray-800 font-medium ${
                  errors["businessContact.name"]
                    ? "border-red-500"
                    : "border-gray-200"
                }`}
                placeholder="Enter contact person name"
              />
              <ErrorMessage error={errors["businessContact.name"]} />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">
                Email Address *
              </label>
              <input
                type="email"
                value={formData.businessContact.email}
                onChange={(e) =>
                  handleBusinessContactChange("email", e.target.value)
                }
                className={`w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:outline-none focus:ring-[var(--primary-color)] focus:border-transparent transition-all text-gray-800 font-medium ${
                  errors["businessContact.email"]
                    ? "border-red-500"
                    : "border-gray-200"
                }`}
                placeholder="Enter email address"
              />
              <ErrorMessage error={errors["businessContact.email"]} />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">
                Phone Number *
              </label>
              <input
                type="tel"
                value={formData.businessContact.phone}
                onChange={(e) =>
                  handleBusinessContactChange("phone", e.target.value)
                }
                className={`w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:outline-none focus:ring-[var(--primary-color)] focus:border-transparent transition-all text-gray-800 font-medium ${
                  errors["businessContact.phone"]
                    ? "border-red-500"
                    : "border-gray-200"
                }`}
                placeholder="Enter phone number"
              />
              <ErrorMessage error={errors["businessContact.phone"]} />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">
                WhatsApp Number
              </label>
              <input
                type="tel"
                value={formData.businessContact.whatsapp || ""}
                onChange={(e) =>
                  handleBusinessContactChange("whatsapp", e.target.value)
                }
                className={`w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:outline-none focus:ring-[var(--primary-color)] focus:border-transparent transition-all text-gray-800 font-medium ${
                  errors["businessContact.whatsapp"]
                    ? "border-red-500"
                    : "border-gray-200"
                }`}
                placeholder="Enter WhatsApp number"
              />
              <ErrorMessage error={errors["businessContact.whatsapp"]} />
            </div>
          </div>

          {/* Contact Person Address */}
          <div className="mt-8 pt-8 border-t">
            <h3 className="text-lg font-semibold text-[var(--primary-color)] mb-4">
              Contact Person Address
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  District *
                </label>
                <input
                  type="text"
                  value={formData.businessContact.district}
                  onChange={(e) =>
                    handleBusinessContactChange("district", e.target.value)
                  }
                  className={`w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:outline-none focus:ring-[var(--primary-color)] focus:border-transparent transition-all text-gray-800 font-medium ${
                    errors["businessContact.district"]
                      ? "border-red-500"
                      : "border-gray-200"
                  }`}
                  placeholder="Enter district"
                />
                <ErrorMessage error={errors["businessContact.district"]} />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  Pin Code *
                </label>
                <input
                  type="text"
                  value={formData.businessContact.pinCode}
                  onChange={(e) =>
                    handleBusinessContactChange("pinCode", e.target.value)
                  }
                  className={`w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:outline-none focus:ring-[var(--primary-color)] focus:border-transparent transition-all text-gray-800 font-medium ${
                    errors["businessContact.pinCode"]
                      ? "border-red-500"
                      : "border-gray-200"
                  }`}
                  placeholder="Enter pin code"
                  maxLength={6}
                />
                <ErrorMessage error={errors["businessContact.pinCode"]} />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  State *
                </label>
                <input
                  type="text"
                  value={formData.businessContact.state}
                  onChange={(e) =>
                    handleBusinessContactChange("state", e.target.value)
                  }
                  className={`w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:outline-none focus:ring-[var(--primary-color)] focus:border-transparent transition-all text-gray-800 font-medium ${
                    errors["businessContact.state"]
                      ? "border-red-500"
                      : "border-gray-200"
                  }`}
                  placeholder="Enter state"
                />
                <ErrorMessage error={errors["businessContact.state"]} />
              </div>
            </div>
            <div className="mt-6">
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  Country *
                </label>
                <select
                  value={formData.businessContact.country}
                  onChange={(e) =>
                    handleBusinessContactChange("country", e.target.value)
                  }
                  className={`w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:outline-none focus:ring-[var(--primary-color)] focus:border-transparent transition-all text-gray-800 font-medium ${
                    errors["businessContact.country"]
                      ? "border-red-500"
                      : "border-gray-200"
                  }`}
                >
                  <option value="">Select country</option>
                  <option value="IN">India</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="UK">United Kingdom</option>
                  <option value="AU">Australia</option>
                  <option value="DE">Germany</option>
                  <option value="FR">France</option>
                  <option value="JP">Japan</option>
                  <option value="CN">China</option>
                </select>
                <ErrorMessage error={errors["businessContact.country"]} />
              </div>
            </div>
          </div>
        </div>

        {/* Business Credibility Assessment */}
        <div className="bg-white rounded-3xl shadow-xl p-8">
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 bg-[var(--primary-hover-color)] rounded-full flex items-center justify-center mr-3">
              <Star className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-[var(--primary-color)]">
              Credibility Assessment
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { key: "materialStandard", label: "Material Standard (1-5)" }, // Updated label to show 1-5 range
              { key: "qualityLevel", label: "Quality Level (1-5)" },
              {
                key: "sustainabilityLevel",
                label: "Sustainability Level (1-5)",
              },
              { key: "serviceLevel", label: "Service Level (1-5)" },
              { key: "standardsLevel", label: "Standards Level (1-5)" },
              { key: "ethicsLevel", label: "Ethics Level (1-5)" },
            ].map(({ key, label }) => (
              <div key={key} className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  {label}
                </label>
                <div className="flex items-center space-x-3">
                  <input
                    type="range"
                    min="1"
                    max="5" // Changed max from 10 to 5
                    value={formData.credibilityAssessment[key]}
                    onChange={(e) =>
                      handleCredibilityChange(
                        key,
                        Number.parseInt(e.target.value)
                      )
                    }
                    className="flex-1 h-2 bg-gray-200 rounded-lg"
                  />
                  <span className="w-8 text-center font-bold text-[var(--primary-color)]">
                    {formData.credibilityAssessment[key]}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-white rounded-3xl shadow-xl p-8">
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 bg-[var(--primary-hover-color)] rounded-full flex items-center justify-center mr-3">
              <Award className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-[var(--primary-color)]">
              Certifications
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {Object.entries(formData.certifications).map(([key, value]) => (
              <label
                key={key}
                className="flex items-center space-x-2 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={Boolean(value)}
                  onChange={(e) =>
                    handleCertificationChange(key, e.target.checked)
                  }
                  className="w-4 h-4 text-[var(--primary-color)] rounded"
                />
                <span className="text-sm text-gray-700 capitalize">
                  {key.replace(/([A-Z])/g, " $1").trim()}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Banking Information */}
        <div className="bg-white rounded-3xl shadow-xl p-8">
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 bg-[var(--primary-hover-color)] rounded-full flex items-center justify-center mr-3">
              <CreditCard className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-[var(--primary-color)]">
              Banking Information
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">
                Bank Name *
              </label>
              <input
                type="text"
                value={formData.bankingInfo.bankName}
                onChange={(e) =>
                  handleBankingInfoChange("bankName", e.target.value)
                }
                className={`w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:outline-none focus:ring-[var(--primary-color)] focus:border-transparent transition-all text-gray-800 font-medium ${
                  errors["bankingInfo.bankName"]
                    ? "border-red-500"
                    : "border-gray-200"
                }`}
                placeholder="Enter bank name"
              />
              <ErrorMessage error={errors["bankingInfo.bankName"]} />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">
                Account Name *
              </label>
              <input
                type="text"
                value={formData.bankingInfo.accountName}
                onChange={(e) =>
                  handleBankingInfoChange("accountName", e.target.value)
                }
                className={`w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:outline-none focus:ring-[var(--primary-color)] focus:border-transparent transition-all text-gray-800 font-medium ${
                  errors["bankingInfo.accountName"]
                    ? "border-red-500"
                    : "border-gray-200"
                }`}
                placeholder="Enter account holder name"
              />
              <ErrorMessage error={errors["bankingInfo.accountName"]} />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">
                Account Type *
              </label>
              <select
                value={formData.bankingInfo.accountType}
                onChange={(e) =>
                  handleBankingInfoChange("accountType", e.target.value)
                }
                className={`w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:outline-none focus:ring-[var(--primary-color)] focus:border-transparent transition-all text-gray-800 font-medium ${
                  errors["bankingInfo.accountType"]
                    ? "border-red-500"
                    : "border-gray-200"
                }`}
              >
                <option value="">Select account type</option>
                <option value="savings">Savings Account</option>
                <option value="current">Current Account</option>
                <option value="business">Business Account</option>
                <option value="corporate">Corporate Account</option>
              </select>
              <ErrorMessage error={errors["bankingInfo.accountType"]} />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">
                Account Number *
              </label>
              <input
                type="text"
                value={formData.bankingInfo.accountNumber}
                onChange={(e) =>
                  handleBankingInfoChange(
                    "accountNumber",
                    e.target.value.replace(/\D/g, "")
                  )
                }
                className={`w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:outline-none focus:ring-[var(--primary-color)] focus:border-transparent transition-all text-gray-800 font-medium ${
                  errors["bankingInfo.accountNumber"]
                    ? "border-red-500"
                    : "border-gray-200"
                }`}
                placeholder="Enter account number"
                maxLength={18}
              />
              <ErrorMessage error={errors["bankingInfo.accountNumber"]} />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">
                {fieldLabels.banking.routingCode} *
              </label>{" "}
              {/* Dynamic routing code label */}
              <input
                type="text"
                value={formData.bankingInfo.ifscCode}
                onChange={(e) =>
                  handleBankingInfoChange(
                    "ifscCode",
                    e.target.value.toUpperCase()
                  )
                }
                className={`w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:outline-none focus:ring-[var(--primary-color)] focus:border-transparent transition-all text-gray-800 font-medium ${
                  errors["bankingInfo.ifscCode"]
                    ? "border-red-500"
                    : "border-gray-200"
                }`}
                placeholder={`Enter ${fieldLabels.banking.routingCode.toLowerCase()}`}
                maxLength={11}
              />
              <ErrorMessage error={errors["bankingInfo.ifscCode"]} />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">
                SWIFT Code
              </label>{" "}
              {/* Simplified label */}
              <input
                type="text"
                value={formData.bankingInfo.swiftBisCode || ""}
                onChange={(e) =>
                  handleBankingInfoChange(
                    "swiftBisCode",
                    e.target.value.toUpperCase()
                  )
                }
                className={`w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:outline-none focus:ring-[var(--primary-color)] focus:border-transparent transition-all text-gray-800 font-medium ${
                  errors["bankingInfo.swiftBisCode"]
                    ? "border-red-500"
                    : "border-gray-200"
                }`}
                placeholder="Enter SWIFT code (for international)"
                maxLength={11}
              />
              <ErrorMessage error={errors["bankingInfo.swiftBisCode"]} />
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="block text-sm font-semibold text-gray-700">
                IBAN Code
              </label>
              <input
                type="text"
                value={formData.bankingInfo.ibanCode || ""}
                onChange={(e) =>
                  handleBankingInfoChange(
                    "ibanCode",
                    e.target.value.toUpperCase()
                  )
                }
                className={`w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:outline-none focus:ring-[var(--primary-color)] focus:border-transparent transition-all text-gray-800 font-medium ${
                  errors["bankingInfo.ibanCode"]
                    ? "border-red-500"
                    : "border-gray-200"
                }`}
                placeholder="Enter IBAN code (for international)"
                maxLength={34}
              />
              <ErrorMessage error={errors["bankingInfo.ibanCode"]} />
            </div>
          </div>
        </div>

        {/* Banking & Compliance Issues */}
        <div className="bg-white rounded-3xl shadow-xl p-8">
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 bg-[var(--primary-hover-color)] rounded-full flex items-center justify-center mr-3">
              <AlertTriangle className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-[var(--primary-color)]">
              Compliance Issues
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {Object.entries(formData.complianceIssues).map(([key, value]) => (
              <label
                key={key}
                className="flex items-center space-x-2 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={Boolean(value)}
                  onChange={(e) =>
                    handleComplianceChange(key, e.target.checked)
                  }
                  className="w-4 h-4 text-red-600 rounded"
                />
                <span className="text-sm text-gray-700">
                  {fieldLabels.compliance[
                    key as keyof typeof fieldLabels.compliance
                  ] || key}{" "}
                  {/* Use role-based compliance labels */}
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mt-8">
        <button
          onClick={onPrev}
          className="px-4 py-2  sm:px-8 sm:py-4  sm:font-bold border-2 border-[var(--primary-color)] text-gray-700 rounded-xl hover:bg-[var(--primary-hover-color)] hover:text-white transition-all font-medium"
        >
          <span className="inline">←</span>
          <span className="hidden md:inline ml-2">Prev</span>
        </button>
        <button
          onClick={handleNext}
          className="px-4 py-2  sm:px-8 sm:py-4  sm:font-bold bg-[var(--primary-color)] hover:bg-[var(--primary-hover-color)] text-white rounded-xl transition-all font-medium shadow-lg"
        >
          <span className="hidden md:inline mr-2">Next</span>
          <span className="inline">→</span>
        </button>
      </div>
    </div>
  );
}
