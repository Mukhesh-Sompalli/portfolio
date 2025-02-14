import React, { useState } from "react";
import "./box.css";

export default function RotatingBox() {
  const [rotation, setRotation] = useState(0);

  const handleRotate = () => {
    setRotation((prev) => prev + 90);
  };

  return (
    <div className="container">
      <div className="parent-box" style={{ transform: `rotate(${rotation}deg)` }}>
        <div className="child-box red" style={{ transform: `rotate(${-rotation}deg)` }}>Red</div>
        <div className="child-box yellow" style={{ transform: `rotate(${-rotation}deg)` }}>Yellow</div>
        <div className="child-box blue" style={{ transform: `rotate(${-rotation}deg)` }}>Blue</div>
        <div className="child-box green" style={{ transform: `rotate(${-rotation}deg)` }}>Green</div>
      </div>

      <button className="rotate-button" onClick={handleRotate}>Rotate</button>
    </div>
  );
}
