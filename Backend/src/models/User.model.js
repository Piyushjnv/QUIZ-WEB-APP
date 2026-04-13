import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    username :{
        type : String,
        unique: true,
        required : true,
        lowercase : true,
        trim : true,
        index : true
    },
    email:{
        type : String,
        unique: true,
        required : true,
        trim : true,
        lowercase : true,
   
    },
    fullname: {
        type : String,
        required : true,
        trim : true,
        index : true,
    },
    password: {
        type : String,
        required : true,
    
    },
    avatar: {
        type: String
    },
    refreshToken: {
        type: String
    }

    
},{ timestamps : true})

UserSchema.pre('save', async function (next) {
})


