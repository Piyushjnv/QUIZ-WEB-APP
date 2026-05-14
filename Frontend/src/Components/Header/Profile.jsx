import React from 'react'
// profile image 
// name email , 

function Profile() {
    console.log("profile jsx");
    const user = JSON.parse(localStorage.getItem("user"))
    const name = user.fullname
    const email = user.email

  return (
    <div className='flex flex-col max-w-xl md:max-w-2xl rounded-lg dark:bg-gray-600 min-h-100 shadow-lg  mt-10 mx-auto justify-center '>
        <div className=' w-20 h-20 border mx-auto mb-10 dark:border-white bg-white rounded-full'>
            <img src="" alt="" />
        </div>
        <div className=' mx-auto font-bold dark:text-white '>
            <div className=' border-2 rounded-lg p-3 mb-4 dark:border-[#66fa66] border-[green] '>{name}</div>
            <div className=' border-2 rounded-lg p-3 mb-4 dark:border-[#66fa66] border-[#249424] border-double '>{email}</div>
        </div>

    </div>
  )
}

export default Profile