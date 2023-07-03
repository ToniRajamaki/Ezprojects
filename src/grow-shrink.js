import React, { useState } from "react";

const Size = () => {
  const [fontSize, setFontSize] = useState(20);

  return (
    <div>
      <button onClick={() => setFontSize(fontSize + 5)}>Grow</button>
      <button onClick={() => setFontSize(fontSize - 5)}>Shrink</button>
      <h1 style={{ fontSize: fontSize }}>{fontSize} px</h1>
    </div>
  );
};

export default Size;
