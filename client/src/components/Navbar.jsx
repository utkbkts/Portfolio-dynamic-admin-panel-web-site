import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import avatar from "../assets/avatar.png";
import Button from "../ui/Button";
const Navbar = () => {
  const { isAuthenticated, user, logout } = useAuth0();
  const [active, setActive] = useState(false);
  const [navbarActive, setnavbarActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setnavbarActive(true);
      } else {
        setnavbarActive(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed bg-primary w-full h-[10vh] z-[999] flex items-center justify-end px-4">
      <div className="flex relative">
        <img
          src={avatar}
          alt="avatar"
          className={` cursor-pointer transition-all duration-500 ${
            navbarActive ? "w-14 h-14" : "w-8 h-8"
          }`}
          onClick={() => setActive(!active)}
        />
        {active && (
          <div className="bg-primary flex flex-col gap-4 w-auto py-2 px-4 h-auto rounded-md absolute top-16 text-white right-4">
            {user?.email}
            <Button onClick={() => logout()} text={"Logout"} outled />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
