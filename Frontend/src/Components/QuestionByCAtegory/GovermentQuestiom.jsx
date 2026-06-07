import React, { useState, useEffect } from "react";
import Q_attempt from "../../Features/Q_attempt";
import API from "../../API/Api";
import { useNavigate } from "react-router-dom";
import Loader from "../../Features/Quizes/Loader";
import Score from "../../Features/Quizes/Score";

function GovExam() {
    const navigate = useNavigate();
    const [questions, setQuestions] = useState([]);
    const [changeQuestion, setChangeQuestion] = useState([]);
    const [correctq, setCorrectq] = useState([]);
    const [inCorrectq, setInCorrectq] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const handleChangeQuestion = (incomingData, score = 0, time = 0) => {
        const topics = window.location.pathname.split("/").slice(-1)[0];
        setChangeQuestion(incomingData);
        if (currentIndex < questions.length - 1) {
            setCurrentIndex((prevIndex) => prevIndex + 1);
        } else {
            Score({
                score: score,
                totalquestion: questions.length,
                correctId: correctq,
                IncorrectID: inCorrectq,
                topic: topics
            });
            alert(`Quiz Finished! \n score : ${score} time Taken : ${time}`);
            navigate("/user");
            // You can redirect them or show a score screen here
        }
    };
    // console.log(window.location.pathname);
     const HandelattemptQuestion = ({correctq = "", incorrectq= ""}) => {
      if( !(correctq === "")){
        setCorrectq((prev) => [...prev, correctq]);


      }
      if( !(incorrectq === "")){
        setInCorrectq((prev) => [...prev , incorrectq])

      }
    }
    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const response = await API.get(`${window.location.pathname}`);
                setQuestions(response.data.data);
                // setNextClicked(false);
            } catch (error) {
                console.error("Error fetching questions:", error);
            }
        };
        fetchQuestions();
        // console.log(questions, "i am questions in useeffect");
    }, []);
    if (!questions || questions.length === 0) {
        return (
            <div>
                <Loader />
            </div>
        );
    }
    const currentQuestion = questions[currentIndex];
    return (
        <div>
            <Q_attempt
                questions={currentQuestion}
                changeQuestion={handleChangeQuestion}
                HandelattemptQuestion={HandelattemptQuestion}
            />

        </div>
    );
}

export default GovExam;
