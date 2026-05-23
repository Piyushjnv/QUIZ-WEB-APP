import React, { use } from "react";
import { useEffect, useState } from "react";
import Api from "../API/Api";

function Questionaddinbulk({qtype}) {
  const [questions, setquestion] = useState([]);
  const [message, setmessage] = useState();
  // const questions = [
  // {
  // "Username": "69ea5ce6b7e89e3b595a60dc",
  // "Question": "Who was the founder of the Pala Dynasty in Bengal?",
  // "Option1": "Gopala",
  // "Option2": "Dharmapala",
  // "Option3": "Devapala",
  // "Option4": "Mahipala",
  // "correctoption": "1",
  // "category": "history"
  // },
  // {
  // "Username": "69ea5ce6b7e89e3b595a60dc",
  // "Question": "Which of the following rulers were Brahmins who gave up their traditional professions and established a kingdom in Rajasthan?",
  // "Option1": "Dantidurga",
  // "Option2": "Harichandra",
  // "Option3": "Nagabhata I",
  // "Option4": "Dharmapala",
  // "correctoption": "2",
  // "category": "history"
  // },
  // {
  // "Username": "69ea5ce6b7e89e3b595a60dc",
  // "Question": "Which Pratihara ruler is regarded as the real founder of their empire?",
  // "Option1": "Nagabhata I",
  // "Option2": "Devapala",
  // "Option3": "Mihir Bhoj",
  // "Option4": "Gopala III",
  // "correctoption": "3",
  // "category": "history"
  // },
  // {
  // "Username": "69ea5ce6b7e89e3b595a60dc",
  // "Question": "What actions did Vijayalaya Chola take after capturing the Kaveri delta?",
  // "Option1": "He established the town of Thanjavur",
  // "Option2": "He built a temple for goddess Nishumbhasudini",
  // "Option3": "Both 1 and 2",
  // "Option4": "None of the above",
  // "correctoption": "3",
  // "category": "history"
  // },
  // {
  // "Username": "69ea5ce6b7e89e3b595a60dc",
  // "Question": "What was a major challenge for agriculture in the Chola kingdom apart from the rocky land?",
  // "Option1": "Lack of seeds",
  // "Option2": "Lack of labor",
  // "Option3": "Lack of irrigation water",
  // "Option4": "Poor pest management",
  // "correctoption": "3",
  // "category": "history"
  // },
  // {
  // "Username": "69ea5ce6b7e89e3b595a60dc",
  // "Question": "Who among the following is considered the most powerful Chola ruler?",
  // "Option1": "Dantidurga",
  // "Option2": "Harshavardhana",
  // "Option3": "Veerarajendra Chola",
  // "Option4": "Rajaraja I",
  // "correctoption": "4",
  // "category": "history"
  // },
  // {
  // "Username": "69ea5ce6b7e89e3b595a60dc",
  // "Question": "Who among the following Chola emperors constructed the grand temple at Gangaikonda Cholapuram?",
  // "Option1": "Rajaraja I",
  // "Option2": "Rajendra Chola I",
  // "Option3": "Rajadhiraja Chola",
  // "Option4": "Kulothunga Chola I",
  // "correctoption": "2",
  // "category": "history"
  // },
  // {
  // "Username": "69ea5ce6b7e89e3b595a60dc",
  // "Question": "Consider the following statements regarding the post-Chalukya period: 1) The Kakatiyas ruling from Manyakheta were the primary successors to the Later Chalukyas in the Western Deccan. 2) The Hoysalas based in Devagiri were the sole dynasty responsible for the complete overthrow of the Later Chalukyas across all regions. Which statement(s) is/are correct?",
  // "Option1": "Only 1",
  // "Option2": "Only 2",
  // "Option3": "Both 1 and 2",
  // "Option4": "Neither 1 nor 2",
  // "correctoption": "4",
  // "category": "history"
  // },
  // {
  // "Username": "69ea5ce6b7e89e3b595a60dc",
  // "Question": "What does the term 'Ur' refer to in the context of early South Indian villages?",
  // "Option1": "A type of tax",
  // "Option2": "A temple priest",
  // "Option3": "A village assembly of common people",
  // "Option4": "A military commander",
  // "correctoption": "3",
  // "category": "history"
  // },
  // {
  // "Username": "69ea5ce6b7e89e3b595a60dc",
  // "Question": "What was the term used for land revenue in the Chola Kingdom?",
  // "Option1": "Vetti",
  // "Option2": "Kadamai",
  // "Option3": "Vishti",
  // "Option4": "Toll Tax",
  // "correctoption": "2",
  // "category": "history"
  // },
  // {
  // "Username": "69ea5ce6b7e89e3b595a60dc",
  // "Question": "The Chola dynasty is known for its naval expeditions to which region?",
  // "Option1": "Arabian Peninsula",
  // "Option2": "South East Asia",
  // "Option3": "Central Asia",
  // "Option4": "East Africa",
  // "correctoption": "2",
  // "category": "history"
  // },
  // {
  // "Username": "69ea5ce6b7e89e3b595a60dc",
  // "Question": "The Chola inscriptions at Uttramerur are primarily concerned with:",
  // "Option1": "Maritime trade",
  // "Option2": "Military conquest",
  // "Option3": "Temple rituals",
  // "Option4": "Village administration",
  // "correctoption": "4",
  // "category": "history"
  // },
  // {
  // "Username": "69ea5ce6b7e89e3b595a60dc",
  // "Question": "The Virupaksha Temple at Hampi is dedicated to which deity?",
  // "Option1": "Lord Shiva",
  // "Option2": "Lord Vishnu",
  // "Option3": "Lord Brahma",
  // "Option4": "Goddess Durga",
  // "correctoption": "1",
  // "category": "history"
  // },
  // {
  // "Username": "69ea5ce6b7e89e3b595a60dc",
  // "Question": "The term 'Vesara' refers to an architectural style that developed in which Indian region, combining elements of North and South Indian temple designs?",
  // "Option1": "North India",
  // "Option2": "Deccan",
  // "Option3": "East India",
  // "Option4": "West India",
  // "correctoption": "2",
  // "category": "history"
  // },
  // {
  // "Username": "69ea5ce6b7e89e3b595a60dc",
  // "Question": "Consider the following statements about temple architecture: 1) Dravida temples are enclosed within a compound wall, a feature typically absent in Nagara temples. 2) The shape of the central temple tower in Dravida style (Vimana) is similar to the curving Shikhara of the Nagara style. Which statement(s) is/are correct?",
  // "Option1": "Statement 1 is correct, but 2 is incorrect",
  // "Option2": "Statement 2 is correct, but 1 is incorrect",
  // "Option3": "Both statements are correct",
  // "Option4": "Both statements are incorrect",
  // "correctoption": "1",
  // "category": "history"
  // },
  // {
  // "Username": "69ea5ce6b7e89e3b595a60dc",
  // "Question": "The temples of Khajuraho in Madhya Pradesh, noted for ornate shikharas and erotic sculptures, are associated with which architectural style?",
  // "Option1": "Dravida Style",
  // "Option2": "Vesara Style",
  // "Option3": "Nagara Style",
  // "Option4": "Kalinga Style",
  // "correctoption": "3",
  // "category": "history"
  // },
  // {
  // "Username": "69ea5ce6b7e89e3b595a60dc",
  // "Question": "Consider the following statements: 1) After Harsha's death, the Rajputs rose to prominence in Northern Indian politics. 2) The Rajputs maintained a strong unity which helped them resist foreign invasions effectively. Which statement(s) is/are correct?",
  // "Option1": "Only 1",
  // "Option2": "Only 2",
  // "Option3": "Both 1 and 2",
  // "Option4": "Neither 1 nor 2",
  // "correctoption": "1",
  // "category": "history"
  // },
  // {
  // "Username": "69ea5ce6b7e89e3b595a60dc",
  // "Question": "Consider the following statements regarding Ajanta caves: Assertion (A): Ajanta is the only surviving site that contains paintings from both the 1st century BC and the 5th century AD. Reason (R): Ajanta has Chaitya caves from the early phase and only Vihara caves from the later phase.",
  // "Option1": "Both A and R are true and R is the correct explanation of A",
  // "Option2": "Both A and R are true but R is not the correct explanation of A",
  // "Option3": "A is true but R is false",
  // "Option4": "A is false but R is true",
  // "correctoption": "3",
  // "category": "history"
  // },
  // {
  // "Username": "69ea5ce6b7e89e3b595a60dc",
  // "Question": "Which among the following works was authored by Varahamihira?",
  // "Option1": "Mricchakatika",
  // "Option2": "Sushruta Samhita",
  // "Option3": "Brihat Samhita",
  // "Option4": "Dashakumaracharita",
  // "correctoption": "3",
  // "category": "history"
  // },
  // {
  // "Username": "69ea5ce6b7e89e3b595a60dc",
  // "Question": "Which among the following statements is NOT true about Kanishka?",
  // "Option1": "He patronized Vasumitra, Ashvaghosa, and Nagarjuna",
  // "Option2": "He introduced the purest form of gold coins",
  // "Option3": "He patronized the Fourth Buddhist Council",
  // "Option4": "Vasudeva was his son",
  // "correctoption": "4",
  // "category": "history"
  // },
  // {
  // "Username": "69ea5ce6b7e89e3b595a60dc",
  // "Question": "Who was the last ruler of the Shunga Dynasty?",
  // "Option1": "Vasudeva",
  // "Option2": "Pushyamitra Shunga",
  // "Option3": "Devabhuti",
  // "Option4": "Agnimitra",
  // "correctoption": "3",
  // "category": "history"
  // },
  // {
  // "Username": "69ea5ce6b7e89e3b595a60dc",
  // "Question": "Identify the correct pairs from the given options: 1) Kalibangan - Fire altars & Ploughed field, 2) Megasthenes - Arthashastra, 3) Chalcolithic culture - Use of both copper and stone.",
  // "Option1": "1 and 2 only",
  // "Option2": "2 and 3 only",
  // "Option3": "1 and 3 only",
  // "Option4": "1, 2 and 3",
  // "correctoption": "3",
  // "category": "history"
  // },
  // {
  // "Username": "69ea5ce6b7e89e3b595a60dc",
  // "Question": "Mahavira Jain was born in a royal family near which ancient city?",
  // "Option1": "Taxila",
  // "Option2": "Vaishali",
  // "Option3": "Ujjain",
  // "Option4": "Pataliputra",
  // "correctoption": "2",
  // "category": "history"
  // },
  // {
  // "Username": "69ea5ce6b7e89e3b595a60dc",
  // "Question": "Which Indian ruler is famously known as the 'Napoleon of India'?",
  // "Option1": "Ashoka",
  // "Option2": "Samudragupta",
  // "Option3": "Harshavardhana",
  // "Option4": "Chandragupta Maurya",
  // "correctoption": "2",
  // "category": "history"
  // },
  // {
  // "Username": "69ea5ce6b7e89e3b595a60dc",
  // "Question": "Consider the following statements: 1) The oldest surviving structural temples from the Gupta period were primarily built using sandstone. 2) The earliest known examples of the Rath style of temples are found in Madhya Pradesh. Which statement(s) is/are correct?",
  // "Option1": "Only 1",
  // "Option2": "Only 2",
  // "Option3": "Both 1 and 2",
  // "Option4": "Neither 1 nor 2",
  // "correctoption": "1",
  // "category": "history"
  // }
  // ]
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
      } else if(qtype == "neet"){
 Api.post("/user/qaddneet", question).then((response) => {
          // console.log("question at submit function ",question);
          const data = response.data;
          if (data.success == true) {
            // alert("question1 added successfully")/
            setmessage("Question added successfully!");
            // console.log("question added successfully");
            // setTimeout(() => {
            //    console.log("question added successfully");
            //   //  setmessage("");
            // }, 2000);
          }
          console.log(data, "data after question1 add");
        })
        .catch((error) => {
          // console.log("error in question add ", error);
          // console.log(error.response.data.message || "Error adding question.");
          setmessage(error.response.data.message || "Error adding question.");
        })
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
        className=" bg-[#524e4eb0] w-25 h-15 rounded-4xl cursor-pointer "
        onClick={() => {
          setquestion("");
          setmessage("");
        }}
      >
        clear{" "}
      </button>
      <p>{message}</p>
    </div>
  );
}

export default Questionaddinbulk;
