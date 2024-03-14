import React from "react";
import { FallingLines } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen w-full bg-primary">
      <div className="flex items-center flex-col justify-center gap-12">
        <FallingLines
          color="#DC3545"
          width="150"
          visible={true}
          ariaLabel="falling-circles-loading"
        />
      </div>
    </div>
  );
};

export default Loading;
