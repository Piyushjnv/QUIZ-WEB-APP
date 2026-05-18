import React from "react";
import API from "../API/Api";
import { useState, useEffect, useId } from "react";
import axios from "axios";
import DisplayQuestion from "./DisplayQuestion";
import ReactGA from 'react-ga4';

ReactGA.initialize('G-JM3Z9CLVYP');

function Q_attempt() {
  const [questions, setQuestions] = useState([]);
  const [questionsno, setQuestionsno] = useState(1);
  const [score, setScore] = useState(0);
  const [nextclicked, setNextClicked] = useState(true);
  const [selectedoption, setSelectedOption] = useState(null);
  const [submitted, setSubmitted] = useState(true);
  const [desableOptions, setdesableOptions] = useState(false);
  // const [changecolor, setchangecolor] = useState()

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
  //  setchangecolor(document.getElementById(`${selectedoption}`))
    // console.log("submitted run ",submitted);
    if (selectedoption == questions.correctOption ) {
      setScore(score + 1);
      changecolor.classList.add("bg-[#0080003b]");
      changecolor.classList.add("border-[green]");
      // console.log("correct");
    } else {
      changecolor.classList.add("bg-[#fb2c36c2]");
      changecolor.classList.add("border-red");
      changecolorofcorrect.classList.add("bg-[#00800024]");

      // console.log("incorrect");
    }
    setdesableOptions(true)
    setSubmitted(false);
    setNextClicked(false);
  };

  const next = () => {
    // console.log("i am next");

    if (selectedoption == questions.correctOption) {
      changecolor.classList.remove("bg-[#0080003b]");
      changecolor.classList.remove("border-[green]");
      // console.log("correct");
    } else {
      changecolor.classList.remove("bg-[#fb2c36c2]");
      changecolor.classList.remove("border-red");
      changecolorofcorrect.classList.remove("bg-[#00800024]");

      // console.log("incorrect");
    }
    setdesableOptions(false)
    setSelectedOption(null)
    setQuestionsno(questionsno + 1);
    setSubmitted(true);
    setNextClicked(true);
  };
  const prev = () => {
    console.log("i am prev");
  };
 // Replace with your GA4 measurement ID

 useEffect(() => {
     ReactGA.send({ hitType: "pageview", page: window.location.pathname });
   }, []);
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
    <div className=" flex flex-col relative mt-10 max-w-xl md:max-w-4xl mx-auto mb-10">
      {/* header */}
      <div className=" relative">
        <div className="flex flex-col items-center mb-8">
          <h1 className=" text-3xl font-bold mb-2 mt-5">
            Attempt <span className=" text-blue-800">Question</span>
          </h1>
          <div className="w-37 h-1 bg-blue-500 rounded-full"></div>
        </div>
        <div className=" mt-3 absolute md:text-xl  text-[#f5c518]  font-bold right-3 mr-5 bg-[#f5c51833] p-1 rounded-full border-2 border-gray-300 shadow-lg text-center text-2xl">
          score : {score}
        </div>
        {/*     display: inline-flex;
    align-items: center;
    gap: 6px;
    border: 1px solid rgba(245, 197, 24, 0.2);
    color: #f5c518;
    font-size: 0.72rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    padding: 5px 12px;
    
    margin-bottom: 14px; */}
        <div className="md:text-xl font-bold text-[#f5c518] w-fit p-2 mt-5 ml-5 bg-[#f5c51833]  text-center border-2 mb-3.5 border-gray-300 shadow-lg rounded-full ">
          category : {questions.category}
        </div>
      </div>

      {/* question section  */}

      <div className="mt-5 ">
        <DisplayQuestion
        desableooption={desableOptions}
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
