import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Failed to parse user data", error);
      }
    } else {
      navigate("/login");
    }
  }, [navigate]);

  if (!user) return null;

  return (
    <div className="min-h-screen pt-32 sm:24 bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-200">
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 space-y-4">
          <h2 className="text-xl sm:text-2xl font-semibold border-b pb-2">My Profile</h2>

          <div className="text-sm sm:text-base">
            <p className="font-medium text-gray-500 dark:text-gray-400">Name</p>
            <p className="text-gray-800 dark:text-gray-200">{user.name || "N/A"}</p>
          </div>

          <div className="text-sm sm:text-base">
            <p className="font-medium text-gray-500 dark:text-gray-400">Username</p>
            <p className="text-gray-800 dark:text-gray-200">{user.username || "N/A"}</p>
          </div>

          <div className="text-sm sm:text-base">
            <p className="font-medium text-gray-500 dark:text-gray-400">Email</p>
            <p className="text-gray-800 dark:text-gray-200">{user.email || "N/A"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
