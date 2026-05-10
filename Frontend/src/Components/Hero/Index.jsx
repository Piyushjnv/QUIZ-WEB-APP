import React from 'react'
import AddQuestionButton from './AddQuestionButton'
import { useLocation } from 'react-router-dom'
import AttemptQuiz from './AttemptQuiz'
// import Questionaddinbulk from '../../Features/Questionaddinbulk'

function Index() {
  const location = useLocation()

  return (
    <div className=' max-w-full mt-10 flex  justify-between'>
  
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