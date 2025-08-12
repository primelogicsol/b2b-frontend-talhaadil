"use client"

import { useEffect, useState } from 'react'
import AppointmentScheduler from "@/components/Essentials/BookAppointment"
import VerticalHeroSlider from "@/components/Essentials/VerticalBanner"

export default function Page() {
  const [ip, setIp] = useState('')

  useEffect(() => {
    async function fetchIp() {
      try {
        const res = await fetch('/api/get-ip')
        const data = await res.json()
        setIp(data.ip)
        console.log("User IP:", data.ip) // ✅ logs to console
      } catch (error) {
        console.error("Error fetching IP:", error)
      }
    }

    fetchIp()
  }, [])

  return (
    <div>
      <VerticalHeroSlider />
      <AppointmentScheduler />
    </div>
  )
}
