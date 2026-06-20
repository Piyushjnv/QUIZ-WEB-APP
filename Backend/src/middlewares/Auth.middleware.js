import jwt from "jsonwebtoken";
import User from "../models/User.model.js";

export const Auth = async (req, res, next) => {
    try {
        // 1. Grab raw token source
        let tokenSource = req.cookies?.access_token || req.header("Authorization");
            console.log(tokenSource);
            console.log("Raw Header:", req.header("Authorization"));
console.log("Raw Cookies:", req.cookies);
            
        if (!tokenSource) {
            return res.status(401).json({
                success: false,
                message: "Access Token not available or unauthorized"
            });
        }

        // 2. Clean the token prefix out safely
        const access_token = tokenSource.startsWith("Bearer ") 
            ? tokenSource.replace("Bearer ", "") 
            : tokenSource;

        // 3. Verify JWT string
        const decodedinfo = jwt.verify(access_token, process.env.Secret_KEY);  
          
        // 4. Query the DB (Double check if you used .id or ._id when signing the JWT)
        const user = await User.findById(decodedinfo?._id || decodedinfo?.id).select("-password -refreshToken");
        
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found associated with this token"
            });
        }

        // 5. Attach user object to the request context
        req.user = user;
        next();

    } catch (error) {
        return res.status(401).json({
            success: false,
            message: error?.message || "Authentication failed",
            error: error
        });
    }
};