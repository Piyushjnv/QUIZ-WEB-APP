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
  const [submitted, setSubmitted] = useState(true);

  const handleOptionData = (incomingData) => {
    setSelectedOption(incomingData);
  };

   const correctOption = questions.correctOption;
  //  console.log("!selectedoption = ",!selectedoption);
  //  console.log("!selectedoption = ", selectedoption);
  //  console.log("after option change  !submitted || !selectedoption ==", !submitted || !selectedoption);
   
    const changecolor = document.getElementById(`${selectedoption}`);
    const changecolorofcorrect = document.getElementById(`${correctOption}`);
  const submitq = () => {
   
    // console.log("submitted run ",submitted);
    if (selectedoption == questions.correctOption ) {
      setScore(score + 1);
      changecolor.classList.add("bg-green-500");
      console.log("correct");
    } else {
      changecolor.classList.add("bg-red-500");
      changecolorofcorrect.classList.add("bg-green-300");

      console.log("incorrect");
    }
    setSubmitted(false);
    setNextClicked(false);
  };

  const next = () => {
    // console.log("i am next");

    if (selectedoption == questions.correctOption) {
      changecolor.classList.remove("bg-green-500");
      // console.log("correct");
    } else {
      changecolor.classList.remove("bg-red-500");
      changecolorofcorrect.classList.remove("bg-green-300");

      // console.log("incorrect");
    }
    setSelectedOption(null)
    setQuestionsno(questionsno + 1);
    setSubmitted(true);
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
    // console.log(questions, "i am questions in useeffect");
  }, [questionsno]);

  // console.log(questions);

  return (
    <div className=" flex flex-col relative mt-10 max-w-xl md:max-w-4xl mx-auto">
      {/* header */}
      <div className=" relative">
        <div className="flex flex-col items-center mb-8">
          <h1 className=" text-3xl font-bold mb-2 mt-5">
            Attempt <span className=" text-blue-800">Question</span>
          </h1>
          <div className="w-37 h-1 bg-blue-500 rounded-full"></div>
        </div>
        <div className=" mt-3 absolute bg-amber-200 font-bold right-3 rounded-lg border-gray-300 shadow-lg text-center text-2xl">
          score : {score}
        </div>
        <div className="md:text-xl font-bold w-fit p-2 mt-5 ml-5  text-center border-2 border-gray-300 shadow-lg rounded-lg bg-amber-200 ">
          category : {questions.category}
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

{/*  buttons  */}

      <div className="flex justify-center mt-5">
        <button
          disabled={!submitted || !selectedoption}
          // isdisabled
          // isdisabled={`${!submitted || !selectedoption}`}
          className={`border-2 h-8 px-6 text-center font-bold bg-[green] text-white border-[black] rounded
             ${!submitted || !selectedoption ? "bg-gray-500 cursor-not-allowed" : "bg-[green] cursor-pointer hover:bg-green-600"}
             `}
          onClick={submitq}
        >
          SUBMIT
        </button>
      </div>
      {/* buttons at bottom for action  */}
      <div className="flex relative mt-5 m-10">
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
