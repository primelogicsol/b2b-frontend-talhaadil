"use client";

import Link from "next/link";
import type React from "react";
import { useState, useEffect, useRef } from "react"; // Import useEffect and useRef
import { ArrowLeft, Eye, EyeOff } from 'lucide-react';
import { FcGoogle } from "react-icons/fc";
import { useToast } from "@/context/ToastProvider";
import { registerSupplier, signup, verifyOtp, resendOTP, googleRegister } from "@/services/auth";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOtpVerification, setShowOtpVerification] = useState(false);
  const [userType, setUserType] = useState("Buyer");
  const [passwordErrors, setPasswordErrors] = useState<string[]>([]);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [resendTimer, setResendTimer] = useState(showOtpVerification ? 30 : 0); // Initialize timer based on initial showOtpVerification state
  const timerRef = useRef<NodeJS.Timeout | null>(null); // Ref to store timer ID

  const router = useRouter();
  const { showToast } = useToast();

  // Effect to manage the resend OTP timer
  useEffect(() => {
    if (resendTimer > 0) {
      timerRef.current = setInterval(() => {
        setResendTimer((prev) => prev - 1);
      }, 1000);
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    }

    // Cleanup function to clear the interval when the component unmounts or timer stops
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [resendTimer]); // Re-run effect when resendTimer changes

  const validatePassword = (pwd: string): string[] => {
    const errors: string[] = [];
    // if (pwd.length < 8) errors.push("Password must be at least 8 characters long.");
    // if (!/[A-Z]/.test(pwd)) errors.push("Password must contain at least one uppercase letter.");
    // if (!/[a-z]/.test(pwd)) errors.push("Password must contain at least one lowercase letter.");
    // if (!/[0-9]/.test(pwd)) errors.push("Password must contain at least one number.");
    // if (!/[!@#$%^&*(),.?\":{}|<>]/.test(pwd))
    // errors.push("Password must contain at least one special character.");
    return errors;
  };

  const handleGoogleRegister = async () => {
    try {

      googleRegister();
    } catch (err: any) {
      console.log(err);
    } finally {
    }

  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setPasswordErrors(newPassword ? validatePassword(newPassword) : []);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    if (loading) return;
    e.preventDefault();
    const errors = validatePassword(password);
    if (errors.length > 0) {
      setPasswordErrors(errors);
      showToast("Please fix password errors.");
      return;
    }
    if (password !== confirmPassword) {
      showToast("Passwords do not match");
      return;
    }
    try {
      setLoading(true);
      if (userType === "Vendor") {
        await registerSupplier({ username, email, password });
      } else {
        await signup({ username, email, password });
      }
      showToast("Registration successful! Please verify your OTP.");
      setShowOtpVerification(true);
      setResendTimer(30); // Start the timer for 30 seconds after successful registration
    } catch (err: any) {
      console.log(err);
      showToast(err.response?.data?.detail || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  const handleOtpVerification = async (e: React.FormEvent) => {
    if (loading) return;
    e.preventDefault();
    if (!otp || otp.length !== 6) {
      showToast("Please enter a valid 6-digit OTP");
      return;
    }
    try {
      setLoading(true);
      const response = await verifyOtp({ email, otp });
      const data = response.data;
      showToast("OTP verified successfully! Redirecting to home page...");
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
      showToast(err.response?.data?.detail || "OTP verification failed");
    } finally {
      setLoading(false);
    }
  };

  const handleResendOtp = async () => {
    if (resendTimer > 0 || loading) return; // Prevent resending if timer is active or loading
    // Reset and start the timer for 30 second


    try {
      const response = await resendOTP({ email });
      const data = response.data;
      console.log("Resend OTP response:", data);
      showToast("OTP resent successfully!");
      setResendTimer(30);
    } catch (err: any) {
      console.log(err);
      showToast(err.response?.data?.detail || "Resend otp failed failed");
    }

  };

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a192f] via-[#1b4f68] to-[#0a192f] p-4 text-white sm:p-6 md:p-8 lg:p-10 xl:p-12">
      {/* Background Decorations */}
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
      <div className="frosted-glass relative z-10 w-full max-w-sm rounded-3xl p-6 shadow-2xl backdrop-blur-lg sm:max-w-md sm:p-8 md:p-10 lg:max-w-lg lg:p-12 xl:max-w-xl xl:p-14 2xl:max-w-2xl 2xl:p-16">
        {!showOtpVerification ? (
          <>
            <div className="text-center">
              <h1 className="mb-2 font-extrabold tracking-tight text-white text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl">
                Join Us
              </h1>
              <p className="mb-6 text-base text-gray-300 sm:mb-8 sm:text-lg lg:text-xl 2xl:text-2xl">
                Create your new account and unlock amazing features.
              </p>
            </div>
            <form className="space-y-5 sm:space-y-6 lg:space-y-7" onSubmit={handleSubmit}>
              {/* User Type */}
              <div className="relative">
                <label
                  htmlFor="user-type"
                  className="mb-2 block text-sm font-medium text-gray-300 sm:text-base"
                >
                  Account Type
                </label>
                <select
                  id="user-type"
                  className="w-full appearance-none rounded-xl border border-gray-600 bg-gray-800/50 p-3 pr-10 text-white focus:border-[var(--primary-color)] focus:ring-2 focus:ring-[var(--primary-color)]"
                  required
                  value={userType}
                  onChange={(e) => setUserType(e.target.value)}
                >
                  <option value="Buyer">Buyer</option>
                  <option value="Vendor">Vendor</option>
                </select>

                {/* custom dropdown arrow */}
                <svg
                  className="pointer-events-none absolute right-3 bottom-3.5 h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              {/* Username */}
              <div>
                <label htmlFor="username" className="mb-2 block text-sm font-medium text-gray-300 sm:text-base">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  placeholder="yourname"
                  className="w-full rounded-xl border border-gray-600 bg-gray-800/50 p-3 text-white placeholder-gray-400 focus:border-[var(--primary-color)] focus:ring-2 focus:ring-[var(--primary-color)]"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              {/* Email */}
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-300 sm:text-base">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-gray-600 bg-gray-800/50 p-3 text-white placeholder-gray-400 focus:border-[var(--primary-color)] focus:ring-2 focus:ring-[var(--primary-color)]"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              {/* Password with Eye Toggle */}
              <div>
                <label htmlFor="password" className="mb-2 block text-sm font-medium text-gray-300 sm:text-base">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    placeholder="••••••••"
                    className="w-full rounded-xl border border-gray-600 bg-gray-800/50 p-3 pr-12 text-white placeholder-gray-400 focus:border-[var(--primary-color)] focus:ring-2 focus:ring-[var(--primary-color)]"
                    required
                    onChange={handlePasswordChange}
                    value={password}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-white"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
                {passwordErrors.length > 0 && (
                  <ul className="mt-2 space-y-1 text-sm text-red-400">
                    {passwordErrors.map((error, index) => (
                      <li key={index}>{error}</li>
                    ))}
                  </ul>
                )}
              </div>
              {/* Confirm Password with Eye Toggle */}
              <div>
                <label htmlFor="confirm-password" className="mb-2 block text-sm font-medium text-gray-300 sm:text-base">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirm-password"
                    placeholder="••••••••"
                    className="w-full rounded-xl border border-gray-600 bg-gray-800/50 p-3 pr-12 text-white placeholder-gray-400 focus:border-[var(--primary-color)] focus:ring-2 focus:ring-[var(--primary-color)]"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                    className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-white"
                  >
                    {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>
              {/* Submit and Google Button */}
              <button
                disabled={loading || passwordErrors.length > 0}
                type="submit"
                className="w-full rounded-xl bg-[var(--primary-color)] p-3 text-base font-semibold text-white shadow-lg hover:bg-[var(--primary-hover-color)] focus:ring-2 focus:ring-[var(--primary-color)] focus:ring-offset-2 focus:ring-offset-[#0a192f]"
              >
                {loading ? "Registering..." : "Register"}
              </button>
              <div className="relative flex items-center justify-center py-3 sm:py-4">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-gray-700" />
                </div>
                <div className="relative bg-transparent px-4 text-sm text-gray-400">Or</div>
              </div>
              <button
                onClick={handleGoogleRegister}
                disabled={loading}
                type="button"
                className="flex w-full items-center justify-center space-x-2 rounded-xl border border-gray-600 bg-gray-800/50 p-3 text-base font-semibold text-white hover:bg-gray-700/50 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-[#0a192f]"
              >
                <FcGoogle className="h-5 w-5 sm:h-6 sm:w-6" />
                <span>Register with Google</span>
              </button>
            </form>
            <div className="mt-6 text-center text-xs text-gray-300 sm:mt-8 sm:text-sm lg:text-base">
              Already have an account?{" "}
              <Link href="/login" className="font-medium text-white hover:underline">
                Login
              </Link>
            </div>
          </>
        ) : (
          // OTP Verification Section
          <>
            <div className="text-center">
              <h1 className="mb-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl">
                Verify OTP
              </h1>
              <p className="mb-6 text-base text-gray-300 sm:mb-8 sm:text-lg lg:text-xl 2xl:text-2xl">
                We've sent a 6-digit code to {email}. Please enter it below.
              </p>
            </div>
            <form className="space-y-5 sm:space-y-6 lg:space-y-7" onSubmit={handleOtpVerification}>
              <div>
                <label htmlFor="otp" className="mb-2 block text-sm font-medium text-gray-300 sm:text-base">
                  Enter OTP
                </label>
                <input
                  type="text"
                  id="otp"
                  placeholder="123456"
                  maxLength={6}
                  className="w-full rounded-xl border border-gray-600 bg-gray-800/50 p-3 text-center font-mono text-white placeholder-gray-400 tracking-widest focus:border-[var(--primary-color)] focus:ring-2 focus:ring-[var(--primary-color)] sm:text-3xl lg:text-4xl"
                  required
                  value={otp}
                  onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
                />
              </div>
              <button
                disabled={loading}
                type="submit"
                className="w-full rounded-xl bg-[var(--primary-color)] p-3 text-base font-semibold text-white hover:bg-[var(--primary-hover-color)] focus:ring-2 focus:ring-[var(--primary-color)] focus:ring-offset-2 focus:ring-offset-[#0a192f]"
              >
                {loading ? "Verifying..." : "Verify OTP"}
              </button>
              <div className="text-center">
                <button
                  type="button"
                  className="disabled:cursor-default disabled:hover:text-gray-400 cursor-pointer text-sm text-gray-400 hover:text-white"
                  onClick={handleResendOtp}
                  disabled={resendTimer > 0 || loading} // Disable button if timer is active or loading
                >
                  {resendTimer > 0 ? `Resend OTP in ${resendTimer}s` : "Didn't receive the code? Resend OTP"}
                </button>
              </div>
            </form>
            <div className="mt-6 text-center text-xs text-gray-300 sm:mt-8 sm:text-sm lg:text-base">
              Want to use a different email?{" "}
              <button
                onClick={() => {
                  setShowOtpVerification(false);
                  setOtp("");
                  setResendTimer(0); // Reset timer when going back to registration form
                  if (timerRef.current) {
                    clearInterval(timerRef.current);
                    timerRef.current = null;
                  }
                }}
                className="cursor-pointer font-medium text-white hover:underline"
              >
                Go Back
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
