import axios from "axios";
import { useState, useEffect } from "react";
import ReactGA from "react-ga4";
import Api from "../API/Api";
import Questionaddinbulk from "./Questionaddinbulk";
ReactGA.initialize("G-JM3Z9CLVYP"); // Replace with your GA4 measurement ID

function Q_add() {
  const [islogin, setlogin] = useState();
  const [category, setcategory] = useState("");
  const [qtype, setqtype]= useState("Gov")
  const userID = JSON.parse(localStorage.getItem("user"))._id || 1;
  // console.log("type", qtype);

  const [question, setQuestion] = useState({
    Username: userID,
    Question: "",
    Option1: "",
    Option2: "",
    Option3: "",
    Option4: "",
    correctoption: "",
    category: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setQuestion((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);
  const Onsubmit = () => {
    try {
      console.log(question);
      console.log(qtype == "ENG");
      if(qtype === "ENG")
      {
           Api.post("/user/engqadd", question).then((response) => {
        const data = response.data;
        if (data.success == true) {
          // alert("question added successfully");
          setQuestion({
            Username: userID,
            Question: "",
            Option1: "",
            Option2: "",
            Option3: "",
            Option4: "",
            correctoption: "",
            category: "",
          });
        }

        console.log(data);
      });
        
      } else if(qtype === 'Gov'){
            Api.post("/user/qadd", question).then((response) => {
        const data = response.data;
        if (data.success == true) {
          // alert("question added successfully");
          setQuestion({
            Username: userID,
            Question: "",
            Option1: "",
            Option2: "",
            Option3: "",
            Option4: "",
            correctoption: "",
            category: "",
          });
        }

        console.log(data);
      });
      }else if(qtype === "MATHS"){
        Api.post("/user/mathqadd", question).then((response) => {
          const data = response.data;
          if (data.success == true) {
            // alert("question added successfully");
            setQuestion({
              Username: userID,
              Question: "",
              Option1: "",
              Option2: "",
              Option3: "",
              Option4: "",
              correctoption: "",
              category: "",
            });
          }
          // console.log(data);
        });
      }else if(qtype === "CURRENT"){
        Api.post("/user/currentAffairs", question).then((response) => {
          const data = response.data;
          if (data.success == true) {
            // alert("question added successfully");
            setQuestion({
              Username: userID,
              Question: "",
              Option1: "",
              Option2: "",
              Option3: "",
              Option4: "",
              correctoption: "",
              category: "",
            });
          }
          // console.log(data);
        });
      }  else {
        // console.log("GOVV");
        alert("please select a question type");
      }
  
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="md:max-w-8/10 mx-auto p-5 w-full ">
      <div className=" mb-10 mt-5">

        {/* Question Type Selection */}
        <div className="font-bold ">
          <input 
          checked={qtype === "Gov"}
          onChange={(e)=> {
            setqtype("Gov")
          }}
          type="radio" name="sub" className=" m-5" id="GOV" />{" "}
          <label htmlFor="GOV">GK-GS</label>
          <input 
          checked={qtype === "ENG"}
          onChange={(e)=> {
            setqtype("ENG")
          }}
          type="radio" name="sub" className=" m-5" id="neet" />{" "}
          <label htmlFor="neet"> ENGLISH </label>
          <input 
          checked={qtype === "MATHS"}
          onChange={(e)=> {
            setqtype("MATHS")
          }}
          type="radio" name="sub" className=" m-5" id="MATHS" />{" "}
          <label htmlFor="MATHS"> MATHS </label>
           <input 
          checked={qtype === "CURRENT"}
          onChange={(e)=> {
            setqtype("CURRENT")
          }}
          type="radio" name="sub" className=" m-5" id="Current" />{" "}
          <label htmlFor="Current"> CURRENT </label>
        </div>

        {/* section 1 header */}
         <div className="font-bold text-2xl mb-5">
          Adding Question for {qtype === "Gov" ? "GK-GS" : qtype === "ENG" ? "English" : qtype === "MATHS" ? "Maths" : qtype === "CURRENT" ? "CURRENT" : "" }
        </div>

        {/* ---------Question Add In Bulk----------- */}

        {JSON.parse(localStorage.getItem("user")).role === "ADMIN" ? (
          <Questionaddinbulk qtype={qtype} />
        ) : (
          ""
        )}
      </div>
      <div className=" border p-4 rounded-lg shadow-md  text-2xl">
        <div className="flex flex-col box-border ">
          <input
            type="text"
            value={question.Question}
            onChange={handleChange}
            name="Question"
            placeholder="Enter a question..."
            className=" m-3 p-2 border rounded-lg  "
          />
          <div className=" w-full m-3 box-border ">
            <input
              type="text"
              value={question.Option1}
              onChange={handleChange}
              placeholder="Option 1"
              name="Option1"
              className=" p-2 w-96/100
        
        border rounded-lg "
            />
          </div>
          <div className=" w-full m-3 box-border ">
            <input
              type="text"
              placeholder="Option 2"
              name="Option2"
              value={question.Option2}
              onChange={handleChange}
              className=" p-2 border  w-96/100 rounded-lg "
            />
          </div>
          <div className=" w-full m-3 box-border ">
            <input
              type="text"
              placeholder="Option 3"
              name="Option3"
              value={question.Option3}
              onChange={handleChange}
              className=" p-2 border  w-96/100 rounded-lg "
            />
          </div>
          <div className=" w-full m-3 box-border ">
            <input
              type="text"
              placeholder="Option 4"
              name="Option4"
              value={question.Option4}
              onChange={handleChange}
              className=" p-2 border  w-96/100 rounded-lg "
            />
          </div>
        </div>
      </div>

      {/* section 2 */}
      <p className="mt-10 font-black text-xl">Correct Option</p>
      <div className="flex border rounded-lg p-5  max-[415px]:justify-between shadow-md mb-10">
        {/* // Radio buttons to select the correct answer */}
        <input
          type="radio"
          name="correctoption"
          value="1"
          checked={question.correctoption === "1"}
          onChange={handleChange}
          className="correct-radio"
        />
        <label htmlFor="option1" className="pr-5 ">
          Option 1
        </label>
        <input
          type="radio"
          name="correctoption"
          checked={question.correctoption === "2"}
          onChange={handleChange}
          value="2"
          className="correct-radio"
        />
        <label htmlFor="option2" className="pr-5 ">
          Option 2
        </label>
        <input
          type="radio"
          name="correctoption"
          checked={question.correctoption === "3"}
          onChange={handleChange}
          value="3"
          className="correct-radio"
        />
        <label htmlFor="option3" className="pr-5 ">
          Option 3
        </label>
        <input
          type="radio"
          name="correctoption"
          checked={question.correctoption === "4"}
          onChange={handleChange}
          value="4"
          className="correct-radio"
        />
        <label htmlFor="option4" className="pr-5 ">
          Option 4
        </label>
      </div>
      <div className=" mb-10 ">
        <label htmlFor="Category" className=" font-bold ">
          Category* :{" "}
        </label>
        {qtype === "Gov"?  
        <select
          className=" border-2 rounded-xl bg-gray-800 text-white"
          // value={(e) => (e.target.value)}
          value={question.category}
          name="category"
          onChange={handleChange}
          id="Category"
        >
          <option value="NA">N/A ?</option>
          <option value="Science">Science</option>
          <option value="History">History</option>
          <option value="General">General</option>
          <option value="Current">Current</option>
          <option value="Geography">Geography</option>
          <option value="Polity">Polity</option>
          <option value="Games">Games</option>
          <option value="Static">Static</option>
          <option value="Economics">Economics</option>
          <option value="Computer">Computer</option>
        </select>
         : qtype === "ENG" ?
         <select
          className=" border-2 rounded-xl bg-gray-800 text-white"
          // value={(e) => (e.target.value)}
          value={question.category}
          name="category"
          onChange={handleChange}
          id="Category"
        >
          <option value="NA">N/A ?</option>
          <option value="Vocabulary">Vocabulary</option>
          <option value="Comprehension">Comprehension</option>
          <option value="Grammar">Grammar</option>
          <option value="Sentence Structure">Sentence Structure</option>
        </select>: 
        // maths
        qtype === "MATHS" ? 
        <select
          className=" border-2 rounded-xl bg-gray-800 text-white"
          // value={(e) => (e.target.value)}
          value={question.category}
          name="category"
          onChange={handleChange}
          id="Category"
        >
          <option value="NA">N/A ?</option>
          <option value="Algebra">Algebra</option>
          <option value="Geometry">Geometry</option>
          <option value="Arithmetic">Arithmetic</option>
          <option value="Trigonometry">Trigonometry</option>
          <option value="Statistics">Statistics</option>
          <option value="Probability">Probability</option>
         < option value="Number System">Number System</option>
          <option value="Mensuration">Mensuration</option>
          <option value="Simple Interest">Simple Interest</option>
          <option value="Compound Interest">Compound Interest</option>
          <option value="Profit & Loss">Profit & Loss</option>
          <option value="Time & Work">Time & Work</option>
          <option value="Time Speed Distance">Time Speed Distance</option>
          <option value="Ratio & Proportion">Ratio & Proportion</option>
          <option value="Percentage">Percentage</option>
          <option value="Average">Average</option>
          <option value="Interest">Interest</option>
          <option value="Partnership">Partnership</option>
        </select> :
        // current 
        qtype === "CURRENT" ?
         <select
          className=" border-2 rounded-xl bg-gray-800 text-white"
          // value={(e) => (e.target.value)}
          value={question.category}
          name="category"
          onChange={handleChange}
          id="Category"
        >
          <option value="NA">N/A ?</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
          <option value="2026">2026</option>
          {/* <option value="APR">APRIL</option>
          <option value="MAY">MAY</option>
          <option value="JUN">JUNE</option>
          <option value="JUL">JULY</option>
          <option value="AUG">AUGUST</option>
          <option value="SEP">SEPTEMBER</option>
          <option value="OCT">OCTOBER</option>
          <option value="NOV">NOVEMBER</option>
          <option value="DEC">DECEMBER</option> */}
        </select>: null}
      </div>

      {/*     *********Submit Button ******* */}


      <div className=" flex w-full justify-center">
        {" "}
        <button
          onClick={Onsubmit}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Question
        </button>
      </div>
    </div>
  );
}

export default Q_add;
