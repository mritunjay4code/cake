import React, { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-40">
        <div className="flex justify-between items-center h-16">
          {/* Hamburger Icon for Mobile */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-700 hover:text-teal-600 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>

          {/* Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2 z-50">
            <img className="h-10" src="/logo.png" alt="Logo" />
          </div>

          {/* Navigation Links - Desktop */}
          <div className="hidden lg:flex items-center space-x-8">
            <a
              href="#home"
              className="text-teal-500 font-semibold hover:text-teal-600"
            >
              Home
            </a>
            <a href="#pages" className="text-gray-700 hover:text-teal-600">
              Pages
            </a>
            <a href="#menu" className="text-gray-700 hover:text-teal-600">
              Our Menu
            </a>
            <a href="#blog" className="text-gray-700 hover:text-teal-600">
              Blog
            </a>
            <a href="#shop" className="text-gray-700 hover:text-teal-600">
              Shop
            </a>
            <a href="#contact" className="text-gray-700 hover:text-teal-600">
              Contact Us
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden mt-2">
            <div className="bg-white shadow-md rounded-lg py-2">
              <a
                href="#home"
                className="block px-4 py-2 text-teal-500 font-semibold hover:bg-gray-100"
              >
                Home
              </a>
              <a
                href="#pages"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Pages
              </a>
              <a
                href="#menu"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Our Menu
              </a>
              <a
                href="#blog"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Blog
              </a>
              <a
                href="#shop"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Shop
              </a>
              <a
                href="#contact"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Contact Us
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
