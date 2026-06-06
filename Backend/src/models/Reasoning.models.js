import mongoose, { Schema } from "mongoose";

const REASONING_TOPICS = [
  // Verbal Reasoning
  "Analogy",
  "Classification",
  "Series Completion",
  "Coding Decoding",
  "Blood Relations",
  "Direction Sense",
  "Logical Venn Diagrams",
  "Syllogism",
  "Statement & Conclusions",
  "Statement & Assumptions",
  "Statement & Arguments",
  "Cause & Effect",
  "Sitting Arrangement",
  "Ranking & Order",
  "Alphabet Test",
  "Number Puzzle",
  "Missing Number",

  // Non-Verbal Reasoning
  "Pattern Completion",
  "Mirror Image",
  "Paper Folding",
  "Embedded Figures",
  "Figure Matrix",
];

const QUESTION_TYPES = [
  "MCQ",           // normal 4 option
  "Statement",     // statement based (true/false conclusions)
  "Series",        // find next in series
  "Passage",       // paragraph given, question follows
];

const DIFFICULTY_LEVELS = ["Easy", "Medium", "Hard"];

const ReasoningQuestionSchema = new Schema(
  {
    topic: {
      type: String,
      enum: REASONING_TOPICS,
      required: true,
      index: true,
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

    // Optional — for passage/statement based questions
    passage: {
      type: String,
      trim: true,
      default: null,
    },
     correctoption:{
        type: String,
        required:true
    },
    difficulty: {
      type: String,
      enum: DIFFICULTY_LEVELS,
      default: "Medium",
      index: true,
    }
  },
  { timestamps: true }
);

// Compound indexes for fast practice queries
ReasoningQuestionSchema.index({ topic: 1, difficulty: 1 });
ReasoningQuestionSchema.index({ examTags: 1, topic: 1 });

export default mongoose.model("ReasoningQuestion", ReasoningQuestionSchema);