import React from 'react'
import { useNavigate } from 'react-router-dom'
import Logoutuser from '../../Features/User/Logout.user'
import ChangePasword from '../../Features/User/ChangePasword'
import profile from '/profle.png'
// profile image 
// name email , 

function Profile() {
  const navigate = useNavigate()
    // console.log("profile jsx");
    const user = JSON.parse(localStorage.getItem("user"))
    const name = user.fullname
    const email = user.email

  return (
    <div className='flex flex-col max-w-xl md:max-w-2xl rounded-lg items-center dark:bg-gray-600 min-h-100 shadow-lg  mt-10 mx-auto justify-center '>
        <div className=' w-20 h-20 border  mb-10 dark:border-white bg-white rounded-full overflow-hidden'>
            <img src={profile} width={80} height={80} alt="Profile" />
        </div>
        <div className=' font-bold dark:text-white '>
            <div className=' border-2 rounded-lg p-3 mb-4 dark:border-[#66fa66] border-[green] '>{name}</div>
            <div className=' border-2 rounded-lg p-3 mb-4 dark:border-[#66fa66] border-[#249424] border-double '>{email}</div>
        </div>
         <div className="mt-5 max-w-30 h-15  items-center bg-slate-800 hover:bg-slate-700/80 transition-all rounded-lg px-1 py-2 border border-slate-700/50">
             <Logoutuser />
           </div>
            <div 
            onClick={()=>{
                navigate("changepassword")
            }}
            className="mt-5 max-w-35 h-fit  items-center bg-slate-800 hover:bg-slate-700/80 transition-all rounded-lg px-1 py-2 border border-slate-700/50 mb-8">
             <div className='w-30 text-center p-1 h-fit border-[#ffd53ed0]  bg-[#ffd53e96] hover:bg-[#9618188f] border-2 font-bold hover:text-[#ffffff] hover:font-extrabold rounded-2xl text-[#220808] cursor-pointer transition-all duration-300 '>Change Password</div>
           </div>
    </div>
  )
}

export default Profile