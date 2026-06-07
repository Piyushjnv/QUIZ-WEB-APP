import questionModels from "../models/question.models.js"
import Maths from "../models/maths.model.js"
import english from "../models/englishQuetion.models.js"
import user_scoreModels from "../models/user_score.models.js";


async function getHistory(req, res) { 
        try {
            const { ID, qtypes , topic } = req.body;
            // console.log(,ID , qtypes, topic);
            const text = await user_scoreModels.findById(ID)
            // console.log(text)
            if(qtypes){

                if(topic === "MATHS"){
                    // console.log(" ia m maths ");
                    
                    const questionIds = text.IncorrectquestionsId;
                    // console.log(questionIds);
                    
                    const mathquestions = await Maths.find({ _id: { $in: questionIds } });
                    // console.log(mathquestions)
                    return res.status(200).json({ data:  mathquestions  });
                }else if(topic === "ENGLISH"){
                    // console.log("i am english");
                    
                    const questionIds = text.IncorrectquestionsId;
                    const englishquestions = await english.find({ _id: { $in: questionIds } });
                    return res.status(200).json({ data:  englishquestions  });
                }else{
                        const questionIds = text.IncorrectquestionsId;
                        const questions = await questionModels.find({ _id: { $in: questionIds } });
                        // console.log(questions);
                        
                        return res.status(200).json({ data:  questions  });
                }
                    
            }else{
                 if(topic === "MATHS"){
                    const questionIds = text.IncorrectquestionsId.concat(text.correctQuestionsId);
                    const mathquestions = await Maths.find({ _id: { $in: questionIds } });
                    return res.status(200).json({ data:  mathquestions  });
                }else if(topic === "ENGLISH"){
                    const questionIds = text.IncorrectquestionsId.concat(text.correctQuestionsId);
                    const englishquestions = await english.find({ _id: { $in: questionIds } });
                    return res.status(200).json({ data:  englishquestions  });
                }else{
                        const questionIds = text.IncorrectquestionsId.concat(text.correctQuestionsId)
                        const questions = await questionModels.find({ _id: { $in: questionIds } });
                        return res.status(200).json({ data:  questions  });
                }
                    
            }

        } catch (error) {
            
        }
}

export default getHistory