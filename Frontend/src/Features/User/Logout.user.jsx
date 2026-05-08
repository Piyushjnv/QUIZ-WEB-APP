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
      className="m-10 w-30 text-center p-2 h-10 bg-amber-50 border-2 rounded-2xl font-semibold  "
    >
      Logout user
    </div>
  );
}

export default Logoutuser;
