import React from 'react'

const Child = (props) => {
    // console.log(props);
    // console.log(props.data);
    let {count,data}=props
    
  return (
   <>
   <h3>Received the data</h3>
   
   <h2>My fav number is {count}</h2>
   <h2>{data} to ReactJs class</h2>
   </>
  )
}

export default Child