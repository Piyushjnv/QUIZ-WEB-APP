import mongoose, { Schema } from "mongoose";


const scoreSchema = new mongoose.Schema({
    userId : {
        type: Schema.Types.ObjectId,
        ref: "users",
        required: true
    },

    // QuizId : {
    //     type: Schema.Types.ObjectId,
    //     ref: "questions",
    //     required: true
    // },
    Score : {
        type: Number,
        required : true
    },
    totalQues : {
        type: Number,
        required : true
    },
    //  IsCorrectQues : {
    //     type: Number,
    //     required : true
    // },
    SubmittedAt :{
        type: Date,
        default : Date.now
    }

})

export default mongoose.model("userScore",  scoreSchema)