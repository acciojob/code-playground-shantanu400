import React, { useState } from "react";
import "./../styles/App.css";
import { Router, Route, Navigate } from "react-router-dom";
import Login from "./Login";
import Codeplayground from "./Codeplayground.JS"

const App = () => {
  
 // let loggedin=false;
  return (
    <Router>
      <div>
        <Route
          path="/Codeplayground"element={
            loggedin ? (
              <Codeplayground/>
            ) : (
              // <Login/>
              <Navigate to="/login" />
            )
          }
        />
      </div>
    </Router>
  );
};

export default App;
