import React from 'react'
import "./style.css"

const Heading = (props) => {
  return (
    <div>
        <h1 className='heading-style'>{props.title}</h1>
    </div>
  )
}

export default Heading