"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";

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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        const role = data.role;
        if (role === "ADMIN") router.push("/admin/dashboard");
        else if (role === "REVIEWER") router.push("/reviewer/dashboard");
        else router.push("/dashboard");
      } else {
        setError(data.message || "Login failed");
      }
    } catch {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex bg-[#FAFAFA] font-sans antialiased text-[#2D3748]">
      {/* LEFT SIDE - Info & Graphics */}
      <div className="hidden md:flex md:w-1/2 flex-col justify-between p-12 bg-white relative">
        {/* Home Navigation */}
        <div>
          <Link href="/" className="inline-flex items-center text-sm font-medium text-[#1A73E8] hover:underline">
            <span className="mr-2">←</span> Home
          </Link>
        </div>

        {/* Central Graphic Section */}
        <div className="flex flex-col items-center justify-center flex-grow max-w-md mx-auto text-center space-y-8">
          <div className="relative w-64 h-64 flex items-center justify-center">
            {/* Soft background blue circle */}
            <div className="absolute w-60 h-60 rounded-full bg-[#EBF4FF]" />
            {/* Floating Cards Graphic */}
            <div className="absolute w-28 h-32 rounded-2xl bg-[#A0C4FF] transform -rotate-12 shadow-sm translate-x-[-15px] translate-y-[-10px] opacity-80" />
            <div className="absolute w-24 h-24 rounded-xl bg-[#98EECC] transform rotate-12 shadow-md flex items-center justify-center translate-x-[15px] translate-y-[15px]">
              {/* Padlock Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#00875A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-3xl font-bold text-[#1E293B]">Fast, Efficient and Productive</h2>
            <p className="text-sm leading-relaxed text-[#64748B]">
              Manage your scholarship applications with ease and track your progress in real-time.
            </p>
          </div>
        </div>

        {/* Subtle footer trademark space or logo alignment */}
        <div className="text-xs text-gray-400"></div>
      </div>

      {/* RIGHT SIDE - Authentication Container */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-12">
        <div className="w-full max-w-lg bg-white p-10 rounded-[24px] border border-[#E2E8F0] shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col items-center">
          
          <div className="text-center w-full mb-6">
            <h1 className="text-3xl font-bold text-[#1E293B] mb-1">Sign In</h1>
            <p className="text-sm font-medium text-[#64748B]">Scholarship Management System</p>
          </div>

          {/* Social Logins */}
          <div className="grid grid-cols-2 gap-4 w-full mb-6">
            <button type="button" className="flex items-center justify-center gap-2 border border-[#E2E8F0] hover:bg-slate-50 transition p-2.5 rounded-xl text-sm font-medium text-[#475569]">
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path fill="#EA4335" d="M12.24 10.285V14.4h6.887c-.275 1.565-1.88 4.604-6.887 4.604-4.33 0-7.866-3.577-7.866-8s3.536-8 7.866-8c2.46 0 4.105 1.025 5.047 1.926l3.227-3.227C18.214 1.714 15.48 1 12.24 1 5.48 1 0 6.48 0 13.2s5.48 12.2 12.24 12.2c7.05 0 11.75-4.96 11.75-11.96 0-.814-.08-1.43-.19-1.955H12.24z"/>
              </svg>
              Google
            </button>
            <button type="button" className="flex items-center justify-center gap-2 border border-[#E2E8F0] hover:bg-slate-50 transition p-2.5 rounded-xl text-sm font-medium text-[#475569]">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.483 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.008.069-.008 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .269.18.579.688.481C19.137 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
              Github
            </button>
          </div>

          {/* Form Divider */}
          <div className="relative flex py-2 items-center w-full mb-5">
            <div className="flex-grow border-t border-[#E2E8F0]"></div>
            <span className="flex-shrink mx-4 text-xs text-[#94A3B8] tracking-wide">Or with email</span>
            <div className="flex-grow border-t border-[#E2E8F0]"></div>
          </div>

          {error && (
            <div className="w-full bg-red-50 text-red-600 p-3 rounded-xl mb-4 text-sm border border-red-100">
              {error}
            </div>
          )}

          {/* Form Inputs */}
          <form onSubmit={handleSubmit} className="w-full space-y-4">
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0091FF] focus:bg-white transition"
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
            </div>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full px-4 py-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0091FF] focus:bg-white transition"
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                required
              />
              <button
                type="button"
                className="absolute right-3.5 top-3.5 text-[#94A3B8] hover:text-[#64748B]"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {/* Forgot Password Link */}
            <div className="flex justify-end w-full">
              <Link href="/forgot-password" className="text-xs font-semibold text-[#1A73E8] hover:underline">
                Forgot Password?
              </Link>
            </div>

            {/* Action Submit Button */}
            <button
              disabled={loading}
              className="w-full bg-[#0091FF] text-white py-3 rounded-xl text-sm font-semibold shadow-[0_4px_12px_rgba(0,145,255,0.24)] hover:bg-[#007FE3] transition disabled:opacity-70 disabled:cursor-not-allowed mt-2"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          {/* Footer Navigation Switch */}
          <p className="text-sm mt-8 text-[#64748B]">
            Not a Member yet?{" "}
            <Link href="/signup" className="text-[#0091FF] font-semibold hover:underline">
              Sign up
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}