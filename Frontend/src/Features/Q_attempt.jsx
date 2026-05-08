import React from 'react'
import API from '../API/API'
import { useState, useEffect , useId } from 'react'
import axios from 'axios'
import  DisplayQuestion from './DisplayQuestion'

 function Q_attempt() {
  const [questions, setQuestions] = useState([])


// const fetchQuestions = async  () => {
//       try {
//         await axios.get('http://localhost:8000/user/qsend')
//         .then((res) =>  {
//           console.log(res.data.data , "i am response from qsend");
//           // return res.data.data
//           setQuestions( res.data.data)
//         })
        
//       } catch (error) {
//         console.error('Error fetching questions:', error)
//       }
//     }
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await API.get('user/qsend')
        setQuestions(response.data.data)
      } catch (error) {
        console.error('Error fetching questions:', error)
      }
    }

    fetchQuestions()
  }, [])
console.log(questions);

  return (
    <div className=' flex flex-col w-full relative '>
      {/* header */}
      <div>

      </div>
      {/* question section  */}
      <div className='mt-5'>
      <DisplayQuestion question={questions}/>
      </div>
    {/* buttons at bottom for action  */}
      <div className="flex w-full relative m-10">
        <div className=" absolute left-0 border-2 h-8 w-15 text-center font-bold bg-[green] text-white border-[black] rounded ">
          PREV
        </div>
        <div></div>
        <div className=" absolute  right-0 border-2 h-8 w-15 text-center font-bold bg-[green]  text-white border-[black] rounded ">
          NEXT
        </div>
      </div>
    </div>
  )
}

export default Q_attempt
// {username: '69ea5ce6b7e89e3b595a60dc', question: 'jfhsdjfd', option1: 'fndsjfjdf', option2: 'mfsdnfjdf', option3: 'kfjdjhf', …}
// category
// : 
// "Current"
// correctOption
// : 
// "3"
// option1
// : 
// "fndsjfjdf"
// option2
// : 
// "mfsdnfjdf"
// option3
// : 
// "kfjdjhf"
// option4
// : 
// "dfjfdhf"
// question
// : 
// "jfhsdjfd"
// username
// : 
// "69ea5ce6b7e89e3b595a60dc"
// [[Prototype]]
// : 
// Object