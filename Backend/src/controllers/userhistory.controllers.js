import mathsModel from "../models/maths.model.js";
import addQuestion from "../models/question.models.js";
import englishQuestion from "../models/englishQuetion.models.js";
import userScore from "../models/user_score.models.js";
import currentAffairs from "../models/Current_affairs.models.js"
import User from "../models/User.model.js";

const history  = async (req, res) => { 
    try {
        const {id} = req.body;
        // console.log("id at add question controller ", id);
        // console.log("id at add question controller ", req.cookies);

        if(!id){
            return res.status(400).json({ success: false, message: "id is required" });
        }
        const user = await User.findById(id);
        if (!user) {
            console.log("user not found at add question controller ", id);
            return res.status(404).json({ success: false, message: "User not found" });
        }
        const docs = await userScore.find({ userId: id });
        // console.log("docs at add question controller ", docs);
        res.status(200).json({
            success: true,
            data: docs
        });

    } catch (error) {
        console.log("error in add question controller ", error);
        res.status(500).json({ success: false, message: "server error" });
    }
 }

 export default history;
