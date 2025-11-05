"use client";

import { useState, useEffect, useRef } from "react";
import ProgressIndicator from "@/components/Steps/ProgressIndicator";
import ChoosePartnership from "@/components/Steps/ChoosePartnership";
import BusinessInformation from "@/components/Steps/BusinessInformation";
import ProductSelection from "@/components/Steps/ProductSelection";
import DocumentSubmission from "@/components/Steps/DocumentSubmission";
import BuyerAgreement from "@/components/Steps/BuyerAgreement";
import ApplicationStatus from "@/components/Steps/ApplicationStatus";
import FinalActivation from "@/components/Steps/FinalActivation";
import PartnershipDisplay from "../Steps/AlreadyRegistered";
import VerticalHeroSlider from "../Essentials/VerticalBanner";
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
    business_registration: File | null;
    business_license: File | null;
    adhaar_card: File | null;
    artisan_id_card: File | null;
    bank_statement: File | null;
    product_catalog: File[];
    certifications: File[];
  };
  agreement?: {
    accepted: boolean;
  };
}

export default function RegistrationProcess() {
  const registrationStatus = Cookies.get("is_registered");
  const first_register = Cookies.get("first_register") == "true";
  const stepFromCookie = Cookies.get("registration_step");
  const initialStep = stepFromCookie ? parseInt(stepFromCookie, 10): 1;

  const [currentStep, setCurrentStep] = useState<number>(initialStep);
  const [formData, setFormData] = useState<FormData>({});
  const contentRef = useRef<HTMLDivElement>(null); // Reference to content area

  const updateFormData = (stepData: Partial<FormData>) => {
    setFormData((prev) => ({ ...prev, ...stepData }));
  }

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

  // Scroll to content area when currentStep changes
  useEffect(() => {
    const smoothScroll = (targetY: number, duration = 600) => {
      const startY = window.scrollY;
      const diff = targetY - startY;
      let startTime: number | null = null;

      const easeInOutQuad = (t: number) =>
        t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easeInOutQuad(progress);

        window.scrollTo(0, startY + diff * easedProgress);

        if (elapsed < duration) {
          requestAnimationFrame(step);
        }
      };

      requestAnimationFrame(step);
    };

    const timer = setTimeout(() => {
      if (contentRef.current) {
        const offsetTop =
          contentRef.current.getBoundingClientRect().top +
          window.scrollY -
          20;
        smoothScroll(offsetTop, 800); // 800ms for ultra-smooth effect
      }
    }, 1);

    return () => clearTimeout(timer);
  }, [currentStep]);

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

  if (registrationStatus === "APPROVED" && first_register) {
    return (
      <div className="bg-gradient-to-br from-gray-50 to-gray-100">
        <PartnershipDisplay />
      </div>
    );
  }

  return (
    <div>
      <VerticalHeroSlider />
      <div
        ref={contentRef}
        className="bg-gradient-to-br from-gray-50 to-gray-100"
      >
        <ProgressIndicator currentStep={currentStep} totalSteps={7} />
        <div className="pt-34 pb-12">{renderStep()}</div>
      </div>
    </div>
  );
}