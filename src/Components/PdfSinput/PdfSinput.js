import React from 'react'
import "./smallinput.css"

const PdfSinput = (props, {onChange}) => {
  return (
    <div className='wrapper2'>
    <div className='input-data2'>
    <input onChange={onChange} type="text" required className='small-input' />
    <div className='input-underline2'></div>
    <label>{props.title}</label>
    </div>      
    </div>
  )
}

export default PdfSinput