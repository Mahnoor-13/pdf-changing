import React from "react";
import QuestionsHeader from "../../../../Components/QuestionsHeader/QuestionsHeader";
import PersonalLoan from "./LoanContent";
import { useNavigate } from "react-router-dom";
import "./style.css";

const Index = (props) => {
  let navigate = useNavigate();

  return (
    <div className="questions-main">
      <img
        className="back-btn"
        src={require("../../../../assets/back-questions.png")}
        onClick={() => navigate(-1)}
        alt="back"
      />
      <PersonalLoan
        setAmount={props.setAmount}
        setPersonal={props.setPersonal}
        name={props.name}
        setName={props.setName}
        setAlternateName={props.setAlternateName}
        setDob={props.setDob}
        setJointCredit={props.setJointCredit}
        setSsn={props.setSsn}
      />
    </div>
  );
};

export default Index;
