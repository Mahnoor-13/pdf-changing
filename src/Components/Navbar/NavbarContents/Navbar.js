import React, { useState } from "react";
import logo from "../../../assets/logo.png";
import dropdown from "../../../assets/dropdown.png";
import search from "../../../assets/search.png";
import personalLoans from "../../../assets/personalLoans.png";
import debt from "../../../assets/debt.png";
import business from "../../../assets/business.png";
import student from "../../../assets/student.png";
import loanRefinance from "../../../assets/loanRefinance.png";
import mortgage from "../../../assets/mortgage.png";
import refinance from "../../../assets/refinance.png";
import cash from "../../../assets/cash.png";
import credit from "../../../assets/credit.png";
import rewards from "../../../assets/rewards.png";
import transfer from "../../../assets/transfer.png";
import auto from "../../../assets/auto.png";
import autoRefinance from "../../../assets/autoRefinance.png";
import relief from "../../../assets/relief.png";
import repair from "../../../assets/repair.png";
import insurance from "../../../assets/insurance.png";

import "../style.css";

const Navbar = () => {
  const [showloans, setShowLoans] = useState(false);
  const [showMortages, setShowMortages] = useState(false);
  const [showCreditCards, setShowCreditCards] = useState(false);
  const [showAuto, setShowAuto] = useState(false);
  const [showFinincial, setShowFinincial] = useState(false);

  const handleLoans = () => {
    setShowLoans(!showloans);
    setShowMortages(false);
    setShowCreditCards(false);
    setShowFinincial(false);
    setShowAuto(false);
  };
  const handleMortages = () => {
    setShowMortages(!showMortages);
    setShowLoans(false);
    setShowCreditCards(false);
    setShowFinincial(false);
    setShowAuto(false);
  };

  const handleCreditCards = () => {
    setShowMortages(false);
    setShowLoans(false);
    setShowCreditCards(!showCreditCards);
    setShowFinincial(false);
    setShowAuto(false);
  };
  const handleAuto = () => {
    setShowMortages(false);
    setShowLoans(false);
    setShowCreditCards(false);
    setShowAuto(!showAuto);
    setShowFinincial(false);
  };

  const handleFinincial = () => {
    setShowMortages(false);
    setShowLoans(false);
    setShowCreditCards(false);
    setShowAuto(false);
    setShowFinincial(!showFinincial);
  };
  const closeAll = () => {
    setShowMortages(false);
    setShowLoans(false);
    setShowCreditCards(false);
    setShowAuto(false);
    setShowFinincial(false);
  };

  return (
    <div className="navbar-container">
      {showloans ||
      showCreditCards ||
      showAuto ||
      showFinincial ||
      showMortages ? (
        <div onClick={closeAll} className="close-tabs" />
      ) : null}
      <div className="navbar-main">
        <img className="logo" src={logo} alt="logo" />
        <div>
          <div
            className={showloans ? "navbar-tabs-active" : "navbar-tabs"}
            onClick={handleLoans}
          >
            Loans
            <img className="dropdown-nav" src={dropdown} alt="down" />
          </div>
          {showloans ? (
            <div className="loans">
              <div className="dropdown-items ">
                <img src={personalLoans} alt="Personal Loans" />
                Personal Loans
              </div>

              <div className="dropdown-items">
                <img src={debt} alt="Debt Consolidation" />
                Debt Consolidation
              </div>

              <div className="dropdown-items">
                <img src={business} alt="Business Loans" />
                Business Loans
              </div>

              <div className="dropdown-items">
                <img src={student} alt="Student Loans" />
                Student Loans
              </div>

              <div className="dropdown-items">
                <img src={loanRefinance} alt="Student Loans Refinance" />
                Student Loans Refinance
              </div>
            </div>
          ) : null}
        </div>

        <div>
          <div
            className={showMortages ? "navbar-tabs-active" : "navbar-tabs"}
            onClick={handleMortages}
          >
            Mortgages
            <img className="dropdown-nav" src={dropdown} alt="down" />
          </div>
          {showMortages ? (
            <div className="loans">
              <div className="dropdown-items ">
                <img src={mortgage} alt="Personal Loans" />
                Mortgage Rates
              </div>

              <div className="dropdown-items">
                <img src={refinance} alt="Debt Consolidation" />
                Debt Consolidation
              </div>

              <div className="dropdown-items">
                <img src={cash} alt="Business Loans" />
                Business Loans
              </div>
            </div>
          ) : null}
        </div>

        <div>
          <div
            className={showCreditCards ? "navbar-tabs-active" : "navbar-tabs"}
            onClick={handleCreditCards}
          >
            Credit Cards
            <img className="dropdown-nav" src={dropdown} alt="down" />
          </div>

          {showCreditCards ? (
            <div className="loans">
              <div className="dropdown-items ">
                <img src={transfer} alt="Personal Loans" />
                Best Balance Transfer Credit Cards
              </div>

              <div className="dropdown-items">
                <img src={rewards} alt="Debt Consolidation" />
                Best Rewards Credit Cards
              </div>

              <div className="dropdown-items">
                <img src={credit} alt="Business Loans" />
                Best Cash Back Credit Cards
              </div>
            </div>
          ) : null}
        </div>
        <div>
          <div
            className={showAuto ? "navbar-tabs-active" : "navbar-tabs"}
            onClick={handleAuto}
          >
            Auto
            <img className="dropdown-nav" src={dropdown} alt="down" />
          </div>

          {showAuto ? (
            <div className="loans">
              <div className="dropdown-items ">
                <img src={auto} alt="Personal Loans" />
                Auto Loans
              </div>

              <div className="dropdown-items">
                <img src={autoRefinance} alt="Debt Consolidation" />
                Auto Refinance
              </div>
            </div>
          ) : null}
        </div>

        <div>
          <div
            className={showFinincial ? "navbar-tabs-active" : "navbar-tabs"}
            onClick={handleFinincial}
          >
            Finincial Help
            <img className="dropdown-nav" src={dropdown} alt="down" />
          </div>

          {showFinincial ? (
            <div className="loans">
              <div className="dropdown-items ">
                <img src={relief} alt="Personal Loans" />
                Debt Relief
              </div>

              <div className="dropdown-items">
                <img src={repair} alt="Debt Consolidation" />
                Credit Repair
              </div>

              <div className="dropdown-items">
                <img src={insurance} alt="Business Loans" />
                Insurance
              </div>
            </div>
          ) : null}
        </div>
      </div>
      <div className="navbar-right-tabs">
        <p className="white-font inherit-font signup">Sign up</p>

        <p className="white-font inherit-font signup">Log in</p>

        <p className="white-font inherit-font signup phone-num">
          1-800-813-4620
        </p>

        <img src={search} alt="search" className="signup" />
      </div>
    </div>
  );
};

export default Navbar;
