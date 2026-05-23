
import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard: React.FC = () => {

  const navigate = useNavigate();


  const storedUser =
    localStorage.getItem("userData");

  
  const user = storedUser
    ? JSON.parse(storedUser)
    : null;

  const handleLogout = () => {

    
    localStorage.removeItem("authToken");

    localStorage.removeItem("userData");

    alert("Logged out successfully");

    navigate("/signin");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Dashboard</h1>

      <h2 className="mt-4">
        Name: {user?.name}
      </h2>

      <p>
        Email: {user?.email}
      </p>

    
      <button
        id="logout-link"
        onClick={handleLogout}
        
      >
        Logout
      </button>

    </div>
  );
};

export default Dashboard;