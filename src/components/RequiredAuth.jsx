import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
const RequiredAuth = ({ children }) => {
  const userexist = JSON.parse(localStorage.getItem("user"));

  if (!userexist) {
    return <Navigate to="/" />;
  }

  return children;
};

export default RequiredAuth;
