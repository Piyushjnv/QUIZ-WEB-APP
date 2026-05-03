import React from 'react'
import { Outlet } from "react-router-dom"
import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"

function Layout() {
  return (
    <div className='w-screen h-full'>
      <div>
        <Header />
      </div>
        <div>
          <Outlet />
        </div>
        <div className=' relative w-full h-full '>
        <Footer />
        </div>
    </div>
  )
}

export default Layout