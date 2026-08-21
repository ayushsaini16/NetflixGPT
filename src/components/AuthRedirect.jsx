import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
const AuthRedirect = ({ children }) => {
  const userexist = useSelector((store) => store?.user?.name);


  if (userexist) {
    return <Navigate to="/browse" />;
  }

  return children;
};

export default AuthRedirect;
