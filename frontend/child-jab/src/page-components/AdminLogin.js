import React, { useState } from "react";
import {Link, useHistory } from "react-router-dom";
import "./AdminLogin.css"

const AdminLogin = (props) => {
  const [credentials, setCredentials]=useState({email: "",password:""});
  let history = useHistory();
  const onChange = (e) => {
    // here we are using spread property 
    //  In this whatever property is present will be there and the overeride or add the new one
    setCredentials({...credentials,[e.target.name]: e.target.value})
}

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
        
      },
      body: JSON.stringify({ email:credentials.email , password : credentials.password})
    });
    const json = await response.json();
    if(json.success){
      // save the auth token and redirect
      localStorage.setItem( "token" , json.authtoken);
      // to redirect we use useNavigate hook
      // props.showAlert("Logged in","success")
      // props.alert('Hurray! Login Successfull')
      history.push("/manage-centers");
      console.log("logeed in");
      
    }
    else{
      // props.showAlert("Invalid Credentials","danger")
    }
    console.log(json); 
  };
  return (
    <div className="container">
   <div className="title">Registration</div>
    <div className="content">
      <form action="#">
        <div className="user-details">
          <div className="input-box">
            <span className="details">Full Name</span>
            <input type="text" placeholder="Enter your name" required></input>
          </div>
          <div className="input-box">
            <span className="details">Username</span>
            <input type="text" placeholder="Enter your username" required></input>
          </div>
          <div className="input-box">
            <span className="details">Email</span>
            <input type="text" placeholder="Enter your email" required></input>
          </div>
          <div className="input-box">
            <span className="details">Phone Number</span>
            <input type="text" placeholder="Enter your number" required></input>
          </div>
          <div className="input-box">
            <span className="details">Password</span>
            <input type="text" placeholder="Enter your password" required></input>
          </div>
          <div className="input-box">
            <span className="details">Confirm Password</span>
            <input type="text" placeholder="Confirm your password" required></input>
          </div>
        </div>
        <div className="gender-details">
          <input type="radio" name="gender" id="dot-1"></input>
          <input type="radio" name="gender" id="dot-2"></input>
          <input type="radio" name="gender" id="dot-3"></input>
          <span className="gender-title">Gender</span>
          <div className="category">
            <label form="dot-1">
            <span className="dot one"></span>
            <span className="gender">Male</span>
          </label>
          <label form="dot-2">
            <span className="dot two"></span>
            <span className="gender">Female</span>
          </label>
          <label form="dot-3">
            <span className="dot three"></span>
            <span className="gender">Prefer not to say</span>
            </label>
          </div>
        
        
        <div className="button">
          <input type="submit" value="Register"></input>
        </div>
        
    </div>
    
        </form>
      </div>
    </div>
      
   
  );
};

export default AdminLogin;
