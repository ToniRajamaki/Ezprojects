import React, { useState } from "react";

const Hide = () => {
  const [visible, setVisibility] = useState(false);

  return (
    <div>
      <button onClick={() => setVisibility(!visible)}>
        {visible ? "hide" : "show"}
      </button>
      <h1 style={{ visibility: visible ? "visible" : "hidden" }}>Peek-A-Boo</h1>
    </div>
  );
};

export default Hide;
