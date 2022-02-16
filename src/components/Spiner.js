import React from "react";

const Spiner = () => {
  return (
    //    Spiner tailwind
    <div className="flex justify-center items-center">
      <div
        className="spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0"
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Spiner;
