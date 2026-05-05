import React from 'react'
import Darkmode from '../../Features/Darkmode'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className=' w-full h-30 relative flex flex-row dark:bg-gray-700 bg-[#8002f7]'>

      <div id='leftH' className=' dark:text-white basis-2/3'>
        <div className=' p-5 absolute bottom-0 font-pu '><h1 className='text-2xl bold '> Hi, 
          {localStorage.getItem("user")? ` ${ 
(JSON.parse(localStorage.getItem('user')).
fullname
)}`:"Welcome"}
        </h1>
        <p>Ready to test your knowledge</p></div>
      </div>
      <div id='righth' className='flex flex-col absolute h-1/1 basis-1/3 right-10 top-5'>
        
                <div className='  flex   '>
                  <Link to={"/login"}> 
                    <button  
                    className = {`bg-blue-500  h-10 w-16 md:w-24  ml-9 mr-9 border-2 text-white  rounded-2xl text-center
                      ` }>
                        Login
                    </button>
                       </Link>
                       <Link to={"/login"}>
                    <button  className={` bg-blue-500  h-10 w-16 md:w-24  border-2 text-white  rounded-2xl  text-center`}>
                        Register
                        
                    </button>
                       </Link>
                </div>
                <div className=' absolute right-0 bottom-10 '>

        <Darkmode />
                </div>
      </div>
    </div>
  )
}

export default Header