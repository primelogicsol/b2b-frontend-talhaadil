import api from "@/lib/axios";

export const signup = (data: {
  username: string;
  email: string;
  password: string;
}) => api.post("/auth/signup", data);

export const registerSupplier = (data: {
  username: string;
  email: string;
  password: string;
}) => api.post("/auth/register-supplier", data);

export const registerSuperAdmin = (data: any) =>
  api.post("/auth/register-super-admin", data);
export const registerSubAdmin = (data:any) =>
  api.post("/auth/register-sub-admin", data, {
    headers: {
      requiresAuth: true,
    },
  });
export const updateSubAdmin = (userId: string, data: any) =>
  api.put(`/auth/update-sub-admin?user_id=${userId}`, data, {
    headers: {
      requiresAuth: true,
    },
  });


export const verifyOtp = (data: any) => api.post("/auth/verify/otp?email=" + data.email + "&otp=" + data.otp);

export const login = (data:{
    email: string;
    password: string;
}) => api.post("/auth/login", data);

export const forgotPassword = (data: {
  email: string;
}) => {
  console.log("Forgot password request:", data);
  return api.post("/auth/forgot/password?email=" + data.email);
}

export const resetPassword = (data:{
  email: string;
  otp: string;
  newPassword: string;
}) =>
  api.post("/auth/reset-password?email=" + data.email + "&otp=" + data.otp + "&new_password=" + data.newPassword);

export const changePassword = (data: any) =>
  api.post("/auth/change-password", data);

export const logout = () => api.post("/auth/logout");
