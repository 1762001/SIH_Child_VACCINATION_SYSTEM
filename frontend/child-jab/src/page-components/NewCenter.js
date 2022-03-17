import React, {useState, useEffect} from 'react'
import { Card, Container, Row, Form, Col, Button} from 'react-bootstrap'
import { createCenter, updateCenter } from '../_actions'
import {connect} from 'react-redux'
import {
  Link, 
  useHistory
} from 'react-router-dom'


function NewCenter(props) {
  
  const history = useHistory();
  const [center, setCenter] = useState({
    center_profile : "",
    name:"",
    address:"",
    city : "",
    manager_name : "",
    email_id:"",
    phone:"",
    Timings : "",
    Opening_Days : "",
    Closing_Days : "",
    website :"",
    social_media_link :"",
    password : "",
    description:""
  

  })

  useEffect(() => {
    setCenter(props.center.selectedCenter)
}, [])

const handleChange=(e)=>{
  setCenter({
    ...center,
    [e.target.name]:e.target.value
  })
}

const handleSubmit=()=>{
  if(center.id){
    props.updateCenter(center)
  }else{
    props.createCenter(center)
  }
}


    return (
        <>
        {
          props.center.center.id>0 &&  
          history.push(`/manage-centers`)
        }
        {
          props.center.selectedCenter.affectedRows>0 && 
          history.push(`/manage-centers`)
          
        }
        {
          props.center.error
        }
         
            <Container>
               <Row>
                <Col md={11}>
             <Card border="secondary" bg="light" text="dark">
          <Card.Header><h3>Manage Centers</h3></Card.Header>
          <Card.Body>
          {/* <FileUploadCenter name="center_profile" value={center.center_profile} onChange={handleChange}></FileUploadCenter> */}
          <Form>
              <Form.Group ControlId="CName">
                <Form.Label>Center Name </Form.Label>
                <Form.Control type="text" placeholder="Enter Center Name"
                value={center.name} name="name" onChange={handleChange} />
              </Form.Group>

              <Form.Group  ControlId="CAddress">
                <Form.Label>Address </Form.Label>
                <Form.Control as="textarea" rows={2} placeholder="Enter Address" 
                value={center.address} name="address" onChange={handleChange}/>
              </Form.Group>
              
              <Form.Row>
              <Form.Group as={Col} ControlId="City">
                <Form.Label>City</Form.Label>
                <Form.Control type="text" placeholder="Enter City" 
                value={center.city} name="city" onChange={handleChange}/>
              </Form.Group>

             
              <Form.Group as={Col} ControlId="ManagerName">
                <Form.Label>Manager Name </Form.Label>
                <Form.Control type="text" placeholder="Enter Manager Name"
                value={center.manager_name} name="manager_name" onChange={handleChange} />
              </Form.Group>

              </Form.Row>

              <Form.Row>
              <Form.Group as={Col} ControlId="Emailaddress">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="xyz@gmail.com"
                value={center.email_id} name="email_id"  onChange={handleChange}/>
              </Form.Group>

              <Form.Group as={Col} ControlId="PhoneNum">
                <Form.Label>Phone Number </Form.Label>
                <Form.Control type="number" placeholder="+91 1234567890"
                value={center.phone} name="phone" onChange={handleChange} />
              </Form.Group>
              </Form.Row>

              <Form.Row>

              <Form.Group as={Col} controlId="Timings">
                        <Form.Label>Timings</Form.Label>
                        <Form.Control  name="Timings" value={center.Timings} onChange={handleChange} as="select" >
                          <option>Select...</option>
                          <option>10-AM TO 8-PM</option>
                          <option>9-AM TO 8-PM</option>
                          <option>10-AM TO 9-PM</option>
                          <option>9-AM TO 7-PM</option>
                          <option>11-AM TO 9-PM</option>
                          <option>8-AM TO 6-PM</option>
                          <option>10-AM TO 10-PM</option>
                        </Form.Control>
                      </Form.Group>

              <Form.Group as={Col} ControlId="Opening-days">
                <Form.Label>Opening Days</Form.Label>
                <Form.Control type="text" placeholder="Enter the opening days"
                value={center.Opening_Days} name="Opening_Days"  onChange={handleChange}/>
              </Form.Group>

              <Form.Group as={Col} ControlId="Closing-days">
                <Form.Label>Closing Days</Form.Label>
                <Form.Control type="text" placeholder="Enter the Closing days"
                value={center.Closing_Days} name="Closing_Days" onChange={handleChange} />
              </Form.Group>
              </Form.Row>

             <Form.Row>
              <Form.Group as={Col} ControlId="Website">
                <Form.Label>Website</Form.Label>
                <Form.Control type="text" placeholder="www.google.com"
                name="website" value={center.website} onChange={handleChange} />
              </Form.Group>

              <Form.Group as={Col} ControlId="SocialMedia">
                <Form.Label>Social Media Link</Form.Label>
                <Form.Control type="text" placeholder="www.facebook.com/xyz" 
                name="social_media_link" value={center.social_media_link} onChange={handleChange}/>
              </Form.Group>
              </Form.Row>

              <Form.Group ControlId="password">
                <Form.Label>Create Password</Form.Label>
                <Form.Control type="text" placeholder="It should be atleast of 6 characters" 
                name="password" value={center.password} onChange={handleChange}/>
              </Form.Group>
              
              <Form.Group ControlId="CDescription">
                <Form.Label>Center Description</Form.Label>
                <Form.Control as="textarea" row={5} placeholder="Enter Description"
                value={center.description} name="description" onChange={handleChange} />
              </Form.Group>

              <Button variant="danger" className="float-right"
                onClick={handleSubmit}>
                Add Center
              </Button>
             </Form>
             </Card.Body>
             </Card>
             </Col>
            </Row>
        
            </Container>


        </>
    )
}

//step 1
const mapStateToProps =(state)=>{
  return {
    center : state.centerReducer
  }
}

//step 2
const mapDispatchToProps =(dispatch)=>{
  return {
    createCenter : (center) =>dispatch(createCenter(center)),
    updateCenter : (center) => dispatch(updateCenter(center))
  }
}

//step 3
const connectCenter = connect(mapStateToProps,mapDispatchToProps)

export default connectCenter(NewCenter)
