import React, { useRef, useState } from "react";

const UseRef_Form = () => {
  let formdata = useRef();
  let [data, setData] = useState();

  let handleSubmit = (e) => {
    e.preventDefault();
    // let user = formdata.current[0].value;
    // let dob = formdata.current[1].value;
    // console.log(user,dob);

    //!todo: taking data from end user
    let inputData={
    
       user:formdata.current[0].value,
        dob:formdata.current[1].value

  
    }

    // //todo: object destructuring
    let {user,dob}=inputData

    // let user=formdata.current[0].value
    // let dob=formdata.current[1].value

//todo: calculate age using date object model
    let dateObj = new Date();
    let age = dateObj.getFullYear() - dob;

    setData(`${user} age is ${age}`);
    // formdata.current[0].value=''
    // formdata.current[1].value=''

    //todo: input field as empty
    user=''
    dob='' 
    // user.value=''
    // dob.value=''  //todo:not working 

    
  };

  return (
    <>
      <form ref={formdata} onSubmit={handleSubmit}>
        <input type="text" placeholder="enter username" />
        <input type="text" placeholder="enter dob in(yyyy)" />
        <button>submit</button>
      </form>
      <h3>{data}</h3>
    </>
  );
};

export default UseRef_Form;
