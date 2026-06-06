import addQuestion from "../models/question.models.js";
import addQuestions from "../models/nettQuestion.models.js";
import mathsadd from "../models/maths.model.js";
import engqadd from "../models/englishQuetion.models.js";

export const sendQuestions = async (req, res) => {
    try {
        // console.log( "Hello, world!");
        // const questions = await addQuestion.findOne()
        const questions = await addQuestion.aggregate([
  { $sample: { size: 50 } }
]);
        // console.log(questions.length, "i am questions in controller");
         if(questions.length === 0) {
            return res.status(404).json({ success: false, message: "No questions found" });
        }
        if (!questions) { console.log("No questions found"); }
        

        return res.status(200)
            .json({
                success: true,
                 data:  questions
                // data: { 
                //     username: questions[0].Username,
                //     question: questions[0].Question,
                //     option1: questions[0].Option1,
                //     option2: questions[0].Option2,
                //     option3: questions[0].Option3,
                //     option4: questions[0].Option4,
                //     correctOption: questions[0].correctoption,
                //     category: questions[0].category
                // }
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
export const English = async (req, res) =>{
    try {

        // const questions = await addQuestion.findOne()
        const questions = await engqadd.aggregate([
//             { 
//     $match: { category : "english" } 
//   },
  { $sample: { size: 25 } }
]);
        // console.log(questions, "i am questions in controller");
         if(questions.length === 0) {
            return res.status(404).json({ success: false, message: "No questions found" });
        }
        if (!questions) { console.log("No questions found"); }
        

        return res.status(200)
            .json({
                success: true,
                data:  questions 
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
export const Maths = async( req,res) => {
    try{
        const questions = await mathsadd.aggregate([
  { $sample: { size: 25 } }
]);
if(questions.length === 0) {
            return res.status(404).json({ success: false, message: "No questions found" });
        }
        if (!questions) { console.log("No questions found"); }
        return res.status(200)
            .json({
                success: true,
                data:  questions 
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
export const Computer = async (req, res) => {
    try {
        // console.log( "Hello, world!");
        // const questions = await addQuestion.findOne()
        const questions = await addQuestion.aggregate([
            { 
    $match: { category : "computer" } 
  },
  { $sample: { size: 25 } }
]);
        // console.log(questions, "i am questions in controller");
         if(questions.length === 0) {
            return res.status(404).json({ success: false, message: "No questions found" });
        }
        if (!questions) { console.log("No questions found"); }
        

        return res.status(200)
            .json({
                success: true,
                data:  questions 
                // data: { 
                //     username: questions[0].Username,
                //     question: questions[0].Question,
                //     option1: questions[0].Option1,
                //     option2: questions[0].Option2,
                //     option3: questions[0].Option3,
                //     option4: questions[0].Option4,
                //     correctOption: questions[0].correctoption,
                //     category: questions[0].category
                // }
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
export const History = async (req, res) => {
    try {
        // console.log( "Hello, world!");
        // const questions = await addQuestion.findOne()
        const questions = await addQuestion.aggregate([
            { 
    $match: { category : "history" } 
  },
  { $sample: { size: 25 } }
]);
        // console.log(questions, "i am questions in controller");
         if(questions.length === 0) {
            return res.status(404).json({ success: false, message: "No questions found" });
        }
        if (!questions) { console.log("No questions found"); }
        

        return res.status(200)
            .json({
                success: true,
                data:  questions 
                // data: { 
                //     username: questions[0].Username,
                //     question: questions[0].Question,
                //     option1: questions[0].Option1,
                //     option2: questions[0].Option2,
                //     option3: questions[0].Option3,
                //     option4: questions[0].Option4,
                //     correctOption: questions[0].correctoption,
                //     category: questions[0].category
                // }
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
export const Geography = async (req, res) =>{
    try {
        // console.log( "Hello, world!");
        // const questions = await addQuestion.findOne()
        const questions = await addQuestion.aggregate([
            { 
    $match: { category : "Geography" } 
  },
  { $sample: { size: 25 } }
]);
        // console.log(questions, "i am questions in controller");
         if(questions.length === 0) {
            return res.status(404).json({ success: false, message: "No questions found" });
        }
        if (!questions) { console.log("No questions found"); }
        

        return res.status(200)
            .json({
                success: true,
                data:  questions 
                // data: { 
                //     username: questions[0].Username,
                //     question: questions[0].Question,
                //     option1: questions[0].Option1,
                //     option2: questions[0].Option2,
                //     option3: questions[0].Option3,
                //     option4: questions[0].Option4,
                //     correctOption: questions[0].correctoption,
                //     category: questions[0].category
                // }
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
export const Polity = async (req, res) => {
    try {
        // console.log( "Hello, world!");
        // const questions = await addQuestion.findOne()
        const questions = await addQuestion.aggregate([
            { 
    $match: { category : "Polity" } 
  },
  { $sample: { size: 25 } }
]);
        // console.log(questions, "i am questions in controller");
         if(questions.length === 0) {
            return res.status(404).json({ success: false, message: "No questions found" });
        }
        if (!questions) { console.log("No questions found"); }
        

        return res.status(200)
            .json({
                success: true,
                data:  questions 
                // data: { 
                //     username: questions[0].Username,
                //     question: questions[0].Question,
                //     option1: questions[0].Option1,
                //     option2: questions[0].Option2,
                //     option3: questions[0].Option3,
                //     option4: questions[0].Option4,
                //     correctOption: questions[0].correctoption,
                //     category: questions[0].category
                // }
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
export const Static = async (req, res) => {
    try {
        // console.log( "Hello, world!");
        // const questions = await addQuestion.findOne()
        const questions = await addQuestion.aggregate([
            { 
    $match: { category : "static" } 
  },
  { $sample: { size: 25 } }
]);
        // console.log(questions, "i am questions in controller");
         if(questions.length === 0) {
            return res.status(404).json({ success: false, message: "No questions found" });
        }
        if (!questions) { console.log("No questions found"); }
        

        return res.status(200)
            .json({
                success: true,
                data:  questions 
                // data: { 
                //     username: questions[0].Username,
                //     question: questions[0].Question,
                //     option1: questions[0].Option1,
                //     option2: questions[0].Option2,
                //     option3: questions[0].Option3,
                //     option4: questions[0].Option4,
                //     correctOption: questions[0].correctoption,
                //     category: questions[0].category
                // }
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
export const economics = async (req, res) => {
    try {
        // console.log( "Hello, world!");
        // const questions = await addQuestion.findOne()
        const questions = await addQuestion.aggregate([
            { 
    $match: { category : "economics" } 
  },
  { $sample: { size: 25 } }
]);
        // console.log(questions, "i am questions in controller");
         if(questions.length === 0) {
            return res.status(404).json({ success: false, message: "No questions found" });
        }
        if (!questions) { console.log("No questions found"); }
        

        return res.status(200)
            .json({
                success: true,
                data:  questions 
                // data: { 
                //     username: questions[0].Username,
                //     question: questions[0].Question,
                //     option1: questions[0].Option1,
                //     option2: questions[0].Option2,
                //     option3: questions[0].Option3,
                //     option4: questions[0].Option4,
                //     correctOption: questions[0].correctoption,
                //     category: questions[0].category
                // }
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
export const science = async (req, res) => {
    try {
        // console.log( "Hello, world!");
        // const questions = await addQuestion.findOne()
        const questions = await addQuestion.aggregate([
            { 
    $match: { category : "science" } 
  },
  { $sample: { size: 25 } }
]);
        // console.log(questions, "i am questions in controller");
         if(questions.length === 0) {
            return res.status(404).json({ success: false, message: "No questions found" });
        }
        if (!questions) { console.log("No questions found"); }
        

        return res.status(200)
            .json({
                success: true,
                data:  questions 
                // data: { 
                //     username: questions[0].Username,
                //     question: questions[0].Question,
                //     option1: questions[0].Option1,
                //     option2: questions[0].Option2,
                //     option3: questions[0].Option3,
                //     option4: questions[0].Option4,
                //     correctOption: questions[0].correctoption,
                //     category: questions[0].category
                // }
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
export const general = async (req, res) => {
    try {
        // console.log( "Hello, world!");
        // const questions = await addQuestion.findOne()
        const questions = await addQuestion.aggregate([
            { 
    $match: { category : "general" } 
  },
  { $sample: { size: 25 } }
]);
        // console.log(questions, "i am questions in controller");
         if(questions.length === 0) {
            return res.status(404).json({ success: false, message: "No questions found" });
        }
        if (!questions) { console.log("No questions found"); }
        

        return res.status(200)
            .json({
                success: true,
                data:  questions 
                // data: { 
                //     username: questions[0].Username,
                //     question: questions[0].Question,
                //     option1: questions[0].Option1,
                //     option2: questions[0].Option2,
                //     option3: questions[0].Option3,
                //     option4: questions[0].Option4,
                //     correctOption: questions[0].correctoption,
                //     category: questions[0].category
                // }
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
//  neet 
export const biology = async (req, res) => {
    try {
        // console.log( "Hello, world!");
        // const questions = await addQuestion.findOne()
        const questions = await addQuestions.aggregate([
            { 
    $match: { category : "biology" } 
  },
  { $sample: { size: 25 } }
]);
        // console.log(questions, "i am questions in controller");
         if(questions.length === 0) {
            return res.status(404).json({ success: false, message: "No questions found" });
        }
        if (!questions) { console.log("No questions found"); }
        

        return res.status(200)
            .json({
                success: true,
                data:  questions 
                // data: { 
                //     username: questions[0].Username,
                //     question: questions[0].Question,
                //     option1: questions[0].Option1,
                //     option2: questions[0].Option2,
                //     option3: questions[0].Option3,
                //     option4: questions[0].Option4,
                //     correctOption: questions[0].correctoption,
                //     category: questions[0].category
                // }
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
export const chemistry = async (req, res) => {
    try {
        // console.log( "Hello, world!");
        // const questions = await addQuestion.findOne()
        const questions = await addQuestions.aggregate([
            { 
    $match: { category : "chemistry" } 
  },
  { $sample: { size: 25 } }
]);
        // console.log(questions, "i am questions in controller");
         if(questions.length === 0) {
            return res.status(404).json({ success: false, message: "No questions found" });
        }
        if (!questions) { console.log("No questions found"); }
        

        return res.status(200)
            .json({
                success: true,
                data:  questions 
                // data: { 
                //     username: questions[0].Username,
                //     question: questions[0].Question,
                //     option1: questions[0].Option1,
                //     option2: questions[0].Option2,
                //     option3: questions[0].Option3,
                //     option4: questions[0].Option4,
                //     correctOption: questions[0].correctoption,
                //     category: questions[0].category
                // }
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
export const physics = async (req, res) => {
    try {
        // console.log( "Hello, world!");
        // const questions = await addQuestion.findOne()
        const questions = await addQuestions.aggregate([
            { 
    $match: { category : "physics" } 
  },
  { $sample: { size: 25 } }
]);
        // console.log(questions, "i am questions in controller");
         if(questions.length === 0) {
            return res.status(404).json({ success: false, message: "No questions found" });
        }
        if (!questions) { console.log("No questions found"); }
        

        return res.status(200)
            .json({
                success: true,
                data:  questions 
                // data: { 
                //     username: questions[0].Username,
                //     question: questions[0].Question,
                //     option1: questions[0].Option1,
                //     option2: questions[0].Option2,
                //     option3: questions[0].Option3,
                //     option4: questions[0].Option4,
                //     correctOption: questions[0].correctoption,
                //     category: questions[0].category
                // }
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
export const neet = async (req, res) => {
    try {
        // console.log( "Hello, world!");
        // const questions = await addQuestion.findOne()
        const questions = await addQuestions.aggregate([
  { $sample: { size: 25 } }
]);
        // console.log(questions, "i am questions in controller");
         if(questions.length === 0) {
            return res.status(404).json({ success: false, message: "No questions found" });
        }
        if (!questions) { console.log("No questions found"); }
        

        return res.status(200)
            .json({
                success: true,
                data:  questions 
                // data: { 
                //     username: questions[0].Username,
                //     question: questions[0].Question,
                //     option1: questions[0].Option1,
                //     option2: questions[0].Option2,
                //     option3: questions[0].Option3,
                //     option4: questions[0].Option4,
                //     correctOption: questions[0].correctoption,
                //     category: questions[0].category
                // }
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