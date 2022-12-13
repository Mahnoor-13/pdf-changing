import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import "./style.css";

const PersonalLoan = ({setPersonal}) => {
  let navigate = useNavigate();

  return (
    <div className="personal-loan-question-main">
      <p className="personal-loan-text">PERSONAL LOAN</p>
      <p className="loan-purpose-text">How much would you like to borrow?</p>
      slider here
      <button className="button-continue" onClick={() => setPersonal(true)}>
        Continue
      </button>
    </div>
  );
};

export default PersonalLoan;
