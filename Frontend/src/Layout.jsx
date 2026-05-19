import React ,{ useEffect} from 'react'
import { Outlet , useNavigate} from "react-router-dom"
import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"

function Layout() {
  const navigate = useNavigate()
    useEffect(
    ()=> {
       if( localStorage.getItem('login')){
          navigate('/user')
          // console.log('tudnfjndf');
          
       }else{
        localStorage.setItem('login', false)
       }
    },[]
  )

  return (
    <div className=' relative flex flex-col min-w-screen min-h-screen bg-[#0a0a0f] m-0 p-0 box-border  '>
      <div>
        <Header />
      </div>
        <div className='flex-1'>
          <Outlet />
        </div>
        <footer className=' h-1/5  w-full bottom-0'>
        <Footer />
        </footer>
    </div>
  )
}

export default Layout