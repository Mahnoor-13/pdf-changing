import React from "react";
import PdfBoldText from "../../../../Components/PdfBoldText/PdfBoldText";
import PdfCheckbox from "../../../../Components/PdfCheckbox/PdfCheckbox";
import PdfHeadings from "../../../../Components/PdfHeadings/PdfHeadings";
import PdfInput from "../../../../Components/PdfInput/PdfInput";
import PdfParagraph from "../../../../Components/PdfParagraph/PdfParagraph";
import Pdfspantag from "../../../../Components/Pdfspantag/Pdfspantag";

export default function TypeOfMortage() {
  return (
    <div className="main-container-mortage">
      <PdfHeadings title="I. TYPE OF MORTGAGE AND TERMS OF LOAN" />

      <div>
          <span className="mortgage-checkbox">
            <strong>Mortgage :</strong>
          </span>
        <div className="mortgage-div">
          <div className="checkbox-title">
            <PdfCheckbox />
            <Pdfspantag title="VA" />
          </div>

          <div className="checkbox-title">
            <PdfCheckbox />
            <Pdfspantag title="Conventional" />
          </div>
          <div  className="checkbox-title">
            <PdfCheckbox />
            <Pdfspantag title="Other (explain):" />
          </div>
        </div>
      </div>

      <div>
          <span className="mortgage-checkbox">
            <strong>Applied For :</strong>
          </span>
        <div className="appliedFor-div">
          <div className="checkbox-title">
            <PdfCheckbox />
            <Pdfspantag title="FHA" />
          </div>

          <div className="checkbox-title">
            <PdfCheckbox />
            <Pdfspantag title="USDA/Rural Housing Service" />
          </div>
        </div>
      </div>



      <div className="mortage-input">
      <PdfInput title="Agency Case Number"/>
      </div>

      <div className="mortage-input">
      <PdfInput title="Lender Case Number"/>
      </div>

      <div className="mortage-input">
      <PdfInput title="Amount $"/>
      </div>

      <div className="mortage-input">
      <PdfInput title="Interest Rate"/>
      </div>
      <div className="mortage-input">
      <PdfInput title="No. of Months"/>
      </div>



      <div>
          <span className="mortgage-checkbox">
            <strong>Amortization Type :</strong>
          </span>
        <div className="appliedFor-div">
          <div className="checkbox-title">
            <PdfCheckbox />
            <Pdfspantag title="Fixd Rate" />
          </div>

          <div className="checkbox-title">
            <PdfCheckbox />
            <Pdfspantag title="Other (explain):" />
          </div>

          <div className="checkbox-title">
            <PdfCheckbox />
            <Pdfspantag title="GPM:" />
          </div>
          <div className="checkbox-title">
            <PdfCheckbox />
            <Pdfspantag title="ARM (type):" />
          </div>
        </div>
      </div>



    </div>
  );
}
