import React from "react";
import "./style.css";

const LearnMoreBtn = (props) => {
  return (
    <div className="button-div">
      <button className="button-learn-more">{props.title}</button>
    </div>
  );
};

export default LearnMoreBtn;
