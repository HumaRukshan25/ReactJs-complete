import React, { useState } from "react";

const GenerateOtp = () => {
  let [fourotp, setfourotp] = useState(0);
  // let [sixotp, setsixotp] = useState(0);

  let generate4digitotp = () => {
    let otp = Math.floor(Math.random() * 9000 + 1000);
    //  console.log(otp);
    setfourotp(otp);
  };

  // let generate6digitotp = () => {
  //   let otp = Math.floor(Math.random() * 900000 + 100000);
  //   //  console.log(otp);
  //   setsixotp(otp);
  // };

  return (
    <div className="generateotp">
      <div className="p-header">Generate Otp</div>
      <div className="four-digit">
        <div className="header">Generate 4 digit Otp</div>

        <button onClick={generate4digitotp}>Click Here</button>
        <h1>{fourotp}</h1>
      </div>
      {/* <div className="six-digit">
        <div className="header">Generate 6 digit Otp</div>

        <button onClick={generate6digitotp}>Click Here</button>
        <h1>{sixotp}</h1>
      </div> */}
    </div>
  );
};

export default GenerateOtp;
