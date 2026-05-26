"use client";

import { useState } from "react";
import {
  GraduationCap,
  Trophy,
  Briefcase,
  Users,
  FileText,
  Save,
  School,
  Building2,
  BookOpen,
} from "lucide-react";

export default function ApplicantProfilePage() {
  const [formData, setFormData] = useState({
    cgpa: "",
    spmResult: "",

    primarySchool: "",
    secondarySchool: "",

    currentUniversity: "",
    universityType: "",
    studyLevel: "",
    course: "",
    enrollmentStatus: "",

    achievements: "",
    experience: "",
    leadership: "",
    skills: "",
    extracurricular: "",
    personalStatement: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement |
      HTMLTextAreaElement |
      HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">

      {/* HEADER */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Applicant Profile
        </h1>

        <p className="text-gray-500 mt-1">
          Complete your profile for AI-powered scholarship matching
        </p>
      </div>

      {/* PROFILE PICTURE */}
    <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-6 shadow-sm">

    <div className="flex items-center gap-6">

        {/* IMAGE */}
        <div className="relative">
        <img
            src="https://i.pravatar.cc/150?img=12"
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover border border-gray-200"
        />

        <label className="absolute bottom-0 right-0 bg-green-600 text-white text-xs px-2 py-1 rounded-full cursor-pointer hover:bg-green-700 transition">
            Edit

            <input
            type="file"
            className="hidden"
            />
        </label>
        </div>

        {/* INFO */}
        <div>
        <h2 className="text-xl font-semibold text-gray-900">
            Applicant Profile Photo
        </h2>

        <p className="text-sm text-gray-500 mt-1">
            Upload a professional profile picture for your scholarship applications.
        </p>

        <p className="text-xs text-gray-400 mt-2">
            JPG, PNG or JPEG • Max 5MB
        </p>
        </div>

    </div>

    </div>

      {/* MAIN FORM */}
      <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">

        <div className="grid md:grid-cols-2 gap-6">

          {/* PRIMARY SCHOOL */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
              <School size={16} />
              Primary School
            </label>

            <input
              type="text"
              name="primarySchool"
              value={formData.primarySchool}
              onChange={handleChange}
              placeholder="e.g. SK Bandar Utama"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* SECONDARY SCHOOL */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
              <School size={16} />
              Secondary School
            </label>

            <input
              type="text"
              name="secondarySchool"
              value={formData.secondarySchool}
              onChange={handleChange}
              placeholder="e.g. SMK Damansara Utama"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* UNIVERSITY */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
              <Building2 size={16} />
              Current / Applied University
            </label>

            <input
              type="text"
              name="currentUniversity"
              value={formData.currentUniversity}
              onChange={handleChange}
              placeholder="e.g. Universiti Malaya"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* UNIVERSITY TYPE */}
          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">
              University Type
            </label>

            <select
              name="universityType"
              value={formData.universityType}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="">Select University Type</option>
              <option value="PUBLIC">Public University</option>
              <option value="PRIVATE">Private University</option>
              <option value="POLYTECHNIC">Polytechnic</option>
              <option value="COLLEGE">College</option>
            </select>
          </div>

          {/* QUALIFICATION */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
              <GraduationCap size={16} />
              Current Qualification
            </label>

            <select
              name="studyLevel"
              value={formData.studyLevel}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="">Select Qualification</option>

              <option value="FOUNDATION">Foundation</option>
              <option value="MATRICULATION">Matriculation</option>
              <option value="DIPLOMA">Diploma</option>
              <option value="DEGREE">Degree</option>
              <option value="MASTER">Master</option>

              <option value="STPM">STPM</option>
              <option value="STAM">STAM</option>

              <option value="POLITEKNIK">Politeknik</option>
              <option value="TVET">TVET</option>

              <option value="A_LEVEL">A-Level</option>
              <option value="IB">IB</option>
            </select>
          </div>

          {/* COURSE */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
              <BookOpen size={16} />
              Course / Program
            </label>

            <input
              type="text"
              name="course"
              value={formData.course}
              onChange={handleChange}
              placeholder="e.g. Computer Science"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* ENROLLMENT STATUS */}
          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">
              Enrollment Status
            </label>

            <select
              name="enrollmentStatus"
              value={formData.enrollmentStatus}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="">Select Status</option>

              <option value="CURRENTLY_ENROLLED">
                Currently Enrolled
              </option>

              <option value="WAITING_OFFER">
                Waiting for Offer
              </option>

              <option value="GRADUATED">
                Graduated
              </option>
            </select>
          </div>

          {/* CGPA */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
              <GraduationCap size={16} />
              Current CGPA
            </label>

            <input
              type="text"
              name="cgpa"
              value={formData.cgpa}
              onChange={handleChange}
              placeholder="e.g. 3.85"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* SPM RESULT */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
              <FileText size={16} />
              SPM Result
            </label>

            <input
              type="text"
              name="spmResult"
              value={formData.spmResult}
              onChange={handleChange}
              placeholder="e.g. 8A+ 1A"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* ACHIEVEMENTS */}
          <div className="md:col-span-2">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
              <Trophy size={16} />
              Achievements & Awards
            </label>

            <textarea
              name="achievements"
              value={formData.achievements}
              onChange={handleChange}
              rows={4}
              placeholder="Awards, competitions, dean list, certifications..."
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
            />
          </div>

          {/* EXPERIENCE */}
          <div className="md:col-span-2">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
              <Briefcase size={16} />
              Experience
            </label>

            <textarea
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              rows={4}
              placeholder="Internships, volunteering, freelance work..."
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
            />
          </div>

          {/* LEADERSHIP */}
          <div className="md:col-span-2">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
              <Users size={16} />
              Leadership Experience
            </label>

            <textarea
              name="leadership"
              value={formData.leadership}
              onChange={handleChange}
              rows={4}
              placeholder="Committee positions, club leadership, organizing events..."
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
            />
          </div>

          {/* SKILLS */}
          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">
              Skills
            </label>

            <input
              type="text"
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              placeholder="e.g. Python, UI/UX, Public Speaking"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* EXTRACURRICULAR */}
          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">
              Extracurricular Activities
            </label>

            <input
              type="text"
              name="extracurricular"
              value={formData.extracurricular}
              onChange={handleChange}
              placeholder="Sports, clubs, volunteering..."
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* PERSONAL STATEMENT */}
          <div className="md:col-span-2">
            <label className="text-sm font-medium text-gray-700 mb-2 block">
              Personal Statement
            </label>

            <textarea
              name="personalStatement"
              value={formData.personalStatement}
              onChange={handleChange}
              rows={6}
              placeholder="Tell us about yourself, your goals, and aspirations..."
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
            />
          </div>

        </div>

        {/* ACTIONS */}
        <div className="flex justify-end mt-8">
          <button className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition">
            <Save size={18} />
            Save Profile
          </button>
        </div>

      </div>

    </div>
  );
}