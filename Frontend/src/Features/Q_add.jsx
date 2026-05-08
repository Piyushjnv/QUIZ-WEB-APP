import axios from "axios";
import { useState, useEffect } from "react";
import Api from "../API/Api";

function Q_add() {
  const [islogin , setlogin] = useState()
  const [category, setcategory] = useState("");
  const userID = ((JSON.parse(localStorage.getItem("user")))._id || 1)
  // console.log(userID);
  
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

  const Onsubmit = () => {
    try {
      console.log(question);

      Api
      .post("/user/qadd", question).then(
        (response)=>{
          const data = response.data
          console.log(data);
          
        }
      )
    } catch (error) { }
  };

  return (
    <div className=" mx-auto p-5 w-full ">
      <div className=" border p-4 rounded-lg shadow-md bg-white text-2xl">
        <div className="w-full">
          <input
            type="text"
            value={question.Question}
            onChange={handleChange}
            name="Question"
            placeholder="Enter a question..."
            className=" m-3 p-2 border rounded-lg  "
          />
        </div>
        <div className="flex flex-col">
          <input
            type="text"
            value={question.Option1}
            onChange={handleChange}
            placeholder="Option 1"
            name="Option1"
            className=" m-3 p-2 
        
        border rounded-lg "
          />
          <input
            type="text"
            placeholder="Option 2"
            name="Option2"
            value={question.Option2}
            onChange={handleChange}
            className=" m-3 p-2 border rounded-lg "
          />
          <input
            type="text"
            placeholder="Option 3"
            name="Option3"
            value={question.Option3}
            onChange={handleChange}
            className=" m-3 p-2 border rounded-lg "
          />
          <input
            type="text"
            placeholder="Option 4"
            name="Option4"
            value={question.Option4}
            onChange={handleChange}
            className=" m-3 p-2 border rounded-lg "
          />
        </div>
      </div>

      {/* section 2 */}
      <p className="mt-10 font-black text-xl">Correct Option</p>
      <div className="flex border rounded-lg p-5  max-[415px]:justify-between bg-white shadow-md mb-10">
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
        <select
          className=" border-2 rounded-xl"
          // value={(e) => (e.target.value)}
          value={question.category}
          name="category"
          onChange={
            handleChange
          }
          id="Category">
          <option value="NA">N/A ?</option>
          <option value="Scince">Science</option>
          <option value="History">History</option>
          <option value="General">General</option>
          <option value="Current">Current</option>
          <option value="Geography">Geography</option>
          <option value="Polity">Polity</option>
          <option value="Economics">Economics</option>
          <option value="Staitc">Staitc</option>
        </select>
      </div>
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
