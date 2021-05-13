import React, { useState } from "react";
import "../styles/Child.css";
const Selection = ({ applyColor }) => {
    const [bgColor, setBgcolor] = useState({ bacground: "" });
    return (
        <div
            className="fix-box"
            style={bgColor}
            onClick={() => {
                applyColor(setBgcolor);
            }}
        >
            <h2 className="subheading">{"Selection"}</h2>
        </div>
    );
};
export default Selection;
