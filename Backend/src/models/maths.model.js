import mongoose, { Schema } from "mongoose";


const MATH_TOPICS = [
  "Algebra",
  "Arithmetic",
  "Geometry",
  "Trigonometry",
  "Statistics",
  "Probability",
  "Number System",
  "Mensuration",
  "Simple Interest",
  "Compound Interest",
  "Profit & Loss",
  "Time & Work",
  "Time Speed Distance",
  "Ratio & Proportion",
  "Percentage",
  "Average",
  "Interest",
  "Partnership",
];
// const DIFFICULTY_LEVELS = ["Easy", "Medium", "Hard"];
const MathQuestionSchema = mongoose.Schema({
    Username:{
        type: Schema.Types.ObjectId,
        ref: "users",
    },
    Question: {
        type: String,
        required: true,
        trim: true
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
        default:"MATHS",
        required: true,
        enum: MATH_TOPICS
    }
},{ timestamps: true })


export default mongoose.model("Mathsquestion", MathQuestionSchema)