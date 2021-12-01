import React from "react";
import SidebarIcon from "../sidebar-icon/sidebar-icon.component";

import { BiHomeAlt } from "react-icons/bi";
import { FaLaptopCode } from "react-icons/fa";
import { MdWorkOutline, MdOutlinePersonOutline } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";

const Sidebar = () => {
  return (
    <div
      className="fixed top-0 left-0 h-screen w-16 flex flex-col
    bg-white dark:bg-gray-900 shadow-lg"
    >
      <div className="space-y-10 absolute top-1/2 transform -translate-y-1/2 left-1/2 -translate-x-1/2">
        <SidebarIcon icon={<BiHomeAlt />} text="home"></SidebarIcon>
        <SidebarIcon
          icon={<MdOutlinePersonOutline />}
          text="about"
        ></SidebarIcon>
        <SidebarIcon icon={<FaLaptopCode />} text="skills"></SidebarIcon>
        <SidebarIcon icon={<MdWorkOutline />} text="projects"></SidebarIcon>
        <SidebarIcon icon={<HiOutlineMail />} text="contact"></SidebarIcon>
      </div>
    </div>
  );
};

export default Sidebar;
