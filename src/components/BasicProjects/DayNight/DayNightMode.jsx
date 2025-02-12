import React, { useState } from "react";

const DayNightMode = () => {
  let [bool, setBool] = useState(true);
  let handleClick = () => {
    setBool(!bool);
    // console.log(bool);
    document.body.style.cssText=`background:${bool? 'black':'white'}`
   
    // document.body.style.cssText=`color:${bool? 'white':'black'}
    // background:${bool? 'black':'white'}`
  };
  return (
    <>
      <div className="daynight">
        <div className="p-header">Day night Mode</div>
        <div className="container">
          <button onClick={handleClick} className={bool ? "day" : "night"}>
            {bool ? "Day" : "Night"}
          </button>
        </div>
      </div>
    </>
  );
};

export default DayNightMode;
