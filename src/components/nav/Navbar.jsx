import React from "react";
import uuid from "react-uuid";
import Container from "#container/Container";
import routes from "#routes/routesetting";
import { Cog6ToothIcon } from "@heroicons/react/24/solid";

import { Routes, Route, NavLink } from "react-router-dom";
import Avatar from "../common/UIComponents/Avatar/Avatar";

const Navbar = ({ className }) => {
  return (
    <div className="navbar px-5 py-3 w-full  shadow-sm bg-white flex items-center justify-between">
      <div className=" relative w-48 text-gray-600 border border-gray-300 bg-white h-8 px-3 pr-10">
        <input
          className="  text-xs focus:outline-none"
          type="search"
          name="search"
          placeholder="Search"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </div>
      <div className="right">
        <a href="javascript:void(0)">
          <Cog6ToothIcon className="w-4 h-4 text-gray-700" />
        </a>
        <Avatar
          width={40}
          height={40}
          className="inline"
          imageSource={"https://picsum.photos/seed/picsum/200/300"}
        />
      </div>
    </div>
  );
};

export default Navbar;
