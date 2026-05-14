import React from "react";
import { useState } from "react";

function DisplayQuestion({question , Qno, sendoptionData }) {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className=" max-w-8/10 mx-auto rounded-xl border-2 border-gray-100  shadow-2xl  flex flex-col box-border">

        {/*  question and option  */}
      <div className="  ">

        <div className=" bg-white  min-h-15 max-h-fit font-bold p-2 item-center border-2 rounded m-2 mt-5 mb-5"> <span className="  font-bold  m-2">{Qno} : </span> {question.question}</div>

        <div  className=" rounded flex flex-col ">
          {/* option 1 */}
          <div 
          id="1" 
          onClick={()=>{
             setSelectedOption(question.option1);
                sendoptionData(1);
          }}
          className="flex  text-center flex-row  h-15 border-2 m-2 cursor-pointer hover:bg-gray-100 transition-colors rounded">
            <input
              type="radio"
              value={question.option1}
              checked={selectedOption === question.option1}
            
              id="option1"
              name="option"
              placeholder={`hii`}
              className=" m-2"
            />
            <label className=" " htmlFor="option1"> {question.option1}</label>
          </div>
          <div 
          id="2" 
          onClick={()=>{
             setSelectedOption(question.option2);
                sendoptionData(2);
          }}
          className="flex  text-center items-center flex-row  h-15 border-2 m-2 cursor-pointer hover:bg-gray-100 transition-colors rounded">
            
            <input
            className=" m-2 border rounded"
              type="radio"
              id="option2"
              value={question.option2}
               checked={selectedOption === question.option2}
             
              name="option"
              placeholder=""
              className=" m-2 border rounded"
            />
            <label htmlFor="option2">{question.option2}</label>
          </div>
          <div id="3" 
          onClick={()=> {
            setSelectedOption(question.option3);
                sendoptionData(3); 
          }}
          className="flex  text-center flex-row  h-15 border-2 m-2 cursor-pointer hover:bg-gray-100 transition-colors rounded">
            {" "}
            <input
              type="radio"
              id="option3"
              name="option"
               checked={selectedOption === question.option3}
             
              value={question.option3}
              placeholder=""
              className=" m-2  border rounded"
            />
            <label htmlFor="option3">{question.option3}</label>
          </div>
          <div id="4" 
          onClick={()=> {
             setSelectedOption(question.option4);
                sendoptionData(4);
          }}
          className="flex  text-center flex-row  h-15 border-2 m-2 mb-5 cursor-pointer hover:bg-gray-100 transition-colors rounded">
            <input
              type="radio"
              id="option4"
               checked={selectedOption === question.option4}
              name="option"
              value={question.option4}
              placeholder=""
              className=" m-2 border rounded"
            />
            <label htmlFor="option4">{question.option4}</label>
          </div>
        </div>
      </div>

      
    </div>
  );
}

export default DisplayQuestion;
