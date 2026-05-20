"use client";

import { Search, BarChart2, Bell, Sun, User, Maximize } from "lucide-react";

export default function Navbar() {
  return (
    <div className="bg-white px-8 py-4 flex justify-between items-center border-b border-gray-100">
      <div className="flex items-center gap-4">
        <button className="text-gray-400 hover:text-gray-600">
           <Search size={20} />
        </button>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-4 text-gray-400">
           <button className="hover:text-gray-600"><BarChart2 size={20} /></button>
           <button className="hover:text-gray-600"><Maximize size={20} /></button>
           <div className="relative">
              <button className="hover:text-gray-600"><Bell size={20} /></button>
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full border-2 border-white"></span>
           </div>
           <button className="hover:text-gray-600"><Sun size={20} /></button>
        </div>

        <div className="flex items-center gap-3 pl-6 border-l border-gray-100">
          <div className="w-10 h-10 rounded-xl bg-gray-100 overflow-hidden border border-gray-200">
             <img src="https://i.pravatar.cc/150?u=admin" alt="User" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}
