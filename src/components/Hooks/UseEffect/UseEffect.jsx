import React, { useEffect, useState } from 'react'


const UseEffect = () => {
    let [count,setCount]=useState(0)
    let increment=()=>{
        setCount(count+1)
    }

    let [user,setUser]=useState('Dinga')
    let printName=()=>{
        setUser('Raja')
    }

    useEffect(()=>{
        // alert('hello effected')
        setUser('Hi')
    },[user])

    
  return (
   <>
   <div>useEffect example</div>
   <h1>{count}</h1>
   <button onClick={increment}>➕</button>

   <h2>{user}</h2>
   <button onClick={printName}>Click Here</button>
 
   </>
  )
}

export default UseEffect