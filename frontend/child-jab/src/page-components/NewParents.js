import React, {useState, useEffect} from 'react'
import {Card, Container,Form, Col, Button } from 'react-bootstrap'
import { createParents, updateParents } from '../_actions'
import {connect} from 'react-redux'
import {
  useHistory
} from 'react-router-dom'


function NewParents(props) {
    //console.log(props.user)
    const history = useHistory();
    
    const [parents, setParents] = useState({
      // center_id : center.id,
        center_id : "",
        firstname :"", 
        lastname :"", 
        email :"", 
        contact :"", 
        ID_proof :"",
        ID_number :"",
        address : "",
        country : "",
        state : "",
        city_or_village : "",
        zip_code : "",
        profession :"",
        username : "",
        password : "" 
    })
    //console.log(parents)
    useEffect(() => {
      setParents(props.parents.selectedParents)
      
    }, [])

    const handleChange=(e)=>{
        setParents ({
            ...parents,
            [e.target.name] : e.target.value
        })
    }

   const handleSubmit = ()=>{
    let centerDetails=JSON.parse(sessionStorage.getItem("auth"))
    let centerId=centerDetails.id
    parents.center_id=centerId
    console.log(parents)
     if(parents.id){
       props.updateParents(parents)
     }
     else{
       props.createParents(parents)
     }
   }

    return (
        <>
        {
          props.parents.parents.id>0 &&
          history.push(`/manage-parents`)
        }
        {
          props.parents.selectedParents.affectedRows>0 &&
          history.push(`/manage-parents`)
        }
        {
          props.parents.error
        }
          {/* <p> {JSON.stringify(parents)}</p> */}
          <Container>
            <Col md={11}>
      <Card border="secondary" bg="light" text="dark">
        <Card.Header>
              <h3>Manage Parents</h3>

        </Card.Header>
        <Card.Body>
              <Form>
                          
                    <Form.Row>
                      <Form.Group as={Col} controlId="f_name">
                        <Form.Label>First Name</Form.Label>
                        
                        <Form.Control type="text" placeholder="Enter your first name" 
                        name="firstname" value={parents.firstname} onChange={handleChange}/>
                      </Form.Group>

                      <Form.Group as={Col} controlId="l_name">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your last name" 
                        name="lastname" value={parents.lastname} onChange={handleChange}/>
                      </Form.Group>

                      {/* <Form.Group as={Col} controlId="child_name">
                        <Form.Label>Child Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Child's Name"
                        name="child_name" value={parents.child_name} onChange={handleChange} />
                      </Form.Group> */}
                    </Form.Row>

                    <Form.Row>
                    <Form.Group as={Col} ControlId="Emailaddress">
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control type="email" placeholder="xyz@gmail.com"
                       value={parents.email} name="email"  onChange={handleChange}/>
                       </Form.Group>

                       <Form.Group as={Col} ControlId="profession">
                      <Form.Label>Profession</Form.Label>
                      <Form.Control type="text" placeholder="Enter your Profession"
                       value={parents.profession} name="profession"  onChange={handleChange}/>
                       </Form.Group>
                       </Form.Row>
                      <Form.Group controlId="c_detail">
                       <Form.Label>Contact Details</Form.Label>
                       <Form.Control type="number" placeholder="+91 1234567890" 
                       name="contact" value={parents.contact} onChange={handleChange}/>
                      </Form.Group>
                      
                      

                    <Form.Row>
                      <Form.Group as={Col} controlId="idproof">
                        <Form.Label>ID Proof</Form.Label>
                        <Form.Control  name="ID_proof" value={parents.ID_proof} onChange={handleChange} as="select" >
                          <option>Select...</option>
                          <option>AADHAR CARD</option>
                          <option>RATION CARD</option>
                          <option>PAN CARD</option> 
                          <option>PASSPORT</option>
                          <option>ELECTION CARD</option>
                        </Form.Control>
                      </Form.Group>

                      <Form.Group as={Col} controlId="id_input">
                      <Form.Label>ID No.</Form.Label>
                      <Form.Control type="text" placeholder="Enter ID Number" 
                      name="ID_number" value={parents.ID_number} onChange={handleChange} />
                    </Form.Group>

                    </Form.Row>

                    <Form.Group  controlId="add_detail">
                      <Form.Label>Address</Form.Label>
                      <Form.Control as="textarea" rows={2} placeholder="Enter Address here" 
                      name="address" value={parents.address} onChange={handleChange}/>
                    </Form.Group>

                    <Form.Row>

                      <Form.Group as={Col} controlId="Country_detail">
                        <Form.Label>Country</Form.Label>
                        <Form.Control  name="country" value={parents.country} onChange={handleChange} as="select" >
                          <option>Select...</option>
                          <option>India</option>
                          <option>USA</option>
                          <option>UK</option>
                          <option>Canada</option>
                        </Form.Control>
                      </Form.Group>

                      <Form.Group as={Col} controlId="State_detail">
                        <Form.Label>State</Form.Label>
                        <Form.Control  name="state" value={parents.state} onChange={handleChange} as="select">
                          <option>Select...</option>
                          <option>Andaman and Nicobar Islands</option>
                          <option>Andhra Pradesh</option>
                          <option>Arunachal Pradesh</option>
                          <option>Assam</option>
                          <option>Bihar</option>
                          <option>Chandigarh</option>
                          <option>Dadra and Nagar Haveli</option>
                          <option>Daman and Diu</option>
                          <option>Delhi</option>
                          <option>Goa</option>
                          <option>Gujarat</option>
                          <option>Haryana</option>
                          <option>Himachal Pradesh</option>
                          <option>Jammu and Kashmir</option>
                          <option>Jharkhand</option>
                          <option>Karnataka</option>
                          <option>Kerala</option>
                          <option>Lakshadweep</option>
                          <option>Madhya Pradesh</option>
                          <option>Maharashtra</option>
                          <option>Manipur</option>
                          <option>Meghalaya</option>
                          <option>Mizoram</option>
                          <option>Nagaland</option>
                          <option>Orissa</option>
                          <option>Pondicherry</option>
                          <option>Punjab</option>
                          <option>Rajasthan</option>
                          <option>Sikkim</option>
                        </Form.Control>  
                       
                      </Form.Group>

                      

                      <Form.Group as={Col} controlId="city_detail">
                        <Form.Label>City/Village</Form.Label>
                        <Form.Control type="text" placeholder="Enter City/Village"
                        name="city_or_village" value={parents.city_or_village} onChange={handleChange}>
                          
                        </Form.Control>
                      </Form.Group>

                      <Form.Group as={Col} controlId="zip_detail">
                        <Form.Label>Zip Code</Form.Label>
                        <Form.Control type="text" placeholder="6-digit only"
                        name="zip_code" value={parents.zip_code} onChange={handleChange}/>
                      </Form.Group>
                    </Form.Row>

                    

                    <Button variant="danger" className="float-right"
                    onClick={handleSubmit}>
                      Add Details
                    </Button>
               </Form>
        </Card.Body>
      </Card>
      </Col>

    </Container>
        </>
    )
}

//step 1
const mapStateToProps =(state)=>{
  return{
    parents : state.parentsReducer
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
      createParents : (parents) => {
        console.log(parents)
        dispatch(createParents(parents))
      },
      updateParents : (parents)=> dispatch(updateParents(parents))
  }
}

const connectParents = connect(mapStateToProps,mapDispatchToProps)



export default connectParents(NewParents)
