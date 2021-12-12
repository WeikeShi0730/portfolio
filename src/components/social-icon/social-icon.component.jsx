import React from "react";
import { IconContext } from "react-icons";

const SocialIcon = ({ icon, text }) => {
  return (
    <div className="dark-button inline-flex py-2 px-6 mx-2 my-2 rounded text-lg sm-shadow">
      <IconContext.Provider value={{ size: "2rem" }}>
        <div>{icon}</div>
      </IconContext.Provider>
    </div>
  );
};

export default SocialIcon;
