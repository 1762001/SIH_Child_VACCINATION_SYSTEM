import React from "react";
import "../HomeApp.css";
import { useHistory } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Home.css";

function Home() {

  const history= useHistory();
  const routeChange=()=>{
    
    history.push(`/child-care`);
  }

  return (
    <>
     
    <div className="Home">
      
      <Container className="container_first">
        <Row>
          <Col>
           <h1 className="title_text">Welcome to ChildCare Website</h1>
           <h5 className="subtitle_text">We provides best facility by which you can search nearest childcare center for your child</h5>
           <button  className="getstarted_btn" onClick={routeChange} >Get Started</button>
          </Col>

          
        </Row>
      </Container>
      
      
      
    </div>
    </>
  );
}

export default Home;
