import React, { useState } from "react";
import {  useHistory } from "react-router-dom";
import "./AdminLogin.css"

const AdminRegistration = (props) => {
  const [credentials, setCredentials]=useState({name:"",email: "",password:"",cpassword:"",address:"",city:"",pincode:""}) ;
  let history = useHistory();
  
  const onChange = (e) => {
    // here we are using spread property
    //  In this whatever property is present will be there and the overeride or add the new one
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {name,email,password,address,city,pincode}=credentials;
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        
        },
      body: JSON.stringify({
       name,email,password,address,city,pincode
      }),
    });
    const json = await response.json();
    if (json.success) {
      // save the auth token and redirect
      localStorage.setItem('token' , json.authtoken);
      // to redirect we use useNavigate hook
      
      history.push(`/admin-login`)
      // props.showAlert("Account Created","success")
    } else {
      // props.showAlert("Invalid credentials","danger")
    }
    console.log(json);
  };

  return (
    <div className="container">
      <div className="screen-register">
        <div className="screen__content-register">
        <form onSubmit={handleSubmit} className="login my-3">
        <div className="login__field ">
          {/* <label htmlFor="name" className="form-label">
            Name
          </label> */}
          <i className ="login__icon fas fa-user"></i>
          <input
            type="text"
            className="login__input"
            id="name"
            onChange={onChange}
            aria-describedby="emailHelp"
            name="name"
            minLength={3}
            placeholder= "Name"
            required
          />
        </div>
        <div className="login__field form-group">
          {/* <label htmlFor="email" className="form-label">
            Email address
          </label> */}
          <i className="login__icon fas fa-envelope" ></i>
          <input
            type="email"
            className="login__input"
            id="email"
            onChange={onChange}
            aria-describedby="emailHelp"
            name="email"
            placeholder= "Email"
            required
          />
        </div>
        <div className="login__field form-group">
          {/* <label htmlFor="password" className="form-label">
            Password
          </label> */}
          <i className="login__icon fas fa-lock"></i>
          <input
            type="password"
            className="login__input"
            id="password"
            name="password"
            onChange={onChange}
            minLength={5}
            placeholder="Password"
            required
          />
        </div>
        <div className="login__field form-group">
          {/* <label htmlFor="cpassword" className="form-label">
            Confirm Password
          </label> */}
          <i className="login__icon fas fa-lock"></i>
          <input
            type="password"
            className="login__input"
            id="cpassword"
            name="cpassword"
            onChange={onChange}
            minLength={5}
            placeholder="Confirm Password"
            required
          />
        </div>
        <div className="login__field form-group">
          {/* <label htmlFor="address" className="form-label">
            Address
          </label> */}
          <i className="login__icon fas fa-address-card" ></i>
          <input
            type="text"
            className="login__input"
            id="address"
            name="address"
            onChange={onChange}
            minLength={5}
            placeholder="Address"
            required

          />
        </div>

        <div className="login__field form-group">
          {/* <label htmlFor="city" className="form-label">
            City
          </label> */}
          <i className="login__icon fas fa-city"></i>
          <input
            type="text"
            className="login__input"
            id="city"
            name="city"
            onChange={onChange}
            minLength={3}
            placeholder="City"
            required
          />
        </div>

        <div className="login__field form-group">
          {/* <label htmlFor="pincode" className="form-label">
            Pincode
          </label> */}
          <i className="login__icon fas fa-map-pin" ></i>
          <input
            type="number"
            className="login__input"
            id="pincode"
            name="pincode"
            onChange={onChange}
            minLength={6}
            placeholder="Pincode"
            required
          />
        </div>

        {/* <button type="submit" className="btn btn-primary">
          Submit
        </button> */}
        <button
          type="submit"
          className="button login__submit my-3"
          
        >
          <span className="button__text">Submit</span>
          <i className="button__icon fas fa-chevron-right"></i>

        </button>
      </form>
        </div>
        <div className="screen__background">
			<span className="screen__background__shape screen__background__shape4"></span>
			<span className="screen__background__shape screen__background__shape3"></span>		
			<span className="screen__background__shape screen__background__shape2"></span>
			<span className="screen__background__shape screen__background__shape1"></span>
		</div>
      </div>
      
    </div>
  );
};

export default AdminRegistration;
