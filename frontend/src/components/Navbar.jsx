import { useState } from "react";
import { FaShieldAlt } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full relative max-w-7xl m-auto  text-gray-900 font-main ">

   <div className="absolute bottom-0 inset-x-0 bg-linear-to-r from-transparent via-green-400 to-transparent h-px ">

   </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navbar Main Row */}
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img className="w-8 h-8" src="/logo .png" alt="" />
            <h1 className="text-xl font-bold tracking-wide">
              SafeDesk
            </h1>
          </div>

        
          <div className="hidden md:flex items-center gap-8 font-medium">
            <a href="#report" className="hover:text-gray-950 transition">
              Your Rights
            </a>
            <a href="#evidence" className="hover:text-purple-300 transition">
              Evidence Vault
            </a>
            <a href="#chat" className="hover:text-purple-300 transition">
              Anonymous Chat
            </a>
            <a href="#dashboard" className="hover:text-purple-300 transition">
              Dashboard
            </a>
          </div>

          
          <div className="hidden md:block">
            <button className="bg-linear-to-t from-green-400 to-green-600 py-3 px-5 tracking-wider rounded-full font-normal shadow hover:bg-purple-200 transition">
              Report Safely
            </button>
          </div>

       
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-3xl text-gray-950"
            >
              {isOpen ? <HiX /> : <HiMenuAlt3 />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden bg-indigo-900 rounded-xl p-4 space-y-4">
            <a
              href="#report"
              className="block hover:text-purple-300 transition"
            >
              Report
            </a>
            <a
              href="#evidence"
              className="block hover:text-purple-300 transition"
            >
            Your Rights 
            </a>
            <a
              href="#chat"
              className="block hover:text-purple-300 transition"
            >
              Anonymous Chat
            </a>
            <a
              href="#dashboard"
              className="block hover:text-purple-300 transition"
            >
              Dashboard
            </a>

            {/* Quick Hide Button (Mobile) */}
            <button className="w-full bg-white text-blue-900 py-2 rounded-xl font-semibold shadow hover:bg-purple-200 transition">
              Quick Hide
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
