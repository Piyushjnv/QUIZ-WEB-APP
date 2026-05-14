import React from 'react'
import AddQuestionButton from './AddQuestionButton'
import { useLocation } from 'react-router-dom'
import AttemptQuiz from './AttemptQuiz'
// import Questionaddinbulk from '../../Features/Questionaddinbulk'

function Index() {
  const location = useLocation()

  return (
    <div className=' mt-10 flex   '>
  
          <div className='  '>
         <AddQuestionButton /> 
          </div>

          <div className=' '>
         <AttemptQuiz /> 
          </div>
          {/* <div><Questionaddinbulk /></div> */}
    
    </div>
  )
}

export default Index