import React from "react";
import { projects } from "../../data";

const Projects = () => {
  return (
    <section id="projects" className="mx-8 scroll-mt-20">
      <div className="container bg-opacity-40 bg-white px-5 py-10 mx-auto my-20 border rounded-3xl shadow-xl font-light">
        <div className="flex flex-col w-full mb-20 text-center">
          <h1 className="sm:text-4xl text-3xl mb-4 text-green-500">
            apps i've built
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
            facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
            fuga dolore.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {projects.map((project) => (
            <div key={project.title} className="sm:w-1/2 w-full h-full p-4">
              <div className="flex relative rounded-2xl h-full lg-shadow">
                <img
                  alt="gallery"
                  className="absolute inset-0 rounded-2xl w-full h-full object-cover object-top"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 rounded-2xl w-full h-full bg-gray-500 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="text-lg text-white mb-3">{project.title}</h1>
                  <p className="leading-relaxed mb-10">{project.description}</p>
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
