import React, { useState } from "react";

const HexCounter = () => {
  const [hex, setHex] = useState("ff8000");
  const [value, handleChange] = useState("#");

  const hexCounter = num => {
    let hexVal = parseInt(hex, 16);
    let newTotal = hexVal + num;
    if (newTotal > 16777215) {
      newTotal = 16777215;
    } else if (newTotal < 1048576) {
      newTotal = 1048576;
    }
    setHex(newTotal.toString(16));
    console.log(newTotal);
  };

  return (
    <div>
      <h1 style={{ color: `#${hex.toString(16)}` }}>{`#${hex.toString(
        16
      )}`}</h1>
      <form>
        <input
          onSubmit={e => setHex(e.target.value)}
          value={value}
          onChange={e => handleChange(e.target.value)}
        />
      </form>
      <div className="button-wrapper">
        <button onClick={() => hexCounter(1)}>add 1</button>
        <button onClick={() => hexCounter(16)}>add 10</button>
        <button onClick={() => hexCounter(256)}>add 100</button>
        <button onClick={() => hexCounter(4096)}>add 1000</button>
        <button onClick={() => hexCounter(65536)}>add 10000</button>
        <button onClick={() => hexCounter(1048576)}>add 100000</button>
        <button onClick={() => hexCounter(-1)}>sub 1</button>
        <button onClick={() => hexCounter(-16)}>sub 10</button>
        <button onClick={() => hexCounter(-256)}>sub 100</button>
        <button onClick={() => hexCounter(-4096)}>sub 1000</button>
        <button onClick={() => hexCounter(-65536)}>sub 10000</button>
        <button onClick={() => hexCounter(-1048576)}>sub 100000</button>
      </div>
    </div>
  );
};

export default HexCounter;
