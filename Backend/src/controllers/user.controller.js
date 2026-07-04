import User from "../models/User.model.js";

export const registerUser = async (req, res, next) => {
  try {
    const { username, email, fullname, password } = req.body;
    // console.log(username,email, password,fullname);

    if (
      [username, email, fullname, password].some((data) => data?.trim() === "")
    ) {
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

    const accestoken = await user.generateAccessToken();
    const refreshtoken = await user.generateRefreshToken();
    res
      .cookie("access_token", `Bearer ${accestoken}`, {
        expires: new Date(Date.now() + 8 * 3600000),
        httpOnly: true,
        secure: true,
      })
      .cookie("refresh_token", `Bearer ${refreshtoken}`, {
        expires: new Date(Date.now() + 240 * 3600000),
        httpOnly: true,
        secure: true,
      });
    return res.status(201).json({
      success: true,
      message: " registered successfully",
      User: {
        _id: user._id,
        username: user.username,
        email: user.email,
        fullname: user.fullname,
      },
      // user: userResponse,
    });
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
    const email = username;
    // Find user by username
    // console.log('empty feilds', username, password);
    if ([username, password].some((data) => data?.trim() === "")) {
      return res.status(408).json({
        success: false,
        message: "* All feilds are mendatory ",
      });
    }
    const user = await User.findOne({
      $or: [
        { username: username.toLowerCase() },
        { email: email.toLowerCase() },
      ],
    });
    if (!user) {
      return res.status(408).json({
        success: false,
        message: "Invalid credentials",
      });
    }
    // console.log('User found:', user);
    // const times = Date.now()
    // Check password
    const isPasswordValid = await user.comparePassword(password);

    if (!isPasswordValid) {
      return res.status(408).json({
        success: false,
        message: "Invalid Password",
      });
    }
    // console.log('time taken ', Date.now() - times);

    const accestoken = await user.generateAccessToken();
    const refreshtoken = await user.generateRefreshToken();
    // console.log(refreshtoken, accestoken);
    const options = {
      httpOnly: true,
      secure: true,
    };
    const isProduction = process.env.NODE_ENV === "production";
    res
      .cookie("access_token", `Bearer ${accestoken}`, {
        expires: new Date(Date.now() + 8 * 3600000),
        httpOnly: true,
        secure: isProduction, // false on localhost, true in production
    sameSite: isProduction ? "none" : "lax"
      })
      .cookie("refresh_token", `Bearer ${refreshtoken}`, {
        expires: new Date(Date.now() + 240 * 3600000),
        httpOnly: true,
        secure: isProduction,
        sameSite: isProduction ? "none" : "lax"
      });
    //   expires: new Date(Date.now() + 8 * 3600000),
   
    //   // httpOnly: true,
    //   //  secure: true // cookie will be removed after 8 hours
    // });
    // res.cookie("refresh_token", `Bearer ${refreshtoken}`, {
    //   expires: new Date(Date.now() + 240 * 3600000), // cookie will be removed after 8 hours
    //   // httpOnly: true,
    //   //  secure: true
    // });
    return res
    .status(200)
  //   .cookie("access_token", `Bearer ${accestoken}`
  //   //   , {
  //   //   expires: new Date(Date.now() + 8 * 3600000),
   
  //   //   // httpOnly: true,
  //   //   //  secure: true // cookie will be removed after 8 hours
  //   // }
  // )
  //   .cookie("refresh_token", `Bearer ${refreshtoken}`,
  //   //    {
  //   //   expires: new Date(Date.now() + 240 * 3600000), // cookie will be removed after 8 hours
  //   //   // httpOnly: true,
  //   //   //  secure: true
  //   // }
  //   )
    .json({
      success: true,
      message: "Login successful",
      user: {
        _id: user._id,
        username: user.username,
        email: user.email,
        fullname: user.fullname,
        role: user.role,
        // avatar: user.avatar
      },
    });
  } catch (error) {
    console.error("Error logging in user:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const logout = async (req, res) => {
  try {
    console.log(req.user);
    const userid = req.user._id;
    await User.findByIdAndUpdate(userid, {
      $set: { refreshtoken: undefined },
    });
    return res
      .status(200)
      .clearCookie("access_token", {
        httpOnly: true,
        secure: true,
      })
      .clearCookie("refresh_token", {
        httpOnly: true,
        secure: true,
      });
  } catch (error) {}
};
export const  ChangePassword   = async (req,res) => {
try {
  const {oldpassword,  Newpassword, Id} = req.body
  // console.log(oldpassword, Id , Newpassword);
  const user = await User.findById(Id)
  // console.log(user);
  const validatepass = await user.comparePassword(oldpassword)
  console.log(validatepass);
  if(!validatepass){
    return res.status(400).json({
      success: false,
      message: "Invalid Old Password",
    });
  }
  user.password = Newpassword
  await user.save()
  return res.status(200).json({
    success: true,
    message: "Password changed successfully",
  });
  // const user = User.findByIdAndUpdate(Id,  {
  //     $set: { refreshtoken: undefined },
  //   })
  
  
} catch (error) {
   return res.status(500).json({
    success: false,
    message: "Internal server error",

   })
}
}