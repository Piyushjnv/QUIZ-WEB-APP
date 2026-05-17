import { RegisterForm } from "./Register.user";
import { LoginForm } from "./Login";
import { useState } from "react";

function User() {

    const [IsLogin , setIslogin] = useState(true)

    return (
        <div className=' h-full flex items-center justify-center '>

            <div className=' w-full h-full md:w-1/2 lg:w-2/5  mb-10 mt-10 bg-gray-800  '>

                <div className=' w-1/1 flex mt-10 mb-5 p-4 mx-auto '>
                    <button onClick={() => {setIslogin(true)}} 
                    className = {`bg-blue-500  h-10 w-24 mb-3 ml-9 mr-9 border-2 text-white  rounded-2xl hover:text-1.5xl text-center
                     ${ IsLogin ? 'bg-blue-600' : 'bg-green-400'} ` }>

                        Login

                    </button>

                    <button id="register" onClick={() => {setIslogin(false)}} className={` bg-blue-500  h-10 w-24 mb-3 border-2 text-white  rounded-2xl hover:text-1.5xl text-center ${IsLogin ? 'bg-green-400' : 'bg-blue-500'} `}>
                        
                        Register
                        
                    </button>
                </div>
                <div className=' p-3  align-center   '>
                { IsLogin ? <LoginForm /> : <RegisterForm /> }
                </div>
            </div>
        </div>
    )
}

export default User