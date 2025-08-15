

import api from "@/lib/axios";

export const postappointment = (query: {
    user_type: "buyer" | "vendor" | "guest" | "";
    appointment_type: "virtual" | "offline" | "";
    appointment_date: string; // YYYY-MM-DD
    appointment_time: string; // HH:MM
    purpose: string; // max 255 chars
    virtual_platform?: any
    office_location?: "USA Office – HQ" | "Kashmir India";
    country?: "USA" | "India";
  }, file?: File) => {
    // Build query string
    const queryParams = new URLSearchParams({
      user_type: query.user_type,
      appointment_type: query.appointment_type,
      appointment_date: query.appointment_date,
      appointment_time: query.appointment_time,
      purpose: query.purpose,
    });
  
    if (query.virtual_platform) {
      queryParams.append("virtual_platform", query.virtual_platform);
    }
    if (query.office_location) {
      queryParams.append("office_location", query.office_location);
    }
    if (query.country) {
      queryParams.append("country", query.country);
    }
  
    // Prepare multipart form data for the file
    const formData = new FormData();
    if (file) {
      formData.append("file", file);
    }
  
    // Send POST request
    return api.post(`/appointments/?${queryParams.toString()}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
  };
  
