import React,{useEffect, useState } from 'react'
import Api from "../../API/Api"

function History() {
        const [history , setHistory] = useState([])

     useEffect( ()=> {
       if( localStorage.getItem('login') === 'true'){
          Api.post("/visit/Userhistory" , {id : JSON.parse(localStorage.getItem("user"))._id}).then(
            (res)=>{
            setHistory(res.data.data)
            console.log("history at history component ", res.data.data);
          })
          
       }
       
    },[]
  )

  return (
    <div>
        {
        history.map((item)=> {
            return (
                <div key={item._id} className='border border-slate-300 rounded-lg p-4 mb-4'>
                    <h2 className=' text-2xl font-bold text-[#6becf5]'> {item.topic?.toUpperCase() || " Topic"}  </h2>
                    <div>

                    <p>Total question : {item.totalQues}</p>
                    <p> Score: {item. Score}</p>
                    {/* <p>Your Answer: {item.totalQues}</p> */}
                    {/* <p>Your Answer: {item.totalQues}</p> */}
                    </div>
                    {/* <p>Correct Answer: {item.correctAnswer}</p> */}
                </div>
            )
        })}
    </div>
  )
}

export default History