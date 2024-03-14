import React from "react";
import { Oval } from "react-loader-spinner";

const Spinner = () => {
  return (
    <>
      <Oval
        visible={true}
        height="20"
        width="20"
        color="#4fa94d"
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </>
  );
};

export default Spinner;
