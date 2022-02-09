import React from "react";
import { Navigate } from "react-router";
import { useAuth } from "../context/authContex";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>;
  if (!user && !loading) return <Navigate to="/login" />;

  return <>{children}</>;
};

export default ProtectedRoute;
