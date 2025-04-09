import React from "react";
// pages/Settings.jsx
const Settings = () => {
    return (
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4">⚙️ Settings</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Notification Preferences</label>
            <select className="w-full p-2 rounded bg-gray-100 dark:bg-gray-700">
              <option>Email</option>
              <option>Push</option>
              <option>SMS</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Language</label>
            <select className="w-full p-2 rounded bg-gray-100 dark:bg-gray-700">
              <option>English</option>
              <option>Spanish</option>
              <option>French</option>
            </select>
          </div>
        </div>
      </div>
    );
  };
  
  export default Settings;
  