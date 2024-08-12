import React from 'react'
import Navbar from "./components/Navbar"
import Category from './components/Category'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'

function AppLayout() {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Category/>
        <Footer/>
    </div>
  )
}

export default AppLayout