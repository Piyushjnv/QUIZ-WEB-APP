import User from "../models/User.model.js";

export const registerUser = async (req, res, next) => {
  try {
    const { username, email, fullname, password } = req.body;
    // console.log(username,email, password,fullname);
    
    if([ username, email, fullname, password].some((data)=> data?.trim() === "")){
      // console.log('empty feilds');
      
        return res.status(200).json({
        success: false,
        message: "* All feilds are mendatory ",
      });
    }

    // Check if user already exists
    const existingUser = await User.findOne({
      $or: [{ username }, { email }],
    });

    if (existingUser) {
      return res.status(208).json({
        success: false,
        message: "User with this username or email already exists"
      });
   
    }

    // const refreshToken = User.generateRefreshToken();
    // Create new user
    const user = await User.create({
      username,
      email,
      fullname,
      password, 
    });

   const accestoken = await user.generateAccessToken();
    const refreshtoken =  await user.generateRefreshToken();
res.cookie("access_token", `Bearer ${accestoken}`, {
          expires: new Date(Date.now() + 8 * 3600000),
          httpOnly: true, // cookie will be removed after 8 hours
        })
        .cookie("refresh_token", `Bearer ${refreshtoken}`, 
          {
          expires: new Date(Date.now() + 240 * 3600000), // cookie will be removed after 8 hours
          httpOnly: true,
        })
    return  res.status(201)
    .json({
      success: true,
      message: " registered successfully",
      User: {
        _id: user._id,
        username: user.username,
        email: user.email,
        fullname: user.fullname,
      }
      // user: userResponse,
    })
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const loginUser = async (req, res) => {

  try {
    const { username, password } = req.body;
    // Find user by username
      if([ username,  password].some((data)=> data?.trim() === "")){
      // console.log('empty feilds');
      
        return res.status(408).json({
        success: false,
        message: "* All feilds are mendatory ",
      });
    }
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(201).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    // Check password
    const isPasswordValid = await user.comparePassword(password);

    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

   
    const accestoken = await user.generateAccessToken();
    const refreshtoken =  await user.generateRefreshToken();
    // console.log(refreshtoken, accestoken);
    
    res.cookie("access_token", `Bearer ${accestoken}`, {
          expires: new Date(Date.now() + 8 * 3600000),
          httpOnly: true, // cookie will be removed after 8 hours
        })
        res.cookie("refresh_token", `Bearer ${refreshtoken}`, 
          {
          expires: new Date(Date.now() + 240 * 3600000), // cookie will be removed after 8 hours
          httpOnly: true,
        })
    return res
    .status(200)
    .json({
      success: true,
      message: "Login successful",
      user: {
        _id: user._id,
        username: user.username,
        email: user.email,
        fullname: user.fullname,
        // avatar: user.avatar
      }})
   
   
  }
  catch (error) {
    console.error("Error logging in user:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }}

export const logout = async (req,res) =>{
  try {
    console.log(req.user);
    
  } catch (error) {
    
  }
}

