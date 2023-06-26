// eslint-disable-next-line no-unused-vars
import React from "react";
import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Protected=({isLogedin,children})=>{

if(!isLogedin){
    return <Navigate to='/' replace/>
}
return children;

}

export default Protected;