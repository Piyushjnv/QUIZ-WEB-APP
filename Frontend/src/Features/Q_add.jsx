import React from 'react'
import { useState } from 'react'

function Q_add() {
  const [question, setQuestion] = useState('')
  const [options, setOptions] = useState(['', '', '', ''])
  const [correctOption, setCorrectOption] = useState(null)

const Onsubmit = () =>{

}

  return (
    <div className=" mx-auto p-5 w-full ">
    <div className=" border p-4 rounded-lg shadow-md bg-white text-2xl">
        <input type="text" placeholder="Enter a question..." className=" m-3 p-2 border rounded-lg " />
        <input type="text" placeholder="Option 1" className=" m-3 p-2 border rounded-lg " />
        <input type="text" placeholder="Option 2" className=" m-3 p-2 border rounded-lg " />
        <input type="text" placeholder="Option 3" className=" m-3 p-2 border rounded-lg " />
        <input type="text" placeholder="Option 4" className=" m-3 p-2 border rounded-lg " />
        
       
    </div>

    {/* section 2 */}
    <p className='mt-10 font-black text-xl'>Correct Option</p>
    <div className='flex border rounded-lg p-5  max-[415px]:justify-between bg-white shadow-md mb-10'>
         {/* // Radio buttons to select the correct answer */}
        <input type="radio" name="correctAnswer" value="0" className="correct-radio" />
        <label htmlFor="option1" className="pr-5 ">Option 1</label>
        <input type="radio" name="correctAnswer" value="1" className="correct-radio" />
        <label htmlFor="option2" className="pr-5 ">Option 2</label>
        <input type="radio" name="correctAnswer" value="2" className="correct-radio" />
        <label htmlFor="option3" className="pr-5 ">Option 3</label>
        <input type="radio" name="correctAnswer" value="3" className="correct-radio" />
        <label htmlFor="option4" className="pr-5 ">Option 4</label>

    </div>
    <div className=' flex w-full justify-center'> <button type='submit' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add Question</button></div>
    </div>
  )
}

export default Q_add