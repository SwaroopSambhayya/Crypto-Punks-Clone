import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import CollectionCard from "./components/CollectionCard";
import { useEffect, useState } from "react";
import { getPunkList } from "./api/get_punk_collection";
import PunkList from "./components/PunkList";
import MainCard from "./components/MainCard";

function App() {
  const [punkList, setPunklList] = useState([]);
  const [selectedPunk, setSelectedPunk] = useState({});
  useEffect(() => {
    getPunkList(setPunklList);
  }, []);
  console.log(punkList);
  return (
    <div className=" bg-black scroll-smooth  ">
      <Header />
      <MainCard selectedPunk={selectedPunk} />
      <PunkList punkList={punkList} onSelect={setSelectedPunk} />
    </div>
  );
}

export default App;
