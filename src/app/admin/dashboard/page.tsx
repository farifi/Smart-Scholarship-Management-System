"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import { Users, GraduationCap, FileText, CheckCircle } from "lucide-react";

export default function AdminDashboard() {
  const stats = [
    { label: "Total Users", value: "1,240", icon: Users, color: "text-blue-600", bg: "bg-blue-50" },
    { label: "Scholarships", value: "48", icon: GraduationCap, color: "text-purple-600", bg: "bg-purple-50" },
    { label: "Applications", value: "3,842", icon: FileText, color: "text-orange-600", bg: "bg-orange-50" },
    { label: "Approved", value: "1,120", icon: CheckCircle, color: "text-green-600", bg: "bg-green-50" },
  ];

  return (
    <DashboardLayout role="ADMIN">
      <div className="mb-10">
        <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
        <p className="text-gray-500 text-sm mt-1">Overview of the scholarship system</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
            <div className={`${stat.bg} ${stat.color} p-3 rounded-xl`}>
              <stat.icon size={24} />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">{stat.label}</p>
              <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Activity</h2>
        <div className="space-y-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center gap-4 pb-6 border-b border-gray-50 last:border-0 last:pb-0">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 font-bold">
                {String.fromCharCode(64 + i)}
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold text-gray-900">User {i} applied for HEC Scholarship</p>
                <p className="text-xs text-gray-500">2 hours ago</p>
              </div>
              <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">View</span>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
