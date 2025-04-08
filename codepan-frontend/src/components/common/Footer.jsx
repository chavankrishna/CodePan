import React from "react";
import { NavLink } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-10 py-6 px-4 sm:px-8 transition-colors duration-300 bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-white">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        {/* Logo */}    
        <NavLink
          to="/"
          className="text-lg font-bold px-3 py-1 rounded-md bg-cyan-500 text-white dark:bg-cyan-500 "
        >
          CodePan
        </NavLink>

        {/* Navigation Links */}
        <div className="flex gap-4 text-sm">
          <NavLink to="/about" className="hover:underline">
            About
          </NavLink>
          <NavLink to="/blogs" className="hover:underline">
            Blogs
          </NavLink>
          <NavLink to="/contact" className="hover:underline">
            Contact
          </NavLink>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 text-lg">
          <a
            href="https://github.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-500 transition"
            title="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-500 transition"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:youremail@example.com"
            className="hover:text-cyan-500 transition"
            title="Email"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-4 text-center text-xs sm:text-sm opacity-70">
        &copy; {new Date().getFullYear()} CodePan. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
