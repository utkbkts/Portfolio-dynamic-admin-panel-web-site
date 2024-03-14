import React, { useEffect, useState } from "react";

const MoveUp = () => {
  const [scrollDown, setscrollDown] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY < 1000) {
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

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {scrollDown && (
        <div className="MoveUp">
          <div className="move" onClick={scrollTop}>
            <i className="fa fa-angle-up" aria-hidden="true"></i>
            <i className="fa fa-angle-up" aria-hidden="true"></i>
          </div>
        </div>
      )}
    </>
  );
};

export default MoveUp;
