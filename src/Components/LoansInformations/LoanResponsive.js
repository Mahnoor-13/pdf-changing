import React from "react";
import "./style.css"

const LoanResponsive = (props) => {
  return (
    <div className="loans-div">
      <p className="loan-title-responsive">{props.title}</p>
      <h1 className="loan-heading-responsive">{props.heading}</h1>
      <p className="loan-text-responsive">{props.text}</p>
    </div>
  );
};

export default LoanResponsive;
