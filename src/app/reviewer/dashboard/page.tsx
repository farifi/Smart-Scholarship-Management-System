"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import { FileSearch, Clock, CheckSquare, AlertCircle } from "lucide-react";

export default function ReviewerDashboard() {
  const stats = [
    { label: "Pending Reviews", value: "12", icon: Clock, color: "text-yellow-600", bg: "bg-yellow-50" },
    { label: "Reviewed Today", value: "8", icon: CheckSquare, color: "text-green-600", bg: "bg-green-50" },
    { label: "Total Assigned", value: "156", icon: FileSearch, color: "text-blue-600", bg: "bg-blue-50" },
    { label: "Urgent", value: "3", icon: AlertCircle, color: "text-red-600", bg: "bg-red-50" },
  ];

  return (
    <DashboardLayout role="REVIEWER">
      <div className="mb-10">
        <h1 className="text-2xl font-bold text-gray-900">Reviewer Dashboard</h1>
        <p className="text-gray-500 text-sm mt-1">Manage and review scholarship applications</p>
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
        <h2 className="text-xl font-bold text-gray-900 mb-6">Applications to Review</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-gray-400 text-sm uppercase tracking-wider border-b border-gray-50">
                <th className="pb-4 font-medium">Applicant</th>
                <th className="pb-4 font-medium">Scholarship</th>
                <th className="pb-4 font-medium">Date</th>
                <th className="pb-4 font-medium">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {[1, 2, 3, 4, 5].map((i) => (
                <tr key={i} className="group hover:bg-gray-50/50 transition-colors">
                  <td className="py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold">
                        JD
                      </div>
                      <span className="text-sm font-bold text-gray-900">John Doe {i}</span>
                    </div>
                  </td>
                  <td className="py-4 text-sm text-gray-600">HEC Need Based 2024</td>
                  <td className="py-4 text-sm text-gray-500">Oct 12, 2023</td>
                  <td className="py-4">
                    <button className="text-sm font-bold text-blue-600 hover:text-blue-700">Review Now</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
}
