import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaMoon, FaSun, FaSearch, FaTimes, FaUserCircle } from "react-icons/fa";
import GlobalSearchBar from "./GlobalSearchBar.jsx";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 🔥 login state
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  // useEffect(() => {
  //   const user = localStorage.getItem("user");
  //   setIsLoggedIn(!!user); // 🔥 if user exists, then logged in
  // }, []);


  useEffect(() => {
    const checkLogin = () => {
      const user = localStorage.getItem("user");
      setIsLoggedIn(!!user);
    };
  
    checkLogin(); // Initial check
  
    // ✅ Listen to login/logout events
    window.addEventListener("login", checkLogin);
    window.addEventListener("logout", checkLogin);
  
    return () => {
      window.removeEventListener("login", checkLogin);
      window.removeEventListener("logout", checkLogin);
    };
  }, []);
  

  // const handleLogout = () => {
  //   localStorage.removeItem("user");
  //   localStorage.removeItem("token");
  //   setIsLoggedIn(false);
  //   navigate("/login");
  // };

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  
    // ✅ Dispatch logout event
    window.dispatchEvent(new Event("logout"));
  
    navigate("/");
  };
  

  return (
    <nav className="fixed w-full top-0 z-50 shadow-md transition-colors duration-300 bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
      <div className="container mx-auto px-2 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-3">
        {/* Logo */}
        <NavLink
          to="/"
          className="text-xl sm:text-2xl font-bold tracking-wide rounded-md px-3 py-1 shrink-0 bg-cyan-500 text-white"
        >
          CodePan
        </NavLink>

        {/* Search */}
        <div className="flex-1 min-w-[180px] max-w-[500px] w-full px-2 hidden sm:block">
          <GlobalSearchBar />
        </div>

        {/* Mobile Search Toggle */}
        <div className="sm:hidden">
          <button
            className="p-1 rounded-full border border-gray-300 dark:border-gray-600"
            onClick={() => setShowMobileSearch(!showMobileSearch)}
          >
            {showMobileSearch ? (
              <FaTimes className="text-sm w-5 h-5" />
            ) : (
              <FaSearch className="text-sm w-5 h-5" />
            )}
          </button>
        </div>

        {/* Controls */}
        {!showMobileSearch && (
          <div className="flex items-center gap-2 sm:gap-4 shrink-0 sm:flex">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full border transition hover:scale-105 dark:border-gray-500 border-gray-300"
              title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {darkMode ? (
                <FaSun className="text-yellow-400 text-base" />
              ) : (
                <FaMoon className="text-base" />
              )}
            </button>

            {/* 🔥 If Logged In - Show Profile Icon */}   
            {isLoggedIn ? (
              <div className="relative group">
                <button className="p-1 text-2xl hover:scale-105 transition">
                  <FaUserCircle />
                </button>
                <div className="absolute right-0 top-10 w-40 p-3 bg-white dark:bg-gray-800 shadow-lg rounded-md hidden group-hover:block text-sm">
                  <NavLink to="/profile" className="block px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                    My Profile
                  </NavLink>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              // 🔥 If Not Logged In - Show Sign In Button
              <NavLink
                to="/login"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-1.5 text-sm rounded-full text-white font-semibold shadow-md transition hover:scale-105"
              >
                Sign In
              </NavLink>
            )}
          </div>
        )}
      </div>

      {/* Mobile Search Bar */}
      {showMobileSearch && (
        <div className="sm:hidden px-4 pb-2">
          <GlobalSearchBar />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
