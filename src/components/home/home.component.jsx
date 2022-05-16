import React from "react";

const Home = () => {
  return (
    <section id="home">
      <div className="container bg-opacity-40 mx-auto h-screen flex px-10 py-1 md:flex-row flex-col items-center font-light">
        {/* <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"> */}
        <div className="lg:flex-grow md:w-1/2 p-8 flex flex-col md:items-start md:text-left mb-0 md:mb-0 items-center text-left">
          <div className="sm:text-4xl text-3xl mb-4 text-black dark:text-white">
            hi, i'm <span className="text-green-500">Weike</span>.
          </div>
          <br className="hidden lg:inline-block" />
          <div className="sm:text-3xl text-2xl mb-4 text-black dark:text-white">
            a{" "}
            <span className="underline decoration-green-500 underline-offset-4">
              full-stack web developer
            </span>{" "}
            passionate about creating interactive web applications and
            experience.
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-0">
            <a href="#contact" className="sm-shadow green-button rounded py-2">
              work with me
            </a>
            <a
              href="#projects"
              className="sm-shadow dark-button md:ml-4 rounded py-2"
            >
              see my projects
            </a>
          </div>
        </div>
        <div className="p-8 max-w-md sm:w-1/2">
          <img
            className="object-cover object-center rounded-full shadow drop-shadow-2xl"
            src="assets/images/me.jpg"
            alt="Weike Shi"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
