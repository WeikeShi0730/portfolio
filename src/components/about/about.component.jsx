import React from "react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import SocialIcon from "../social-icon/social-icon.component";

const About = () => {
  return (
    <section id="about">
      <div className="container px-5 py-10 mx-auto mb-20 border rounded-3xl shadow-xl">
        <div className="text-center mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-green-500 mb-4">
            about
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            I'm a front-end web developer with a background in computer systems
            and network infrastructure. My 8 years of IT experience has given me
            a strong foundation for web development and building complex
            solutions. Recently, I graduated from the Juno College Immersive Web
            Development Bootcamp. I am passionate about coding and solving
            problems through code, and I am excited to work alongside other
            amazing programmers and learn so much more!
          </p>
        </div>
        <div className="flex justify-center">
          <a
            className="green-button inline-flex border-0 py-2 px-6 focus:outline-none rounded text-lg sm-shadow"
            href="assets/resume/Weike Shi Resume.pdf"
            alt="Weike Shi's Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
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
