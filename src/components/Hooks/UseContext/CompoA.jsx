import React, { createContext } from 'react'
import CompoB from './CompoB'

//todo:  createContext write this to get in import 
 export let fnameContext=createContext()
  export let lnameContext=createContext()

const CompoA = () => {
  return (
  <>
  <fnameContext.Provider value='Dingu'>
 <lnameContext.Provider value='Raju'>
 <CompoB/>
 </lnameContext.Provider>
  </fnameContext.Provider>
  
  </>
  )
}

export default CompoA