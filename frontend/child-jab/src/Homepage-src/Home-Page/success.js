import React, {useState} from 'react';
import './Donation.css'

import NAvbar from '../HomePage-Components/NAvbar'

export function Success(){
    return(
        <>
        <NAvbar></NAvbar>
        {/* <div className='SuccessD'>
            <img class='imgS' src='https://donate.worldvision.org/wp-content/uploads/2017/08/D200-0933-23_cmyk-1.jpg'></img>
            <h1>Successfully Donated</h1>
            <p>Thankyou For Your Precious Donation</p> */}

            <div class="backgroundS">
          <div class="transbox">
              <h1>Successfully Donated</h1>
          <p className='pSuccess'>Thankyou For Your Precious Donation.</p>
          </div>
        </div>  
        {/* </div> */}
        
      </>
    )
}


export default Success;
