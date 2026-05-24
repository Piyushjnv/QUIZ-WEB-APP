import user_scoreModels from "../models/user_score.models.js";

const userScore = async function(req,res){
        try {
                const {userId , Score , totalq  , correctQID , IncorrectQID } = req.body 

        // console.log(userId , Score , totalq  , correctQID , IncorrectQID);

        const score = await user_scoreModels.create({
                userId: userId,
                Score: Score,
                totalQues : totalq,
                 correctQuestionsId: correctQID,
                 IncorrectquestionsId : IncorrectQID,
        })
        return res.status(200).json({
                success: true,
                message: " score added",
                socreid: score?._id,
                
        })
        } catch (error) {
                 console.error("Error registering us:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
        }


}

export default userScore