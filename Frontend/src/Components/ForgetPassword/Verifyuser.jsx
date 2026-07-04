import React, { useState, useEffect } from "react";
import Api from "../../API/Api";

function Verifyuser() {
    const [user, setuser] = useState();
    const [usermail, setusermail] = useState();
    const [userId, setuserId] = useState();
    const [password, setpassword] = useState();
    const [otp, setotp] = useState();

    const [buttontxt, setbuttontxt] = useState("verify");
    const [route, setroute] = useState("forgetpass");
    const [message, setMessage] = useState();
    const [stage, setStage] = useState(1);
    
    // const verifyUser = ()=> {}
    // const verifyUser = ()=> {}
    // const verifyUser = ()=> {}
    // const => {}
    // const => {}
    // const => {}
    return (
        <div className="h-full flex flex-col items-center justify-center">
            <div>
                <input
                    placeholder=" Email or Username"
                    onChange={(e) => {
                        setuser(e.target.value);
                    }}
                    value={user}
                    className="border p-2 rounded-lg mt-5 active:border-green-500"
                    type="email"
                />

                {
                    <div className={` ${!(stage === 1 || stage === 2) ? 'block' : 'hidden'}`}>
                        <input
                            onChange={(e) => {
                                setotp(e.target.value);
                            }}
                            value={otp}
                            placeholder=" Enter OTP"
                            className="border p-2 rounded-lg mt-5 active:border-green-500"
                            type="text"
                        />
                    </div>
                    
                }
                {
                    <div className={` ${stage === 4 ? 'block' : 'hidden'}`}>
                        <input
                        placeholder=" New Password"
                            onChange={(e) => {
                                setpassword(e.target.value);
                            }}
                            value={password}
                            className="border rounded-lg mt-5 active:border-green-500"
                            type="text"
                        />
                    </div>
                    
                }
            </div>

            <button
                onClick={() => {
                    try {
                        // setisdesable(true)
                        Api.post(
                            `/forgetpassword/${stage === 1 ?'forgetpass' : stage === 2 ? "sendotp": stage === 3 ? "verifyotp" : stage === 4 ? "setPassword" : ""}`,
                            stage === 1 ?{ user }: stage === 2 ? { email: usermail } : stage === 3 ? { OTP1: otp } : stage === 4 ? { newpassword: password, Id: userId } : {} ,
                            { withCredentials: true }
                        )
                            .then((response) => {
                                // const {user} = await response.data
                                // console.log("hello", response);
                                if (response.data.success) {
                                    if (stage === 1) {
                                        setusermail(response.data.usermail);
                                        setuserId(response.data.userId);
                                    }
                                    setStage(stage + 1);
                                    setMessage(response.data.message);
                                    // console.log("hello", response.data.message);
                                }
                            })
                            .catch((err) => {
                                console.log("err responce", err.response);
                                setMessage(err.response.data.message);
                            });
                    } catch (error) {
                        console.error(
                            "Error occurred while registering user:",
                            error
                        );
                    }
                }}
                className=" cursor-pointer  bg-[#006eff] p-2 m-5 rounded-lg border-2"
            >
                {stage === 1
                    ? "Verify User"
                    : stage === 2
                    ? "Send OTP"
                    : stage === 3
                    ? "Verify OTP"
                    : stage === 4
                    ? "Reset Password"
                    : "DONE"}
            </button>
            <div>{message}</div>
        </div>
    );
}

export default Verifyuser;
