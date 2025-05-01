import React, { useState, useEffect, useRef, useCallback } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaMoon, FaSun, FaSearch, FaTimes, FaUserCircle, FaBars } from "react-icons/fa";
import GlobalSearchBar from "./GlobalSearchBar.jsx";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("darkMode") === "true");
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const navigate = useNavigate();
  const profileRef = useRef();

  // Apply dark mode to <html> based on state
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  // Check login status
  useEffect(() => {
    const checkLoginStatus = () => {
      const user = localStorage.getItem("user");
      setIsLoggedIn(!!user);
    };

    checkLoginStatus();
    window.addEventListener("login", checkLoginStatus);
    window.addEventListener("logout", checkLoginStatus);

    return () => {
      window.removeEventListener("login", checkLoginStatus);
      window.removeEventListener("logout", checkLoginStatus);
    };
  }, []);

  const handleLogout = useCallback(() => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    window.dispatchEvent(new Event("logout"));
    navigate("/");
  }, [navigate]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowProfileDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="fixed w-full top-0 z-50 shadow-md transition-colors duration-300 bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-10 py-3">

        {/* Logo */}
        <NavLink
          to="/"
          className="text-xl sm:text-2xl font-bold tracking-wide rounded-md px-3 py-1 bg-cyan-500 text-white dark:bg-cyan-600"
        >
          CodePan
        </NavLink>

        {/* Desktop Search */}
        <div className="hidden sm:block flex-1 max-w-md px-4">
          <GlobalSearchBar />
        </div>

        {/* Right Side Controls */}
        <div className="flex items-center gap-2 sm:gap-4">

          {/* Mobile Search Toggle */}
          <button
            onClick={() => setShowMobileSearch(prev => !prev)}
            className="p-2 rounded-full border sm:hidden border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
            aria-label="Toggle Search"
          >
            {showMobileSearch ? <FaTimes /> : <FaSearch />}
          </button>

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(prev => !prev)}
            className="p-2 rounded-full border border-gray-300 dark:border-gray-600 transition hover:scale-110 hover:bg-gray-100 dark:hover:bg-gray-700"
            aria-label={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon />}
          </button>

          {/* Profile or Sign In */}
          {isLoggedIn ? (
            <div ref={profileRef} className="relative">
              <button
                onClick={() => setShowProfileDropdown(prev => !prev)}
                className="p-2 rounded-full hover:scale-110 transition text-2xl"
                aria-label="User Menu"
              >
                <FaUserCircle />
              </button>

              {showProfileDropdown && (
                <div className="absolute right-0 mt-2 w-44 bg-white dark:bg-gray-800 shadow-md rounded-md py-2 text-sm backdrop-blur-md transition-all">
                  <NavLink
                    to="/profile"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                    onClick={() => setShowProfileDropdown(false)}
                  >
                    My Profile
                  </NavLink>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <NavLink
              to="/login"
              className="hidden sm:block bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-cyan-600 dark:to-blue-600 px-4 py-1.5 rounded-full text-white font-semibold shadow-md transition hover:scale-105"
            >
              Sign In
            </NavLink>
          )}

          {/* Mobile Hamburger Menu */}
          <button
            onClick={() => setShowMobileMenu(prev => !prev)}
            className="p-2 rounded-full sm:hidden border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
            aria-label="Toggle Menu"
          >
            <FaBars />
          </button>

        </div>
      </div>

      {/* Mobile Search Bar */}
      {showMobileSearch && (
        <div className="sm:hidden px-4 py-2">
          <GlobalSearchBar autoFocus />
        </div>
      )}

      {/* Mobile Menu */}
      {showMobileMenu && (
        <div className="sm:hidden px-4 pb-4 space-y-3">
          {!isLoggedIn ? (
            <NavLink
              to="/login"
              className="block w-full bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-cyan-600 dark:to-blue-600 px-4 py-2 rounded-full text-white font-semibold text-center hover:scale-105 transition"
              onClick={() => setShowMobileMenu(false)}
            >
              Sign In
            </NavLink>
          ) : (
            <>
              <NavLink
                to="/profile"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
                onClick={() => setShowMobileMenu(false)}
              >
                My Profile
              </NavLink>
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
              >
                Logout
              </button>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
