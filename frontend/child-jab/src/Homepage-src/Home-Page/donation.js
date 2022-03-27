import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';
// const history = useHistory()
// import {Link, useHistory} from "react-router-dom";
import './Donation.css'


// <><link rel="preconnect" href="https://fonts.gstatic.com" /><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" /><link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;600&display=swap" rel="stylesheet" /></>

// const donation = (props) => {
//   const [credentials, setCredentials]=useState({email: "",password:""});
//   let history = useHistory();
//   const onChange = (e) => {
//     // here we are using spread property 
//     //  In this whatever property is present will be there and the overeride or add the new one
//     setCredentials({...credentials,[e.target.name]: e.target.value})
// }

export function Donation() { 
  return ( 
    <div className='donation1'> 
    <div class="background1">
        <div class="shape"></div>
        <div class="shape"></div>
    </div>
      <form action="/api/donation/create" className='userForm1'>
        <h3>Donate Here</h3>

        <label className='label1' for="username">Full Name</label>
        <input className='input1' type="text" id="username" required/>

        <label className='label1' for="number">Phone No.</label>
        <input className='input1' type="phone" id="phone" required/>

        <label className='label1' for="number">Amount</label>
        <input className='input1' type="number" id="amount" required/>

        <Link to="/success" className="btn btn-primary btn1">Sign up</Link>

        {/* <button type="submit" onClick={() => history.push('/about-us')}>Donate Now</button> */}
        
      </form>
  </div> 
  ); 
}

export default Donation;