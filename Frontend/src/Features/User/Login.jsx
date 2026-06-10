import React from 'react'
import { useState } from 'react'
import Api from '../../API/Api'
import { useNavigate} from "react-router-dom"


export function LoginForm() {
    const navigate = useNavigate()
    const [message , setmessage] = useState()
    const [isdesable, setisdesable] = useState(false)
 const [formData, setFormData] = useState({
        username: "",
        password: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }


 const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            // setisdesable(true)
            Api
                .post(`user/login`, formData)
                .then(  (response) => {
                    // const {user} = await response.data
                    if(response.data.success) {
                        
                        localStorage.setItem("user", JSON.stringify(response.data.user))
                        localStorage.setItem("login", true)
                        navigate("/user")
                    }
                    // console.log(response.data, user.username, user.email)
                })
                .catch ((err)=>{
                        console.log("err responce",err.response)
                        setmessage(err.response.data.message)
                    }
                )
        } catch (error) {
            console.error("Error occurred while registering user:", error)
        }
    }
    
    return (
        <div className=" dark:bg-gray-800 dark:text-white ">
            <form onSubmit={handleSubmit} className=' clas_inp ' >

                <label htmlFor="userid"> User ID</label>
                <input 
                autoComplete='username'
                name='username' 
                type="text" 
                placeholder='USER ID OR EMAIL'
                className='p-1 block mb-5  border-2 rounded-lg ' 
                required= "true"
                onChange={handleChange}
                value={formData.username}
                 />

                <label htmlFor="password"> Password</label>
                <input 
                name='password' 
                type="password"
                 placeholder='Password' 
                 className=' border-2 rounded-lg p-1 block mb-5 border-2px-solid-black' 
                  onChange={handleChange}
                value={formData.password}
                 required="true"/>

                <button 
                type='submit' 
               
                desabled = {formData.username.length == 0 || formData.password.length == 0}
                className='bg-blue-500 block h-10 w-24 mb-3 border-2 m-auto text-white  rounded-2xl cursor-pointer hover:bg-blue-600 hover:text-1.5xl '
                > Submit
                </button>
             <p className=" text-red-600 ">{message}</p>
            </form>


        </div>
    )
}




