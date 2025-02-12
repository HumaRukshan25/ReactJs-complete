import React, { useState } from "react";
import "./togglePara.css";
const TogglePara = () => {
  let [para, setPara] = useState(true);
  let togglePara = () => {
    setPara(!para);
    // console.log(para);
   
  };
  return (
    <>
    <div className="outer">
      <div className="togglepara inc-dec">
        <button onClick={togglePara}>{para ? "show para" : "hide para"}</button>
        <p>
    {para
      ? "": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos est, voluptate ipsum corporis provident porro blanditiis ab mollitia tempora unde adipisci nobis illo consequatur dignissimos reprehenderit vel tempore aliquid ex dolor nulla neque repudiandae exercitationem. Praesentium"}
  </p>
      </div>
      </div>
    </>
  );
};

export default TogglePara;
