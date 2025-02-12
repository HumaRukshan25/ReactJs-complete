import React, { useState } from 'react';
import './dayNight.css';

const DayNight = () => {
  const [isDay, setIsDay] = useState(true);

  const toggleDayNight = () => {
    setIsDay(!isDay);
    document.body.style.backgroundColor = isDay ? 'black' : 'white';
  };

  return (
    <>
      <div className="outer">
        <div className="toggleBtn inc-dec">
          <div>Day Night mode</div>
          <div>
            <button onClick={toggleDayNight} className={isDay ? 'white' : 'black'}>
              {isDay ? 'White' : 'Black'}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DayNight;
