import React from "react";
import AddQuestionButton from "./AddQuestionButton";
import { useLocation } from "react-router-dom";
import AttemptQuiz from "./AttemptQuiz";
import ReactGA from "react-ga4";
import history from "/history.png";
import geography from "/geography.png";
import polity from "/polity.png";
import science from "/science.png";
import economiscs from "/economics.png";
import general from"/general.png"
import static1 from "/static.png"
import maths from "/maths.png"
import english from "/english.png"
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
      {/* first row  */}
      <div className=" w-full flex flex-row ">
      
        <div
          onClick={() => {
            ReactGA.event({
              category: "Add Question",
              action: "Clicked add qsend button",
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
              action: "Clicked attempt qsend button",
            });
            // console.log("attempt quesdtion");
          }}
          className=" ml-5  md:ml-20"
        >
          <AttemptQuiz />
        </div>
      </div>


   
     {/* second row */}
      <div className=" flex flex-row mt-10 justify-between mx-auto gap-12">
        <div
          className="w-fit items-center "
          onClick={() => {
            if (localStorage.getItem("login") === "true") {
              navigate("qsend/history");
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
              navigate("qsend/geography");
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
              navigate("qsend/polity");
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
              navigate("qsend/computer");
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
        {/* <div></div> */}
        
         {/* <div
          className="w-fit items-center "
          onClick={() => {
            if (localStorage.getItem("login") === "true") {
              navigate("qsend/computer");
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
        </div> */}
         {/* <div
          className="w-fit items-center "
          onClick={() => {
            if (localStorage.getItem("login") === "true") {
              navigate("qsend/computer");
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
        </div> */}
      </div>

      <div className=" flex flex-row mt-10 justify-between mx-auto gap-12">
         <div
          className="w-fit items-center "
          onClick={() => {
            if (localStorage.getItem("login") === "true") {
              navigate("qsend/static");
            } else {
              navigate("/login");
            }
          }}
        >
          <div className=" w-12 h-12 border border-gray-300 bg-[#ffffff59] rounded-full overflow-hidden">
            <img src={static1} alt="" />
          </div>
          <div className="text-center mt-1 font-[1px]  text-[10px] ">
            STATIC
          </div>
        </div>
         <div
          className="w-fit items-center "
          onClick={() => {
            if (localStorage.getItem("login") === "true") {
              navigate("qsend/general");
            } else {
              navigate("/login");
            }
          }}
        >
          <div className=" w-12 h-12 border border-gray-300 bg-[#ffffff59] rounded-full overflow-hidden">
            <img src={general} alt="" />
          </div>
          <div className="text-center mt-1 font-[1px]  text-[10px] ">
            GENERAL
          </div>
        </div>
         <div
          className="w-fit items-center "
          onClick={() => {
            if (localStorage.getItem("login") === "true") {
              navigate("qsend/economics");
            } else {
              navigate("/login");
            }
          }}
        >
          <div className=" w-12 h-12 border border-gray-300 bg-[#ffffff59] rounded-full overflow-hidden">
            <img src={economiscs} alt="" />
          </div>
          <div className="text-center mt-1 font-[1px]  text-[10px] ">
            ECONOMICS
          </div>
        </div>
         <div
          className="w-fit items-center "
          onClick={() => {
            if (localStorage.getItem("login") === "true") {
              navigate("qsend/science");
            } else {
              navigate("/login");
            }
          }}
        >
          <div className=" w-12 h-12 border border-gray-300 bg-[#ffffff59] rounded-full overflow-hidden">
            <img src={science} alt="" />
          </div>
          <div className="text-center mt-1 font-[1px]  text-[10px] ">
            SCIENCE
          </div>
        </div>
      </div>
      <div className=" flex flex-row mt-10 justify-between mx-auto mb-20 gap-12">
         <div
          className="w-fit items-center "
          onClick={() => {
            if (localStorage.getItem("login") === "true") {
              navigate("qsend/maths");
            } else {
              navigate("/login");
            }
          }}
        >
          <div className=" w-12 h-12 border border-gray-300 bg-[#ffffff59] rounded-full overflow-hidden">
            <img src={maths} alt="" />
          </div>
          <div className="text-center mt-1 font-[1px]  text-[10px] ">
            MATHS
          </div>
        </div>
         <div
          className="w-fit items-center "
          onClick={() => {
            if (localStorage.getItem("login") === "true") {
              navigate("qsend/english");
            } else {
              navigate("/login");
            }
          }}
        >
          <div className=" w-12 h-12 border border-gray-300 bg-[#fffffffb] rounded-full overflow-hidden">
            <img src={english} alt="" />
          </div>
          <div className="text-center mt-1 font-[1px]  text-[10px] ">
         ENGLISH
          </div>
        </div>
      </div>
      {/* neet  */}
        
        {/* <div className=" flex flex-row mt-10 mb-10 border-[1.4px] rounded-2xl p-5 justify-between mx-auto gap-12">
         <div
          className="w-fit items-center "
          onClick={() => {
            if (localStorage.getItem("login") === "true") {
              navigate("neet/biology");
            } else {
              navigate("/login");
            }
          }}
        >
          <div className=" w-12 h-12 border border-gray-300 bg-[#ffffff59] rounded-full overflow-hidden">
            <img src="" alt="" />
          </div>
          <div className="text-center mt-1 font-[1px]  text-[10px] ">
            BIOLOGY
          </div>
        </div>
         <div
          className="w-fit items-center "
          onClick={() => {
            if (localStorage.getItem("login") === "true") {
              navigate("neet/physics");
            } else {
              navigate("/login");
            }
          }}
        >
          <div className=" w-12 h-12 border border-gray-300 bg-[#ffffff59] rounded-full overflow-hidden">
            <img src="" alt="" />
          </div>
          <div className="text-center mt-1 font-[1px]  text-[10px] ">
            PHYSICS
          </div>
        </div>
         <div
          className="w-fit items-center "
          onClick={() => {
            if (localStorage.getItem("login") === "true") {
              navigate("neet/chemistry");
            } else {
              navigate("/login");
            }
          }}
        >
          <div className=" w-12 h-12 border border-gray-300 bg-[#ffffff59] rounded-full overflow-hidden">
            <img src="" alt="" />
          </div>
          <div className="text-center mt-1 font-[1px]  text-[10px] ">
            CHEMISTRY
          </div>
        </div>
         <div
          className="w-fit items-center "
          onClick={() => {
            if (localStorage.getItem("login") === "true") {
              navigate("neet/allneet");
            } else {
              navigate("/login");
            }
          }}
        >
          <div className=" w-12 h-12 border border-gray-300 bg-[#ffffff59] rounded-full overflow-hidden">
            <img src="" alt="" />
          </div>
          <div className="text-center mt-1 font-[1px]  text-[10px] ">
            NEET
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Index;
