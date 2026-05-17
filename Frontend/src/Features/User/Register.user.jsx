import React, { useState } from "react"
import { useNavigate } from 'react-router-dom'
import Api from "../../API/Api"
// import { Client, Account, ID } from "appwrite";
// import { client } from "../../API/Client";


export function RegisterForm() {
    const navigate = useNavigate()
    const [isdesabled, setdesabled] = useState(false)
    const [formData, setFormData] = useState({
        fullname: "",
        username: "",
        email: "",
        password: "",

    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            Api
                .post("user/register", formData)
                .then((response) => {
                    console.log(response.data)
                    if (response.data.success) {
                        localStorage.setItem("user", JSON.stringify(response.data.User))
                        localStorage.setItem("login", true)
                        navigate("/user")
                    }

                })
        } catch (error) {
            console.error("Error occurred while registering user:", error)
        }
    }

    return (
        <>
            <div className=" m-auto  ">

                <form className=" clas_inp dark:bg-gray-800 dark:text-white " encType="">
                    <label htmlFor="fullname">FullName*</label>
                    <input
                        type="text"
                        name="fullname"
                        placeholder="FullName"
                        value={formData.fullname}
                        onChange={handleChange}
                        className="p-1 rounded-lg block border-2 border-solid"
                        required="true" />

                    <label for="email">Email*</label>

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        className=" block border-2 rounded-lg"
                        required="true" />
                    <label for="username">Username</label>

                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={formData.username}
                        onChange={handleChange}
                        className=" block border-2 rounded-lg"
                        required="true"
                    />

                    <label for="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Password"
                        className=" block border-2 rounded-lg"
                        required="true" />

                    <label for="confirm_password">Confirm Password</label>

                    <input
                        type="password"
                        name="confirm_password"
                        placeholder="Confirm password"
                        // value={formData.password}
                        // onChange={handleChange}
                        className=" block border-2 rounded-lg"
                        required="true"
                    />

                    <label for="avatar">Avatar</label>

                    <input
                        type="file"
                        name="avatar"
                        placeholder="Avatar"
                        className=" block border-2 rounded-lg w-1/2 bg-[#6b6a67]"
                    // required="true" 
                    />

                    {/* <label for="avatar">avatar</label> */}

                    {/* <input
                        type="file"
                        name=""
                        placeholder=""
                        className=" block border-2 rounded-lg w-1/2 bg-[#6b6a67]" /> */}

                    <button type="submit" onClick={handleSubmit} className="bg-blue-500 block h-10 w-24 mb-2 border-2 mt-2 m-auto text-white  rounded-2xl hover:bg-green-600 hover:text-1.5xl " > Submit </button>
                </form>
            </div>
        </>
    )
}