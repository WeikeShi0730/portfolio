import React from "react";
import { projects } from "../../data";

const Projects = () => {
  return (
    <section id="projects" className="mx-8 scroll-mt-20">
      <div className="container bg-white px-5 py-10 mx-auto my-20 border rounded-3xl shadow-xl font-light">
        <div className="flex flex-col w-full mb-20 text-center">
          {/* <CodeIcon className="mx-auto inline-block w-10 mb-4" /> */}
          <h1 className="sm:text-4xl text-3xl mb-4 text-green-500">
            apps i've built
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
            facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
            fuga dolore.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2 body-font">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.title}
              className="sm:w-1/2 w-100 p-4"
            >
              <div className="flex relative rounded-2xl lg-shadow">
                <img
                  alt="gallery"
                  className="absolute inset-0 rounded-2xl w-full h-full object-cover object-center"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 rounded-2xl w-full bg-gray-500 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className=" text-lg text-white mb-3">{project.title}</h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
