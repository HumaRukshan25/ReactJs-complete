import React, { useState } from 'react';

const AgeCalculator = () => {
  const [age, setAge] = useState(null);

  const ageCalculator = (e) => {
    e.preventDefault();
    
    // Getting the values from form elements
    const fnm = e.target.elements.fnm.value;
    const dob = e.target.elements.dob.value;
  

    // Extracting the year from the date of birth
    const dobYear = dob.slice(0, 4);
    const currentYear = new Date().getFullYear();
    
    // Calculating age
    const calculatedAge = currentYear - dobYear;
    
    // Setting the calculated age in the state
    setAge(calculatedAge);
  };

  return (
    <>
      <div className="agecalculator">
        <div className="p-header">Age Calculator</div>
        <form onSubmit={ageCalculator}>
          <input type="text" name="fnm" placeholder="Enter first name" />
          <input type="date" name="dob" />
          <button type="submit">Calculate Age</button>
        </form>
        {age !== null && <p>Your Age: {age}</p>}
      </div>
    </>
  );
};

export default AgeCalculator;
