
import React, { useState } from "react";
import './../styles/App.css';
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Codeplayground from "./Codeplayground.js";
import Login from "./Login.js";

const App = () => {
  function handleLogin(value){
    setLoggedin(value);
  }
  
  const [loggedin,setLoggedin]=useState(false);

  return (
    
    <>

    <BrowserRouter>
    <Routes>
    <Route
          path="/" element={
            loggedin ? (
              <Codeplayground handleLogin={handleLogin} loggedin={loggedin}/>
            ) : (
              // <Login/>
              <Login handleLogin={handleLogin} loggedin={loggedin}/>
            )
          }
        />
        <Route path="/Codeplayground" element={
          loggedin ? (
            <Codeplayground handleLogin={handleLogin} loggedin={loggedin}/>
          ) : (
            // <Login/>
            <Login handleLogin={handleLogin} loggedin={loggedin}/>
          )
        }/>
        <Route path="/Login" element={
          loggedin ? (
            <Codeplayground handleLogin={handleLogin} loggedin={loggedin}/>
          ) : (
            // <Login/>
            <Login handleLogin={handleLogin} loggedin={loggedin}/>
          )
        }/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
