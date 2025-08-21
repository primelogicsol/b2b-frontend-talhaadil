

import api from "@/lib/axios";

export const postAppointment = (
  body: {
    user_type: "buyer" | "vendor" | "guest";
    appointment_type: "virtual" | "offline";
    appointment_date: string; // YYYY-MM-DD
    appointment_time: string; // HH:MM
    time_zone: string;
    purpose: string;
    first_name: string;
    last_name: string;
    business_name: string;
    email: string;
    phone_number: string;
    virtual_platform?: string | null;
    office_location?: "USA Office – HQ" | "Kashmir India" | null;
    website?: string | null;
  },
  file?: File
) => {
  const formData = new FormData();

  Object.entries(body).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      formData.append(key, String(value));
    }
  });

  if (file) {
    formData.append("file", file);
  }

  return api.post(`/appointments/`, formData, {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  });
};



export const getAllAppointments = () => {
  return api.get(`/appointments/`, {
    headers: {
      requiresAuth: true,
    },
  });
};