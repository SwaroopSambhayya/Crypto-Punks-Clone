import React from "react";
import eth from "../assets/weth.png";
import useWindowDimensions from "../customHooks/getWindowDimesions";
import { useNavigate } from "react-router-dom";

const CollectionCard = ({
  id,
  name,
  img,
  properties,
  profile_img,
  asset_contract,
}) => {
  const { width } = useWindowDimensions();
  const navigate = useNavigate();
  const routeChange = () => {
    navigate("details", {
      state: {
        id: id,
        name: name,
        img: img,
        properties: properties,
        profile_img,
        asset_contract,
      },
    });
  };
  return (
    <div
      className="  m-5 pb-0.5 cursor-pointer rounded-lg text-white"
      onClick={() => (width <= 764 ? routeChange() : console.log(name))}
      style={{ backgroundColor: "#1c1c1e" }}
    >
      <img src={img} alt="Punk" className="w-full rounded-t-xl" />
      <div className="mx-5 my-6 ">
        <section>
          <div className=" text-xl font-medium ">{name}</div>
          <div className=" text-xl font-bold text-gray-400 ">.#{id}</div>
          <div className=" w-5 flex  items-center my-2">
            <img src={eth} alt="" className="m-1" />
            <label className="font-medium m-1">{properties[0].value}</label>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CollectionCard;
