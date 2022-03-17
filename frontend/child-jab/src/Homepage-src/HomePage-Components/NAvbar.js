import React, {useState, useEffect} from "react";
import { Navbar, Nav, Form,Container, NavDropdown} from "react-bootstrap";
import "./Style.css";
import '../Home-Page/About.css'
import { Link, useHistory } from "react-router-dom";
import navlogo from '../nav-logo.jpg'
import {connect} from 'react-redux'
import {searchCenter} from '../../_actions/center.action'


function NAvbar(props) {
  const history = useHistory();
  const [center, setCenter] = useState({
      city : ""
  })

  const handleChange=(e)=>{
    setCenter({
      [e.target.name]:e.target.value
    })
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    history.push(`/search-results?city=`+center.city)
    console.log(center)
  }

  const routeadmin = ()=>{
    sessionStorage.setItem("user","admin")
    history.push(`/admin-login`)
  }

  const routecenter = ()=>{
    sessionStorage.setItem("user","center")
    history.push(`/center-login`)
  }

  useEffect(() => {
    let parents = JSON.parse(sessionStorage.getItem("auth"))
    setLogin(parents)
  }, [])
 
  const [login, setLogin] = useState({
     
  })
  
 
  return (
    <>

      <Navbar className="nav_bg"  expand="lg" sticky="top">
     
        <Navbar.Brand className="nav_text">
        <img
        alt=""
        src= {navlogo} 
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
          Childcare
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"  />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/child-care">
              <b>Home</b>
            </Nav.Link>
            <NavDropdown title="For Parents" id="collasible-nav-dropdown">
        <NavDropdown.Item href="/flow">How to Choose a center</NavDropdown.Item>
        <NavDropdown.Item href="/testimonials">Testimonials</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/host-login">Sign In</NavDropdown.Item>
        </NavDropdown>
            <Nav.Link href="/gallery">
              <b>Gallery</b>
            </Nav.Link>
            <NavDropdown title="About" id="collasible-nav-dropdown">
        <NavDropdown.Item href="/about-us">Who We are</NavDropdown.Item>
        <NavDropdown.Item href="/ourvalues">Our Values</NavDropdown.Item>
        </NavDropdown>
            <Nav.Link href="/contact-us">
              <b>Contact Us</b>
            </Nav.Link>
          
         <NavDropdown title="My Account" id="collasible-nav-dropdown" >
         <NavDropdown.Item>Signed In as : {login!==null && login.full_name}</NavDropdown.Item>
         <NavDropdown.Item href="/logout">Log-Out</NavDropdown.Item>
         </NavDropdown>
          </Nav>
          <Form inline>
          <Form.Control style={{ width: "19rem" }} type="text" placeholder="Search nearby centers..." className=" mr-sm-1" 
          onChange={handleChange} name="city"/>
          <button type="danger" className="nav_btn" onClick={handleSubmit}><i class="fa fa-search"></i></button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button className="nav_btn" onClick={routeadmin}>ForAdmin</button>
            <button className="nav_btn" onClick={routecenter}>ForCenter</button>
          </Form>
        </Navbar.Collapse>
      </Navbar>

      
      
    </>
  );
}


export default NAvbar
