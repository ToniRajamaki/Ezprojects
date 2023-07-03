import React from "react";

const Prac = () => {
  const [hook, setHook] = React.useState({ name: "henry", other: "thing" });

  React.useEffect(() => {
    setHook({ name: "juice", other: hook.other });
  }, [hook]);

  const handleClick = e => {
    e.preventDefault();
    setHook({ name: "kysen", other: "brigham" });
  };

  return (
    <div>
      <h1>{hook.name}</h1>
      <h1
        onClick={e => {
          handleClick(e);
        }}
      >
        {hook.other}
      </h1>
    </div>
  );
};

export default Prac;
