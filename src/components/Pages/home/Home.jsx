import React from "react";
import Navbar from "#navbar/Navbar";
import Sidebar from "../../nav/sidebar/Sidebar";

const Home = () => {
  return (
    <div className="homecontainer flex">
      <Sidebar />
      <div className="maincontainer pl-72 transition-all w-full">
        <Navbar className="flex bg-white" />
      </div>
    </div>
  );
};

export default Home;
