import React from "react";
import { useNavigate } from "react-router-dom";

function Logoutuser() {
  const navigate = useNavigate();
  const user = {
    _id: "null",
    email: "null",
    fullname: "null",
    username: "null",
  
  };
  const logout = () => {
    localStorage.setItem("login", false);
    localStorage.setItem("user", {});
    alert("log out ");
    // console.log('log out');
    navigate("/");
  };
  return (
    <div
      onClick={logout}
      className=" w-25 text-center p-2 h-10 border-[#ffd53ed0]  bg-[#ffd53e96] hover:bg-[#9618188f] border-2 font-bold hover:text-[#ffffff] hover:font-extrabold rounded-2xl text-[#220808] cursor-pointer transition-all duration-300"
    >
      Logout
    </div>
  );
}

export default Logoutuser;
