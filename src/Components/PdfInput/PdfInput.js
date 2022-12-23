import React from 'react'
import './style.css'

const PdfInput = (props) => {
  return (
    <div className='wrapper'>
      <div className='input-data'>
      <input type="text" required />
      <div className='input-underline'></div>
      <label>{props.title}</label>
      </div>      
      </div>
  )
}

export default PdfInput