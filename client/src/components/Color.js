import React from "react";

import ColorCard from "./ColorCard.js";

export default function Color({colors}) {

    return (
        <div className="card-container">
            {colors.map(color => (
                <ColorCard key={color.id} color={color} />
            ))}
        </div>
    )
}