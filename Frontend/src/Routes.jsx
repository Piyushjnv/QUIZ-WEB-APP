import React from 'react'
import { createBrowserRouter, Outlet } from 'react-router-dom'
import Layout from './Layout'
import User from './Features/User'
import Q_add from './Features/Q_add'
import Index from './Components/Hero/Index'
import Q_attempt from './Features/Q_attempt'


// const Hero = ()=> {
//     return(
//         <>
//         <div  className=' w-screen m-1 relative'>
//         {localStorage.getItem('login') && < Index />  }
//         <Outlet />
//         </div>
//         </>
//     )
// }
const Routes = createBrowserRouter([
    {
        path:"/",
        element: <Layout />,
        children:[
            {
                index : true,
                element: <Index />
            },
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
                children:[
                    {
                        index:true,
                        element: <Index />

                    },
                    {
                        path:"/user/qadd",
                        element: <Q_add />
                    },
                    {
                        path:"/user/qattempt",
                        element: <Q_attempt />
                    }
                ]
            }
        ]
    },
   
])

export default Routes