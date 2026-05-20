"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import { BarChart3, Users, Briefcase, PieChart, CreditCard, ExternalLink } from "lucide-react";

export default function DashboardPage() {
  return (
    <DashboardLayout role="USER">
      <div className="mb-10">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-500 text-sm mt-1">Home</p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Active Applications Card */}
        <div className="bg-[#F23D6D] rounded-[24px] p-8 text-white relative overflow-hidden shadow-xl shadow-red-100">
          <div className="relative z-10">
            <h2 className="text-6xl font-bold mb-4">3</h2>
            <p className="text-white/80 font-medium text-lg mb-12">Active Applications</p>
            
            <div className="space-y-3 mt-auto">
              <div className="flex justify-between text-sm font-medium">
                <span>2 Completed</span>
                <span>40%</span>
              </div>
              <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden">
                <div className="bg-white h-full rounded-full" style={{ width: "40%" }}></div>
              </div>
            </div>
          </div>
          {/* Abstract background shape */}
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
        </div>

        {/* Subscriptions Earnings Card */}
        <div className="bg-white rounded-[24px] p-8 border border-gray-100 shadow-sm flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-3xl font-bold text-gray-900">$ 3.99</span>
              <span className="text-green-500 bg-green-50 px-2 py-0.5 rounded text-xs font-bold flex items-center gap-1">
                ↑ 2.2%
              </span>
            </div>
            <p className="text-gray-400 text-sm mb-8">Subscriptions Earnings in July</p>
            
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center justify-between group cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className={i === 1 ? "w-2 h-2 rounded-full bg-blue-400" : i === 2 ? "w-2 h-2 rounded-full bg-blue-300" : "w-2 h-2 rounded-full bg-blue-200"}></div>
                    <span className="text-sm font-medium text-gray-600 group-hover:text-blue-600 transition-colors">Stripe</span>
                  </div>
                  <span className="text-sm font-bold text-gray-900">$3.99</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex items-center justify-center p-4">
            {/* Simple Donut Chart Placeholder */}
            <div className="relative w-32 h-32">
              <svg className="w-full h-full" viewBox="0 0 36 36">
                <path className="text-gray-100" strokeDasharray="100, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" />
                <path className="text-blue-500" strokeDasharray="40, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" />
                <path className="text-green-400" strokeDasharray="20, 100" strokeDashoffset="-40" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <PieChart className="text-gray-300" size={24} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { label: "Subscriptions Progress", value: "15.96$", icon: BarChart3, color: "text-blue-500", bg: "bg-white" },
          { label: "Total Users", value: "10", icon: Users, color: "text-white", bg: "bg-[#1E1E2D]" },
          { label: "Milestone Reached", value: "$16", icon: Briefcase, color: "text-white", bg: "bg-[#FFC107]" },
          { label: "Milestone Not Reached", value: "$100", icon: PieChart, color: "text-white", bg: "bg-[#7E3AF2]" },
        ].map((item, i) => (
          <div key={i} className={`${item.bg} rounded-[20px] p-6 border border-gray-100 shadow-sm flex flex-col justify-between h-48`}>
            <div className={`${item.bg === "bg-white" ? item.color : "text-white/40"}`}>
              <item.icon size={28} />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-1">{item.value}</h3>
              <p className={`text-sm font-medium ${item.bg === "bg-white" ? "text-gray-400" : "text-white/60"}`}>{item.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Row */}
      <div className="bg-[#E7FFF1] rounded-[24px] p-8 border border-green-50 shadow-sm">
        <h3 className="text-green-600 font-bold mb-4">Applications Progress</h3>
        <div className="flex items-center gap-6">
          <span className="text-3xl font-bold text-gray-900">40%</span>
          <span className="text-gray-400 font-medium">Average</span>
        </div>
        <div className="w-full bg-white h-2.5 rounded-full mt-8 overflow-hidden">
          <div className="bg-green-400 h-full rounded-full" style={{ width: "40%" }}></div>
        </div>
      </div>

      {/* Applied Scholarships (from Image 4) */}
      <div className="mt-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">Applied scholarships: (3)</h2>
          <button className="text-blue-600 text-sm font-bold hover:underline flex items-center gap-1">
            View All <ExternalLink size={14} />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: "HEC Need Based Scholarship 2024", date: "22-05-2023 01:05am", status: "Verified", color: "text-green-500" },
            { name: "Dummy name", date: "22-05-2023 01:05am", status: "Selected", color: "text-pink-500" },
            { name: "Ehsas Scholarship 2023", date: "24-05-2023 08:05pm", status: "Not Selected", color: "text-yellow-600" },
          ].map((scholarship, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-gray-900 mb-4 line-clamp-1">Name: {scholarship.name}</h3>
              <div className="space-y-2 text-sm">
                <p className="text-gray-500"><span className="font-medium text-gray-700">Date applied:</span> {scholarship.date}</p>
                <p className="text-gray-500">
                  <span className="font-medium text-gray-700">Status:</span>{" "}
                  <span className={scholarship.color}>{scholarship.status}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
