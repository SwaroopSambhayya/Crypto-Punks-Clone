import React, { useState } from "react";
import punkLogo from "../assets/cryptopunk-logo.png";
import searchIcon from "../assets/search.png";
import "../components/header.css";
import themeIcon from "../assets/theme-switch.png";
import useWindowDimensions from "../customHooks/getWindowDimesions";
import { CgMenuMotion } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
import { BsShop } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaDrawPolygon } from "react-icons/fa";
const Header = () => {
  const { width } = useWindowDimensions();
  return width > 1000 ? (
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
  ) : (
    <MobileHeader />
  );
};

export default Header;

export const MobileHeader = () => {
  const [isOpen, toggleMenu] = useState(false);
  return (
    <div className="flex flex-1 justify-center m-5 cursor-pointer ">
      <MenuList isOpen={isOpen} toggleMenu={toggleMenu} />
      <label className=" font-extrabold text-white flex flex-1 justify-center text-xl ml-2 ">
        Crypto punks
      </label>

      <div className=" self-end ">
        <CgMenuMotion
          size={28}
          color="white"
          onClick={() => toggleMenu(!isOpen)}
        />
      </div>
    </div>
  );
};

export const MenuList = ({ isOpen, toggleMenu }) => {
  return (
    <div
      className={` ease-in-out  duration-300 w-3/4   h-full fixed z-40 right-0 bottom-0 top-0 ${
        isOpen ? "translate-x-0 " : "translate-x-full"
      } `}
      style={{ backgroundColor: "#1e1e1c" }}
    >
      <section>
        <div className="flex justify-between ">
          <img src={punkLogo} alt="Logo" className=" w-24 h-fit m-4  flex" />
          <div className="flex">
            <div className=" rounded-full w-11 h-11 flex justify-center items-center  m-4 bg-black ">
              <img src={themeIcon} alt="Theme" className="h-6" />
            </div>
            <div className=" rounded-full w-11 h-11 flex justify-center items-center  my-4 mx-1 bg-black ">
              <IoMdClose
                size={20}
                color="white"
                onClick={() => toggleMenu(!isOpen)}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="mx-5 mt-8 mb-3 flex flex-col   text-white text-xl font-semibold ">
        <MenuTile
          label="MarketPlace"
          icon={<BsShop color="white" size={22} />}
        />
        <MenuTile
          label="Drops"
          icon={<HiOutlineLocationMarker color="white" size={24} />}
        />
        <MenuTile
          label="Create"
          icon={<FaDrawPolygon color="white" size={22} />}
        />
        <div className=" h-12 w-28 mx-5 self-center my-10 text-black text-sm  flex justify-center items-center bg-gradient-to-r  from-cyan-400 to-cyan-200 rounded-3xl font-bold ">
          GET IN
        </div>
      </section>
    </div>
  );
};

export const MenuTile = ({ label, icon }) => {
  return (
    <div className="flex items-center  ">
      {icon}
      <label className="mx-5 my-3">{label}</label>
    </div>
  );
};
