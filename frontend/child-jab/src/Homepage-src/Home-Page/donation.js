import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Donation.css'


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
      </form>
  </div> 
  ); 
}

export default Donation;