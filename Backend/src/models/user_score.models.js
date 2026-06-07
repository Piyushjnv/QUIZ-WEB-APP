import mongoose, { Schema } from "mongoose";


const scoreSchema = new mongoose.Schema({
    userId : {
        type: Schema.Types.ObjectId,
        ref: "users",
        required: true
    },
    Score : {
        type: Number,
       
    },
    totalQues : {
        type: Number,
        default: 25

    },
    correctQuestionsId: {
        type: Array
    },
    IncorrectquestionsId : {
        type: Array
    },
    username : {
        type: String
    },
    topic: {
        type: String
    }

},{
    timestamps : true
})

export default mongoose.model("userScore",  scoreSchema)