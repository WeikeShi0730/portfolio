import React from "react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import SocialIcon from "../social-icon/social-icon.component";

const About = () => {
  return (
    <section id="about" className="mx-8 scroll-mt-20">
      <div className="container bg-opacity-40 bg-white dark:bg-neutral-900 dark:bg-opacity-40 px-5 py-10 mx-auto my-20 rounded-3xl shadow-xl dark:shadow-xl-dark font-light">
        <div className="text-center mb-20">
          <h1 className="sm:text-4xl text-3xl  text-green-500 mb-4">about</h1>
          <p className="text-base leading-relaxed text-left xl:w-2/4 lg:w-3/4 mx-auto text-black dark:text-white">
            I'm a web developer with an engineering background and several years
            of experience. I'm excited about creating websites using the most
            cutting-edge technologies that help with web development and UI/UX.
            I love to learn new skills and am passionate about designing web
            applications to solve real problems and find solutions to human
            laziness. Also, I'm a huge Formula One fan, and lots of my projects
            are F1-related.
          </p>
          <p className="text-base leading-relaxed text-left xl:w-2/4 lg:w-3/4 mx-auto text-black dark:text-white">
            When I'm not coding, I can be found in the kitchen (more likely to
            be eating than cooking), watching F1, reading books, and playing
            games.
          </p>
        </div>
        <div className="flex flex-col m-auto sm:flex-row justify-center items-center sm:items-stretch">
          <a
            className="flex green-button text-center mx-2 my-2 py-2 px-6 rounded sm-shadow"
            href="assets/resume/Weike Shi Resume.pdf"
            alt="Weike Shi's Resume.pdf"
            rel="noopener noreferrer"
            target="_blank"
          >
            Resumé
          </a>
          <a
            href="https://github.com/WeikeShi0730"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SocialIcon icon={<SiGithub />} text="github" />
          </a>
          <a
            href="https://www.linkedin.com/in/weike-shi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SocialIcon icon={<SiLinkedin />} text="linkedin" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
