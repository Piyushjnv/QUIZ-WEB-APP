import React from 'react'
import AddQuestionButton from './AddQuestionButton'
import { useLocation } from 'react-router-dom'
import AttemptQuiz from './AttemptQuiz'
import ReactGA from 'react-ga4';
// import Questionaddinbulk from '../../Features/Questionaddinbulk'
ReactGA.initialize('G-JM3Z9CLVYP')
function Index() {
  const location = useLocation()

  return (
    <div className=' mt-10 flex   '>
  
          <div
           onClick={() => {
     ReactGA.event({
       category: 'User',
       action: 'Clicked add question button'
     })
     console.log('attempt quesdtion');
     
   }
   }
          className='  '>
         <AddQuestionButton /> 
          </div>

          <div 
          onClick={() => {
     ReactGA.event({
       category: 'User',
       action: 'Clicked attempt question button'
     })
     console.log('attempt quesdtion');
     
   }
   }
          className=' '>
         <AttemptQuiz /> 
          </div>
          {/* <div><Questionaddinbulk /></div> */}
    
    </div>
  )
}

export default Index