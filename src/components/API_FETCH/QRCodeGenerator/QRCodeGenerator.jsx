import React, { useRef, useState } from "react";

const QRCodeGenerator = () => {
  let [qrCode, setQrCode] = useState([]);
  let inputField = useRef();
  let handleSubmit = (e) => {
    e.preventDefault();

    let inputVal = inputField.current.value;
    let qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x350&data=${inputVal}`;
 setQrCode(qrUrl)
  }
  return (
    <>
      <div className="qr-code">
        <div className="api-header head-fix">Generate Qr Code</div>
        <div className="searchField">
          <form onSubmit={handleSubmit}>
            <input
              ref={inputField}
              type="text"
              placeholder="Enter something "
            />
            <button>Generate</button>
            
          </form>
          <img src={qrCode} alt="" />
        </div>
      
        </div>
    </>
  );
};

export default QRCodeGenerator;
