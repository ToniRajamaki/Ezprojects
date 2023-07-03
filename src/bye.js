import React, { useState } from "react";

const Bye = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <div>
      <h2>{toggle ? "Hello" : "Goodbye"}</h2>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
    </div>
  );
};

export default Bye;
