import React, { useRef } from "react";
import "./useRef.css";

const Useref_Example = () => {
  let contents = useRef();
  //    console.log(contents);

  // rather then using dom we use useref
  let handleClick = () => {
    // console.log(contents);  //todo: for understanding step by step
    // console.log(contents.current);
    // console.log(contents.current.innerText);
    contents.current.innerText = "React Js";
  };

  let box1 = useRef();
  let handleBox = () => {
    box1.current.style.background = prompt("enter color name");
    // let bg=prompt("enter background")
    // box1.current.style.cssText=`background:${bg}`
  };

  let fname = useRef();
  let lname = useRef();
  let printName = useRef();

  let handleSubmit = (e) => {
    e.preventDefault();
    let fnm = fname.current.value;
    let lnm = lname.current.value;

    printName.current.innerText = `my name is ${fnm} ${lnm}`;
  };

  return (
    <>
      <div className="useref_ex">
        <h3 ref={contents}>JavaScript</h3>
        <button onClick={handleClick}>Click Here</button>

        <hr />
        <button onClick={handleBox}>Click Here</button>
        <div className="box" ref={box1}></div>

        <form onSubmit={handleSubmit}>
          <input ref={fname} type="text" placeholder="enter first name" />
          <input ref={lname} type="text" placeholder="enter last name" />
          <button>Submit</button>
          <h1 ref={printName}></h1>
        </form>
      </div>
    </>
  );
};

export default Useref_Example;
