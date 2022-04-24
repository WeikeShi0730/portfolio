import React from "react";
import { projects } from "../../data";

const Projects = () => {
  return (
    <section id="projects" className="mx-8 scroll-mt-20">
      <div className="container bg-opacity-40 bg-white dark:bg-neutral-900 dark:bg-opacity-40 px-5 py-10 mx-auto my-20 rounded-3xl shadow-xl dark:shadow-xl-dark font-light">
        <div className="flex flex-col w-full mb-20 text-center">
          <h1 className="sm:text-4xl text-3xl mb-4 text-green-500">
            apps i've built
          </h1>
          <p className="text-base text-left text-black dark:text-white leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            The projects below showcase my ability to create functional and
            innovative web apps. Hover over them to see technologies used, brief
            descriptions, links to the websites, and repos.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {projects.map((project) => (
            <div key={project.title} className=" w-full h-full p-4">
              <div className="flex relative rounded-2xl h-full lg-shadow">
                <img
                  alt="gallery"
                  className="absolute inset-0 rounded-2xl w-full h-full object-cover object-top"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 rounded-2xl w-full h-full bg-slate-500 dark:bg-neutral-700 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="text-lg text-white mb-3">{project.title}</h1>
                  <p className="leading-relaxed text-black dark:text-neutral-300 mb-10">
                    {project.description}
                  </p>
                  <div className="flex absolute inset-x-0 bottom-4 justify-center p-2 text-white">
                    <a
                      className="mx-5 underline underline-offset-4 decoration-green-400 hover:decoration-green-500"
                      href={project.gitLink}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      repo
                    </a>
                    <a
                      className="mx-5 underline underline-offset-4 decoration-green-400 hover:decoration-green-500"
                      href={project.demoLink}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
