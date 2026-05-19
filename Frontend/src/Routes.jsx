import React from 'react'
import { createBrowserRouter, Outlet } from 'react-router-dom'
import Layout from './Layout'
import User from './Features/User'
import Q_add from './Features/Q_add'
import Index from './Components/Hero/Index'
import Q_attempt from './Features/Q_attempt'
import Profile from './Components/Header/Profile'
import QuizGenerator from "./Features/Quizes/ssc_quiz_generator-1"
// import AllQuestion from './Components/QuestionByCAtegory/AllQuestion'
import {HistoryQuetion, Computer, AllQuestion, Polity, Geography, English} from "./Components/QuestionByCAtegory"

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
                path:"/qattempt",
                element: <Q_attempt/>
            },
             {
                path:"/user",
                children:[
                    {
                        index:true,
                        element: <Index />

                    },
                    {
                        path:"/user/question",
                        children:[
                            {
                                path:"/user/question/history",
                                element: <HistoryQuetion />
                            },
                            {
                                path:"/user/question/computer",
                                element: <Computer />
                            },
                            {
                                path:"/user/question/polity",
                                element: <Polity />
                            },
                            {
                                path:"/user/question/geography",
                                element: <Geography />
                            },
                            {
                                path:"/user/question/english",
                                element: <English />
                            }
                        ]
                    },
                    {
                        path:"/user/questions",
                        element: <AllQuestion />
                    },
                    {
                        path:"/user/qadd",
                        element: <Q_add />
                    },
                    {
                        path:"/user/profile",
                        element: <Profile />
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