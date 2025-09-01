"use client";
import React, { useState } from "react";
import ComprehensiveProductSelection from "@/components/Pages/ProductPage";

// Define the ProductData type (copied from your original code for clarity)
interface DetailMap {
  [key: string]: string[];
}

interface ProductData {
  categories: string[];
  subCategories: string[];
  detailedSelections: Record<string, DetailMap>;
}

function Page() {
  // State to manage ProductData
  const [productData, setProductData] = useState<ProductData>({
    categories: [],
    subCategories: [],
    detailedSelections: {},
  });

  // Handler for updating product data
  const handleUpdate = (data: ProductData) => {
    setProductData(data);
  };

  // Handler for navigating to the next step
  const handleNext = () => {
    console.log("Proceeding to next step", productData);
    // Example: Add navigation logic here, e.g., router.push("/next-page")
  };

  // Handler for navigating to the previous step
  const handlePrev = () => {
    console.log("Going to previous step");
    // Example: Add navigation logic here, e.g., router.push("/previous-page")
  };

  return (
    <div>
      <ComprehensiveProductSelection
        data={productData}
        onUpdate={handleUpdate}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </div>
  );
}

export default Page;