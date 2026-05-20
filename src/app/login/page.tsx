"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        if (data.role === "ADMIN") {
          router.push("/admin/dashboard");
        } else if (data.role === "REVIEWER") {
          router.push("/reviewer/dashboard");
        } else {
          router.push("/dashboard");
        }
      } else {
        setError(data.message || "Login failed");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#F8FAFC]">
      {/* Left Column - Illustration */}
      <div className="hidden md:flex md:w-1/2 bg-white flex-col items-center justify-center p-12 border-r border-gray-100">
        <div className="max-w-md text-center">
          <Link href="/" className="inline-flex items-center gap-2 text-blue-600 font-medium mb-12 self-start">
            <span className="text-lg">← Home</span>
          </Link>
          <div className="relative mb-8">
            {/* Simple CSS Illustration placeholder */}
            <div className="w-80 h-80 bg-blue-50 rounded-full flex items-center justify-center relative overflow-hidden">
               <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-blue-200 rounded-lg transform -rotate-12 shadow-lg flex items-center justify-center">
                  <Mail className="text-blue-600 w-12 h-12" />
               </div>
               <div className="absolute bottom-1/4 right-1/4 w-1/3 h-1/3 bg-green-200 rounded-lg transform rotate-12 shadow-lg flex items-center justify-center">
                  <Lock className="text-green-600 w-8 h-8" />
               </div>
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Fast, Efficient and Productive</h1>
          <p className="text-gray-500">Manage your scholarship applications with ease and track your progress in real-time.</p>
        </div>
      </div>

      {/* Right Column - Login Form */}
      <div className="flex-1 flex items-center justify-center p-6 md:p-12">
        <div className="w-full max-w-[480px] bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Sign In</h2>
            <p className="text-gray-500">Scholarship Management System</p>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <button className="flex items-center justify-center gap-2 py-3 px-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#EA4335" d="M12.48 10.92v3.28h7.84c-.24 1.84-.9 3.22-2.18 4.28-1.12.92-2.82 1.64-5.66 1.64-4.84 0-8.74-3.92-8.74-8.74s3.9-8.74 8.74-8.74c2.62 0 4.6 1.02 6.02 2.36l2.32-2.32C18.82 2.68 15.86 1.1 12.48 1.1 6.3 1.1 1.22 6.18 1.22 12.36s5.08 11.26 11.26 11.26c3.34 0 5.86-1.1 7.84-3.16 2.04-2.04 2.68-4.88 2.68-7.22 0-.68-.06-1.32-.18-1.92h-10.34z"/>
              </svg>
              <span className="text-sm font-medium text-gray-700">Google</span>
            </button>
            <button className="flex items-center justify-center gap-2 py-3 px-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
              <FaGithub className="w-5 h-5" />
              <span className="text-sm font-medium text-gray-700">Github</span>
            </button>
          </div>

          <div className="relative mb-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-400">Or with email</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="p-3 rounded-lg bg-red-50 text-red-600 text-sm">
                {error}
              </div>
            )}
            <div>
              <input
                type="email"
                placeholder="Email"
                required
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                required
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                onChange={(e) => setForm({ ...form, password: e.target.value })}
              />
              <button
                type="button"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            <div className="text-right">
              <Link href="#" className="text-sm font-medium text-blue-600 hover:underline">
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-[#00A3FF] text-white font-bold rounded-xl hover:bg-blue-600 transition-colors shadow-lg shadow-blue-200 disabled:opacity-70"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          <div className="mt-10 text-center">
            <p className="text-gray-500">
              Not a Member yet?{" "}
              <Link href="/signup" className="text-blue-600 font-bold hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
