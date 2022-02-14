import React from "react";
import logo from "../assets/logo2.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/authContex";
import Button from "./Button";
const Header = () => {
  const { user, logout, loading } = useAuth();
  const [error, setError] = useState();
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      setError(error.message);
    }
  };
  if (loading) return <div>Loading...</div>;

  return (
    <div className="  w-full h-12   flex justify-between items-center p-3  bg-neutral-900">
      <Link to={"/"}>
        <img src={logo} alt="Logo" className="h-10" />
      </Link>

      <div>
        {error && <alert message={error} />}
        <div className="flex align-middle   justify-between">
          <h2 className="mr-6  text-white font-semibold">
            {user ? user.displayName || user.email : "Anonimo"}
          </h2>
          {user ? (
            <Button action={handleLogout}>Logout </Button>
          ) : (
            <div className="flex justify-between">
              <Button>
                <Link to="/login">Login</Link>
              </Button>

              <Button>
                <Link to="/register">Register</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
