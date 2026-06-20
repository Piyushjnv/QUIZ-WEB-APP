import React, { useState } from "react";
import Api from "../../API/Api";
import { useNavigate } from "react-router-dom";

function ChangePasword() {
    const navigate = useNavigate();
    const [message, setMessage] = useState("");
    const id = JSON.parse(localStorage.getItem("user"))._id;
    const [oldpassword, setOldpassword] = useState("");
    const [Newpassword, setNewpassword] = useState("");
    const [confirmpassword, setconfirmpassword] = useState("");
    return (
        <div className="flex flex-col max-w-xl md:max-w-xl rounded-lg items-center dark:bg-gray-600 min-h-100 shadow-lg  mt-10 mx-auto   ">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    Api.post("user/changePassword", {
                        oldpassword: oldpassword,
                        Newpassword: Newpassword,
                        Id: id || 2,
                    })
                    .then((res) => {
                        if (res.data.success) {
                            // setMessage(res.data.message);
                            alert(res.data.message);
                            // navigate(-1 , { replace: true });
                        } 
                    })
                    .catch((res) => {
                        console.error("Error changing password:", res);
                        setMessage(`${res.response.data.message}`);
                    });
                }}
                className=" border-2 flex flex-col p-5 gap-5 pl-5 pr-5 rounded-xl "
            >
                <input
                    onChange={(e) => {
                        setOldpassword(e.target.value);
                    }}
                    value={oldpassword}
                    required={true}
                    type="text"
                    placeholder=" Old Password"
                    className=" border-2"
                />
                <input
                    onChange={(e) => {
                        setNewpassword(e.target.value);
                    }}
                    value={Newpassword}
                    required={true}
                    type="text"
                    className="border-2 "
                    placeholder=" New Password"
                />
                <input
                    onChange={(e) => {
                        setconfirmpassword(e.target.value);
                    }}
                    required={true}
                    value={confirmpassword}
                    type="text"
                    placeholder=" Confirm Password"
                    className=" border-2"
                />
                <input
                    type="Submit"
                    className="bg-blue-400 m-auto p-2 pl-5 pr-5 rounded-full border-2 border-white font-bold "
                />
            </form>
            <div className="text-red-500">{message}</div>
        </div>
    );
}

export default ChangePasword;
