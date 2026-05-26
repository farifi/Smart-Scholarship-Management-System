"use client";
import { usePathname } from "next/navigation";
import DashboardLayout from "@/components/layout/DashboardLayout";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  if (pathname === "/reviewer/login" || pathname === "/reviewer/signup") {
    return <>{children}</>;
  }

  return <DashboardLayout role="REVIEWER">{children}</DashboardLayout>;
}