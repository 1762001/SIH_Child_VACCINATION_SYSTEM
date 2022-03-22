import React,  {useState,useEffect} from 'react'
import {Card, Container,Form, Col, Button } from 'react-bootstrap'
import {connect} from 'react-redux'
import { createChildren, createParents, updateParents, updateChildren } from '../../_actions'
import {
     useHistory, useLocation
} from 'react-router-dom'
import NAvbar from '../HomePage-Components/NAvbar'
import Footer from '../HomePage-Components/Footer'
import FileUploadParents from '../../components/FileUploadParents'

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function ParentsForm(props) {

    let query = useQuery();

    const history = useHistory();

    const [children, setChildren] = useState({
        center_id : "",
        parent_id : "",
        firstname : "",
        middlename : "",
        lastname :"",
        age : "",
         
    })

    const [parents, setParents] = useState ({
        parents_profile : "",
        description : "",
        address : "",
        city_or_village : "",
        contact :"",
        email :"",
        full_name : "",
        username : "",
        ID_proof :"",
        ID_number :"",
        profession :"",
        country : "",
        state : "",
        zip_code : "",
        password : ""
      
    })

   useEffect(() => {
     setChildren(props.children.selectedChildren)
   }, [])

    const handleChange=(e)=>{
        setChildren ({
            ...children,
            [e.target.name]:e.target.value
        })
    }

    const handleChange2=(e)=>{
      setParents ({
          ...parents,
          [e.target.name]:e.target.value
      })
  }

    const handleSubmit = (e)=>{

        e.preventDefault()

        let parentsDetails=JSON.parse(sessionStorage.getItem("auth"))
        let parentId=parentsDetails.id           
        children.parent_id=parentId 
        
        let parents_Details = JSON.parse(sessionStorage.getItem("auth"))
        let parent_Id=parents_Details.id
        parents.id=parent_Id

        children.center_id= query.get("c_id")
        parents.center_id = query.get("c_id")
  
      if(children.id){
      props.updateChildren(children)
      props.updateParents(parents)
      }
      else{
        props.createChildren(children)
        props.updateParents(parents)
      }
    } 

    return (
        <>
        <NAvbar></NAvbar>
          <div className="content-header value">
        <div className="container-fluid container_first">
        <div className="row md-2"></div>
      </div>
      {
          props.children.children.id>0 &&
          history.push(`/child-care`) 
        }
        {
            props.children.error
        }

      <Container>
            
      <Card border="secondary" bg="light" text="dark">
        <Card.Header>
              <h3>Enter your Details</h3>

        </Card.Header>
        <Card.Body>
        <FileUploadParents name="parents_profile" value={parents.parents_profile} onChange={handleChange2}></FileUploadParents>
              <Form> 
              <Form.Row>
              <Form.Group as ={Col} controlId="f_name">
               <Form.Label>Child First Name</Form.Label>
               <Form.Control type="text" placeholder="Enter First Name" 
                name="firstname" value={children.firstname} onChange={handleChange}/>
             </Form.Group> 
             <Form.Group as ={Col} controlId="m_name">
               <Form.Label>Middle Name</Form.Label>
               <Form.Control type="text" placeholder="Enter Middle Name" 
               name="middlename" value={children.middlename} onChange={handleChange}/>
             </Form.Group>
             <Form.Group as ={Col} controlId="l_name">
               <Form.Label>Last Name</Form.Label>
               <Form.Control type="text" placeholder="Enter Last Name" 
                name="lastname" value={children.lastname} onChange={handleChange}/>
             </Form.Group>  
               
              </Form.Row>

              <Form.Group  controlId="add_detail">
               <Form.Label>Address</Form.Label>
               <Form.Control as="textarea" rows={2} placeholder="Enter Address here" 
               name="address" value={parents.address} onChange={handleChange2}/>
                </Form.Group>

              <Form.Row>
             <Form.Group as ={Col} controlId="age">
               <Form.Label>Age</Form.Label>
               <Form.Control type="number" placeholder="Enter Age" 
                 value={children.age} name="age" onChange={handleChange}/>
             </Form.Group> 

             <Form.Group as={Col} controlId="city_detail">
              <Form.Label>City/Village</Form.Label>
              <Form.Control type="text" placeholder="Enter City/Village"
              name="city_or_village" value={parents.city_or_village} onChange={handleChange2}>
              </Form.Control>
              </Form.Group>
              </Form.Row>
   

                      <Form.Row>
                        
                      <Form.Group as={Col} controlId="c_detail">
                       <Form.Label>Contact Details</Form.Label>
                       <Form.Control type="number" placeholder="+91 1234567890" 
                       name="contact" value={parents.contact} onChange={handleChange2}/>
                      </Form.Group>
                      

                      
                      <Form.Group as={Col} ControlId="Emailaddress">
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control type="email" placeholder="xyz@gmail.com"
                       value={parents.email} name="email"  onChange={handleChange2}/>
                       </Form.Group>
                      
                       </Form.Row>

             <Form.Row>
             <Form.Group as={Col} controlId="full_name">
             <Form.Label>Parents Full Name</Form.Label>
             <Form.Control type="text" placeholder="Enter your full name" 
             name="full_name" value={parents.full_name} onChange={handleChange2}/>
              </Form.Group> 

              <Form.Group as={Col} controlId="user_name">
             <Form.Label>Parents UserName</Form.Label>
             <Form.Control type="text" placeholder="Enter your Username" 
             name="username" value={parents.username} onChange={handleChange2}/>
              </Form.Group>
              </Form.Row>

              <Form.Row>
                      <Form.Group as={Col} controlId="idproof">
                        <Form.Label>ID Proof</Form.Label>
                        <Form.Control  name="ID_proof" value={parents.ID_proof} onChange={handleChange2} as="select" >
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
                      name="ID_number" value={parents.ID_number} onChange={handleChange2} />
                    </Form.Group>

                    </Form.Row>


              <Form.Row>
                       <Form.Group as={Col} ControlId="profession">
                      <Form.Label>Profession</Form.Label>
                      <Form.Control type="text" placeholder="Enter your Profession"
                       value={parents.profession} name="profession"  onChange={handleChange2}/>
                       </Form.Group>
                       </Form.Row>

                    <Form.Row>
                      <Form.Group as={Col} controlId="Country_detail">
                        <Form.Label>Country</Form.Label>
                        <Form.Control  name="country" value={parents.country} onChange={handleChange2} as="select" >
                          <option>Select...</option>
                          <option>India</option>
                          <option>USA</option>
                          <option>UK</option>
                          <option>Canada</option>
                        </Form.Control>
                      </Form.Group>

                      <Form.Group as={Col} controlId="State_detail">
                        <Form.Label>State</Form.Label>
                        <Form.Control  name="state" value={parents.state} onChange={handleChange2} as="select">
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

                      <Form.Group as={Col} controlId="zip_detail">
                        <Form.Label>Zip Code</Form.Label>
                        <Form.Control type="text" placeholder="6-digit only"
                        name="zip_code" value={parents.zip_code} onChange={handleChange2}/>
                      </Form.Group>
                    </Form.Row>

             <Button variant="danger" className="float-right"
             onClick={handleSubmit}>
                Submit
              </Button>

              </Form>

              </Card.Body>
      </Card>
     

    </Container>
 
        <br></br>
        </div>
        <Footer></Footer> 
        </>
    )
}

const mapStateToProps =(state)=>{
    return {
      children : state.childrenReducer,
      parents : state.parentsReducer
    }
  }
  
  //step 2
  const mapDispatchToProps =(dispatch)=>{
    return {
      createChildren : (children) =>dispatch(createChildren(children)),
      createParents : (parents)=>dispatch(createParents(parents)),
      updateChildren : (children) =>dispatch(updateChildren(children)),
      updateParents : (parents) =>dispatch(updateParents(parents))
    }
  }

const connectChildren = connect(mapStateToProps,mapDispatchToProps)

export default connectChildren(ParentsForm)
