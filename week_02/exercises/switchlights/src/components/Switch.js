import React, { useState } from "react";

export default function Switch() {
  const [isOn, setIsOn] = useState(true);
  const handleClick = () => {
    setIsOn(!isOn);
  };
  return (
    <div>
      <button onClick={handleClick}>Switch</button>
      {isOn
        ? (document.body.style.backgroundColor = "#fff")
        : (document.body.style.backgroundColor = "#000")}
    </div>
  );
}
