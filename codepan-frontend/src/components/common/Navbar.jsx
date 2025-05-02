import React, { useState, useEffect, useRef, useCallback } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  FaMoon, FaSun, FaSearch, FaTimes, FaUserCircle, FaBars
} from "react-icons/fa";
import GlobalSearchBar from "./GlobalSearchBar.jsx";

const getInitialDarkMode = () => {
  const saved = localStorage.getItem("darkMode");
  return saved !== null ? saved === "true" : window.matchMedia("(prefers-color-scheme: dark)").matches;
};

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(() => getInitialDarkMode());
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const navigate = useNavigate();
  const profileRef = useRef();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  useEffect(() => {
    const checkLoginStatus = () => setIsLoggedIn(!!localStorage.getItem("user"));
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
    const handleClickOutside = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setShowProfileDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavLinkClick = () => {
    setShowMobileMenu(false);
    setShowMobileSearch(false);
  };

  return (
    <nav className="fixed w-full top-0 z-50 shadow-md bg-white dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <div className="container mx-auto flex items-center justify-between px-4 py-3 md:px-8">
        
        {/* Logo */}
        <NavLink
          to="/"
          onClick={handleNavLinkClick}
          className="text-xl sm:text-2xl font-bold tracking-wide rounded-md px-3 py-1 bg-cyan-500 text-white dark:bg-cyan-600"
        >
          CodePan
        </NavLink>

        {/* Desktop Search */}
        <div className="hidden sm:flex flex-1 justify-center max-w-md px-4">
          <GlobalSearchBar />
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-3">
          
          {/* Mobile Search Toggle */}
          <button
            onClick={() => setShowMobileSearch((prev) => !prev)}
            className="sm:hidden p-2 rounded-full border dark:border-gray-600 border-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
            aria-label="Toggle Search"
            aria-expanded={showMobileSearch}
          >
            {showMobileSearch ? <FaTimes /> : <FaSearch />}
          </button>

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode((prev) => !prev)}
            className="p-2 rounded-full border dark:border-gray-600 border-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
            aria-label="Toggle Theme"
          >
            {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon />}
          </button>

          {/* Auth Section */}
          {isLoggedIn ? (
            <div ref={profileRef} className="relative">
              <button
                onClick={() => setShowProfileDropdown((prev) => !prev)}
                className="p-2 text-2xl rounded-full hover:scale-110 transition"
                aria-haspopup="true"
                aria-expanded={showProfileDropdown}
                aria-label="Profile Menu"
              >
                <FaUserCircle />
              </button>

              {showProfileDropdown && (
                <div
                  className="absolute right-0 mt-2 w-44 bg-white dark:bg-gray-800 shadow-lg rounded-md py-2 text-sm"
                  role="menu"
                >
                  <NavLink
                    to="/profile"
                    onClick={() => {
                      setShowProfileDropdown(false);
                      handleNavLinkClick();
                    }}
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                    role="menuitem"
                  >
                    My Profile
                  </NavLink>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                    role="menuitem"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <NavLink
              to="/login"
              onClick={handleNavLinkClick}
              className="hidden sm:block bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-cyan-600 dark:to-blue-600 px-4 py-1.5 rounded-full text-white font-semibold hover:scale-105 transition"
            >
              Sign In
            </NavLink>
          )}

          {/* Hamburger Menu */}
          <button
            onClick={() => setShowMobileMenu((prev) => !prev)}
            className="sm:hidden p-2 rounded-full border dark:border-gray-600 border-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
            aria-label="Toggle Menu"
          >
            <FaBars />
          </button>
        </div>
      </div>

      {/* Mobile Search */}
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
              onClick={handleNavLinkClick}
              className="block w-full bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-cyan-600 dark:to-blue-600 px-4 py-2 rounded-full text-white font-semibold text-center hover:scale-105 transition"
            >
              Sign In
            </NavLink>
          ) : (
            <>
              <NavLink
                to="/profile"
                onClick={handleNavLinkClick}
                className="block px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                My Profile
              </NavLink>
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
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
