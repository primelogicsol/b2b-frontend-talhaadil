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
export const registerSubAdmin = (data: any) => {
  return api.post("/auth/register-sub-admin", data, {
    headers: {
      requiresAuth: true,
    },
  });
};
export const updateSubAdmin = (userId: string, data: any) =>
  api.put(`/auth/update-sub-admin/${userId}`, data, {
    headers: {
      requiresAuth: true,
    },
  });

export const deleteSubAdmin = (userId: string) =>
  api.delete(`/admin/sub-admin/${userId}`, {
    headers: {
      requiresAuth: true,
    },
  });

export const verifyOtp = (data: any) =>
  api.post("/auth/verify/otp?email=" + data.email + "&otp=" + data.otp);

export const login = (data: { email: string; password: string }) =>
  api.post("/auth/login", data);

export const forgotPassword = (data: { email: string }) => {
  return api.post("/auth/forgot/password?email=" + data.email);
};

export const resendOTP = (data: { email: string }) => {
  return api.post("/auth/resend-otp", data);
};

export const googleRegister = (user_role: string) => {
  console.log(user_role);
    window.location.href = `${process.env.NEXT_PUBLIC_BASE_URL}/auth/google-auth?role=${user_role}`;
};

export const googleCallback = (code: string) => {
  return api.get(`/auth/google-callback`);
};

export const resetPassword = (data: {
  email: string;
  otp: string;
  newPassword: string;
}) =>
  api.post(
    "/auth/reset-password?email=" +
      data.email +
      "&otp=" +
      data.otp +
      "&new_password=" +
      data.newPassword
  );

export const changePassword = (data: any) =>
  api.post("/auth/change-password", data);

export const logout = () => api.post("/auth/logout");

export const refreshToken = (refreshToken: string) => {
  return api.post(
    "/auth/refresh-token",
    {
      refresh_token: refreshToken,
    },
    {}
  );
};
