import React, { useEffect } from 'react'
import Darkmode from '../../Features/Darkmode'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Profile from './Profile'
import { useNavigate , NavLink } from 'react-router-dom'
function Header() {
// console.log("header jsx");
const x = 0 
const navigte = useNavigate()
var user
if(localStorage.getItem("login") === 'true'){
   user = JSON.parse(localStorage.getItem('user')).fullname
}else{
  user = null
}

  return (
    <div className=' w-full h-32 sticky top-0 z-50 '>
    <div className=' w-full h-30 relative flex flex-row bg-gray-700'>

      <div id='leftH' className=' dark:text-white basis-2/3'>
        <div className=' p-5 absolute bottom-0  '><h1 className='text-2xl md:text-4xl font-extrabold '> Hi, 
          {localStorage.getItem("login") === 'true' ? ` ${ 
user}`:" And Welcome"}
        </h1>
        <p className=' font-bold'>Ready to test your knowledge</p>
        </div>
      </div>
      <div id='righth' className='flex flex-col absolute h-1/1 basis-1/3 right-10 top-5'>
      
        {/*  if user login not show  */}
        {localStorage.getItem('login') === 'false' ?  <div className='flex'>
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
                </div> : <Link  to={"/user/profile"}> 
                      <div className='w-10 h-10 border-2 rounded-full bg-white '></div>
                </Link>}
            
                <div className=' absolute right-0 bottom-10 '>
        <Darkmode />
                </div>
      </div>
   
    </div>
       <div className=' absolute bottom-0 w-full    '>
        <ul style={{listStyle: "none"}} 
        className='flex flex-row justify-between m-auto max-h-fit w-96/100  text-sm font-bold text-gray-300 '>

         

            <li  className='p-1 text-center basis-1/4 font-bold hover:bg-gray-800 dark:hover:shadow-lg  hover:text-white rounded-2xl  '>
              <NavLink 
              to={'/'}
              >
              HOME
              </NavLink>
            </li>
            
               {/* <li  className='p-2 text-center basis-1/4 font-bold hover:bg-gray-800 dark:hover:shadow-lg  hover:text-white rounded-2xl  '>
              <NavLink 
              to={'/'}
              >
              HOME
              </NavLink>
            </li> */}
               {/* <li  className='p-2 text-center basis-1/4 font-bold hover:bg-gray-800 dark:hover:shadow-lg  hover:text-white rounded-2xl  '>
              <NavLink 
              to={'/'}
              >
              HOME
              </NavLink>
            </li>
               <li  className='p-2 text-center basis-1/4 font-bold hover:bg-gray-800 dark:hover:shadow-lg  hover:text-white rounded-2xl  '>
              <NavLink 
              to={'/'}
              >
              HOME
              </NavLink>
            </li>
          */}
        
        </ul>
      </div>
    </div>
  )
}

export default Header