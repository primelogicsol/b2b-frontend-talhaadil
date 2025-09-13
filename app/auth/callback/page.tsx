// app/auth/callback/page.tsx
"use client";

import { useEffect } from "react";
import Cookies from "js-cookie";
import { useRouter, useSearchParams } from "next/navigation";

export default function CallbackPage() {
    const router = useRouter();
    const searchParams = useSearchParams();

    useEffect(() => {
        const rawData = searchParams.keys().next().value;
        if (!rawData) return;

        try {
            const data = JSON.parse(
                decodeURIComponent(rawData.replace(/'/g, '"'))
            );

            Cookies.set("access_token", data.access_token, { path: "/", sameSite: "Strict", secure: process.env.NODE_ENV === "production" });
            Cookies.set("refresh_token", data.refresh_token, { path: "/", sameSite: "Strict", secure: process.env.NODE_ENV === "production" });
            Cookies.set("user_role", data.user_role);
            Cookies.set("user_id", data.user_id.toString());
            Cookies.set("visibility_level", data.visibility_level.toString());
            Cookies.set("ownership", JSON.stringify(data.ownership));
            Cookies.set("is_registered", data.is_registered);
            Cookies.set("registration_step", data.registration_step.toString());
            Cookies.set("first_register", data.first_register.toString());
            console.log("Callback data processed successfully:", data);

            // router.replace("/"); // redirect after cookies are stored
        } catch (err) {
            console.error("Failed to parse callback data", err);
        }
    }, [router, searchParams]);

    // Show loader while processing
    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-white"    >
            <div className="relative">
                <div
                    className="w-32 h-32 md:w-40 md:h-40 rounded-full animate-spin"
                    style={{
                        animationDuration: "2s",
                        background: `conic-gradient(from 0deg, var(--secondary-color) 0deg, var(--secondary-color) 120deg, transparent 120deg, transparent 360deg)`,
                        mask: `radial-gradient(circle, transparent 50%, black 50%, black 55%, transparent 55%)`,
                        WebkitMask: `radial-gradient(circle, transparent 50%, black 50%, black 55%, transparent 55%)`,
                    }}
                />

                <div
                    className="absolute inset-4 md:inset-6 rounded-full animate-spin"
                    style={{
                        animationDuration: "1.5s",
                        animationDirection: "reverse",
                        background: `conic-gradient(from 90deg, var(--primary-hover-color) 0deg, var(--primary-hover-color) 90deg, transparent 90deg, transparent 360deg)`,
                        mask: `radial-gradient(circle, transparent 50%, black 50%, black 56%, transparent 56%)`,
                        WebkitMask: `radial-gradient(circle, transparent 50%, black 50%, black 56%, transparent 56%)`,
                    }}
                />

                <div
                    className="absolute inset-8 md:inset-12 rounded-full animate-spin"
                    style={{
                        animationDuration: "1s",
                        background: `conic-gradient(from 180deg, var(--primary-color) 0deg, var(--primary-color) 150deg, transparent 150deg, transparent 360deg)`,
                        mask: `radial-gradient(circle, transparent 50%, black 50%, black 57%, transparent 57%)`,
                        WebkitMask: `radial-gradient(circle, transparent 50%, black 50%, black 57%, transparent 57%)`,
                    }}
                />

                <div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[var(--primary-color)] rounded-full animate-pulse"
                    style={{ animationDuration: "2s" }}
                />

                <div
                    className="absolute -top-2 -right-2 w-2 h-2 bg-[var(--secondary-color)] rounded-full animate-ping"
                    style={{ animationDelay: "0s", animationDuration: "2s" }}
                />

                <div
                    className="absolute -bottom-1 -left-3 w-1.5 h-1.5 bg-[var(--primary-hover-color)] rounded-full animate-ping"
                    style={{ animationDelay: "0.7s", animationDuration: "2.5s" }}
                />

                <div
                    className="absolute -top-3 -left-1 w-1 h-1 bg-[var(--secondary-color)] rounded-full animate-ping"
                    style={{ animationDelay: "1.2s", animationDuration: "2.2s" }}
                />

                <div
                    className="absolute -bottom-2 -right-1 w-1.5 h-1.5 bg-[var(--primary-color)] rounded-full animate-ping"
                    style={{ animationDelay: "1.8s", animationDuration: "2.8s" }}
                />
            </div>
        </div>
    );
}

