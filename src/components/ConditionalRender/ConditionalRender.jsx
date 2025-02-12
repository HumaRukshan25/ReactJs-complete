import React from "react";
const Welcome = () => {
  return (
    <>
      <h1>Welcome</h1>
    </>
  );
};

const Bye = () => {
  return (
    <>
      <h1>Bye...!</h1>
    </>
  );
};

const ConditionalRender = () => {
  //! statement block
  // if(false){
  //     return(<Welcome/>)
  // }
  // else{
  //     return(<Bye/>)
  // }

  //!ternary operator
  // return (true)?<Welcome/>:<Bye/>

  //! logical operator
  let bool = true;
  return bool && <Welcome/>;
  // return bool && <Bye/>;
};

export default ConditionalRender;

