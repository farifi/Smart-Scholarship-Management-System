"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  GraduationCap,
  Users,
  FileText,
  LogOut,
  Calendar,
  Newspaper,
  CreditCard,
  ChevronDown,
  Settings,
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type Props = {
  role: string;
};

export default function Sidebar({ role }: Props) {
  const pathname = usePathname();

  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard, href: role === "ADMIN" ? "/admin/dashboard" : role === "REVIEWER" ? "/reviewer/dashboard" : "/dashboard" },
    { name: "Scholarships", icon: GraduationCap, href: "#", hasSubmenu: true },
    { name: "Events", icon: Calendar, href: "#", hasSubmenu: true },
    { name: "News", icon: Newspaper, href: "#", hasSubmenu: true },
    { name: "Applications", icon: FileText, href: "#" },
    { name: "Subscriptions", icon: CreditCard, href: "#" },
    { name: "Users", icon: Users, href: "#", hasSubmenu: true },
  ];

  return (
    <aside className="w-[260px] min-h-screen bg-[#1E1E2D] text-[#9899AC] flex flex-col">
      <div className="p-6 mb-4">
        <Link href="/" className="flex flex-col items-center gap-2 group">
          <div className="w-14 h-14 bg-[#FFD6B1] rounded-full flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
             <GraduationCap className="text-[#8B4513] w-8 h-8" />
          </div>
          <span className="text-xs font-bold tracking-widest text-[#FFD6B1]">LOREM IPSUM</span>
        </Link>
      </div>

      <nav className="flex-1 px-4 space-y-1">
        {menuItems.map((item) => (
          <div key={item.name}>
            <Link
              href={item.href}
              className={cn(
                "flex items-center justify-between px-4 py-3 rounded-xl transition-all group",
                pathname === item.href ? "bg-[#2B2B40] text-white" : "hover:bg-[#2B2B40] hover:text-white"
              )}
            >
              <div className="flex items-center gap-4">
                <item.icon size={20} className={cn(pathname === item.href ? "text-white" : "text-[#494B74] group-hover:text-white")} />
                <span className="text-[14px] font-medium">{item.name}</span>
              </div>
              {item.hasSubmenu && <ChevronDown size={14} className="text-[#494B74]" />}
            </Link>
          </div>
        ))}
      </nav>

      <div className="p-4 border-t border-[#2B2B40]">
        <button
          onClick={() => {
            // Add actual logout logic here
            document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT";
            window.location.href = "/login";
          }}
          className="flex items-center gap-4 px-4 py-3 w-full rounded-xl text-[#494B74] hover:bg-red-500/10 hover:text-red-500 transition-all"
        >
          <LogOut size={20} />
          <span className="text-[14px] font-medium">Logout</span>
        </button>
      </div>
    </aside>
  );
}
