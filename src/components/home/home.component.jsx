import React from "react";

const Home = () => {
  return (
    <div className="flex justify-center items-center h-screen w-full">
      <div className="flex justify-center w-full relative py-0 px-4">
        <img
          className="rounded-full my-0 w-64 h-64 shadow"
          src="assets/images/me.jpg"
          alt="Weike Shi"
        />
      </div>
      <div class="heroDescription w-full py-0 px-4">
        <p class="greeting text-base leading-4">HI THERE! I'M</p>
        <h1 className="">
          <span className="text-green-500">WEIKE</span> SHI
        </h1>
        <p class="smallBio">
          A <span>Front-End Web Developer</span> passionate about creating
          interactive applications and experiences on the web.
        </p>
        <div class="socialsResume">
          <a
            class="resumeLink"
            href="assets/Alex-Calia-Resume.pdf"
            alt="Alex Calia's resumé"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resumé
          </a>
          <ul class="socialsList">
            <li>
              <a
                href="https://www.linkedin.com/in/alexander-calia-33190337/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  class="lni lni-linkedin-original"
                  aria-label="Link to Alex's LinkedIn page."
                ></i>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/alexcalia"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  class="lni lni-github-original"
                  aria-label="Link to Alex's GitHub page."
                ></i>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/AlexanderCalia"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  class="lni lni-twitter-original"
                  aria-label="Link to Alex's Twitter profile."
                ></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
