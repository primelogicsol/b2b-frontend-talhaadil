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

export const registerSubAdmin = (data: any) =>
  api.post("/auth/register-sub-admin", data);

export const updateSubAdmin = (userId: string, data: any) =>
  api.put(`/auth/update-sub-admin/${userId}`, data);

export const verifyOtp = (data: any) => api.post("/auth/verify/otp?email=" + data.email + "&otp=" + data.otp);

export const login = (data:{
    email: string;
    password: string;
}) => api.post("/auth/login", data);

export const forgotPassword = (data: any) =>
  api.post("/auth/forgot/password?email=" + data.email);

export const resetPassword = (data: any) =>
  api.post("/auth/reset-password", data);

export const changePassword = (data: any) =>
  api.post("/auth/change-password", data);

export const logout = () => api.post("/auth/logout");
