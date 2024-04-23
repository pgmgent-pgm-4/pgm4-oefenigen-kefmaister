import React, { useState } from "react";
import Color from "./Color";

export default function ColorList() {
  const [listColors, setListColors] = useState([
    "rgb(255, 10, 30)",
    "rgb(0, 255, 0)",
    "rgb(0, 0, 255)",
  ]);
  const generateRandomColor = () => {
    return `rgb(${Math.ceil(Math.random() * 255)}, ${Math.ceil(
      Math.random() * 255
    )}, ${Math.ceil(Math.random() * 256)})`;
  };
  const handleClick = () => {
    const newColor = generateRandomColor();
    setListColors((prev) => [...prev, newColor]);
  };
  return (
    <div>
      {listColors.map((color, index) => (
        <Color color={color} />
      ))}
      <button onClick={handleClick}>Add color</button>
    </div>
  );
}
