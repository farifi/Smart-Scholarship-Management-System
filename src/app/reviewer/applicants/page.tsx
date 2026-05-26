"use client";

import { useMemo, useState } from "react";
import { Eye, Check, X, Sparkles, FileText } from "lucide-react";

type Document = {
  name: string;
  type: string;
  url: string;
};

type Application = {
  id: number;
  fullName: string;
  email: string;
  scholarship: string;
  status: "DRAFT" | "PENDING" | "APPROVED" | "REJECTED";
  date: string;

  aiScore: number;
  aiSummary: string;
  aiStrengths: string[];
  aiWeaknesses: string[];

  primarySchool: string;
  secondarySchool: string;
  university: string;
  universityType: string;
  qualification: string;
  course: string;
  enrollmentStatus: string;
  cgpa: string;
  spmResult: string;
  achievements: string[];
  experience: string;
  leadership: string;
  skills: string[];
  extracurricular: string[];
  personalStatement: string;

  documents: Document[];
};

export default function ReviewApplicantsPage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");
  const [selected, setSelected] = useState<Application | null>(null);

  const [applications, setApplications] = useState<Application[]>([
    {
      id: 1,
      fullName: "John Doe",
      email: "john@example.com",
      scholarship: "HEC Need Based",
      status: "PENDING",
      date: "2025-10-12",

      aiScore: 86,
      aiSummary: "Strong academic profile with leadership experience.",
      aiStrengths: ["High GPA", "Leadership experience", "Good communication"],
      aiWeaknesses: ["Incomplete financial documentation clarity"],

      primarySchool: "SK Bandar Sunway",
      secondarySchool: "SMK USJ 4",
      university: "Universiti Malaya",
      universityType: "Public University",
      qualification: "Diploma",
      course: "Computer Science",
      enrollmentStatus: "Enrolled",
      cgpa: "3.78",
      spmResult: "8A 1B",
      achievements: ["Dean’s List", "Hackathon Winner"],
      experience: "Intern at Tech Startup (3 months)",
      leadership: "Coding Club Vice President",
      skills: ["React", "Node.js", "UI/UX"],
      extracurricular: ["Football Team", "Volunteer Tutor"],
      personalStatement:
        "I aim to use technology to improve education accessibility.",

      documents: [
        {
          name: "SPM Certificate",
          type: "PDF",
          url: "/docs/spm.pdf",
        },
        {
          name: "University Transcript",
          type: "PDF",
          url: "/docs/transcript.pdf",
        },
        {
          name: "Income Statement",
          type: "PDF",
          url: "/docs/income.pdf",
        },
        {
          name: "ID Card",
          type: "Image",
          url: "/docs/id.jpg",
        },
      ],
    },
    {
      id: 2,
      fullName: "John Doe",
      email: "john@example.com",
      scholarship: "HEC Need Based",
      status: "PENDING",
      date: "2025-10-12",

      aiScore: 86,
      aiSummary: "Strong academic profile with leadership experience.",
      aiStrengths: ["High GPA", "Leadership experience", "Good communication"],
      aiWeaknesses: ["Incomplete financial documentation clarity"],

      primarySchool: "SK Bandar Sunway",
      secondarySchool: "SMK USJ 4",
      university: "Universiti Malaya",
      universityType: "Public University",
      qualification: "Diploma",
      course: "Computer Science",
      enrollmentStatus: "Enrolled",
      cgpa: "3.78",
      spmResult: "8A 1B",
      achievements: ["Dean’s List", "Hackathon Winner"],
      experience: "Intern at Tech Startup (3 months)",
      leadership: "Coding Club Vice President",
      skills: ["React", "Node.js", "UI/UX"],
      extracurricular: ["Football Team", "Volunteer Tutor"],
      personalStatement:
        "I aim to use technology to improve education accessibility.",

      documents: [
        {
          name: "SPM Certificate",
          type: "PDF",
          url: "/docs/spm.pdf",
        },
        {
          name: "University Transcript",
          type: "PDF",
          url: "/docs/transcript.pdf",
        },
        {
          name: "Income Statement",
          type: "PDF",
          url: "/docs/income.pdf",
        },
        {
          name: "ID Card",
          type: "Image",
          url: "/docs/id.jpg",
        },
      ],
    },
    {
      id: 3,
      fullName: "John Doe",
      email: "john@example.com",
      scholarship: "HEC Need Based",
      status: "PENDING",
      date: "2025-10-12",

      aiScore: 86,
      aiSummary: "Strong academic profile with leadership experience.",
      aiStrengths: ["High GPA", "Leadership experience", "Good communication"],
      aiWeaknesses: ["Incomplete financial documentation clarity"],

      primarySchool: "SK Bandar Sunway",
      secondarySchool: "SMK USJ 4",
      university: "Universiti Malaya",
      universityType: "Public University",
      qualification: "Diploma",
      course: "Computer Science",
      enrollmentStatus: "Enrolled",
      cgpa: "3.78",
      spmResult: "8A 1B",
      achievements: ["Dean’s List", "Hackathon Winner"],
      experience: "Intern at Tech Startup (3 months)",
      leadership: "Coding Club Vice President",
      skills: ["React", "Node.js", "UI/UX"],
      extracurricular: ["Football Team", "Volunteer Tutor"],
      personalStatement:
        "I aim to use technology to improve education accessibility.",

      documents: [
        {
          name: "SPM Certificate",
          type: "PDF",
          url: "/docs/spm.pdf",
        },
        {
          name: "University Transcript",
          type: "PDF",
          url: "/docs/transcript.pdf",
        },
        {
          name: "Income Statement",
          type: "PDF",
          url: "/docs/income.pdf",
        },
        {
          name: "ID Card",
          type: "Image",
          url: "/docs/id.jpg",
        },
      ],
    },
    {
      id: 4,
      fullName: "John Doe",
      email: "john@example.com",
      scholarship: "HEC Need Based",
      status: "PENDING",
      date: "2025-10-12",

      aiScore: 86,
      aiSummary: "Strong academic profile with leadership experience.",
      aiStrengths: ["High GPA", "Leadership experience", "Good communication"],
      aiWeaknesses: ["Incomplete financial documentation clarity"],

      primarySchool: "SK Bandar Sunway",
      secondarySchool: "SMK USJ 4",
      university: "Universiti Malaya",
      universityType: "Public University",
      qualification: "Diploma",
      course: "Computer Science",
      enrollmentStatus: "Enrolled",
      cgpa: "3.78",
      spmResult: "8A 1B",
      achievements: ["Dean’s List", "Hackathon Winner"],
      experience: "Intern at Tech Startup (3 months)",
      leadership: "Coding Club Vice President",
      skills: ["React", "Node.js", "UI/UX"],
      extracurricular: ["Football Team", "Volunteer Tutor"],
      personalStatement:
        "I aim to use technology to improve education accessibility.",

      documents: [
        {
          name: "SPM Certificate",
          type: "PDF",
          url: "/docs/spm.pdf",
        },
        {
          name: "University Transcript",
          type: "PDF",
          url: "/docs/transcript.pdf",
        },
        {
          name: "Income Statement",
          type: "PDF",
          url: "/docs/income.pdf",
        },
        {
          name: "ID Card",
          type: "Image",
          url: "/docs/id.jpg",
        },
      ],
    },
  ]);

  const filtered = useMemo(() => {
    return applications.filter((a) => {
      const matchSearch =
        a.fullName.toLowerCase().includes(search.toLowerCase()) ||
        a.email.toLowerCase().includes(search.toLowerCase()) ||
        a.scholarship.toLowerCase().includes(search.toLowerCase());

      const matchFilter = statusFilter === "ALL" || a.status === statusFilter;

      return matchSearch && matchFilter;
    });
  }, [search, statusFilter, applications]);

  const updateStatus = (
    id: number,
    status: "DRAFT" | "PENDING" | "APPROVED" | "REJECTED"
  ) => {
    setApplications((prev) =>
      prev.map((a) => (a.id === id ? { ...a, status } : a))
    );
  };

  const statusStyle = (status: string) => {
    switch (status) {
      case "APPROVED":
        return "bg-green-50 text-green-700";
      case "REJECTED":
        return "bg-red-50 text-red-700";
      case "DRAFT":
        return "bg-gray-100 text-gray-600";
      default:
        return "bg-yellow-50 text-yellow-700";
    }
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">

      {/* HEADER */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Review Applicants</h1>
        <p className="text-gray-500">AI-powered scholarship evaluation system</p>
      </div>

      {/* FILTER */}
      <div className="bg-white border border-gray-200 rounded-2xl p-5 mb-6">
        <div className="flex gap-3">

          <input
            className="flex-1 border border-gray-200 rounded-xl px-4 py-3"
            placeholder="Search applicant..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            className="border border-gray-200 rounded-xl px-3"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="ALL">All</option>
            <option value="DRAFT">Draft</option>
            <option value="PENDING">Pending</option>
            <option value="APPROVED">Approved</option>
            <option value="REJECTED">Rejected</option>
          </select>

        </div>
      </div>

      {/* TABLE */}
      <div className="bg-white border border-gray-300 rounded-2xl overflow-hidden">

        <table className="w-full text-sm">

          <thead className="bg-gray-50 text-gray-600">
            <tr>
              <th className="p-4 text-left">Applicant</th>
              <th className="p-4 text-left">Scholarship</th>
              <th className="p-4 text-left">AI Score</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((a) => (
              <tr
                key={a.id}
                className="border-t border-gray-300 hover:bg-gray-50"
              >

                <td className="p-4">
                  <p className="font-medium">{a.fullName}</p>
                  <p className="text-xs text-gray-400">{a.email}</p>
                </td>

                <td className="p-4 text-gray-600">{a.scholarship}</td>

                <td className="p-4 flex items-center gap-2">
                  <Sparkles size={14} className="text-purple-500" />
                  <span className="font-semibold">{a.aiScore}%</span>
                </td>

                <td className="p-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusStyle(a.status)}`}>
                    {a.status}
                  </span>
                </td>

                <td className="p-4">
                  <div className="flex justify-center gap-2">

                    <button
                      onClick={() => setSelected(a)}
                      className="p-2 rounded-lg bg-blue-50 text-blue-600"
                    >
                      <Eye size={16} />
                    </button>

                    <button
                      onClick={() => updateStatus(a.id, "DRAFT")}
                      className="px-3 py-1 text-xs rounded-lg bg-gray-100 text-gray-600"
                    >
                      Draft
                    </button>

                    <button
                      onClick={() => updateStatus(a.id, "APPROVED")}
                      className="p-2 rounded-lg bg-green-50 text-green-600"
                    >
                      <Check size={16} />
                    </button>

                    <button
                      onClick={() => updateStatus(a.id, "REJECTED")}
                      className="p-2 rounded-lg bg-red-50 text-red-600"
                    >
                      <X size={16} />
                    </button>

                  </div>
                </td>

              </tr>
            ))}
          </tbody>

        </table>
      </div>

      {/* MODAL */}
      {selected && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-6">

          <div className="bg-white w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-2xl p-8">

            {/* HEADER */}
            <h2 className="text-3xl font-bold">{selected.fullName}</h2>
            <p className="text-gray-500 mb-6">{selected.email}</p>

            {/* AI */}
            <div className="bg-purple-50 border border-purple-100 rounded-xl p-5 mb-6">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="text-purple-600" />
                <p className="font-bold">AI Evaluation</p>
              </div>

              <p className="text-sm text-gray-700 mb-2">
                {selected.aiSummary}
              </p>

              <p className="font-semibold mb-3">
                Match Score: {selected.aiScore}%
              </p>
            </div>

            {/* DOCUMENTS */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">
                Uploaded Documents
              </h3>

              <div className="grid grid-cols-2 gap-3">

                {selected.documents.map((doc, i) => (
                  <a
                    key={i}
                    href={doc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between bg-gray-50 border border-gray-300 hover:border-gray-400 rounded-xl p-3"
                  >
                    <div className="flex items-center gap-2">
                      <FileText size={16} className="text-gray-500" />
                      <div>
                        <p className="text-sm font-medium">{doc.name}</p>
                        <p className="text-xs text-gray-400">{doc.type}</p>
                      </div>
                    </div>

                    <span className="text-xs text-blue-600 font-medium">
                      Open
                    </span>
                  </a>
                ))}

              </div>
            </div>

            {/* DETAILS */}
            <div className="grid grid-cols-2 gap-4 text-sm">

              <Field label="Primary School" value={selected.primarySchool} />
              <Field label="Secondary School" value={selected.secondarySchool} />
              <Field label="University" value={selected.university} />
              <Field label="Course" value={selected.course} />
              <Field label="CGPA" value={selected.cgpa} />
              <Field label="SPM Result" value={selected.spmResult} />
              <Field label="Leadership" value={selected.leadership} />
              <Field label="Skills" value={selected.skills.join(", ")} />
              <Field label="Experience" value={selected.experience} />
              <Field label="Achievements" value={selected.achievements.join(", ")} />

            </div>

            {/* PERSONAL */}
            <div className="mt-5">
              <p className="font-semibold mb-1">Personal Statement</p>
              <p className="text-gray-700 text-sm">
                {selected.personalStatement}
              </p>
            </div>

            {/* ACTIONS */}
            <div className="flex gap-3 mt-8">

              <button
                onClick={() => updateStatus(selected.id, "APPROVED")}
                className="flex-1 bg-green-600 text-white py-3 rounded-xl"
              >
                Approve
              </button>

              <button
                onClick={() => updateStatus(selected.id, "REJECTED")}
                className="flex-1 bg-red-600 text-white py-3 rounded-xl"
              >
                Reject
              </button>

              <button
                onClick={() => setSelected(null)}
                className="flex-1 border border-gray-300 py-3 rounded-xl"
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

/* FIELD COMPONENT */
function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-gray-50 border border-gray-300 rounded-xl p-3">
      <p className="text-xs text-gray-500">{label}</p>
      <p className="font-medium text-gray-800">{value || "-"}</p>
    </div>
  );
}