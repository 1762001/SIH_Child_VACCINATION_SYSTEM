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
          <p class='pD'>Your smallest contribution can help us bring joy to their lives.<br></br> Experience 'joy of giving'. Spread Smile today!</p>
          </div>
      </div>  

      <div class='login-wrapper'>
        <form action=""  className='formT2' method='post' onSubmit={handleSubmit} autoComplete='off'>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFQN6UPBC7MNHNqDYbqu07KyQAb5th5Nw-fg&usqp=CAU' alt='donate'></img>
          <h2>Donate Here</h2>


          <div class='input-group'>
            <input type='' name='DonatorName' id='userName'  ></input>
          
          </div>
          <div class='input-group'>
            <input type='text' name='DonatorName' id='userName'  onChange={onChange} required></input>
            <label for='userName'>Full Name</label>
          </div>
          <div class='input-group'>
            <input type='phone' name='Phone' id='phone'  onChange={onChange} required></input>
            <label for='phone'>Phone No.</label>
          </div>
          <div class='input-group'>
            <input type='number' name='amount' id='amount'  onChange={onChange} required></input>
            <label for='userName'>Amount</label>
          </div>
          <input type='submit' value='login' class='submitBtn'></input>

        </form>
      </div>


      

        <div class="container containerD">
              <div class="row rowD">
                    <div class='col-md-3 colD'>
                      Donate to help us fulfill wishes of kids diagnosed with life threatning disease.
                    </div>
                    <div class="col-md-3 colD">
                      Donate to help pregnant women with diseases caused from transfusion.
                    </div>
                    <div class="col-md-3 colD">
                      Your donation will help a child get proper medical care, protection against vaccine-preventable diseases.
                    </div>
                  </div>  
              </div>
             
        </div>
      </div>
  ); 
}

export default Donation;
