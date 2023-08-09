import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

export default function Layout() {
  return (
    <>
     <NavBar/>
     <Outlet/>
     <Footer/>
    </>
  )
}
