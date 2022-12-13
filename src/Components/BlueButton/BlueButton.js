import React from 'react';
import "./style.css"

const BlueButton = (props) => {
    return (
        <div className='button-div' >
            <button className='button-title' onClick={props.onClick}>{props.title}</button>
        </div>
    );
};

export default BlueButton;

