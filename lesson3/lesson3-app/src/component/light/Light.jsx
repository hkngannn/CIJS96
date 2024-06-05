import React from "react";
import './light.css'

const Light = (props) => {
    return (
        <div className="light-wrapper">
            <div className={`light ${props.color}-light ${props.isOn && "on"}`}></div>
        </div>
    )
}

export default Light;