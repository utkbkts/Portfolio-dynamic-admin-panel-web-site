import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary">
      <div className="h-[400px] w-full">
        <div className="flex items-center justify-center flex-col h-full">
          <div className="flex items-center gap-4">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/utku-bektasoglu/"
              className="bg-white w-12 h-12 flex items-center justify-center rounded-full"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a
              target="_blank"
              href="https://github.com/utkbkts"
              className="bg-white w-12 h-12 flex items-center justify-center rounded-full"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              target="_blank"
              href="https://www.youtube.com/@Codewithutku"
              className="bg-white w-12 h-12 flex items-center justify-center rounded-full"
            >
              <i className="fa-brands fa-youtube"></i>
            </a>
          </div>
          <div className="flex items-center gap-12 mt-8 flex-wrap">
            <a className="text-white hover:underline cursor-pointer">Privacy</a>
            <span className="text-white md:block hidden">|</span>
            <a className="text-white hover:underline cursor-pointer">Terms</a>
            <span className="text-white md:block hidden">|</span>

            <a className="text-white hover:underline cursor-pointer">FAQs</a>
            <span className="text-white md:block hidden">|</span>

            <a className="text-white hover:underline cursor-pointer">Help</a>
          </div>
          <div className="pt-4 font-paragraph tracking-wider text-white">
            &copy;2024.All Rights Reserved.Designed By utku
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
