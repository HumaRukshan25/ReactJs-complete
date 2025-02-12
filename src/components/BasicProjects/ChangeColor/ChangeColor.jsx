import React, { useState, useRef } from 'react';

const ChangeColor = () => {
  const inputField = useRef();
  const h1Tag = useRef();
  const box = useRef();

  const applyColor = () => {
    const colorValue = inputField.current.value;
    document.body.style.color = colorValue;
    box.current.style.cssText = `border: solid 2px ${colorValue}; box-shadow: inset 1px 1px 10px ${colorValue}; background: linear-gradient(${colorValue}, white)`;
  };

  return (
    <>
      <div className="changecolor">
        <div className="p-header">Change Color</div>
        <div className="container" ref={box}>
          <h1 ref={h1Tag}>Colors</h1>
          <input 
            ref={inputField}
            type="color" 
            onChange={applyColor}
          />
        </div>
      </div>
    </>
  );
};

export default ChangeColor;
