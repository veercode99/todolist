import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {
    const loginData = JSON.parse(localStorage.getItem("datastore")) || false
    
    if(loginData){
       return <div>{children}</div>
    }else if(!loginData){
        return <Navigate to={"Loginpage"} />
    }
}

export default PrivateRoute
