import React, { useState } from "react";
import {Link, useHistory } from "react-router-dom";

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
    <div>
      <form onSubmit={handleSubmit} className="my-3">
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={credentials.email}
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={onChange}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={credentials.password}
            placeholder="Password"
            onChange={onChange}
          />
        </div>
        
        <button
          type="submit"
          className="btn btn-primary my-3"
          
        >
          Login
        </button>
        
      </form>
      <p className="mb-0">
         <Link to="admin-registration" className="text-center">Register a new membership</Link>
       </p>
    </div>
  );
};

export default AdminLogin;
