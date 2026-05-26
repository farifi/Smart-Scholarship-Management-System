"use client";

import { useMemo, useState } from "react";
import {
  Search,
  Plus,
  Pencil,
  Trash2,
  Filter,
  Users,
} from "lucide-react";

type User = {
  id: number;
  fullName: string;
  email: string;
  role: "ADMIN" | "REVIEWER" | "APPLICANT";
  status: "ACTIVE" | "INACTIVE";
};

export default function ManageUsersPage() {
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("ALL");

  const [users] = useState<User[]>([
    {
      id: 1,
      fullName: "John Doe",
      email: "john@example.com",
      role: "APPLICANT",
      status: "ACTIVE",
    },
    {
      id: 2,
      fullName: "Sarah Lee",
      email: "sarah@example.com",
      role: "REVIEWER",
      status: "ACTIVE",
    },
    {
      id: 3,
      fullName: "Admin User",
      email: "admin@example.com",
      role: "ADMIN",
      status: "INACTIVE",
    },
  ]);

  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      const matchesSearch =
        user.fullName.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase());

      const matchesRole =
        roleFilter === "ALL" || user.role === roleFilter;

      return matchesSearch && matchesRole;
    });
  }, [search, roleFilter, users]);

  return (
    <div className="p-8">

      {/* HEADER */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Manage Users
          </h1>

          <p className="text-gray-500 mt-1">
            Create, update and manage system users
          </p>
        </div>

        <button className="flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-xl hover:bg-blue-700 transition-all">
          <Plus size={18} />
          Add User
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
              placeholder="Search users..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* FILTER */}
          <div className="relative">
            <Filter
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <select
              value={roleFilter}
              onChange={(e) => setRoleFilter(e.target.value)}
              className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
            >
              <option value="ALL">All Roles</option>
              <option value="ADMIN">Admin</option>
              <option value="REVIEWER">Reviewer</option>
              <option value="APPLICANT">Applicant</option>
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
                  Full Name
                </th>

                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">
                  Email
                </th>

                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">
                  Role
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
              {filteredUsers.map((user) => (
                <tr
                  key={user.id}
                  className="border-b border-gray-100 hover:bg-gray-50"
                >
                  <td className="px-6 py-4 font-medium text-gray-900">
                    {user.fullName}
                  </td>

                  <td className="px-6 py-4 text-gray-600">
                    {user.email}
                  </td>

                  <td className="px-6 py-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-700">
                      {user.role}
                    </span>
                  </td>

                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        user.status === "ACTIVE"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {user.status}
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

              {filteredUsers.length === 0 && (
                <tr>
                  <td
                    colSpan={5}
                    className="text-center py-12 text-gray-400"
                  >
                    <div className="flex flex-col items-center gap-3">
                      <Users size={40} />
                      No users found
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