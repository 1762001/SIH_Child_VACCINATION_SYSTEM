import React, {useState,useEffect} from 'react'
import NAvbar from '../HomePage-Components/NAvbar'
import {Row, Col, Container, Button, Form, Card} from 'react-bootstrap'
import {connect} from 'react-redux'
import {createFeedback, updateFeedback} from '../../_actions/feedback.action'
import {
    useHistory , useLocation
} from 'react-router-dom'
import ReactStars from "react-rating-stars-component";
import Footer from '../HomePage-Components/Footer'

function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

function FeedbackForm(props) {

    let query = useQuery();

    const ratingChanged = (NewRatings) => {
        console.log(NewRatings);
        setFeedback({...feedback,Stars:NewRatings})
            
      };

    const history = useHistory();
    const [feedback, setFeedback] = useState({
        parent_id:"",
        feedback :"",
        ratings :"",
        Stars : 0.0
    })

    useEffect(() => {
        setFeedback(props.feedback.selectedFeedback) 
        const center_id= query.get("c_id")
        if(!center_id){
            history.push(`/child-care`)
        }  
    }, [])

    const handleChange =(e)=>{
        console.log(e)
        setFeedback({
            ...feedback,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit =(e)=>{
        e.preventDefault()
        let parentsDetails =JSON.parse(sessionStorage.getItem("auth"))
        let parentId = parentsDetails.id
        feedback.parent_id = parentId

        feedback.center_id= query.get("c_id")
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
          <NAvbar></NAvbar>
          <div className="content-header value">
        <div className="container-fluid container_first">
        <div className="row md-2"></div>
      </div>
    
      {
           props.feedback.feedback.id>0 &&
           history.push(`/testimonials`)
      }
      {
          props.feedback.error
      }
      <Container>
            <Card border="success" bg="light" text="dark">
        <Card.Header align="center">
              <h3>Feedback Form</h3>

        </Card.Header>
        <Card.Body>
                <Form> 
                     <Form.Group as={Col} controlId="feedback">
                            <Form.Label>Write Review Here...</Form.Label>  
                            <Form.Control as="textarea" placeholder=" Give feedback here... "
                            name="feedback" value={feedback.feedback} onChange={handleChange} />
                     </Form.Group>

                     <Form.Group as={Col} controlId="ratings">
                            <Form.Label>Express Your Emotions...</Form.Label>  
                            <Form.Control name="ratings" value={feedback.ratings} onChange={handleChange} as="select">
                            <option>select...</option>
                            <option>Very Bad</option>
                            <option>Bad</option>
                            <option>Good</option>
                            <option>Very Good</option>
                            <option>Excellent</option>
                            </Form.Control> 
                     </Form.Group>

       

                    <Form.Group as={Col} controlId="ratings">
                    <Form.Label>Select Stars</Form.Label>
                
                      
   <ReactStars
    count={5}
    onChange={ratingChanged}
    size={55}
    isHalf={true}
    emptyIcon={<i className="far fa-star"></i>}
    halfIcon={<i className="fa fa-star-half-alt"></i>}
    fullIcon={<i className="fa fa-star"></i>}
    activeColor="#ffd700"
  />
  
  </Form.Group>

        
     <div align="center">
        <button className="nav_btn" onClick={handleSubmit}>Submit Feedback</button>
       
        </div>
                                      
                
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


export default connectFeedback(FeedbackForm)

