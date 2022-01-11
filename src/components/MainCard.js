import React from "react";
import SocialIcon from "./SocialIcon";
const MainCard = ({ selectedPunk }) => {
  return Object.keys(selectedPunk).length !== 0 ? (
    <div className="flex flex-col">
      <div className="flex flex-1  h-96 ">
        <img
          src={selectedPunk?.image_original_url}
          alt=""
          className="  sm:rounded-lg  md:rounded-2xl flex m-4 h-96"
        />
        <div className="flex flex-col justify-between ">
          <label className="font-bold  m-4 text-white text-3xl sm:text-9xl  ">
            {selectedPunk?.name}
            <span className="font-bold text-3xl sm:text-8xl text-gray-400">
              .#{selectedPunk?.id}
            </span>
          </label>
          <div className="flex justify-between flex-wrap items-center">
            <section className="flex items-center">
              <img
                src={selectedPunk?.owner?.profile_img_url}
                alt=""
                className=" h-16 rounded-full  m-4 "
              />
              <div className="flex flex-col">
                <label className="text-white">
                  {selectedPunk?.asset_contract?.address}
                </label>
                <label className="text-cyan-500 ">@swaroopsambhayya</label>
              </div>
            </section>
            <section>
              <SocialIcon />
            </section>
          </div>
        </div>
      </div>
      <div className=" bg-gray-700 mx-4 my-6 h-1 rounded flex flex-1" />
    </div>
  ) : (
    <div></div>
  );
};

export default MainCard;