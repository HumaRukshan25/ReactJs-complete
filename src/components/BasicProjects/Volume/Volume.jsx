import React, { useState } from "react";

const Volume = () => {
  let [count, setCount] = useState(0);
  let changeValue = (e) => {
    setCount(e.target.value);
  };
  return (
    <>
      <div className="volume">
        <div className="p-header">Volume</div>
        <div className="container">
          <div>
            <input type="range" onChange={changeValue} value={count} />
          </div>
          <div>{count}</div>
        </div>
      </div>
    </>
  );
};

export default Volume;
