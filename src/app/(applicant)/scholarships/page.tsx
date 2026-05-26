"use client";

import { useMemo, useState } from "react";
import {
  Search,
  Filter,
  X,
  Sparkles,
} from "lucide-react";

type Scholarship = {
  id: number;
  title: string;
  category: string;
  status: "OPEN" | "CLOSED";
  requirements: string[];
  description: string;
  matchScore: number;
};

export default function ApplicantScholarshipsPage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");
  const [selected, setSelected] = useState<Scholarship | null>(null);

  const [scholarships] = useState<Scholarship[]>([
    {
      id: 1,
      title: "Academic Excellence Scholarship",
      category: "Academic",
      status: "OPEN",
      description:
        "Awarded to top-performing students with excellent academic achievements and active extracurricular involvement.",
      requirements: [
        "CGPA 3.50 and above",
        "Active in university activities",
        "Strong leadership skills",
      ],
      matchScore: 92,
    },
    {
      id: 2,
      title: "Sports Scholarship",
      category: "Sports",
      status: "CLOSED",
      description:
        "Scholarship for students with outstanding achievements in sports and athletics.",
      requirements: [
        "State or national athlete",
        "Coach recommendation letter",
        "Consistent tournament participation",
      ],
      matchScore: 68,
    },
    {
      id: 3,
      title: "Leadership Scholarship",
      category: "Leadership",
      status: "OPEN",
      description:
        "Designed for students who demonstrate impactful leadership and community involvement.",
      requirements: [
        "Leadership experience",
        "Community service involvement",
        "Strong communication skills",
      ],
      matchScore: 85,
    },
  ]);

  const filtered = useMemo(() => {
    return scholarships.filter((s) => {
      const matchSearch = s.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchStatus =
        statusFilter === "ALL" ||
        s.status === statusFilter;

      return matchSearch && matchStatus;
    });
  }, [search, statusFilter, scholarships]);

  return (
    <div className="p-8 bg-gray-50 min-h-screen">

      {/* HEADER */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Available Scholarships
        </h1>

        <p className="text-gray-500 mt-1">
          AI-powered matching based on your profile
        </p>
      </div>

      {/* SEARCH + FILTER */}
      <div className="bg-white border border-gray-200 rounded-2xl p-5 mb-6 shadow-sm">

        <div className="grid md:grid-cols-2 gap-4">

          {/* SEARCH */}
          <div className="relative">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />

            <input
              className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Search scholarships..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* FILTER */}
          <div className="relative">
            <Filter
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />

            <select
              className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="ALL">All Status</option>
              <option value="OPEN">Open</option>
              <option value="CLOSED">Closed</option>
            </select>
          </div>

        </div>

      </div>

      {/* CARDS */}
      <div className="grid md:grid-cols-2 gap-6">

        {filtered.map((s) => (
          <div
            key={s.id}
            onClick={() => setSelected(s)}
            className="bg-white border border-gray-200 rounded-2xl p-6 cursor-pointer hover:shadow-md transition"
          >

            <div className="flex justify-between items-start">

              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  {s.title}
                </h2>

                <p className="text-gray-500 text-sm mt-1">
                  {s.category}
                </p>
              </div>

              <span
                className={`text-xs px-3 py-1 rounded-full font-medium ${
                  s.status === "OPEN"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {s.status}
              </span>

            </div>

            {/* MATCH SCORE */}
            <div className="mt-5">

              <div className="flex items-center gap-2 mb-2">
                <Sparkles
                  size={16}
                  className="text-purple-500"
                />

                <span className="text-sm font-medium text-gray-700">
                  AI Match: {s.matchScore}%
                </span>
              </div>

              <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                <div
                  className="h-2 bg-green-500 rounded-full"
                  style={{ width: `${s.matchScore}%` }}
                />
              </div>

            </div>

          </div>
        ))}

      </div>

      {/* MODAL */}
      {selected && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-6 z-50">

          <div className="bg-white w-full max-w-3xl rounded-3xl p-8 relative border border-gray-200 shadow-xl max-h-[90vh] overflow-y-auto">

            {/* CLOSE BUTTON */}
            <button
              onClick={() => setSelected(null)}
              className="absolute right-5 top-5 text-gray-500 hover:text-black transition"
            >
              <X size={22} />
            </button>

            {/* TITLE */}
            <div className="pr-10">

              <div className="flex items-center gap-3 mb-3">

                <h2 className="text-2xl font-bold text-gray-900">
                  {selected.title}
                </h2>

                <span
                  className={`text-xs px-3 py-1 rounded-full font-medium ${
                    selected.status === "OPEN"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {selected.status}
                </span>

              </div>

              <p className="text-gray-500">
                {selected.category}
              </p>

            </div>

            {/* AI SCORE */}
            <div className="mt-6 bg-purple-50 rounded-2xl p-5 border border-purple-100">

              <div className="flex items-center gap-2">
                <Sparkles
                  size={18}
                  className="text-purple-600"
                />

                <span className="font-semibold text-purple-900">
                  AI Compatibility Score: {selected.matchScore}%
                </span>
              </div>

              <p className="text-sm text-gray-600 mt-2">
                This scholarship strongly matches your academic
                background, achievements, leadership experience,
                and profile strength.
              </p>

              <div className="mt-4 w-full bg-white h-3 rounded-full overflow-hidden">
                <div
                  className="h-3 bg-green-500 rounded-full"
                  style={{ width: `${selected.matchScore}%` }}
                />
              </div>

            </div>

            {/* DESCRIPTION */}
            <div className="mt-8">

              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Scholarship Description
              </h3>

              <p className="text-gray-600 leading-7">
                {selected.description}
              </p>

            </div>

            {/* REQUIREMENTS */}
            <div className="mt-8">

              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Requirements
              </h3>

              <div className="space-y-3">
                {selected.requirements.map((r, i) => (
                  <div
                    key={i}
                    className="border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 bg-gray-50"
                  >
                    {r}
                  </div>
                ))}
              </div>

            </div>

            {/* ACTIONS */}
            <div className="flex gap-4 mt-10">

              <button
                onClick={() => alert("Applied!")}
                className="flex-1 bg-green-600 text-white py-3.5 rounded-xl font-medium hover:bg-green-700 transition"
              >
                Apply Now
              </button>

              <button
                onClick={() => setSelected(null)}
                className="flex-1 border border-gray-200 py-3.5 rounded-xl font-medium hover:bg-gray-50 transition"
              >
                Close
              </button>

            </div>

          </div>

        </div>
      )}

    </div>
  );
}