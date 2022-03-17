import React, {useState, useEffect} from 'react'
import { Card,Container,Form, Col, Button} from 'react-bootstrap'
import {connect} from 'react-redux'
import {createCenterFacility, updateCenterFacility} from '../_actions'
import {
    Link, useHistory
} from 'react-router-dom'

function NewCenterFacilities(props) {
    //console.log(props.centerfacility)
    const history = useHistory();
    const [centerfacility, setCenterFacility] = useState ({
        center_id : "",
        facility : "",
        description : ""

    })

    useEffect(() => {
        setCenterFacility(props.centerfacility.selectedCenterFacility)
        
    }, [])

    const handleChange = (e)=>{
        setCenterFacility ({
            ...centerfacility,
            [e.target.name]:e.target.value
        })
    }
  
    const handleSubmit = ()=>{
        let centerDetails=JSON.parse(sessionStorage.getItem("auth"))
        let centerId=centerDetails.id
        centerfacility.center_id=centerId
        if(centerfacility.id){
            props.updateCenterFacility(centerfacility)
        }
        else{
            props.createCenterFacility(centerfacility)
        }
    }

    return (
        <>
        {
            props.centerfacility.centerfacility.id>0 && 
            history.push(`/manage-facility`)
        }
        {
            props.centerfacility.selectedCenterFacility.affectedRows>0 &&
            history.push(`/manage-facility`)
        }
        {
            props.centerfacility.error
        }
        {/* <p>{JSON.stringify(centerfacility)}</p> */}
         <Container>
                  <Col md={10}>
                  <Card bg="light">
                   <Card.Header>Facilities</Card.Header>
                   <Card.Body>
                  
              <Form>
              
              <Form.Group as={Col} ControlId="CFacility">
              <Form.Label>Facility</Form.Label>
              <Form.Control type="text" placeholder="Enter Facility"
              name="facility" value={centerfacility.facility} onChange={handleChange}/>
              </Form.Group>

              <Form.Group as={Col} ControlId="Cdesp">
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" placeholder="Description"
              name="description" value={centerfacility.description} onChange={handleChange}/>
              </Form.Group>

              <Button variant="danger" className="float-right"
              onClick={handleSubmit}>
                  Add Facility
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
    return {
      centerfacility : state.centerfacilityReducer
    }
  }
  
  //step 2
  const mapDispatchToProps =(dispatch)=>{
    return {
      createCenterFacility : (centerfacility) =>dispatch(createCenterFacility(centerfacility)),
      updateCenterFacility : (centerfacility) => dispatch(updateCenterFacility(centerfacility))
    }
  }
  
  //step 3
  const connectCenterFacility = connect(mapStateToProps,mapDispatchToProps)
  
  export default connectCenterFacility(NewCenterFacilities)

