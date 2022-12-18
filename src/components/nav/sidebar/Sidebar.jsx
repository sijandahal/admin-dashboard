import React from "react";
import Sidebarmenus from "./Sidebarmenus";
import { NavLink } from "react-router-dom";
import uuid from "react-uuid";

const Sidebar = () => {
  return (
    <div className="navigation w-56 border border-gray-300 min-h-screen p-2">
      <nav>
        <h2 className="logo mb-2 py-3 px-3">Admin Panel</h2>
        <div>
          <ul className="flex items-start flex-col gap-1">
            {Sidebarmenus.map((sidebarmenu) => {
              console.log(Sidebarmenus);
              console.log(sidebarmenu.title);
              console.log(sidebarmenu.menu.menuTitle);
              return (
                <li key={uuid()}>
                  <h1>{sidebarmenu.title}</h1>
                  <NavLink to={sidebarmenu.menu.menuPath}>
                    {sidebarmenu.menu?.menuTitle}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
