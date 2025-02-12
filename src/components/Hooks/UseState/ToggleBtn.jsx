import React, { useState } from "react";
import "./toggleBtn.css";

const ToggleBtn = () => {
  let [bool, setBool] = useState(true);
  let onOff = () => {
    setBool(!bool);
    // console.log(bool);
  };

 

  return (
    <>
      <div className="outer">
        <div className="toggleBtn inc-dec">
          <div>ON-OFF Button</div>
          <div>
            <button onClick={onOff} className={bool ? "on" : "off"}>
              {bool ? "ON" : "OFF"}
            </button>
          </div>
        </div>
      </div>

      
    </>
  );
};

export default ToggleBtn;
