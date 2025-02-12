import React, { useState } from "react";

const ChangeContent = () => {
  let [user, setUser] = useState("Huma");
  let printName = () => {
    setUser("Rukshan");
  };
  return (
    <>
      <div className="outer">
        <div className="changeContent inc-dec">
          <div>Change Content</div>
          <h1>My name is {user}</h1>
          <button onClick={printName} className="printname">Click Here</button>
        </div>
      </div>
    </>
  );
};

export default ChangeContent;
