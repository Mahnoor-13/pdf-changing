import React, { useState } from "react";
import Page1 from "./Page1/index.js";

import PdfViewerComponent from "../../Components/PdfViewerComponent.js";


const Index = () => {
  const [personal, setPersonal] = useState(true);
  const [amount, setAmount] = useState(false);

  const [name, setName] = useState("sdfsdf");
  const [alternateName, setAlternateName] = useState("");
  const [ssn, setSsn] = useState("");
  const [dob, setDob] = useState("")
  const [jointcredit, setJointCredit] = useState("")

  return (
    <div className="questions-pdf">
   <Page1 setName={setName}/>
      <div className="PDF-viewer">
        <PdfViewerComponent
          name={name}
          ssn={ssn}
          alternateName={alternateName}
          dob={dob}
          jointcredit={jointcredit}
          document={"document.pdf"}
        />
      </div>
    </div>
  );
};

export default Index;
