import React from "react";
import AddQuestionButton from "./AddQuestionButton";
import { useLocation } from "react-router-dom";
import AttemptQuiz from "./AttemptQuiz";
import ReactGA from "react-ga4";
import history from "/history.png";
import geography from "/geography.png";
import polity from "/polity.png";
// import Time from "../../Features/Quizes/Time";
import computer from "/computer.png";
import { Link, useNavigate } from "react-router-dom";
import Questionaddinbulk from '../../Features/Questionaddinbulk'
ReactGA.initialize("G-JM3Z9CLVYP");
function Index() {
   const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className=" mt-10  flex flex-col   ">
      <div className=" w-full flex flex-row ">
      
        <div
          onClick={() => {
            ReactGA.event({
              category: "Add Question",
              action: "Clicked add question button",
            });
            // console.log("attempt quesdtion");
          }}
          className=" ml-5 md:ml-20"
        >
          <AddQuestionButton />
        </div>

        <div
          onClick={() => {
            ReactGA.event({
              category: "Question Attempt",
              action: "Clicked attempt question button",
            });
            // console.log("attempt quesdtion");
          }}
          className=" ml-5  md:ml-20"
        >
          <AttemptQuiz />
        </div>
      </div>


   
      {/* <div><Questionaddinbulk /></div> */}
      <div className=" flex flex-row mt-10 justify-between mx-auto gap-12">
        <div
          className="w-fit items-center "
          onClick={() => {
            if (localStorage.getItem("login") === "true") {
              navigate("question/history");
            } else {
              navigate("/login");
            }
          }}
        >
          <div className=" w-12 h-12 border border-gray-300 bg-[#ffffff59] rounded-full overflow-hidden">
            <img src={history} alt="" />
          </div>
          <div className="text-center mt-1 text-[10px] ">HISTORY</div>
        </div>

        <div
          className="w-fit items-center "
          onClick={() => {
            // console.log('geography');
            
            if (localStorage.getItem("login") === "true") {
              navigate("question/geography");
            } else {
              navigate("/login");
            }
          }}
        >
          <div className=" w-12 h-12 border border-gray-300 bg-[#ffffff59] rounded-full overflow-hidden">
            <img src={geography} alt="" />
          </div>
          <div className="text-center mt-1 text-[10px] ">GEOGRAPHY</div>
        </div>
        <div
          className="w-fit items-center "
          onClick={() => {
            if (localStorage.getItem("login") === "true") {
              navigate("question/polity");
            } else {
              navigate("/login");
            }
          }}
        >
          <div className=" w-12 h-12 border border-gray-300 bg-[#ffffff59] rounded-full overflow-hidden">
            <img width={48} height={80} src={polity} alt="" />
          </div>
          <div className="text-center mt-1 text-[10px] ">POLITY</div>
        </div>
        <div
          className="w-fit items-center "
          onClick={() => {
            if (localStorage.getItem("login") === "true") {
              navigate("question/computer");
            } else {
              navigate("/login");
            }
          }}
        >
          <div className=" w-12 h-12 border border-gray-300 bg-[#ffffff59] rounded-full overflow-hidden">
            <img src={computer} alt="" />
          </div>
          <div className="text-center mt-1 font-[1px]  text-[10px] ">
            COMPUTER
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
