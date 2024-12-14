import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-800">
              誰敢跟我桌隊
            </Link>
          </div>
          {/* NavLink */}
          <div className="hidden md:flex space-x-4 items-center">
            <Link href="/about" className="text-gray-600 hover:text-blue-500">
              About
            </Link>
            <Link
              href="/services"
              className="text-gray-600 hover:text-blue-500"
            >
              Services
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-blue-500">
              Contact
            </Link>
            <Link href="/login" className="text-gray-600 hover:text-blue-500">
              Login
            </Link>
            <Link
              href="/competition"
              className="text-gray-600 hover:text-blue-500"
            >
              competition
            </Link>
          </div>
          <div className="flex items-center">
            <Link
              href="/login"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
