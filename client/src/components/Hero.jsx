import React, { useEffect, useState } from "react";
import logo from "../assets/DGPD1893.jpg";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Button from "../ui/Button";
import CV from "../assets/CV.pdf";
import { CiPlay1 } from "react-icons/ci";
import ReactPlayer from "react-player";
import { FaChevronDown } from "react-icons/fa";
import Loading from "./Loading";

const Hero = () => {
  const [showModal, setShowModal] = useState(false);
  const [scrollDown, setscrollDown] = useState(true);
  const [typeEffect] = useTypewriter({
    words: [
      "Front End Developer",
      "MERN-Stack Developer",
      "Web Developer",
      "Web Designer",
    ],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 20,
  });

  const handlePlayClick = () => {
    setShowModal(true);
  };

  const handleCloseClick = () => {
    setShowModal(false);
  };
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 100) {
        setscrollDown(false);
      } else {
        setscrollDown(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="bg-primary h-screen w-full absolute top-0 left-0 right-0">
      <div className="flex items-center justify-center h-full w-full max-w-6xl mx-auto lg:flex-row flex-col">
        <div className="lg:w-1/2 w-[200px] flex items-center justify-center">
          <img
            src={logo}
            alt="image"
            className="rounded-full md:w-[400px] w-full"
          />
        </div>
        <div className="lg:w-2/3 w-full flex lg:items-start items-center flex-col gap-5 lg:mt-0 mt-8 lg:pl-12">
          <span className="text-white font-small text-[28px]">I'M</span>
          <h1 className="title-3 font-title leading-[86px] text-primary title whitespace-nowrap">
            UTKU BEKTASOGLU
          </h1>
          <span className="font-small leading-[48px] text-[40px] text-white">
            {typeEffect}
            <span className="text-white">
              <Cursor cursorStyle="|" />
            </span>
          </span>
          <div className="flex items-center justify-center gap-12">
            <div>
              <a href={CV} download="Utku_CV.pdf" className="mt-7">
                <Button outled={true} text={"Download CV"} />
              </a>
            </div>
            <div
              className="bg-white rounded-full btn-play relative w-16 h-16 flex items-center justify-center cursor-pointer"
              onClick={handlePlayClick}
            >
              <CiPlay1
                size={30}
                className="title text-primary relative z-50 bg-transparent"
              />
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-75 flex items-center justify-center z-[999]">
          <div className="relative">
            <span
              className="absolute top-[-25px] right-2 text-white cursor-pointer"
              onClick={handleCloseClick}
            >
              Close
            </span>
            <ReactPlayer
              url={"https://www.youtube.com/watch?v=msWsKLdNnwg"}
              height={"85vh"}
              width={"70vw"}
              controls={true}
              className="overflow-hidden  bg-secondary"
            />
          </div>
        </div>
      )}
      {scrollDown && (
        <div className="fixed bottom-0 left-1/2 -translate-y-1/2 -translate-x-1/2">
          <FaChevronDown size={30} className={`title text-white down`} />
        </div>
      )}
    </section>
  );
};

export default Hero;
