"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "@/components/Essentials/Navbar";
import Footer from "@/components/Essentials/Footer";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAuthPage = pathname === "/login" || pathname === "/signup";

  return (
    <>
      {!isAuthPage && <Navbar />}
      {children}
      {!isAuthPage && <Footer />}
    </>
  );
}
