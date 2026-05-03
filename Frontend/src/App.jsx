import { useState } from 'react'
import {RouterProvider} from "react-router-dom"
import './App.css'
import Q_add from './Features/Q_add'
import User from './Features/User'
import Routes from './Routes'
const Darkmode = () => {
  const [isdark, setisdark] = useState(true)

  const clicks = ()=> {
    const darks = document.getElementsByTagName("html")
    darks[0].classList.toggle("dark")
    // if(isdark){
    //   darks[0].classList.add("dark")
    // }else{
    //   darks[0].classList.remove("dark")
    // }
    setisdark(!isdark)
  }


  return (
    <>
     
      <button
      onClick={clicks}
        className='bg-amber-500 p-4 h-10 w-1/1'
      >
        {isdark ? "dark " : "light "}
        mode</button>
    </>
  )
}


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-screen h-screen'>
      {/* <div className='h-10 w-full'> */}
        {/* <Darkmode /> */}
      {/* </div> */}

      {/* <User /> */}
      {/* <Q_add /> */}
      <RouterProvider router={Routes}/>
    </div>
  )
}

export default App
