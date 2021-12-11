import React, { useState, useEffect } from "react";

const NavBar = () => {
  const [scrollPosition, setScrollPosition] = useState(false);
  const handleScroll = () => {
    const position = window.pageYOffset >= window.innerHeight - 48;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${
        scrollPosition ? "fixed top-0 inset-x-0" : "absolute inset-x-0 bottom-0"
      } h-16 bg-slate-200 flex m-auto items-center z-40 bg-opacity-80 backdrop-blur-sm`}
    >
      <div className="mx-10 sm:text-lg text-md  font-extralight text-black flex space-x-10">
        <a href="#home">home</a>
        <a href="#about">about</a>
        <a href="#skills">skills</a>
        <a href="#projects">projects</a>
        <a href="#contact">contact</a>
      </div>
    </div>
  );
};

export default NavBar;
