import React from 'react'
import Darkmode from '../../Features/Darkmode'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className=' w-full h-30 relative flex flex-row bg-[#8002f7]'>

      <div id='leftH' className=' basis-2/3'>
        <div><h1>hi, Alex!</h1>
        <p>Ready to test your knowledge</p></div>
      </div>
      <div id='righth' className=' absolute basis-1/3 right-10 top-10'>
        <Darkmode />
      </div>
    </div>
  )
}

export default Header