import React, { useState, useEffect } from "react";
import Scrollspy from "react-scrollspy";

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

  // const sections = document.querySelectorAll("section");
  // var observer = new IntersectionObserver(
  //   function (entries) {
  //     if (entries[0].isIntersecting === true) {
  //       document
  //         .getElementById(entries[0].target.id + "Tag")
  //         .classList.add("text-green-500");
  //       // console.log(entries[0].target);
  //     } else {
  //       document
  //         .getElementById(entries[0].target.id + "Tag")
  //         .classList.remove("text-green-500");
  //     }
  //   },
  //   { threshold: [0.7] }
  // );

  // sections.forEach((section) => {
  //   console.log(section);
  //   observer.observe(section);
  // });

  return (
    <div
      className={`${
        scrollPosition ? "fixed top-0 inset-x-0" : "absolute inset-x-0 bottom-0"
      } h-16 bg-slate-200 flex mx-auto justify-center items-center z-40 bg-opacity-80 backdrop-blur-sm`}
    >
      <div>
        <Scrollspy
          className="mx-10 sm:text-lg text-md font-extralight text-black flex space-x-10"
          items={["home", "about", "skills", "projects", "contact"]}
          currentClassName="text-green-500"
          offset={-window.innerHeight / 2}
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
        </Scrollspy>
      </div>
    </div>
  );
};

export default NavBar;
