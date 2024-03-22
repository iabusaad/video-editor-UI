import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { FaVideo } from "react-icons/fa";
import { HiOutlineTemplate } from "react-icons/hi";
import { IoCut } from "react-icons/io5";
import Button from "./Button";
import { FiMenu, FiX } from 'react-icons/fi';
import { FaPlus } from "react-icons/fa";

const menuItem = [
  {
    path: "/",
    name: "Home",
    slug:<IoMdHome />
  },
  {
    path: "/template",
    name: "Template",
    slug:<HiOutlineTemplate />
  },
  {
    path: "/allVideos",
    name: "All videos",
    slug:<FaVideo />
  },
  {
    path: "/edit",
    name: "Edit videos",
    slug:<IoCut />
  },
];
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button className="fixed left-52 top-4 z-50 text-2xl text-gray-600" onClick={toggleDrawer}>
        {isOpen ? <FiX /> : <FiMenu />}
      </button>
      <div className={`fixed top-0 left-0 h-full bg-gray-200 w-64 shadow-lg z-40 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-4">
          <h1 className="text-2xl font-bold">Veed.io</h1>
          <Button
            className="flex items-center justify-between gap-16 mt-10"
            children="New Video"
            icon=<FaPlus />
          />
          {menuItem.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className="py-3"
              activeclassName="active"
            >
              <button className="flex w-48 pl-5 py-3 my-5 items-center justify-start bg-slate-100 hover:bg-slate-200 text-black font-semibold rounded-lg ">
                <div className="pr-3
                ">
                {item.slug}
                </div>
               
                {item.name}
              </button>
            </NavLink>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default Sidebar;

