import React from "react";
import Heading from "../../../Components/Heading/Heading";
import TypeOfMortage from "./TypeOfMortage/TypeOfMortage";
import "./style.css";
import PdfParagraph from "../../../Components/PdfParagraph/PdfParagraph";
import PropertyInfo from "./PropertyInfo/PropertyInfo";
import BorrowInfo from "./BorrowInfo/BorrowInfo";

function Index(props) {
  return (
    <div className="main_container">
      <Heading title="Uniform Residential Loan Application" />
      <hr />
      <PdfParagraph
        title="This application is designed to be completed by the applicant(s) with the Lender’s assistance. Applicants should complete this form as “Borrower” or “Co-Borrower,” as applicable. Co-Borrower 
information must also be provided (and the appropriate box checked) when the income or assets of a person other than the Borrower (including the Borrower’s spouse) will be used as a basis for loan 
qualification or  the income or assets of the Borrower’s spouse or other person who has community property rights pursuant to state law will not be used as a basis for loan qualification, but his or her 
liabilities must be considered because the spouse or other person has community property rights pursuant to applicable law and Borrower resides in a community property state, the security property is 
located in a community property state, or the Borrower is relying on other property located in a community property state as a basis for repayment of the loan."
      />
      <br />

      <PdfParagraph title="If this is an application for joint credit, Borrower and Co-Borrower each agree that we intend to apply for joint credit (sign below): " />
      <div className="hr-tag-div">
        <div className="main-container-hr-tag">
          <PdfParagraph title="Borrower" />
        </div>

        <div className="main-container-hr-tag">
          <PdfParagraph title="Co-Borrower" />
        </div>
      </div>

      <TypeOfMortage />
      <PropertyInfo setName={props.setName} />
      <BorrowInfo />
    </div>
  );
}

export default Index;
