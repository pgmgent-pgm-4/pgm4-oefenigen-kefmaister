import React, { useState } from "react";

export default function Toggle({message}) {
  const [showMessage, setShowMessage] = useState(true);
  const handleClickShow = () => {
    setShowMessage(!showMessage);
  };
  return (
     <div>
        <button onClick={handleClickShow}>Toggle message</button>
        {showMessage && <h1>{message}</h1>}
     </div>
  );
}
