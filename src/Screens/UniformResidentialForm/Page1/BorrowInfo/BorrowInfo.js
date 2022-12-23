import React from "react";
import PdfHeadings from "../../../../Components/PdfHeadings/PdfHeadings";
import PdfInput from "../../../../Components/PdfInput/PdfInput";
import PdfParagraph from "../../../../Components/PdfParagraph/PdfParagraph";
import Pdfspantag from "../../../../Components/Pdfspantag/Pdfspantag";
import PdfCheckbox from "../../../../Components/PdfCheckbox/PdfCheckbox";
import "../style.css";
import PdfSinput from "../../../../Components/PdfSinput/PdfSinput";
import PdfThreeInlineHeading from "../../../../Components/PdfThreeInlineHeading/PdfThreeInlineHeading";

const BorrowInfo = () => {
  return (
    <div>
      <PdfThreeInlineHeading
        titleOne="Borrower"
        titleTwo="III. BORROWER INFORMATION"
        titleThree="Co-Borrower"
      />

      <div className="complete-this-line-inputs-div2">
        <PdfInput title="Borrower’s Name (include Jr. or Sr. if applicable" />
        <div className="mortage-input">
          <PdfSinput title="Social Security Number " />
        </div>
        <div className="mortage-input">
          <PdfSinput title="Home Phone (incl. area code)" />
        </div>
        <div className="mortage-input">
          <PdfSinput title="DOB (mm/dd/yyyy) " />
        </div>
        <div className="mortage-input">
          <PdfSinput title="Yrs. School " />
        </div>
      </div>
      <div>
        <div className="appliedFor-div">
          <div className="checkbox-title">
            <PdfCheckbox />
            <Pdfspantag title="Married" />
          </div>

          <div className="checkbox-title">
            <PdfCheckbox />
            <Pdfspantag title="Unmarried (include):" />
          </div>

          <div className="checkbox-title">
            <PdfCheckbox />
            <Pdfspantag title="Separated (single, divorced, widowed):" />
          </div>
        </div>
      </div>

      <span className="mortgage-checkbox">
        <strong>Dependents (not listed by Co-Borrower) :</strong>
      </span>

     <div className="complete-this-line-inputs-div2" >
     <div className="mortage-input">
        <PdfSinput title="no." />
      </div>

      <div className="mortage-input">
        <PdfSinput title="Ages" />
      </div>

      <PdfInput title="Present Address (street, city, state, ZIP)" />
     </div>
      <div>
        <div className="appliedFor-div">
          <div className="checkbox-title">
            <PdfCheckbox />
            <Pdfspantag title="Own" />
          </div>

          <div className="checkbox-title">
            <PdfCheckbox />
            <Pdfspantag title="Rent:" />
          </div>

          <div className="checkbox-title">
            <PdfCheckbox />
            <Pdfspantag title="No.Yrs." />
          </div>
        </div>
      </div>

      <PdfInput title="Mailing Address, if different from Present Address" />

      <span className="mortgage-checkbox">
        <strong>
          If residing at present address for less than two years, complete the
          following:
        </strong>
      </span>

      <PdfInput title="Former Address (street, city, state, ZIP) " />

      <div>
        <div className="appliedFor-div">
          <div className="checkbox-title">
            <PdfCheckbox />
            <Pdfspantag title="Own" />
          </div>

          <div className="checkbox-title">
            <PdfCheckbox />
            <Pdfspantag title="Rent:" />
          </div>

          <div className="checkbox-title">
            <PdfCheckbox />
            <Pdfspantag title="No.Yrs." />
          </div>
        </div>
      </div>

<div className="complete-this-line-inputs-div2">
      <PdfInput title="Co-Borrower’s Name (include Jr. or Sr. if applicable)" />

      <div className="mortage-input">
        <PdfSinput title="Social Security Number " />
      </div>
      <div className="mortage-input">
        <PdfSinput title="Home Phone (incl. area code)" />
      </div>
      <div className="mortage-input">
        <PdfSinput title="DOB (mm/dd/yyyy) " />
      </div>
      <div className="mortage-input">
        <PdfSinput title="Yrs. School " />
      </div>
      </div>
    </div>
  );
};

export default BorrowInfo;
