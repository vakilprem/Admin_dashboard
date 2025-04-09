// Sidebar.jsx
import { NavLink } from "react-router-dom";
import React from "react";
import { LayoutDashboard, Box, ShoppingCart, Users, Settings,Contact, ChartArea, LayoutDashboardIcon } from "lucide-react"; // Icon set
// import Contact from "../pages/Contact";

const navItems = [
  { name: "Dashboard", path: "/", icon: <LayoutDashboardIcon size={20} /> },
  { name: "Products", path: "/products", icon: <Box size={20} /> },
  { name: "Orders", path: "/orders", icon: <ShoppingCart size={20} /> },
  { name: "Customers", path: "/customers", icon: <Users size={20} /> },
  { name: "Settings", path: "/settings", icon: <Settings size={20} /> },
  { name: "Contact", path: "/contact", icon: <Contact size={20} /> },
  { name: "Chat Support", path: "/chat", icon: <ChartArea size={20} /> },
];

const Sidebar = ({ isOpen, isCollapsed }) => {
  return (
    <aside
      className={`
        bg-gray-800 text-white h-screen p-4 shadow-md z-30
        fixed md:relative top-0 left-0 transform transition-all duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0
        ${isCollapsed ? "w-20" : "w-64"}
      `}
    >
      <h2 className={`text-2xl font-bold mb-8 transition-all ${isCollapsed ? "text-center text-lg" : ""}`}>
        {isCollapsed ? "M" : "MyApp"}
      </h2>

      <ul>
        {navItems.map((item) => (
          <li key={item.name} className="mb-4 group relative">
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 rounded transition-all ${
                  isActive ? "bg-gray-600" : "hover:bg-gray-700"
                }`
              }
            >
              {item.icon}
              {!isCollapsed && <span>{item.name}</span>}
            </NavLink>

            {isCollapsed && (
              <span className="absolute left-full ml-2 top-2 bg-gray-700 text-white text-sm px-2 py-1 rounded hidden group-hover:block whitespace-nowrap">
                {item.name}
              </span>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
