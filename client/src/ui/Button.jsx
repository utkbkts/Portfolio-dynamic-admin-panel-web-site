import React, { useState } from "react";

const Button = ({ text, outled, onClick, type, disabled }) => {
  const [isOutled, setIsOutled] = useState(outled);

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${
        isOutled
          ? "border hover:bg-white transition-all duration-300 hover:text-black active:scale-110 border-white py-[10px]  btn px-[25px]  rounded-full text-white font-small text-[16px] leading-[24px] focus"
          : "border hover:bg-primary transition-all duration-300 hover:text-white active:scale-110 border-primary disabled:bg-gray-600 disabled:opacity-70 disabled:cursor-not-allowed disabled:scale-100 disabled:hover:text-primary py-[10px] btn px-[25px]  rounded-full text-primary font-small text-[16px] leading-[24px] focus"
      }`}
    >
      {text}
    </button>
  );
};

export default Button;
