import React from 'react'
import { useState } from 'react'
import Api from '../../API/Api'
import {Navigate, useNavigate} from "react-router-dom"


export function LoginForm() {
    const navigate = useNavigate()
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
            setisdesable(true)
            Api
                .post(`user/login`, formData)
                .then((response) => {
                    const {user} = response.data
                    if(user) {
                        localStorage.setItem("user", JSON.stringify(user))
                        localStorage.setItem("login", true)
                        navigate("/")
                    }
                    console.log(response.data, user.username, user.email)
                })
        } catch (error) {
            console.error("Error occurred while registering user:", error)
        }
    }
    return (
        <div className=" dark:bg-gray-800 dark:text-white ">
            <form  className=' clas_inp ' >

                <label htmlFor="userid"> User ID</label>
                <input 
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
                onClick={handleSubmit} 
                desabled = {isdesable}
                className='bg-blue-500 block h-10 w-24 mb-3 border-2 m-auto text-white  rounded-2xl hover:bg-blue-600 hover:text-1.5xl '
                > Submit
                </button>

            </form>


        </div>
    )
}




