import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import './Flow.css'
import login from '../img/login.png'
import search from '../img/Search.png'
import select from '../img/Select.png'
import payment from '../img/Payment.png'
import NAvbar from "../HomePage-Components/NAvbar";
import Footer from "../HomePage-Components/Footer";
import { useHistory } from "react-router";
function Flow() {

  const history = useHistory();

  const routeChange =()=>{
    history.push(`/host-registration`)
  }
  const routeChange2 =()=>{
    history.push(`/child-care`)
  }
  return (
    <>
    <NAvbar></NAvbar>
    <div className="flow-c">
      <br></br>
      <br></br>
    </div>
    <div className="flow container-fluid">
      <Row>
        <Card style={{ width: "22rem" }}>
      
          <Card.Img variant="top" src={login} />
          <Card.Body>
            <Card.Title>REGISTER/LOGIN</Card.Title>
            <Card.Text>
             First you need to register your self then login to your account.
            </Card.Text>
            <Button variant="primary" onClick={routeChange}>Go to Registration</Button>
          </Card.Body>
        </Card>
        

        
        </Row>
        <Row><Card style={{ width: "22rem" }}>
          <Card.Img variant="top" src={search}/>
          <Card.Body>
            <Card.Title>Search care center</Card.Title>
            <Card.Text>
             Now you can search the care center for your child nearest and best care center to your location.
            </Card.Text>
            <Button variant="primary" onClick={routeChange2}>Go to Search Bar</Button>
          </Card.Body>
        </Card></Row>

        <Row>
            <Card style={{ width: "22rem" }}>
          <Card.Img variant="top" src={select} />
          <Card.Body>
            <Card.Title>Select Care Center</Card.Title>
            <Card.Text>
             Now according to the facilities they provide, you can select that care center. 
            </Card.Text>
            
          </Card.Body>
        </Card>
        </Row>
        <Row>
            <Card style={{ width: "22rem" }}>
          <Card.Img variant="top" src={payment} />
          <Card.Body>
            <Card.Title>Pay your fees securely</Card.Title>
            <Card.Text>
             Now you have to pay your fees accordings to the structure of fees of particular care center. we provides secure end to end transaction.
            </Card.Text>
            
          </Card.Body>
        </Card>
        </Row>
      
      
    </div>
    <div className="flow-c">
      <br></br>
    </div>
    <Footer></Footer>
    </>
  );
}

export default Flow;
