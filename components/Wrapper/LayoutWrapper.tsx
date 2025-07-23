"use client";

import { usePathname } from "next/navigation";
import AdminLayout from "./AdminLayout";
import { Navbar } from "@/components/Essentials/Navbar";
import Footer from "@/components/Essentials/Footer";
import type React from "react";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Admin pages
  if (pathname.startsWith("/admin")) {
    return <AdminLayout>{children}</AdminLayout>;
  }

  // Auth pages
  const isAuthPage = pathname === "/login" || pathname === "/signup";

  // Normal layout
  return (
    <>
      {!isAuthPage && <Navbar />}
      {children}
      {!isAuthPage && <Footer />}
    </>
  );
}
