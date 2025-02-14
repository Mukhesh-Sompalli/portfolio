import React, { useEffect, useState } from "react";

const LazyRiver = () => {
  const letters = ["A", "B", "C", "D", "E", "F", "G", "H"];
  const boxSize = 50; 
  const containerSize = 300; 
  const speed = 100; 
  const gap = (containerSize - (2 * boxSize)) / 2;


  const initialPositions = [
    { x: 0, y: containerSize - boxSize, angle: 0 }, 
    { x: gap, y: containerSize - boxSize, angle: 0 }, 
    { x: containerSize - boxSize, y: containerSize - boxSize, angle: 90 }, 
    { x: containerSize - boxSize, y: gap, angle: 90 }, 
    { x: containerSize - boxSize, y: 0, angle: 180 }, 
    { x: gap, y: 0, angle: 180 },
    { x: 0, y: 0, angle: 270 }, 
    { x: 0, y: gap, angle: 270 }, 
  ];

  const [positions, setPositions] = useState(initialPositions);

  useEffect(() => {
    const moveBoxes = () => {
      setPositions((prevPositions) =>
        prevPositions.map((pos) => {
          let { x, y, angle } = pos;

          
          if (angle === 0) x += 5; 
          if (angle === 90) y -= 5; 
          if (angle === 180) x -= 5; 
          if (angle === 270) y += 5; 

          
          if (x >= containerSize - boxSize && angle === 0) angle = 90;
          else if (y <= 0 && angle === 90) angle = 180;
          else if (x <= 0 && angle === 180) angle = 270;
          else if (y >= containerSize - boxSize && angle === 270) angle = 0;

          return { x, y, angle };
        })
      );
    };

    const interval = setInterval(moveBoxes, speed);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: `${containerSize}px`,
        height: `${containerSize}px`,
        border: "3px solid red",
        margin: "50px auto",
      }}
    >
      {positions.map((pos, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            width: `${boxSize}px`,
            height: `${boxSize}px`,
            backgroundColor: "red",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            fontSize: "24px",
            fontWeight: "bold",
            transform: `translate(${pos.x}px, ${pos.y}px) rotate(${pos.angle}deg)`,
            transition: "transform 0.2s linear",
          }}
        >
          {letters[index]}
        </div>
      ))}
    </div>
  );
};

export default LazyRiver;
