import React from "react";
import AmountContent from "./AmountContent";
import { useNavigate } from "react-router-dom";

import "./style.css";

const Index = ({ setPersonal, setAmount }) => {
  // let navigate = useNavigate();

  return (
    <div className="questions-main">
      {/* <QuestionsHeader /> */}
      <img
        className="back-btn"
        src={require("../../../../assets/back-questions.png")}
        onClick={() => {
          setPersonal(true);
          setAmount(false);
        }}
        alt="back"
      />
      <AmountContent setPersonal={setPersonal} />
    </div>
  );
};

export default Index;
