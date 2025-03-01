import React from 'react'
import { Outlet } from "react-router-dom"; 
import Navbar from '../Header/Navbar'
import Footer from '../Header/Footer';

function RootLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default RootLayout
