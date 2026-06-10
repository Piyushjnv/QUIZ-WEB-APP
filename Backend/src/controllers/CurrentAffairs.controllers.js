
import addQuestion from "../models/Current_affairs.models.js";

const addQuestions = async (req, res) => {
   try {
     const {
         Username,
         Question,
         Option1,
         Option2,
         Option3,
         Option4,
         correctoption,
         category,
      
     } = req.body;
     
    //  console.log( Username,
    //      Question,
    //      );

       if([ Username, Question , Option1,Option2,
         Option3,
         Option4,
         correctoption,
         category
     ].some((data)=> data?.trim() === "")){
      // console.log('empty feilds');
      
        return res.status(408).json({
        success: false,
        message: "* All feilds are mendatory ",
      });
    }
    const existingQuestion = await addQuestion.findOne({ Question: Question });
    if (existingQuestion) {
      // console.log("question already exists");
      return res.status(409).json({
        success: false,
        message: "Question already exists",
      });
    }
    const Questions = await addQuestion.create({
     Username,
      Question,
         Option1,
         Option2,
         Option3,
         Option4,
         correctoption,
         category
     })
 if (Question){
    // console.log("question added", Questions._id);
    
 }
 return res.status(200)
    .json({
        success: true,
        message: "Question added "
    })
 
   } catch (error) {
    console.error(error);
    res.status(500)
    .json({
        success: false,
        message: "question Not added or Internal server error "
    })
   }
};


export default addQuestions