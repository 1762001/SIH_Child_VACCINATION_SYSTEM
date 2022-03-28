import React, { useState } from 'react';

import {  useHistory } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';
// const history = useHistory()
// import {Link, useHistory} from "react-router-dom";

// import { Link } from 'react-router-dom';

import './Donation.css'


export function Donation() { 
  let history = useHistory();
  
  const [credentials, setCredentials]=useState({DonatorName:"",Phone: "",amount:""}) 
  const onChange = (e) => {
    // here we are using spread property
    //  In this whatever property is present will be there and the overeride or add the new one
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const {DonatorName, Phone, amount}= credentials;
    const response = await fetch("http://localhost:5000/api/donation/createdonation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        
        },
      body: JSON.stringify({
       DonatorName,Phone,amount
      }),
    });
    const json = await response.json();
    if (json.success) {
      // save the auth token and redirect
      // localStorage.setItem('token' , json.authtoken);
      // to redirect we use useNavigate hook
      history.push('/');
      
    } else {
      // props.showAlert("Invalid credentials","danger")
      console.log(json);
    }
    console.log(json);
  };
  return ( 
    <div className='donation1'> 
    <div class="background1">
        <div class="shape"></div>
        <div class="shape"></div>
    </div>
      <form method='POST' onSubmit={handleSubmit}  className='userForm1'>
        <h3>Donate Here</h3>

        <label className='label1' for="username">Full Name</label>
        <input className='input1' name="DonatorName"type="text" onChange={onChange} id="username"/>

        <label className='label1' for="number">Phone No.</label>
        <input className='input1' name="Phone" onChange={onChange} id="phone"/>

        <label className='label1' for="number">Amount</label>
        <input className='input1' name="amount" type="number" onChange={onChange} id="amount"/>

        
        <button className='btn1' type='submit'>donate</button>
        {/* <button type="submit" onClick={() => history.push('/about-us')}>Donate Now</button> */}
        
      </form>
  </div> 
  ); 
}

export default Donation;