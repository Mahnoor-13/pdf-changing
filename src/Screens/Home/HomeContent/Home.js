import React from "react";
import InnerNav from "../../../Components/InnerNav/index";
import "../style.css";

function Home() {
  return (
    <div className="App">

      <div className="home-container">
        <h1 className="heading-option">
          We show your option, you score the <span className="win">win</span>.
        </h1>
        <InnerNav />
      </div>


    </div>
  );
}

export default Home;
