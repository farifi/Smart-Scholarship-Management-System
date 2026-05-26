"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  GraduationCap,
  Users,
  FileText,
  LogOut,
  ClipboardCheck,
  UserCircle,
  Percent,
  Settings,
} from "lucide-react";

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type Props = {
  role: "ADMIN" | "REVIEWER" | "APPLICANT";
};

export default function Sidebar({ role }: Props) {
  const pathname = usePathname();

  // =========================
  // ROLE-BASED MENU
  // =========================

  const applicantMenu = [
    {
      name: "Dashboard",
      icon: LayoutDashboard,
      href: "/dashboard",
    },
    {
      name: "Manage Profile",
      icon: UserCircle,
      href: "/profile",
    },
    {
      name: "View Scholarships",
      icon: GraduationCap,
      href: "/scholarships",
    }
  ];

  const reviewerMenu = [
    {
      name: "Dashboard",
      icon: LayoutDashboard,
      href: "/reviewer/dashboard",
    },
    {
      name: "Manage Profile",
      icon: UserCircle,
      href: "/reviewer/profile",
    },
    {
      name: "Review Applicants",
      icon: ClipboardCheck,
      href: "/reviewer/applicants",
    },
  ];

  const adminMenu = [
    {
      name: "Dashboard",
      icon: LayoutDashboard,
      href: "/admin/dashboard",
    },
    {
      name: "Manage Users",
      icon: Users,
      href: "/admin/users",
    },
    {
      name: "Manage Scholarships",
      icon: GraduationCap,
      href: "/admin/scholarships",
    },
    {
      name: "Settings",
      icon: Settings,
      href: "/admin/settings",
    },
  ];

  // =========================
  // SELECT MENU BY ROLE
  // =========================

  const menuItems =
    role === "ADMIN"
      ? adminMenu
      : role === "REVIEWER"
      ? reviewerMenu
      : applicantMenu;

  return (
    <aside className="w-[260px] h-screen sticky top-0 bg-[#1E1E2D] text-[#9899AC] flex flex-col">

      {/* LOGO */}
      <div className="p-6 mb-4">
        <Link
          href="/"
          className="flex flex-col items-center gap-2 group"
        >
          <div className="w-14 h-14 bg-[#FFD6B1] rounded-full flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
            <GraduationCap className="text-[#8B4513] w-8 h-8" />
          </div>

          <span className="text-xs font-bold tracking-widest text-[#FFD6B1]">
            SCHOLARSHIP SYSTEM
          </span>
        </Link>
      </div>

      {/* MENU */}
      <nav className="flex-1 px-4 space-y-1">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-4 px-4 py-3 rounded-xl transition-all group",
                isActive
                  ? "bg-[#2B2B40] text-white"
                  : "hover:bg-[#2B2B40] hover:text-white"
              )}
            >
              <item.icon
                size={20}
                className={cn(
                  isActive
                    ? "text-white"
                    : "text-[#494B74] group-hover:text-white"
                )}
              />

              <span className="text-[14px] font-medium">
                {item.name}
              </span>
            </Link>
          );
        })}
      </nav>

      {/* LOGOUT */}
      <div className="p-4 border-t border-[#2B2B40]">
        <button
          onClick={() => {
            document.cookie =
              "token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT";

            window.location.href = "/login";
          }}
          className="flex items-center gap-4 px-4 py-3 w-full rounded-xl text-[#494B74] hover:bg-red-500/10 hover:text-red-500 transition-all"
        >
          <LogOut size={20} />

          <span className="text-[14px] font-medium">
            Logout
          </span>
        </button>
      </div>
    </aside>
  );
}