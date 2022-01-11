import React, { useEffect } from "react";
import useWindowDimensions from "../customHooks/getWindowDimesions";
import CollectionCard from "./CollectionCard";

const PunkList = ({ punkList, onSelect }) => {
  const { width } = useWindowDimensions();
  useEffect(() => {
    if (punkList[0]) onSelect(punkList[0]);
  }, [punkList, onSelect]);
  return (
    <div
      className={
        width <= 764
          ? "flex flex-1 flex-wrap"
          : "grid grid-flow-row grid-cols-1 lg:grid-cols-3 xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-1 auto-rows-max  gap-2  "
      }
    >
      {punkList.map((punkData) => (
        <div onClick={() => onSelect(punkData)}>
          <CollectionCard
            id={punkData.id}
            name={punkData.name}
            properties={punkData.traits}
            img={punkData.image_url}
          />
        </div>
      ))}
    </div>
  );
};

export default PunkList;
