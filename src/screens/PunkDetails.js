import React from "react";
import { useLocation } from "react-router-dom";
import eth from "../assets/weth.png";
import Header from "../components/Header";
import { OwnerInfo } from "../components/MainCard";
import SocialIcon from "../components/SocialIcon";

const PunkDetails = () => {
  const location = useLocation();
  const { id, name, img, properties, asset_contract, profile_img } =
    location.state;
  return (
    <div className="flex flex-col flex-1 bg-black">
      <Header showBack />
      <div className="   pb-0.5  text-white" onClick={() => console.log(name)}>
        <OwnerInfo asset_contract={asset_contract} profile_img={profile_img} />
        <img src={img} alt="Punk" className="w-full " />
        <div className="mx-3 my-4 ">
          <section>
            <div className="flex justify-between">
              <div className=" text-3xl font-extrabold ">{name}</div>
              <div className=" text-xl font-bold text-gray-400 ">.#{id}</div>
            </div>
            <div className="   flex justify-between  items-center my-4">
              <section className="flex items-center ">
                <img src={eth} alt="" className=" w-4 m-1" />
                <label className="font-bold text-xl m-1">
                  {properties[0].value}
                </label>
              </section>
              <section>
                <SocialIcon />
              </section>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PunkDetails;
