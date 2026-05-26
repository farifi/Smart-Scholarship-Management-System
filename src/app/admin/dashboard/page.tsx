"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

import {
  Users,
  GraduationCap,
  FileText,
  CheckCircle,
  Search,
  Filter,
} from "lucide-react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

export default function AdminDashboard() {
  const router = useRouter();

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");

  // =====================
  // STATS
  // =====================
  const stats = [
    {
      label: "Total Users",
      value: "1,240",
      icon: Users,
      color: "text-blue-600",
      bg: "bg-blue-50",
      link: "/admin/users",
    },
    {
      label: "Scholarships",
      value: "48",
      icon: GraduationCap,
      color: "text-purple-600",
      bg: "bg-purple-50",
      link: "/admin/scholarships",
    },
    {
      label: "Applications",
      value: "3,842",
      icon: FileText,
      color: "text-orange-600",
    },
    {
      label: "Approved",
      value: "1,120",
      icon: CheckCircle,
      color: "text-green-600",
    },
  ];

  // =====================
  // CHART DATA (ADMIN OVERVIEW)
  // =====================
  const userGrowth = [
    { month: "Jan", users: 120 },
    { month: "Feb", users: 180 },
    { month: "Mar", users: 160 },
    { month: "Apr", users: 240 },
    { month: "May", users: 300 },
    { month: "Jun", users: 280 },
  ];

  const roleDistribution = [
    { name: "Applicants", value: 900 },
    { name: "Reviewers", value: 200 },
    { name: "Admins", value: 140 },
  ];

  const COLORS = ["#3b82f6", "#f59e0b", "#22c55e"];

  // =====================
  // USERS PREVIEW
  // =====================
  const users = [
    { name: "John Doe", role: "APPLICANT", status: "ACTIVE" },
    { name: "Sarah Lee", role: "REVIEWER", status: "ACTIVE" },
    { name: "Ali Hassan", role: "APPLICANT", status: "INACTIVE" },
  ];

  // =====================
  // SCHOLARSHIPS PREVIEW
  // =====================
  const scholarships = [
    { name: "HEC Need Based 2024", status: "ACTIVE" },
    { name: "Sports Scholarship", status: "ACTIVE" },
    { name: "Merit Scholarship", status: "DRAFT" },
  ];

  // =====================
  // FILTER USERS
  // =====================
  const filteredUsers = useMemo(() => {
    return users.filter((u) => {
      const matchesSearch =
        u.name.toLowerCase().includes(search.toLowerCase()) ||
        u.role.toLowerCase().includes(search.toLowerCase());

      const matchesFilter =
        statusFilter === "ALL" || u.status === statusFilter;

      return matchesSearch && matchesFilter;
    });
  }, [search, statusFilter]);

  return (
    <div className="p-8">

      {/* ================= HEADER ================= */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Admin Dashboard
        </h1>
        <p className="text-gray-500 mt-1">
          Manage users and scholarships in the system
        </p>
      </div>

      {/* ================= STATS ================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">

        {stats.map((stat, i) => (
          <div
            key={i}
            onClick={() => stat.link && router.push(stat.link)}
            className="bg-white border border-gray-200 rounded-2xl p-6 cursor-pointer hover:shadow-sm transition"
          >
            <div className="flex items-center gap-4">

              <div className={`${stat.bg} ${stat.color} p-3 rounded-xl`}>
                <stat.icon size={22} />
              </div>

              <div className="flex-1">
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

      {/* ================= CHARTS ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">

        {/* USER GROWTH */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <h2 className="text-lg font-semibold mb-4">
            User Growth
          </h2>

          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={userGrowth}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="users"
                  stroke="#3b82f6"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* ROLE DISTRIBUTION */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <h2 className="text-lg font-semibold mb-4">
            User Roles
          </h2>

          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={roleDistribution}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={110}
                  label
                >
                  {roleDistribution.map((_, i) => (
                    <Cell key={i} fill={COLORS[i]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>

      {/* ================= SEARCH + FILTER ================= */}
      <div className="bg-white border border-gray-200 rounded-2xl p-5 mb-6">

        <div className="grid md:grid-cols-2 gap-4">

          {/* SEARCH */}
          <div className="relative">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search users or roles..."
              className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* FILTER */}
          <div className="relative">
            <Filter
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none appearance-none"
            >
              <option value="ALL">All Status</option>
              <option value="ACTIVE">Active</option>
              <option value="INACTIVE">Inactive</option>
            </select>
          </div>

        </div>
      </div>

      {/* ================= USERS PREVIEW ================= */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-6">

        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">
            Recent Users
          </h2>

          <button
            onClick={() => router.push("/admin/users")}
            className="text-blue-600 text-sm font-medium hover:text-blue-700 cursor-pointer"
          >
            View more →
          </button>
        </div>

        <div className="space-y-4">
          {filteredUsers.map((u, i) => (
            <div
              key={i}
              className="flex items-center justify-between border-b border-gray-100 pb-3 last:border-0"
            >
              <div>
                <p className="font-medium">{u.name}</p>
                <p className="text-sm text-gray-500">{u.role}</p>
              </div>

              <span
                className={`text-xs px-3 py-1 rounded-full ${
                  u.status === "ACTIVE"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {u.status}
              </span>
            </div>
          ))}
        </div>

      </div>

      {/* ================= SCHOLARSHIPS ================= */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6">

        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">
            Scholarships
          </h2>

          <button
            onClick={() => router.push("/admin/scholarships")}
            className="text-blue-600 text-sm font-medium hover:text-blue-700 cursor-pointer"
          >
            View more →
          </button>
        </div>

        <div className="space-y-4">
          {scholarships.map((s, i) => (
            <div
              key={i}
              className="flex items-center justify-between border-b border-gray-100 pb-3 last:border-0"
            >
              <p className="font-medium">{s.name}</p>

              <span
                className={`text-xs px-3 py-1 rounded-full ${
                  s.status === "ACTIVE"
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {s.status}
              </span>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}