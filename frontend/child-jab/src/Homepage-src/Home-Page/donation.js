import React, { useState } from 'react';

import {  useHistory } from 'react-router-dom';

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
 

    console.log(json);
    history.push('/donationres');
  };
  return ( 
    <div className='donation1'> 
    <div className="background1">
        <div className="shape"></div>
        <div className="shape"></div>
    </div>
      <form method='POST' onSubmit={handleSubmit}  className='userForm1'>
        <h3>Donate Here</h3>

        <label className='label1'>Full Name</label>
        <input className='input1' name="DonatorName"type="text" onChange={onChange} id="username"/>

        <label className='label1' >Phone No.</label>
        <input className='input1' name="Phone" onChange={onChange} id="phone"/>

        <label className='label1' >Amount</label>
        <input className='input1' name="amount" type="number" onChange={onChange} id="amount"/>

        
        <button  className='btn1' type='submit'>Donate</button>
       
        
      </form>
  </div> 
  ); 
}

export default Donation;