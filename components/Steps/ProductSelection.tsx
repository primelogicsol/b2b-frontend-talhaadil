"use client"

import { useState } from "react"

interface ProductData {
  categories: string[]
  subCategories: string[]
}

interface ProductSelectionProps {
  data?: ProductData
  onUpdate: (data: ProductData) => void
  onNext: () => void
  onPrev: () => void
}

const productCategories = [
  {
    id: "boutique",
    name: "Boutique",
    description: "Fashion and clothing items",
    subCategories: ["Women's Clothing", "Men's Clothing", "Accessories", "Shoes"],
  },
  {
    id: "interior-decor",
    name: "Interior Décor",
    description: "Home decoration and furnishing",
    subCategories: ["Wall Art", "Furniture", "Lighting", "Textiles"],
  },
  {
    id: "electronics",
    name: "Electronics",
    description: "Electronic devices and gadgets",
    subCategories: ["Mobile Accessories", "Audio Equipment", "Smart Devices", "Computers"],
  },
  {
    id: "health-beauty",
    name: "Health & Beauty",
    description: "Personal care and wellness products",
    subCategories: ["Skincare", "Makeup", "Hair Care", "Wellness"],
  },
  {
    id: "sports-outdoor",
    name: "Sports & Outdoor",
    description: "Sports equipment and outdoor gear",
    subCategories: ["Fitness Equipment", "Outdoor Gear", "Sports Apparel", "Recreation"],
  },
  {
    id: "books-media",
    name: "Books & Media",
    description: "Books, magazines, and media content",
    subCategories: ["Fiction", "Non-Fiction", "Educational", "Digital Media"],
  },
]

export default function ProductSelection({ data, onUpdate, onNext, onPrev }: ProductSelectionProps) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>(data?.categories || [])
  const [selectedSubCategories, setSelectedSubCategories] = useState<string[]>(data?.subCategories || [])

  const handleCategorySelect = (categoryId: string) => {
    const updatedCategories = selectedCategories.includes(categoryId)
      ? selectedCategories.filter((id) => id !== categoryId)
      : [...selectedCategories, categoryId]

    setSelectedCategories(updatedCategories)

    // Clear subcategories if category is deselected
    if (!updatedCategories.includes(categoryId)) {
      const category = productCategories.find((cat) => cat.id === categoryId)
      if (category) {
        const updatedSubCategories = selectedSubCategories.filter((sub) => !category.subCategories.includes(sub))
        setSelectedSubCategories(updatedSubCategories)
        onUpdate({ categories: updatedCategories, subCategories: updatedSubCategories })
      }
    } else {
      onUpdate({ categories: updatedCategories, subCategories: selectedSubCategories })
    }
  }

  const handleSubCategorySelect = (subCategory: string) => {
    const updatedSubCategories = selectedSubCategories.includes(subCategory)
      ? selectedSubCategories.filter((sub) => sub !== subCategory)
      : [...selectedSubCategories, subCategory]

    setSelectedSubCategories(updatedSubCategories)
    onUpdate({ categories: selectedCategories, subCategories: updatedSubCategories })
  }

  const getAvailableSubCategories = () => {
    return productCategories
      .filter((category) => selectedCategories.includes(category.id))
      .flatMap((category) => category.subCategories)
  }

  const handleNext = () => {
    if (selectedCategories.length > 0) {
      onNext()
    }
  }

  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-[var(--primary-color)] mb-2">Product Selection</h1>
        <p className="text-gray-600">Choose the product categories that best represent your business</p>
      </div>

      {/* Product Categories */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-[var(--primary-color)] mb-4">Product Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productCategories.map((category) => (
            <div
              key={category.id}
              onClick={() => handleCategorySelect(category.id)}
              className={`bg-white rounded-2xl shadow-lg p-6 cursor-pointer transition-all transform hover:scale-105 ${
                selectedCategories.includes(category.id)
                  ? "ring-2 ring-[var(--secondary-color)] bg-[var(--secondary-light-color)]"
                  : "hover:shadow-xl"
              }`}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-bold text-[var(--primary-color)]">{category.name}</h3>
                {selectedCategories.includes(category.id) && (
                  <div className="w-6 h-6 bg-[var(--secondary-color)] rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                )}
              </div>
              <p className="text-sm text-gray-700 mb-4">{category.description}</p>
              <div className="flex flex-wrap gap-1">
                {category.subCategories.slice(0, 3).map((sub, index) => (
                  <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                    {sub}
                  </span>
                ))}
                {category.subCategories.length > 3 && (
                  <span className="text-xs text-gray-500">+{category.subCategories.length - 3} more</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sub-Categories */}
      {selectedCategories.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-[var(--primary-color)] mb-4">Sub-Categories</h2>
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {getAvailableSubCategories().map((subCategory) => (
                <label
                  key={subCategory}
                  className="flex items-center space-x-3 cursor-pointer p-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <input
                    type="checkbox"
                    checked={selectedSubCategories.includes(subCategory)}
                    onChange={() => handleSubCategorySelect(subCategory)}
                    className="w-4 h-4 text-[var(--primary-color)] border-gray-300 rounded focus:ring-[var(--primary-color)]"
                  />
                  <span className="text-sm text-gray-700">{subCategory}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Selected Summary */}
      {selectedCategories.length > 0 && (
        <div className="bg-[var(--secondary-light-color)] rounded-2xl p-6 mb-8">
          <h3 className="text-lg font-semibold text-[var(--primary-color)] mb-3">Selected Products Summary</h3>
          <div className="space-y-2">
            <p className="text-sm">
              <span className="font-medium">Categories:</span> {selectedCategories.length} selected
            </p>
            <p className="text-sm">
              <span className="font-medium">Sub-categories:</span> {selectedSubCategories.length} selected
            </p>
          </div>
        </div>
      )}

      <div className="flex justify-between">
        <button
          onClick={onPrev}
          className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={selectedCategories.length === 0}
          className="px-6 py-3 bg-[var(--primary-color)] hover:bg-[var(--primary-hover-color)] text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Continue
        </button>
      </div>
    </div>
  )
}
