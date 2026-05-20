import Link from "next/link";
import { GraduationCap, ArrowRight, CheckCircle, Award, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white">
            <GraduationCap size={24} />
          </div>
          <span className="text-xl font-bold text-gray-900 tracking-tight">ScholarAI</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <Link href="#" className="text-sm font-medium text-gray-500 hover:text-gray-900">Scholarships</Link>
          <Link href="#" className="text-sm font-medium text-gray-500 hover:text-gray-900">How it works</Link>
          <Link href="#" className="text-sm font-medium text-gray-500 hover:text-gray-900">About</Link>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/login" className="text-sm font-bold text-gray-900 hover:text-blue-600 transition-colors">Sign In</Link>
          <Link href="/signup" className="bg-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-100">
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-8 py-20 md:py-32 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-xs font-bold mb-8 animate-bounce">
          <Award size={14} />
          <span>New scholarships available for 2024</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight max-w-4xl mb-8">
          Unlock Your Future with <span className="text-blue-600">Smart Scholarships</span>
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl mb-12 leading-relaxed">
          The most advanced platform to find, apply, and manage your scholarship journey. 
          Trusted by thousands of students and institutions worldwide.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/signup" className="bg-blue-600 text-white px-10 py-4 rounded-2xl text-lg font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 flex items-center gap-2">
            Apply Now <ArrowRight size={20} />
          </Link>
          <Link href="/admin/login" className="bg-white text-gray-900 border border-gray-200 px-10 py-4 rounded-2xl text-lg font-bold hover:bg-gray-50 transition-all flex items-center gap-2">
            Admin Portal
          </Link>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-32 w-full text-left">
          <div className="space-y-4">
            <div className="w-12 h-12 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center">
              <CheckCircle size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Easy Applications</h3>
            <p className="text-gray-500">Apply to multiple scholarships with a single profile and automated data matching.</p>
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center">
              <Users size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Expert Reviewers</h3>
            <p className="text-gray-500">Get your applications reviewed by industry professionals and academic experts.</p>
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center">
              <Award size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Verified Results</h3>
            <p className="text-gray-500">Transparent selection process with real-time tracking of your application status.</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-12 px-8 mt-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
              <GraduationCap size={18} />
            </div>
            <span className="text-lg font-bold text-gray-900">ScholarAI</span>
          </div>
          <p className="text-gray-400 text-sm">© 2026 Scholarship Management System. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="text-gray-400 hover:text-gray-600 text-sm">Privacy Policy</Link>
            <Link href="#" className="text-gray-400 hover:text-gray-600 text-sm">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

