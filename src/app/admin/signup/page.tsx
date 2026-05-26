"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { GraduationCap, Lock, Mail, User } from "lucide-react";

export default function AdminSignupPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    // Validate password match
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/auth/admin/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: form.fullName,
          email: form.email,
          password: form.password,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setSuccess("Admin account created successfully!");

        setTimeout(() => {
          router.push("/admin/login");
        }, 1500);
      } else {
        setError(data.message || "Signup failed");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-6">
      <div className="w-full max-w-[440px]">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-blue-50 rounded-full mb-6 text-blue-600">
            <div className="relative">
              <GraduationCap size={48} />
              <div className="absolute -bottom-1 -right-1 bg-white p-1 rounded-full shadow-sm">
                <Lock size={16} className="text-blue-600" />
              </div>
            </div>
          </div>

          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Admin Sign Up
          </h1>

          <p className="text-gray-500">
            Scholarship Management System
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Error Message */}
          {error && (
            <div className="p-3 rounded-lg bg-red-50 text-red-600 text-sm text-center">
              {error}
            </div>
          )}

          {/* Success Message */}
          {success && (
            <div className="p-3 rounded-lg bg-green-50 text-green-600 text-sm text-center">
              {success}
            </div>
          )}

          {/* Full Name */}
          <div className="relative">
            <User
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
            />

            <input
              type="text"
              placeholder="Full Name"
              required
              className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              value={form.fullName}
              onChange={(e) =>
                setForm({ ...form, fullName: e.target.value })
              }
            />
          </div>

          {/* Email */}
          <div className="relative">
            <Mail
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
            />

            <input
              type="email"
              placeholder="Email"
              required
              className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
            />
          </div>

          {/* Password */}
          <div className="relative">
            <Lock
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
            />

            <input
              type="password"
              placeholder="Password"
              required
              className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              value={form.password}
              onChange={(e) =>
                setForm({ ...form, password: e.target.value })
              }
            />
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <Lock
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
            />

            <input
              type="password"
              placeholder="Repeat Password"
              required
              className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              value={form.confirmPassword}
              onChange={(e) =>
                setForm({
                  ...form,
                  confirmPassword: e.target.value,
                })
              }
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-[#00A3FF] text-white font-bold rounded-lg hover:bg-blue-600 transition-colors shadow-lg shadow-blue-100 disabled:opacity-70"
          >
            {loading ? "Creating Account..." : "Create Admin Account"}
          </button>
        </form>
      </div>
    </div>
  );
}