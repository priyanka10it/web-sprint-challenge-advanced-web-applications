import React from "react";

export default function ColorCard({color}) {

    const { colorName,code } = color;
    const { hex } = code;

    return (
        <div className="card" >
            <h3>This is the {colorName} card! {code}</h3>
            <h4>{colorName}</h4>
            <h4>{hex}</h4>
        </div>
    )
}