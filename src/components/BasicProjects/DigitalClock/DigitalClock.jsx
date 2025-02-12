import React, { useEffect, useState } from "react";

const DigitalClock = () => {
  let [dateTime, setDateTime] = useState({});

  //    setInterval(() => {
  //     let dateObj = new Date();
  //     // console.log(dateObj);  //? for understanding
  //     // console.log(dateObj.toLocaleDateString);
  //     // console.log(dateObj.toLocaleTimeString);

  //     setDateTime({
  //         date: dateObj.toLocaleDateString(),
  //       time: dateObj.toLocaleTimeString()
  //     })
  //   }, 1000);

  useEffect(() => {
    setInterval(() => {
      let dateObj = new Date();
      // console.log(dateObj);  //? for understanding
      // console.log(dateObj.toLocaleDateString);
      // console.log(dateObj.toLocaleTimeString);

      setDateTime({
        date: dateObj.toLocaleDateString(),
        time: dateObj.toLocaleTimeString(),
      });
    }, 1000);
  }, []);

  let { date, time } = dateTime;

  return (
    <>
      <div className="digitalclock">
        <div className="p-header">Digital Clock</div>
        <div className="container">
          {date}
          {time}
        </div>
      </div>
    </>
  );
};

export default DigitalClock;
