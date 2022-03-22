import React, {useEffect} from 'react'
import { Button, Container, Row, Col, Card, Accordion, Table, Nav} from 'react-bootstrap'
import {connect} from 'react-redux'
import {searchCenter} from '../../_actions/center.action';
import {
  BrowserRouter as Router,
  Link,
  useLocation
} from "react-router-dom";
import email from "../../Homepage-src/img/email.jpg"
import website from "../../Homepage-src/img/website.png"
import contact from "../../Homepage-src/img/contact.png"
import NAvbar from './NAvbar';
import Footer from './Footer'
import ReactStars from "react-rating-stars-component";




function useQuery() {
  return new URLSearchParams(useLocation().search);
}


function SearchResults(props) {

  let query = useQuery();
 
     useEffect(() => {
          console.log(query.get("city"))
         props.getsearched_centers({city : query.get("city")})
     }, [])
    return (

         <>
         <NAvbar></NAvbar>      
   <div className="content-header value">
     <div className="container-fluid">
       <div className="row mb-2"></div>
       </div>
    
       <Table border="dark">
         <br></br>
     
       <div className="container-fluid col-sm-4" align="left">
         <Row> 
           
         <Accordion>
        
           <Card border="primary" text="dark">
           
           {props.center.searched_centers && props.center.searched_centers.map(center =>{
              return (
                <>
            <Card.Img variant="top" src={`${process.env.REACT_APP_SERVER_URL}${center.center_profile}`} style={{ width: "450px", height: "150px", margin : "25px"}}/>
            
            
            <Card.Header align="center"><h3>{center.name.toUpperCase()}</h3></Card.Header>
            <Nav variant="tabs" defaultActiveKey="/details">
      <Nav.Item>
        <Nav.Link href="/details">Details</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href={`/feedbackform?c_id=${center.id}`}>Write Review</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href={`/enquiryform?c_id=${center.id}`}>Send Enquiry</Nav.Link>
      </Nav.Item>
      </Nav>
            <Card.Body>         
            <Card.Title>
   <ReactStars
    count={5}
    size={55}
    edit={false}
    value={center.Stars}
    isHalf={true}
    emptyIcon={<i className="far fa-star"></i>}
    halfIcon={<i className="fa fa-star-half-alt"></i>}
    fullIcon={<i className="fa fa-star"></i>}
    activeColor="#ffd700"
  />
               </Card.Title>
            <Card.Title>Manager Name : {center.manager_name.toUpperCase()} </Card.Title> 
            <Card.Text>
              Address : {center.address} <br></br>
              Email Id <img src={email} style={{ width: "30px", height: "25px"}}></img> : {center.email_id} <br></br>
              Contact <img src={contact} style={{ width: "30px", height: "25px"}}></img> : +91 {center.phone} <br></br>
              Website <img src={website} style={{ width: "30px", height: "25px"}}></img> : {center.website} <br></br>  
              Connect with us : {center.social_media_link} <br></br> 
              
              </Card.Text>
            
            <Accordion.Toggle as={Button} variant="primary" block eventKey="0">
        More Details
      </Accordion.Toggle>
      <Accordion.Collapse eventKey="0">
        
      <Card.Body><h5>More Details</h5> <br></br>
      Timings : {center.Timings}      <br></br>
      Opening Days : {center.Opening_Days}  <br></br>
      Closing Days : {center.Closing_Days} <br></br> <br></br>
      Description : {center.description}
      </Card.Body>

    </Accordion.Collapse>
         </Card.Body>
          <Card.Header></Card.Header>   
          
              
          
          </>
            )
           
          
            })}

              </Card>
            
            </Accordion>
          
         </Row>
         
       </div>
       </Table>

       </div>
      <div className="value">
       <br></br>    
      </div>
      <Footer></Footer>
       
     

        </>
    )
}



const mapStateToProps =(state)=>{
    return {
      center : state.centerReducer
    }
  }
  
  //step 2
  const mapDispatchToProps =(dispatch)=>{
    return {
      getsearched_centers : (Center) =>dispatch(searchCenter(Center))
    }
  }
  
  //step 3
  const connectCenter = connect(mapStateToProps,mapDispatchToProps)
  
  export default connectCenter(SearchResults)
 
 
