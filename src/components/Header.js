import React from "react";
import punkLogo from "../assets/cryptopunk-logo.png";
import searchIcon from "../assets/search.png";
import "../components/header.css";
import themeIcon from "../assets/theme-switch.png";

const Header = () => {
  return (
    <div className="h-28 flex items-center flex-1  justify-between  m-3 px-4 ">
      <div className=" w-44 ">
        <img src={punkLogo} alt="Logo" />
      </div>
      <div
        className=" h-14 flex flex-1 flex-row mx-5 items-center  border-0 px-2 rounded-3xl "
        style={{ backgroundColor: "#1c1c1e" }}
      >
        <img src={searchIcon} alt="Search" className=" h-7 " />
        <input
          type="text"
          placeholder="Collection, Items and User"
          className="h-12 flex px-2 text-white rounded-3xl w-full flex-1 outline-0"
          style={{ backgroundColor: "#1c1c1e" }}
        />
      </div>
      <div className="flex  text-gray-400 justify-between headerActions">
        <p>Drops</p>
        <p>Marketplace</p>
        <p>Create</p>
      </div>
      <div className="flex  items-center ">
        <div
          className=" rounded-full p-4 mx-5 "
          style={{ backgroundColor: "#1c1c1e" }}
        >
          <img src={themeIcon} alt="Theme" className="h-6" />
        </div>
        <div className=" h-12 w-28 mx-5 flex justify-center items-center bg-gradient-to-r  from-cyan-400 to-cyan-200 rounded-3xl font-semibold ">
          GET IN
        </div>
      </div>
    </div>
  );
};

export default Header;
