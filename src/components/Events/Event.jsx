import React from "react";
import "./event.css";
const Event = () => {
  //!
  let printName = () => {
    let fnm = "Dinga";
    let lnm = "Raja";
    alert(`my name is ${fnm} ${lnm}`);
  };

  //!
  let printMsz = (msg) => {
    alert(msg);
  };
  //!
  let calculateAge = (dob) => {
    if (typeof dob === "number") {
      let dateObj = new Date();
      let year = dateObj.getFullYear();
      let age = year - dob;
      alert(age);
    } else {
      alert("press Enter DOB year in the format of number");
    }
  };

  //!
  let generateOtp = () => {
    alert(Math.floor(Math.random() * 9000 + 1000));
  };

  //!
  let persons = [
    {
      fnm: "Dinga",
      lnm: "Raja",
      dob: 1990
    },
    {
      fnm: "Dingi",
      lnm: "Rani",
     dob: 1991
    },
    {
      fnm: "Dingu",
      lnm: "Raju",
     dob: 2023
    },
    {
        fnm: "Manga",
        lnm: "m",
        dob: 2021
      }
  ];

  //!
  let printDetails=(fname,lname,dob)=>{
    if (typeof dob === "number") {
        let dateObj = new Date();
        let year = dateObj.getFullYear();
        let age = year - dob;
        alert(`${fname} ${lname} age is ${age}`)
      } else {
        alert("press Enter DOB year in the format of number");
      }
   

  }

  return (
    <>
      <div className="header">Events</div>
      <div className="events">
        <button onClick={() => alert("welcome")}>click here</button>

        <hr />
        <button onClick={printName}>Print Name</button>
        <hr />
        <button
          onClick={() => {
          return printMsz("good morning");
          }}
        >
          Print Msg
        </button>
        <hr />
        {/* if we enter character 'a' instead of number it will execute the else statement */}
        <button onClick={() => calculateAge(1990)}> calculate age</button>

        <hr />

        <button onClick={generateOtp()}> generate otp</button>

        <hr />
        <hr />
        <div>
          {persons.map((elem) => {
            let { fnm, lnm, dob } = elem;
            return (
              <>
                {/* <div>{elem.fnm}</div>  if we dont use destructuring*/}
                <div className="container">
                  <div>{fnm}</div>
                  <div>{lnm}</div>
                  <div>{dob}</div>
                  <div className="view"><button onClick={()=>{printDetails(fnm,lnm,dob)}}>View</button></div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Event;
