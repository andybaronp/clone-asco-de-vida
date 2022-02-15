import React from "react";

const Spiner = () => {
  return (
    //    Spiner tailwind
    <div class="flex justify-center items-center">
      <div
        class="spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0"
        role="status"
      >
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Spiner;
