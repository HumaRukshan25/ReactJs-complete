import React, { useState } from "react";
import "./IncDec.css";
const IncDec = () => {
  let [count, setCount] = useState(0);

  let increment = () => {
    setCount(count + 1);
  };
  let decrement = () => {
    count > 0 ? setCount(count - 1) : alert("not valid");
  };
  return (
    <>
      <div className="outer">
        <div className="inc-dec">
          <div>Increment and Decrement</div>
          <div className="notification">
            🔔<sub>{count}</sub>
          </div>
          <div className="incdec">
            <button onClick={increment} className="incre">
              ➕
            </button>
            <button onClick={decrement} className="decre">
              ➖
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default IncDec;
