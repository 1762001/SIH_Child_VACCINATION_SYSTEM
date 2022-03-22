
import React from 'react'
import { Card, Container, Form, Col, Button} from 'react-bootstrap'

function ManageRatings() {
    return (
        <>
          <Container>
            
            <Col md={11}>
           <Card bg="light" border="Secondary" text="dark">
           <Card.Header><h3>Rate your Experience</h3></Card.Header>
           <Card.Body>
           <Form>


           <Form.Group as={Col} controlId="f_name">
                            <Form.Label>Full Name</Form.Label>
                        
                            <Form.Control type="text" placeholder="Enter Full Name" />
                     </Form.Group>
                  

          <Form.Group as={Col} controlId="ratings">
          <Form.Label>Ratings By Parents</Form.Label>
          <Form.Control as="select">
          <option>select...</option>
          <option>⭐ Very Bad</option>
          <option>⭐⭐Bad</option>
          <option>⭐⭐⭐Good</option>
          <option>⭐⭐⭐⭐Very Good</option>
          <option>⭐⭐⭐⭐⭐Excellent</option>
          
          </Form.Control>

          </Form.Group>


          <Form.Group as={Col} controlId="Suggestion">
            <Form.Label>Further Query</Form.Label>
            <Form.Control as="textarea" placeholder="Enter Any Suggestion here..."></Form.Control>
          </Form.Group>

          <Button Variant="primary"> Submit</Button>


           </Form>
           </Card.Body>

            </Card>
            </Col>
            
            </Container>  
        </>
    )
}
export default ManageRatings
