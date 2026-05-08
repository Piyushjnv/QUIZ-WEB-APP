import React from "react";
import API from "../API/API";
import { useState, useEffect, useId } from "react";
import axios from "axios";
import DisplayQuestion from "./DisplayQuestion";

function Q_attempt() {
  const [questions, setQuestions] = useState([]);
  const [questionsno, setQuestionsno] = useState(1);
  const [selectedoption, setSelectedOption] = useState(null);
  const handleOptionData = (incomingData) => {
    setSelectedOption(incomingData);
  };
  const next = () => {
    console.log("i am next");
    if (selectedoption == questions.correctOption){
      console.log("correct");
      
    }else {
      console.log("incorrect");
    }
  };
  const prev = () => {
    console.log("i am prev");
  };

  useEffect( () => {
    const fetchQuestions = async () => {
      try {
        const response = await API.get("user/qsend")
        setQuestions(response.data.data);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
      
    };
 console.log(questions, "i am questions in useeffect");
    fetchQuestions();
  }, [questionsno]);

  // console.log(questions);

  return (
    <div className=" flex flex-col w-full relative ">
      {/* header */}
      <div>
        <h1 className=" text-3xl font-bold text-center mt-5">
          Attempt Questions
        </h1>
        <div className="text-2xl font-bold text-center border-2  bg-amber-300 ">
          {questions.category}
        </div>
      </div>
      {/* question section  */}
      <div className="mt-5">
        <DisplayQuestion  question={questions} sendoptionData={handleOptionData} Qno={questionsno} />
      </div>

      <div className="flex justify-center mt-5">
        <div className="border-2 h-8 px-6 text-center font-bold bg-[green] text-white border-[black] rounded cursor-pointer" onClick={next}>
          SUBMIT
        </div>
      </div>
      {/* buttons at bottom for action  */}
      <div className="flex relative m-10">
        <div 
        onClick={prev}
        className=" absolute left-0 border-2 h-8 w-15 text-center font-bold bg-[green] text-white border-[black] rounded ">
          PREV
        </div>
        <div></div>
        <div
        onClick={next}
        className=" absolute  right-0 border-2 h-8 w-15 text-center font-bold bg-[green]  text-white border-[black] rounded ">
          NEXT
        </div>
      </div>
      
    </div>
  );
}

export default Q_attempt;
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
