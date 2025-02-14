


import React, { useState } from "react";
import "./fnclifecycle.css"

export default function FunctionLifeCycle() {
    const [text, setText] = useState(0);

    const handleButton = () => {
        setText(previous => previous + 1);
    };

    const handleButtons = () => {
        setText(previous => previous - 1);
    };

    return (
        <div>
            <h1>05/12/2024</h1>
            <h2>{text}</h2>
            <button className={"btn1"} onClick={handleButton}>+</button>
            <button className={"btn2"} onClick={handleButtons}>-</button>
        </div>
    );
}
