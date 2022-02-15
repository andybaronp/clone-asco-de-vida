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
    <div className="  w-full   flex-col flex justify-between items-center mb-4  ">
      <div className="w-full h-12 flex justify-between items-center p-3  bg-neutral-900">
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
      <div className="flex  h-20 mb-6 justify-between  items-center px-3 mt-2">
        <div className=" self-start basis-1/3">
          <img src={logoadv} alt="al" className=" h-36" />
        </div>
        <div className="flex basis-2/3 h-8 flex-nowrap flex-col mr-4">
          <div className="w-2/3 self-end">
            <p className="text-sm text-white  italic">
              <span className="font-semibold text-orange-600">
                {" "}
                ¡ESTO ES UN CLON!
              </span>{" "}
              Asco de vida recoge anécdotas que han arruinado tu día. ¿Por qué
              guardártelo para ti cuando puedes sacar una sonrisa a miles de
              personas? Tu desgracia puede ser nuestra gracia.
            </p>
          </div>
          <div className="self-end">
            <Button variant="bg-black">
              <Link to="/newpost">Publicar</Link>
            </Button>
            <Button>
              <Link to="/">Moderar</Link>
            </Button>
            <Button>
              <Link to="/">Aleatorio</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
