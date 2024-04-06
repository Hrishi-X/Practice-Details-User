import React from "react";

const Button = ({ lable, disabled, clickhandler }) => {
  return (
    <button
      disabled={disabled}
      onClick={clickhandler}
      className="bg-black p-3 text-white rounded-lg px-6 font-bold mb-4 hover:opacity-75"
    >
      {lable}
    </button>
  );
};

export default Button;
