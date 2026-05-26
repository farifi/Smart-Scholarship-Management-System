"use client";

import { useMemo, useState } from "react";
import {
  Search,
  Plus,
  Pencil,
  Trash2,
  Filter,
  GraduationCap,
} from "lucide-react";

type Scholarship = {
  id: number;
  title: string;
  category: string;
  amount: string;
  status: "OPEN" | "CLOSED";
};

export default function ManageScholarshipsPage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");

  const [scholarships] = useState<Scholarship[]>([
    {
      id: 1,
      title: "Academic Excellence Scholarship",
      category: "Academic",
      amount: "RM 5000",
      status: "OPEN",
    },
    {
      id: 2,
      title: "Sports Scholarship",
      category: "Sports",
      amount: "RM 3000",
      status: "CLOSED",
    },
    {
      id: 3,
      title: "Leadership Scholarship",
      category: "Leadership",
      amount: "RM 4500",
      status: "OPEN",
    },
  ]);

  const filteredScholarships = useMemo(() => {
    return scholarships.filter((scholarship) => {
      const matchesSearch =
        scholarship.title
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesStatus =
        statusFilter === "ALL" ||
        scholarship.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [search, statusFilter, scholarships]);

  return (
    <div className="p-8">

      {/* HEADER */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Manage Scholarships
          </h1>

          <p className="text-gray-500 mt-1">
            Create, update and manage scholarships
          </p>
        </div>

        <button className="flex items-center gap-2 bg-green-600 text-white px-5 py-3 rounded-xl hover:bg-green-700 transition-all">
          <Plus size={18} />
          Add Scholarship
        </button>
      </div>

      {/* SEARCH + FILTER */}
      <div className="bg-white border border-gray-200 rounded-2xl p-5 mb-6">

        <div className="grid md:grid-cols-2 gap-4">

          {/* SEARCH */}
          <div className="relative">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search scholarships..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
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
              className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 appearance-none"
            >
              <option value="ALL">All Status</option>
              <option value="OPEN">Open</option>
              <option value="CLOSED">Closed</option>
            </select>
          </div>
        </div>
      </div>

      {/* TABLE */}
      <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">
                  Scholarship Title
                </th>

                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">
                  Category
                </th>

                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">
                  Amount
                </th>

                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">
                  Status
                </th>

                <th className="text-center px-6 py-4 text-sm font-semibold text-gray-700">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {filteredScholarships.map((scholarship) => (
                <tr
                  key={scholarship.id}
                  className="border-b border-gray-100 hover:bg-gray-50"
                >
                  <td className="px-6 py-4 font-medium text-gray-900">
                    {scholarship.title}
                  </td>

                  <td className="px-6 py-4 text-gray-600">
                    {scholarship.category}
                  </td>

                  <td className="px-6 py-4 text-gray-600">
                    {scholarship.amount}
                  </td>

                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        scholarship.status === "OPEN"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {scholarship.status}
                    </span>
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-3">

                      {/* EDIT */}
                      <button className="p-2 rounded-lg bg-yellow-100 text-yellow-700 hover:bg-yellow-200">
                        <Pencil size={16} />
                      </button>

                      {/* DELETE */}
                      <button className="p-2 rounded-lg bg-red-100 text-red-700 hover:bg-red-200">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {filteredScholarships.length === 0 && (
                <tr>
                  <td
                    colSpan={5}
                    className="text-center py-12 text-gray-400"
                  >
                    <div className="flex flex-col items-center gap-3">
                      <GraduationCap size={40} />
                      No scholarships found
                    </div>
                  </td>
                </tr>
              )}
            </tbody>

          </table>
        </div>
      </div>
    </div>
  );
}