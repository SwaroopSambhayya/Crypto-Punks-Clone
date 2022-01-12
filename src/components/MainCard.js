import React from "react";
import useWindowDimensions from "../customHooks/getWindowDimesions";
import SocialIcon from "./SocialIcon";
import { MdContentCopy } from "react-icons/md";
import CopyToClipboard from "react-copy-to-clipboard";
const MainCard = ({ selectedPunk }) => {
  const { width, height } = useWindowDimensions();
  console.log(width);
  return Object.keys(selectedPunk).length !== 0 && width >= 768 ? (
    <DesktopCard selectedPunk={selectedPunk} />
  ) : (
    <div></div>
  );
};

export default MainCard;

const DesktopCard = ({ selectedPunk }) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-1  h-96 ">
        <img
          src={selectedPunk?.image_original_url}
          alt=""
          className="  rounded sm:rounded-lg  md:rounded-2xl flex m-4 h-96"
        />
        <div className="flex flex-col justify-between ">
          <label className="font-bold  m-4 text-white text-3xl sm:text-9xl  ">
            {selectedPunk?.name}
            <span className="font-bold text-3xl sm:text-8xl text-gray-400">
              .#{selectedPunk?.id}
            </span>
          </label>
          <div className="flex justify-between flex-wrap items-center">
            <OwnerInfo
              profile_img={selectedPunk?.owner?.profile_img_url}
              asset_contract={selectedPunk?.asset_contract?.address}
            />
            <section>
              <SocialIcon />
            </section>
          </div>
        </div>
      </div>
      <div className=" bg-gray-700 mx-4 my-6 h-1 rounded flex flex-1" />
    </div>
  );
};

export const OwnerInfo = ({ profile_img, asset_contract }) => {
  return (
    <section className="flex   items-center mx-2 my-4 ">
      <img src={profile_img} alt="" className="  h-16 rounded-full    " />
      <div className="flex flex-col truncate   ">
        <div className="flex items-center ">
          <label className="text-white ml-2 truncate ">{asset_contract}</label>
          <div className="cursor-pointer lg:mx-2">
            <CopyToClipboard text={asset_contract}>
              <MdContentCopy size={20} color="white" />
            </CopyToClipboard>
          </div>
        </div>
        <label className="text-cyan-500 ml-2">@swaroopsambhayya</label>
      </div>
    </section>
  );
};
