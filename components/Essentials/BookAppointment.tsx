"use client"

import type React from "react"
import { useState, useEffect } from "react"
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  FileText,
  Globe,
  Phone,
  Mail,
  Building,
  User,
  CheckCircle,
  Monitor,
  Home,
  Upload,
  Flag,
} from "lucide-react"

interface FormData {
  userType: "buyer" | "vendor" | "guest" | ""
  guestCountry?: "usa" | "india" | ""
  appointmentMode: "virtual" | "in-person" | ""
  office: string
  purpose: string
  date: string
  time: string
  firstName: string
  lastName: string
  businessName: string
  website: string
  email: string
  phone: string
  authorized: boolean
  file?: File
}

interface TimeSlot {
  time: string
  available: boolean
  timezone: string
}

const offices = [
  {
    id: "usa-hq",
    name: "USA Office – HQ",
    address: "4445 Corporation Ln Ste 264, Virginia 23462",
    schedule: "Mon–Fri, 10 AM–5 PM EST",
    timezone: "EST",
    flag: "🇺🇸",
    phone: "+1 (757) 555-0123",
    country: "usa",
  },
  {
    id: "kashmir",
    name: "Kashmir India",
    address: "2 Gousia Colony Ext Zakura, Srinagar 190006",
    schedule: "Mon–Sat, 11 AM–4 PM IST",
    timezone: "IST",
    flag: "🇮🇳",
    phone: "+91 194 555-0456",
    country: "india",
  },
]

const purposes = [
  "Vendor Onboarding",
  "Buyer Platform Tour",
  "Product Listing Help",
  "Partnership Discussion",
  "Payment or Invoice Query",
  "Technical Support",
  "Certification or GI Help",
  "General Inquiry",
]

export default function AppointmentScheduler() {
  const [formData, setFormData] = useState<FormData>({
    userType: "",
    guestCountry: "",
    appointmentMode: "",
    office: "",
    purpose: "",
    date: "",
    time: "",
    firstName: "",
    lastName: "",
    businessName: "",
    website: "",
    email: "",
    phone: "",
    authorized: false,
  })
  const [isBooked, setIsBooked] = useState(false)
  const [availableDays, setAvailableDays] = useState<string[]>([])
  const [availableTimeSlots, setAvailableTimeSlots] = useState<TimeSlot[]>([])

  const updateFormData = (field: keyof FormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  // Get user's effective country
  const getEffectiveCountry = (): "usa" | "india" | null => {
    if (formData.userType === "buyer") return "usa"
    if (formData.userType === "vendor") return "india"
    if (formData.userType === "guest" && formData.guestCountry) return formData.guestCountry
    return null
  }

  // Generate available days (Monday to Saturday, no Sunday)
  const generateAvailableDays = () => {
    const days: string[] = []
    const today = new Date()

    for (let i = 0; i < 30; i++) {
      const date = new Date(today)
      date.setDate(today.getDate() + i)

      // Skip Sundays (0 = Sunday)
      if (date.getDay() !== 0) {
        days.push(date.toISOString().split("T")[0])
      }
    }

    return days
  }

  // Generate time slots based on country and appointment mode
  const generateTimeSlots = (selectedDate: string): TimeSlot[] => {
    const country = getEffectiveCountry()
    if (!country || !selectedDate) return []

    const date = new Date(selectedDate)
    const dayOfWeek = date.getDay() // 0 = Sunday, 1 = Monday, etc.
    const isFriday = dayOfWeek === 5
    const isSaturday = dayOfWeek === 6

    const slots: TimeSlot[] = []

    if (formData.appointmentMode === "in-person") {
      // Offline meeting availability
      if (country === "usa") {
        // USA (offline): Mon-Sat, 10:00 AM to 4:00 PM, break on Friday 1:00-2:00 PM
        const startHour = 10
        const endHour = 16

        for (let hour = startHour; hour < endHour; hour++) {
          for (let minute = 0; minute < 60; minute += 30) {
            const timeStr = `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`

            // Skip Friday 1:00-2:00 PM break
            const skipSlot = isFriday && hour === 13

            if (!skipSlot) {
              slots.push({
                time: timeStr,
                available: true,
                timezone: "EST",
              })
            }
          }
        }
      } else if (country === "india") {
        // India (offline): Mon-Fri 10:00 AM to 4:00 PM, Sat 11:00 AM to 3:00 PM, break on Friday 12:00-3:00 PM
        let startHour = 10
        let endHour = 16

        if (isSaturday) {
          startHour = 11
          endHour = 15
        }

        for (let hour = startHour; hour < endHour; hour++) {
          for (let minute = 0; minute < 60; minute += 30) {
            const timeStr = `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`

            // Skip Friday 12:00-3:00 PM break
            const skipSlot = isFriday && hour >= 12 && hour < 15

            if (!skipSlot) {
              slots.push({
                time: timeStr,
                available: true,
                timezone: "IST",
              })
            }
          }
        }
      }
    } else if (formData.appointmentMode === "virtual") {
      // Online meeting availability
      if (country === "usa") {
        // USA (online): Mon-Sat, 9:00 AM to 3:00 PM, break on Friday 1:00-2:00 PM
        const startHour = 9
        const endHour = 15

        for (let hour = startHour; hour < endHour; hour++) {
          for (let minute = 0; minute < 60; minute += 30) {
            const timeStr = `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`

            // Skip Friday 1:00-2:00 PM break
            const skipSlot = isFriday && hour === 13

            if (!skipSlot) {
              slots.push({
                time: timeStr,
                available: true,
                timezone: "EST",
              })
            }
          }
        }
      } else if (country === "india") {
        // India (online): Mon-Fri 1:00 PM to 3:00 PM, Sat 10:00 AM to 4:00 PM, break on Friday 12:00-3:00 PM
        let startHour = 13
        let endHour = 15

        if (isSaturday) {
          startHour = 10
          endHour = 16
        }

        for (let hour = startHour; hour < endHour; hour++) {
          for (let minute = 0; minute < 60; minute += 30) {
            const timeStr = `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`

            // Skip Friday 12:00-3:00 PM break (but this won't affect 1-3 PM slots anyway)
            const skipSlot = isFriday && hour >= 12 && hour < 15 && !isSaturday

            if (!skipSlot) {
              slots.push({
                time: timeStr,
                available: true,
                timezone: "IST",
              })
            }
          }
        }
      }
    }

    return slots
  }

  // Update available days when user type or guest country changes
  useEffect(() => {
    const country = getEffectiveCountry()
    if (country) {
      setAvailableDays(generateAvailableDays())
    } else {
      setAvailableDays([])
    }
    // Reset date and time when country changes
    setFormData((prev) => ({ ...prev, date: "", time: "" }))
  }, [formData.userType, formData.guestCountry])

  // Update available time slots when date changes
  useEffect(() => {
    if (formData.date && formData.appointmentMode) {
      setAvailableTimeSlots(generateTimeSlots(formData.date))
    } else {
      setAvailableTimeSlots([])
    }
    // Reset time when date changes
    setFormData((prev) => ({ ...prev, time: "" }))
  }, [formData.date, formData.appointmentMode, formData.userType, formData.guestCountry])

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      updateFormData("file", file)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Booking data:", formData)
    setIsBooked(true)
  }

  const isFormValid = () => {
    const baseValid =
      formData.userType &&
      formData.appointmentMode &&
      (formData.appointmentMode === "virtual" || formData.office) &&
      formData.purpose &&
      formData.date &&
      formData.time &&
      formData.firstName &&
      formData.lastName &&
      formData.businessName &&
      formData.email &&
      formData.authorized

    // Additional validation for guest country selection
    if (formData.userType === "guest") {
      return baseValid && formData.guestCountry
    }

    return baseValid
  }

  const getFilteredOffices = () => {
    const country = getEffectiveCountry()
    if (!country) return []

    return offices.filter((office) => office.country === country)
  }

  if (isBooked) {
    return <BookingConfirmation formData={formData} />
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-[var(--primary-color)] mb-2 flex items-center justify-center">
          <Calendar className="mr-3" size={32} />
          B2B Connect | Appointment Scheduler
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Book a virtual or in-person meeting with our onboarding team, buyer advisors, or vendor support specialists
          all optimized for cross-border timing, calendars, and roles.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* User Type Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-xl font-semibold text-[var(--primary-color)] mb-6 flex items-center">
            <Users className="mr-3" size={24} />
            Identify Yourself
          </h2>
          <p className="text-gray-600 mb-6">This helps us assign the right support staff and location.</p>

          <div className="space-y-4">
            {[
              { value: "buyer", label: "Buyer", icon: Flag },
              { value: "vendor", label: "Vendor", icon: Building },
              { value: "guest", label: "Guest", icon: Users },
            ].map((option) => (
              <label
                key={option.value}
                className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all ${
                  formData.userType === option.value
                    ? "border-[var(--primary-color)] bg-blue-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <input
                  type="radio"
                  name="userType"
                  value={option.value}
                  checked={formData.userType === option.value}
                  onChange={(e) => updateFormData("userType", e.target.value)}
                  className="mr-4 w-5 h-5 text-[var(--primary-color)] bg-gray-100 border-gray-300 focus:ring-[var(--primary-color)] focus:ring-2 accent-[var(--primary-color)]"
                  required
                />
                <option.icon className="mr-3 text-[var(--primary-color)]" size={20} />
                <span className="font-medium">{option.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Guest Country Selection */}
        {formData.userType === "guest" && (
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-xl font-semibold text-[var(--primary-color)] mb-6 flex items-center">
              <Globe className="mr-3" size={24} />
              Select Your Country
            </h2>
            <p className="text-gray-600 mb-6">
              Please let us know which country you're from to show appropriate time slots.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <label
                className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all ${
                  formData.guestCountry === "usa"
                    ? "border-[var(--primary-color)] bg-blue-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <input
                  type="radio"
                  name="guestCountry"
                  value="usa"
                  checked={formData.guestCountry === "usa"}
                  onChange={(e) => updateFormData("guestCountry", e.target.value)}
                  className="mr-4 w-5 h-5 text-[var(--primary-color)] bg-gray-100 border-gray-300 focus:ring-[var(--primary-color)] focus:ring-2 accent-[var(--primary-color)]"
                  required
                />
                <Flag className="mr-3 text-[var(--primary-color)]" size={20} />
                <span className="font-medium">USA 🇺🇸</span>
              </label>

              <label
                className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all ${
                  formData.guestCountry === "india"
                    ? "border-[var(--primary-color)] bg-blue-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <input
                  type="radio"
                  name="guestCountry"
                  value="india"
                  checked={formData.guestCountry === "india"}
                  onChange={(e) => updateFormData("guestCountry", e.target.value)}
                  className="mr-4 w-5 h-5 text-[var(--primary-color)] bg-gray-100 border-gray-300 focus:ring-[var(--primary-color)] focus:ring-2 accent-[var(--primary-color)]"
                  required
                />
                <Building className="mr-3 text-[var(--primary-color)]" size={20} />
                <span className="font-medium">India 🇮🇳</span>
              </label>
            </div>
          </div>
        )}

        {/* Appointment Type Section */}
        {getEffectiveCountry() && (
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-xl font-semibold text-[var(--primary-color)] mb-6 flex items-center">
              <Globe className="mr-3" size={24} />
              Select Appointment Type
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div
                className={`p-6 border-2 rounded-lg cursor-pointer transition-all ${
                  formData.appointmentMode === "virtual"
                    ? "border-[var(--primary-color)] bg-blue-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
                onClick={() => updateFormData("appointmentMode", "virtual")}
              >
                <div className="flex items-center mb-4">
                  <input
                    type="radio"
                    name="appointmentMode"
                    value="virtual"
                    checked={formData.appointmentMode === "virtual"}
                    onChange={() => updateFormData("appointmentMode", "virtual")}
                    className="mr-4 w-5 h-5 text-[var(--primary-color)] bg-gray-100 border-gray-300 focus:ring-[var(--primary-color)] focus:ring-2 accent-[var(--primary-color)]"
                    required
                  />
                  <Monitor className="mr-3 text-[var(--primary-color)]" size={24} />
                  <h3 className="font-semibold">Virtual Meeting</h3>
                </div>
                <p className="text-sm text-gray-600">Zoom / Google Meet / MS Teams</p>
              </div>

              <div
                className={`p-6 border-2 rounded-lg cursor-pointer transition-all ${
                  formData.appointmentMode === "in-person"
                    ? "border-[var(--primary-color)] bg-blue-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
                onClick={() => updateFormData("appointmentMode", "in-person")}
              >
                <div className="flex items-center mb-4">
                  <input
                    type="radio"
                    name="appointmentMode"
                    value="in-person"
                    checked={formData.appointmentMode === "in-person"}
                    onChange={() => updateFormData("appointmentMode", "in-person")}
                    className="mr-4 w-5 h-5 text-[var(--primary-color)] bg-gray-100 border-gray-300 focus:ring-[var(--primary-color)] focus:ring-2 accent-[var(--primary-color)]"
                    required
                  />
                  <Home className="mr-3 text-[var(--primary-color)]" size={24} />
                  <h3 className="font-semibold">In-Person Meeting</h3>
                </div>
                <p className="text-sm text-gray-600">Visit a B2B Connect Office</p>
              </div>
            </div>
          </div>
        )}

        {/* Office Location Section */}
        {formData.appointmentMode === "in-person" && getFilteredOffices().length > 0 && (
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-xl font-semibold text-[var(--primary-color)] mb-6 flex items-center">
              <MapPin className="mr-3" size={24} />
              Select Office Location
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse rounded-lg overflow-hidden shadow-sm">
                <thead>
                  <tr className="bg-[var(--primary-color)] text-white">
                    <th className="border border-[var(--primary-hover-color)] p-4 text-left font-semibold">Office</th>
                    <th className="border border-[var(--primary-hover-color)] p-4 text-left font-semibold">Address</th>
                    <th className="border border-[var(--primary-hover-color)] p-4 text-left font-semibold">Phone</th>
                    <th className="border border-[var(--primary-hover-color)] p-4 text-left font-semibold">
                      Days & Time
                    </th>
                    <th className="border border-[var(--primary-hover-color)] p-4 text-center font-semibold">Select</th>
                  </tr>
                </thead>
                <tbody>
                  {getFilteredOffices().map((office, index) => (
                    <tr key={office.id} className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}>
                      <td className="border border-gray-200 p-4 font-medium">
                        <div className="flex items-center">
                          <span className="mr-2">{office.flag}</span>
                          {office.name}
                        </div>
                      </td>
                      <td className="border border-gray-200 p-4 text-sm text-gray-700">{office.address}</td>
                      <td className="border border-gray-200 p-4 text-sm text-gray-700 font-mono">{office.phone}</td>
                      <td className="border border-gray-200 p-4 text-sm text-gray-700">{office.schedule}</td>
                      <td className="border border-gray-200 p-4 text-center">
                        <input
                          type="radio"
                          name="office"
                          value={office.id}
                          checked={formData.office === office.id}
                          onChange={(e) => updateFormData("office", e.target.value)}
                          className="w-5 h-5 text-[var(--primary-color)] bg-gray-100 border-gray-300 focus:ring-[var(--primary-color)] focus:ring-2 accent-[var(--primary-color)]"
                          required={formData.appointmentMode === "in-person"}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Date and Time Selection */}
        {formData.appointmentMode && availableDays.length > 0 && (
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-xl font-semibold text-[var(--primary-color)] mb-6 flex items-center">
              <Calendar className="mr-3" size={24} />
              Select Date & Time
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Date Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">Available Days (No Sundays)</label>
                <div className="max-h-64 overflow-y-auto border border-gray-200 rounded-lg">
                  {availableDays.slice(0, 14).map((day) => {
                    const date = new Date(day)
                    const dayName = date.toLocaleDateString("en-US", { weekday: "long" })
                    const dateStr = date.toLocaleDateString("en-US", { month: "short", day: "numeric" })

                    return (
                      <label
                        key={day}
                        className={`flex items-center p-3 border-b border-gray-100 cursor-pointer hover:bg-gray-50 ${
                          formData.date === day ? "bg-blue-50 border-[var(--primary-color)]" : ""
                        }`}
                      >
                        <input
                          type="radio"
                          name="date"
                          value={day}
                          checked={formData.date === day}
                          onChange={(e) => updateFormData("date", e.target.value)}
                          className="mr-3 w-4 h-4 text-[var(--primary-color)] bg-gray-100 border-gray-300 focus:ring-[var(--primary-color)] focus:ring-2 accent-[var(--primary-color)]"
                          required
                        />
                        <span className="font-medium">{dayName}</span>
                        <span className="ml-auto text-gray-500">{dateStr}</span>
                      </label>
                    )
                  })}
                </div>
              </div>

              {/* Time Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  Available Time Slots
                  {availableTimeSlots.length > 0 && (
                    <span className="ml-2 text-sm text-gray-500">({availableTimeSlots[0]?.timezone})</span>
                  )}
                </label>
                {formData.date ? (
                  <div className="max-h-64 overflow-y-auto border border-gray-200 rounded-lg">
                    {availableTimeSlots.length > 0 ? (
                      availableTimeSlots.map((slot) => (
                        <label
                          key={slot.time}
                          className={`flex items-center p-3 border-b border-gray-100 cursor-pointer hover:bg-gray-50 ${
                            formData.time === slot.time ? "bg-blue-50 border-[var(--primary-color)]" : ""
                          }`}
                        >
                          <input
                            type="radio"
                            name="time"
                            value={slot.time}
                            checked={formData.time === slot.time}
                            onChange={(e) => updateFormData("time", e.target.value)}
                            className="mr-3 w-4 h-4 text-[var(--primary-color)] bg-gray-100 border-gray-300 focus:ring-[var(--primary-color)] focus:ring-2 accent-[var(--primary-color)]"
                            required
                          />
                          <Clock className="mr-2" size={16} />
                          <span className="font-medium">{slot.time}</span>
                          <span className="ml-auto text-sm text-gray-500">{slot.timezone}</span>
                        </label>
                      ))
                    ) : (
                      <div className="p-4 text-center text-gray-500">No available time slots for this date</div>
                    )}
                  </div>
                ) : (
                  <div className="border border-gray-200 rounded-lg p-4 text-center text-gray-500">
                    Please select a date first
                  </div>
                )}
              </div>
            </div>

            {/* Timezone Info */}
            {availableTimeSlots.length > 0 && (
              <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Note:</strong> All times are shown in {availableTimeSlots[0]?.timezone} timezone.
                  {getEffectiveCountry() === "usa" && " (Eastern Standard Time)"}
                  {getEffectiveCountry() === "india" && " (India Standard Time)"}
                </p>
              </div>
            )}
          </div>
        )}

        {/* Purpose Section */}
        {formData.date && formData.time && (
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-xl font-semibold text-[var(--primary-color)] mb-6 flex items-center">
              <FileText className="mr-3" size={24} />
              Select Purpose of Appointment
            </h2>

            <div className="space-y-4">
              <select
                value={formData.purpose}
                onChange={(e) => updateFormData("purpose", e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg custom-select focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                required
              >
                <option value="">Select appointment purpose...</option>
                {purposes.map((purpose) => (
                  <option key={purpose} value={purpose}>
                    {purpose}
                  </option>
                ))}
              </select>

              <div className="mt-6">
                <label className="text-sm font-medium text-gray-700 mb-2 flex items-center">
                  <Upload className="mr-2" size={16} />
                  Upload File (optional)
                </label>
                <input
                  type="file"
                  accept=".pdf,.docx,.png,.jpg,.jpeg"
                  onChange={handleFileUpload}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                />
                <p className="text-xs text-gray-500 mt-1">Supported formats: PDF, DOCX, PNG, JPG</p>
              </div>
            </div>
          </div>
        )}

        {/* Personal Details Section */}
        {formData.purpose && (
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-xl font-semibold text-[var(--primary-color)] mb-6 flex items-center">
              <User className="mr-3" size={24} />
              Your Details
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => updateFormData("firstName", e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => updateFormData("lastName", e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 flex items-center">
                  <Building className="mr-2" size={16} />
                  Business Name *
                </label>
                <input
                  type="text"
                  value={formData.businessName}
                  onChange={(e) => updateFormData("businessName", e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Company Website (Optional)</label>
                <input
                  type="url"
                  value={formData.website}
                  onChange={(e) => updateFormData("website", e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                  placeholder="https://"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 flex items-center">
                  <Mail className="mr-2" size={16} />
                  Email Address *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateFormData("email", e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 flex items-center">
                  <Phone className="mr-2" size={16} />
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => updateFormData("phone", e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                  placeholder="International Format"
                />
              </div>
            </div>

            <div className="mt-6">
              <label className="flex items-start">
                <input
                  type="checkbox"
                  checked={formData.authorized}
                  onChange={(e) => updateFormData("authorized", e.target.checked)}
                  className="mr-3 w-5 h-5 text-[var(--primary-color)] bg-gray-100 border-gray-300 rounded focus:ring-[var(--primary-color)] focus:ring-2 accent-[var(--primary-color)]"
                  required
                />
                <span className="text-sm text-gray-700 flex items-center">
                  <CheckCircle className="mr-2" size={16} />I confirm I am authorized to represent this business.
                </span>
              </label>
            </div>
          </div>
        )}

        {/* Submit Button */}
        {formData.authorized && (
          <div className="bg-white rounded-lg shadow-lg p-8">
            <button
              type="submit"
              disabled={!isFormValid()}
              className="w-full bg-[var(--primary-color)] hover:bg-[var(--primary-hover-color)] text-white font-semibold py-4 px-6 rounded-lg transition-colors text-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              <CheckCircle className="mr-3" size={24} />
              BOOK APPOINTMENT
            </button>
          </div>
        )}
      </form>
    </div>
  )
}

function BookingConfirmation({ formData }: { formData: FormData }) {
  const selectedOffice = offices.find((o) => o.id === formData.office)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  const getEffectiveCountry = (): "usa" | "india" | null => {
    if (formData.userType === "buyer") return "usa"
    if (formData.userType === "vendor") return "india"
    if (formData.userType === "guest" && formData.guestCountry) return formData.guestCountry
    return null
  }

  const getTimezone = () => {
    const country = getEffectiveCountry()
    return country === "usa" ? "EST" : "IST"
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="mb-6">
          <CheckCircle className="mx-auto text-green-500 mb-4" size={64} />
          <h1 className="text-3xl font-bold text-[var(--primary-color)] mb-2 flex items-center justify-center">
            <Calendar className="mr-3" size={32} />
            Your appointment is confirmed!
          </h1>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
          <div className="grid md:grid-cols-2 gap-4 text-left">
            <div>
              <p className="font-semibold flex items-center">
                <Calendar className="mr-2" size={16} />
                Date:
              </p>
              <p>
                {new Date(formData.date).toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
            <div>
              <p className="font-semibold flex items-center">
                <Clock className="mr-2" size={16} />
                Time:
              </p>
              <p>
                {formData.time} {getTimezone()}
              </p>
            </div>
            <div>
              <p className="font-semibold flex items-center">
                <MapPin className="mr-2" size={16} />
                Mode:
              </p>
              <p>
                {formData.appointmentMode === "virtual" ? "Virtual Meeting" : `In-Person at ${selectedOffice?.name}`}
              </p>
            </div>
            <div>
              <p className="font-semibold flex items-center">
                <User className="mr-2" size={16} />
                Contact:
              </p>
              <p>
                {formData.firstName} {formData.lastName}
              </p>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <p className="text-gray-600 mb-4 flex items-center justify-center">
            <Mail className="mr-2" size={16} />A calendar invite and email confirmation have been sent to{" "}
            {formData.email}
          </p>
        </div>

        <div className="border border-yellow-200 rounded-lg p-6 mb-8">
          <h3 className="font-semibold text-[var(--secondary-color)] mb-4 flex items-center justify-center">
            <CheckCircle className="mr-2" size={20} />
            Important Next Step:
          </h3>
          <p className="text-gray-700 mb-4">
            Please complete your business registration before your appointment date. This ensures smoother onboarding,
            document access, and profile validation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[var(--primary-color)] hover:bg-[var(--primary-hover-color)] text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center">
              <User className="mr-2" size={16} />
              Register as{" "}
              {formData.userType === "buyer" ? "Buyer" : formData.userType === "vendor" ? "Vendor" : "Partner"}
            </button>
          </div>
        </div>

        <div className="mt-8 p-6 bg-[var(--secondary-light-color)] rounded-lg">
          <h4 className="font-semibold text-[var(--primary-color)] mb-2 flex items-center justify-center">
            <CheckCircle className="mr-2" size={20} />
            Take the next step toward a seamless onboarding experience.
          </h4>
          <p className="text-gray-700 mb-4">Register now so we can best support your appointment.</p>
          <button className="bg-[var(--primary-color)] hover:bg-[var(--primary-hover-color)] text-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center mx-auto">
            <User className="mr-2" size={16} />
            Complete My Registration
          </button>
        </div>
      </div>
    </div>
  )
}
