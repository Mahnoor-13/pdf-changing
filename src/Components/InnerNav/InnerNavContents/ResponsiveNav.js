import React from "react";
import personalLoans from "../../../assets/personalLoans.png";
import showmore from "../../../assets/showmore.png";
import "../style.css";

const responsiveNav = () => {
  return (
    <div className="responsive-center-nav">
      <div className="tabs-background">
        <div className="icon-title">
          <img src={personalLoans} alt="personalloans" />
          <p className="loan-title-responsive">Personal Loans</p>
        </div>
        <img src={showmore} alt="showmore" />
      </div>


      <div className="tabs-background">
        <div className="icon-title">
          <img src={personalLoans} alt="personalloans" />
          <p className="loan-title-responsive">Personal Loans</p>
        </div>
        <img src={showmore} alt="show more" />
      </div>



      <div className="tabs-background">
        <div className="icon-title">
          <img src={personalLoans} alt="personalloans" />
          <p className="loan-title-responsive">Personal Loans</p>
        </div>
        <img src={showmore} alt="show more" />
      </div>




      <div className="tabs-background">
        <div className="icon-title">
          <img src={personalLoans} alt="personalloans" />
          <p className="loan-title-responsive">Personal Loans</p>
        </div>
        <img src={showmore} alt="show more" />
      </div>



    </div>
  );
};

export default responsiveNav;
