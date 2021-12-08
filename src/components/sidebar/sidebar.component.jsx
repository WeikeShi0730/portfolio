import React from "react";
import SidebarIcon from "../sidebar-icon/sidebar-icon.component";

import { BiHomeAlt } from "react-icons/bi";
import { FaLaptopCode } from "react-icons/fa";
import { MdWorkOutline, MdOutlinePersonOutline } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";

const Sidebar = () => {
  return (
    <div
      className="fixed top-0 left-0 h-screen w-24 flex flex-col
    bg-white dark:bg-gray-900 shadow-lg"
    >
      <div className="flex items-center justify-center h-24 bg-gray-400 text-green-500 text-3xl">
        WS
      </div>
      <div className="space-y-10 absolute top-1/2 transform -translate-y-1/2 left-1/2 -translate-x-1/2">
        <a href="#home">
          <SidebarIcon icon={<BiHomeAlt />} text="home" />
        </a>
        <a href="#about">
          <SidebarIcon
            icon={<MdOutlinePersonOutline />}
            text="about"
          ></SidebarIcon>
        </a>
        <a href="#skills">
          <SidebarIcon icon={<FaLaptopCode />} text="skills" />
        </a>
        <a href="#projects">
          <SidebarIcon icon={<MdWorkOutline />} text="projects" />
        </a>
        <a href="#contact">
          <SidebarIcon icon={<HiOutlineMail />} text="contact" />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;