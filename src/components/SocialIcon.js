import React from "react";
import { BsTwitter } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";

const SocialIcon = () => {
  return (
    <div className="flex ">
      <div className="rounded-full border-2 p-4 h-16 w-16 flex items-center justify-center mx-2 ">
        <BsTwitter color="white" size={28} />
      </div>
      <div className="rounded-full border-2 p-4 h-16 w-16 flex items-center justify-center mx-2 ">
        <RiInstagramFill color="white" size={28} />
      </div>
    </div>
  );
};

export default SocialIcon;
