import mongoose, { Schema } from "mongoose";


const EnglishQuestionSchema = mongoose.Schema({
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
        default:"eng",
       enum: ["Grammar", "Vocabulary", "Comprehension", "Sentence Structure"]
    }
},{ timestamps: true })


export default mongoose.model("EnglishQuestion", EnglishQuestionSchema)

// Grammar:
// Spot the Error
// Sentence Improvement
// Active/Passive Voice
// Direct/Indirect Speech
// Tenses and Subject-Verb Agreement

// Vocabulary:
// Synonyms and Antonyms
// One-word Substitution
// Idioms and Phrases
// Spellings and Detecting Misspelled Words

// Comprehension:
// Reading Comprehension Passages
// Cloze Passage (fill in the blanks in a passage)
// Questions based on given paragraphs, including current affairs and editorial content

// Sentence Structure:
// Shuffling of Sentence Parts
// Shuffling of Sentences in a Passage