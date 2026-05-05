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
        <div className=' rounded-2xl '>
          <Outlet />
        </div>
        <div className=' relative w-full h-screen '>
        <Footer />
        </div>
    </div>
  )
}

export default Layout