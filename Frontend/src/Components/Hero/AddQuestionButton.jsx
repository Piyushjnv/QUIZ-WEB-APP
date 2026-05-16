import React from 'react'
import { useNavigate , NavLink , Link} from "react-router-dom"

function AddQuestionButton() {
    const navigate = useNavigate()
  return (
    <div className=' m-2 cursor-pointer '>
        {/* {console.log(window.location.pathname)}     */}
            {/* <Link  to={"qadd"}> */}
            <div className=' border-[]  hover:border-[#ffd53ed0]  hover:bg-[#ffd53e4b] rounded-2xl w-40 h-20 bg-gray-600 text-gray-100 p-2 text-center border-l-2 border-purple-600  text-2xl   '
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