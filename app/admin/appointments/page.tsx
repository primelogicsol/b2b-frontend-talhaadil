"use client"

import { useState, useEffect } from "react"
import { mockAppointments, type Appointment } from "@/lib/data"
export default function AppointmentsPage() {
  const [appointments, setAppointments] = useState<Appointment[]>([])

  useEffect(() => {
    setAppointments(mockAppointments)
  }, [])

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const getStatusColor = (date: string) => {
    const appointmentDate = new Date(date)
    const today = new Date()
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)

    if (appointmentDate.toDateString() === today.toDateString()) {
      return "bg-green-100 text-green-800"
    } else if (appointmentDate.toDateString() === tomorrow.toDateString()) {
      return "bg-yellow-100 text-yellow-800"
    } else if (appointmentDate > today) {
      return "bg-blue-100 text-blue-800"
    } else {
      return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusText = (date: string) => {
    const appointmentDate = new Date(date)
    const today = new Date()
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)

    if (appointmentDate.toDateString() === today.toDateString()) {
      return "Today"
    } else if (appointmentDate.toDateString() === tomorrow.toDateString()) {
      return "Tomorrow"
    } else if (appointmentDate > today) {
      return "Upcoming"
    } else {
      return "Past"
    }
  }

  return (
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Appointments</h1>
          <p className="text-gray-600 mt-2">View all booked appointments and their details</p>
        </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Appointments</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{appointments.length}</p>
              </div>
              <div className="text-2xl">📅</div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Today</p>
                <p className="text-2xl font-bold text-green-600 mt-1">
                  {appointments.filter((apt) => getStatusText(apt.date) === "Today").length}
                </p>
              </div>
              <div className="text-2xl">🟢</div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Upcoming</p>
                <p className="text-2xl font-bold text-blue-600 mt-1">
                  {
                    appointments.filter(
                      (apt) => getStatusText(apt.date) === "Upcoming" || getStatusText(apt.date) === "Tomorrow",
                    ).length
                  }
                </p>
              </div>
              <div className="text-2xl">🔵</div>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-sm rounded-lg border border-gray-200">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Recent Appointments ({appointments.length})</h2>
          </div>

          {appointments.length === 0 ? (
            <div className="px-6 py-8 text-center text-gray-500">No appointments booked yet</div>
          ) : (
            <div className="divide-y divide-gray-200">
              {appointments.map((appointment) => (
                <div key={appointment.id} className="px-6 py-4">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-4">
                        <div>
                          <h3 className="text-sm font-medium text-gray-900">{appointment.userName}</h3>
                          <p className="text-sm text-gray-600">{appointment.service}</p>
                        </div>
                      </div>
                      <div className="mt-2 flex items-center space-x-4 text-sm text-gray-500">
                        <span className="flex items-center">
                          <span className="mr-1">📅</span>
                          {formatDate(appointment.date)}
                        </span>
                        <span className="flex items-center">
                          <span className="mr-1">🕐</span>
                          {appointment.time}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span
                        className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(appointment.date)}`}
                      >
                        {getStatusText(appointment.date)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Summary Cards */}
      
      </div>
  )
}
