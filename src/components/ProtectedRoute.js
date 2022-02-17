import React from "react";
import { Navigate } from "react-router";
import { useAuth } from "../context/authContex";
import Spinner from "./Spinner";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) return <Spinner />;
  if (!user && !loading) return <Navigate to="/login" />;

  return <>{children}</>;
};

export default ProtectedRoute;
