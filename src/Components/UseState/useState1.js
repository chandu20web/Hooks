import React, { useState } from "react";

const UseState1 = () => {
  const [count, setCount] = useState(1);

  const onIncreament = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const onDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div className="count-container">
      <button type="button" onClick={onDecrement}>
        -
      </button>
      <span>{count}</span>
      <button type="button" onClick={onIncreament}>
        +
      </button>
    </div>
  );
};

export default UseState1;
