import React from "react";
import Navbar from "./NavbarContents/Navbar";
import ResponsiveNavbar from "./NavbarContents/ResponsiveNavbar";
import "./style.css"

const index = () => {
  return (
    <div>
      <div className="nav">
        <Navbar />
      </div>
      <div className="responsive-nav">
        <ResponsiveNavbar />
      </div>
    </div>
  );
};

export default index;
