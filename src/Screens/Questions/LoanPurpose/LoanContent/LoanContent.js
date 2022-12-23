import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

import "./style.css";

const PersonalLoan = (props) => {
  // const [options, setOptions] = useState([
  //   "Debt Consulation",
  //   "Pat off Credit Cards",
  //   "Home Improvement",
  //   "Home Buying",
  //   "Major Purchase",
  // ]);
  // const [selectOption, setSelectOption] = useState("");
  // let navigate = useNavigate();

  const handleContinue = () => {
    props.setName(props.name);
    props.setAmount(true);
    props.setPersonal(false);
  };

  return (
    <div className="personal-loan-question-main">
      <p className="personal-loan-text">PERSONAL LOAN</p>
      <p className="loan-purpose-text">Select a loan purpose</p>
      Name
      <input
        onChange={(e) => {
          setTimeout(() => {
            props.setName(e.target.value);
          }, 1000);
        }}
        // value={props.name}
      />
      Alternate Names –
      <input
        onChange={(e) => {
          setTimeout(() => {
            props.setAlternateName(e.target.value);
          }, 3000);
        }}
        // value={props.name}
      />
      Social Security Number
      <input
        onChange={(e) => {
          setTimeout(() => {
            props.setSsn(e.target.value);
          }, 3000);
        }}
        // value={props.name}
      />
Ex
      <input
        onChange={(e) => {
          setTimeout(() => {
            props.setDob(e.target.value);
          }, 1000);
        }}
        // value={props.name}
      />

Joint Credit
      <input
        onChange={(e) => {
          setTimeout(() => {
            props.setJointCredit(e.target.value);
          }, 1000);
        }}
        // value={props.name}
      />
{/* 

Date of Birth
      <input
        onChange={(e) => {
          setTimeout(() => {
            props.setDob(e.target.value);
          }, 1000);
        }}
        // value={props.name}
      />


Date of Birth
      <input
        onChange={(e) => {
          setTimeout(() => {
            props.setDob(e.target.value);
          }, 1000);
        }}
        // value={props.name}
      />
 */}


      <button className="button-continue" onClick={handleContinue}>
        Continue
      </button>
    </div>
  );
};

export default PersonalLoan;
