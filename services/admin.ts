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