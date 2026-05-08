import addQuestion from "../models/question.models.js";

const sendQuestions = async (req, res) => {
    try {
        console.log( "Hello, world!");
        const questions = await addQuestion.findOne()
        console.log(questions, "Hello, world!");
        

        return res.status(200)
            .json({
                success: true,
                data: { 
                    username: questions.Username,
                    question: questions.Question,
                    option1: questions.Option1,
                    option2: questions.Option2,
                    option3: questions.Option3,
                    option4: questions.Option4,
                    correctOption: questions.correctoption,
                    category: questions.category
                }
            });
    } catch (error) {
        return res.status(500)
            .json({
                success: false,
                message: "Error fetching questions"
            });
    }
}
export default sendQuestions