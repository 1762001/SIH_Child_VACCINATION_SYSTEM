import React from 'react'
import {Link} from 'react-router-dom'
function Footer() {
    return (
        <>
           <div id="footer">
  <div>
    <p className='footer-para'>© 2022 by Child Care Center. All rights reserved.</p>
    
    <p className="mb-0">
      <Link to="/about-us" style={{ color: "White" }}>About Us</Link>
      </p>
      <p className="mb-0">
      <Link to="/contact-us" style={{ color: "White" }}>Contact Us</Link>
      </p>
      <p className="mb-0">
      <Link to="/ourvalues" style={{ color: "White" }}>Careers</Link>
      </p>
   
    <ul>
      <li>
        <a href="https://www.twitter.com" id="twitter">twitter</a>
      </li>
      <li>
        <a href="https://www.facebook.com" id="facebook">facebook</a>
      </li>
      <li>
        <a href="https://www.googleplus.com" id="googleplus">googleplus</a>
      </li>
      <li>
        <a href="https://www.pinterest.com" id="pinterest">pinterest</a>
      </li>
    </ul>
   
      
  </div>
</div>

        </>
    )
}

export default Footer
