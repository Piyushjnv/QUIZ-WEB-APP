import jwt from "jsonwebtoken";
import User from "../models/User.model.js";
export const Auth = async (req,res,next) => {
        
    try {
        const access_token =  req.cookies?.access_token || req.header("Authorization")?.replace("Bearer ", "")
        console.log('aaccess_token', access_token);
        console.log('aaccess_token', req.cookies);
        if(!access_token){
        //         return res.status(404).json({
        //             success : false,
        //             message : "Invalid Access Token"
        //         })
        console.log(" not avalible ");
        
        }
        // const refresh_token =  req.cookies?.refresh_token
        const decodedinfo =  jwt.verify(access_token,process.env.Secret_KEY)  
        console.log(decodedinfo);
          
        const user = await User.findById(decodedinfo?.id).select("-password -refreshToken")
        // if(!user){
        //         return res.status(404).json({
        //             success : false,
        //             message : "Invalid Access Token"
        //         })
        // }
        if(user){
            req.user = user
        }
        next()

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error?.message || "server error",
            error : error
        })
    }
}