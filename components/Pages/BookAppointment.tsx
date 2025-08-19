"use client"
import { useRouter } from "next/navigation"
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
import { useGlobalContext } from "../../context/ScreenProvider"
import { postAppointment } from "@/services/appointment"
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
  const { is4K } = useGlobalContext()
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
  const  [isLoading,setLoading] = useState(false)

  const updateFormData = (field: keyof FormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const setOfficeByCountry = () => {
    const country = getEffectiveCountry()
    if (country === "usa") {
      return "USA Office – HQ"
    } else {
      return "Kashmir India"
    }
  }
  const getEffectiveTimeZone = (): "EST" | "IST" | null => {
    const country = getEffectiveCountry()
    if (country === "usa") return "EST"
    if (country === "india") return "IST"
    return null
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

  const handleSubmit = async (e: React.FormEvent) => {

    e.preventDefault();
    setLoading(true)
    const body = {
      user_type: formData.userType,                // buyer | vendor | guest
      appointment_type: formData.appointmentMode === "in-person" ? "offline" : formData.appointmentMode,  // virtual | offline
      appointment_date: formData.date,             // YYYY-MM-DD
      appointment_time: formData.time,             // HH:MM
      time_zone: getEffectiveTimeZone(),           // required
      purpose: formData.purpose,                   // max 255 chars
      first_name: formData.firstName,              // required
      last_name: formData.lastName,                // required
      business_name: formData.businessName,        // required
      email: formData.email,                       // required
      phone_number: formData.phone,                // required
      website: formData.website || null,           // optional
      country: getEffectiveCountry(),              // optional
      ...(formData.appointmentMode === "in-person" && {
        office_location: setOfficeByCountry(),              // only if in-person
      }),
    };


    


    // Optional file upload
    const file = (formData as any).file || undefined;

    console.log("Sending booking request:", body, file);

    try {
      // @ts-ignore
      const response = await postAppointment(body, file);

      console.log("Booking successful:", response.data);
      setIsBooked(true);
    } catch (error) {
      console.error("Booking failed:", error);
      setIsBooked(false);
    }finally{
      setLoading(false);
    }
  }
  const isFormValid = () => {
    const baseValid =
      formData.userType &&
      formData.appointmentMode &&
      
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
    <div
      className={is4K ? "max-w-[2000px]" : "max-w-6xl"}
      style={{ margin: "0 auto", padding: is4K ? "32px" : "24px", fontSize: is4K ? "18px" : "16px" }}
    >
      {/* Header */}
      <div className="text-center mb-8" style={{ marginBottom: is4K ? "48px" : "32px" }}>
        <h1
          className={`font-bold text-[var(--primary-color)] mb-2 flex items-center justify-center ${is4K ? "text-5xl" : "text-3xl"}`}
          style={{ marginBottom: is4K ? "16px" : "8px" }}
        >
          <Calendar className="mr-3 hidden md:flex" size={is4K ? 48 : 32} />
          B2B Connect Appointment Scheduler
        </h1>
        <p className={`text-gray-600 mx-auto ${is4K ? "text-xl max-w-4xl" : "text-base max-w-2xl"}`}>
          Book a virtual or in-person meeting with our onboarding team, buyer advisors, or vendor support specialists
          all optimized for cross-border timing, calendars, and roles.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8" style={{ gap: is4K ? "48px" : "32px" }}>
        {/* User Type Section */}
        <div className="bg-white rounded-lg shadow-lg" style={{ padding: is4K ? "48px" : "32px" }}>
          <h2
            className={`font-semibold text-[var(--primary-color)] mb-6 flex items-center ${is4K ? "text-3xl" : "text-xl"}`}
            style={{ marginBottom: is4K ? "32px" : "24px" }}
          >
            <Users className="mr-3" size={is4K ? 32 : 24} />
            Identify Yourself
          </h2>
          <p
            className={`text-gray-600 mb-6 ${is4K ? "text-xl" : "text-base"}`}
            style={{ marginBottom: is4K ? "32px" : "24px" }}
          >
            This helps us assign the right support staff and location.
          </p>

          <div className="space-y-4" style={{ gap: is4K ? "24px" : "16px" }}>
            {[
              { value: "buyer", label: "Buyer", icon: Flag },
              { value: "vendor", label: "Vendor", icon: Building },
              { value: "guest", label: "Guest", icon: Users },
            ].map((option) => (
              <label
                key={option.value}
                className={`flex items-center border-2 rounded-lg cursor-pointer transition-all ${formData.userType === option.value
                  ? "border-[var(--primary-color)] bg-blue-50"
                  : "border-gray-200 hover:border-gray-300"
                  }`}
                style={{ padding: is4K ? "24px" : "16px" }}
              >
                <input
                  type="radio"
                  name="userType"
                  value={option.value}
                  checked={formData.userType === option.value}
                  onChange={(e) => updateFormData("userType", e.target.value)}
                  className="mr-4 text-[var(--primary-color)] bg-gray-100 border-gray-300 focus:ring-[var(--primary-color)] focus:ring-2 accent-[var(--primary-color)]"
                  style={{
                    width: is4K ? "24px" : "20px",
                    height: is4K ? "24px" : "20px",
                    marginRight: is4K ? "24px" : "16px",
                  }}
                  required
                />
                <option.icon
                  className="mr-3 text-[var(--primary-color)]"
                  size={is4K ? 28 : 20}
                  style={{ marginRight: is4K ? "18px" : "12px" }}
                />
                <span className={`font-medium ${is4K ? "text-xl" : "text-base"}`}>{option.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Guest Country Selection */}
        {formData.userType === "guest" && (
          <div className="bg-white rounded-lg shadow-lg" style={{ padding: is4K ? "48px" : "32px" }}>
            <h2
              className={`font-semibold text-[var(--primary-color)] mb-6 flex items-center ${is4K ? "text-3xl" : "text-xl"}`}
              style={{ marginBottom: is4K ? "32px" : "24px" }}
            >
              <Globe className="mr-3" size={is4K ? 32 : 24} />
              Select Your Country
            </h2>
            <p
              className={`text-gray-600 mb-6 ${is4K ? "text-xl" : "text-base"}`}
              style={{ marginBottom: is4K ? "32px" : "24px" }}
            >
              Please let us know which country you're from to show appropriate time slots.
            </p>

            <div className="grid md:grid-cols-2" style={{ gap: is4K ? "32px" : "24px" }}>
              <label
                className={`flex items-center border-2 rounded-lg cursor-pointer transition-all ${formData.guestCountry === "usa"
                  ? "border-[var(--primary-color)] bg-blue-50"
                  : "border-gray-200 hover:border-gray-300"
                  }`}
                style={{ padding: is4K ? "24px" : "16px" }}
              >
                <input
                  type="radio"
                  name="guestCountry"
                  value="usa"
                  checked={formData.guestCountry === "usa"}
                  onChange={(e) => updateFormData("guestCountry", e.target.value)}
                  className="mr-4 text-[var(--primary-color)] bg-gray-100 border-gray-300 focus:ring-[var(--primary-color)] focus:ring-2 accent-[var(--primary-color)]"
                  style={{
                    width: is4K ? "24px" : "20px",
                    height: is4K ? "24px" : "20px",
                    marginRight: is4K ? "24px" : "16px",
                  }}
                  required
                />
                <Flag
                  className="mr-3 text-[var(--primary-color)]"
                  size={is4K ? 28 : 20}
                  style={{ marginRight: is4K ? "18px" : "12px" }}
                />
                <span className={`font-medium ${is4K ? "text-xl" : "text-base"}`}>USA</span>
              </label>

              <label
                className={`flex items-center border-2 rounded-lg cursor-pointer transition-all ${formData.guestCountry === "india"
                  ? "border-[var(--primary-color)] bg-blue-50"
                  : "border-gray-200 hover:border-gray-300"
                  }`}
                style={{ padding: is4K ? "24px" : "16px" }}
              >
                <input
                  type="radio"
                  name="guestCountry"
                  value="india"
                  checked={formData.guestCountry === "india"}
                  onChange={(e) => updateFormData("guestCountry", e.target.value)}
                  className="mr-4 text-[var(--primary-color)] bg-gray-100 border-gray-300 focus:ring-[var(--primary-color)] focus:ring-2 accent-[var(--primary-color)]"
                  style={{
                    width: is4K ? "24px" : "20px",
                    height: is4K ? "24px" : "20px",
                    marginRight: is4K ? "24px" : "16px",
                  }}
                  required
                />
                <Building
                  className="mr-3 text-[var(--primary-color)]"
                  size={is4K ? 28 : 20}
                  style={{ marginRight: is4K ? "18px" : "12px" }}
                />
                <span className={`font-medium ${is4K ? "text-xl" : "text-base"}`}>India</span>
              </label>
            </div>
          </div>
        )}

        {/* Appointment Type Section */}
        {getEffectiveCountry() && (
          <div className="bg-white rounded-lg shadow-lg" style={{ padding: is4K ? "48px" : "32px" }}>
            <h2
              className={`font-semibold text-[var(--primary-color)] mb-6 flex items-center ${is4K ? "text-3xl" : "text-xl"}`}
              style={{ marginBottom: is4K ? "32px" : "24px" }}
            >
              <Globe className="mr-3" size={is4K ? 32 : 24} />
              Select Appointment Type
            </h2>

            <div className="grid md:grid-cols-2" style={{ gap: is4K ? "32px" : "24px" }}>
              <div
                className={`border-2 rounded-lg cursor-pointer transition-all ${formData.appointmentMode === "virtual"
                  ? "border-[var(--primary-color)] bg-blue-50"
                  : "border-gray-200 hover:border-gray-300"
                  }`}
                style={{ padding: is4K ? "32px" : "24px" }}
                onClick={() => updateFormData("appointmentMode", "virtual")}
              >
                <div className="flex items-center" style={{ marginBottom: is4K ? "24px" : "16px" }}>
                  <input
                    type="radio"
                    name="appointmentMode"
                    value="virtual"
                    checked={formData.appointmentMode === "virtual"}
                    onChange={() => updateFormData("appointmentMode", "virtual")}
                    className="mr-4 text-[var(--primary-color)] bg-gray-100 border-gray-300 focus:ring-[var(--primary-color)] focus:ring-2 accent-[var(--primary-color)]"
                    style={{
                      width: is4K ? "24px" : "20px",
                      height: is4K ? "24px" : "20px",
                      marginRight: is4K ? "24px" : "16px",
                    }}
                    required
                  />
                  <Monitor
                    className="mr-3 text-[var(--primary-color)]"
                    size={is4K ? 32 : 24}
                    style={{ marginRight: is4K ? "18px" : "12px" }}
                  />
                  <h3 className={`font-semibold ${is4K ? "text-2xl" : "text-lg"}`}>Virtual Meeting</h3>
                </div>
                <p className={`text-gray-600 ${is4K ? "text-lg" : "text-sm"}`}>Zoom / Google Meet / MS Teams</p>
              </div>

              <div
                className={`border-2 rounded-lg cursor-pointer transition-all ${formData.appointmentMode === "in-person"
                  ? "border-[var(--primary-color)] bg-blue-50"
                  : "border-gray-200 hover:border-gray-300"
                  }`}
                style={{ padding: is4K ? "32px" : "24px" }}
                onClick={() => updateFormData("appointmentMode", "in-person")}
              >
                <div className="flex items-center" style={{ marginBottom: is4K ? "24px" : "16px" }}>
                  <input
                    type="radio"
                    name="appointmentMode"
                    value="in-person"
                    checked={formData.appointmentMode === "in-person"}
                    onChange={() => updateFormData("appointmentMode", "in-person")}
                    className="mr-4 text-[var(--primary-color)] bg-gray-100 border-gray-300 focus:ring-[var(--primary-color)] focus:ring-2 accent-[var(--primary-color)]"
                    style={{
                      width: is4K ? "24px" : "20px",
                      height: is4K ? "24px" : "20px",
                      marginRight: is4K ? "24px" : "16px",
                    }}
                    required
                  />
                  <Home
                    className="mr-3 text-[var(--primary-color)]"
                    size={is4K ? 32 : 24}
                    style={{ marginRight: is4K ? "18px" : "12px" }}
                  />
                  <h3 className={`font-semibold ${is4K ? "text-2xl" : "text-lg"}`}>Offline Meeting</h3>
                </div>
                <p className={`text-gray-600 ${is4K ? "text-lg" : "text-sm"}`}>Visit a B2B Connect Office</p>
              </div>
            </div>
          </div>
        )}

        {/* Office Location Section */}
        {formData.appointmentMode === "in-person" && getFilteredOffices().length > 0 && (
          <div className="bg-white rounded-lg shadow-lg" style={{ padding: is4K ? "24px 48px" : "16px 32px" }}>
            <h2
              className={`font-semibold text-[var(--primary-color)] mb-6 flex items-center ${is4K ? "text-3xl" : "text-xl"}`}
              style={{ marginBottom: is4K ? "32px" : "24px" }}
            >
              <MapPin className="mr-3" size={is4K ? 32 : 24} />
              Office Location
            </h2>

            {/* Desktop/Tablet Table View */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full border-collapse rounded-lg overflow-hidden shadow-sm">
                <thead>
                  <tr className="bg-[var(--primary-color)] text-white">
                    <th
                      className={`border border-[var(--primary-hover-color)] text-left font-semibold ${is4K ? "text-xl p-6" : "text-base p-4"}`}
                    >
                      Office
                    </th>
                    <th
                      className={`border border-[var(--primary-hover-color)] text-left font-semibold ${is4K ? "text-xl p-6" : "text-base p-4"}`}
                    >
                      Address
                    </th>
                    <th
                      className={`border border-[var(--primary-hover-color)] text-left font-semibold ${is4K ? "text-xl p-6" : "text-base p-4"}`}
                    >
                      Phone
                    </th>

                  </tr>
                </thead>
                <tbody>
                  {getFilteredOffices().map((office, index) => (
                    <tr key={office.id} className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}>
                      <td className={`border border-gray-200 font-medium ${is4K ? "text-lg p-6" : "text-base p-4"}`}>
                        <div className="flex items-center">
                          <span className="mr-2">{office.flag}</span>
                          {office.name}
                        </div>
                      </td>
                      <td className={`border border-gray-200 text-gray-700 ${is4K ? "text-lg p-6" : "text-sm p-4"}`}>
                        {office.address}
                      </td>
                      <td
                        className={`border border-gray-200 text-gray-700 font-mono ${is4K ? "text-lg p-6" : "text-sm p-4"}`}
                      >
                        {office.phone}
                      </td>

                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Card View */}
            <div className="md:hidden space-y-4" style={{ gap: is4K ? "24px" : "16px" }}>
              {getFilteredOffices().map((office) => (
                <div
                  key={office.id}
                  className={`border rounded-lg transition-all duration-200 ${formData.office === office.id
                    ? "border-[var(--primary-color)] shadow-md"
                    : "border-gray-200 bg-white hover:border-gray-300"
                    }`}
                  style={{ padding: is4K ? "24px" : "16px" }}
                >
                  <div className="flex items-start justify-between" style={{ marginBottom: is4K ? "18px" : "12px" }}>
                    <div className="flex items-center flex-1">
                      <h3 className={`font-semibold text-gray-900 ${is4K ? "text-2xl" : "text-lg"}`}>
                        {office.name}
                      </h3>
                    </div>
                  </div>

                  <div className={`space-y-2 ${is4K ? "text-lg" : "text-sm"}`} style={{ gap: is4K ? "12px" : "8px" }}>
                    <div className="flex items-start">
                      <span className={`font-medium text-gray-600 flex-shrink-0 ${is4K ? "w-20" : "w-16"}`}>
                        Address:
                      </span>
                      <span className="text-gray-700">{office.address}</span>
                    </div>

                    <div className="flex items-center">
                      <span className={`font-medium text-gray-600 flex-shrink-0 ${is4K ? "w-20" : "w-16"}`}>
                        Phone:
                      </span>
                      <span className="text-gray-700 font-mono">{office.phone}</span>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>
        )}

        {/* Date and Time Selection */}
        {formData.appointmentMode && availableDays.length > 0 && (
          <div className="bg-white rounded-lg shadow-lg" style={{ padding: is4K ? "48px" : "32px" }}>
            <h2
              className={`font-semibold text-[var(--primary-color)] mb-6 flex items-center ${is4K ? "text-3xl" : "text-xl"}`}
              style={{ marginBottom: is4K ? "32px" : "24px" }}
            >
              <Calendar className="mr-3" size={is4K ? 32 : 24} />
              Select Date & Time
            </h2>

            <div className="grid md:grid-cols-2" style={{ gap: is4K ? "48px" : "32px" }}>
              {/* Date Selection */}
              <div>
                <label className={`block font-medium text-gray-700 ${is4K ? "text-xl mb-6" : "text-sm mb-4"}`}>
                  Available Days (No Sundays)
                </label>
                <div className={`overflow-y-auto border border-gray-200 rounded-lg ${is4K ? "max-h-80" : "max-h-64"}`}>
                  {availableDays.slice(0, 14).map((day) => {
                    const date = new Date(day)
                    const dayName = date.toLocaleDateString("en-US", { weekday: "short" })
                    const dateStr = date.toLocaleDateString("en-US", { month: "short", day: "numeric" })

                    return (
                      <label
                        key={day}
                        className={`flex items-center border-b border-gray-100 cursor-pointer hover:bg-gray-50 ${formData.date === day ? "bg-blue-50 border-[var(--primary-color)]" : ""
                          }`}
                        style={{ padding: is4K ? "18px" : "12px" }}
                      >
                        <input
                          type="radio"
                          name="date"
                          value={day}
                          checked={formData.date === day}
                          onChange={(e) => updateFormData("date", e.target.value)}
                          className="mr-3 text-[var(--primary-color)] bg-gray-100 border-gray-300 focus:ring-[var(--primary-color)] focus:ring-2 accent-[var(--primary-color)]"
                          style={{
                            width: is4K ? "20px" : "16px",
                            height: is4K ? "20px" : "16px",
                            marginRight: is4K ? "18px" : "12px",
                          }}
                          required
                        />
                        <span className={`font-medium ${is4K ? "text-lg" : "text-base"}`}>{dayName}</span>
                        <span className={`ml-auto text-gray-500 ${is4K ? "text-lg" : "text-sm"}`}>{dateStr}</span>
                      </label>
                    )
                  })}
                </div>
              </div>

              {/* Time Selection */}
              <div>
                <label className={`block font-medium text-gray-700 ${is4K ? "text-xl mb-6" : "text-sm mb-4"}`}>
                  Available Time Slots
                  {availableTimeSlots.length > 0 && (
                    <span className={`ml-2 text-gray-500 ${is4K ? "text-lg" : "text-sm"}`}>
                      ({availableTimeSlots[0]?.timezone})
                    </span>
                  )}
                </label>
                {formData.date ? (
                  <div
                    className={`overflow-y-auto border border-gray-200 rounded-lg ${is4K ? "max-h-80" : "max-h-64"}`}
                  >
                    {availableTimeSlots.length > 0 ? (
                      availableTimeSlots.map((slot) => (
                        <label
                          key={slot.time}
                          className={`flex items-center border-b border-gray-100 cursor-pointer hover:bg-gray-50 ${formData.time === slot.time ? "bg-blue-50 border-[var(--primary-color)]" : ""
                            }`}
                          style={{ padding: is4K ? "18px" : "12px" }}
                        >
                          <input
                            type="radio"
                            name="time"
                            value={slot.time}
                            checked={formData.time === slot.time}
                            onChange={(e) => updateFormData("time", e.target.value)}
                            className="mr-3 text-[var(--primary-color)] bg-gray-100 border-gray-300 focus:ring-[var(--primary-color)] focus:ring-2 accent-[var(--primary-color)]"
                            style={{
                              width: is4K ? "20px" : "16px",
                              height: is4K ? "20px" : "16px",
                              marginRight: is4K ? "18px" : "12px",
                            }}
                            required
                          />
                          <Clock
                            className="mr-2"
                            size={is4K ? 20 : 16}
                            style={{ marginRight: is4K ? "12px" : "8px" }}
                          />
                          <span className={`font-medium ${is4K ? "text-lg" : "text-base"}`}>{slot.time}</span>
                          <span className={`ml-auto text-gray-500 ${is4K ? "text-lg" : "text-sm"}`}>
                            {slot.timezone}
                          </span>
                        </label>
                      ))
                    ) : (
                      <div className={`text-center text-gray-500 ${is4K ? "text-lg p-6" : "text-base p-4"}`}>
                        No available time slots for this date
                      </div>
                    )}
                  </div>
                ) : (
                  <div
                    className={`border border-gray-200 rounded-lg text-center text-gray-500 ${is4K ? "text-lg p-6" : "text-base p-4"}`}
                  >
                    Please select a date first
                  </div>
                )}
              </div>
            </div>

            {/* Timezone Info */}
            {availableTimeSlots.length > 0 && (
              <div
                className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg"
                style={{ marginTop: is4K ? "24px" : "16px", padding: is4K ? "24px" : "16px" }}
              >
                <p className={`text-[var(--primary-color)] ${is4K ? "text-lg" : "text-sm"}`}>
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
          <div className="bg-white rounded-lg shadow-lg" style={{ padding: is4K ? "48px" : "32px" }}>
            <h2
              className={`font-semibold text-[var(--primary-color)] mb-6 flex items-center ${is4K ? "text-3xl" : "text-xl"}`}
              style={{ marginBottom: is4K ? "32px" : "24px" }}
            >
              <FileText className="mr-3" size={is4K ? 32 : 24} />
              Select Purpose of Appointment
            </h2>

            <div className="space-y-4" style={{ gap: is4K ? "24px" : "16px" }}>
              <select
                value={formData.purpose}
                onChange={(e) => updateFormData("purpose", e.target.value)}
                className={`w-full border border-gray-300 rounded-lg custom-select focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent ${is4K ? "text-lg p-4" : "text-base p-3"}`}
                required
              >
                <option value="">Select appointment purpose...</option>
                {purposes.map((purpose) => (
                  <option key={purpose} value={purpose}>
                    {purpose}
                  </option>
                ))}
              </select>

              <div style={{ marginTop: is4K ? "32px" : "24px" }}>
                <label
                  className={`font-medium text-gray-700 mb-2 flex items-center ${is4K ? "text-lg" : "text-sm"}`}
                  style={{ marginBottom: is4K ? "12px" : "8px" }}
                >
                  <Upload className="mr-2" size={is4K ? 20 : 16} style={{ marginRight: is4K ? "12px" : "8px" }} />
                  Upload File (optional)
                </label>
                <input
                  type="file"
                  accept=".pdf,.docx,.png,.jpg,.jpeg"
                  onChange={handleFileUpload}
                  className={`w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent ${is4K ? "text-lg p-4" : "text-base p-3"}`}
                />
                <p
                  className={`text-gray-500 mt-1 ${is4K ? "text-sm" : "text-xs"}`}
                  style={{ marginTop: is4K ? "8px" : "4px" }}
                >
                  Supported formats: PDF, DOCX, PNG, JPG
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Personal Details Section */}
        {formData.purpose && (
          <div className="bg-white rounded-lg shadow-lg" style={{ padding: is4K ? "48px" : "32px" }}>
            <h2
              className={`font-semibold text-[var(--primary-color)] mb-6 flex items-center ${is4K ? "text-3xl" : "text-xl"}`}
              style={{ marginBottom: is4K ? "32px" : "24px" }}
            >
              <User className="mr-3" size={is4K ? 32 : 24} />
              Your Details
            </h2>

            <div className="grid md:grid-cols-2" style={{ gap: is4K ? "24px" : "16px" }}>
              <div>
                <label
                  className={`block font-medium text-gray-700 mb-2 ${is4K ? "text-lg" : "text-sm"}`}
                  style={{ marginBottom: is4K ? "12px" : "8px" }}
                >
                  First Name *
                </label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => updateFormData("firstName", e.target.value)}
                  className={`w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent ${is4K ? "text-lg p-4" : "text-base p-3"}`}
                  required
                />
              </div>

              <div>
                <label
                  className={`block font-medium text-gray-700 mb-2 ${is4K ? "text-lg" : "text-sm"}`}
                  style={{ marginBottom: is4K ? "12px" : "8px" }}
                >
                  Last Name *
                </label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => updateFormData("lastName", e.target.value)}
                  className={`w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent ${is4K ? "text-lg p-4" : "text-base p-3"}`}
                  required
                />
              </div>

              <div>
                <label
                  className={`font-medium text-gray-700 mb-2 flex items-center ${is4K ? "text-lg" : "text-sm"}`}
                  style={{ marginBottom: is4K ? "12px" : "8px" }}
                >
                  <Building className="mr-2" size={is4K ? 20 : 16} style={{ marginRight: is4K ? "12px" : "8px" }} />
                  Business Name *
                </label>
                <input
                  type="text"
                  value={formData.businessName}
                  onChange={(e) => updateFormData("businessName", e.target.value)}
                  className={`w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent ${is4K ? "text-lg p-4" : "text-base p-3"}`}
                  required
                />
              </div>

              <div>
                <label
                  className={`block font-medium text-gray-700 mb-2 ${is4K ? "text-lg" : "text-sm"}`}
                  style={{ marginBottom: is4K ? "12px" : "8px" }}
                >
                  Company Website (Optional)
                </label>
                <input
                  type="url"
                  value={formData.website}
                  onChange={(e) => updateFormData("website", e.target.value)}
                  className={`w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent ${is4K ? "text-lg p-4" : "text-base p-3"}`}
                  placeholder="https://"
                />
              </div>

              <div>
                <label
                  className={`font-medium text-gray-700 mb-2 flex items-center ${is4K ? "text-lg" : "text-sm"}`}
                  style={{ marginBottom: is4K ? "12px" : "8px" }}
                >
                  <Mail className="mr-2" size={is4K ? 20 : 16} style={{ marginRight: is4K ? "12px" : "8px" }} />
                  Email Address *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateFormData("email", e.target.value)}
                  className={`w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent ${is4K ? "text-lg p-4" : "text-base p-3"}`}
                  required
                />
              </div>

              <div>
                <label
                  className={`font-medium text-gray-700 mb-2 flex items-center ${is4K ? "text-lg" : "text-sm"}`}
                  style={{ marginBottom: is4K ? "12px" : "8px" }}
                >
                  <Phone className="mr-2" size={is4K ? 20 : 16} style={{ marginRight: is4K ? "12px" : "8px" }} />
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => updateFormData("phone", e.target.value)}
                  className={`w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent ${is4K ? "text-lg p-4" : "text-base p-3"}`}
                  placeholder="International Format"
                />
              </div>
            </div>

            <div style={{ marginTop: is4K ? "32px" : "24px" }}>
              <label className="flex items-start">
                <input
                  type="checkbox"
                  checked={formData.authorized}
                  onChange={(e) => updateFormData("authorized", e.target.checked)}
                  className="mr-3 text-[var(--primary-color)] bg-gray-100 border-gray-300 rounded focus:ring-[var(--primary-color)] focus:ring-2 accent-[var(--primary-color)]"
                  style={{
                    width: is4K ? "24px" : "20px",
                    height: is4K ? "24px" : "20px",
                    marginRight: is4K ? "18px" : "12px",
                  }}
                  required
                />
                <span className={`text-gray-700 flex items-center ${is4K ? "text-lg" : "text-sm"}`}>
                  <CheckCircle className="mr-2" size={is4K ? 20 : 16} style={{ marginRight: is4K ? "12px" : "8px" }} />I
                  confirm I am authorized to represent this business.
                </span>
              </label>
            </div>
          </div>
        )}

        {/* Submit Button */}
        {formData.authorized && (
          <div className="bg-white rounded-lg shadow-lg" style={{ padding: is4K ? "48px" : "32px" }}>
            <button
              type="submit"
              disabled={!isFormValid() || isLoading}
              className={`w-full bg-[var(--primary-color)] hover:bg-[var(--primary-hover-color)] text-white font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center ${is4K ? "text-2xl py-6 px-8" : "text-lg py-4 px-6"}`}
            >
              <CheckCircle className="mr-3" size={is4K ? 32 : 24} style={{ marginRight: is4K ? "18px" : "12px" }} />
              {isLoading ? "LOADING..." : "BOOK APPOINTMENT"}
            </button>
          </div>
        )}
      </form>
    </div>
  )
}

function BookingConfirmation({ formData }: { formData: FormData }) {
  const { is4K } = useGlobalContext()
  const selectedOffice = offices.find((o) => o.id === formData.office)
  const router = useRouter()

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
   const setOfficeByCountry = () => {
    const country = getEffectiveCountry()
    if (country === "usa") {
      return "USA Office – HQ"
    } else {
      return "Kashmir India"
    }
  }

  return (
    <div
      className={is4K ? "max-w-[2000px]" : "max-w-4xl"}
      style={{ margin: "0 auto", padding: is4K ? "32px" : "24px", fontSize: is4K ? "18px" : "16px" }}
    >
      <div className="bg-white rounded-lg shadow-lg text-center" style={{ padding: is4K ? "48px" : "32px" }}>
        <div style={{ marginBottom: is4K ? "32px" : "24px" }}>
          <CheckCircle
            className="mx-auto text-green-500"
            size={is4K ? 80 : 64}
            style={{ marginBottom: is4K ? "24px" : "16px" }}
          />
          <h1
            className={`font-bold text-[var(--primary-color)] mb-2 flex items-center justify-center ${is4K ? "text-5xl" : "text-3xl"}`}
            style={{ marginBottom: is4K ? "16px" : "8px" }}
          >
            <Calendar
              className="mr-3 hidden lg:flex"
              size={is4K ? 48 : 32}
              style={{ marginRight: is4K ? "18px" : "12px" }}
            />
            Your appointment is confirmed!
          </h1>
        </div>

        <div
          className="bg-green-50 border border-green-200 rounded-lg mb-8"
          style={{ padding: is4K ? "32px" : "24px", marginBottom: is4K ? "48px" : "32px" }}
        >
          <div className="grid md:grid-cols-2 text-left" style={{ gap: is4K ? "24px" : "16px" }}>
            <div>
              <p className={`font-semibold flex items-center ${is4K ? "text-xl" : "text-base"}`}>
                <Calendar className="mr-2" size={is4K ? 20 : 16} style={{ marginRight: is4K ? "12px" : "8px" }} />
                Date:
              </p>
              <p className={is4K ? "text-lg" : "text-base"}>
                {new Date(formData.date).toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
            <div>
              <p className={`font-semibold flex items-center ${is4K ? "text-xl" : "text-base"}`}>
                <Clock className="mr-2" size={is4K ? 20 : 16} style={{ marginRight: is4K ? "12px" : "8px" }} />
                Time:
              </p>
              <p className={is4K ? "text-lg" : "text-base"}>
                {formData.time} {getTimezone()}
              </p>
            </div>
            <div>
              <p className={`font-semibold flex items-center ${is4K ? "text-xl" : "text-base"}`}>
                <MapPin className="mr-2" size={is4K ? 20 : 16} style={{ marginRight: is4K ? "12px" : "8px" }} />
                Mode:
              </p>
              <p className={is4K ? "text-lg" : "text-base"}>
                {formData.appointmentMode === "virtual" ? "Virtual Meeting" : `In-Person at ${setOfficeByCountry()}`}
              </p>
            </div>
            <div>
              <p className={`font-semibold flex items-center ${is4K ? "text-xl" : "text-base"}`}>
                <User className="mr-2" size={is4K ? 20 : 16} style={{ marginRight: is4K ? "12px" : "8px" }} />
                Contact:
              </p>
              <p className={is4K ? "text-lg" : "text-base"}>
                {formData.firstName} {formData.lastName}
              </p>
            </div>
          </div>
        </div>

        <div style={{ marginBottom: is4K ? "48px" : "32px" }}>
          <p
            className={`text-gray-600 mb-4 flex items-center justify-center ${is4K ? "text-xl" : "text-base"}`}
            style={{ marginBottom: is4K ? "24px" : "16px" }}
          >
            <Mail className="mr-2" size={is4K ? 20 : 16} style={{ marginRight: is4K ? "12px" : "8px" }} />A calendar
            invite and email confirmation have been sent to {formData.email}
          </p>
        </div>

        <div
          className="border border-yellow-200 rounded-lg mb-8"
          style={{ padding: is4K ? "32px" : "24px", marginBottom: is4K ? "48px" : "32px" }}
        >
          <h3
            className={`font-semibold text-[var(--secondary-color)] mb-4 flex items-center justify-center ${is4K ? "text-2xl" : "text-lg"}`}
            style={{ marginBottom: is4K ? "24px" : "16px" }}
          >
            <CheckCircle className="mr-2" size={is4K ? 28 : 20} style={{ marginRight: is4K ? "12px" : "8px" }} />
            Important Next Step:
          </h3>
          <p
            className={`text-gray-700 mb-4 ${is4K ? "text-xl" : "text-base"}`}
            style={{ marginBottom: is4K ? "24px" : "16px" }}
          >
            Please complete your business registration before your appointment date. This ensures smoother onboarding,
            document access, and profile validation.
          </p>

          <div className="flex flex-col sm:flex-row justify-center" style={{ gap: is4K ? "24px" : "16px" }}>
            <button
             onClick={()=>{
              router.push('/registration')
             }}
              className={`bg-[var(--primary-color)] hover:bg-[var(--primary-hover-color)] text-white rounded-lg font-semibold flex items-center justify-center ${is4K ? "text-xl px-8 py-4" : "text-base px-6 py-3"}`}
            >
              <User className="mr-2" size={is4K ? 20 : 16} style={{ marginRight: is4K ? "12px" : "8px" }} />
              Register as{" "}
              {formData.userType === "buyer" ? "Buyer" : formData.userType === "vendor" ? "Vendor" : "Partner"}
            </button>
          </div>
        </div>

        <div
          className="bg-[var(--secondary-light-color)] rounded-lg"
          style={{ marginTop: is4K ? "48px" : "32px", padding: is4K ? "32px" : "24px" }}
        >
          <h4
            className={`font-semibold text-[var(--primary-color)] mb-2 flex items-center justify-center ${is4K ? "text-2xl" : "text-lg"}`}
            style={{ marginBottom: is4K ? "16px" : "8px" }}
          >
            <CheckCircle className="mr-2" size={is4K ? 28 : 20} style={{ marginRight: is4K ? "12px" : "8px" }} />
            Take the next step toward a seamless onboarding experience.
          </h4>
          <p
            className={`text-gray-700 mb-4 ${is4K ? "text-xl" : "text-base"}`}
            style={{ marginBottom: is4K ? "24px" : "16px" }}
          >
            Register now so we can best support your appointment.
          </p>
          <button
           onClick={()=>{
              router.push('/registration')
             }}
            className={`bg-[var(--primary-color)] hover:bg-[var(--primary-hover-color)] text-white rounded-lg font-semibold flex items-center justify-center mx-auto ${is4K ? "text-xl px-10 py-4" : "text-base px-8 py-3"}`}
          >
            <User className="mr-2" size={is4K ? 20 : 16} style={{ marginRight: is4K ? "12px" : "8px" }} />
            Complete My Registration
          </button>
        </div>
      </div>
    </div>
  )
}
