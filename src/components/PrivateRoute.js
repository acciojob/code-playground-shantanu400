import React from 'react'
import {Navigate } from 'react-router-dom'


const PrivateRoute = (props) => {
    const {loggedin, element}=props;
  return (
    <>{
        loggedin?(
           element
        )
    :
    <Navigate to="/Login"/>
    }
    
   
    </>
  )
}

export default PrivateRoute