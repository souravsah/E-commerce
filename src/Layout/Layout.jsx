import React from 'react'
import Navbar from '../core/Navbar/Navbar'
import Footer from '../core/Footer/Footer'
const Layout = ({children}) => {
  return (
    <>
    <Navbar/>
    {children}
    <Footer/>
    </>
  )
}

export default Layout