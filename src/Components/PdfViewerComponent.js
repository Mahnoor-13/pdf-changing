import { useEffect, useRef, useState } from "react";

export default function PdfViewerComponent(props) {
  const [pageNumber, setPageNumber] = useState(1);

  const containerRef = useRef(null);
  const myContainer = useRef(null);
  let instance, instance1, PSPDFKit;

  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);
  const container = containerRef.current;
  const [savedInstance, setSavedInstance] = useState(null);

  useEffect(() => {
    setInputValue(myContainer.current.value);
    window["autocomplete"](
      "Amount Existing Liens",
      myContainer.current.value
    );
  });

  const $initialState = {
    pdfDoc: null,
    currentPage: 1,
    pageCount: 0,
    zoom: 1,
  };

  async function fetchData() {
    instance1 = await start();
    console.log(instance1);
  }
  fetchData();

  async function start() {
    PSPDFKit = await import("pspdfkit");
    instance = await PSPDFKit.load({
      container,
      document: props.document,
      baseUrl: `${window.location.protocol}//${window.location.host}/${process.env.PUBLIC_URL}`,
      instant: true,
    })
      .then((instance) => {
        console.log("PSPDFKit loaded", instance);
        instance.addEventListener("annotations.focus", function (
          annotationFocusEvent
        ) {
          console.log(annotationFocusEvent.annotation.toJS());
        });

        instance.getFormFields().then(function (formFields) {
          console.log("All form fields", formFields.toJS());
        });

        setSavedInstance(instance);

        window["strt"](instance);

        return instance;
      })
      .catch((error) => {
        console.error(error.message);
      });

    //console.log("pdfDocument", $initialState.pdfDoc);
    //  const annotations = await instance.getAnnotations(0);
    // const annotation = annotations.first();
    //  instance.update(annotation.set("noView", true));
    // return () => {
    //   PSPDFKit && PSPDFKit.unload(container);
    // };
  }

  useEffect(() => {}, []);

  const renderPage = () => {
    //oh uou ar eusing a different library now?
    // Load the first page.
    $initialState.pdfDoc.getPage($initialState.currentPage).then((page) => {
      console.log("page", page);

      const canvas = [0];
      const $ctx = canvas.getContext("2d");
      const $viewport = page.getViewport({
        scale: $initialState.zoom,
      });

      canvas.height = $viewport.height;
      canvas.width = $viewport.width;

      // Render the PDF page into the canvas context.
      const renderCtx = {
        canvasContext: $ctx,
        viewport: $viewport,
      };

      page.render(renderCtx);

      setPageNumber($initialState.currentPage);
    });
  };

  useEffect(() => {
    if (savedInstance) {
      savedInstance.setFormFieldValues({
        "Amount Existing Liens": props.name,
      });

      savedInstance.setFormFieldValues({
        "topmostSubform[0].Page1[0]._1a_Alt_Name[0]": props.alternateName,
      });

      savedInstance.setFormFieldValues({
        "topmostSubform[0].Page1[0]._1a_Security_1[0]": props.ssn.slice(0, 2),
      });

      savedInstance.setFormFieldValues({
        "topmostSubform[0].Page1[0]._1a_Security_2[0]": props.ssn.slice(3, 5),
      });

      savedInstance.setFormFieldValues({
        "topmostSubform[0].Page1[0]._1a_Security_3[0]": props.ssn.slice(8),
      });


      savedInstance.setFormFieldValues({
        "topmostSubform[0].Page1[0]._1a_PhoneW4[0]": props.dob,
      });


      savedInstance.setFormFieldValues({
        "topmostSubform[0].Page1[0].credit[0].joint[0]._1a_Borrowers_Number[0]": props.jointcredit,
      });


     
    }
  
  }, [props.name, props.alternateName, props.ssn, props.dob, props.jointcredit]);

  return (
    <div>
      <div ref={containerRef} style={{ width: "100%", height: "100vh" }}></div>
      <input ref={myContainer} value={props.name}></input>
      <input
        onChange={(e) => window["autocomplete"](e.target.value)}
        value={inputValue}
      ></input>
    </div>
  );
}
