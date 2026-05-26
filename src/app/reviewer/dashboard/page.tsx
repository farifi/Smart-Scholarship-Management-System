"use client";

import { useMemo, useState } from "react";
import {
  FileSearch,
  Clock,
  CheckSquare,
  AlertCircle,
  Search,
  Filter,
  Eye,
  Check,
  X,
  Sparkles,
} from "lucide-react";

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  LineChart,
  Line,
  XAxis,
  YAxis,
} from "recharts";

type Application = {
  id: number;
  fullName: string;
  scholarship: string;
  date: string;
  status: "PENDING" | "APPROVED" | "REJECTED";
  aiScore: number;
  aiInsight: string;
};

export default function ReviewerDashboard() {
  const stats = [
    {
      label: "Pending Reviews",
      value: "12",
      icon: Clock,
      color: "text-yellow-600",
      bg: "bg-yellow-50",
    },
    {
      label: "Reviewed Today",
      value: "8",
      icon: CheckSquare,
      color: "text-green-600",
      bg: "bg-green-50",
    },
    {
      label: "Total Assigned",
      value: "156",
      icon: FileSearch,
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      label: "Urgent",
      value: "3",
      icon: AlertCircle,
      color: "text-red-600",
      bg: "bg-red-50",
    },
  ];

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");

  const [applications] = useState<Application[]>([
    {
      id: 1,
      fullName: "John Doe",
      scholarship: "HEC Need Based 2024",
      date: "2025-10-12",
      status: "PENDING",
      aiScore: 87,
      aiInsight: "Strong GPA + leadership experience",
    },
    {
      id: 2,
      fullName: "Sarah Lee",
      scholarship: "Sports Scholarship",
      date: "2025-10-10",
      status: "APPROVED",
      aiScore: 72,
      aiInsight: "Good athlete, moderate academics",
    },
    {
      id: 3,
      fullName: "Ali Hassan",
      scholarship: "Merit Scholarship",
      date: "2025-10-08",
      status: "REJECTED",
      aiScore: 58,
      aiInsight: "Below requirement threshold",
    },
  ]);

  const filtered = useMemo(() => {
    return applications.filter((app) => {
      const matchesSearch =
        app.fullName.toLowerCase().includes(search.toLowerCase()) ||
        app.scholarship.toLowerCase().includes(search.toLowerCase());

      const matchesFilter =
        statusFilter === "ALL" || app.status === statusFilter;

      return matchesSearch && matchesFilter;
    });
  }, [search, statusFilter, applications]);

  const pieData = [
    { name: "Pending", value: 12 },
    { name: "Approved", value: 8 },
    { name: "Rejected", value: 3 },
  ];

  const lineData = [
    { day: "Mon", reviews: 5 },
    { day: "Tue", reviews: 8 },
    { day: "Wed", reviews: 6 },
    { day: "Thu", reviews: 10 },
    { day: "Fri", reviews: 7 },
    { day: "Sat", reviews: 4 },
    { day: "Sun", reviews: 6 },
  ];

  const COLORS = ["#facc15", "#22c55e", "#ef4444"];

  return (
    <div className="p-8">

      {/* HEADER */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Reviewer Dashboard
        </h1>
        <p className="text-gray-500 mt-1">
          Review and process scholarship applications
        </p>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
          >
            <div className="flex items-center gap-4">
              <div className={`${stat.bg} ${stat.color} p-3 rounded-xl`}>
                <stat.icon size={22} />
              </div>

              <div>
                <p className="text-sm text-gray-500 font-medium">
                  {stat.label}
                </p>
                <h3 className="text-2xl font-bold text-gray-900">
                  {stat.value}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CHARTS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold mb-4">Application Status</h2>

          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={pieData} dataKey="value" nameKey="name" outerRadius={110}>
                  {pieData.map((_, i) => (
                    <Cell key={i} fill={COLORS[i]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold mb-4">Daily Reviews</h2>

          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={lineData}>
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="reviews" stroke="#3b82f6" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>

      {/* SEARCH */}
      <div className="bg-white rounded-2xl p-5 mb-6 shadow-sm border border-gray-100">
        <div className="grid md:grid-cols-2 gap-4">

          <div className="relative">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search applicant or scholarship..."
              className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div className="relative">
            <Filter size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value="ALL">All Status</option>
              <option value="PENDING">Pending</option>
              <option value="APPROVED">Approved</option>
              <option value="REJECTED">Rejected</option>
            </select>
          </div>

        </div>
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">

        <table className="w-full">

          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold">Applicant</th>
              <th className="px-6 py-4 text-left text-sm font-semibold">Scholarship</th>
              <th className="px-6 py-4 text-left text-sm font-semibold">AI Insight</th>
              <th className="px-6 py-4 text-left text-sm font-semibold">Status</th>
              <th className="px-6 py-4 text-center text-sm font-semibold">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((app) => (
              <tr key={app.id} className="border-t border-gray-100 hover:bg-gray-50">

                <td className="px-6 py-4 font-medium">{app.fullName}</td>

                <td className="px-6 py-4 text-gray-600">{app.scholarship}</td>

                {/* AI COLUMN */}
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <Sparkles size={14} className="text-purple-500" />
                    <span className="font-medium text-purple-600">{app.aiScore}%</span>
                    <span className="text-gray-500">— {app.aiInsight}</span>
                  </div>
                </td>

                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      app.status === "PENDING"
                        ? "bg-yellow-100 text-yellow-700"
                        : app.status === "APPROVED"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {app.status}
                  </span>
                </td>

                <td className="px-6 py-4">
                  <div className="flex justify-center gap-2">
                    <button className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                      <Eye size={16} />
                    </button>
                    <button className="p-2 bg-green-50 text-green-600 rounded-lg">
                      <Check size={16} />
                    </button>
                    <button className="p-2 bg-red-50 text-red-600 rounded-lg">
                      <X size={16} />
                    </button>
                  </div>
                </td>

              </tr>
            ))}
          </tbody>

        </table>
      </div>

    </div>
  );
}