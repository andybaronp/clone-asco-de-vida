import React from "react";
import logo from "../assets/logo2.png";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/authContex";

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
    <div className="  w-full h-10   flex justify-between items-center p-3 bg-neutral-900">
      <Link to={"/"}>
        <img src={logo} alt="Logo" className="h-10" />
      </Link>

      <div>
        {error && <alert message={error} />}
        <div className="flex   justify-between">
          <h2 className="mr-3 text-white font-semibold">
            {user ? user.displayName || user.email : "Anonimo"}
          </h2>
          {user ? (
            <button
              onClick={handleLogout}
              className="bg-orange-600 text-white py-0.5 px-2 rounded font-semibold hover:bg-orange-800"
            >
              Logout
            </button>
          ) : (
            <div className="flex justify-between">
              {/* {pathname === "/register" ? ( */}
              <button
                className="bg-orange-600 text-white py-0.5 px-2 rounded
                font-semibold hover:bg-orange-800"
              >
                <Link to="/login">Login</Link>
              </button>

              {/* }
              {pathname === "/login" ? ( */}
              <button
                className="ml-1 bg-orange-600 text-white py-0.5 px-2 rounded
                font-semibold hover:bg-orange-800"
              >
                <Link to="/register">Register</Link>
              </button>
              {/* ) : null} */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
