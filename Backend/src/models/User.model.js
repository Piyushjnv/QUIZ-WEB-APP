import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import user_scoreModels from "./user_score.models.js";

const UserSchema = mongoose.Schema(
  {
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
    },
    role:{
      type: String,
      default: "USER"
    }
  },
  { timestamps: true },
);

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  // next();
});
UserSchema.methods.ChangePassword = async function(password, newpassword){

}
UserSchema.methods.comparePassword = async function (password) {
  // console.log('compare password');
  
  return await bcrypt.compare(password, this.password);
};
UserSchema.methods.generateAccessToken = function () {
//  console.log('gen acces token');
 
  return jwt.sign(
    {
      id: this._id,
      uaesname: this.username,
      email: this.email,
    },
    process.env.Secret_KEY,
    { expiresIn: "1d" },
  );
};

UserSchema.methods.generateRefreshToken = function () {
  // console.log('gen refresh token');
    const refreshtoken = jwt.sign(
    {
      id: this._id,
    },
    process.env.Secret_KEY,
    { expiresIn: "7d" },
  );
  this.refreshToken = refreshtoken
  return refreshtoken
};

export default mongoose.model("User", UserSchema);
