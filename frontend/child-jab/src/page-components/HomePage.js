import React from 'react'
import {Button, Card, Container, Row, Col} from 'react-bootstrap'
import admin from '../admin logo.png'
import center from '../center.jpg'
import enduser from '../end-user.jpg'
import childcare from '../child-care-logo.png'
import background from '../bg-img2.jpg'
import {
    useHistory
 } from 'react-router-dom'


function HomePage() {
    const history = useHistory();

    const handleChange =()=>{
        sessionStorage.setItem("user","admin")
        history.push(`/admin-login`)
    }
   
    const handleChange2 = ()=>{
      sessionStorage.setItem("user","center")
        history.push(`/center-login`)
    }

    const handleChange3 = ()=>{
      sessionStorage.setItem("user","parents")
        history.push(`/host-login`)
    }
    

        return (
          <>
        {/* <div style={{ backgroundImage: `url(${background})` }}> */}
        <div className="child-care logo" align="center"> 
        <img src={childcare} width="500" height="250"/> 
        </div>
         
        &nbsp;&nbsp;
        <Container>
        <Row>
         <Col> 
        <Card border="primary" bg="warning" text="light"> 
        <Card.Header align="center"><h3>ADMIN</h3></Card.Header>
        &nbsp;
        <div className="admin logo" align="center">
        <img src={admin} width="100" height="100"></img>
        </div>
         &nbsp;
          <div className="col-12" align="center">
            <Button variant="primary" onClick={handleChange} >ADMIN</Button>
          </div> 
         &nbsp;&nbsp;&nbsp;
         </Card>
          </Col>

          <Col>
            <Card border="primary" bg="info" text="dark"> 
            <Card.Header align="center"><h3>CHILD-CARE CENTER</h3></Card.Header>
          &nbsp;
        <div className="center logo" align="center">
        <img src={center} width="100" height="100"></img>
        </div>
        &nbsp;
        <div className="col-12" align="center">
        <Button variant="success" onClick={handleChange2}>CHILD-CARE CENTER</Button>
        </div>
        &nbsp;&nbsp;&nbsp;
          </Card>
          </Col>

          <Col>
            <Card border="primary" bg="secondary" text="light"> 
            <Card.Header align="center"><h3>END-USER</h3></Card.Header>
          &nbsp;
        <div className="end-user logo" align="center">
        <img src={enduser} width="100" height="100"></img>
        </div>
        &nbsp;
        <div className="col-12" align="center">
        <Button variant="danger" onClick={handleChange3}>END-USER</Button>
        </div>
        &nbsp; 
      
          </Card>
          </Col>
          
        </Row>
    </Container>


    </>
    
        )
    }
export default HomePage
