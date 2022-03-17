import React from "react";
import "../HomeApp.css";
import "./MainPage.css";
import AdminLogin from '../img/admin.png'
import CenterLogin from '../img/centerlogins.png'
import EnduserLogin from '../img/enduser.png'
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
function MainPage() {
  return (
    <div className="MainPage">
      <div className="text_head">
      <h1 >!!Please make sure to Register first with right Credentials!!</h1>
      </div>
        
      
      <Container className="container_first">
        
        
        <Row>
          
          <Col>
            <Card className="card" style={{ width: "20rem" }}>
              <Card.Img className="img_center"  src={AdminLogin} />
              <Card.Body>
                <Card.Title>Admin Login</Card.Title>
                <Form className="Adminform">
                  <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="password" />
                  </Form.Group>
                </Form>
                <button className="getstarted_btn">Login</button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
          
          <Card className="card" style={{ width: "20rem" }}>
              <Card.Img className="img_center"src={CenterLogin} />
              <Card.Body>
                <Card.Title>Center Login</Card.Title>
                <Form className="Adminform">
                  <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="password" />
                  </Form.Group>
                </Form>
                <button className="getstarted_btn">Login</button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
          <Card className="card" style={{ width: "20rem" }}>
              <Card.Img className="img_center" variant="top" src={EnduserLogin} />
              <Card.Body>
                <Card.Title>End User Login</Card.Title>
                <Form className="Adminform">
                  <Form.Group>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="password" />
                  </Form.Group>
                </Form>
                <button className="getstarted_btn">Login</button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MainPage;
