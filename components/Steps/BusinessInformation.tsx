"use client"
import { useEffect } from "react"
import { useState } from "react"
import { Building2, Phone, MapPin } from "lucide-react"

interface BusinessData {
  companyName: string
  contactPerson: string
  email: string
  phone: string
  address: string
  city: string
  state: string
  zipCode: string
  country: string
  businessType: string
  yearEstablished: string
  website: string
}

interface BusinessInformationProps {
  data?: BusinessData
  onUpdate: (data: BusinessData) => void
  onNext: () => void
  onPrev: () => void
}

export default function BusinessInformation({ data, onUpdate, onNext, onPrev }: BusinessInformationProps) {

 // ✅ Scroll to top on component mount
 useEffect(() => {
  window.scrollTo({ top: 0, behavior: "smooth" });
}, []);

  const [formData, setFormData] = useState<BusinessData>(
    data || {
      companyName: "",
      contactPerson: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      country: "",
      businessType: "",
      yearEstablished: "",
      website: "",
    },
  )

  const handleChange = (field: keyof BusinessData, value: string) => {
    const updatedData = { ...formData, [field]: value }
    setFormData(updatedData)
    onUpdate(updatedData)
  }

  const handleNext = () => {
    const requiredFields = ["companyName", "contactPerson", "email", "phone", "address", "city", "country"]
    const isValid = requiredFields.every((field) => formData[field as keyof BusinessData])

    if (isValid) {
      onNext()
    }
  }

  const getCompletionPercentage = () => {
    const totalFields = Object.keys(formData).length
    const filledFields = Object.values(formData).filter((value) => value.trim() !== "").length
    return Math.round((filledFields / totalFields) * 100)
  }

  return (
    <div className="max-w-5xl mx-auto px-6">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-[var(--primary-color)] rounded-full mb-6">
          <span className="text-2xl text-white"><Building2 className="w-8 h-8 text-white" /></span>
        </div>
        <h1 className="text-4xl font-bold text-[var(--primary-color)] mb-4">Business Information</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Please provide your business details for partnership registration. This information helps us understand your
          business better.
        </p>
      </div>

      {/* Progress Bar */}
      <div className="bg-white rounded-3xl shadow-xl p-6 mb-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-[var(--primary-color)]">Form Completion</h3>
          <span className="text-2xl font-bold text-[var(--secondary-color)]">{getCompletionPercentage()}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div
            className="bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] h-3 rounded-full transition-all duration-500"
            style={{ width: `${getCompletionPercentage()}%` }}
          ></div>
        </div>
      </div>

      <div className="bg-white rounded-3xl shadow-xl p-8 space-y-10">
        {/* Company Details */}
        <div>
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-[var(--secondary-hover-color)] rounded-full flex items-center justify-center">
              <span className="text-white text-lg"><Building2 className="w-6 h-6 text-white" /></span>
            </div>
            <h2 className="text-2xl font-bold text-[var(--primary-color)]">Company Details</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">Company Name *</label>
              <input
                type="text"
                value={formData.companyName}
                onChange={(e) => handleChange("companyName", e.target.value)}
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:outline-none focus:ring-[var(--secondary-hover-color)] focus:border-transparent transition-all text-gray-800 font-medium"
                placeholder="Enter your company name"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">Contact Person *</label>
              <input
                type="text"
                value={formData.contactPerson}
                onChange={(e) => handleChange("contactPerson", e.target.value)}
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2  focus:outline-none focus:ring-[var(--secondary-hover-color)] focus:border-transparent transition-all text-gray-800 font-medium"
                placeholder="Enter contact person name"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">Business Type</label>
              <select
                value={formData.businessType}
                onChange={(e) => handleChange("businessType", e.target.value)}
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2  focus:outline-none focus:ring-[var(--secondary-hover-color)] focus:border-transparent transition-all text-gray-800 font-medium"
              >
                <option value="">Select business type</option>
                <option value="sole-proprietorship">Sole Proprietorship</option>
                <option value="partnership">Partnership</option>
                <option value="corporation">Corporation</option>
                <option value="llc">LLC</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">Year Established</label>
              <input
                type="number"
                value={formData.yearEstablished}
                onChange={(e) => handleChange("yearEstablished", e.target.value)}
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2  focus:outline-none focus:ring-[var(--secondary-hover-color)] focus:border-transparent transition-all text-gray-800 font-medium"
                placeholder="YYYY"
              />
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div>
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-[var(--secondary-hover-color)] rounded-full flex items-center justify-center">
              <span className="text-white text-lg"> <Phone className="text-white w-5 h-5" /></span>
            </div>
            <h2 className="text-2xl font-bold text-[var(--primary-color)]">Contact Information</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">Email Address *</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2  focus:outline-none focus:ring-[var(--secondary-hover-color)] focus:border-transparent transition-all text-gray-800 font-medium"
                placeholder="Enter email address"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">Phone Number *</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2  focus:outline-none focus:ring-[var(--secondary-hover-color)] focus:border-transparent transition-all text-gray-800 font-medium"
                placeholder="Enter phone number"
              />
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="block text-sm font-semibold text-gray-700">Website</label>
              <input
                type="url"
                value={formData.website}
                onChange={(e) => handleChange("website", e.target.value)}
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2  focus:outline-none focus:ring-[var(--secondary-hover-color)] focus:border-transparent transition-all text-gray-800 font-medium"
                placeholder="https://www.example.com"
              />
            </div>
          </div>
        </div>

        {/* Address Information */}
        <div>
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-[var(--secondary-hover-color)] rounded-full flex items-center justify-center">
              <span className="text-white text-lg"><MapPin className="text-white w-5 h-5" /></span>
            </div>
            <h2 className="text-2xl font-bold text-[var(--primary-color)]">Address Information</h2>
          </div>
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">Street Address *</label>
              <input
                type="text"
                value={formData.address}
                onChange={(e) => handleChange("address", e.target.value)}
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2  focus:outline-none focus:ring-[var(--secondary-hover-color)] focus:border-transparent transition-all text-gray-800 font-medium"
                placeholder="Enter street address"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">City *</label>
                <input
                  type="text"
                  value={formData.city}
                  onChange={(e) => handleChange("city", e.target.value)}
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2  focus:outline-none focus:ring-[var(--secondary-hover-color)] focus:border-transparent transition-all text-gray-800 font-medium"
                  placeholder="Enter city"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">State/Province</label>
                <input
                  type="text"
                  value={formData.state}
                  onChange={(e) => handleChange("state", e.target.value)}
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2  focus:outline-none focus:ring-[var(--secondary-hover-color)] focus:border-transparent transition-all text-gray-800 font-medium"
                  placeholder="Enter state"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">ZIP/Postal Code</label>
                <input
                  type="text"
                  value={formData.zipCode}
                  onChange={(e) => handleChange("zipCode", e.target.value)}
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2  focus:outline-none focus:ring-[var(--secondary-hover-color)] focus:border-transparent transition-all text-gray-800 font-medium"
                  placeholder="Enter ZIP code"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">Country *</label>
              <select
                value={formData.country}
                onChange={(e) => handleChange("country", e.target.value)}
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2  focus:outline-none focus:ring-[var(--secondary-hover-color)] focus:border-transparent transition-all text-gray-800 font-medium"
              >
                <option value="">Select country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="IN">India</option>
                <option value="UK">United Kingdom</option>
                <option value="AU">Australia</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mt-8">
        <button
          onClick={onPrev}
          className="px-8 py-4 border-2 border-[var(--primary-color)] text-gray-700 rounded-xl hover:bg-[var(--primary-hover-color)] hover:text-white transition-all font-medium"
        >
          ← Previous
        </button>
        <button
          onClick={handleNext}
          className="px-8 py-4 bg-[var(--primary-color)] hover:bg-[var(--primary-hover-color)] text-white rounded-xl transition-all font-medium shadow-lg"
        >
          Continue →
        </button>
      </div>
    </div>
  )
}
