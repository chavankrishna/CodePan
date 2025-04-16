import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [credentials, setCredentials] = useState({
    emailOrUsername: "",
    password: "",
    rememberMe: false,
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setCredentials((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/signin`, {      
        method: "POST",                                   
        headers: { "Content-Type": "application/json" },         
        credentials: "include", // to include cookies (token)        
        body: JSON.stringify({       
          emailOrUsername: credentials.emailOrUsername,
          password: credentials.password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Optional: store token in localStorage (if needed)
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));

         // ✅ Dispatch custom event
         window.dispatchEvent(new Event("login"));

        // ✅ Redirect to dashboard or home page
        navigate("/");
      } else {
        setError(data.message || "Login failed");
      }
    } catch (err) {
      console.error("Login Error:", err);
      setError("Server error. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen py-32 flex items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Sign In</h1>

        {error && (
          <p className="text-sm text-red-500 mb-4 text-center">{error}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email or Username */}
          <div className="text-sm">
            <label htmlFor="emailOrUsername" className="block mb-1 font-medium">
              Email or Username
            </label>
            <input
              type="text"
              id="emailOrUsername"
              name="emailOrUsername"
              value={credentials.emailOrUsername}
              onChange={handleChange}
              required
              placeholder="Enter your email or username"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:bg-gray-700 dark:border-gray-600"
            />
          </div>

          {/* Password */}
          <div className="text-sm">
            <label htmlFor="password" className="block mb-1 font-medium">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={credentials.password}
                onChange={handleChange}
                required
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:bg-gray-700 dark:border-gray-600"
              />
              <span
                className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-500 dark:text-gray-300"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between text-xs">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="rememberMe"
                checked={credentials.rememberMe}
                onChange={handleChange}
                className="accent-cyan-500"
              />
              Remember Me
            </label>
            <Link to="/forgot-password" className="text-cyan-500 hover:underline">
              Forgot Password?
            </Link>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="text-base w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:opacity-90 text-white py-2 rounded-md font-semibold transition"
          >
            Sign In
          </button>
        </form>

        {/* Sign Up redirect */}
        <p className="text-sm text-center mt-6 text-gray-600 dark:text-gray-400">
          Don't have an account?{" "}
          <Link to="/signup" className="text-cyan-500 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
