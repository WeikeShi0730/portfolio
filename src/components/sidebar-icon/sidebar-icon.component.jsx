import React from "react";
import { IconContext } from "react-icons";

const SidebarIcon = ({ icon, text }) => {
  return (
    <div className="sidebar-icon group">
      <IconContext.Provider
        value={{ size: "1.5rem"}}
      >
        <div>{icon}</div>
      </IconContext.Provider>
      <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
    </div>
  );
};
export default SidebarIcon;
