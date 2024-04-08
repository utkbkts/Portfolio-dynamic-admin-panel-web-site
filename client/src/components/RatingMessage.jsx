import React from "react";
import Button from "../ui/Button";
import { Link } from "react-router-dom";
import { IoCloseOutline } from "react-icons/io5";
import { useAuth0 } from "@auth0/auth0-react";
const RatingMessage = ({ setRatingMessage }) => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div className=" h-full fixed top-0  z-50">
      <div className="absolute top-0 left-0 bottom-0 right-0 z-10 bg-black/50 w-screen h-full"></div>
      <div className="flex items-center justify-center w-screen h-screen">
        <div className="relative bg-slate-50 w-[350px]  z-[99999] rounded-md flex items-center justify-center flex-col gap-4 h-[250px]">
          <span className="absolute right-0 top-0 p-2">
            <IoCloseOutline
              size={20}
              className="cursor-pointer"
              onClick={() => setRatingMessage(false)}
            />
          </span>
          <h1 className="text-black text-xl font-bold text-center py-2">
            How about voting for the site?
          </h1>
          <span className="text-[14px] font-light flex items-center justify-center w-full text-center">
            Would you mind taking just 2 minutes to rate the site? I would
            really appreciate it.
          </span>
          <span onClick={async () => await loginWithRedirect()}>
            <Button type={"submit"} text={"Sign Up"}></Button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default RatingMessage;
