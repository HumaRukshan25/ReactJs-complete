import React, { useState } from 'react'
import {mcqData} from './mcqData'
import McqToggle from './McqToggle'
import './mcq.css'

const Mcq = () => {
    // console.log(mcqData);
    let[data,setData]=useState(mcqData)
    
    // let [bool,setBool]=useState(true)
    // let handleBtn=()=>{
    //   setBool(!bool)
      // console.log(bool);
      

    // }
    
  return (
  <>
  <div className="mcq">
    {data.map((elem)=>{
      let {id,question,answer}=elem;
      return(
        <>
        {/* <div className="toggleQuesAns">
        <button onClick={handleBtn}>{id}. {question}</button>
        <p>{bool?"" :answer}</p>
        </div> */}
        <McqToggle id={id} question={question} answer={answer}/>
        
        </>
      )
    })}
  </div>
  </>
  )
}

export default Mcq