import React, { useState, useEffect } from "react";

const CurTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    let interval = setInterval(() => tick(), 1000);
    return () => clearInterval(interval);
  }, [time]);

  const tick = () => {
    setTime(new Date());
  };

  return (
    <div>
      <h2>{time.toLocaleTimeString()}</h2>
    </div>
  );
};

export default CurTime;
