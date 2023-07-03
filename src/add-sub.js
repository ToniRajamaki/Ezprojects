import React from "react";

const Sum = () => {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount(count - 1)}>SUB</button>
      <button onClick={() => setCount(count + 1)}>ADD</button>
    </div>
  );
};

export default Sum;
