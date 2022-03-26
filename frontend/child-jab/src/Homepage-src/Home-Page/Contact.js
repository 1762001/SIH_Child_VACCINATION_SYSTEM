import React from "react";
import Footer from "../HomePage-Components/Footer";
import NAvbar from "../HomePage-Components/NAvbar";
import {Col, Container, Row} from 'react-bootstrap'
import contactus from '../img/contactus.jpg'
import './Contact.css'


 <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"/> 



function Contact() {
  return (
      
    <div className="donation">
    <form action="/" method="POST">
            <h1>Sign Up For Donation</h1>
            <img class="img" src="images/group.jpg" alt="" srcset=""/>
                <input type="text" name="fName" class="form-control top" placeholder="First Name" autofocus/>
                <input type="text" name="lName" class="form-control middle" placeholder="Last Name"/>
                <input type="email" name="email" class="form-control bottom" placeholder="Your email"/>
                <input type="number" name="amount" class="form-control last" placeholder="Amount"/>

            <button  type="submit">Sign me up!</button>
            <p>&copy; Vaccination</p>
        </form>
    </div>
  
    
    
 
    
  );
}

export default Contact;


