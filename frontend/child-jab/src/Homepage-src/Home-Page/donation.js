import React, { useState } from 'react';

import {  useHistory } from 'react-router-dom';

import NAvbar from '../HomePage-Components/NAvbar'

import './Donation.css'

//bootstrap CSS only 
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>


export function Donation() { 
  let history = useHistory();
  
  const [credentials, setCredentials]=useState({DonatorName:"",Phone: "",amount:""}) 
  const onChange = (e) => {
   
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
      <NAvbar/>

      
      <div>
        <div class="backgroundD">
          <div class="transbox">
          <p>Your smallest contribution can help us bring joy to their lives.<br></br> Experience 'joy of giving'. Spread Smile today!</p>
          </div>
      </div>  
        <div class="container containerD">
              <div class="row rowD">
                    <div class='col-md-3 col-sm-12 colD'>
                      Donate to help us fulfill wishes of kids diagnosed with life threatning disease.
                    </div>
                    <div class="col-md-3 col-sm-12 colD">
                      Donate to help pregnant women with diseases caused from transfusion.
                    </div>
                    <div class="col-md-3 col-sm-12 colD">
                      Your donation will help a child get proper medical care, protection against vaccine-preventable diseases.
                    </div>
                  </div>  
              </div>
             
        </div>
        <div class="formD">
              <div class='innerForm'>
                <form method='POST' onSubmit={handleSubmit}  className='userForm1'>
                <h3>Donate Here</h3>

                <input className='input1' name="DonatorName"type="text" placeholder='Full Name' onChange={onChange} id="username"/>
                <input className='input1' name="Phone" placeholder='Phone No.' onChange={onChange} id="phone"/>
                <input className='input1' name="amount" type="number" placeholder='Amount' onChange={onChange} id="amount"/>
                <button  className='btn1' type='submit'>Donate</button>
             </form>
            </div>
          </div>
            
       </div> 
      
  ); 
}

export default Donation;
