import api from "@/lib/axios";
export const getAllUsers = () => {
  return api.get(`/admin/users`, {
    headers: {
      requiresAuth: true,
    },
  });
}
// GET /admin/registrationinfo/{user_id}
export const getUserInfo = (id: string) => {
  return api.get(`/admin/registrationinfo/${id}`, {
    headers: {
      requiresAuth: true,
    },
  });
};

// POST /admin/approve-registration/{user_id}
export const approveRegistration = (id: string, data: { status: string; remarks: string }) => {
  return api.post(`/admin/approve-registration/${id}`, data, {
    headers: {
      requiresAuth: true,
    },
  });
};

export const getUserProfile = () =>{
    return api.get(`/user/profile`, {
    headers: {
      requiresAuth: true,
    },
  });

}


export const updateProfile = (profileData: any) => {
  return api.put("/user/profile", {
    user_update: {
      email: profileData.contact_email,
    },
    registration_info_update: {
      business_name: profileData.business_name,
      business_legal_structure: profileData.business_legal_structure,
      business_type: profileData.business_type,
      year_established: profileData.year_established,
      business_registration_number: profileData.business_registration_number,
      brand_affiliations: profileData.brand_affiliations,
      website: profileData.website,
      annual_turnover: profileData.annual_turnover,
      gst_number: profileData.gst_number,
      tax_identification_number: profileData.tax_identification_number,
      import_export_code: profileData.import_export_code,
      street_address_1: profileData.street_address_1,
      street_address_2: profileData.street_address_2,
      city: profileData.city,
      state_region: profileData.state_region,
      postal_code: profileData.postal_code,
      country: profileData.country,
      contact_person_name: profileData.contact_person_name,
      contact_email: profileData.contact_email,
      contact_phone: profileData.contact_phone,
      contact_whatsapp: profileData.contact_whatsapp,
      contact_district: profileData.contact_district,
      contact_pin_code: profileData.contact_pin_code,
      contact_state: profileData.contact_state,
      contact_country: profileData.contact_country,
      material_standard: profileData.material_standard,
      quality_level: profileData.quality_level,
      sustainability_level: profileData.sustainability_level,
      service_level: profileData.service_level,
      standards_level: profileData.standards_level,
      ethics_level: profileData.ethics_level,
      certifications: profileData.certifications,
      bank_name: profileData.bank_name,
      account_name: profileData.account_name,
      account_type: profileData.account_type,
      account_number: profileData.account_number,
      ifsc_code: profileData.ifsc_code,
      swift_bis_code: profileData.swift_bis_code,
      iban_code: profileData.iban_code,
    },
  }, {
    headers: {
      requiresAuth: true,
    },
  });
};
