import React, { useState } from "react";

const Color = () => {
  const [color, setColor] = useState("black");

  const [value, handleChange] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    setColor(value);
    handleChange("");
  };

  return (
    <div className="color">
      <h2 style={{ color: color }}>{color}</h2>
      <form onSubmit={handleSubmit}>
        <input
          style={{ color: color, outlineColor: color }}
          type="text"
          name="color"
          value={value}
          onChange={event => handleChange(event.target.value)}
        />

        <button type="submit" style={{ color: color }}>
          Change Color
        </button>
      </form>
      <p style={{ color: color }}>type color to change</p>
    </div>
  );
};

export default Color;
