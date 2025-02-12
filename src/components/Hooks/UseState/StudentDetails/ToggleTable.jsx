import React, { useState } from "react";
import Students from "./Students";

const ToggleTable = () => {
  let [bool, setBool] = useState(true);
  let toggleTable = () => {
    setBool(!bool);
  };
  return (
    <>
      <div className="toggleTable">
        <button onMouseOver={toggleTable} className="toggleBtn">
          Student Details
        </button>
        <div>{bool ? "" : <Students />}</div>
      </div>
    </>
  );
};

export default ToggleTable;
