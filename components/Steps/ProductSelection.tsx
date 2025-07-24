"use client"

import { useEffect, useState, useRef } from "react"
import { categories } from "@/lib/categories"

type DetailMap = Record<string, string[]>

interface SubCategory {
  id: string
  name: string
  details?: DetailMap
}

export interface Category {
  id: string
  name: string
  subcategories: SubCategory[]
}

interface ProductData {
  categories: string[]
  subCategories: string[]
  detailedSelections: Record<string, DetailMap>
}

interface ComprehensiveProductSelectionProps {
  data?: ProductData
  onUpdate: (data: ProductData) => void
  onNext: () => void
  onPrev: () => void
}

export default function ComprehensiveProductSelection({
  data,
  onUpdate,
  onNext,
  onPrev,
}: ComprehensiveProductSelectionProps) {
  const topRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  const [selectedCategories, setSelectedCategories] = useState<string[]>(data?.categories ?? [])
  const [selectedSubCategories, setSelectedSubCategories] = useState<string[]>(data?.subCategories ?? [])
  const [detailedSelections, setDetailedSelections] = useState<Record<string, DetailMap>>(
    data?.detailedSelections ?? {},
  )
  const [expandedSubCategory, setExpandedSubCategory] = useState<string | null>(null)
  const [currentStep, setCurrentStep] = useState<"categories" | "subcategories" | "details">("categories")
  const [showAllProducts, setShowAllProducts] = useState<Record<string, boolean>>({})

  const scrollToTop = () => {
    topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  const updateData = (cats: string[], subCats: string[], details: Record<string, DetailMap>) => {
    onUpdate({
      categories: cats,
      subCategories: subCats,
      detailedSelections: details,
    })
  }

  const handleCategorySelect = (categoryId: string) => {
    const updatedCategories = selectedCategories.includes(categoryId)
      ? selectedCategories.filter((id) => id !== categoryId)
      : [...selectedCategories, categoryId]
    setSelectedCategories(updatedCategories)

    if (!updatedCategories.includes(categoryId)) {
      const category = categories.find((cat) => cat.id === categoryId)
      if (category) {
        const subIds = category.subcategories.map((s) => s.id)
        const updatedSubCats = selectedSubCategories.filter((id) => !subIds.includes(id))
        const updatedDetails: Record<string, DetailMap> = {
          ...detailedSelections,
        }
        subIds.forEach((id) => delete updatedDetails[id])
        setSelectedSubCategories(updatedSubCats)
        setDetailedSelections(updatedDetails)
        updateData(updatedCategories, updatedSubCats, updatedDetails)
      }
    } else {
      updateData(updatedCategories, selectedSubCategories, detailedSelections)
    }
  }

  const handleSubCategorySelect = (subId: string) => {
    const updated = selectedSubCategories.includes(subId)
      ? selectedSubCategories.filter((id) => id !== subId)
      : [...selectedSubCategories, subId]
    setSelectedSubCategories(updated)

    if (!updated.includes(subId)) {
      const updatedDetails: Record<string, DetailMap> = {
        ...detailedSelections,
      }
      delete updatedDetails[subId]
      setDetailedSelections(updatedDetails)
      updateData(selectedCategories, updated, updatedDetails)
    } else {
      updateData(selectedCategories, updated, detailedSelections)
    }
  }

  // Modified to handle single selection per specification category
  const handleDetailSelect = (subId: string, detailKey: string, value: string) => {
    const updatedDetails: Record<string, DetailMap> = { ...detailedSelections }
    if (!updatedDetails[subId]) updatedDetails[subId] = {}

    // For specifications, only allow one selection per detail key
    const current = updatedDetails[subId][detailKey] || []
    if (current.includes(value)) {
      // If already selected, remove it
      updatedDetails[subId][detailKey] = []
    } else {
      // If not selected, replace with this single selection
      updatedDetails[subId][detailKey] = [value]
    }

    setDetailedSelections(updatedDetails)
    updateData(selectedCategories, selectedSubCategories, updatedDetails)
  }

  const getAvailableSubCategories = (): SubCategory[] => {
    return categories.filter((cat) => selectedCategories.includes(cat.id)).flatMap((cat) => cat.subcategories)
  }

  const getSubCategoryDetails = (subId: string): DetailMap | null => {
    for (const cat of categories) {
      const sub = cat.subcategories.find((s) => s.id === subId)
      if (sub && sub.details) {
        const filteredDetails: DetailMap = Object.fromEntries(
          Object.entries(sub.details).filter(([, value]) => Array.isArray(value) && value !== undefined) as [
            string,
            string[],
          ][],
        )
        return filteredDetails
      }
    }
    return null
  }

  const formatDetailKey = (key: string) =>
    key
      .split("_")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ")

  const getTotalSelections = (): number => {
    let total = 0
    Object.values(detailedSelections).forEach((m) =>
      Object.values(m).forEach((arr) => {
        total += arr.length
      }),
    )
    return total
  }

  const areAllSpecificationsSelected = (): boolean => {
    for (const subCategoryId of selectedSubCategories) {
      const details = getSubCategoryDetails(subCategoryId)
      if (!details) continue

      for (const detailKey of Object.keys(details)) {
        const hasSelection = detailedSelections[subCategoryId]?.[detailKey]?.length > 0
        if (!hasSelection) {
          return false
        }
      }
    }
    return true
  }

  const handleNext = () => {
    if (currentStep === "categories" && selectedCategories.length > 0) {
      setCurrentStep("subcategories")
      scrollToTop()
    } else if (currentStep === "subcategories" && selectedSubCategories.length > 0) {
      setCurrentStep("details")
      scrollToTop()
    } else if (currentStep === "details" && areAllSpecificationsSelected()) {
      onNext()
    }
  }

  const handlePrevious = () => {
    if (currentStep === "details") {
      setCurrentStep("subcategories")
      scrollToTop()
    } else if (currentStep === "subcategories") {
      setCurrentStep("categories")
      scrollToTop()
    } else {
      onPrev()
    }
  }

  const handleExpandSubCategory = (subCategoryId: string) => {
    setExpandedSubCategory(expandedSubCategory === subCategoryId ? null : subCategoryId)
    // Scroll to the expanded section after a brief delay to allow for expansion
    setTimeout(() => {
      const element = document.getElementById(`subcategory-${subCategoryId}`)
      if (element && expandedSubCategory !== subCategoryId) {
        element.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    }, 100)
  }

  const toggleShowAllProducts = (categoryId: string) => {
    setShowAllProducts((prev) => ({
      ...prev,
      [categoryId]: !prev[categoryId],
    }))
  }

  const getDisplayedSubcategories = (category: Category) => {
    const shouldShowAll = showAllProducts[category.id]
    return shouldShowAll ? category.subcategories : category.subcategories.slice(0, 3)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div ref={topRef} />

      {/* Progress Indicator */}
      <div className="mb-8">
        <div className="flex items-center justify-center space-x-4 mb-4">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
              currentStep === "categories"
                ? "bg-[var(--secondary-color)] text-white"
                : selectedCategories.length > 0
                  ? "bg-[var(--primary-color)] text-white"
                  : "bg-gray-300 text-gray-600"
            }`}
          >
            1
          </div>
          <div
            className={`w-16 h-1 ${selectedCategories.length > 0 ? "bg-[var(--primary-color)]" : "bg-gray-300"}`}
          ></div>
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
              currentStep === "subcategories"
                ? "bg-[var(--secondary-color)] text-white"
                : selectedSubCategories.length > 0
                  ? "bg-[var(--primary-color)] text-white"
                  : "bg-gray-300 text-gray-600"
            }`}
          >
            2
          </div>
          <div
            className={`w-16 h-1 ${selectedSubCategories.length > 0 ? "bg-[var(--primary-color)]" : "bg-gray-300"}`}
          ></div>
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
              currentStep === "details"
                ? "bg-[var(--secondary-color)] text-white"
                : getTotalSelections() > 0
                  ? "bg-[var(--primary-color)] text-white"
                  : "bg-gray-300 text-gray-600"
            }`}
          >
            3
          </div>
        </div>
        <div className="flex justify-center space-x-8 text-sm">
          <span className={currentStep === "categories" ? "text-[var(--secondary-color)] font-bold" : "text-gray-600"}>
            Categories
          </span>
          <span
            className={currentStep === "subcategories" ? "text-[var(--secondary-color)] font-bold" : "text-gray-600"}
          >
            Products
          </span>
          <span className={currentStep === "details" ? "text-[var(--secondary-color)] font-bold" : "text-gray-600"}>
            Specifications
          </span>
        </div>
      </div>

      {/* Step 1: Categories */}
      {currentStep === "categories" && (
        <div>
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-[var(--primary-color)] mb-4">Select Product Categories</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the main categories that represent your business expertise
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            {categories.map((category) => (
              <div
                key={category.id}
                onClick={() => handleCategorySelect(category.id)}
                className={`bg-white rounded-3xl shadow-lg p-6 cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${
                  selectedCategories.includes(category.id)
                    ? "ring-3 ring-[var(--secondary-color)] bg-gradient-to-br from-[var(--secondary-light-color)] to-white"
                    : "hover:shadow-2xl"
                }`}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-[var(--primary-color)] leading-tight">{category.name}</h3>
                  {selectedCategories.includes(category.id) && (
                    <div className="w-8 h-8 bg-[var(--secondary-color)] rounded-full flex items-center justify-center flex-shrink-0 ml-2">
                      <span className="text-white text-lg font-bold">✓</span>
                    </div>
                  )}
                </div>
                <div className="text-sm text-gray-600 mb-4">{category.subcategories.length} products available</div>
                <div className="flex flex-wrap gap-1">
                  {getDisplayedSubcategories(category).map((sub, index) => (
                    <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                      {sub.name}
                    </span>
                  ))}
                  {category.subcategories.length > 3 && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        toggleShowAllProducts(category.id)
                      }}
                      className="text-xs text-[var(--secondary-color)] font-medium px-2 py-1 hover:underline"
                    >
                      {showAllProducts[category.id] ? "Show less" : `+${category.subcategories.length - 3} more`}
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Step 2: Subcategories */}
      {currentStep === "subcategories" && selectedCategories.length > 0 && (
        <div>
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-[var(--primary-color)] mb-4">Select Specific Products</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the specific products you work with from your selected categories
            </p>
          </div>
          <div className="bg-white rounded-3xl shadow-lg p-8 mb-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {getAvailableSubCategories().map((subCategory) => (
                <label
                  key={subCategory.id}
                  className={`flex items-center space-x-3 cursor-pointer p-4 rounded-2xl transition-all duration-200 ${
                    selectedSubCategories.includes(subCategory.id)
                      ? "bg-[var(--secondary-light-color)] border-2 border-[var(--secondary-color)]"
                      : "hover:bg-gray-50 border-2 border-transparent"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={selectedSubCategories.includes(subCategory.id)}
                    onChange={() => handleSubCategorySelect(subCategory.id)}
                    className="w-5 h-5 appearance-none border-2 border-gray-300 rounded checked:bg-[var(--secondary-color)] checked:border-[var(--secondary-color)] focus:ring-2 focus:ring-[var(--secondary-color)] focus:ring-offset-2"
                    style={{
                      backgroundImage: selectedSubCategories.includes(subCategory.id)
                        ? `url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='m13.854 3.646-7.5 7.5a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6 10.293l7.146-7.147a.5.5 0 0 1 .708.708z'/%3e%3c/svg%3e")`
                        : "none",
                    }}
                  />
                  <span className="text-sm font-medium text-gray-700 leading-tight">{subCategory.name}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Step 3: Detailed Specifications */}
      {currentStep === "details" && selectedSubCategories.length > 0 && (
        <div>
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-[var(--primary-color)] mb-4">Product Specifications</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Select one specification for each category (single selection only)
            </p>
            <div className="mt-4 text-sm text-gray-500">
              Progress:{" "}
              {Object.keys(detailedSelections).reduce(
                (total, subId) =>
                  total +
                  Object.keys(detailedSelections[subId] || {}).filter(
                    (key) => detailedSelections[subId][key]?.length > 0,
                  ).length,
                0,
              )}{" "}
              /{" "}
              {selectedSubCategories.reduce((total, subId) => {
                const details = getSubCategoryDetails(subId)
                return total + (details ? Object.keys(details).length : 0)
              }, 0)}{" "}
              specifications selected
            </div>
          </div>
          <div className="space-y-8">
            {selectedSubCategories.map((subCategoryId) => {
              const subCategory = getAvailableSubCategories().find((sub) => sub.id === subCategoryId)
              const details = getSubCategoryDetails(subCategoryId)
              if (!subCategory || !details) return null

              return (
                <div
                  key={subCategoryId}
                  id={`subcategory-${subCategoryId}`}
                  className="bg-white rounded-3xl shadow-lg overflow-hidden"
                >
                  <div
                    className="bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-hover-color)] text-white p-6 cursor-pointer"
                    onClick={() => handleExpandSubCategory(subCategoryId)}
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="text-2xl font-bold">{subCategory.name}</h3>
                      <div className="flex items-center space-x-4">
                        <span className="text-sm bg-white/20 px-3 py-1 rounded-full">
                          {Object.keys(details).length} specification categories
                        </span>
                        <span
                          className={`transform transition-transform ${
                            expandedSubCategory === subCategoryId ? "rotate-180" : ""
                          }`}
                        >
                          ▼
                        </span>
                      </div>
                    </div>
                  </div>
                  {expandedSubCategory === subCategoryId && (
                    <div className="p-6">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {Object.entries(details).map(([detailKey, values]) => {
                          if (!Array.isArray(values)) return null
                          return (
                            <div key={detailKey} className="bg-gray-50 rounded-2xl p-6">
                              <h4 className="text-lg font-semibold text-[var(--primary-color)] mb-4">
                                {formatDetailKey(detailKey)} (Select one)
                              </h4>
                              <div className="space-y-2 max-h-60 overflow-y-auto">
                                {values.map((value, index) => {
                                  const isSelected =
                                    detailedSelections[subCategoryId]?.[detailKey]?.includes(value) || false
                                  return (
                                    <label
                                      key={index}
                                      className={`flex items-start space-x-3 cursor-pointer p-3 rounded-xl transition-all duration-200 ${
                                        isSelected
                                          ? "bg-[var(--secondary-light-color)] border-2 border-[var(--secondary-color)]"
                                          : "hover:bg-white border-2 border-transparent"
                                      }`}
                                    >
                                      <input
                                        type="radio"
                                        name={`${subCategoryId}-${detailKey}`}
                                        checked={isSelected}
                                        onChange={() => handleDetailSelect(subCategoryId, detailKey, value)}
                                        className="w-4 h-4 mt-0.5 border-2 border-gray-300 focus:ring-2 focus:ring-[var(--primary-color)] focus:ring-offset-2 flex-shrink-0"
                                        style={{
                                          accentColor: "var(--primary-color)",
                                        }}
                                      />
                                      <span className="text-sm text-gray-700 leading-relaxed">{value}</span>
                                    </label>
                                  )
                                })}
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* Summary */}
      {(selectedCategories.length > 0 || selectedSubCategories.length > 0 || getTotalSelections() > 0) && (
        <div className="bg-gradient-to-r from-[var(--secondary-light-color)] to-[var(--secondary-light-color)]/50 rounded-3xl p-8 mb-12 mt-12">
          <h3 className="text-xl font-semibold text-[var(--primary-color)] mb-4">Selection Summary</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/70 rounded-2xl p-4">
              <p className="text-sm font-medium text-gray-700 mb-2">Categories</p>
              <p className="text-2xl font-bold text-[var(--primary-color)]">{selectedCategories.length}</p>
            </div>
            <div className="bg-white/70 rounded-2xl p-4">
              <p className="text-sm font-medium text-gray-700 mb-2">Products</p>
              <p className="text-2xl font-bold text-[var(--primary-color)]">{selectedSubCategories.length}</p>
            </div>
            <div className="bg-white/70 rounded-2xl p-4">
              <p className="text-sm font-medium text-gray-700 mb-2">Specifications</p>
              <p className="text-2xl font-bold text-[var(--primary-color)]">{getTotalSelections()}</p>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="flex justify-between items-center">
        <button
          onClick={handlePrevious}
          className="px-8 py-4 border-2 border-[var(--primary-color)] text-[var(--primary-color)] rounded-2xl hover:bg-[var(--primary-color)] hover:text-white transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          ← Previous
        </button>
        <button
          onClick={handleNext}
          disabled={
            (currentStep === "categories" && selectedCategories.length === 0) ||
            (currentStep === "subcategories" && selectedSubCategories.length === 0) ||
            (currentStep === "details" && !areAllSpecificationsSelected())
          }
          className={`px-8 py-4 rounded-2xl transition-all duration-300 font-semibold shadow-lg transform ${
            (currentStep === "categories" && selectedCategories.length > 0) ||
            (currentStep === "subcategories" && selectedSubCategories.length > 0) ||
            (currentStep === "details" && areAllSpecificationsSelected())
              ? "bg-[var(--primary-color)] hover:bg-[var(--primary-hover-color)] text-white hover:shadow-xl hover:scale-105"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          {currentStep === "details" ? "Complete →" : "Continue →"}
        </button>
      </div>
    </div>
  )
}
