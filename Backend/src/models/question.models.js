import mongoose, { Schema } from "mongoose";


const QuestionSchema = mongoose.Schema({
    Username:{
        type: Schema.Types.ObjectId,
        ref: "users",
        required:true
    },
    Question: {
        type: String,
        required: true
    },
    Option1:{
        type: String,
        required:true
    },
     Option2:{
        type: String,
        required:true
    },
      Option3:{
        type: String,
        required:true
    },
      Option4:{
        type: String,
        required:true
    },
    correctoption:{
        type: String,
        required:true
    },
    category:{
        type: String,
        index: true,
        required:true,
        default:"General"
    }
},{ timestamps: true })


export default mongoose.model("AddQuestion", QuestionSchema)