import React, { useState } from 'react'
import './forms.css'

const Forms = () => {
    let[fnm,setFnm]=useState('')
    let[fname,setFname]=useState('')

    let[lnm,setLnm]=useState('')
    let[lname,setLname]=useState('')

    let handleFnm=(e)=>{
        setFnm(e.target.value)
    }
    let handleLnm=(e)=>{
        setLnm(e.target.value)
    }
    let handleSubmit=(e)=>{
       e.preventDefault()
       setFname(fnm)
       setLname(lnm)
       setFnm('')
       setLnm('')
    }
    
  return (
    <>
    <div className="form">
      <form  className="container">
        <div className="formbox">
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder='enter the first name' onChange={handleFnm} value={fnm} />
            <input type="text" placeholder='enter the last name' onChange={handleLnm} value={lnm}/>
            <button>Print</button>
            {/* <h1>{fnm}{lnm}</h1> */}
            <h1>{fname}{lname}</h1>
          </form>
        </div>
      </form>
    </div>
    
    </>
  )
}

export default Forms