import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Codeplayground = () => {
  const [enter, setEnter] = useState(false);
  const [viewlogin, setViewlogin] = useState(false);
  let navigate = useNavigate();
  return (
    <div>
      <p>"You are Loggedin". Now You can enter PlayGround</p>

      <NavLink to="/Codeplayground" onClick={()=>{setEnter(true)}}>
        CodePlayGround
      </NavLink>
      <NavLink to="/login" onClick={()=>{setViewlogin(true)}}>
        Login
      </NavLink>

      {enter && !viewlogin ? (
        <p>Hi Welcome to Code PlayGround</p>
      ) : (
        <>
          <p>Login</p>
          <button
            onClick={() => {
              navigate("/login");
            }}
          >
            Logout
          </button>
        </>
      )}
    </div>
  );
};

export default Codeplayground;
