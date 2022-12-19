import React from "react";
import Sidebarmenus from "./Sidebarmenus";
import { NavLink } from "react-router-dom";
import uuid from "react-uuid";
import DynamicHeroIcon from "../../common/UIComponents/DynamicHeroIcon";
import { CogIcon } from "@heroicons/react/24/solid";

const Sidebar = () => {
  return (
    <div className="navigation shadow-md bg-white w-full max-w-[18rem] fixed left-0 top-0 bottom-0 right-0 z-10  flex-auto flex min-h-screen p-2">
      <nav className="w-full">
        <h2 className="logo mb-2 py-3 px-3">Admin Panel</h2>
        <div>
          <ul className="flex items-start flex-col gap-1">
            {Sidebarmenus.map((sidebarmenu) => {
              return (
                <li key={uuid()}>
                  <DynamicHeroIcon />
                  {/* {<DynamicHeroIcon icon={"CogIcon"} />} */}
                  <h1>{sidebarmenu.title}</h1>
                  {/* <CogIcon /> */}

                  {/* {console.log(sidebarmenu.icon)} */}
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
