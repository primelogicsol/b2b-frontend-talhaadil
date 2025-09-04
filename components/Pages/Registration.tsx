"use client";

import { useState, useEffect } from "react";
import ProgressIndicator from "@/components/Steps/ProgressIndicator";
import ChoosePartnership from "@/components/Steps/ChoosePartnership";
import BusinessInformation from "@/components/Steps/BusinessInformation";
import ProductSelection from "@/components/Steps/ProductSelection";
import DocumentSubmission from "@/components/Steps/DocumentSubmission";
import BuyerAgreement from "@/components/Steps/BuyerAgreement";
import ApplicationStatus from "@/components/Steps/ApplicationStatus";
import FinalActivation from "@/components/Steps/FinalActivation";
import VerticalHeroSlider from "@/components/Essentials/VerticalBanner";
import Cookies from "js-cookie";

export interface FormData {
  partnership?: {
    selected: string;
    title: string;
  };
  business?: {
    companyName: string;
    contactPerson: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
    businessType: string;
    yearEstablished: string;
    website: string;
  };
  products?: {
    categories: string[];
    subCategories: string[];
    detailedSelections: Record<string, any>;
  };
  documents?: {
    business_registration: File | null
    business_license: File | null
    adhaar_card: File | null
    artisan_id_card: File | null
    bank_statement: File | null
    product_catalog: File[] // Changed from File | null to File[]
    certifications: File[]
  };
  agreement?: {
    accepted: boolean;
  };
}

export default function RegistrationProcess() {
  const stepFromCookie = Cookies.get("registration_step");
  const initialStep = stepFromCookie ? parseInt(stepFromCookie, 10) + 1 : 1;

  const [currentStep, setCurrentStep] = useState<number>(5)
  const [formData, setFormData] = useState<FormData>({});

  const updateFormData = (stepData: Partial<FormData>) => {
    setFormData((prev) => ({ ...prev, ...stepData }));
  };

  const nextStep = () => {
    if (currentStep < 7) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <ChoosePartnership
            data={formData.partnership}
            onUpdate={(data) => updateFormData({ partnership: data })}
            onNext={nextStep}
            onPrev={prevStep}
          />
        );
      case 2:
        return (
          <BusinessInformation
            data={formData.business}
            onUpdate={(data) => updateFormData({ business: data })}
            onNext={nextStep}
            onPrev={prevStep}
          />
        );
      case 3:
        return (
          <ProductSelection
            data={formData.products}
            onUpdate={(data) => updateFormData({ products: data })}
            onNext={nextStep}
            onPrev={prevStep}
          />
        );
      case 4:
        return (
          <DocumentSubmission
            data={formData.documents}
            onUpdate={(data) => updateFormData({ documents: data })}
            onNext={nextStep}
            onPrev={prevStep}
          />
        );
      case 5:
        return (
          <BuyerAgreement
            data={formData.agreement}
            onUpdate={(data) => updateFormData({ agreement: data })}
            onNext={nextStep}
            onPrev={prevStep}
          />
        );
      case 6:
        return <ApplicationStatus onNext={nextStep} onPrev={prevStep} />;
      case 7:
        return <FinalActivation />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100">
      <VerticalHeroSlider />

      <ProgressIndicator currentStep={currentStep} totalSteps={7} />

      <div className="pt-34 pb-12">{renderStep()}</div>
    </div>
  );
}
