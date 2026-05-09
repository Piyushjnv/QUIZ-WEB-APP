import React from "react";
import API from "../API/API";
import { useState, useEffect, useId } from "react";
import axios from "axios";
import DisplayQuestion from "./DisplayQuestion";

function Q_attempt() {
  const [questions, setQuestions] = useState([]);
  const [questionsno, setQuestionsno] = useState(1);
  const [score, setScore] = useState(0);
  const [nextclicked, setNextClicked] = useState(true);
  const [selectedoption, setSelectedOption] = useState(null);
  const handleOptionData = (incomingData) => {
    setSelectedOption(incomingData);
  };

  const submitq = () => {
    const correctOption = questions.correctOption;
    const changecolor = document.getElementById(selectedoption);
    const changecolorofcorrect = document.getElementById(correctOption);
    console.log("i am next");
    if (selectedoption == questions.correctOption) {
      setScore(score + 1);
      changecolor.classList.add("bg-green-500");
      console.log("correct");
    } else {
      changecolor.classList.add("bg-red-500");
      changecolorofcorrect.classList.add("bg-green-300");

      console.log("incorrect");
    }
    setNextClicked(false);
  };
  const next = () => {
    const correctOption = questions.correctOption;
    const changecolor = document.getElementById(selectedoption);
    const changecolorofcorrect = document.getElementById(correctOption);
    console.log("i am next");

    if (selectedoption == questions.correctOption) {
      changecolor.classList.remove("bg-green-500");
      console.log("correct");
    } else {
      changecolor.classList.remove("bg-red-500");
      changecolorofcorrect.classList.remove("bg-green-300");

      console.log("incorrect");
    }
    setQuestionsno(questionsno + 1);
    setNextClicked(true);
  };
  const prev = () => {
    console.log("i am prev");
  };

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await API.get("user/qsend");
        setQuestions(response.data.data);
        // setNextClicked(false);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };
    fetchQuestions();
    console.log(questions, "i am questions in useeffect");
  }, [questionsno]);

  console.log(questions);

  return (
    <div className=" flex flex-col w-full relative ">
      {/* header */}
      <div className=" relative">
        <div className=" mt-3 absolute bg-amber-300 font-bold right-3 rounded text-center text-2xl">
          score : {score}
        </div>
        <h1 className=" text-3xl font-bold text-center mt-5">
          Attempt Questions
        </h1>
        <div className="text-2xl w-fit p-2 mt-5  text-center border-2  bg-amber-300 ">
         category :  {questions.category}
        </div>
      </div>
      {/* question section  */}
      <div className="mt-5 ">
        <DisplayQuestion
          question={questions}
          sendoptionData={handleOptionData}
          Qno={questionsno}
        />
      </div>

      <div className="flex justify-center mt-5">
        <button
          className="border-2 h-8 px-6 text-center font-bold bg-[green] text-white border-[black] rounded cursor-pointer"
          onClick={submitq}
        >
          SUBMIT
        </button>
      </div>
      {/* buttons at bottom for action  */}
      <div className="flex relative m-10">
        <div
          // descabled={questionsno === 1}
          onClick={prev}
          className=" absolute left-0 border-2 h-8 w-15 text-center font-bold bg-[green] text-white border-[black] rounded "
        >
          PREV
        </div>
        <div></div>
        <button
          disabled={nextclicked}
          onClick={next}
          className={`" absolute  right-0 border-2 h-8 w-15 text-center font-bold    text-white border-[black] rounded " ${nextclicked ? "bg-gray-500 cursor-not-allowed" : "bg-[green] cursor-pointer hover:bg-green-600"} `}
        >
          NEXT
        </button>
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
