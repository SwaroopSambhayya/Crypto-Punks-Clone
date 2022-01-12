import React from "react";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { getPunkList } from "../api/get_punk_collection";
import PunkList from "../components/PunkList";
import MainCard from "../components/MainCard";
const Home = () => {
  const [punkList, setPunklList] = useState([]);
  const [selectedPunk, setSelectedPunk] = useState({});
  useEffect(() => {
    getPunkList(setPunklList);
  }, []);
  console.log(punkList);
  return (
    <div className=" bg-black scroll-smooth  ">
      <Header showBack={false} />
      <MainCard selectedPunk={selectedPunk} />
      <PunkList punkList={punkList} onSelect={setSelectedPunk} />
    </div>
  );
};

export default Home;
