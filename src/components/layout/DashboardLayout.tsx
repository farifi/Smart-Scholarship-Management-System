"use client";

import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

type Role = "ADMIN" | "REVIEWER" | "APPLICANT";

type Props = {
  children: React.ReactNode;
  role: Role;
};

export default function DashboardLayout({
  children,
  role,
}: Props) {
  return (
    <div className="flex min-h-screen bg-[#F8FAFC]">
      <Sidebar role={role} />

      <div className="flex-1 flex flex-col">
        <Navbar />

        <main className="p-10 flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}