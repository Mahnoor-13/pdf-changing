import React, { useState } from "react";
import profile from "../../../assets/profile.png";
import logo from "../../../assets/logo.png";
import dropdown2 from "../../../assets/dropdown2.png";
import loansnav from "../../../assets/loansnav.png";
import mortgages from "../../../assets/mortgages.png";
import creditcard from "../../../assets/creditcard.png";
import autonav from "../../../assets/autonav.png";
import finincialIcon from "../../../assets/finincial.png";
import phone from "../../../assets/phone.png";
import "../style.css";

const ResponsiveNav = () => {
  const [active, setActive] = useState(false);
  const [showLoans, setShowLoans] = useState(false);
  const [showMortgages, setShowMortgages] = useState(false);
  const [showCredit, setShowCredit] = useState(false);
  const [showAuto, setAuto] = useState(false);
  const [finincial, setfinincial] = useState(false);

  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    setActive(!active);

    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };

  const handleLoans = () => {
    setShowLoans(!showLoans);
    setShowCredit(false);
    setShowMortgages(false);
    setfinincial(false);
    setAuto(false);
  };

  const handlefinancial = () => {
    setShowLoans(false);
    setShowCredit(false);
    setShowMortgages(false);
    setfinincial(!finincial);
    setAuto(false);
  };

  const handleMortgages = () => {
    setShowLoans(false);
    setShowCredit(false);
    setShowMortgages(!showMortgages);
    setfinincial(false);
    setAuto(false);
  };

  const handleCredit = () => {
    setShowLoans(false);
    setShowCredit(!showCredit);
    setShowMortgages(false);
    setfinincial(false);
    setAuto(false);
  };
  const handleAuto = () => {
    setShowLoans(false);
    setShowCredit(false);
    setShowMortgages(false);
    setfinincial(false);
    setAuto(!showAuto);
  };

  return (
    <div className="responsive-top-navbar">
      {active ? (
        <div
          className="close-nav"
          onClick={() => {
            setActive(false);
            if (icon === "nav__toggler") {
              setIcon("nav__toggler toggle");
            } else setIcon("nav__toggler");
          }}
        />
      ) : null}

      <img src={profile} alt="profile" />
      <img src={logo} alt="logo" />

      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>

      {active === true ? (
        <div className="nav__menu">
          <div>
            <div className="navbar-items" onClick={handleLoans}>
              <div className="nav-img">
                <img className="icons-nav" src={loansnav} alt="loan" />
                Loans
              </div>
              <img className="dropdown2" src={dropdown2} alt="down" />
            </div>

            {showLoans ? (
              <div className="responsive-nav-options">
                <p className="options-name">Personal Loans</p>
                <p className="options-name">Debt Consolidation</p>
                <p className="options-name">Business Loans</p>
                <p className="options-name">Student Loans</p>
                <p className="options-name">Student Loan Refinance</p>
              </div>
            ) : null}
          </div>

          <div>
            <div className="navbar-items" onClick={handleMortgages}>
              <div className="nav-img">
                <img className="icons-nav" src={mortgages} alt="loan" />
                Mortgages
              </div>
              <img className="dropdown2" src={dropdown2} alt="down" />
            </div>

            {showMortgages ? (
              <div className="responsive-nav-options">
                <p className="options-name">Mortgage Rates</p>
                <p className="options-name">Refinance Rates</p>
                <p className="options-name">Cash Out Refinance</p>
              </div>
            ) : null}
          </div>

          <div>
            <div className="navbar-items" onClick={handleCredit}>
              <div className="nav-img">
                <img className="icons-nav" src={creditcard} alt="loan" />
                Credit Cards
              </div>
              <img className="dropdown2" src={dropdown2} alt="down" />
            </div>

            {showCredit ? (
              <div className="responsive-nav-options">
                <p className="options-name">
                  Best Balance Transfer Credit Cards
                </p>
                <p className="options-name">Best Rewards Credit Cards</p>
                <p className="options-name">Best Cash Back Credit Cards</p>
              </div>
            ) : null}
          </div>
          <div>
            <div className="navbar-items" onClick={handleAuto}>
              <div className="nav-img">
                <img className="icons-nav" src={autonav} alt="loan" />
                Auto
              </div>
              <img className="dropdown2" src={dropdown2} alt="down" />
            </div>
            {showAuto ? (
              <div className="responsive-nav-options">
                <p className="options-name">Auto Loans</p>
                <p className="options-name">Auto Refinance</p>
              </div>
            ) : null}
          </div>

          <div>
            <div className="navbar-items" onClick={handlefinancial}>
              <div className="nav-img">
                <img src={finincialIcon} alt="loan" className="icons-nav" />
                Finincial Help
              </div>
              <img className="dropdown2" src={dropdown2} alt="down" />
            </div>
            {finincial ? (
              <div className="responsive-nav-options">
                <p className="options-name">Debt Relief</p>
                <p className="options-name">Credit Repair</p>
                <p className="options-name">Insurance</p>
              </div>
            ) : null}
          </div>

          <div className="">
            <button className=" inherit-font signup-responsive">Signup</button>

            <button className=" inherit-font signup-responsive">Login</button>
            <div className="options-name phone-responsive">
              <img src={phone} alt="phone" className="icons-nav" />
              1-800-813-4620
            </div>
          </div>
        </div>
      ) :
      null}
    </div>
  );
};

export default ResponsiveNav;
