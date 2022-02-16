import React from "react";
import logo from "../assets/logo2.png";
import logoadv from "../assets/logoadv.png";

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
    <header className="mb-2">
      <div className=" sm:h-12  flex sm:flex-row flex-nowrap justify-between items-center p-3  bg-neutral-900">
        <Link to={"/"}>
          <img src={logo} alt="Logo" className="h-10 min-w-fit" />
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

      <div className=" h-60  sm:h-auto   p-3 flex flex-col sm:flex-row items-center  gap-2">
        <div className="  flex justify-center w-48  sm:w-96">
          <img src={logoadv} alt="LOGO" />
        </div>
        <div className=" p-3 flex flex-col items-center gap-2  ">
          <p className="text-sm text-white  italic text-center sm:text-justify">
            <span className="font-semibold text-orange-600 mr-2">
              ¡ESTO ES UN CLON!
            </span>
            Asco de vida recoge anécdotas que han arruinado tu día. ¿Por qué
            guardártelo para ti cuando puedes sacar una sonrisa a miles de
            personas? Tu desgracia puede ser nuestra gracia.
          </p>

          <nav className="sm:self-end">
            <Button>
              <Link to="/newpost">Publicar</Link>
            </Button>
            <Button>
              <Link to="/">Moderar</Link>
            </Button>
            <Button>
              <Link to="/">Aleatorio</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
