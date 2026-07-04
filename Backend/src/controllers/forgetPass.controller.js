import User from "../models/User.model.js";
import sendEmail from "../utils/seder.js";

var OTP
//done 
export const ForgetPass = async (req, res) => {
 try{ const { user } = req.body;
  const email = user;
  // Find user by username
  // console.log('empty feilds', user);
  if ([user].some((data) => data?.trim() === "")) {
    return res.status(408).json({
      success: false,
      message: "* All feilds are mendatory ",
    });
  }
  const user1 = await User.findOne({
    $or: [{ username: user.toLowerCase() }, { email: email.toLowerCase() }],
  });
  // console.log(!user1)

  if (!user1) {
    return res.status(400).json({
      success: false,
      message: "user not found",
    })
  }
  return res.status(200).json({
      success: true,
      message: "user found",
      usermail: user1.email,
      userId: user1._id
    })
  
  }catch (error) {
    console.error("Error logging in user:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const sendotp = async (req, res) => {

  const { email } = req.body;
  // console.log("email", emai/l);
  const zeroBasedMax = 999999 - 100000 + 1;
  const array = new Uint32Array(1);
  crypto.getRandomValues(array);

  // Use remainder (%) to fit the huge number into our range
   OTP = (array[0] % zeroBasedMax) + 100000;
   const message = `Your OTP is ${OTP}. Please do not share it with anyone.`;
  await sendEmail(email, "OTP", message);
  return res.status(200).json({
    success: true,
    message: "otp send",
  });
};
export const Verifyotp = async (req, res) => {
    const {OTP1} = req.body
    // console.log("OTP1", OTP1);
    if (OTP1 == OTP){
        return res.status(200).json({
            success:true,
            message:"otp verified"
        })
    }else{
         return res.status(400).json({
            success:false,
            message:"invalid otp"
        })
    }

};
export const ResetPass = async (req, res) => {
    const {newpassword, Id}= req.body
  // console.log("newpassword", newpassword);
  // console.log("Id", Id);
    const user = await User.findById(Id)
     if(!user){
    return res.status(400).json({
      success: false,
      message: "user not found",
    });
  }

  user.password = newpassword
  await user.save()
  await sendEmail(user.email, "Password Reset", "Your password has been reset successfully.");
  return res.status(200).json({
    success: true,
    message: "Password changed successfully",
  });

};
