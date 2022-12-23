import React from "react";
import PdfHeadings from "../../../../Components/PdfHeadings/PdfHeadings";
import PdfInput from "../../../../Components/PdfInput/PdfInput";
import PdfParagraph from "../../../../Components/PdfParagraph/PdfParagraph";
import Pdfspantag from "../../../../Components/Pdfspantag/Pdfspantag";
import PdfCheckbox from "../../../../Components/PdfCheckbox/PdfCheckbox";

import "../style.css";
import PdfSinput from "../../../../Components/PdfSinput/PdfSinput";

const PropertyInfo = (props) => {
  return (
    <div>
      <PdfHeadings title="II. PROPERTY INFORMATION AND PURPOSE OF LOAN" />

      <div className="propertyaddress-input">
        <PdfInput title="Subject Property Address (street, city, state & ZIP)" />
        <PdfSinput title="No. of Units" />
      </div>

      <div className="mortage-input">
        <PdfInput title="Legal Description of Subject Property (attach description if necessary)" />
      </div>

      <div className="mortage-input">
        <PdfSinput title="Year Built" />
      </div>

      <div>
        <span className="mortgage-checkbox">
          <strong>Purpose Of Loan :</strong>
        </span>
        <div className="mortgage-div">
          <div className="checkbox-title">
            <PdfCheckbox />
            <Pdfspantag title="Purchase" />
          </div>

          <div className="checkbox-title">
            <PdfCheckbox />
            <Pdfspantag title="Construction" />
          </div>
          <div className="checkbox-title">
            <PdfCheckbox />
            <Pdfspantag title="Other (explain) :" />
          </div>

          <div className="checkbox-title">
            <PdfCheckbox />
            <Pdfspantag title="Refinance :" />
          </div>
          <div className="checkbox-title">
            <PdfCheckbox />
            <Pdfspantag title="Construction-Permanent" />
          </div>
        </div>
      </div>

      <div>
        <span className="mortgage-checkbox">
          <strong>Property Will Be :</strong>
        </span>
        <div className="appliedFor-div">
          <div className="checkbox-title">
            <PdfCheckbox />
            <Pdfspantag title="Primary Residence" />
          </div>

          <div className="checkbox-title">
            <PdfCheckbox />
            <Pdfspantag title="Investment" />
          </div>
        </div>
      </div>

      <div>
        <span className="mortgage-checkbox">
          <strong>
            Complete this line if construction or construction-permanent loan:
          </strong>
        </span>

        <div className="complete-this-line-inputs-div"> 
            <div className="mortage-input">
              <PdfSinput title="Year Lot Aequired" />
            </div>
            <div className="mortage-input">
              <PdfSinput title="Original Cost" />
            </div>

          <div className="mortage-input">
            <PdfSinput  onChange={(e) => {
          setTimeout(() => {
            props.setName(e.target.value);
          }, 1000);
        }} title="Amount Existing Liens" />
          </div>
          <div className="mortage-input">
            <PdfSinput title="(a) Present Value of Lot" />
          </div>
          <div className="mortage-input">
            <PdfSinput title="(b) Cost of Improvements" />
          </div>
          <div className="mortage-input">
            <PdfSinput title="Total (a + b)" />
          </div>
        </div>
      </div>
      <div>
        <span className="mortgage-checkbox">
          <strong>Complete this line if this is a refinance loan:</strong>
        </span>
<div className="complete-this-line-inputs-div">
        <div className="mortage-input">
          <PdfSinput title="Year Acquired" />
        </div>
        <div className="mortage-input">
          <PdfSinput title="Original Cost" />
        </div>
        <div className="mortage-input">
          <PdfSinput title="Amount Existing Liens" />
        </div>
        <div className="mortage-input">
          <PdfSinput title="Purpose Of Refinance" />
        </div>
        <div className="mortage-input">
          <PdfSinput title="Describe Improvements" />
        </div>
        </div>

        <div className="inline-checkbox">
          <div className="checkbox-title">
            <PdfCheckbox />
            <Pdfspantag title="Made" />
          </div>

          <div className="checkbox-title">
            <PdfCheckbox />
            <Pdfspantag title="To Be Made" />
          </div>
        </div>
       <div className="mortage-input">
          <PdfSinput title="Cost $" />
        </div>
      </div>

       <div className="complete-this-line-inputs-div2">
      <div className="mortage-input">
        <PdfInput title="Title will be held in what Name(s)" />
      </div>

      <div className="mortage-input">
        <PdfInput title="Manager in which Title will be held" />
      </div>

      <div className="mortage-input">
        <PdfInput title="Source of Down Payment, Settlement Charges, and/or Subordinate Financing (explain)" />
      </div>

       </div>
      <span className="mortgage-checkbox">
        <strong>Estate will be held in :</strong>
      </span>

      <div className="inline-checkbox">
        <div className="checkbox-title">
          <PdfCheckbox />
          <Pdfspantag title="Fee simple" />
        </div>

        <div className="checkbox-title">
          <PdfCheckbox />
          <Pdfspantag title="Leasehold (show expiration date)" />
        </div>
      </div>
    </div>
  );
};

export default PropertyInfo;
