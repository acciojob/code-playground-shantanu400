import React from "react";
import { NavLink, useNavigate} from "react-router-dom";

const Login = (props) => {
    let navigate = useNavigate();
  return (
    <div>
      <p>You are not authenticated. Login First</p>

      <li>
        <NavLink to="/Login">CodePlayGround</NavLink>
      </li>
      <li>
        <NavLink to="/Login">Login</NavLink>
      </li>

      <button
        onClick={() => {
            //setLoggedin(true);
            props.handleLogin(true);
          navigate("/Codeplayground");
        }}
      >
        Login
      </button>
    </div>
  )
}

export default Login