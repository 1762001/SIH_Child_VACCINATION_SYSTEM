import React, {useEffect} from 'react'
import NAvbar from '../HomePage-Components/NAvbar'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './Testimonials.css'
import Footer from "../HomePage-Components/Footer";
import review from '../img/write-review.png'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import {getFeedback} from '../../_actions/feedback.action'

function Testimonials(props) {

  useEffect(() => {
    let user = sessionStorage.getItem("user")
    let centerId=-1
    if(user==="center"){
      let centerDetails = JSON.parse(sessionStorage.getItem("auth"))
      centerId=centerDetails.id
    }
    props.getallFeedback(centerId)
  }, [])

    return (
        <>
          <NAvbar></NAvbar> 
          <div className="content-header">
              <div className="container-fluid">
                  <div className="row mb-2">
                 </div>
            </div>
        </div>
         
          <div>
            <Row>
              <Col>
              <span className="block-example border border-dark">
                <div className="container_login">
              <h5>Hello Parents ! Give your valuable feedback here...</h5> &nbsp;&nbsp;<Link to="/search-results">Write Review</Link>
  
              </div> 
                <div className="container_login">
               
                <img src={review}></img>
                </div>
                
             
              </span>
              </Col>
            </Row>
          </div>

          <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
          {props.feedback.allFeedbacks && props.feedback.allFeedbacks.map(feedback =>{
             return (
               <>
         
        <div>
          <img src={`${process.env.REACT_APP_SERVER_URL}${feedback.parents_profile}`} />
          <div className="myCarousel">
            <h3>{feedback.full_name}</h3>
            <h4>{feedback.description}</h4>
            <p>
            {feedback.feedback}
            </p>
          </div>
        </div>
        </>
        )
      })}
        
      </Carousel>
     
      
      <div className="container_first">
          <br></br>
      <Footer></Footer>
      </div>
        </>
    )
}

const mapStateToProps = (state)=>{
  return{
      feedback : state.feedbackReducer
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
      getallFeedback : (centerId)=> dispatch(getFeedback(centerId)),
  }
}

const connectFeedback = connect(mapStateToProps,mapDispatchToProps)

export default connectFeedback(Testimonials)

