import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import PunkDetails from "./screens/PunkDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="details" element={<PunkDetails />} />
    </Routes>
  );
}

export default App;
