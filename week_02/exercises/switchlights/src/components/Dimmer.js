import React from "react";

export default function Dimmer({ dimPercentage, setDimPercentage }) {
  const handleChangeRange = (e) => {
    setDimPercentage(e.target.value);
  };
  return (
    <div>
      <input
        type="range"
        min="0"
        max="100"
        step="1"
        id="dimmer"
        value={dimPercentage}
        onChange={handleChangeRange}
      />
      <label htmlFor="dimmer">Dimmer</label>
    </div>
  );
}
