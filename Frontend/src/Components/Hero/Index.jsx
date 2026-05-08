import React from 'react'
import AddQuestionButton from './AddQuestionButton'
import { useLocation } from 'react-router-dom'
import AttemptQuiz from './AttemptQuiz'

function Index() {
  const location = useLocation()

  return (
    <div>
      
        {/* <p className=' text-2xl bg-amber-700'>hii</p> */}
        {console.log("hii")
        }
        <div className={` flex flex-row mx-auto justify-between`}>
          <div className=' basis-1/2 '>
        {!(location.pathname === '/user/qadd') && <AddQuestionButton /> }
          </div>
          <div className=' basis-1/2 '>
        {!(location.pathname === '/user/qattempt') && <AttemptQuiz /> }
          </div>
        </div>
    </div>
  )
}

export default Index