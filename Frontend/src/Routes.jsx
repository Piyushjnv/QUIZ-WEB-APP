import React from 'react'
import { createBrowserRouter, Outlet } from 'react-router-dom'
import Layout from './Layout'
import User from './Features/User'
import Q_add from './Features/Q_add'
import Index from './Components/Hero/Index'


const Hero = ()=> {
    return(
        <>
        <div  className=' w-screen m-1 relative'>hii i am hero 
        {localStorage.getItem('login') && < Index />  }
        <Outlet />

        </div>
        </>
    )
}
const Routes = createBrowserRouter([
    {
        path:"/",
        element: <Layout />,
        children:[
            {
                path:"/about",
                element: <h1>About</h1>
            },
            {
                path: "/login",
                element:< User />
            },
             {
                path:"/user",
                element: <Hero />,
                children:[
                    {
                        path:"/user/qadd",
                        element: <Q_add />
                    }
                ]
            }
        ]
    },
   
])

export default Routes