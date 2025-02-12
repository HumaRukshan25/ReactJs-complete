import React, { useState } from "react";
import { studentsdata } from "./studentsData";
import "./Students.css";
const Students = () => {
  let [data, setData] = useState(studentsdata);
  // console.log(studentsdata);

  //todo: view details
  let viewDetails = (fnm, lnm, age) => {
    alert(`${fnm} ${lnm} age is ${age}`);
  };
  //todo: delete details
  let deleteStud = (id, fnm) => {
    // let x = data.filter((elem) => {
    //   return elem.id !== id;
    // });
    // setData(x);

    //? short cut
    let bool = window.confirm(`Do you want to delete ${fnm} data...?`);
    if (bool) {
      setData(data.filter((elem) => elem.id !== id)); //? short cut
      alert(`${fnm} data is Deleted`);
    } else {
      alert("Not Deleted");
    }
  };
  //todo: delete All Data
  let deleteAllData = () => {
    let bool = window.confirm("do you want to delete all data..?");
    bool ? setData([]) : alert("not deleted");
  };

  //todo: add student //!29/08/2024
  let addStudent = () => {
    let fnm = prompt("enter first name");
    let lnm = prompt("enter last name");
    let dob = prompt("enter DOB (YYYY)");
    let plc = prompt("enter place");

    let newStud = {
      id: 0,
      fname: fnm,
      lname: lnm,
      dob: dob,
      place: plc,
    };
    setData([...data, newStud]);
  };
  
  let duplicateData = (id, fname, lname, dob, place) => {
    setData([...data, { id, fname, lname, dob, place }]);
  };

  return (
    <>
      <div className="studentDetails">
        <div className="header">Students List</div>
        <div>
          <table>
            <thead>
              <tr>
                <th>Slno</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Date Of Birth</th>
                <th>Age</th>
                <th>Place</th>
                <th>View</th>
                <th>Delete</th>
                <th>Duplicate</th>
              </tr>
            </thead>
            <tbody>
              {data.map((elem, index) => {
                let { id, fname, lname, dob, place } = elem;
                let dateObj = new Date();
                let age = dateObj.getFullYear() - dob;
                return (
                  <>
                    <tr>
                      <td>{index + 1}</td>
                      <td>{fname}</td>
                      <td>{lname}</td>
                      <td>{dob}</td>
                      <td>{age}</td>
                      <td>{place}</td>
                      <td>
                        <button onClick={() => viewDetails(fname, lname, age)}>
                          View
                        </button>
                      </td>
                      <td>
                        <button onClick={() => deleteStud(index + 1, fname)}>
                          Delete
                        </button>
                      </td>
                      <td>
                        <button
                          onClick={() => duplicateData(id, fname, lname, place)}
                        >
                          Duplicate
                        </button>
                      </td>
                      {/* <td>
                        <button
                          className="viewBtn"
                          onClick={() => viewDetails(fname, lname, age)}
                        >
                          View
                        </button>
                      </td> */}
                      {/* <td>
                        <button
                          className="deleteBtn"
                          onClick={() => deleteStud(id, fname)}
                        >
                          Delete
                        </button>
                      </td> */}
                    </tr>
                    
                  </>
                  
                );
              })}
               <tr>
              <th colSpan={4}>
                {data.length !== 0 ? (
                  <button
                    onClick={() => {
                      deleteAllData();
                    }}
                  >
                    Delete All users Data
                  </button>
                ) : (
                  <div>Data not found....</div>
                )}
              </th>

              <th colSpan={5}>
                <button onClick={addStudent}>Add Student</button>
              </th>
            </tr>

            </tbody>
           
          </table>
        </div>
      </div>
    </>
  );
};

export default Students;
