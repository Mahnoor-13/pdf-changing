import React from 'react'
import "./pdfInlineheading.css"

const PdfThreeInlineHeading = (props) => {
  return (
    <div className='pdf-headingInline-div'>
        <h3 className='pdf-heading-style'>
            {props.titleOne}
        </h3>
        <h3 className='pdf-heading-style'>
            {props.titleTwo}
        </h3>
        <h3 className='pdf-heading-style'>
            {props.titleThree}
        </h3>
    </div>
  )
}

export default PdfThreeInlineHeading