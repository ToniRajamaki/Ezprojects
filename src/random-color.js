import React, { useState } from "react";

const RandomColor = () => {
  const [color, setColor] = useState("black");

  // const [value, handleChange] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    const rand = Math.floor(Math.random() * 16777215);
    setColor(`#${rand.toString(16)}`);
  };

  return (
    <div className="color">
      <h2 style={{ color: color }}>{color}</h2>
      <form onSubmit={handleSubmit}>
        <button
          // onClick={() => handleSubmit()}
          type="submit"
          style={{ color: color }}
        >
          Generate Random Hexadecimal Number
        </button>
      </form>
    </div>
  );
};

export default RandomColor;
