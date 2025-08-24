"use client";

import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";
import { login } from "@/services/auth";
import { useToast } from "@/context/ToastProvider";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

interface LoginData {
  email: string;
  password: string;
}

export default function LoginPage() {
  const [formData, setFormData] = useState<LoginData>({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { showToast } = useToast();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const user = await login(formData);
      const data = user.data;

      showToast("Login successful!");

      Cookies.set("access_token", data.access_token, {
        path: "/",
        sameSite: "Strict",
        secure: process.env.NODE_ENV === "production",
      });
      Cookies.set("refresh_token", data.refresh_token, {
        path: "/",
        sameSite: "Strict",
        secure: process.env.NODE_ENV === "production",
      });
      Cookies.set("user_role", data.user_role);
      Cookies.set("user_id", data.user_id.toString());
      Cookies.set("visibility_level", data.visibility_level.toString());
      Cookies.set("ownership", JSON.stringify(data.ownership));
      Cookies.set("is_registered", data.is_registered);
      Cookies.set("registration_step", data.registration_step.toString());

      router.push("/");
    } catch (err: any) {
      setError(err.message);
      showToast(err.response?.data?.detail || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a192f] via-[#1b4f68] to-[#0a192f] p-4 text-white sm:p-6 md:p-8">
      {/* Background Effects */}
      <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-[var(--secondary-light-color)] opacity-10 blur-3xl animate-pulse-fade animation-delay-1000" />
      <div className="absolute -right-40 -bottom-40 h-96 w-96 rounded-full bg-[var(--primary-hover-color)] opacity-10 blur-3xl animate-pulse-fade animation-delay-3000" />
      <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-[var(--secondary-color)] opacity-5 blur-3xl animate-float animation-delay-2000" />
      <div className="absolute right-1/4 bottom-1/4 h-64 w-64 rounded-full bg-[var(--primary-color)] opacity-5 blur-3xl animate-float animation-delay-4000" />

      {/* Back Button */}
      <div className="absolute top-8 left-6 z-20">
        <Link href="/" className="flex items-center">
          <ArrowLeft className="h-5 w-5 md:h-10 md:w-10" />
        </Link>
      </div>

      {/* Login Card */}
      <div className="frosted-glass relative z-10 w-full max-w-sm rounded-3xl p-6 shadow-2xl backdrop-blur-lg sm:max-w-md sm:p-8 md:p-10">
        <div className="text-center">
          <h1 className="mb-2 text-3xl font-extrabold tracking-tight text-white sm:text-3xl md:text-4xl lg:text-6xl 2xl:text-7xl">
            Welcome Back
          </h1>
          <p className="mb-6 text-base text-gray-300 sm:mb-8 sm:text-lg">
            Sign in to your account and continue your journey.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
          {/* Email */}
          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-300">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full rounded-xl border border-gray-600 bg-gray-800/50 p-3 text-white placeholder-gray-400 transition-all duration-300 focus:border-[var(--primary-color)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
              required
            />
          </div>

          {/* Password with Eye Icon */}
          <div>
            <label htmlFor="password" className="mb-2 block text-sm font-medium text-gray-300">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full rounded-xl border border-gray-600 bg-gray-800/50 p-3 pr-12 text-white placeholder-gray-400 transition-all duration-300 focus:border-[var(--primary-color)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-white focus:outline-none"
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {/* Forgot Password */}
          <div className="flex items-center justify-between">
            <Link href="/forgot-password" className="text-sm font-medium text-white hover:underline">
              Forgot password?
            </Link>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-[var(--primary-color)] p-3 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[var(--primary-hover-color)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:ring-offset-2 focus:ring-offset-[#0a192f] sm:text-lg"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          {/* Divider */}
          <div className="relative flex items-center justify-center py-3 sm:py-4">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-gray-700" />
            </div>
            <div className="relative bg-transparent px-4 text-sm text-gray-400">Or</div>
          </div>

          {/* Google Login */}
          <button
            type="button"
            className="flex w-full items-center justify-center space-x-2 rounded-xl border border-gray-600 bg-gray-800/50 p-3 text-base font-semibold text-white shadow-md transition-all duration-300 hover:bg-gray-700/50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-[#0a192f]"
          >
            <FcGoogle className="h-5 w-5 sm:h-6 sm:w-6" />
            <span>Login with Google</span>
          </button>
        </form>

        {/* Register Link */}
        <div className="mt-6 text-center text-xs text-gray-300 sm:mt-8 sm:text-sm">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="font-medium text-white hover:underline">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}
