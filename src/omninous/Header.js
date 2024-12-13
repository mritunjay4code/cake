// import React from "react";

// const Header = () => {
//   return (
//     <header className="bg-white relative shadow p-3">
//       {/* Navigation */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-40">
//         <div className="flex justify-between items-center h-16">
//           {/* Left Links */}
//           <div className="flex items-center space-x-8">
//             <a
//               href="#home"
//               className="text-teal-500 font-semibold hover:text-teal-600"
//             >
//               Home
//             </a>
//             <a
//               href="#pages"
//               className="text-gray-700 hover:text-teal-600"
//               style={{ fontFamily: "'Amrit', sans-serif", fontWeight: 500 }}
//             >
//               Pages
//             </a>
//             <a href="#menu" className="text-gray-700 hover:text-teal-600">
//               Our Menu
//             </a>
//           </div>

//           {/* Logo */}
//           <div className="absolute left-1/2 transform -translate-x-1/2 z-50">
//             <div className="flex items-center space-x-2">
//               <div className="text-center">
//                 <img className="h-36 mt-16" src="/logo.png" />
//               </div>
//             </div>
//           </div>

//           {/* Right Links */}
//           <div className="flex items-center space-x-8">
//             <a href="#blog" className="text-gray-700 hover:text-teal-600">
//               Blog
//             </a>
//             <a href="#shop" className="text-gray-700 hover:text-teal-600">
//               Shop
//             </a>
//             <a href="#contact" className="text-gray-700 hover:text-teal-600">
//               Contact Us
//             </a>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;
import React, { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-white relative shadow p-3">
      {/* Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-40">
        <div className="flex justify-between items-center h-16">
          {/* Left Links (Hidden on mobile, visible on md and up) */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-teal-500 font-semibold hover:text-teal-600 font-poppins"
            >
              Home
            </a>
            <a
              href="#pages"
              className="text-gray-700 hover:text-teal-600 font-poppins"
              style={{ fontFamily: "'Amrit', sans-serif", fontWeight: 500 }}
            >
              Pages
            </a>
            <a
              href="#menu"
              className="text-gray-700 hover:text-teal-600 font-poppins"
            >
              Our Menu
            </a>
          </div>

          {/* Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2 z-50">
            <div className="flex items-center space-x-2">
              <div className="text-center">
                <img className="h-36 mt-16" src="/logo.png" alt="Logo" />
              </div>
            </div>
          </div>

          {/* Right Links (Hidden on mobile, visible on md and up) */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#blog"
              className="text-gray-700 hover:text-teal-600 font-poppins"
            >
              Blog
            </a>
            <a
              href="#shop"
              className="text-gray-700 hover:text-teal-600 font-poppins"
            >
              Shop
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-teal-600 font-poppins"
            >
              Contact Us
            </a>
          </div>

          {/* Hamburger Menu Button (Visible on mobile, aligned to right) */}
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

        {/* Mobile Menu (Toggle visibility based on state) */}
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
