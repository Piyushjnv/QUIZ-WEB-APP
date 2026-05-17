import addQuestion from "../models/question.models.js";

const sendQuestions = async (req, res) => {
    try {
        // console.log( "Hello, world!");
        // const questions = await addQuestion.findOne()
        const questions = await addQuestion.aggregate([
  { $sample: { size: 1 } }
]);
        // console.log(questions[0], "i am questions in controller");
         if(questions.length === 0) {
            return res.status(404).json({ success: false, message: "No questions found" });
        }
        if (!questions) { console.log("No questions found"); }
        

        return res.status(200)
            .json({
                success: true,
                data: { 
                    username: questions[0].Username,
                    question: questions[0].Question,
                    option1: questions[0].Option1,
                    option2: questions[0].Option2,
                    option3: questions[0].Option3,
                    option4: questions[0].Option4,
                    correctOption: questions[0].correctoption,
                    category: questions[0].category
                }
            });
    } catch (error) {
        console.log('error', error);
        
        return res.status(500)
            .json({
                success: false,
                message: "Error fetching questions"
            });
    }
}
export default sendQuestions