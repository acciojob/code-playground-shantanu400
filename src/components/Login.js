import React from "react";
import { NavLink, useNavigate ,useLocation} from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();
 // let location=useLocation();
  //const [loggedin, setLoggedin] = useState(location.state);
  return (
    <div>
      <p>You are not authenticated. Login First</p>

      <li>
        <NavLink to="./login">CodePlayGround</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>

      <button
        onClick={() => {
            //setLoggedin(true);
          navigate("/Codeplayground");
        }}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
