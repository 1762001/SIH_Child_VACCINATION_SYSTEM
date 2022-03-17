import React from "react";
import Footer from "../HomePage-Components/Footer";
import NAvbar from "../HomePage-Components/NAvbar";
import {Col, Container, Row} from 'react-bootstrap'
import contactus from '../img/contactus.png'
import './Contact.css'
function Contact() {
  return (
    <>
    <NAvbar></NAvbar>    
    <div className="container_first container-fluid">
      <div className="img_about image-contact" >
        {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFQbhjC9y7M7VLISpfH12L8s56j6wweweF9w&usqp=CAU"></img> */}
      <img src={contactus}></img>
      </div>
      <div>
        <br></br>
        <h1>Contact us for any Query</h1>
      </div>
      </div>
      <div className="container_first contact">
        <Row>
      <Col>
      <div>
        <h3>We are 24*7 available for support and help !</h3>
      </div>

      <div>
        <h4>Admin contact : +91 7698 554 321</h4>
        <h4>Customer service : 1800 331 002</h4>
        
      </div>
      </Col>
      <Col>
      <div className="container_fluid ">
       <h3>You can also E-mail us</h3>  
       </div>
      <h4>E-mail : admin123@gmail.com</h4>
      <h4>Our team will usually respond in 48 hours</h4>
      
    </Col>
    </Row>
    </div>
    
    <br></br>
    <br></br>
    <br></br>
    
    <Footer></Footer>
    
 
    </>
  );
}

export default Contact;
