import React, { useState } from "react";

const Align = () => {
  const [justify, setJustify] = useState("center");

  return (
    <div>
      <h2 style={{ display: "flex", justifyContent: justify }}>Align Meh</h2>
      <button onClick={() => setJustify("flex-start")}>Left</button>
      <button onClick={() => setJustify("center")}>Center</button>
      <button onClick={() => setJustify("flex-end")}>Right</button>
    </div>
  );
};
export default Align;
