"use client";

import { useMemo, useState } from "react";
import {
  BarChart3,
  Users,
  PieChart,
  TrendingUp,
  Target,
  Sparkles,
  Lightbulb,
  ExternalLink,
  Search,
  Filter,
} from "lucide-react";

type Scholarship = {
  id: number;
  name: string;
  category: string;
  status: "OPEN" | "CLOSED";
};

type Applied = {
  id: number;
  name: string;
  date: string;
  status: "VERIFIED" | "SELECTED" | "NOT_SELECTED";
};

export default function DashboardPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("ALL");

  const scholarships: Scholarship[] = [
    { id: 1, name: "Academic Excellence Scholarship", category: "Academic", status: "OPEN" },
    { id: 2, name: "Sports Scholarship", category: "Sports", status: "CLOSED" },
    { id: 3, name: "Leadership Scholarship", category: "Leadership", status: "OPEN" },
  ];

  const applied: Applied[] = [
    { id: 1, name: "HEC Scholarship", date: "22-05-2023", status: "VERIFIED" },
    { id: 2, name: "Ehsas Scholarship", date: "24-05-2023", status: "NOT_SELECTED" },
    { id: 3, name: "University Grant", date: "25-05-2023", status: "SELECTED" },
  ];

  const filtered = useMemo(() => {
    return scholarships.filter((s) => {
      const matchSearch = s.name.toLowerCase().includes(search.toLowerCase());
      const matchFilter = filter === "ALL" || s.status === filter;
      return matchSearch && matchFilter;
    });
  }, [search, filter]);

  return (
    <div className="p-8 bg-gray-50 min-h-screen">

      {/* HEADER */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-500 text-sm">AI Scholarship Intelligence Hub</p>
      </div>

      {/* TOP STATS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">

        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <Users className="text-blue-500" />
          <p className="text-2xl font-bold mt-2">3</p>
          <p className="text-sm text-gray-500">Active Applications</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <Target className="text-green-500" />
          <p className="text-2xl font-bold mt-2">85%</p>
          <p className="text-sm text-gray-500">AI Match Score</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <TrendingUp className="text-purple-500" />
          <p className="text-2xl font-bold mt-2">12</p>
          <p className="text-sm text-gray-500">Recommended Scholarships</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <BarChart3 className="text-orange-500" />
          <p className="text-2xl font-bold mt-2">40%</p>
          <p className="text-sm text-gray-500">Application Progress</p>
        </div>

      </div>

      {/* MIDDLE GRID */}
      <div className="grid lg:grid-cols-3 gap-6 mb-10">

        {/* SIMPLE CHART */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 lg:col-span-2">

          <div className="flex justify-between mb-4">
            <h2 className="font-bold text-gray-900">Application Growth</h2>
            <span className="text-sm text-gray-500">Last 6 months</span>
          </div>

          <div className="flex items-end gap-3 h-40">
            {[20, 35, 25, 60, 45, 70].map((h, i) => (
              <div
                key={i}
                className="w-full bg-green-500 rounded-lg"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>

        </div>

        {/* AI TIPS PANEL */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6">

          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="text-purple-500" />
            <h2 className="font-bold text-gray-900">AI Tips</h2>
          </div>

          <div className="space-y-4 text-sm">

            <div className="bg-purple-50 p-3 rounded-xl border border-purple-100">
              💡 Improve CGPA to 3.5+ for higher match rate
            </div>

            <div className="bg-blue-50 p-3 rounded-xl border border-blue-100">
              🎯 Add leadership experience to boost profile score
            </div>

            <div className="bg-green-50 p-3 rounded-xl border border-green-100">
              📄 Complete your profile for +15% visibility
            </div>

          </div>

        </div>

      </div>

      {/* INTERVIEW TIPS */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-10">

        <div className="flex items-center gap-2 mb-4">
          <Lightbulb className="text-yellow-500" />
          <h2 className="font-bold text-gray-900">
            Interview Preparation Tips
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4 text-sm">

          <div className="border border-gray-200 rounded-xl p-4">
            Always research the scholarship provider before interview
          </div>

          <div className="border border-gray-200 rounded-xl p-4">
            Prepare a strong personal story about your goals
          </div>

          <div className="border border-gray-200 rounded-xl p-4">
            Practice answering "Why do you deserve this?"
          </div>

        </div>

      </div>

      {/* SCHOLARSHIPS */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-10">

        <div className="flex justify-between mb-4">
          <h2 className="font-bold">Available Scholarships</h2>
          <button className="text-blue-600 text-sm flex items-center gap-1">
            View More <ExternalLink size={14} />
          </button>
        </div>

        <div className="flex gap-3 mb-4">

          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 text-gray-400" size={16} />
            <input
              className="w-full pl-9 py-2 border border-gray-200 rounded-xl"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <select
            className="border border-gray-200 rounded-xl px-3"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="ALL">All</option>
            <option value="OPEN">Open</option>
            <option value="CLOSED">Closed</option>
          </select>

        </div>

        <div className="space-y-3">
          {filtered.map((s) => (
            <div
              key={s.id}
              className="flex justify-between border border-gray-100 p-4 rounded-xl"
            >
              <div>
                <p className="font-medium">{s.name}</p>
                <p className="text-sm text-gray-500">{s.category}</p>
              </div>

              <span className="text-xs px-3 py-1 rounded-full bg-green-100 text-green-700">
                {s.status}
              </span>
            </div>
          ))}
        </div>

      </div>

      {/* APPLIED */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6">

        <div className="flex justify-between mb-4">
          <h2 className="font-bold">Applied Scholarships</h2>
          <button className="text-blue-600 text-sm">View All</button>
        </div>

        <div className="grid md:grid-cols-3 gap-4">

          {applied.map((a) => (
            <div key={a.id} className="border border-gray-200 rounded-xl p-4">

              <p className="font-medium">{a.name}</p>
              <p className="text-sm text-gray-500">{a.date}</p>

              <span className="text-xs mt-2 inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700">
                {a.status}
              </span>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}