import React from "react";
// pages/Profile.jsx
const Profile = () => {
    const user = {
      name: "Premal Vakil",
      email: "premal@example.com",
      role: "Frontend Developer",
      joined: "Jan 2024",
    };
  
    return (
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4">👤 Profile</h2>
        <div className="space-y-2 text-lg">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Role:</strong> {user.role}</p>
          <p><strong>Joined:</strong> {user.joined}</p>
        </div>
      </div>
    );
  };
  
  export default Profile;
  