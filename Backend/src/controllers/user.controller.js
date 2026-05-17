import User from "../models/User.model.js";

export const registerUser = async (req, res, next) => {
  try {
    const { username, email, fullname, password } = req.body;
    console.log(username,email, password,fullname);
    
    // Check if user already exists
    const existingUser = await User.findOne({
      $or: [{ username }, { email }],
    });

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "User with this username or email already exists",
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

  

    return  res.status(201)
    .json({
      success: true,
      message: "User registered successfully",
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
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({
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
    console.log(refreshtoken, accestoken);
    
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
    .cookie("access_token", `Bearer ${accestoken}`, {
          expires: new Date(Date.now() + 8 * 3600000),
          httpOnly: true, // cookie will be removed after 8 hours
        })
        .cookie("refresh_token", `Bearer ${refreshtoken}`, 
          {
          expires: new Date(Date.now() + 240 * 3600000), // cookie will be removed after 8 hours
          httpOnly: true,
        })
   
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

