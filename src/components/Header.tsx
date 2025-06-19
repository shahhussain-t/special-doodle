"use client";

import Link from "next/link";
import { FC } from "react";

const Header: FC = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-xl font-bold text-gray-900">Shah Hussain</div>
          <nav className="hidden md:flex space-x-8">
            <Link
              href="#about"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              About
            </Link>

            <Link
              href="#services"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Services
            </Link>

            <Link
              href="#contact"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
