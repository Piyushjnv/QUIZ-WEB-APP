import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import user_scoreModels from "./user_score.models";

const UserSchema = mongoose.Schema({
    username: {
      type: String,
      unique: true,
      required: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      lowercase: true,
    },
    fullname: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
    },
    refreshToken: {
      type: String,
    }
  },
  { timestamps: true },
);

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
      await bcrypt.hash(this.password, 16)
      .then((hash) => {
          this.password = hash;
          next();
        })
    }
);

UserSchema.method.comparePassword( async (password) =>{
  
      return   await bcrypt.compare(password, this.password)
})

UserSchema.method.generateAccessToken = function () {
  const payload = {
    id: this._id,
    uaesname: this.username,
     email: this.email
  };
  return jwt.sign(payload, process.env.Secret_KEY, { expiresIn: "1d" });
};

userSchema.method.generateRefreshToken = function () {
  const payload = {
    id: this._id}
  return jwt.sign(payload, process.env.Secret_KEY, { expiresIn: "7d" });
}

export default mongoose.model("User", UserSchema);
