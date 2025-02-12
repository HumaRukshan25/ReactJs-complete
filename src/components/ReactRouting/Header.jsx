import React from 'react'
import Navbar from './Navbar'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
// import { Home } from '@mui/icons-material'
import Home from './Home'
import About from './About'
import Services from './Services'
import Contacts from './Contacts'

const Header = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route element={<Home/>} path='/home'/>
      <Route element={<About/>} path='/about'/>
      <Route element={<Services/>} path='/services'/>
      <Route element={<Contacts/>} path='/contacts'/>

      

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default Header