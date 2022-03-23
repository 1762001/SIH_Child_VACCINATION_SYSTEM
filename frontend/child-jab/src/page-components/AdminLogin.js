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
      <div className="screen">
        <div className="screen__content">
        <form onSubmit={handleSubmit} className="login my-3">
        <div className="login__field form-group">
          {/* <label htmlFor="email">Email address</label> */}
          <i class ="login__icon fas fa-user"></i>
          <input
            type="email"
            className="login__input "
            id="email"
            name="email"
            value={credentials.email}
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={onChange}
          />
          {/* <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small> */}
        </div>
        <div className="login__field form-group">
          <i class="login__icon fas fa-lock"></i>
          {/* <label htmlFor="password">Password</label> */}
          <input
            type="password"
            className="login__input "
            id="password"
            name="password"
            value={credentials.password}
            placeholder="Password"
            onChange={onChange}
          />
        </div>
        
        <button
          type="submit"
          className="button login__submit my-3"
          
        >
          <span class="button__text">Log In Now</span>
          <i class="button__icon fas fa-chevron-right"></i>

        </button>
        <button
          type="submit"
          className="button login__submit"
          
        >
          <span class="button__text">Register</span>
          <i class="button__icon fas fa-chevron-right"></i>

        </button>
        {/* <p className="mb-0 ">
         <Link to="admin-registration" className="text-center">Register a new membership</Link>
       </p> */}
        
      </form>
      
      </div>
      <div class="screen__background">
			<span class="screen__background__shape screen__background__shape4"></span>
			<span class="screen__background__shape screen__background__shape3"></span>		
			<span class="screen__background__shape screen__background__shape2"></span>
			<span class="screen__background__shape screen__background__shape1"></span>
		</div>
      </div>
      
      
    </div>
  );
};

export default AdminLogin;
