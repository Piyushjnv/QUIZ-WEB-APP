import React, { use } from "react";
import { useEffect, useState } from "react";
import Api from "../API/Api";

function Questionaddinbulk({qtype}) {
  const [questions, setquestion] = useState([]);
  const [message, setmessage] = useState();
  
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const Onsubmit1 = async (question) => {
    try {

      if(qtype === "Gov"){
       Api.post("user/qadd", question)
        .then((response) => {

          const data = response.data;
          if (data.success == true) {
     
            setmessage("Question added successfully!");
            
          }
          console.log(data, "data after question1 add");
        })
        .catch((error) => {
          // console.log("error in question add ", error);
          // console.log(error.response.data.message || "Error adding question.");
          setmessage(error.response.data.message || "Error adding question.");
        });
      } else if(qtype == "ENG"){
 Api.post("/user/engqadd", question).then((response) => {
          // console.log("question at submit function ",question);
          const data = response.data;
          if (data.success == true) {
            // alert("question1 added successfully")/
            setmessage("Question added successfully!");
          }
          console.log(data, "data after question1 add");
        })
        .catch((error) => {
          setmessage(error.response.data.message || "Error adding question.");
        })
      }else if(qtype == "MATH"){
        // maths 
        Api.post("/user/mathqadd", question).then((response) => {
          // console.log("question at submit function ",question);
          const data = response.data;
          if (data.success == true) {
            // alert("question1 added successfully")/
            setmessage("Question added successfully!");
          }
          console.log(data, "data after question1 add");
        })
        .catch((error) => {
          setmessage(error.response.data.message || "Error adding question.");
        })
      } else {
         alert("Please select a question type");
      }
    } catch (error) {
      console.log("coed not run ", error);
      setmessage("Error adding question.");
    }
  };

  const add = (questions) => {
    // console.log("run button ");

    questions.map(async (question1) => {
      const data = {
        Username: question1.Username,
        Question: question1.Question,
        Option1: question1.Option1,
        Option2: question1.Option2,
        Option3: question1.Option3,
        Option4: question1.Option4,
        correctoption: question1.correctoption,
        category: question1.category,
      };

      
      Onsubmit1(data);
    });
  };
const handleAddQuestions = () => {
  // 1. Check if the input is completely empty first
  if (!questions || !questions.trim()) {
    setmessage("Please enter some JSON data.");
    return;
  }

  try {
    // 2. Try to parse it. If it's invalid, it immediately jumps to the catch block
    const parsedData = JSON.parse(questions);
    
    // 3. If successful, add it
    add(parsedData);
    setmessage(""); // Clear any previous error messages
  } catch (error) {
    // 4. Handle the exact syntax error you just saw
    setmessage("Invalid JSON format. Please check your syntax (e.g., missing colons or quotes).");
    console.error("JSON Parse Error:", error.message);
  }
};
  return (
    <div>
      <input
        value={questions}
        onChange={(e) => {
          setquestion(e.target.value);
        }}
        type="code"
        className="border rounded-3xl h-20 w-50 ml-5 mr-5"
      />
      <button
        className=" bg-[#524e4eb0] w-25 h-15 rounded-4xl cursor-pointer "
        onClick={handleAddQuestions}
      >
        Add in bulk{" "}
      </button>
      <button
        className=" bg-[#524e4eb0] w-25 h-15 mt-4 ml-4 rounded-4xl cursor-pointer "
        onClick={() => {
          setquestion("");
          setmessage("");
        }}
      >
        CLEAR{" "}
      </button>
      <p>{message}</p>
    </div>
  );
}

export default Questionaddinbulk;
