"use client"

import { useEffect } from 'react'
import AppointmentScheduler from "@/components/Essentials/BookAppointment"
import VerticalHeroSlider from "@/components/Essentials/VerticalBanner"

export default function Page() {

  useEffect(() => {
    async function fetchIp() {
      try {
        const res = await fetch('/api/get-ip')
        const data = await res.json()
        console.log("User IP:", data.ip)
        const result = await fetch(`https://ip-api.com/json/${data.ip}`)
        const dataresult = await result.json()
        console.log('User country:',dataresult)

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