import React, { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-white relative shadow p-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-40">
        <div className="flex justify-between items-center h-10 md:h-16">
          <div className="hidden md:flex items-left space-x-8">
            <a
              href="#home"
              className="text-teal-500 text-xl font-semibold hover:text-teal-600 font-amita "
            >
              Home
            </a>
            <a
              href="#home"
              className=" font-semibold text-xl text-gray-500 font-amita hover:text-teal-600"
            >
              pages
            </a>
            <a
              href="#menu"
              className=" font-semibold text-xl text-gray-500 font-amita hover:text-teal-600"
            >
              Our Menu
            </a>
          </div>

          <div className="absolute left-1/2 transform -translate-x-1/2 z-50">
            <div className="flex items-center space-x-2">
              <div className="text-center">
                <img
                  className="h-24 md:h-36 mt-10 md:mt-16 "
                  src="/logo.png"
                  alt="Logo"
                />
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#blog"
              className=" font-semibold text-xl text-gray-500 font-amita hover:text-teal-600"
            >
              Blog
            </a>
            <a
              href="#shop"
              className=" font-semibold text-xl text-gray-500 font-amita hover:text-teal-600"
            >
              Shop
            </a>
            <a
              href="#contact"
              className=" font-semibold text-xl text-gray-500 font-amita hover:text-teal-600"
            >
              Contact Us
            </a>
          </div>

          <div className="md:hidden flex items-center ml-auto">
            <button
              onClick={toggleMenu}
              className="text-teal-500 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden flex flex-col items-center space-y-4 w-1/2 mt-32">
            <a
              href="#home"
              className="text-teal-500 font-semibold hover:text-teal-600"
            >
              Home
            </a>
            <a
              href="#pages"
              className="text-gray-700 hover:text-teal-600"
              style={{ fontFamily: "'Amrit', sans-serif", fontWeight: 500 }}
            >
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
        )}
      </div>
    </header>
  );
};

export default Header;
