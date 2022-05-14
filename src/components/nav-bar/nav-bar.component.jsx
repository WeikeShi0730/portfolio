import React, { useState, useEffect } from "react";
import Scrollspy from "react-scrollspy";
import useDarkMode from "../hooks/useDarkMode";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeIcon = () => {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const handleMode = () => setDarkTheme(!darkTheme);
  return (
    <span onClick={handleMode}>
      {darkTheme ? <FaSun size="24" /> : <FaMoon size="24" />}
    </span>
  );
};

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
        scrollPosition
          ? "fixed top-0 inset-x-0"
          : "absolute inset-x-0 bottom-0"
        // "sticky top-0 inset-x-0"
      } h-16 bg-slate-200 flex mx-auto justify-center items-center z-40 bg-opacity-80 backdrop-blur-sm
      dark:bg-neutral-800 dark:bg-opacity-80`}
    >
      <div>
        <Scrollspy
          className="space-x-4 sm:space-x-10 sm:text-lg text-md font-extralight text-black dark:text-white flex"
          items={["home", "about", "skills", "projects", "contact"]}
          currentClassName="text-green-500"
          offset={-window.innerHeight / 3}
        >
          <a href="#home" className="nav-bar-hover-focus">
            home
          </a>
          <a href="#about" className="nav-bar-hover-focus">
            about
          </a>
          <a href="#skills" className="nav-bar-hover-focus">
            skills
          </a>
          <a href="#projects" className="nav-bar-hover-focus">
            projects
          </a>
          <a href="#contact" className="nav-bar-hover-focus">
            contact
          </a>
          <button href="" className="flex items-center">
            <ThemeIcon />
          </button>
        </Scrollspy>
      </div>
    </div>
  );
};

export default NavBar;
