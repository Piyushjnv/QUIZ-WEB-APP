import mongoose, { Schema } from "mongoose";

const CurrentAffairsSchema = Schema(
  {
    Username: {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
    Question: {
      type: String,
      required: true,
      trim: true,
    },
    Option1: {
      type: String,
      required: true,
    },
    Option2: {
      type: String,
      required: true,
    },
    Option3: {
      type: String,
      required: true,
    },
    Option4: {
      type: String,
      required: true,
    },
    correctoption: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      default: "current Affairs",
      required: true,
    },
  },
  { timestamps: true },
)



export default mongoose.model("Current_Affairs",CurrentAffairsSchema)