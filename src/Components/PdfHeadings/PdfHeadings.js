import React from 'react'
import "./style.css"
const PdfHeadings = (props) => {
  return (
    <div className='pdf-heading-div'>
        <h3 className='pdf-heading-style'>
            {props.title}
        </h3>
    </div>
  )
}

export default PdfHeadings