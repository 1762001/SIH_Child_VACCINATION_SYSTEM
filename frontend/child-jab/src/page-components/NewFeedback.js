import React, {useState,useEffect} from 'react'
import {Card, Container, Form, Col, Button} from 'react-bootstrap'
import {connect} from 'react-redux'
import {createFeedback, updateFeedback} from '../_actions'
import {
    useHistory
} from 'react-router-dom'


function NewFeedback(props) {
    //console.log(props.feedback)
    const history = useHistory();
    const [feedback, setFeedback] = useState({
        parent_id:"",
        feedback :"",
        ratings :""
    })

    useEffect(() => {
        setFeedback(props.feedback.selectedFeedback)   
    }, [])

    const handleChange =(e)=>{
        setFeedback({
            ...feedback,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit =()=>{
        let parentsDetails =JSON.parse(sessionStorage.getItem("auth"))
        let parentId = parentsDetails.id
        feedback.parent_id = parentId
        console.log(feedback)
        if(feedback.id){
            props.updateFeedback(feedback)
        }
        else{
            props.createFeedback(feedback)
        }
    }

    return (
        <>
        {
            props.feedback.feedback.id>0 &&
             history.push(`/manage-feedback`)
        }
        {
            props.feedback.selectedFeedback.affectedRows>0 &&
            history.push(`/manage-feedback`)
        }
        {
            props.feedback.error
        }
        
         <Container>
            <Card border="success" bg="light" text="dark">
        <Card.Header>
              <h3>Feedback Form</h3>

        </Card.Header>
        <Card.Body>
                <Form>
                     
                     <Form.Group as={Col} controlId="feedback">
                            <Form.Label>FeedBack By Parents</Form.Label>
                        
                            <Form.Control as="textarea" placeholder=" Give feedback here... "
                            name="feedback" value={feedback.feedback} onChange={handleChange} />
                     </Form.Group>

                    <Form.Group as={Col} controlId="ratings">
                    <Form.Label>Express your Emotion</Form.Label>
                    <Form.Control  name="ratings" value={feedback.ratings} onChange={handleChange} as="select">
                    <option>select...</option>
                    <option>Very Bad</option>
                    <option>Bad</option>
                    <option>Good</option>
                    <option>Very Good</option>
                    <option>Excellent</option>
                    
                    </Form.Control>

                    </Form.Group>

                     
                     <Button variant="success"
                     onClick={handleSubmit}>
                         Submit FeedBack</Button>
                     
                
               </Form>
        </Card.Body>
      </Card>
        </Container> 
        </>
    )
}

const mapStateToProps = (state)=>{
    return {
        feedback : state.feedbackReducer
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        createFeedback : (feedback)=> dispatch(createFeedback(feedback)),
        updateFeedback : (feedback)=> dispatch(updateFeedback(feedback))
    }
}

const connectFeedback = connect(mapStateToProps, mapDispatchToProps)


export default connectFeedback(NewFeedback)






