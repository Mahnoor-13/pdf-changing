import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import personalLoans from "../../../assets/personalLoans.png";
import personalEquity from "../../../assets/personalEquity.png";
import homePurchase from "../../../assets/Home.png";
import homeRefinance from "../../../assets/homeRefinance.png";
import creditCards from "../../../assets/creditCards.png";
import business from "../../../assets/businessloans.png";
import freeCreditScore from "../../../assets/freeCreditScore.png";
import more from "../../../assets/more.png";
import prev from "../../../assets/prev.png";
import mollypersonal from "../../../assets/molly-personal.jpg";
import bullseyehome from "../../../assets/bullseye-home.jpg";
import MollyMortgage from "../../../assets/Molly-Mortgage.jpg";
import MollyHomeRefi from "../../../assets/Molly-Home-Refi.jpg";
import mollycreditcards from "../../../assets/molly-credit-cards.jpg";
import MollyBusinessLoans from "../../../assets/Molly-Business-Loans.jpg";
import MollyCredit from "../../../assets/Molly-Credit.jpg";
import mollyinsurance from "../../../assets/molly-insurance.jpg";
import bullseyereversemortgage from "../../../assets/bullseye-reverse-mortgage.jpg";
import bullseyedebtrelief from "../../../assets/bullseye-debt-relief.jpg";
import bullseyecreditrepair from "../../../assets/bullseye-credit-repair.jpg";
import bullseyeautoloan from "../../../assets/bullseye-auto-loan.jpg";
import bullseyebanking from "../../../assets/bullseye-banking.jpg";
import bullseyestudentloans from "../../../assets/bullseye-student-loans.jpg";

import "react-tabs/style/react-tabs.css";
import "../style.css";
import BlueText from "../../BlueText/BlueText";
import LoansInformations from "../../LoansInformations/LoansInformations";
import BlueButton from "../../BlueButton/BlueButton";
import LearnMore from "../../LearnMoreBtn/LearnMoreBtn";
import { useNavigate } from "react-router-dom";
const InnerNav = () => {
  let navigate = useNavigate();

  const [showMore, setShowMore] = useState(false);
  const [showPrev, setShowPrev] = useState(true);

  return (
    <div className="inner-nav-container">
      <Tabs>
        {showPrev ? (
          <>
            <TabList>
              <div className="inner-nav-tabs">
                <div className="inner-nav-tabs">
                  <Tab>
                    <img src={personalLoans} alt="balance" />
                    <p className="tab-name">Personal Loans</p>
                    <div className="hover"></div>
                  </Tab>

                  <Tab>
                    <img src={personalEquity} alt="balance" />
                    <p className="tab-name">Home Equity</p>
                  </Tab>

                  <Tab>
                    <img src={homePurchase} alt="balance" />
                    <p className="tab-name">Home Purchase</p>
                  </Tab>
                  <Tab>
                    <img src={homeRefinance} alt="balance" />
                    <p className="tab-name">Home Refinance</p>
                  </Tab>
                  <Tab>
                    <img src={creditCards} alt="balance" />
                    <p className="tab-name">Credit Cards</p>
                  </Tab>

                  <Tab>
                    <img src={business} alt="balance" />
                    <p className="tab-name">Business Loans</p>
                  </Tab>

                  <Tab>
                    <img src={freeCreditScore} alt="balance" />
                    <p className="tab-name">Free Credit Score</p>
                  </Tab>

                  <div
                    className="show-more"
                    onClick={() => {
                      setShowMore(true);
                      setShowPrev(false);
                    }}
                  >
                    <img src={more} />
                    <BlueText title="Show More Options" />
                  </div>
                </div>
              </div>
            </TabList>

            <TabPanel>
              <div className="info-main">
                <div className="left-info">
                  <LoansInformations
                    title="Personal Loans

"
                    heading="Find the right personal loan rate for you

"
                    text="Need to consolidate debt or make a large purchase? We bring the lenders to you so you can shop and compare personal loan offers in minutes.

"
                  />
                  <BlueButton
                    title="Compare Rates"
                    onClick={() => navigate("/Questions")}
                  />
                </div>
                <div className="info-img">
                  <img
                    src={mollypersonal}
                    alt="molly"
                    className="molly-image"
                  />
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="info-main">
                <div className="left-info">
                  <LoansInformations
                    title="Home Equity"
                    heading="Put your home’s equity to use"
                    text="With home values higher than ever, now’s the time to make the most of your equity. Compare offers in minutes."
                  />
                  <div className="home-equity-buttons">
                    <BlueButton title="Compare Rates" />
                    <LearnMore title="Learn More" />
                  </div>
                </div>
                <div className="info-img">
                  <img src={bullseyehome} alt="molly" className="molly-image" />
                </div>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="info-main">
                <div className="left-info">
                  <LoansInformations
                    title="Home Purchase"
                    heading="Compare top mortgage lenders"
                    text="Get multiple lenders to compete for your business and see how much you could save. It pays to compare your options — literally."
                  />
                  <div className="home-equity-buttons">
                    <BlueButton title="Compare Rates" />
                    <LearnMore title="Learn More" />
                  </div>
                </div>
                <div className="info-img">
                  <img
                    src={MollyMortgage}
                    alt="molly"
                    className="molly-image"
                  />
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="info-main">
                <div className="left-info">
                  <LoansInformations
                    title="Home Refinance

                "
                    heading="Compare mortgage refinance offers

                "
                    text="Get personalized refinance offers from multiple lenders in minutes and see how much you could save on your mortgage.

                "
                  />
                  <div className="home-equity-buttons">
                    <BlueButton title="Compare Rates" />
                    <LearnMore title="Learn More" />
                  </div>
                </div>
                <div className="info-img">
                  <img
                    src={MollyHomeRefi}
                    alt="molly"
                    className="molly-image"
                  />
                </div>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="info-main">
                <div className="left-info">
                  <LoansInformations
                    title="Credit Cards"
                    heading="Shop and compare credit cards"
                    text="From earning rewards to transferring a balance, find the right credit card to help you score everyday wins."
                  />
                  <BlueButton title="Compare Credit Rates" />
                </div>
                <div className="info-img">
                  <img
                    src={mollycreditcards}
                    alt="molly"
                    className="molly-image"
                  />
                </div>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="info-main">
                <div className="left-info">
                  <LoansInformations
                    title="Business Loans"
                    heading="Shop and compare business loans"
                    text="Our network of lenders will compete for your business, so you can get the funding you need for yours."
                  />
                  <div className="home-equity-buttons">
                    <BlueButton title="Compare Business Rates" />
                    <LearnMore title="Learn More" />
                  </div>
                </div>
                <div className="info-img">
                  <img
                    src={MollyBusinessLoans}
                    alt="molly"
                    className="molly-image"
                  />
                </div>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="info-main">
                <div className="left-info">
                  <LoansInformations
                    title="Free Credit Score

                "
                    heading="Check your credit score for free

                "
                    text="Plus, get tips to boost your score. Customers who use our credit score feature for 2+ years and improve their credit see an increase of 30 points, on average.

                "
                  />
                  <div className="home-equity-buttons">
                    <BlueButton title="Compare Business Rates" />
                    <LearnMore title="Learn More" />
                  </div>
                </div>
                <div className="info-img">
                  <img src={MollyCredit} alt="molly" className="molly-image" />
                </div>
              </div>
            </TabPanel>
          </>
        ) : null}
      </Tabs>

      <Tabs>
        {showMore ? (
          <>
            <TabList>
              <div className="inner-nav-tabs">
                <div className="inner-nav-tabs">
                  <div
                    className="show-more"
                    onClick={() => {
                      setShowPrev(true);
                      setShowMore(false);
                    }}
                  >
                    <img src={prev} />
                    <BlueText title="Previous Loans" />
                  </div>
                  <Tab>
                    <img src={personalLoans} alt="balance" />
                    <p className="tab-name">Insurance</p>
                    <div className="hover"></div>
                  </Tab>

                  <Tab>
                    <img src={personalEquity} alt="balance" />
                    <p className="tab-name">Reverse Mortgage</p>
                  </Tab>

                  <Tab>
                    <img src={homePurchase} alt="balance" />
                    <p className="tab-name">Debt Relief</p>
                  </Tab>
                  <Tab>
                    <img src={homeRefinance} alt="balance" />
                    <p className="tab-name">Credit Repair</p>
                  </Tab>
                  <Tab>
                    <img src={creditCards} alt="balance" />
                    <p className="tab-name">Auto Loans</p>
                  </Tab>

                  <Tab>
                    <img src={business} alt="balance" />
                    <p className="tab-name">Banking Products</p>
                  </Tab>

                  <Tab>
                    <img src={freeCreditScore} alt="balance" />
                    <p>Student Loans</p>
                  </Tab>
                </div>
              </div>
            </TabList>
            <TabPanel>
              <div className="info-main">
                <div className="left-info">
                  <LoansInformations
                    title="Insurance

"
                    heading="Find the best insurance rates for you"
                    text="Looking for coverage that fits your needs? Save more and spend less by comparing insurance rates."
                  />
                  <BlueButton title="Learn More" />
                </div>
                <div className="info-img">
                  <img
                    src={mollyinsurance}
                    alt="molly"
                    className="molly-image"
                  />
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="info-main">
                <div className="left-info">
                  <LoansInformations
                    title="Reverse Mortgage"
                    heading="Get a reverse mortgage and start your retirement"
                    text="Access your home’s equity while keeping your finances steady for the years ahead. Get personalized quotes from our top lenders."
                  />
                  <div className="home-equity-buttons">
                    <BlueButton title="Compare Rates" />
                    <LearnMore title="Learn More" />
                  </div>
                </div>
                <div className="info-img">
                  <img
                    src={bullseyereversemortgage}
                    alt="molly"
                    className="molly-image"
                  />
                </div>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="info-main">
                <div className="left-info">
                  <LoansInformations
                    title="Debt Relief"
                    heading="Compare debt relief options"
                    text="It’s never too late to find relief. Stop juggling bills and resolve your debt with one simple monthly payment."
                  />
                  <div className="home-equity-buttons">
                    <BlueButton title="Compare Rates" />
                    <LearnMore title="Learn More" />
                  </div>
                </div>
                <div className="info-img">
                  <img
                    src={bullseyedebtrelief}
                    alt="molly"
                    className="molly-image"
                  />
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="info-main">
                <div className="left-info">
                  <LoansInformations
                    title="Credit Repair"
                    heading="Give your credit a boost

                "
                    text="Restore your credit score and boost your financial health. Explore credit repair options."
                  />
                  <div className="home-equity-buttons">
                    <BlueButton title="Compare Rates" />
                  </div>
                </div>
                <div className="info-img">
                  <img
                    src={bullseyecreditrepair}
                    alt="molly"
                    className="molly-image"
                  />
                </div>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="info-main">
                <div className="left-info">
                  <LoansInformations
                    title="Credit Cards"
                    heading="Shop and compare credit cards"
                    text="From earning rewards to transferring a balance, find the right credit card to help you score everyday wins."
                  />
                  <BlueButton title="Compare Credit Rates" />
                </div>
                <div className="info-img">
                  <img
                    src={bullseyeautoloan}
                    alt="molly"
                    className="molly-image"
                  />
                </div>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="info-main">
                <div className="left-info">
                  <LoansInformations
                    title="Business Loans"
                    heading="Shop and compare business loans"
                    text="Our network of lenders will compete for your business, so you can get the funding you need for yours."
                  />
                  <div className="home-equity-buttons">
                    <BlueButton title="Compare Business Rates" />
                    <LearnMore title="Learn More" />
                  </div>
                </div>
                <div className="info-img">
                  <img
                    src={bullseyebanking}
                    alt="molly"
                    className="molly-image"
                  />
                </div>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="info-main">
                <div className="left-info">
                  <LoansInformations
                    title="Free Credit Score

                "
                    heading="Check your credit score for free

                "
                    text="Plus, get tips to boost your score. Customers who use our credit score feature for 2+ years and improve their credit see an increase of 30 points, on average.

                "
                  />
                  <div className="home-equity-buttons">
                    <BlueButton title="Compare Business Rates" />
                    <LearnMore title="Learn More" />
                  </div>
                </div>
                <div className="info-img">
                  <img
                    src={bullseyestudentloans}
                    alt="molly"
                    className="molly-image"
                  />
                </div>
              </div>
            </TabPanel>
          </>
        ) : null}
      </Tabs>
    </div>
  );
};

export default InnerNav;
