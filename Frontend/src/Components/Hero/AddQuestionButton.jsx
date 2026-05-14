import React from 'react'
import { useNavigate , NavLink , Link} from "react-router-dom"

function AddQuestionButton() {
    const navigate = useNavigate()
  return (
    <div className=' m-2 cursor-pointer '>
        {/* {console.log(window.location.pathname)}     */}
            {/* <Link  to={"qadd"}> */}
            <div className=' border rounded-2xl w-40 h-20 dark:bg-gray-600 dark:text-gray-100 p-2 text-center border-l-3 border-purple-600 text-purple-600 text-2xl bold  '
            onClick={() => {
              if(localStorage.getItem("login") === 'true'){
                navigate('qadd')}
              else{
                navigate("/login")
              }}
              }
            > Question add</div>
    
            {/* </Link> */}
    </div>
            
  )
}

export default AddQuestionButton