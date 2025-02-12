import React from "react";
import { useState } from "react";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";

const McqToggle = ({id, question, answer}) => {
  // console.log(data);
  // let {id,question,answer}=data or we can use destructuring as a parameter
  let [bool, setBool] = useState(true);
  let handleBtn = () => {
    setBool(!bool);
  };

  return (
    <div className="toggleQuesAns">
      <button onClick={handleBtn}>
        <div className="que">
          <div className="first">
            {id}. {question}
          </div>
          <div className="second">{bool ? <ArrowCircleDownIcon/> : <ArrowCircleUpIcon/>}</div>
        </div>
        <p>{bool ? "" : answer}</p>
      </button>
     
    </div>
  );
};

export default McqToggle;
