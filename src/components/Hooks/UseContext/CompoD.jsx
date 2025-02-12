import React, { useContext } from 'react'
import {fnameContext ,lnameContext} from './CompoA'

const CompoD = () => {
    let fnm=useContext(fnameContext)
    let lnm=useContext(lnameContext)
  return (
    <>
    <h1>my name is {fnm} {lnm}</h1>
    
    </>
  )
}

export default CompoD
