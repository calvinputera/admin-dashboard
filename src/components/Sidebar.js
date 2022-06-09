import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  RiAppsLine,
  RiHome5Line,
  RiTeamLine,
  RiBarChart2Line,
  RiSettings3Line,
} from "react-icons/ri";
import "../assets/user.JPG";

const Sidebar = () => {
  const [border, setBorder] = useState("2px solid #334155");

  const menus = [
    { title: "Home", link: "home", icon: <RiHome5Line className="w-7 h-7" /> },
    {
      title: "Member",
      link: "member",
      icon: <RiTeamLine className="w-7 h-7" />,
    },
    {
      title: "Charts",
      link: "charts",
      icon: <RiBarChart2Line className="w-7 h-7" />,
    },
    {
      title: "Settings",
      link: "settings",
      icon: <RiSettings3Line className="w-7 h-7" />,
    },
  ];

  const activeLink =
    "flex items-center gap-x-8 mb-5 px-4 w-auto py-1 rounded-lg text-slate-700 text-md font-semibold";
  const normalLink =
    "flex items-center gap-x-8 mb-5 px-4 w-auto py-1 rounded-lg text-md text-slate-500 hover:text-slate-700";

  return (
    <div className="w-60 p-6 h-auto border-r text-slate-700 flex flex-col justify-between">
      <div className="mb-12 flex gap-x-4 flex-col">
        <div className="flex items-center gap-x-5 mb-10">
          <RiAppsLine className="w-8 h-8" />
          <h1 className="font-semibold text-xl">Dashboard</h1>
        </div>
        {menus.map((menu) => (
          <>
            {
              <NavLink
                to={`/${menu.link}`}
                key={menu.title}
                style={({ isActive }) => ({
                  border: isActive ? border : "",
                })}
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                {menu.icon}
                <span>{menu.title}</span>
              </NavLink>
            }
          </>
        ))}
      </div>
      <div className="w-24 h-24 rounded-full border-4 border-green-400 hover:border-0 hover:transition-all hover:duration-100 hover:cursor-pointer m-auto flex justify-center items-center relative">
        <img
          src={require("../assets/user.JPG")}
          alt="user"
          className="w-20 h-20 rounded-full hover:border-4 border-green-400"
        />
        <p className="absolute top-24 text-base font-semibold">Calvin</p>
      </div>
    </div>
  );
};

export default Sidebar;
