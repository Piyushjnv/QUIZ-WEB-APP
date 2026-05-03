import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Layout from './Layout'
import User from './Features/User'

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
            }
        ]
    }
])

export default Routes