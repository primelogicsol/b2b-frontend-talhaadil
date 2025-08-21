"use client"

import { useState, useEffect, useMemo } from "react"
import { getAllAppointments } from "@/services/appointment";

// Define the API appointment type based on the provided data
interface ApiAppointment {
  id: number;
  user_type: string;
  first_name: string;
  last_name: string;
  business_name: string;
  email: string;
  appointment_type: string;
  virtual_platform: string;
  office_location: string;
  appointment_date: string;
  appointment_time: string;
  time_zone: string;
  purpose: string;
  file_path: string;
  file_name: string;
  verification_status: string;
  created_at: string;
}

// Define the Appointment type used by the UI
interface Appointment {
  id: number;
  userName: string;
  service: string;
  date: string;
  time: string;
  time_zone: string;
  purpose: string;
  email: string;
}

export default function AppointmentsPage() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [statusFilter, setStatusFilter] = useState<string>("All");

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        setLoading(true);
        const response = await getAllAppointments();

        if (response.status !== 200) {
          throw new Error("Failed to fetch appointments");
        }

        const data: ApiAppointment[] = response.data;
        
        // Map API data to UI-compatible Appointment type
        const mappedAppointments: Appointment[] = data.map((apt) => ({
          id: apt.id,
          userName: `${apt.first_name} ${apt.last_name}`,
          service: apt.appointment_type || apt.purpose || "Unknown Service",
          date: apt.appointment_date,
          time: new Date(`1970-01-01T${apt.appointment_time}`).toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
          }),
          time_zone: apt.time_zone || "N/A",
          purpose: apt.purpose || "Not specified",
          email: apt.email || "N/A",
        }));

        setAppointments(mappedAppointments);
      } catch (err) {
        setError("Failed to load appointments. Please try again later.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getStatusColor = (date: string) => {
    const appointmentDate = new Date(date);
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    if (appointmentDate.toDateString() === today.toDateString()) {
      return "bg-green-100 text-green-800";
    } else if (appointmentDate.toDateString() === tomorrow.toDateString()) {
      return "bg-yellow-100 text-yellow-800";
    } else if (appointmentDate > today) {
      return "bg-blue-100 text-blue-800";
    } else {
      return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusText = (date: string) => {
    const appointmentDate = new Date(date);
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    if (appointmentDate.toDateString() === today.toDateString()) {
      return "Today";
    } else if (appointmentDate.toDateString() === tomorrow.toDateString()) {
      return "Tomorrow";
    } else if (appointmentDate > today) {
      return "Upcoming";
    } else {
      return "Past";
    }
  };

  // Filter and sort appointments
  const filteredAndSortedAppointments = useMemo(() => {
    let filtered = appointments;

    // Apply search filter
    if (searchTerm) {
      filtered = appointments.filter(
        (apt) =>
          apt.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          apt.email.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply status filter
    if (statusFilter !== "All") {
      filtered = filtered.filter((apt) => getStatusText(apt.date) === statusFilter);
    }

    // Sort appointments: upcoming first, then today, tomorrow, and past last
    return filtered.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateB.getTime() - dateA.getTime(); // Sort in descending order (newer first)
    });
  }, [appointments, searchTerm, statusFilter]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Appointments</h1>
        <p className="text-gray-600 mt-2">View all booked appointments and their details</p>
      </div>

      {/* Search and Filter Controls */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Search by name or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="All">All Status</option>
            <option value="Today">Today</option>
            <option value="Tomorrow">Tomorrow</option>
            <option value="Upcoming">Upcoming</option>
            <option value="Past">Past</option>
          </select>
        </div>
      </div>

      {error && (
        <div className="bg-red-100 text-red-800 p-4 rounded-lg">
          {error}
        </div>
      )}

      {loading ? (
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
        </div>
      ) : (
        <>
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

            <div className="bg-white rounded-lg shadow-pe-sm border border-gray-200 p-6">
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
                        (apt) => getStatusText(apt.date) === "Upcoming" || getStatusText(apt.date) === "Tomorrow"
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
              <h2 className="text-lg font-semibold text-gray-900">Recent Appointments ({filteredAndSortedAppointments.length})</h2>
            </div>

            {filteredAndSortedAppointments.length === 0 ? (
              <div className="px-6 py-8 text-center text-gray-500">No appointments found</div>
            ) : (
              <div className="divide-y divide-gray-200">
                {filteredAndSortedAppointments.map((appointment) => (
                  <div key={appointment.id} className="px-6 py-4">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-4">
                          <div>
                            <h3 className="text-sm font-medium text-gray-900">{appointment.userName}</h3>
                            <p className="text-sm text-gray-600">{appointment.service}</p>
                            <p className="text-sm text-gray-600">Email: {appointment.email}</p>
                            <p className="text-sm text-gray-600">Purpose: {appointment.purpose}</p>
                          </div>
                        </div>
                        <div className="mt-2 flex items-center space-x-4 text-sm text-gray-500">
                          <span className="flex items-center">
                            <span className="mr-1">📅</span>
                            {formatDate(appointment.date)}
                          </span>
                          <span className="flex items-center">
                            <span className="mr-1">🕐</span>
                            {appointment.time} ({appointment.time_zone})
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span
                          className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(
                            appointment.date
                          )}`}
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
        </>
      )}
    </div>
  );
}