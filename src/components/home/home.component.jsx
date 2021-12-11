import React from "react";

const Home = () => {
  return (
    <section id="home" className="scroll-mt-20 bg-slate-100">
      <div className="container h-screen mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        {/* <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"> */}
        <div className="lg:flex-grow md:w-1/2 p-8 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <div className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">
            hi, i'm <span className="text-green-500">Weike</span>.
          </div>
          <br className="hidden lg:inline-block" />
          <div className="sm:text-3xl text-2xl mb-4 font-medium text-black">
            a <span className="text-green-500">full-stack web developer </span>
            passionate about creating interactive web applications and
            experience.
          </div>
          {/* <p className="mb-8 leading-relaxed">
            a front-end web developer passionate about creating interactive web
            applications.
          </p> */}
          <div className="flex justify-center">
            <a
              href="#contact"
              className="sm-shadow green-button inline-flex border-0 py-2 px-6 focus:outline-none rounded text-lg"
            >
              work with me
            </a>
            <a
              href="#projects"
              className="sm-shadow dark-button ml-4 inline-flex border-0 py-2 px-6 focus:outline-none rounded text-lg"
            >
              see my projects
            </a>
          </div>
        </div>
        <div className="p-8 lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded-full w-96 h-96 shadow"
            src="assets/images/me.jpg"
            alt="Weike Shi"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
