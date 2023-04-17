import CalcSection from "../calcSection/CalcSection";
import DisplaySection from "../displaySection/DisplaySection";
import "./style.css";
import startData from "./../../data.js";
import { useState } from "react";

const MainBlock = () => {
  const [data, setData] = useState(startData);

  return (
    <div className="main-block">
      <CalcSection data={data} setData={setData} />
      <DisplaySection data={data} setData={setData} />
    </div>
  );
};

export default MainBlock;
