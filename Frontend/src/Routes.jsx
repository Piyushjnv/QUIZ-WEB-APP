import React from 'react'
import { createBrowserRouter, Outlet } from 'react-router-dom'
import Layout from './Layout'
import User from './Features/User'
import Q_add from './Features/Q_add'
import ChangePasword from './Features/User/ChangePasword'
import Index from './Components/Hero/Index'
import Q_attempt from './Features/Q_attempt'
import History from './Components/History/History'
import TestAgain from './Components/History/TestAgain'
import Profile from './Components/Header/Profile'
// import QuizGenerator from "./Features/Quizes/ssc_quiz_generator-1"
import NeetUg from './Components/QuestionByCAtegory/NEETUG'
import AllQuestion from './Components/QuestionByCAtegory/AllQuestion'
// import {HistoryQuetion, Computer, AllQuestion, Polity, Geography, English, Static, Economics,Science, General} from "./Components/QuestionByCAtegory"
import GovExam from './Components/QuestionByCAtegory/GovermentQuestiom'
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
                path: "/history",
                children:[
                    {
                        index:true,
                        element: <History />
                    },
                    {
                    path:"testagain",
                    element: <TestAgain />
                    }
                ]
            },
            {
                path: "/login",
                element:< User />
            },
            {
                path:"/qattempt",
                element: <AllQuestion />
            },
             {
                path:"/user",
                children:[
                    {
                        index:true,
                        element: <Index />

                    },
                    {
                        path: "/user/qsend/:id",
                        element: <GovExam />
                    },
                    {
                        path:"/user/qsend",
                        element: <GovExam />
                    },
                    {
                        path:"/user/qadd",
                        element: <Q_add />
                    },
                    {
                        path:"/user/profile",
                      
                        children: [
                            {
                                index:true,
                                element: <Profile />

                            },
                            {
                                path: "/user/profile/changepassword",
                                element: <ChangePasword />
                            }
                        ]
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