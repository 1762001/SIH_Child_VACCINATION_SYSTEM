import React from 'react'
import Footer from "../HomePage-Components/Footer";
import NAvbar from "../HomePage-Components/NAvbar";
import {Col, Container, Row} from 'react-bootstrap'
import contactus from '../img/contactus.jpg'
import './Contact.css'

// //  Bootstrap core CSS
// <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
//     integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

function donation() {
  return (
    <>
    <div className="donation">
        <h1>hiii</h1>
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
        <h4>Admin contact : +91 7091723903</h4>
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
    </>
  )
}

export default donation