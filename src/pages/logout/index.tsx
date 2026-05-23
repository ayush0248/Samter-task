import type React from "react";
import { Navigate } from "react-router-dom";
import { useEffect } from "react";

const Logout: React.FC = () => {

  useEffect(() => {
    localStorage.removeItem("authToken")
    localStorage.removeItem("userData")
  
  }, [])

    return <Navigate to="/signin" />;
    
  
 
 
};

export default Logout;


