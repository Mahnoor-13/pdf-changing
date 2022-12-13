import React from "react";
import "./style.css"

const LoansInformations = (props) => {
  return (
    <div className="loans-div">
      <p className="loan-title">{props.title}</p>
      <h1 className="loan-heading">{props.heading}</h1>
      <p className="loan-text">{props.text}</p>
    </div>
  );
};

export default LoansInformations;
