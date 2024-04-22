import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const handleClickAdd = () => {
    setCount((prev) => prev + 1);
  };
  const handleClickDelete = () => {
    setCount((prev) => prev - 1);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleClickAdd}>+</button>
      <button onClick={handleClickDelete}>-</button>
    </div>
  );
}
