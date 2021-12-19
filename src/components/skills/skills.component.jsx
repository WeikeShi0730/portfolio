import React from "react";
import { IconContext } from "react-icons";
import { skills } from "../../data.js";

const Skills = () => {
  return (
    <section id="skills" className="mx-8 scroll-mt-20">
      <div className="container bg-opacity-40 bg-white dark:bg-neutral-900 dark:bg-opacity-40 px-5 py-10 mx-auto my-20 rounded-3xl shadow-xl dark:shadow-xl-dark font-light">
        <div className="text-center mb-20">
          <h1 className="sm:text-4xl text-3xl text-green-500 mb-4">
            skills
          </h1>
          <p className="text-base text-black dark:text-white leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi sit
            ipsa delectus eum quo voluptas aspernatur accusantium distinctio
            possimus est.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill.title} className="p-2 sm:w-1/4 w-1/2">
              <div className="dark-button text-sm lg:text-base p-4 rounded-lg gap-0 h-full sm-shadow">
                <span className="grid grid-cols-1 gap-y-2 lg:grid-cols-2 lg:grid-flow-col">
                  <div className="self-center justify-self-center">
                    <IconContext.Provider value={{ size: "2rem" }}>
                      {skill.icon}
                    </IconContext.Provider>
                  </div>
                  <div className="justify-self-center self-center lg:justify-self-end">{skill.title}</div>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
