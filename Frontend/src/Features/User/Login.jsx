import React from 'react'
import { useState } from 'react'


export function LoginForm() {

    return (
        <div className=' '>
            <form  className=' clas_inp ' onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="userid"> User ID</label>
                <input name='UserId' type="text" placeholder='USER ID OR EMAIL'
                    className='p-1 block mb-5  border-2 rounded-lg ' required="true" />
                <label htmlFor="password"> Password</label>
                <input name='password' type="password" placeholder='Password' className=' border-2 rounded-lg p-1 block mb-5 border-2px-solid-black' required="true"/>
                <button type='submit' className='bg-blue-500 block h-10 w-24 mb-3 border-2 m-auto text-white  rounded-2xl hover:bg-blue-600 hover:text-1.5xl '> Submit</button>

            </form>


        </div>
    )
}




