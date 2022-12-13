import React from "react";
import logo from "../../assets/logo.png";
import backButton from "../../assets/backbutton.png";
import { useNavigate } from "react-router-dom";

import "./style.css";

const QuestionsHeader = () => {
  let navigate = useNavigate();

  return (
    <div className="questions-header-main">
      <img
        src={backButton}
        alt="backbutton"
        onClick={() => navigate(-1)}
        className="backbtn"
      />
      <img src={logo} alt="logo" className="questions-logo" />
      <div className="questions-phone-number-div">
        <p className="questions-phone-text2">
          Call us <span className="questions-phone-text">888-246-4181</span>
        </p>
        <p className="questions-phone-text2">disclosures</p>
      </div>
    </div>
  );
};

export default QuestionsHeader;
