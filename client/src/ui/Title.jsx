import React from "react";

const Title = ({ text, texttwo, className }) => {
  return (
    <div className="relative flex items-center justify-center">
      <h1 className={`text-white title-1 ${className}`}>{text}</h1>
      <h1 className=" text-primary absolute title-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {texttwo}
      </h1>
    </div>
  );
};

export default Title;
