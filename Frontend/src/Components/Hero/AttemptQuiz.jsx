import React from "react";
import { Link, useNavigate } from "react-router-dom";

function AttemptQuiz() {
  const navigate = useNavigate();
  return (
    <div className=" m-2 cursor-pointer ">
      {/* {console.log(window.location.pathname)} */}

      <div
        className=" border-[] rounded-2xl w-40 h-20 hover:border-[#ffd53ed0]  hover:bg-[#ffd53e4b] bg-gray-600 text-gray-100 p-2 text-center border-l-2 border-purple-600  text-2xl bold  "
        onClick={() =>{
          if(localStorage.getItem('login') ==='true')
             {navigate("qattempt")} 
        else{
          navigate("/qattempt")
        }
        }  }
      >
        {" "}
        Attempt Question
      </div>
    </div>
  );
}

export default AttemptQuiz;
