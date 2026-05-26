"use client";

import { useState } from "react";
import { Upload } from "lucide-react";

type Scholarship = {
  id: number;
  name: string;
};

export default function ReviewerProfile() {
  const scholarships: Scholarship[] = [
    { id: 1, name: "HEC Need Based 2024" },
    { id: 2, name: "Sports Scholarship" },
    { id: 3, name: "Merit Scholarship" },
  ];

  const [form, setForm] = useState({
    name: "John Reviewer",
    email: "reviewer@example.com",
    phone: "",
    scholarshipId: "",
    image: null as File | null,
  });

  return (
    <div className="p-8">

      {/* HEADER */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          My Profile
        </h1>
        <p className="text-gray-500 mt-1">
          Manage your account, assigned scholarship, and personal details
        </p>
      </div>

      {/* FULL WIDTH LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* LEFT: PROFILE IMAGE + BASIC INFO */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6">

          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Profile Photo
          </h2>

          <div className="flex flex-col items-center gap-4">

            <div className="w-28 h-28 rounded-full bg-gray-100 border flex items-center justify-center text-gray-400">
              {form.image ? (
                <img
                  src={URL.createObjectURL(form.image)}
                  className="w-full h-full rounded-full object-cover"
                />
              ) : (
                "No Image"
              )}
            </div>

            <label className="cursor-pointer flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-xl text-sm text-gray-700 hover:bg-gray-50">
              <Upload size={16} />
              Upload Image
              <input
                type="file"
                hidden
                accept="image/*"
                onChange={(e) =>
                  setForm({
                    ...form,
                    image: e.target.files?.[0] || null,
                  })
                }
              />
            </label>

            <p className="text-xs text-gray-400 text-center">
              JPG, PNG up to 2MB
            </p>
          </div>
        </div>

        {/* MIDDLE + RIGHT: FORM */}
        <div className="lg:col-span-2 bg-white border border-gray-200 rounded-2xl p-6">

          <h2 className="text-lg font-semibold text-gray-900 mb-6">
            Account Information
          </h2>

          <div className="grid md:grid-cols-2 gap-5">

            {/* NAME */}
            <div>
              <label className="text-sm text-gray-700 font-medium">
                Full Name
              </label>
              <input
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
                className="mt-2 w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="text-sm text-gray-700 font-medium">
                Email
              </label>
              <input
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
                className="mt-2 w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* PHONE */}
            <div>
              <label className="text-sm text-gray-700 font-medium">
                Phone Number
              </label>
              <input
                value={form.phone}
                onChange={(e) =>
                  setForm({ ...form, phone: e.target.value })
                }
                placeholder="+60 12-345 6789"
                className="mt-2 w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* SCHOLARSHIP ASSIGNMENT */}
            <div>
              <label className="text-sm text-gray-700 font-medium">
                Assigned Scholarship
              </label>

              <select
                value={form.scholarshipId}
                onChange={(e) =>
                  setForm({ ...form, scholarshipId: e.target.value })
                }
                className="mt-2 w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
              >
                <option value="">Select Scholarship</option>
                {scholarships.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.name}
                  </option>
                ))}
              </select>
            </div>

          </div>

          {/* ACTIONS */}
          <div className="mt-6 flex gap-3">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">
              Save Changes
            </button>

            <button
              onClick={() =>
                setForm({
                  name: "John Reviewer",
                  email: "reviewer@example.com",
                  phone: "",
                  scholarshipId: "",
                  image: null,
                })
              }
              className="border border-gray-200 px-6 py-3 rounded-xl text-gray-700 hover:bg-gray-50"
            >
              Reset
            </button>
          </div>

        </div>

      </div>

      {/* ROLE INFO */}
      <div className="mt-6 bg-white border border-gray-200 rounded-2xl p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-3">
          Account Role
        </h2>

        <div className="flex items-center justify-between">
          <span className="text-gray-600">System Role</span>

          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-100 text-purple-700">
            REVIEWER
          </span>
        </div>
      </div>

    </div>
  );
}