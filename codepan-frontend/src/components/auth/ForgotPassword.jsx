import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const API = import.meta.env.VITE_API_URL;

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  
  const navigate = useNavigate();

  const handleSendOtp = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    try {
      const response = await fetch(`${API}/api/forgot-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setOtpSent(true);
        setMessage(data.message || 'OTP sent to your email.');
      } else {
        setError(data.message || 'Failed to send OTP.');
      }
    } catch (err) {
      console.error('Error:', err);
      setError('Server error. Please try again later.');
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

      // Password validation
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{6,}$/;
    //const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    if (!passwordRegex.test(newPassword)) {
        setError('Password must be at least 6 characters and contain letters and numbers');
        setTimeout(() => setError(''), 2000);
        return;
    }

    try {
      const response = await fetch(`${API}/api/reset-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, otp, newPassword }),
      });

      const data = await response.json();

      if (response.ok) 
      {
        setMessage(data.message || 'Password reset successful.');
      
        setTimeout(() => {
          setMessage("");     // Optional: clear the message after 2 seconds
          navigate("/login"); // Optionally redirect here (e.g., navigate('/login'))
        }, 2000);
      } 
      else 
      {
        setError(data.message || 'Failed to reset password.');
      
        setTimeout(() => {
          setError(""); // Optional: clear the error after 2 seconds
        }, 2000);
      }
      
    } catch (err) {
      console.error('Error:', err);
      setError('Server error. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen py-32 flex items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Forgot Password</h1>

        {error && <p className="text-sm text-red-500 mb-4 text-center">{error}</p>}
        {message && <p className="text-sm text-green-500 mb-4 text-center">{message}</p>}

        {!otpSent ? (
          <form onSubmit={handleSendOtp} className="space-y-5">
            <div className="text-sm">
              <label htmlFor="email" className="block mb-1 font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:bg-gray-700 dark:border-gray-600"
              />
            </div>

            <button
              type="submit"
              className="text-base w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:opacity-90 text-white py-2 rounded-md font-semibold transition"
            >
              Send OTP
            </button>
          </form>
        ) : (
          <form onSubmit={handleResetPassword} className="space-y-5">
            <div className="text-sm">
              <label htmlFor="otp" className="block mb-1 font-medium">
                OTP
              </label>
              <input
                type="text"
                id="otp"
                name="otp"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
                placeholder="Enter the OTP sent to your email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:bg-gray-700 dark:border-gray-600"
              />
            </div>

            <div className="text-sm">
              <label htmlFor="newPassword" className="block mb-1 font-medium">
                New Password
              </label>
              <input
                type="password"
                id="newPassword"
                name="newPassword"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
                placeholder="Enter your new password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:bg-gray-700 dark:border-gray-600"
              />
            </div>

            <button
              type="submit"
              className="text-base w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:opacity-90 text-white py-2 rounded-md font-semibold transition"
            >
              Reset Password
            </button>
          </form>
        )}

        <p className="text-sm text-center mt-6 text-gray-600 dark:text-gray-400">
          Remembered your password?{' '}
          <Link to="/login" className="text-cyan-500 hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
