"use client";
import { usePathname } from "next/navigation";
import DashboardLayout from "@/components/layout/DashboardLayout";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  if (pathname === "/admin/login" || pathname === "/admin/signup") {
    return <>{children}</>;
  }

  return <DashboardLayout role="ADMIN">{children}</DashboardLayout>;
}