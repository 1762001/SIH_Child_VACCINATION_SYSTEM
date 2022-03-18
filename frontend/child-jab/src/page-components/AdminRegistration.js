import React, { useState } from "react";
import {  useHistory } from "react-router-dom";

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
      
      // history.push(`/admin-login`)
      // props.showAlert("Account Created","success")
    } else {
      // props.showAlert("Invalid credentials","danger")
    }
    console.log(json);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            onChange={onChange}
            aria-describedby="emailHelp"
            name="name"
            minLength={3}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            onChange={onChange}
            aria-describedby="emailHelp"
            name="email"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            onChange={onChange}
            minLength={5}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="cpassword"
            name="cpassword"
            onChange={onChange}
            minLength={5}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="address"
            name="address"
            onChange={onChange}
            minLength={5}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="city" className="form-label">
            City
          </label>
          <input
            type="text"
            className="form-control"
            id="city"
            name="city"
            onChange={onChange}
            minLength={3}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="pincode" className="form-label">
            Pincode
          </label>
          <input
            type="number"
            className="form-control"
            id="pincode"
            name="pincode"
            onChange={onChange}
            minLength={6}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AdminRegistration;
