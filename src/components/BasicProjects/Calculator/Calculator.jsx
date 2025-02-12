import React, { useRef } from "react";

const Calculator = () => {
  let inputField = useRef()
  let getValue = (e) => {
    let val = e.target.innerText;
    inputField.current.value += val;
  };

  let finalResult=()=>{
    let res=eval(inputField.current.value)
    inputField.current.value=res

  }
  let clear=()=>{
    inputField.current.value=""
  }

  return (
    <>
      <div className="calculator">
        <div className="p-header"> Calculator</div>
        <div className="container">
          <table border="2">
            <thead>
              <tr>
                <th colSpan={4}>
                  <input ref={inputField} type="text" />
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <th onClick={clear} colSpan={2}>
                  CE
                </th>
                <th onClick={getValue}>/</th>
                <th onClick={getValue}>*</th>
              </tr>
              <tr>
                <th onClick={getValue}>7</th>
                <th onClick={getValue}>8</th>
                <th onClick={getValue}>9</th>
                <th onClick={getValue}>-</th>
              </tr>
              <tr>
                <th onClick={getValue}>4</th>
                <th onClick={getValue}>5</th>
                <th onClick={getValue}>6</th>
                <th onClick={getValue}>+</th>
              </tr>
              <tr>
                <th onClick={getValue}>1</th>
                <th onClick={getValue}>2</th>
                <th onClick={getValue}>3</th>
                <th onClick={finalResult} rowSpan={2}>
                  =
                </th>
              </tr>
              <tr>
                <th onClick={getValue}>.</th>
                <th onClick={getValue}>0</th>
                <th onClick={getValue}>%</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Calculator;
