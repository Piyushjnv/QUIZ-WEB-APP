import React,{useState , useEffect} from 'react'
import Q_attempt from '../../Features/Q_attempt'
import API from "../../API/Api";
import Loader from '../../Features/Quizes/Loader';
import { useNavigate } from "react-router-dom"

function Static() {
  const navigate = useNavigate()
const [questions, setQuestions] = useState([])
const [changeQuestion, setChangeQuestion] = useState([])

const [currentIndex, setCurrentIndex] = useState(0);
 const handleChangeQuestion = (incomingData, score = 0,time = 0) => {
    setChangeQuestion(incomingData);
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prevIndex => prevIndex + 1);
    } else {
      alert(`Quiz Finished! \n score : ${score} time Taken : ${time}`);
       navigate('/user')
      // You can redirect them or show a score screen here
    }
  };
  
useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await API.get("user/qsend/static");
        setQuestions(response.data.data);
        // setNextClicked(false);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };
    fetchQuestions();
    // console.log(questions, "i am questions in useeffect");
  }, []);
// console.log(questions, typeof questions , "i am questions in useeffect");
if (!questions || questions.length === 0) {
    return <div><Loader /></div>;
  }
  const currentQuestion = questions[currentIndex];
  return (
    <div>
       
            
            
              <Q_attempt questions={currentQuestion} changeQuestion={handleChangeQuestion} />
            
         
        {/* <Q_attempt questions={questions} changeQuestion={handleChangeQuestion} /> */}
    </div>
  )
}

export default Static