import React, { useState } from "react";
import personalLoans from "../../../assets/personalLoans.png";
import showmore from "../../../assets/showmore.png";
import LoansInformations from "../../LoansInformations/LoansInformations";
import { useNavigate } from "react-router-dom";
import BlueButton from "../../BlueButton/BlueButton";
import "../style.css";

const ResponsiveNav = () => {
  let navigate = useNavigate();
  const [showDescription, setShowDescription] = useState(false)

  return (
    <div className="responsive-center-nav">
      <div>
        <div className="tabs-background" onClick={() => setShowDescription(!showDescription)}>
          <div className="icon-title">
            <img src={personalLoans} alt="personalloans" />
            <p className="loan-title-responsive">Personal Loans</p>
          </div>
          <img src={showmore} alt="showmore" />
        </div>

         {showDescription ?  <div>
            <LoansInformations
  
              heading="Find the right personal loan rate for you

"
              text="Need to consolidate debt or make a large purchase? We bring the lenders to you so you can shop and compare personal loan offers in minutes.

"
            />
            <BlueButton
              title="Compare Rates"
              onClick={() => navigate("/Questions")}
            />
          </div> : null}
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

export default ResponsiveNav;
