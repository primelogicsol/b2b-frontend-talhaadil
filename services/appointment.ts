import api from "@/lib/axios";

import Cookies from "js-cookie";

export const postAppointment = (
  body: {
    user_type: "buyer" | "vendor" | "guest";
    appointment_type: "virtual" | "offline";
    appointment_date: string;
    appointment_time: string;
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

  const userId = Cookies.get("user_id");
  const requiresAuth = !!userId;

  return api.post(`/appointments/`, formData, {
    headers: {
      requiresAuth: requiresAuth,
      "Content-Type": "multipart/form-data",
    },
  });
};

export const getAllAppointments = () => {
  return api.get(`/appointments/`, {
    headers: {
      requiresAuth: true,
    },
  });
};

export const getAllAppointmentByDate = (date: string) => {
  return api.get(`/appointments?date=${date}`, {
    headers: {
      requiresAuth: true,
    },
  });
};
