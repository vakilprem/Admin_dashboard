import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronDown, LogOut, Settings, User, Bell } from "lucide-react";
import { toast } from "react-hot-toast"; // Make sure this is imported

const Header = ({ toggleSidebar, toggleCollapse }) => {
  const [dark, setDark] = useState(() => {
    // Get theme from localStorage or system preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return savedTheme === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  // Sync dark mode with HTML and localStorage
  useEffect(() => {
    const root = window.document.documentElement;
    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  const handleLogout = () => {
    localStorage.removeItem("auth");
    toast.success("Logged out successfully 👋");
    navigate("/login");
  };

  return (
    <header className="z-20 bg-white dark:bg-gray-800 shadow px-6 py-4 flex justify-between items-center">
      <div className="flex items-center gap-4">
        <button className="md:hidden text-xl" onClick={toggleSidebar}>
          ☰
        </button>
        <button className="hidden md:block text-xl" onClick={toggleCollapse}>
          📚
        </button>
        <h1 className="text-xl font-bold text-gray-800 dark:text-white">
          Admin Dashboard
        </h1>
      </div>

      <div className="space-x-4 flex items-center relative">
        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDark((prev) => !prev)}
          className="bg-gray-200 dark:bg-gray-700 text-black dark:text-white px-3 py-2 rounded"
        >
          {dark ? "☀️" : "🌙"}
        </button>

        {/* Avatar + Dropdown */}
        <div className="relative">
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="flex items-center gap-2 focus:outline-none"
          >
            <img
              src="https://i.pravatar.cc/40"
              alt="User"
              className="w-9 h-9 rounded-full object-cover"
            />
            <ChevronDown className="w-4 h-4 text-gray-600 dark:text-gray-300" />
          </button>

          {showDropdown && (
            <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded shadow-md z-50">
              <button
                className="w-full px-4 py-2 flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-600"
                onClick={() => navigate("/profile")}
              >
                <User size={16} />
                Profile
              </button>
              <button
                className="w-full px-4 py-2 flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-600"
                onClick={() => navigate("/settings")}
              >
                <Settings size={16} />
                Settings
              </button>
              <button
                className="w-full px-4 py-2 flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-600 text-red-600"
                onClick={handleLogout}
              >
                <LogOut size={16} />
                Logout
              </button>
            </div>
          )}
        </div>

        {/* Notification Bell */}
        <div className="relative group cursor-pointer">
          <Bell className="w-6 h-6 text-gray-700 dark:text-white" />
          <span className="absolute top-0 right-0 block w-2 h-2 bg-red-500 rounded-full animate-ping"></span>
          <span className="absolute top-0 right-0 block w-2 h-2 bg-red-500 rounded-full"></span>
          <div className="absolute top-8 right-0 bg-white dark:bg-gray-800 shadow rounded w-64 p-3 hidden group-hover:block z-40">
            <p className="text-sm font-medium mb-2">🔔 Notifications</p>
            <ul className="text-sm space-y-2">
              <li>You have 3 new messages</li>
              <li>Server updated</li>
              <li>New user registered</li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
