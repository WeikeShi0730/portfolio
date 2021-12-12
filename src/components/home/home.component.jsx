import React from "react";

const Home = () => {
  return (
    <section id="home" className="bg-slate-100">
      <div className="container h-screen mx-auto flex px-10 py-10 md:flex-row flex-col items-center font-light">
        {/* <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"> */}
        <div className="lg:flex-grow md:w-1/2 p-8 flex flex-col md:items-start md:text-left mb-0 md:mb-0 items-center text-center">
          <div className="sm:text-4xl text-3xl mb-4 text-black">
            hi, i'm <span className="text-green-500">Weike</span>.
          </div>
          <br className="hidden lg:inline-block" />
          <div className="sm:text-3xl text-2xl mb-4 text-black">
            a <span className="underline decoration-green-500 underline-offset-4">full-stack web developer </span>
            passionate about creating interactive web applications and
            experience.
          </div>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="sm-shadow green-button inline-flex rounded"
            >
              work with me
            </a>
            <a
              href="#projects"
              className="sm-shadow dark-button ml-4 inline-flex rounded"
            >
              see my projects
            </a>
          </div>
        </div>
        <div className="p-8 lg:max-w-md max-w-sm sm:w-3/4 md:w-1/2">
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
