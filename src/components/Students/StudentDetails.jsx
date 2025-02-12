//! short cut  rafce
import React from "react";
import { students } from "./studentsdata";
import "./students.css";

const StudentDetails = () => {
  console.log(students);
  return (
    <>
      <div className="students">
        <div className="header">Priority Students</div>
        <div className="container">
          <table>
            <thead>
              <tr>
              <th>Slno</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>place</th>
                <th>Yop</th>
                <th>degree</th>
                <th>stream</th>
              </tr>
            </thead>
            <tbody>
              {
                students.map((elem,index)=>{
                  let {fnm,lnm,place,yop,deg,stream}=elem;
                  return(
                    <>
                    <tr>
                    <td>{index+1}</td>
                    <td>{fnm}</td>
                    <td>{lnm}</td>
                    <td>{place}</td>
                    <td>{yop}</td>
                    <td>{deg}</td>
                    <td>{stream}</td>
                    </tr>
                    </>
                  )
})
              }
             
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default StudentDetails;
