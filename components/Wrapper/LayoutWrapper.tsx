"use client";

import { usePathname } from "next/navigation";
import AdminLayout from "./AdminLayout";
import { Navbar } from "@/components/Essentials/Navbar";
import Footer from "@/components/Essentials/Footer";
import DashboardLayout from "./UserLayout";
import type React from "react";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Admin pages
  if (pathname.startsWith("/admin")) {
    return <AdminLayout>{children}</AdminLayout>;
  }
  if (pathname.startsWith('/user')){
    return (<DashboardLayout>
      {children}
    </DashboardLayout>)

  }

  // Auth pages
  const isAuthPage = pathname === "/login" || pathname === "/signup" || pathname === "/forgot-password";

  // Normal layout
  return (
    <>
      {!isAuthPage && <Navbar />}
      <main>
      {children}
      </main>
      {!isAuthPage && <Footer />}
    </>
  );
}
