import api from "@/lib/axios";
export const getAllUsers = () => {
  return api.get(`/admin/users`, {
    headers: {
      requiresAuth: true,
    },
  });
}
export const getUserInfo = (id:string) => {
  return api.get(`/admin/registrationinfo/${id}`, {
    headers: {
      requiresAuth: true,
    },
  });
}