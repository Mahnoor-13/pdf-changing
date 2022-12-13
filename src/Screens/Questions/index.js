import React, { useState } from "react";
import PersonalLoan from "./LoanPurpose/LoanContent/index.js";
import PdfViewerComponent from "../../Components/PdfViewerComponent.js";
import AmountLoan from "./BorrowAmount/AmountContent/index.js";
import "./style.css";

const Index = () => {
  const [personal, setPersonal] = useState(true);
  const [amount, setAmount] = useState(false);

  const [name, setName] = useState("sdfsdf");
  const [alternateName, setAlternateName] = useState("");
  const [ssn, setSsn] = useState("");

  return (
    <div className="questions-pdf">
      {!amount ? (
        <PersonalLoan
          setAmount={setAmount}
          setPersonal={setPersonal}
          setName={setName}
          name={name}
          setSsn={setSsn}
          setAlternateName={setAlternateName}
        />
      ) : null}
      {!personal ? (
        <AmountLoan setPersonal={setPersonal} setAmount={setAmount} />
      ) : null}

      <div className="PDF-viewer">
        <PdfViewerComponent
          name={name}
          ssn={ssn}
          alternateName={alternateName}
          document={"document.pdf"}
        />
      </div>
    </div>
  );
};

export default Index;
