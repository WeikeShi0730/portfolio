import React from "react";
import { IconContext } from "react-icons";

const SocialIcon = ({ icon, text }) => {
  return (
    <div className="dark-button ml-4 inline-flex border-0 py-2 px-6 focus:outline-none rounded text-lg sm-shadow">
      <IconContext.Provider value={{ size: "2rem" }}>
        <div>{icon}</div>
      </IconContext.Provider>
    </div>
  );
};

export default SocialIcon;
