import React from 'react'
import Child from './Child';


const Parent = () => {
    
    let num=100;
    let msz='Welcome'

  return (
   <>
   <h3>Sending the data to child component</h3>
   <Child count={num} data={msz}/>
   </>
  )
}

export default Parent