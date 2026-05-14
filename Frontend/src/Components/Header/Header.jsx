import React, { useEffect } from 'react'
import Darkmode from '../../Features/Darkmode'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Profile from './Profile'
import { useNavigate } from 'react-router-dom'
function Header() {
console.log("header jsx");
const x = 0 
const navigte = useNavigate()
// var user
  const user = JSON.parse(localStorage.getItem('user')).fullname
// useEffect(()=> {
//   try {
//     if(localStorage.getItem("login") === 'true' ){
//      user = JSON.parse(localStorage.getItem('user')).fullname
//       navigte("/user")
//     }
//   } catch (error) {
//     console.log(error);
    
//   }
//   console.log("you areat user ");
  

// },[x])
// const x = 0

  return (
    <div className=' w-full h-30 relative flex flex-row dark:bg-gray-700 bg-[#8002f7]'>

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
                {/* <div className='  flex   '>
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
                </div> */}
                <div className=' absolute right-0 bottom-10 '>
        <Darkmode />
                </div>
      </div>
    </div>
  )
}

export default Header