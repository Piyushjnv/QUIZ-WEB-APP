import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Q_attempt from "../../Features/Q_attempt";
import Api from "../../API/Api";
import Loader from "../../Features/Quizes/Loader";

function TestAgain() {
    const navigate = useNavigate(); 
    const location = useLocation();
    const [questions, setQuestions] = useState([]);
    const [changeQuestion, setChangeQuestion] = useState([]);
    const [correctq, setCorrectq] = useState([]);
    const [Test, setTest] = useState([]);
    const [inCorrectq, setInCorrectq] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const topic = location.state?.topic || "default topic";

    const ID = location.state?.ID;

     const HandelattemptQuestion = ({correctq = "", incorrectq= ""}) => {
          if( !(correctq === "")){
            setCorrectq((prev) => [...prev, correctq]);
          }
          if( !(incorrectq === "")){
            setInCorrectq((prev) => [...prev , incorrectq])
          }
        }


useEffect(() => {
            // setTest(res.data.data);
            // console.log("wrong questions", (res.data.data).IncorrectquestionsId);
           
                
                Api.post("/visit/getHistory", {
                    ID : ID,
                   qtypes: location.state?.wrongattempt ,
                   topic: location.state?.topic,
                }).then((res) => {
                    // console.log("data", (res.data.data));
                        setQuestions((res.data.data))
               
                })
            // console.log("history at history component ", res.data.data);
    }, []);
    const handleChangeQuestion = (incomingData, score = 0, time = 0) => {
        // const topics = window.location.pathname.split("/").slice(-1)[0];
        setChangeQuestion(incomingData);
        if (currentIndex < questions.length - 1) {
            setCurrentIndex((prevIndex) => prevIndex + 1);
        } else {
            alert(`Quiz Finished! \n score : ${score} time Taken : ${time}`);
            navigate("/history");
            // You can redirect them or show a score screen here
        }
    };
    const currentQuestion = questions[currentIndex];
    // console.log(currentQuestion);
     if (!questions || questions.length === 0) {
        return (
            <div>
                <Loader />
            </div>
        );
    }
    return (
        <div>
            {<Q_attempt
                questions={currentQuestion}
                changeQuestion={handleChangeQuestion}
                HandelattemptQuestion={HandelattemptQuestion}
            />}
        </div>
    );
}

export default TestAgain;
