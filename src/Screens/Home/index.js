import React from "react";
// import Navbar from "../../../Components/Navbar/index.js";
import Navbar from "../../Components/Navbar/index.js";
import Home from "./HomeContent/Home";
import "./style.css";

function index({ ...props }) {
  return (
    <div className="">
      <div>
        <Navbar />
      </div>
      <div>
        <Home />
      </div>
    </div>
  );
}

export default index;
