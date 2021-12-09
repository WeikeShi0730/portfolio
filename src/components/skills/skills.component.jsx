import React from "react";
import { IconContext } from "react-icons";
import { skills } from "../../data.js";

const Skills = () => {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-green-500 mb-4">
            skills
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi sit
            ipsa delectus eum quo voluptas aspernatur accusantium distinctio
            possimus est.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="p-2 sm:w-1/4 w-full"
            >
              <div className="dark-button p-4 rounded-lg gap-0 h-full shadow-xl hover:shadow-3xl transition-shadow duration-500">
                <span className="grid grid-cols-2 grid-rows-2 grid-flow-col title-font font-medium">
                  <div className="self-center justify-self-center row-span-2">
                    <IconContext.Provider value={{ size: "2rem" }}>
                      {skill.icon}
                    </IconContext.Provider>
                  </div>
                  <div></div>
                  <div className="self-end justify-self-end">{skill.title}</div>
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
