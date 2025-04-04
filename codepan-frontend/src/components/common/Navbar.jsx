import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <nav
      className={`p-2 sm:p-3 shadow-md fixed w-full top-0 z-50 transition-all ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo - Smaller on Mobile */}
        <NavLink to="/" className="text-base sm:text-lg md:text-2xl font-bold tracking-wide">
          <span
            className={`px-2 sm:px-3 py-0.5 sm:py-1 rounded-md transition-all ${
              darkMode ? "bg-gray-700 text-white" : "bg-cyan-500 text-white"
            }`}
          >
            CodePan
          </span>
        </NavLink>

        {/* Search Bar - Scales Responsively */}
        {/* Search Bar - Scales Responsively & Aligns Better */}
<div className="relative flex items-center w-32 sm:w-40 md:w-56 lg:w-64">
  <input
    type="text"
    placeholder="Search..."
    className="w-full px-2 sm:px-3 py-1 text-xs sm:text-sm md:text-base rounded-full border outline-none bg-gray-200 dark:bg-gray-700 dark:text-white transition-all"
  />
  <button className="absolute right-2 top-[50%] -translate-y-1/2 text-gray-500 text-xs sm:text-sm md:text-base">
    🔍
  </button>
</div>


        {/* Right Side Controls */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          {/* Dark/Light Mode Toggle - Smaller on Mobile */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-2 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm md:text-base rounded-full border dark:border-gray-500 border-gray-300 transition-all hover:scale-105"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          {/* Sign In Button - Smaller on Mobile */}
          <NavLink
            to="/login"
            className="bg-gradient-to-r from-cyan-500 to-blue-500 px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm md:text-base rounded-full text-white font-semibold shadow-md transition-all hover:scale-105"
          >
            Sign In
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
